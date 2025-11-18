<template>
  <div class="example-container">
    <h2>DraggableResizableWrapper 使用示例</h2>
    
    <!-- 控制面板 -->
    <div class="control-panel">
      <label>
        <input v-model="draggable" type="checkbox" />
        可拖拽
      </label>
      <label>
        <input v-model="resizable" type="checkbox" />
        可调整大小
      </label>
      
      <div class="resize-edges">
        <h4>调整大小边缘:</h4>
        <label>
          <input v-model="resizeEdges.top" type="checkbox" />
          顶部
        </label>
        <label>
          <input v-model="resizeEdges.right" type="checkbox" />
          右侧
        </label>
        <label>
          <input v-model="resizeEdges.bottom" type="checkbox" />
          底部
        </label>
        <label>
          <input v-model="resizeEdges.left" type="checkbox" />
          左侧
        </label>
      </div>
    </div>

    <!-- 拖拽区域 -->
    <div class="drag-area">
      <DraggableResizableWrapper
        :draggable="draggable"
        :resizable="resizable"
        :use-css-transforms="useCssTransforms"
        :drag-options="dragOptions"
        :resize-options="resizeOptions"
        watch-deep
        :initial-x="50"
        :initial-y="50"
        :initial-width="300"
        :initial-height="200"
        @drag-start="handleDragStart"
        @drag-move="handleDragMove"
        @drag-end="handleDragEnd"
        @resize-start="handleResizeStart"
        @resize-move="handleResizeMove"
        @resize-end="handleResizeEnd"
      >
        <template #default="{ x, y, width, height, isDragging, isResizing, activeEdges }">
          <div class="demo-box" :class="{ dragging: isDragging, resizing: isResizing }">
            <h3>可拖拽调整大小的盒子</h3>
            <div class="info">
              <p>位置: ({{ Math.round(x) }}, {{ Math.round(y) }})</p>
              <p>尺寸: {{ Math.round(width) }} × {{ Math.round(height) }}</p>
              <p v-if="isDragging">
                正在拖拽...
              </p>
              <p v-if="isResizing">
                正在调整大小...
              </p>
              <div v-if="isResizing" class="active-edges">
                活跃边缘: 
                <span v-if="activeEdges.top">顶部</span>
                <span v-if="activeEdges.right">右侧</span>
                <span v-if="activeEdges.bottom">底部</span>
                <span v-if="activeEdges.left">左侧</span>
              </div>
            </div>
          </div>
        </template>
      </DraggableResizableWrapper>

      <!-- 第二个示例 - 卡片样式 -->
      <DraggableResizableWrapper
        :draggable="draggable"
        :resizable="resizable"
        :use-css-transforms="useCssTransforms"
        :resize-options="{ edges: { top: true, right: true, bottom: true, left: true }, margin: 8 }"
        :initial-x="400"
        :initial-y="100"
        :initial-width="250"
        :initial-height="150"
      >
        <template #default="{ isDragging, isResizing }">
          <div class="demo-card" :class="{ dragging: isDragging, resizing: isResizing }">
            <div class="card-header">
              <h4>卡片标题</h4>
              <button class="close-btn">
                ×
              </button>
            </div>
            <div class="card-content">
              <p>这是一个可拖拽和调整的卡片组件示例。</p>
            </div>
          </div>
        </template>
      </DraggableResizableWrapper>
    </div>

    <!-- 事件日志 -->
    <div class="event-log">
      <h3>事件日志</h3>
      <div class="log-content">
        <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
          {{ log }}
        </div>
      </div>
      <button class="clear-btn" @click="clearLogs">
        清空日志
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import DraggableResizableWrapper from '../../src/components/DraggableResizableWrapper.vue'

import type { DragEventCallbackData, ResizeEventCallbackData } from '../../src/utils/interact-helper'

// 控制状态
const draggable = ref(true)
const resizable = ref(true)
const useCssTransforms = ref(true)
const resizeEdges = ref({
  top: true,
  right: true,
  bottom: true,
  left: true,
})

// 事件日志
const eventLogs = ref<string[]>([])

// 计算属性 - 拖拽选项
const dragOptions = computed(() => ({
  threshold: 2, // 拖拽阈值
}))

// 计算属性 - 调整大小选项
const resizeOptions = computed(() => ({
  edges: resizeEdges.value,
  margin: 8,
  minWidth: 100,
  minHeight: 80,
  maxWidth: 600,
  maxHeight: 400,
}))

// 事件处理函数
const addLog = (message: string) => {
  const timestamp = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${timestamp}] ${message}`)
  if (eventLogs.value.length > 50) {
    eventLogs.value = eventLogs.value.slice(0, 50)
  }
}

const handleDragStart = (data: DragEventCallbackData) => {
  addLog(`拖拽开始 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`)
}

const handleDragMove = (data: DragEventCallbackData) => {
  addLog(`拖拽移动 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`)
}

const handleDragEnd = (data: DragEventCallbackData) => {
  addLog(`拖拽结束 - 位置: (${Math.round(data.left)}, ${Math.round(data.top)})`)
}

const handleResizeStart = (data: ResizeEventCallbackData) => {
  addLog(`调整大小开始 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`)
}

const handleResizeMove = (data: ResizeEventCallbackData) => {
  addLog(`调整大小移动 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`)
}

const handleResizeEnd = (data: ResizeEventCallbackData) => {
  addLog(`调整大小结束 - 尺寸: ${Math.round(data.width)} × ${Math.round(data.height)}`)
}

const clearLogs = () => {
  eventLogs.value = []
}
</script>

<style scoped>
.control-panel {
  padding: 20px;
  margin-bottom: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.control-panel h3 {
  margin-top: 0;
  color: #495057;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.control-group {
  flex: 1;
  min-width: 200px;
}

.control-group h4 {
  margin: 0 0 10px;
  font-size: 14px;
  color: #495057;
}

.control-group label {
  display: block;
  margin: 8px 0;
  font-size: 14px;
  cursor: pointer;
}

.control-group input[type="checkbox"] {
  margin-right: 8px;
}

.drag-area {
  position: relative;
  min-height: 500px;
  padding: 20px;
  margin-bottom: 20px;
  background: #f0f0f0;
  border: 2px dashed #ccc;
  border-radius: 8px;
}

.demo-box {
  height: 100%;
  padding: 20px;
  background: white;
  border: 2px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);
}

.demo-box.dragging {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 20%);
  opacity: 80%;
}

.demo-box.resizing {
  outline: 2px solid #28a745;
  outline-offset: 2px;
}

.demo-box h3 {
  margin: 0 0 10px;
  color: #007bff;
}

.demo-box .info {
  font-size: 14px;
  color: #666;
}

.demo-box .info p {
  margin: 5px 0;
}

.demo-box .active-edges {
  margin-top: 10px;
  font-size: 12px;
}

.demo-box .active-edges span {
  padding: 2px 6px;
  margin-right: 4px;
  background: rgba(40, 167, 69, 10%);
  border-radius: 3px;
}

.demo-card {
  height: 100%;
  overflow: hidden;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);
  transition: color 0.2s ease, background 0.2s ease;
}

.demo-card.dragging {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 20%);
  opacity: 80%;
}

.demo-card.resizing {
  outline: 2px solid #28a745;
  outline-offset: 2px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.card-header h4 {
  margin: 0;
  color: #495057;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 20px;
  color: #6c757d;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
}

.close-btn:hover {
  color: #495057;
  background: #e9ecef;
}

.card-content {
  padding: 16px;
}

.card-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.event-log {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.event-log h3 {
  margin: 0 0 15px;
  color: #495057;
}

.log-content {
  max-height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  overflow-y: auto;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.log-item {
  padding: 2px 0;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
}

.log-item:last-child {
  border-bottom: 0;
}

.clear-btn {
  padding: 8px 16px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  background: #6c757d;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.clear-btn:hover {
  background: #5a6268;
}
</style>