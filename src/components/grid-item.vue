<script setup lang="ts">
/**
 * GridItem 组件（单个网格子项）
 * 职责概述：
 * 1. 接收父级 GridLayout 注入的布局环境（列数、容器宽度、行高、间距、交互开关等）并与自身 props 合并。
 * 2. 将网格坐标 (x,y,w,h) 与像素定位/尺寸互相转换：calcPosition -> 网格单位转像素；calcXY/calcWH -> 像素转网格单位。
 * 3. 管理拖拽与缩放交互（基于 interactjs），在 drag/resize 三阶段中维护临时状态并派发事件：move/moved、resize/resized。
 * 4. 支持 RTL 与镜像模式：通过 renderRtl 计算对 left/right 的差异处理，以及使用 setTransformRtl / setTopRight。
 * 5. 支持受限（bounded）拖拽：根据当前容器宽高边界裁剪拖拽结果（clamp）。
 * 6. 在外部环境变化（列数、容器宽度、行高、间距、交互开关等）时，自动重建样式（createStyle）确保表现同步。
 * 7. 对最小/最大尺寸、纵向/横向约束做统一裁剪，避免越界与非法区域。
 * 8. 通过事件总线 (emitter) 与父布局协同：监听 updateWidth/compact 等指令；向父布局广播 dragEvent/resizeEvent 阶段事件。
 */

import {
  computed,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  shallowRef,
  toRef,
  watch,
  watchEffect,
} from 'vue'

import { isNull, nextTickOnce, throttle } from '@vexip-ui/utils'
import {
  EMITTER_KEY,
  LAYOUT_KEY,
  setTopLeft,
  setTopRight,
  setTransform,
  setTransformRtl,
  useNameHelper,
} from '../helpers/common'
import { createCoreData, getControlPosition } from '../helpers/draggable'
import { getColsFromBreakpoint } from '../helpers/responsive'
import { getDocumentDir } from '../helpers/dom'

import interact from 'interactjs'

import type { GridItemProps } from './types'

const props = withDefaults(defineProps<GridItemProps>(), {
  isDraggable: undefined, // 可拖拽覆盖父级，undefined 继承父级，false 禁止拖动
  isResizable: undefined, // 可缩放覆盖父级，undefined 继承父级，false 禁止缩放
  isBounded: undefined, // 是否受容器边界限制，undefined 继承父级，true 使用 clamp 截断
  static: false, // 静态模式：禁用拖拽与缩放且不参与压缩
  minH: 1, // 最小高度(行数)
  minW: 1, // 最小宽度(列数)
  maxH: Infinity, // 最大高度(行数) Infinity 不限制
  maxW: Infinity, // 最大宽度(列数) Infinity 不限制
  dragIgnoreFrom: 'a, button', // 拖拽忽略选择器，逗号分隔
  dragAllowFrom: undefined, // 仅允许拖拽的起始选择器，设置后其它区域不可拖拽
  resizeIgnoreFrom: 'a, button', // 缩放忽略选择器
  preserveAspectRatio: false, // 是否保持宽高比
  dragOption: () => ({}), // 额外拖拽配置透传 interact.draggable
  resizeOption: () => ({}), // 额外缩放配置透传 interact.resizable
})

const emit = defineEmits(['container-resized', 'resize', 'resized', 'move', 'moved'])

const layout = inject(LAYOUT_KEY)
const emitter = inject(EMITTER_KEY)!

if (!layout) {
  throw new Error('[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.')
}

const interactObj = shallowRef<InstanceType<
  typeof import('@interactjs/types').Interactable
> | null>(null)

const state = reactive({
  cols: 1,
  containerWidth: 100,
  rowHeight: 30,
  margin: [10, 10],
  maxRows: Infinity,
  draggable: undefined as boolean | undefined,
  resizable: undefined as boolean | undefined,
  bounded: undefined as boolean | undefined,
  transformScale: 1,
  useCssTransforms: true,
  useStyleCursor: true,

  isDragging: false,
  dragging: {
    top: -1,
    left: -1,
  },
  isResizing: false,
  resizing: {
    width: -1,
    height: -1,
  },
  style: {} as Record<string, string>,
  rtl: false,
  // 新增：当前正在被缩放的边，用于视觉高亮
  activeResizeEdges: {
    top: false,
    right: false,
    bottom: false,
    left: false,
  },
  // 新增：有效的可缩放边（根据最终 resize 配置计算）
  enabledResizeEdges: {
    top: false,
    right: false,
    bottom: false,
    left: false,
  },
})

let dragEventSet = false
let resizeEventSet = false

let lastX = NaN
let lastY = NaN
let lastW = NaN
let lastH = NaN

let previousW = -1
let previousH = -1
let previousX = -1
let previousY = -1

let innerX = props.x
let innerY = props.y
let innerW = props.w
let innerH = props.h

const wrapper = ref<HTMLElement>()

const instance = reactive({
  i: toRef(props, 'i'),
  state,
  wrapper,
  calcXY,
})

/**
 * 接收父布局广播的宽度变化并更新内部 containerWidth。
 * 会间接影响列宽计算与拖拽/缩放像素换算。
 * @param width 新容器宽度（像素）
 */
function updateWidthHandler(width: number) {
  updateWidth(width)
}

/**
 * 父布局触发压缩后同步当前项样式。
 */
function compactHandler() {
  compact()
}

/**
 * 设置本项是否可拖拽（仅在未显式传入 isDraggable 时生效继承）。
 * @param isDraggable 是否可拖拽
 */
function setDraggableHandler(isDraggable: boolean) {
  if (isNull(props.isDraggable)) {
    state.draggable = isDraggable
  }
}

/**
 * 设置本项是否可缩放（仅在未显式传入 isResizable 时生效继承）。
 * @param isResizable 是否可缩放
 */
function setResizableHandler(isResizable: boolean) {
  if (isNull(props.isResizable)) {
    state.resizable = isResizable
  }
}

/**
 * 设置本项是否受容器边界限制（仅在未显式传入 isBounded 时生效继承）。
 * @param isBounded 是否受限
 */
function setBoundedHandler(isBounded: boolean) {
  if (isNull(props.isBounded)) {
    state.bounded = isBounded
  }
}

/**
 * 同步缩放比例，用于拖拽/缩放增量换算。
 * @param transformScale 缩放比
 */
function setTransformScaleHandler(transformScale: number) {
  state.transformScale = transformScale
}

/**
 * 同步行高后用于像素与网格单位之间的转换。
 * @param rowHeight 行高（像素）
 */
function setRowHeightHandler(rowHeight: number) {
  state.rowHeight = rowHeight
}

/**
 * 同步最大允许行数限制。
 * @param maxRows 最大行数
 */
function setMaxRowsHandler(maxRows: number) {
  state.maxRows = maxRows
}

/**
 * 文档方向变化（LTR/RTL）处理。
 */
function directionchangeHandler() {
  state.rtl = getDocumentDir() === 'rtl'
  compact()
}

/**
 * 更新列数并向下影响列宽计算。
 * @param colNum 新列数
 */
function setColNum(colNum: number) {
  state.cols = Math.floor(colNum)
}

layout.increaseItem(instance)

/**
 * onBeforeMount
 * 在组件挂载前读取当前文档方向（LTR/RTL），以便首帧渲染就使用正确的 rtl 标记。
 * 仅设置一次初始 state.rtl，后续方向变化由 directionchangeHandler 处理。
 */
onBeforeMount(() => {
  state.rtl = getDocumentDir() === 'rtl'
})

/**
 * onMounted
 * 完整初始化运行态：
 * 1. 根据是否启用响应式及最近断点确定初始列数 cols；
 * 2. 同步父布局提供的行高、容器宽度、间距、最大行数等基础尺寸；
 * 3. 以“局部覆盖优先”策略合并拖拽/缩放/边界/缩放比等交互配置；
 * 4. 开启 watchEffect，监听传入的 x,y,w,h 变化并重建样式；
 * 5. 绑定来自父布局的事件（updateWidth/compact/...）实现后续响应；
 * 通过这些步骤使 GridItem 在首帧后即可准确呈现，并能对后续布局/环境变化即时响应。
 */
onMounted(() => {
  if (layout.responsive && layout.lastBreakpoint) {
    state.cols = getColsFromBreakpoint(layout.lastBreakpoint, layout.cols)
  } else {
    state.cols = layout.colNum
  }
  state.rowHeight = layout.rowHeight
  state.containerWidth = layout.width !== null ? layout.width : 100
  state.margin = layout.margin !== undefined ? layout.margin.map(Number) : [10, 10]
  state.maxRows = layout.maxRows

  if (isNull(props.isDraggable)) {
    state.draggable = layout.isDraggable
  } else {
    state.draggable = props.isDraggable
  }
  if (isNull(props.isResizable)) {
    state.resizable = layout.isResizable
  } else {
    state.resizable = props.isResizable
  }
  if (isNull(props.isBounded)) {
    state.bounded = layout.isBounded
  } else {
    state.bounded = props.isBounded
  }
  state.transformScale = layout.transformScale
  state.useCssTransforms = layout.useCssTransforms
  state.useStyleCursor = layout.useStyleCursor

  watchEffect(() => {
    innerX = props.x
    innerY = props.y
    innerH = props.h
    innerW = props.w
    nextTickOnce(createStyle)
  })

  emitter.on('updateWidth', updateWidthHandler)
  emitter.on('compact', compactHandler)
  emitter.on('setDraggable', setDraggableHandler)
  emitter.on('setResizable', setResizableHandler)
  emitter.on('setBounded', setBoundedHandler)
  emitter.on('setTransformScale', setTransformScaleHandler)
  emitter.on('setRowHeight', setRowHeightHandler)
  emitter.on('setMaxRows', setMaxRowsHandler)
  emitter.on('directionchange', directionchangeHandler)
  emitter.on('setColNum', setColNum)
})

/**
 * onBeforeUnmount
 * 组件卸载前清理：
 * 1. 取消所有 emitter 事件监听，防止内存泄漏或卸载后仍触发逻辑。
 * 2. 解除 interact 实例（unset）释放其内部注册的事件与状态。
 * 3. 从父级布局注销当前项引用（layout.decreaseItem），确保后续布局计算不再包含此项。
 */
onBeforeUnmount(() => {
  emitter.off('updateWidth', updateWidthHandler)
  emitter.off('compact', compactHandler)
  emitter.off('setDraggable', setDraggableHandler)
  emitter.off('setResizable', setResizableHandler)
  emitter.off('setBounded', setBoundedHandler)
  emitter.off('setTransformScale', setTransformScaleHandler)
  emitter.off('setRowHeight', setRowHeightHandler)
  emitter.off('setMaxRows', setMaxRowsHandler)
  emitter.off('directionchange', directionchangeHandler)
  emitter.off('setColNum', setColNum)

  if (interactObj.value) {
    interactObj.value.unset()
    interactObj.value = null
  }

  layout.decreaseItem(instance)
})

defineExpose({ state, wrapper })

const isAndroid =
  typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().includes('android') : false

const resizableAndNotStatic = computed(() => state.resizable && !props.static) // 是否显示缩放手柄
const renderRtl = computed(() => (layout.isMirrored ? !state.rtl : state.rtl)) // 结合镜像与文档方向得到最终渲染方向
const draggableOrResizableAndNotStatic = computed(() => {
  return (state.draggable || state.resizable) && !props.static // 是否存在任一交互能力且非静态
})

const nh = useNameHelper('item')

const className = computed(() => {
  return {
    [nh.b()]: true,
    [nh.bm('resizable')]: resizableAndNotStatic.value, // 可缩放
    [nh.bm('static')]: props.static, // 静态锁定
    [nh.bm('resizing')]: state.isResizing, // 缩放中
    [nh.bm('dragging')]: state.isDragging, // 拖拽中
    [nh.bm('transform')]: state.useCssTransforms, // 使用 transform 布局模式
    [nh.bm('rtl')]: renderRtl.value, // RTL 渲染修饰
    [nh.bm('no-touch')]: isAndroid && draggableOrResizableAndNotStatic.value, // Android 下禁用触摸样式修饰
  }
})
const resizerClass = computed(() => {
  // return renderRtl.value ? 'vue-resizable-handle vue-rtl-resizable-handle' : 'vue-resizable-handle'
  return [nh.be('resizer'), renderRtl.value && nh.bem('resizer', 'rtl')].filter(Boolean)
})

// 智能检测：若用户在 resizeOption 中自定义了 edges（任意形式），则认为使用“边缘/自定义手柄”模式，隐藏默认单一手柄 span
const userCustomEdges = computed(() => {
  const opt = props.resizeOption as any
  if (!opt) return false
  const edges = opt.edges
  if (!edges) return false
  // 任意存在即视为自定义（支持 boolean | object | selector 写法）
  return true
})
// 当未自定义 edges 且组件允许缩放且非 static 时才展示默认手柄
const showResizer = computed(() => resizableAndNotStatic.value && !userCustomEdges.value)

// 监听外部 isDraggable 变更 -> 直接覆盖内部 draggable 状态，后续由 tryMakeDraggable 根根据新值重新配置
watch(
  () => props.isDraggable,
  value => {
    state.draggable = value
  },
) 
// 监听 static 切换 -> 重新尝试创建/禁用拖拽与缩放（静态时两者均禁用）
watch(
  () => props.static,
  () => {
    nextTickOnce(tryMakeDraggable)
    nextTickOnce(tryMakeResizable)
  },
) 
// 监听内部 draggable 状态变化 -> 延迟到下一个 tick 重建拖拽实例配置（避免在同一同步周期反复初始化）
watch(
  () => state.draggable,
  () => {
    nextTickOnce(tryMakeDraggable)
  },
) 
// 监听外部 isResizable 变更 -> 直接同步到内部 resizable，随后由对应 watcher 触发重建缩放实例
watch(
  () => props.isResizable,
  value => {
    state.resizable = value
  },
) 
// 监听外部 isBounded 变更 -> 更新是否启用受限拖拽，影响 dragmove 时 clamp 边界裁剪
watch(
  () => props.isBounded,
  value => {
    state.bounded = value
  },
) 
// 监听内部 resizable 状态变化 -> 下一个 tick 重建缩放配置（边缘、约束、光标等）
watch(
  () => state.resizable,
  () => {
    nextTickOnce(tryMakeResizable)
  },
) 
// 监听行高变化 -> 重算定位与尺寸并向外派发容器实际像素尺寸更新
watch(
  () => state.rowHeight,
  () => {
    nextTickOnce(createStyle)
    nextTickOnce(emitContainerResized)
  },
) 
// 监听列数或容器宽度变化 -> 影响单列宽度与像素换算，需更新样式与缩放约束并通知尺寸变化
watch([() => state.cols, () => state.containerWidth], () => {
  nextTickOnce(tryMakeResizable)
  nextTickOnce(createStyle)
  nextTickOnce(emitContainerResized)
}) 
// 监听最小/最大行列限制变化 -> 重建缩放时的 restrictSize 约束
watch([() => props.minH, () => props.maxH, () => props.minW, () => props.maxW], () => {
  nextTickOnce(tryMakeResizable)
}) 
// 监听渲染方向 (RTL + mirrored) 变化 -> 需调整缩放边缘、拖拽/定位计算方式与最终样式
watch(renderRtl, () => {
  nextTickOnce(tryMakeResizable)
  nextTickOnce(createStyle)
}) 
// 监听父布局 margin 变化（含整体或单值） -> 更新内部 margin 并重算样式与尺寸回调
watch([() => layout.margin, () => layout.margin[0], () => layout.margin[1]], () => {
  const margin = layout.margin

  if (!margin || (margin[0] === state.margin[0] && margin[1] === state.margin[1])) {
    return
  }

  state.margin = margin.map(Number)
  nextTickOnce(createStyle)
  nextTickOnce(emitContainerResized)
}) 

/**
 * createStyle
 * 根据内部记录的网格坐标与交互临时状态生成最终内联样式（位置 + 尺寸）。
 * 逻辑：
 * 1. 若当前 w 超出列数，裁剪并重设 innerX/innerW。
 * 2. 基础样式使用 calcPosition 计算（网格单位 -> 像素）。
 * 3. 若正在拖拽/缩放，优先使用临时的 dragging/resizing 像素值覆盖。
 * 4. 根据 useCssTransforms 决定采用 transform 还是 top/left 定位；RTL 下切换为 right。
 * @returns void
 */
function createStyle() {
  if (props.x + props.w > state.cols) {
    innerX = 0
    innerW = props.w > state.cols ? state.cols : props.w
  } else {
    innerX = props.x
    innerW = props.w
  }

  const pos = calcPosition(innerX, innerY, innerW, innerH)

  if (state.isDragging) {
    pos.top = state.dragging.top
    // Add rtl support
    if (renderRtl.value) {
      pos.right = state.dragging.left
    } else {
      pos.left = state.dragging.left
    }
  }
  if (state.isResizing) {
    pos.width = state.resizing.width
    pos.height = state.resizing.height
  }

  let style
  // CSS Transforms support (default)
  if (state.useCssTransforms) {
    // Add rtl support
    if (renderRtl.value) {
      style = setTransformRtl(pos.top, pos.right!, pos.width, pos.height)
    } else {
      style = setTransform(pos.top, pos.left!, pos.width, pos.height)
    }
  } else {
    // top,left (slow)
    // Add rtl support
    if (renderRtl.value) {
      style = setTopRight(pos.top, pos.right!, pos.width, pos.height)
    } else {
      style = setTopLeft(pos.top, pos.left!, pos.width, pos.height)
    }
  }

  state.style = style
}

/**
 * emitContainerResized
 * 派发当前组件的像素宽高（去掉单位 px），便于外部监听容器内部真实渲染尺寸变化。
 */
function emitContainerResized() {
  // this.style has width and height with trailing 'px'. The
  // resized event is without them
  const styleProps: Record<string, string> = {}
  for (const prop of ['width', 'height']) {
    const val = state.style[prop]
    const matches = val.match(/^(\d+)px$/)
    if (!matches) {
      return
    }
    styleProps[prop] = matches[1]
  }
  emit('container-resized', props.i, props.h, props.w, styleProps.height, styleProps.width)
}

/**
 * handleResize
 * 处理缩放生命周期事件。
 * @param event interact 回调事件对象（含 edges）
 */
function handleResize(event: MouseEvent & { edges: any }) {
  if (props.static) return

  const type = event.type
  if (
    (type === 'resizestart' && state.isResizing) ||
    (type !== 'resizestart' && !state.isResizing)
  ) {
    return
  }

  const position = getControlPosition(event)
  // Get the current drag point from the event. This is used as the offset.
  if (isNull(position)) return // not possible but satisfies flow

  const { x, y } = position
  const newSize = { width: 0, height: 0 }
  let pos
  // 新增：根据事件携带的 edges 标记当前活动缩放边
  if (event.edges) {
    state.activeResizeEdges.top = !!event.edges.top
    state.activeResizeEdges.right = !!event.edges.right
    state.activeResizeEdges.bottom = !!event.edges.bottom
    state.activeResizeEdges.left = !!event.edges.left
  }
  switch (type) {
    case 'resizestart': {
      tryMakeResizable()
      previousW = innerW
      previousH = innerH
      pos = calcPosition(innerX, innerY, innerW, innerH)
      newSize.width = pos.width
      newSize.height = pos.height
      state.resizing = newSize
      state.isResizing = true
      break
    }
    case 'resizemove': {
      // A vertical resize ignores the horizontal delta
      if (!event.edges.right && !event.edges.left) {
        lastW = x
      }

      // An horizontal resize ignores the vertical delta
      if (!event.edges.top && !event.edges.bottom) {
        lastH = y
      }

      const coreEvent = createCoreData(lastW, lastH, x, y)
      if (renderRtl.value) {
        newSize.width = state.resizing.width - coreEvent.deltaX / state.transformScale
      } else {
        newSize.width = state.resizing.width + coreEvent.deltaX / state.transformScale
      }
      newSize.height = state.resizing.height + coreEvent.deltaY / state.transformScale
      state.resizing = newSize
      break
    }
    case 'resizeend': {
      pos = calcPosition(innerX, innerY, innerW, innerH)
      newSize.width = pos.width
      newSize.height = pos.height

      state.resizing = { width: -1, height: -1 }
      state.isResizing = false
      // 清理活动边高亮
      state.activeResizeEdges.top = false
      state.activeResizeEdges.right = false
      state.activeResizeEdges.bottom = false
      state.activeResizeEdges.left = false
      break
    }
  }

  // Get new WH
  pos = calcWH(newSize.height, newSize.width)
  if (pos.w < props.minW) {
    pos.w = props.minW
  }
  if (pos.w > props.maxW) {
    pos.w = props.maxW
  }
  if (pos.h < props.minH) {
    pos.h = props.minH
  }
  if (pos.h > props.maxH) {
    pos.h = props.maxH
  }

  if (pos.h < 1) {
    pos.h = 1
  }
  if (pos.w < 1) {
    pos.w = 1
  }

  lastW = x
  lastH = y

  if (innerW !== pos.w || innerH !== pos.h) {
    emit('resize', props.i, pos.h, pos.w, newSize.height, newSize.width)
  }
  if (event.type === 'resizeend' && (previousW !== innerW || previousH !== innerH)) {
    emit('resized', props.i, pos.h, pos.w, newSize.height, newSize.width)
  }
  emitter.emit('resizeEvent', event.type, props.i, innerX, innerY, pos.h, pos.w)
}

/**
 * handleDrag
 * 处理拖拽生命周期事件。
 * @param event 鼠标/触控事件
 */
function handleDrag(event: MouseEvent) {
  if (props.static || state.isResizing) return

  const type = event.type
  if ((type === 'dragstart' && state.isDragging) || (type !== 'dragstart' && !state.isDragging)) {
    return
  }

  const position = getControlPosition(event)

  // Get the current drag point from the event. This is used as the offset.
  if (isNull(position)) return // not possible but satisfies flow
  const { x, y } = position
  const target = event.target as HTMLElement

  if (!target.offsetParent) return

  // let shouldUpdate = false;
  const newPosition = { top: 0, left: 0 }
  switch (type) {
    case 'dragstart': {
      previousX = innerX
      previousY = innerY

      const parentRect = target.offsetParent.getBoundingClientRect()
      const clientRect = target.getBoundingClientRect()

      const cLeft = clientRect.left / state.transformScale
      const pLeft = parentRect.left / state.transformScale
      const cRight = clientRect.right / state.transformScale
      const pRight = parentRect.right / state.transformScale
      const cTop = clientRect.top / state.transformScale
      const pTop = parentRect.top / state.transformScale

      if (renderRtl.value) {
        newPosition.left = (cRight - pRight) * -1
      } else {
        newPosition.left = cLeft - pLeft
      }
      newPosition.top = cTop - pTop
      state.dragging = newPosition
      state.isDragging = true
      break
    }
    case 'dragmove': {
      const coreEvent = createCoreData(lastX, lastY, x, y)
      // Add rtl support
      if (renderRtl.value) {
        newPosition.left = state.dragging.left - coreEvent.deltaX / state.transformScale
      } else {
        newPosition.left = state.dragging.left + coreEvent.deltaX / state.transformScale
      }
      newPosition.top = state.dragging.top + coreEvent.deltaY / state.transformScale
      if (state.bounded) {
        const bottomBoundary =
          target.offsetParent.clientHeight -
          calcGridItemWHPx(props.h, state.rowHeight, state.margin[1])
        newPosition.top = clamp(newPosition.top, 0, bottomBoundary)
        const colWidth = calcColWidth()
        const rightBoundary =
          state.containerWidth - calcGridItemWHPx(props.w, colWidth, state.margin[0])
        newPosition.left = clamp(newPosition.left, 0, rightBoundary)
      }

      state.dragging = newPosition
      break
    }
    case 'dragend': {
      const parentRect = target.offsetParent.getBoundingClientRect()
      const clientRect = target.getBoundingClientRect()

      const cLeft = clientRect.left / state.transformScale
      const pLeft = parentRect.left / state.transformScale
      const cRight = clientRect.right / state.transformScale
      const pRight = parentRect.right / state.transformScale
      const cTop = clientRect.top / state.transformScale
      const pTop = parentRect.top / state.transformScale

      // Add rtl support
      if (renderRtl.value) {
        newPosition.left = (cRight - pRight) * -1
      } else {
        newPosition.left = cLeft - pLeft
      }
      newPosition.top = cTop - pTop
      state.dragging = { top: -1, left: -1 }
      state.isDragging = false
      break
    }
  }

  // Get new XY
  let pos
  if (renderRtl.value) {
    pos = calcXY(newPosition.top, newPosition.left)
  } else {
    pos = calcXY(newPosition.top, newPosition.left)
  }

  lastX = x
  lastY = y

  if (innerX !== pos.x || innerY !== pos.y) {
    emit('move', props.i, pos.x, pos.y)
  }
  if (event.type === 'dragend' && (previousX !== innerX || previousY !== innerY)) {
    emit('moved', props.i, pos.x, pos.y)
  }
  emitter.emit('dragEvent', event.type, props.i, pos.x, pos.y, innerH, innerW)
}

/**
 * calcPosition
 * 网格单位转像素坐标和尺寸。
 * @param x 列起点
 * @param y 行起点
 * @param w 宽度(列数)
 * @param h 高度(行数)
 * @returns 像素定位与宽高对象
 */
function calcPosition(x: number, y: number, w: number, h: number) {
  const colWidth = calcColWidth()
  // add rtl support
  let out
  if (renderRtl.value) {
    out = {
      right: Math.round(colWidth * x + (x + 1) * state.margin[0]),
      top: Math.round(state.rowHeight * y + (y + 1) * state.margin[1]),
      // 0 * Infinity === NaN, which causes problems with resize constraints;
      // Fix this if it occurs.
      // Note we do it here rather than later because Math.round(Infinity) causes depot
      width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * state.margin[0]),
      height:
        h === Infinity ? h : Math.round(state.rowHeight * h + Math.max(0, h - 1) * state.margin[1]),
    }
  } else {
    out = {
      left: Math.round(colWidth * x + (x + 1) * state.margin[0]),
      top: Math.round(state.rowHeight * y + (y + 1) * state.margin[1]),
      // 0 * Infinity === NaN, which causes problems with resize constraints;
      // Fix this if it occurs.
      // Note we do it here rather than later because Math.round(Infinity) causes depot
      width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * state.margin[0]),
      height:
        h === Infinity ? h : Math.round(state.rowHeight * h + Math.max(0, h - 1) * state.margin[1]),
    }
  }

  return out
}

/**
 * Translate x and y coordinates from pixels to grid units.
 * @param top  Top position (relative to parent) in pixels.
 * @param left Left position (relative to parent) in pixels.
 * @return x and y in grid units.
 */
// TODO check if this function needs change in order to support rtl.
function calcXY(top: number, left: number) {
  const colWidth = calcColWidth()

  // left = colWidth * x + margin * (x + 1)
  // l = cx + m(x+1)
  // l = cx + mx + m
  // l - m = cx + mx
  // l - m = x(c + m)
  // (l - m) / (c + m) = x
  // x = (left - margin) / (coldWidth + margin)
  let x = Math.round((left - state.margin[0]) / (colWidth + state.margin[0]))
  let y = Math.round((top - state.margin[1]) / (state.rowHeight + state.margin[1]))

  // Capping
  x = Math.max(Math.min(x, state.cols - innerW), 0)
  y = Math.max(Math.min(y, state.maxRows - innerH), 0)

  return { x, y }
}

/**
 * 计算单列像素宽度。
 * @returns 单列宽度
 */
function calcColWidth() {
  return (state.containerWidth - state.margin[0] * (state.cols + 1)) / state.cols
}

/**
 * 网格单位转换为像素尺寸。
 * @param gridUnits 行或列的跨度
 * @param colOrRowSize 单列或单行的像素尺寸
 * @param marginPx 对应方向的间距像素
 * @returns 像素尺寸
 */
function calcGridItemWHPx(gridUnits: number, colOrRowSize: number, marginPx: number) {
  // 0 * Infinity === NaN, which causes problems with resize constraints
  if (!Number.isFinite(gridUnits)) return gridUnits
  return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx)
}

/**
 * 约束数值在指定区间。
 * @param num 原始值
 * @param lowerBound 下界
 * @param upperBound 上界
 * @returns 约束后的值
 */
function clamp(num: number, lowerBound: number, upperBound: number) {
  return Math.max(Math.min(num, upperBound), lowerBound)
}

/**
 * 像素宽高转换为网格单位。
 * @param height 像素高度
 * @param width 像素宽度
 * @param autoSizeFlag 高度是否向上取整标记
 * @returns {w,h}
 */
function calcWH(height: number, width: number, autoSizeFlag = false) {
  const colWidth = calcColWidth()

  // width = colWidth * w - (margin * (w - 1))
  // ...
  // w = (width + margin) / (colWidth + margin)
  let w = Math.round((width + state.margin[0]) / (colWidth + state.margin[0]))
  let h = 0
  if (!autoSizeFlag) {
    h = Math.round((height + state.margin[1]) / (state.rowHeight + state.margin[1]))
  } else {
    h = Math.ceil((height + state.margin[1]) / (state.rowHeight + state.margin[1]))
  }

  // Capping
  w = Math.max(Math.min(w, state.cols - innerX), 0)
  h = Math.max(Math.min(h, state.maxRows - innerY), 0)
  return { w, h }
}

/**
 * updateWidth
 * 更新容器宽度及可选列数。
 * @param width 新容器宽度
 * @param colNum 可选新列数
 */
function updateWidth(width: number, colNum?: number) {
  state.containerWidth = width
  if (colNum !== undefined && colNum !== null) {
    state.cols = colNum
  }
}

/**
 * compact
 * 执行样式重算（一般在父级压缩或外部触发时）。
 */
function compact() {
  createStyle()
}

/**
 * tryInteract
 * 初始化 interact 实例（避免重复）。
 */
function tryInteract() {
  if (!interactObj.value && wrapper.value) {
    interactObj.value = interact(wrapper.value)
    if (!state.useStyleCursor) {
      interactObj.value.styleCursor(false)
    }
  }
}

const throttleDrag = throttle(handleDrag)

/**
 * tryMakeDraggable
 * 配置拖拽行为与事件监听，或在不满足条件时禁用。
 */
function tryMakeDraggable() {
  tryInteract()

  if (!interactObj.value) return

  if (state.draggable && !props.static) {
    const opts = {
      ignoreFrom: props.dragIgnoreFrom,
      allowFrom: props.dragAllowFrom,
      ...props.dragOption,
    }
    interactObj.value.draggable(opts)

    if (!dragEventSet) {
      dragEventSet = true
      interactObj.value.on('dragstart dragmove dragend', event => {
        event.type === 'dragmove' ? throttleDrag(event) : handleDrag(event)
      })
    }
  } else {
    interactObj.value.draggable({ enabled: false })
  }
}

const throttleResize = throttle(handleResize)

/**
 * tryMakeResizable
 * 配置缩放行为与事件监听，计算并传入尺寸约束。
 */
function tryMakeResizable() {
  tryInteract()

  if (!interactObj.value) return

  if (state.resizable && !props.static) {
    const maximum = calcPosition(0, 0, props.maxW, props.maxH)
    const minimum = calcPosition(0, 0, props.minW, props.minH)

    const opts: Record<string, any> = {
      edges: {
        left: renderRtl.value ? `.${resizerClass.value[0]}` : false,
        right: !renderRtl.value ? `.${resizerClass.value[0]}` : false,
        bottom: `.${resizerClass.value[0]}`,
        top: false,
      },
      ignoreFrom: props.resizeIgnoreFrom,
      restrictSize: {
        min: {
          height: minimum.height * state.transformScale,
          width: minimum.width * state.transformScale,
        },
        max: {
          height: maximum.height * state.transformScale,
          width: maximum.width * state.transformScale,
        },
      },
      ...props.resizeOption,
    }

    if (props.preserveAspectRatio) {
      opts.modifiers = [interact.modifiers.aspectRatio({ ratio: 'preserve' })]
    }

    interactObj.value.resizable(opts)
    // 新增：记录哪些边是启用的，供模板渲染和 hover 高亮
    const ec: any = opts.edges || {}
    state.enabledResizeEdges.top = !!ec.top
    state.enabledResizeEdges.right = !!ec.right
    state.enabledResizeEdges.bottom = !!ec.bottom
    state.enabledResizeEdges.left = !!ec.left
    if (!resizeEventSet) {
      resizeEventSet = true
      interactObj.value.on('resizestart resizemove resizeend', event => {
        event.type === 'resizemove' ? throttleResize(event) : handleResize(event)
      })
    }
  } else {
    interactObj.value.resizable({ enabled: false })
    state.enabledResizeEdges.top = false
    state.enabledResizeEdges.right = false
    state.enabledResizeEdges.bottom = false
    state.enabledResizeEdges.left = false
  }
}
</script>

<template>
  <section ref="wrapper" :class="className" :style="state.style">
    <slot></slot>
    <span v-if="showResizer" :class="resizerClass"></span>
    <!-- 改造：始终渲染边框元素（只在启用边时可 hover），缩放中额外用 is-active 表示当前操作边 -->
    <div
      v-if="resizableAndNotStatic"
      class="vgl-item__edge vgl-item__edge--top"
      :class="[{ 'is-enabled': state.enabledResizeEdges.top, 'is-active': state.activeResizeEdges.top }]
    " aria-hidden="true"></div>
    <div
      v-if="resizableAndNotStatic"
      class="vgl-item__edge vgl-item__edge--right"
      :class="[{ 'is-enabled': state.enabledResizeEdges.right, 'is-active': state.activeResizeEdges.right }]
    " aria-hidden="true"></div>
    <div
      v-if="resizableAndNotStatic"
      class="vgl-item__edge vgl-item__edge--bottom"
      :class="[{ 'is-enabled': state.enabledResizeEdges.bottom, 'is-active': state.activeResizeEdges.bottom }]
    " aria-hidden="true"></div>
    <div
      v-if="resizableAndNotStatic"
      class="vgl-item__edge vgl-item__edge--left"
      :class="[{ 'is-enabled': state.enabledResizeEdges.left, 'is-active': state.activeResizeEdges.left }]
    " aria-hidden="true"></div>
  </section>
</template>
