<template>
  <div class="drawer-wrapper-demo">
    <div class="scene-selector">
      <label>选择模式：</label>
      <select v-model="mode">
        <option value="right-fixed">
          1. 右侧固定，左侧缩放
        </option>
        <option value="left-fixed">
          2. 左侧固定，右侧缩放
        </option>
        <option value="bottom-fixed">
          3. 底部固定，顶部缩放
        </option>
        <option value="top-fixed">
          4. 顶部固定，底部缩放
        </option>
      </select>
    </div>

    <!-- 水平方向抽屉：宽度可变，高度占满，锚定 left/right 之一 -->
    <DraggableResizableWrapper
      v-if="isHorizontal"
      :key="'horizontal-' + mode"
      :draggable="false"
      :initial-x="0"
      :initial-y="0"
      :initial-width="initialWidth"
      :initial-height="'100vh'"
      :use-css-transforms="false"
      :resize-options="resizeOptions"
      :style="wrapperAnchorStyle"
    >
      <template #default="{ width }">
        <div class="drawer-panel">
          <div class="drawer-header">
            <span>抽屉面板 ({{ modeLabel }})</span>
            <button class="close-btn" disabled>
              ×
            </button>
          </div>
          <div class="drawer-body">
            <p>当前宽度: {{ Math.round(width) }}px</p>
            <p>最小宽度: {{ resizeOptions.minWidth }} / 最大宽度: {{ resizeOptions.maxWidth }}</p>
            <p>通过 DraggableResizableWrapper 固定一边，使用另一边缩放。</p>
          </div>
        </div>
      </template>
    </DraggableResizableWrapper>

    <!-- 垂直方向抽屉：高度可变，宽度占满，锚定 top/bottom 之一 -->
    <DraggableResizableWrapper
      v-else
      :key="'vertical-' + mode"
      :draggable="false"
      :initial-x="0"
      :initial-y="0"
      :initial-width="'100vw'"
      :initial-height="initialHeight"
      :use-css-transforms="false"
      :resize-options="resizeOptions"
      :style="wrapperAnchorStyle"
    >
      <template #default="{ height }">
        <div class="drawer-panel vertical">
          <div class="drawer-header">
            <span>抽屉面板 ({{ modeLabel }})</span>
            <button class="close-btn" disabled>
              ×
            </button>
          </div>
          <div class="drawer-body">
            <p>当前高度: {{ Math.round(height) }}px</p>
            <p>最小高度: {{ resizeOptions.minHeight }} / 最大高度: {{ resizeOptions.maxHeight }}</p>
            <p>通过 DraggableResizableWrapper 固定一边，使用另一边缩放。</p>
          </div>
        </div>
      </template>
    </DraggableResizableWrapper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import DraggableResizableWrapper from '../../src/components/DraggableResizableWrapper.vue'

const mode = ref<'right-fixed' | 'left-fixed' | 'bottom-fixed' | 'top-fixed'>('right-fixed')

const isHorizontal = computed(() => mode.value === 'right-fixed' || mode.value === 'left-fixed')

// 初始尺寸
const initialWidth = '400px'
const initialHeight = '300px'

// 缩放配置（固定另一侧）
const resizeOptions = computed(() => {
  if (mode.value === 'right-fixed') {
    return { edges: { left: true }, minWidth: 300, maxWidth: 'calc(100vw - 272px)', margin: 8 }
  }
  if (mode.value === 'left-fixed') {
    return { edges: { right: true }, minWidth: 300, maxWidth: 800, margin: 8 }
  }
  if (mode.value === 'bottom-fixed') {
    return { edges: { top: true }, minHeight: 200, maxHeight: 600, margin: 8 }
  }
  return { edges: { bottom: true }, minHeight: 200, maxHeight: 600, margin: 8 }
})

const modeLabel = computed(() => {
  switch (mode.value) {
    case 'right-fixed': return '右侧固定 (左边缩放)'
    case 'left-fixed': return '左侧固定 (右边缩放)'
    case 'bottom-fixed': return '底部固定 (顶部缩放)'
    case 'top-fixed': return '顶部固定 (底部缩放)'
  }
})

// 锚定样式直接应用在 wrapper 根元素上
const wrapperAnchorStyle = computed(() => {
  const style: Record<string, string> = { position: 'absolute' }
  if (mode.value === 'right-fixed') {
    style.right = '0'; style.top = '0'; style.bottom = '0'
  } else if (mode.value === 'left-fixed') {
    style.left = '0'; style.top = '0'; style.bottom = '0'
  } else if (mode.value === 'bottom-fixed') {
    style.left = '0'; style.right = '0'; style.bottom = '0'
  } else if (mode.value === 'top-fixed') {
    style.left = '0'; style.right = '0'; style.top = '0'
  }
  return style
})
</script>

<style scoped>
.drawer-wrapper-demo {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
}
.scene-selector {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1000;
  padding: 8px 12px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  font-size: 14px;
}
.scene-selector select { margin-left: 8px; }

:deep(.draggable-resizable-wrapper) {
  position: absolute;
}
.drawer-panel {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  width: 100%;
  height: 100%;
}
.drawer-panel.vertical { width: 100%; }
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  font-weight: 600;
  color: #fff;
  background: #1890ff;
  user-select: none;
}
.close-btn {
  width: 28px;
  height: 28px;
  font-size: 20px;
  color: #fff;
  background: transparent;
  border: 0;
  cursor: not-allowed;
}
.drawer-body { padding: 16px; font-size: 13px; line-height: 1.5; }
</style>
