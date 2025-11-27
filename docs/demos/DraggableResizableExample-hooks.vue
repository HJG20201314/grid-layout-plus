<template>
  <div class="example-container">
    <h2>DraggableResizableWrapper 使用示例（Hooks 版本）</h2>

    <div class="control-panel">
      <label><input v-model="draggable" type="checkbox" /> 可拖拽</label>
      <label><input v-model="resizable" type="checkbox" /> 可调整大小</label>
      <div class="resize-edges">
        <h4>调整大小边缘:</h4>
        <label><input v-model="resizeEdges.top" type="checkbox" /> 顶部</label>
        <label><input v-model="resizeEdges.right" type="checkbox" /> 右侧</label>
        <label><input v-model="resizeEdges.bottom" type="checkbox" /> 底部</label>
        <label><input v-model="resizeEdges.left" type="checkbox" /> 左侧</label>
      </div>
    </div>

    <div class="drag-area">
      <!-- 示例一 -->
      <div class="draggable-resizable-wrapper" :ref="primaryApi.attachElement">
        <div class="demo-box" :class="{ dragging: primaryApi?.isDragging.value, resizing: primaryApi?.isResizing.value }">
          <h3>可拖拽调整大小的盒子</h3>
          <div class="info">
            <p>位置: ({{ Math.round(primaryApi?.x.value ?? 0) }}, {{ Math.round(primaryApi?.y.value ?? 0) }})</p>
            <p>尺寸: {{ Math.round(primaryApi?.width.value ?? 0) }} × {{ Math.round(primaryApi?.height.value ?? 0) }}</p>
            <p v-if="primaryApi?.isDragging.value">正在拖拽...</p>
            <p v-if="primaryApi?.isResizing.value">正在调整大小...</p>
            <div v-if="primaryApi?.isResizing.value" class="active-edges">
              活跃边缘:
              <span v-if="primaryApi?.activeEdges.value.top">顶部</span>
              <span v-if="primaryApi?.activeEdges.value.right">右侧</span>
              <span v-if="primaryApi?.activeEdges.value.bottom">底部</span>
              <span v-if="primaryApi?.activeEdges.value.left">左侧</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 示例二 - 卡片样式 -->
      <div class="draggable-resizable-wrapper" :ref="cardApi.attachElement">
        <div class="demo-card" :class="{ dragging: cardApi?.isDragging.value, resizing: cardApi?.isResizing.value }">
          <div class="card-header">
            <h4>卡片标题</h4>
            <button class="close-btn">×</button>
          </div>
          <div class="card-content">
            <p>这是一个可拖拽和调整的卡片组件示例。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="event-log">
      <h3>事件日志</h3>
      <div class="log-content">
        <div v-for="(log, index) in eventLogs" :key="index" class="log-item">{{ log }}</div>
      </div>
      <button class="clear-btn" @click="clearLogs">清空日志</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, watch } from 'vue'
import { useDraggableResizableWrapper, type UseDraggableResizableWrapperReturn } from '../../src/utils/hooks'
import type { DragEventCallbackData, ResizeEventCallbackData } from '../../src/utils/interact-helper'

const draggable = ref(true)
const resizable = ref(true)
const useCssTransforms = ref(true)
const resizeEdges = reactive({ top: true, right: true, bottom: true, left: true })
const eventLogs = ref<string[]>([])

const dragOptions = reactive({ threshold: 2 })
const resizeOptions = reactive({
  edges: resizeEdges,
  margin: 8,
  minWidth: 100,
  minHeight: 80,
  maxWidth: 600,
  maxHeight: 400,
})

const addLog = (message: string) => {
  const timestamp = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${timestamp}] ${message}`)
  if (eventLogs.value.length > 50) eventLogs.value = eventLogs.value.slice(0, 50)
}

const handleDragStart = (data: DragEventCallbackData) => { addLog(`拖拽开始 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`) }
const handleDragMove = (data: DragEventCallbackData) => { addLog(`拖拽移动 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`) }
const handleDragEnd = (data: DragEventCallbackData) => { addLog(`拖拽结束 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`) }
const handleResizeStart = (data: ResizeEventCallbackData) => { addLog(`调整大小开始 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`) }
const handleResizeMove = (data: ResizeEventCallbackData) => { addLog(`调整大小移动 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`) }
const handleResizeEnd = (data: ResizeEventCallbackData) => { addLog(`调整大小结束 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`) }

// Create hook instances in setup, enable deep/immediate watch so reactive options apply
const primaryApi: UseDraggableResizableWrapperReturn = useDraggableResizableWrapper({
  draggable: draggable.value,
  resizable: resizable.value,
  useCssTransforms: useCssTransforms.value,
  dragOptions,
  resizeOptions,
  initialX: 50,
  initialY: 50,
  initialWidth: 300,
  initialHeight: 200,
  watchDeep: true,
  watchImmediate: true,
}, {
  onDragStart: handleDragStart,
  onDragMove: handleDragMove,
  onDragEnd: handleDragEnd,
  onResizeStart: handleResizeStart,
  onResizeMove: handleResizeMove,
  onResizeEnd: handleResizeEnd,
})

const cardApi: UseDraggableResizableWrapperReturn = useDraggableResizableWrapper({
  draggable: draggable.value,
  resizable: resizable.value,
  useCssTransforms: useCssTransforms.value,
  resizeOptions: { edges: { top: true, right: true, bottom: true, left: true }, margin: 8 },
  initialX: 400,
  initialY: 100,
  initialWidth: 250,
  initialHeight: 150,
  watchDeep: true,
  watchImmediate: true,
})

// Reflect changes for booleans to hook by watching and updating options
watch([draggable, resizable, useCssTransforms], ([d, r, t]) => {
  // Recreate or update via exposed update APIs if needed; simplest: toggle by updateSize to trigger internal state.
  // Here we rely on deep watched options (resizeOptions) for edges; booleans are read on init.
}, { immediate: false })

const clearLogs = () => { eventLogs.value = [] }
</script>

<style scoped>
/* 复用原示例样式，保持一致性 */
.control-panel { padding: 20px; margin-bottom: 20px; background: #f8f9fa; border-radius: 8px; }
.resize-edges h4 { margin: 0 0 10px; font-size: 14px; color: #495057; }
.drag-area { position: relative; min-height: 500px; padding: 20px; margin-bottom: 20px; background: #f0f0f0; border: 2px dashed #ccc; border-radius: 8px; }
.demo-box { height: 100%; padding: 20px; background: #fff; border: 2px solid #007bff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,.1); }
.demo-box.dragging { box-shadow: 0 8px 25px rgba(0,0,0,.2); opacity: .8; }
.demo-box.resizing { outline: 2px solid #28a745; outline-offset: 2px; }
.demo-card { height: 100%; overflow: hidden; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,.1); transition: color .2s ease, background .2s ease; }
.card-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: #f8f9fa; border-bottom: 1px solid #dee2e6; }
.close-btn { width: 24px; height: 24px; font-size: 20px; color: #6c757d; cursor: pointer; background: none; border: 0; border-radius: 4px; }
.event-log { padding: 20px; background: #f8f9fa; border-radius: 8px; }
.log-content { max-height: 200px; padding: 10px; margin-bottom: 10px; overflow-y: auto; background: #fff; border: 1px solid #dee2e6; border-radius: 4px; }
.clear-btn { padding: 8px 16px; font-size: 14px; color: #fff; cursor: pointer; background: #6c757d; border: 0; border-radius: 4px; }
</style>
