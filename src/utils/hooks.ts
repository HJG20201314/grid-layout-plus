import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { throttle } from '@vexip-ui/utils'
import {
  makeElementDraggableResizable,
  type DragEventCallbackData,
  type DraggableResizableResult,
  type ElementDragResizeCallbacks,
  type ElementDragResizeOptions,
  type ElementEdges,
  type ResizeEventCallbackData,
} from './interact-helper'
import { parseCssSize, parsePositionValue } from './css-units'

/**
 * Hook props 定义
 */
export interface UseDraggableResizableWrapperProps {
  draggable?: boolean, // 是否启用拖拽
  resizable?: boolean, // 是否启用缩放
  useCssTransforms?: boolean, // 非绝对/固定定位时使用 transform 定位
  dragOptions?: ElementDragResizeOptions['dragOptions'], // 拖拽配置，透传给 interact.js
  resizeOptions?: ElementDragResizeOptions['resizeOptions'], // 缩放配置，透传给 interact.js
  initialX?: number | string, // 初始 X 坐标（支持数字或 CSS 单位）
  initialY?: number | string, // 初始 Y 坐标（支持数字或 CSS 单位）
  initialWidth?: number | string, // 初始宽度（支持数字或 CSS 单位）
  initialHeight?: number | string, // 初始高度（支持数字或 CSS 单位）
  watchDeep?: boolean, // 选项 watch 是否深度
  watchImmediate?: boolean, // 选项 watch 是否立即
}

/**
 * Hook 事件回调定义
 */
export interface UseDraggableResizableWrapperEvents {
  onDragStart?: (data: DragEventCallbackData) => void, // 拖拽开始
  onDragMove?: (data: DragEventCallbackData) => void, // 拖拽移动
  onDragEnd?: (data: DragEventCallbackData) => void, // 拖拽结束
  onResizeStart?: (data: ResizeEventCallbackData) => void, // 缩放开始
  onResizeMove?: (data: ResizeEventCallbackData) => void, // 缩放移动
  onResizeEnd?: (data: ResizeEventCallbackData) => void, // 缩放结束
}

/**
 * Hook 返回值定义
 */
export interface UseDraggableResizableWrapperReturn {
  elementRef: Ref<HTMLElement | undefined>,
  x: Ref<number>, // 当前 X 坐标（像素）
  y: Ref<number>, // 当前 Y 坐标（像素）
  width: Ref<number>, // 当前宽度（像素）
  height: Ref<number>, // 当前高度（像素）
  isDragging: Ref<boolean>, // 是否正在拖拽
  isResizing: Ref<boolean>, // 是否正在缩放
  activeEdges: Ref<Partial<ElementEdges>>, // 当前激活的边
  slotScope: ComputedRef<{ // 提供给插槽/子组件的作用域数据
    x: number,
    y: number,
    width: number,
    height: number,
    isDragging: boolean,
    isResizing: boolean,
    activeEdges: Record<string, boolean>,
  }>,
  updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void, // 同时更新位置和尺寸（节流）
  updatePosition: (x: number | string, y: number | string) => void, // 更新位置（节流）
  updateSize: (width: number | string, height: number | string) => void, // 更新尺寸（节流）
  cleanup: () => void,
  /** 模板中绑定元素的便捷方法 */
  attachElement: (ref: Element | any | null, refs?: Record<string, any>) => void,
}

/**
 * useDraggableResizableWrapper
 * 将 DraggableResizableWrapper 组件逻辑抽象为可复用 Hook。
 * 使用方式：在组件中调用该 Hook，绑定 elementRef 到容器元素即可开箱使用。
 *
 * @param props 用户配置项，控制是否可拖拽/缩放、定位方式、初始位置与尺寸、以及原生 interact 透传配置
 * @param events 事件回调集合，包含拖拽/缩放的 start/move/end 钩子
 * @returns 返回交互所需的元素引用、位置与尺寸状态、交互状态、插槽作用域，以及位置尺寸更新与清理方法
 */
export function useDraggableResizableWrapper(
  props: UseDraggableResizableWrapperProps = {},
  events: UseDraggableResizableWrapperEvents = {},
): UseDraggableResizableWrapperReturn {
  // 合并默认配置
  const merged: Required<UseDraggableResizableWrapperProps> = {
    draggable: true,
    resizable: true,
    useCssTransforms: true,
    dragOptions: {},
    resizeOptions: {},
    initialX: 0,
    initialY: 0,
    initialWidth: 200,
    initialHeight: 150,
    watchDeep: false,
    watchImmediate: false,
    ...props,
  }

  // 核心响应式状态
  const elementRef = ref<HTMLElement>()
  const x = ref<number>(typeof merged.initialX === 'number' ? merged.initialX : 0)
  const y = ref<number>(typeof merged.initialY === 'number' ? merged.initialY : 0)
  const width = ref<number>(typeof merged.initialWidth === 'number' ? merged.initialWidth : 200)
  const height = ref<number>(typeof merged.initialHeight === 'number' ? merged.initialHeight : 150)
  const isDragging = ref<boolean>(false)
  const isResizing = ref<boolean>(false)
  const activeEdges = ref<Partial<ElementEdges>>({})

  // 交互句柄缓存
  let cleanupFunction: (() => void) | null = null
  let updatePositionAndSizeFunction: DraggableResizableResult['updatePositionAndSize'] | null = null
  let updatePositionFunction: DraggableResizableResult['updatePosition'] | null = null
  let updateSizeFunction: DraggableResizableResult['updateSize'] | null = null

  // 插槽作用域数据
  const slotScope = computed(() => ({
    x: x.value,
    y: y.value,
    width: width.value,
    height: height.value,
    isDragging: isDragging.value,
    isResizing: isResizing.value,
    activeEdges: activeEdges.value as Record<string, boolean>,
  }))

  // 交互回调：拖拽/缩放
  const callbacks: ElementDragResizeCallbacks = {
    onDrag: (data: DragEventCallbackData) => {
      if (data.type === 'dragmove') {
        // 降低响应式更新频率
        requestAnimationFrame(() => {
          x.value = data.left
          y.value = data.top
          events.onDragMove?.(data)
        })
      } else {
        if (data.type === 'dragstart') {
          isDragging.value = true
          events.onDragStart?.(data)
        } else if (data.type === 'dragend') {
          isDragging.value = false
          events.onDragEnd?.(data)
        }
        x.value = data.left
        y.value = data.top
      }
    },
    onResize: (data: ResizeEventCallbackData) => {
      if (data.type === 'resizemove') {
        requestAnimationFrame(() => {
          width.value = data.width
          height.value = data.height
          x.value = data.left
          y.value = data.top
          events.onResizeMove?.(data)
        })
      } else {
        if (data.type === 'resizestart') {
          isResizing.value = true
          events.onResizeStart?.(data)
        } else if (data.type === 'resizeend') {
          isResizing.value = false
          events.onResizeEnd?.(data)
        }
        width.value = data.width
        height.value = data.height
        x.value = data.left
        y.value = data.top
        activeEdges.value = data.edges || {}
      }
    },
  }

  // 计算选项：透传 interact 配置与初始值
  const computedOptions: ComputedRef<ElementDragResizeOptions> = computed(() => ({
    draggable: merged.draggable,
    resizable: merged.resizable,
    useCssTransforms: merged.useCssTransforms,
    dragOptions: merged.dragOptions,
    resizeOptions: merged.resizeOptions,
    x: merged.initialX,
    y: merged.initialY,
    width: merged.initialWidth,
    height: merged.initialHeight,
  }))

  /** 初始化 interact 能力 */
  const initializeInteract = (): void => {
    if (!elementRef.value) return

    elementRef.value.setAttribute('data-x', merged.initialX.toString())
    elementRef.value.setAttribute('data-y', merged.initialY.toString())
    elementRef.value.setAttribute('data-width', merged.initialWidth.toString())
    elementRef.value.setAttribute('data-height', merged.initialHeight.toString())

    const result = makeElementDraggableResizable(
      elementRef.value,
      computedOptions.value,
      callbacks,
    )
    cleanupFunction = result.cleanup
    updatePositionAndSizeFunction = result.updatePositionAndSize
    updatePositionFunction = result.updatePosition
    updateSizeFunction = result.updateSize
  }

  // 监听配置变更：重新初始化交互
  const watchersStop: Array<() => void> = []
  watchersStop.push(
    watch(
      [
        () => merged.draggable,
        () => merged.resizable,
        () => merged.dragOptions,
        () => merged.resizeOptions,
      ],
      () => {
        if (cleanupFunction) {
          cleanupFunction()
          cleanupFunction = null
        }
        initializeInteract()
      },
      { deep: merged.watchDeep, immediate: merged.watchImmediate },
    ),
  )

  // 监听初始位置/尺寸变更：用 update 方法同步
  watchersStop.push(
    watch(
      [
        () => merged.initialX,
        () => merged.initialY,
        () => merged.initialWidth,
        () => merged.initialHeight,
      ],
      ([newX, newY, newWidth, newHeight]) => {
        if (updatePositionAndSizeFunction) {
          updatePositionAndSizeFunction(newX, newY, newWidth, newHeight)
          if (typeof newX === 'number') x.value = newX
          if (typeof newY === 'number') y.value = newY
          if (typeof newWidth === 'number') width.value = newWidth
          if (typeof newHeight === 'number') height.value = newHeight
        }
      },
    ),
  )

  // 挂载后初始化与解析字符串单位
  onMounted(() => {
    initializeInteract()
    if (typeof merged.initialX === 'string') x.value = parsePositionValue(merged.initialX, elementRef.value, 'x')
    if (typeof merged.initialY === 'string') y.value = parsePositionValue(merged.initialY, elementRef.value, 'y')
    if (typeof merged.initialWidth === 'string') width.value = parseCssSize(merged.initialWidth, elementRef.value, 'width')
    if (typeof merged.initialHeight === 'string') height.value = parseCssSize(merged.initialHeight, elementRef.value, 'height')
  })

  // 卸载时清理交互与监听
  onUnmounted(() => {
    if (cleanupFunction) {
      cleanupFunction()
      cleanupFunction = null
    }
    if (watchersStop.length) {
      watchersStop.forEach(stop => stop())
      watchersStop.length = 0
    }
    updatePositionAndSizeFunction = null
    updatePositionFunction = null
    updateSizeFunction = null
  })

  // 对外更新方法（节流）
  const updatePositionAndSize = throttle((newX: number | string, newY: number | string, newWidth: number | string, newHeight: number | string) => {
    if (updatePositionAndSizeFunction) {
      updatePositionAndSizeFunction(newX, newY, newWidth, newHeight)
      if (typeof newX === 'number') x.value = newX
      if (typeof newY === 'number') y.value = newY
      if (typeof newWidth === 'number') width.value = newWidth
      if (typeof newHeight === 'number') height.value = newHeight
    }
  }, 16)

  const updatePosition = throttle((newX: number | string, newY: number | string) => {
    if (updatePositionFunction) {
      updatePositionFunction(newX, newY)
      if (typeof newX === 'number') x.value = newX
      if (typeof newY === 'number') y.value = newY
    }
  }, 16)

  const updateSize = throttle((newWidth: number | string, newHeight: number | string) => {
    if (updateSizeFunction) {
      updateSizeFunction(newWidth, newHeight)
      if (typeof newWidth === 'number') width.value = newWidth
      if (typeof newHeight === 'number') height.value = newHeight
    }
  }, 16)

  /** 手动清理：交互与监听 */
  const cleanup = () => {
    if (cleanupFunction) {
      cleanupFunction()
      cleanupFunction = null
    }
    if (watchersStop.length) {
      watchersStop.forEach(stop => stop())
      watchersStop.length = 0
    }
    updatePositionAndSizeFunction = null
    updatePositionFunction = null
    updateSizeFunction = null
  }

  /** 模板中绑定元素的便捷方法 */
  const attachElement = (refArg: Element | any | null, _refs?: Record<string, any>) => {
    if (!refArg) return
    // If a component instance is passed, try to get $el
    const el = (refArg as any).$el ? (refArg as any).$el as Element : (refArg as Element)
    if (el) elementRef.value = el as HTMLElement
  }

  return {
    elementRef,
    x,
    y,
    width,
    height,
    isDragging,
    isResizing,
    activeEdges,
    slotScope,
    updatePositionAndSize,
    updatePosition,
    updateSize,
    cleanup,
    attachElement,
  }
}
