<script setup lang="ts">
/**
 * GridLayout 组件
 * 提供网格布局的拖拽、缩放、响应式断点切换及自动高度计算。
 * 主要功能：
 * 1. 初始化并校验传入布局数据 (validateLayout)
 * 2. 监听容器尺寸变化与窗口宽度变化，触发响应式布局重算 (responsiveGridLayout)
 * 3. 管理 GridItem 子项的拖拽与缩放事件占位显示 (state.placeholder)
 * 4. 根据 verticalCompact 规则压缩布局防止空洞 (compact)
 * 5. 在 preventCollision 下避让冲突，或计算最合适的尺寸调整占位
 */

import {
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'

import GridItem from './grid-item.vue'
import { useResize } from '@vexip-ui/hooks'
import { createEventEmitter, debounce, isNull } from '@vexip-ui/utils'
import {
  EMITTER_KEY,
  LAYOUT_KEY,
  bottom,
  cloneLayout,
  compact,
  getAllCollisions,
  getLayoutItem,
  moveElement,
  validateLayout,
} from '../helpers/common'
import {
  findOrGenerateResponsiveLayout,
  getBreakpointFromWidth,
  getColsFromBreakpoint,
} from '../helpers/responsive'

import type { Breakpoint, Layout, LayoutInstance } from '../helpers/types'
import type { GridLayoutProps } from './types'

// Props：控制布局行为的核心参数，含响应式断点、拖拽/缩放开关、压缩策略等
const props = withDefaults(defineProps<GridLayoutProps>(), {
  autoSize: true, // 是否根据内容自动计算容器高度
  colNum: 12, // 基础列数（非响应式下使用）
  rowHeight: 150, // 每行像素高度用于换算 item 像素尺寸
  maxRows: Infinity, // 最大允许行数限制网格高度
  margin: () => [10, 10], // 每个项的水平/垂直间距 [x, y]
  isDraggable: true, // 全局是否可拖拽
  isResizable: true, // 全局是否可缩放
  isMirrored: false, // 是否启用镜像模式（影响 RTL 渲染方向）
  isBounded: false, // 是否限制在容器内部边界
  useCssTransforms: true, // 是否使用 transform 定位（性能优化）
  verticalCompact: true, // 是否启用垂直压缩（移除上方空隙）
  restoreOnDrag: false, // 拖拽时是否使用拖拽前的紧凑参考进行还原
  responsive: false, // 是否启用断点布局切换
  responsiveLayouts: () => ({}), // 自定义初始各断点布局
  transformScale: 1, // 坐标与尺寸换算缩放比
  breakpoints: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }), // 断点宽度映射
  cols: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }), // 各断点对应列数
  preventCollision: false, // 是否禁止碰撞（发生碰撞时不允许进入）
  useStyleCursor: true, // 是否使用内联光标样式指示交互
})

const emit = defineEmits([
  'layout-before-mount',
  'layout-mounted',
  'layout-updated',
  'breakpoint-changed',
  'update:layout',
  'layout-ready',
])

const state = reactive({
  /**
   * state：运行时状态记录，包含尺寸、占位、断点缓存与原始布局备份
   * width: 容器当前宽度（用于断点判断）
   * mergedStyle: 传递到根节点的样式对象（主要包含动态高度）
   * lastLayoutLength: 上次布局项数量用于监测增删
   * isDragging: 是否当前存在拖拽或缩放占位显示
   * placeholder: 拖拽/缩放过程中的可视占位项（不参与布局压缩）
   * layouts: 响应式断点对应的布局缓存集合
   * lastBreakpoint: 上一次生效的断点名称（用于比较是否切换）
   * originalLayout: 初始布局副本（响应式回退时需要）
   */
  width: -1,
  mergedStyle: {},
  lastLayoutLength: 0,
  isDragging: false,
  placeholder: {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    i: '' as number | string,
  },
  layouts: {} as Record<Breakpoint, Layout>, // array to store all layouts from different breakpoints
  lastBreakpoint: null as Breakpoint | null, // store last active breakpoint
  originalLayout: null! as Layout, // store original Layout
})

const itemInstances = new Map<number | string, any>()

const currentLayout = ref(props.layout)
const wrapper = ref<HTMLElement>()

const { observeResize, unobserveResize } = useResize()
const emitter = createEventEmitter()

emitter.on('resizeEvent', resizeEventHandler)
emitter.on('dragEvent', dragEventHandler)

/**
 * onBeforeMount：初始阶段，仅向外部派发 layout-before-mount 事件。
 * 目的：提供一个在布局校验与尺寸计算前的时机，便于父级做预加载/骨架处理。
 * 特点：不访问 DOM，不做压缩与响应式切换，保证轻量与安全。
 */
onBeforeMount(() => {
  emit('layout-before-mount', currentLayout.value)
})

/**
 * onMounted：组件完成挂载后的核心初始化流程（双层 nextTick 保证 DOM 与数据稳定）。
 * 步骤：
 * 1) 立即 emit(layout-mounted) 通知外部已挂载。
 * 2) 第一次 nextTick：validateLayout 校验传入布局并保存 originalLayout 副本。
 * 3) 第二次 nextTick：
 *    - initResponsiveFeatures 初始化响应式断点缓存
 *    - observeResize 注册容器尺寸监听并防抖处理
 *    - compact 根据 verticalCompact 压缩布局防空洞
 *    - emit(layout-updated) 广播规范化后的布局
 *    - updateHeight 计算自适应高度
 *    - onWindowResize 主动获取初始 width 并触发子项位置换算
 * 设计：分层 nextTick 避免在未稳定的 DOM 状态下计算尺寸，确保子项与外部监听拿到最终可靠的布局。
 */
onMounted(() => {
  emit('layout-mounted', currentLayout.value)

  nextTick(() => {
    validateLayout(currentLayout.value)

    state.originalLayout = currentLayout.value

    nextTick(() => {
      initResponsiveFeatures()
      wrapper.value && observeResize(wrapper.value, debounce(onWindowResize, 16))
      compact(currentLayout.value, props.verticalCompact)
      emit('layout-updated', currentLayout.value)
      updateHeight()
      onWindowResize()
    })
  })
})

/**
 * onBeforeUnmount：销毁前清理资源。
 * 内容：
 * 1) emitter.clearAll() 移除所有事件监听，防止异步残留调用。
 * 2) unobserveResize 取消 ResizeObserver，释放浏览器观察资源。
 * 不再：广播任何布局事件或修改内部状态，组件即将销毁无需继续同步。
 */
onBeforeUnmount(() => {
  emitter.clearAll()
  wrapper.value && unobserveResize(wrapper.value)
})

/**
 * resizeEventHandler
 * 转发子项触发的缩放阶段事件到统一的 resizeEvent 逻辑。
 * @param eventType 阶段：resizestart | resizemove | resizeend
 * @param i 项 id
 * @param x 新 x
 * @param y 新 y
 * @param h 新 h
 * @param w 新 w
 */
function resizeEventHandler(
  eventType: string,
  i: number | string,
  x: number,
  y: number,
  h: number,
  w: number,
) {
  resizeEvent(eventType, i, x, y, h, w)
}

/**
 * dragEventHandler
 * 转发子项触发的拖拽阶段事件到统一的 dragEvent 逻辑。
 * @param eventType 阶段：dragstart | dragmove | dragend
 * @param i 项 id
 * @param x 新 x
 * @param y 新 y
 * @param h 当前高度 h
 * @param w 当前宽度 w
 */
function dragEventHandler(
  eventType: string,
  i: number | string,
  x: number,
  y: number,
  h: number,
  w: number,
) {
  dragEvent(eventType, i, x, y, h, w)
}

// 监听容器宽度变化：
// 1. 广播 updateWidth 供子项重新计算像素定位；
// 2. 首次从 -1 转为有效值时触发 layout-ready，保证子项尺寸已稳定；
// 3. 随后更新容器高度（autoSize）。
watch(
  () => state.width,
  (newVal, oldVal) => {
    nextTick(() => {
      emitter.emit('updateWidth', newVal)
      if (oldVal === -1) {
        /*
        oldVal === -1 代表 width 之前从未被设置：
        仅在组件挂载完成且首次 onWindowResize 修改 width 后出现。
        此时 GridItem 已完成尺寸初始化，可以安全地派发 layout-ready 事件。

        之所以放在 nextTick 中触发，是为了确保上一行触发的 updateWidth
        已经传递并作用到子组件，使其计算出的最终尺寸稳定，
        然后再触发：
        - layout-ready（当前 GridLayout 就绪）
        - item-layout-ready（各 GridItem 就绪，若外部有监听）

        这样可保证外部监听器读取到的尺寸数据是可靠且最终的。
        */
        nextTick(() => {
          emit('layout-ready', currentLayout.value)
        })
      }
      updateHeight()
    })
  },
)
// 监听外部传入 layout 引用或长度变化：更新 currentLayout 并执行 layoutUpdate（校验新增/删除、压缩与事件广播）。
watch(
  () => [props.layout, props.layout.length],
  () => {
    currentLayout.value = props.layout
    layoutUpdate()
  },
)
// 监听列数变更：通过事件总线通知子项更新列数以便重新计算宽度和定位。
watch(
  () => props.colNum,
  val => {
    emitter.emit('setColNum', val)
  },
)
// 监听行高变更：广播给子项用于像素/网格换算更新，并影响容器动态高度。
watch(
  () => props.rowHeight,
  value => {
    emitter.emit('setRowHeight', value)
  },
)
// 监听全局可拖拽开关：同步到所有子项（未显式覆盖的情况下）。
watch(
  () => props.isDraggable,
  value => {
    emitter.emit('setDraggable', value)
  },
)
// 监听全局可缩放开关：同步到所有子项（未显式覆盖的情况下）。
watch(
  () => props.isResizable,
  value => {
    emitter.emit('setResizable', value)
  },
)
// 监听全局边界限制开关：通知子项开启/关闭 bounded 拖拽裁剪。
watch(
  () => props.isBounded,
  value => {
    emitter.emit('setBounded', value)
  },
)
// 监听缩放比变化：通知子项根据 transformScale 调整拖拽/缩放增量换算。
watch(
  () => props.transformScale,
  value => {
    emitter.emit('setTransformScale', value)
  },
)
// 监听响应式开关：关闭时恢复 originalLayout 且同步列数；无论开关变化都会触发尺寸重算 onWindowResize。
watch(
  () => props.responsive,
  value => {
    if (!value) {
      emit('update:layout', state.originalLayout)
      emitter.emit('setColNum', props.colNum)
    }
    onWindowResize()
  },
)
// 监听最大行数变更：同步到子项用于拖拽/缩放边界裁剪。
watch(
  () => props.maxRows,
  value => {
    emitter.emit('setMaxRows', value)
  },
)
// 监听外部 margin 或垂直间距变化：重新计算容器高度（autoSize）。
watch([() => props.margin, () => props.margin[1]], updateHeight)

provide(
  LAYOUT_KEY,
  reactive({
    ...toRefs(props),
    ...toRefs(state),
    increaseItem,
    decreaseItem,
  }) as LayoutInstance,
)
provide(EMITTER_KEY, emitter)

defineExpose({ state, getItem, resizeEvent, dragEvent, layoutUpdate })

/**
 * increaseItem
 * 注册一个 GridItem 实例，便于通过 id 快速检索。
 */
function increaseItem(item: any) {
  itemInstances.set(item.i, item)
}

/**
 * decreaseItem
 * 注销一个 GridItem 实例，释放引用。
 */
function decreaseItem(item: any) {
  itemInstances.delete(item.i)
}

/**
 * getItem
 * 按 id 获取已注册的 GridItem 实例。
 */
function getItem(id: number | string) {
  return itemInstances.get(id)
}

/**
 * layoutUpdate
 * 当外部传入 layout 发生增删变化时：
 * 1. 计算差异增量并更新 originalLayout
 * 2. 重新初始化响应式缓存
 * 3. 压缩并广播更新事件
 */
function layoutUpdate() {
  if (!isNull(currentLayout.value) && !isNull(state.originalLayout)) {
    if (currentLayout.value.length !== state.originalLayout.length) {
      const diff = findDifference(currentLayout.value, state.originalLayout)

      if (diff.length > 0) {
        if (currentLayout.value.length > state.originalLayout.length) {
          state.originalLayout = state.originalLayout.concat(diff)
        } else {
          const ids = new Set(diff.map(item => item.i))
          state.originalLayout = state.originalLayout.filter(item => !ids.has(item.i))
        }
      }

      state.lastLayoutLength = currentLayout.value.length
      initResponsiveFeatures()
    }

    compact(currentLayout.value, props.verticalCompact)
    emitter.emit('updateWidth', state.width)
    updateHeight()

    emit('layout-updated', currentLayout.value)
  }
}

/**
 * updateHeight
 * 基于当前布局底部坐标计算容器高度（autoSize 为 true 才生效）
 */
function updateHeight() {
  state.mergedStyle = {
    height: containerHeight(),
  }
}

/**
 * onWindowResize
 * 容器尺寸变化回调：更新 width 并广播以通知子项重新计算像素位置
 */
function onWindowResize() {
  if (wrapper.value) {
    state.width = wrapper.value.offsetWidth
  }

  emitter.emit('resizeEvent')
}

/**
 * containerHeight
 * 计算容器高度：bottom(layout) * (rowHeight + marginY) + marginY
 */
function containerHeight() {
  if (!props.autoSize) return

  const marginY = parseFloat(props.margin[1] as any)
  const containerHeight = bottom(currentLayout.value) * (props.rowHeight + marginY) + marginY + 'px'
  return containerHeight
}

let positionsBeforeDrag: Record<string, { x: number, y: number }> | undefined

/**
 * dragEvent
 * 处理 GridItem 拖拽生命周期：更新占位、调用 moveElement、按需压缩与广播。
 * 支持 restoreOnDrag 保持拖拽前紧凑参考位置。
 */
function dragEvent(
  eventName: string,
  id: number | string,
  x: number,
  y: number,
  h: number,
  w: number,
) {
  let l = getLayoutItem(currentLayout.value, id)!

  // GetLayoutItem sometimes returns null object
  if (isNull(l)) {
    l = { h: 0, w: 0, x: 0, y: 0, i: '' }
  }

  if (eventName === 'dragstart' && !props.verticalCompact) {
    positionsBeforeDrag = currentLayout.value.reduce(
      (result, { i, x, y }) => ({
        ...result,
        [i]: { x, y },
      }),
      {},
    )
  }

  if (eventName === 'dragmove' || eventName === 'dragstart') {
    state.placeholder.i = id
    state.placeholder.x = l.x
    state.placeholder.y = l.y
    state.placeholder.w = w
    state.placeholder.h = h

    nextTick(() => {
      state.isDragging = true
    })

    emitter.emit('updateWidth', state.width)
  } else {
    nextTick(() => {
      state.isDragging = false
    })
  }

  // 将元素移动到拖拽目标位置
  currentLayout.value = moveElement(currentLayout.value, l, x, y, true, props.preventCollision)

  if (props.restoreOnDrag) {
    // 不要将项目压缩得超过拖拽前布局
    // 暂时设为 static 避免其自身被压缩
    l.static = true
    compact(currentLayout.value, props.verticalCompact, positionsBeforeDrag)
    l.static = false
  } else {
    compact(currentLayout.value, props.verticalCompact)
  }

  // 由于 Vue 无法检测数组成员属性变更，需要手动触发
  emitter.emit('compact')
  updateHeight()
  if (eventName === 'dragend') {
    positionsBeforeDrag = undefined
    emit('layout-updated', currentLayout.value)
  }
}

/**
 * resizeEvent
 * 处理缩放：根据 preventCollision 判断是否需要限制占位尺寸，更新占位与压缩布局。
 */
function resizeEvent(
  eventName: string | undefined,
  id: number | string,
  x: number,
  y: number,
  h: number,
  w: number,
) {
  let l = getLayoutItem(currentLayout.value, id)!
  // getLayoutItem 有时会返回 null 占位对象
  if (isNull(l)) {
    l = { h: 0, w: 0, x: 0, y: 0, i: '' }
  }

  let hasCollisions
  if (props.preventCollision) {
    const collisions = getAllCollisions(currentLayout.value, { ...l, w, h }).filter(
      layoutItem => layoutItem.i !== l.i,
    )
    hasCollisions = collisions.length > 0

    // If we're colliding, we need adjust the placeholder.
    if (hasCollisions) {
      // adjust w && h to maximum allowed space
      let leastX = Infinity
      let leastY = Infinity
      collisions.forEach(layoutItem => {
        if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x)
        if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y)
      })

      if (Number.isFinite(leastX)) l.w = leastX - l.x
      if (Number.isFinite(leastY)) l.h = leastY - l.y
    }
  }

  if (!hasCollisions) {
    // Set new width and height.
    l.w = w
    l.h = h
  }

  if (eventName === 'resizestart' || eventName === 'resizemove') {
    state.placeholder.i = id
    state.placeholder.x = x
    state.placeholder.y = y
    state.placeholder.w = l.w
    state.placeholder.h = l.h
    nextTick(() => {
      state.isDragging = true
    })
    // this.$broadcast("updateWidth", this.width);
    emitter.emit('updateWidth', state.width)
  } else if (eventName) {
    nextTick(() => {
      state.isDragging = false
    })
  }

  if (props.responsive) responsiveGridLayout()

  compact(currentLayout.value, props.verticalCompact)
  emitter.emit('compact')
  updateHeight()

  if (eventName === 'resizeend') emit('layout-updated', currentLayout.value)
}

/**
 * responsiveGridLayout
 * 根据当前宽度计算断点并生成或提取对应布局，更新列数与触发事件。
 */
function responsiveGridLayout() {
  const newBreakpoint = getBreakpointFromWidth(props.breakpoints, state.width)

  if (newBreakpoint === state.lastBreakpoint) {
    return
  }

  const newCols = getColsFromBreakpoint(newBreakpoint, props.cols)

  // save actual layout in layouts
  if (!isNull(state.lastBreakpoint) && !state.layouts[state.lastBreakpoint]) {
    state.layouts[state.lastBreakpoint] = cloneLayout(currentLayout.value)
  }

  // Find or generate a new layout.
  const layout = findOrGenerateResponsiveLayout(
    state.originalLayout,
    state.layouts,
    props.breakpoints,
    newBreakpoint,
    state.lastBreakpoint!,
    newCols,
    props.verticalCompact,
  )

  // Store the new layout.
  state.layouts[newBreakpoint] = layout

  if (state.lastBreakpoint !== newBreakpoint) {
    emit('breakpoint-changed', newBreakpoint, layout)
  }

  currentLayout.value = layout

  // new prop sync
  emit('update:layout', layout)

  state.lastBreakpoint = newBreakpoint
  emitter.emit('setColNum', newCols)
}

/**
 * initResponsiveFeatures
 * 初始化或重置响应式布局缓存（清空并注入外部预设）。
 */
function initResponsiveFeatures() {
  // clear layouts
  state.layouts = Object.assign({} as Record<Breakpoint, Layout>, props.responsiveLayouts)
}

/**
 * findDifference
 * 计算两个布局在项标识上的差异（增删集合）。用于同步 originalLayout。
 */
function findDifference(layout: Layout, originalLayout: Layout) {
  const originalIds = new Set(originalLayout.map(item => item.i))
  const ids = new Set(layout.map(item => item.i))

  // Find values that are in result1 but not in result2
  const uniqueResultOne = layout.filter(item => !originalIds.has(item.i))

  // Find values that are in result2 but not in result1
  const uniqueResultTwo = originalLayout.filter(item => !ids.has(item.i))

  // Combine the two arrays of unique entries#
  return uniqueResultOne.concat(uniqueResultTwo)
}
</script>

<template>
  <!-- 根容器：提供动态高度与插槽渲染，若无默认插槽则按当前布局自动生成 GridItem -->
  <div ref="wrapper" class="vgl-layout" :style="state.mergedStyle">
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <GridItem v-for="item in currentLayout" :key="item.i" v-bind="item">
        <slot name="item" :item="item"></slot>
      </GridItem>
    </template>
    <!-- 占位元素：拖拽或缩放时显示，与真实项尺寸/位置同步 -->
    <GridItem
      v-show="state.isDragging"
      class="vgl-item--placeholder"
      :x="state.placeholder.x"
      :y="state.placeholder.y"
      :w="state.placeholder.w"
      :h="state.placeholder.h"
      :i="state.placeholder.i"
    ></GridItem>
  </div>
</template>
