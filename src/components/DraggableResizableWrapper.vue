<template>
  <div ref="elementRef" class="draggable-resizable-wrapper">
    <slot v-bind="slotScope"></slot>
  </div>
</template>

<script setup lang="ts">
import {
  type ComputedRef,
  computed, 
  onMounted, 
  onUnmounted, 
  ref, 
  watch, 
} from 'vue'

import {
  type DraggableResizableWrapperEmits,
  type DraggableResizableWrapperExposed,
  type DraggableResizableWrapperProps,
  type DraggableResizableWrapperSlotScope,
} from './types'


import {
  type DragEventCallbackData,
  type DraggableResizableResult,
  type ElementDragResizeCallbacks,
  type ElementDragResizeOptions,
  type ElementEdges,
  type ResizeEventCallbackData,
  makeElementDraggableResizable,
} from '../utils/interact-helper'
import { parseCssSize, parsePositionValue } from '../utils/css-units'

/** 定义组件的 props */
const props = withDefaults(defineProps<DraggableResizableWrapperProps>(), {
  draggable: true,
  resizable: true,
  useCssTransforms: true,
  dragOptions: () => ({}),
  resizeOptions: () => ({}),
  initialX: 0,
  initialY: 0,
  initialWidth: 200,
  initialHeight: 150,
  watchDeep: false,
  watchImmediate: false,
})

/** 定义组件的事件 */
const emit = defineEmits<DraggableResizableWrapperEmits>()

/** 定义响应式数据 */
const elementRef = ref<HTMLElement>()

/** 恢复丢失的响应式状态定义 (位置/尺寸 + 交互状态) */
const x = ref<number>(typeof props.initialX === 'number' ? props.initialX : 0)
const y = ref<number>(typeof props.initialY === 'number' ? props.initialY : 0)
const width = ref<number>(typeof props.initialWidth === 'number' ? props.initialWidth : 200)
const height = ref<number>(typeof props.initialHeight === 'number' ? props.initialHeight : 150)
const isDragging = ref<boolean>(false)
const isResizing = ref<boolean>(false)
const activeEdges = ref<Partial<ElementEdges>>({})

/** 清理函数引用 */
let cleanupFunction: (() => void) | null = null

/** 更新位置尺寸方法引用 */
let updatePositionAndSizeFunction: DraggableResizableResult['updatePositionAndSize'] | null = null
let updatePositionFunction: DraggableResizableResult['updatePosition'] | null = null
let updateSizeFunction: DraggableResizableResult['updateSize'] | null = null

/** watch监听器停止函数引用 */
const stopWatchListener: (() => void)[] = []

/** 创建slot作用域数据 */
const slotScope: ComputedRef<DraggableResizableWrapperSlotScope> = computed(() => ({
  x: x.value,
  y: y.value,
  width: width.value,
  height: height.value,
  isDragging: isDragging.value,
  isResizing: isResizing.value,
  activeEdges: activeEdges.value as Record<string, boolean>,
}))

/** 创建拖拽和调整大小的回调函数 */
const createCallbacks = (): ElementDragResizeCallbacks => ({
  onDrag: (data: DragEventCallbackData) => {
    // 更新内部状态
    x.value = data.left
    y.value = data.top
    isDragging.value =
      data.type === 'dragstart' ? true : data.type === 'dragend' ? false : isDragging.value

    // 发出对应事件
    switch (data.type) {
      case 'dragstart':
        emit('dragStart', data)
        break
      case 'dragmove':
        emit('dragMove', data)
        break
      case 'dragend':
        emit('dragEnd', data)
        break
    }
  },
  onResize: (data: ResizeEventCallbackData) => {
    // 更新内部状态
    width.value = data.width
    height.value = data.height
    x.value = data.left
    y.value = data.top
    isResizing.value =
      data.type === 'resizestart' ? true : data.type === 'resizeend' ? false : isResizing.value
    activeEdges.value = data.edges || {}

    // 发出对应事件
    switch (data.type) {
      case 'resizestart':
        emit('resizeStart', data)
        break
      case 'resizemove':
        emit('resizeMove', data)
        break
      case 'resizeend':
        emit('resizeEnd', data)
        break
    }
  },
})

/** 计算选项 */
const computedOptions: ComputedRef<ElementDragResizeOptions> = computed(() => ({
  draggable: props.draggable,
  resizable: props.resizable,
  useCssTransforms: props.useCssTransforms,
  dragOptions: props.dragOptions,
  resizeOptions: props.resizeOptions,
  x: props.initialX,
  y: props.initialY,
  width: props.initialWidth,
  height: props.initialHeight,
}))

/** 初始化拖拽和调整大小功能 */
const initializeInteract = (): void => {
  if (!elementRef.value) return

  // 设置初始数据属性
  elementRef.value.setAttribute('data-x', props.initialX.toString())
  elementRef.value.setAttribute('data-y', props.initialY.toString())
  elementRef.value.setAttribute('data-width', props.initialWidth.toString())
  elementRef.value.setAttribute('data-height', props.initialHeight.toString())

  // 创建回调函数
  const callbacks = createCallbacks()

  // 调用 makeElementDraggableResizable
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

/** 监听选项变化 - 支持用户配置的deep和immediate选项 */
stopWatchListener.push(
  watch(
    [
      () => props.draggable,
      () => props.resizable,
      () => props.dragOptions,
      () => props.resizeOptions,
    ],
    (): void => {
      if (cleanupFunction) {
        cleanupFunction()
        cleanupFunction = null
      }
      initializeInteract()
    },
    {
      deep: props.watchDeep,
      immediate: props.watchImmediate,
    }),
)

/** 监听初始位置尺寸变化 - 使用update方法而非重新初始化 */
stopWatchListener.push(
  watch(
    [
      () => props.initialX,
      () => props.initialY,
      () => props.initialWidth,
      () => props.initialHeight,
    ],
    ([newX, newY, newWidth, newHeight]) => {
      if (updatePositionAndSizeFunction) {
        updatePositionAndSizeFunction(newX, newY, newWidth, newHeight)
        if (typeof newX === 'number') x.value = newX
        if (typeof newY === 'number') y.value = newY
        if (typeof newWidth === 'number') width.value = newWidth
        if (typeof newHeight === 'number') height.value = newHeight
      }
    }),
)

/** 组件挂载时初始化 */
onMounted((): void => {
  initializeInteract()
  // 挂载后如果初始值为字符串单位, 解析为像素更新
  if (typeof props.initialX === 'string') x.value = parsePositionValue(props.initialX, elementRef.value, 'x')
  if (typeof props.initialY === 'string') y.value = parsePositionValue(props.initialY, elementRef.value, 'y')
  if (typeof props.initialWidth === 'string') width.value = parseCssSize(props.initialWidth, elementRef.value, 'width')
  if (typeof props.initialHeight === 'string') height.value = parseCssSize(props.initialHeight, elementRef.value, 'height')
})

/** 公开方法：更新位置和尺寸 */
const updatePositionAndSize = (newX: number | string, newY: number | string, newWidth: number | string, newHeight: number | string): void => {
  if (updatePositionAndSizeFunction) {
    updatePositionAndSizeFunction(newX, newY, newWidth, newHeight)
    if (typeof newX === 'number') x.value = newX
    if (typeof newY === 'number') y.value = newY
    if (typeof newWidth === 'number') width.value = newWidth
    if (typeof newHeight === 'number') height.value = newHeight
  }
}

/** 公开方法：更新位置 */
const updatePosition = (newX: number | string, newY: number | string): void => {
  if (updatePositionFunction) {
    updatePositionFunction(newX, newY)
    if (typeof newX === 'number') x.value = newX
    if (typeof newY === 'number') y.value = newY
  }
}

/** 公开方法：更新尺寸 */
const updateSize = (newWidth: number | string, newHeight: number | string): void => {
  if (updateSizeFunction) {
    updateSizeFunction(newWidth, newHeight)
    if (typeof newWidth === 'number') width.value = newWidth
    if (typeof newHeight === 'number') height.value = newHeight
  }
}

/** 组件卸载时清理 */
onUnmounted((): void => {
  if (cleanupFunction) {
    cleanupFunction()
    cleanupFunction = null
  }
  if (stopWatchListener?.length) {
    stopWatchListener.forEach((listener) => listener())
    stopWatchListener.length = 0
  }
  updatePositionAndSizeFunction = null
  updatePositionFunction = null
  updateSizeFunction = null
})

/** 暴露方法给父组件 */
defineExpose<DraggableResizableWrapperExposed>({
  elementRef,
  x,
  y,
  width,
  height,
  isDragging,
  isResizing,
  activeEdges,
  updatePositionAndSize,
  updatePosition,
  updateSize,
})
</script>
