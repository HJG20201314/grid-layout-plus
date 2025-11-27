<template>
  <div class="drawer-wrapper-demo">
    <div class="scene-selector">
      <label>选择模式：</label>
      <select v-model="mode">
        <option value="right-fixed">1. 右侧固定，左侧缩放</option>
        <option value="left-fixed">2. 左侧固定，右侧缩放</option>
        <option value="bottom-fixed">3. 底部固定，顶部缩放</option>
        <option value="top-fixed">4. 顶部固定，底部缩放</option>
      </select>
    </div>

    <!-- 水平抽屉 -->
    <div
      v-if="isHorizontal"
      class="draggable-resizable-wrapper"
      :style="wrapperAnchorStyle"
      :ref="horizontalApi.attachElement"
    >
      <div class="drawer-panel">
        <div class="drawer-header">
          <span>抽屉面板 ({{ modeLabel }})</span>
          <button class="close-btn" disabled>×</button>
        </div>
        <div class="drawer-body">
          <p>当前宽度: {{ Math.round(horizontalApi?.width.value ?? 0) }}px</p>
          <p>最小宽度: {{ horizontalMaxMin.min }} / 最大宽度: {{ horizontalMaxMin.max }}</p>
          <p>通过 useDraggableResizableWrapper 固定一边，使用另一边缩放。</p>
        </div>
      </div>
    </div>

    <!-- 垂直抽屉 -->
    <div
      v-else
      class="draggable-resizable-wrapper"
      :style="wrapperAnchorStyle"
      :ref="verticalApi.attachElement"
    >
      <div class="drawer-panel vertical">
        <div class="drawer-header">
          <span>抽屉面板 ({{ modeLabel }})</span>
          <button class="close-btn" disabled>×</button>
        </div>
        <div class="drawer-body">
          <p>当前高度: {{ Math.round(verticalApi?.height.value ?? 0) }}px</p>
          <p>最小高度: {{ verticalMaxMin.min }} / 最大高度: {{ verticalMaxMin.max }}</p>
          <p>通过 useDraggableResizableWrapper 固定一边，使用另一边缩放。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, reactive } from 'vue'
import { useDraggableResizableWrapper, type UseDraggableResizableWrapperReturn } from '../../src/utils/hooks'

const mode = ref<'right-fixed' | 'left-fixed' | 'bottom-fixed' | 'top-fixed'>('right-fixed')
const isHorizontal = computed(() => mode.value === 'right-fixed' || mode.value === 'left-fixed')

const initialWidth = '400px'
const initialHeight = '300px'

// Use reactive() so deep watch inside hook can observe mutations
const horizontalResizeOptions = reactive<any>({ edges: { left: true }, minWidth: 300, maxWidth: 'calc(100vw - 272px)', margin: 8 })
const verticalResizeOptions = reactive<any>({ edges: { top: true }, minHeight: 200, maxHeight: 600, margin: 8 })

const updateResizeOptions = () => {
  if (mode.value === 'right-fixed') {
    horizontalResizeOptions.edges = { left: true }
    horizontalResizeOptions.minWidth = 300
    horizontalResizeOptions.maxWidth = 'calc(100vw - 272px)'
    horizontalResizeOptions.margin = 8
  } else if (mode.value === 'left-fixed') {
    horizontalResizeOptions.edges = { right: true }
    horizontalResizeOptions.minWidth = 300
    horizontalResizeOptions.maxWidth = 800
    horizontalResizeOptions.margin = 8
  } else if (mode.value === 'bottom-fixed') {
    verticalResizeOptions.edges = { top: true }
    verticalResizeOptions.minHeight = 200
    verticalResizeOptions.maxHeight = 600
    verticalResizeOptions.margin = 8
  } else if (mode.value === 'top-fixed') {
    verticalResizeOptions.edges = { bottom: true }
    verticalResizeOptions.minHeight = 200
    verticalResizeOptions.maxHeight = 600
    verticalResizeOptions.margin = 8
  }
}

watch(mode, updateResizeOptions, { immediate: true })

// Create hook instances during setup, passing reactive options
const horizontalApi: UseDraggableResizableWrapperReturn = useDraggableResizableWrapper({
  draggable: false,
  resizable: true,
  useCssTransforms: false,
  initialX: 0,
  initialY: 0,
  initialWidth,
  initialHeight: '100vh',
  resizeOptions: horizontalResizeOptions,
  watchDeep: true,
  watchImmediate: true,
})

const verticalApi: UseDraggableResizableWrapperReturn = useDraggableResizableWrapper({
  draggable: false,
  resizable: true,
  useCssTransforms: false,
  initialX: 0,
  initialY: 0,
  initialWidth: '100vw',
  initialHeight,
  resizeOptions: verticalResizeOptions,
  watchDeep: true,
  watchImmediate: true,
})

const horizontalMaxMin = computed(() => ({ min: horizontalResizeOptions.minWidth, max: horizontalResizeOptions.maxWidth }))
const verticalMaxMin = computed(() => ({ min: verticalResizeOptions.minHeight, max: verticalResizeOptions.maxHeight }))

const modeLabel = computed(() => {
  switch (mode.value) {
    case 'right-fixed': return '右侧固定 (左边缩放)'
    case 'left-fixed': return '左侧固定 (右边缩放)'
    case 'bottom-fixed': return '底部固定 (顶部缩放)'
    case 'top-fixed': return '顶部固定 (底部缩放)'
  }
})

const wrapperAnchorStyle = computed(() => {
  const style: Record<string, string> = { position: 'absolute' }
  if (mode.value === 'right-fixed') { style.right = '0'; style.top = '0'; style.bottom = '0' }
  else if (mode.value === 'left-fixed') { style.left = '0'; style.top = '0'; style.bottom = '0' }
  else if (mode.value === 'bottom-fixed') { style.left = '0'; style.right = '0'; style.bottom = '0' }
  else if (mode.value === 'top-fixed') { style.left = '0'; style.right = '0'; style.top = '0' }
  return style
})
</script>

<style scoped>
.drawer-wrapper-demo { position: relative; width: 100%; height: 100vh; background: #f5f5f5; overflow: hidden; }
.scene-selector { position: absolute; top: 16px; left: 16px; z-index: 1000; padding: 8px 12px; background: #fff; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,.15); font-size: 14px; }
.scene-selector select { margin-left: 8px; }
:deep(.draggable-resizable-wrapper) { position: absolute; }
.drawer-panel { display: flex; flex-direction: column; background: #fff; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,.15); width: 100%; height: 100%; }
.drawer-panel.vertical { width: 100%; }
.drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; font-weight: 600; color: #fff; background: #1890ff; user-select: none; }
.close-btn { width: 28px; height: 28px; font-size: 20px; color: #fff; background: transparent; border: 0; cursor: not-allowed; }
.drawer-body { padding: 16px; font-size: 13px; line-height: 1.5; }
</style>
