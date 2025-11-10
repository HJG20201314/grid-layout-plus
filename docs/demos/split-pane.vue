<template>
  <div class="split-container">
    <div 
      ref="leftPaneRef" 
      class="pane left"
      :style="leftPaneStyle"
    >
      <strong>Left Pane</strong>
      <div class="info">
        width: {{ splitState.leftWidth }}px
      </div>
    </div>
    <div 
      ref="rightPaneRef" 
      class="pane right"
      :style="rightPaneStyle"
    >
      <strong>Right Pane</strong>
      <div class="info">
        width: {{ splitState.rightWidth }}px
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { makeElementDraggableResizable } from '../../src/utils/interact-helper'

// 分割面板状态
const splitState = ref({
  leftWidth: 300, // 左侧面板初始宽度
  containerWidth: 0, // 容器总宽度
  rightWidth: 0, // 右侧面板宽度
})

// 引用左右面板元素
const leftPaneRef = ref<HTMLElement>()
const rightPaneRef = ref<HTMLElement>()

// 存储销毁函数
let destroyResize: (() => void) | null = null

// 计算左侧面板样式
const leftPaneStyle = computed(() => ({
  width: `${splitState.value.leftWidth}px`,
}))

// 计算右侧面板样式
const rightPaneStyle = computed(() => ({
  flex: 1, // 自适应剩余宽度
  minWidth: '200px', // 右侧最小宽度
}))

// 更新容器尺寸
const updateContainerSize = () => {
  if (leftPaneRef.value) {
    const container = leftPaneRef.value.parentElement
    if (container) {
      splitState.value.containerWidth = container.offsetWidth
      splitState.value.rightWidth = container.offsetWidth - splitState.value.leftWidth
    }
  }
}

// 处理窗口大小变化
const handleResize = () => {
  updateContainerSize()
  
  // 确保左侧面板不超过最大宽度限制
  if (splitState.value.leftWidth > splitState.value.containerWidth - 200) {
    splitState.value.leftWidth = splitState.value.containerWidth - 200
    splitState.value.rightWidth = 200
    
    // 如果窗口大小变化导致最大宽度改变，需要重新创建resize功能
    if (destroyResize) {
      destroyResize()
      
      if (leftPaneRef.value) {
        destroyResize = makeElementDraggableResizable(
          leftPaneRef.value,
          {
            draggable: false,
            resizable: true,
            resizeOptions: {
              edges: { right: true },
              minWidth: 200,
              maxWidth: 'calc(100% - 200px)',
              margin: 0,
            },
          },
          {
            onResize: (data) => {
              // if (data.type === 'resizemove') {
              //   splitState.value.leftWidth = data.width
              //   splitState.value.rightWidth = splitState.value.containerWidth - data.width
              // }
            },
          },
        )
      }
    }
  }
}

// 初始化部分
onMounted(() => {
  updateContainerSize()
  
  // 添加窗口大小变化监听
  window.addEventListener('resize', handleResize)
  
  // 初始化左侧面板拖拽功能
  if (leftPaneRef.value) {
    // 使用interact-helper实现拖拽功能，并直接在resizeOptions中设置maxWidth为calc语法
    destroyResize = makeElementDraggableResizable(
      leftPaneRef.value,
      {
        draggable: false,
        resizable: true,
        resizeOptions: {
          edges: { right: true },
          minWidth: 200,
          maxWidth: 'calc(100% - 200px)',
          margin: 0,
        },
      },
      {
        onResize: (data) => {
          if (data.type === 'resizemove') {
            // 直接使用data.width，interact-helper已经应用了maxWidth限制
            splitState.value.leftWidth = data.width
            
            // 更新右侧宽度
            splitState.value.rightWidth = splitState.value.containerWidth - data.width
          }
        },
      },
    )
  }
})

onUnmounted(() => {
  // 移除窗口大小变化监听
  window.removeEventListener('resize', handleResize)
  
  // 销毁拖拽功能
  if (destroyResize) {
    destroyResize()
  }
})
</script>

<style scoped>
.split-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: 10px; /* 两个盒子间隔10px */
  width: 100%;
  height: 400px;
  padding: 10px;
  background: #f5f5f5;
  border: 1px solid #ccc;
}

.pane {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  font-size: 14px;
  background: #fff;
  border: 1px solid #d0d0d0;
  transition: background-color 0.2s ease;
}

.pane.left {
  position: relative;
  min-width: 200px; /* 左侧最小宽度200px */
  max-width: calc(100% - 200px); /* 左侧最大宽度 */
  background: #eef6ff;
}

.pane.right {
  min-width: 200px; /* 右侧最小宽度200px */
  background: #fafafa;
}

.info {
  font-size: 12px;
  color: #666;
}
</style>