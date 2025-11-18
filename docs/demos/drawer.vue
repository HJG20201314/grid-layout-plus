<template>
  <div class="drawer-container">
    <div class="drawer-backdrop" @click="toggleDrawer"></div>
    
    <!-- 场景选择器 -->
    <div class="scene-selector">
      <label>选择调整大小模式：</label>
      <select v-model="currentMode" @change="handleModeChange">
        <option value="right-fixed">
          1. 右边固定，左边resize
        </option>
        <option value="left-fixed">
          2. 左边固定，右边resize
        </option>
        <option value="bottom-fixed">
          3. 下边固定，上边resize
        </option>
        <option value="top-fixed">
          4. 上边固定，下边resize
        </option>
      </select>
    </div>
    
    <div 
      ref="drawerRef" 
      class="drawer" 
      :style="drawerStyle"
    >
      <div class="drawer-header">
        <span>抽屉面板</span>
        <button class="close-btn" @click="toggleDrawer">
          ×
        </button>
      </div>
      <div 
        class="drawer-resize-handle" 
        :class="{ 
          'resize-left': currentMode === 'right-fixed',
          'resize-right': currentMode === 'left-fixed',
          'resize-top': currentMode === 'bottom-fixed',
          'resize-bottom': currentMode === 'top-fixed'
        }"
      ></div>
      <div class="drawer-body">
        <h3>抽屉内容</h3>
        <p>{{ currentModeText }}</p>
        <template v-if="isHorizontalMode">
          <p>最小宽度: 300px</p>
          <p>最大宽度: 800px</p>
        </template>
        <template v-else>
          <p>最小高度: 200px</p>
          <p>最大高度: 600px</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { type DraggableResizableResult, makeElementDraggableResizable } from '../../src/utils/interact-helper'

// 抽屉状态
const drawerState = ref({
  width: 400, // 初始宽度
  height: 400, // 初始高度
})

// 当前选择的模式
const currentMode = ref('right-fixed')

// 抽屉引用
const drawerRef = ref<HTMLElement>()
let draggableResizableResult: DraggableResizableResult | null = null

// 判断是否为水平方向的模式
const isHorizontalMode = computed(() => {
  return currentMode.value === 'right-fixed' || currentMode.value === 'left-fixed'
})

// 当前模式的文本描述
const currentModeText = computed(() => {
  const modeTexts: Record<string, string> = {
    'right-fixed': '这是一个右侧固定，从左侧调整大小的抽屉组件',
    'left-fixed': '这是一个左侧固定，从右侧调整大小的抽屉组件',
    'bottom-fixed': '这是一个底部固定，从顶部调整大小的抽屉组件',
    'top-fixed': '这是一个顶部固定，从底部调整大小的抽屉组件',
  }
  return modeTexts[currentMode.value] || ''
})

// 计算抽屉的样式
const drawerStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (isHorizontalMode.value) {
    style.width = drawerState.value.width + 'px'
    style.height = '100%' // 水平模式下保持高度100%
  } else {
    style.height = drawerState.value.height + 'px'
    style.width = '100%' // 垂直模式下保持宽度100%
  }
  
  return style
})

// 切换抽屉显示/隐藏
const toggleDrawer = () => {
  // 这里可以实现抽屉的开关逻辑
  // 为了演示，我们保持抽屉一直显示
}

// 处理模式切换
const handleModeChange = () => {
  if (!drawerRef.value) return
  
  // 获取新的模式配置
  const resizeConfig = getResizeConfig()
  
  // 1. 先更新基础样式，确保模式切换时元素位置和尺寸正确
  // 这一步在清理旧功能之前执行，避免过渡期间的闪烁
  drawerRef.value.style.position = 'absolute'
  drawerRef.value.style.top = resizeConfig.position.top || 'auto'
  drawerRef.value.style.bottom = resizeConfig.position.bottom || 'auto'
  drawerRef.value.style.left = resizeConfig.position.left || 'auto'
  drawerRef.value.style.right = resizeConfig.position.right || 'auto'
  
  if (isHorizontalMode.value) {
    drawerRef.value.style.height = '100%'
    drawerRef.value.style.width = drawerState.value.width + 'px'
  } else {
    drawerRef.value.style.width = '100%'
    drawerRef.value.style.height = drawerState.value.height + 'px'
  }
  
  // 2. 清理现有的拖拽调整大小功能
  if (draggableResizableResult) {
    draggableResizableResult.cleanup()
    draggableResizableResult = null
  }
  
  // 3. 重新初始化拖拽调整大小功能
  initResizeFunctionality()
}

// 获取当前模式对应的resize配置
const getResizeConfig = () => {
  const configs: Record<string, any> = {
    'right-fixed': {
      position: {
        right: '0',
        left: 'auto',
      },
      edges: {
        left: true,
        top: false,
        right: false,
        bottom: false,
      },
      minWidth: 300,
      maxWidth: 800,
    },
    'left-fixed': {
      position: {
        left: '0',
        right: 'auto',
      },
      edges: {
        left: false,
        top: false,
        right: true,
        bottom: false,
      },
      minWidth: 300,
      maxWidth: 800,
    },
    'bottom-fixed': {
      position: {
        bottom: '0',
        top: 'auto',
      },
      edges: {
        left: false,
        top: true,
        right: false,
        bottom: false,
      },
      minHeight: 200,
      maxHeight: 600,
    },
    'top-fixed': {
      position: {
        top: '0',
        bottom: 'auto',
      },
      edges: {
        left: false,
        top: false,
        right: false,
        bottom: true,
      },
      minHeight: 200,
      maxHeight: 600,
    },
  }
  
  return configs[currentMode.value] || configs['right-fixed']
}

// 初始化拖拽调整大小功能
const initResizeFunctionality = () => {
  if (!drawerRef.value) return
  
  const resizeConfig = getResizeConfig()
  
  // 确保transform被禁用，避免与position定位冲突
  drawerRef.value.style.transform = 'none'
  
  // 确保位置属性值明确，避免浏览器默认值干扰
  drawerRef.value.style.top = resizeConfig.position.top || 'auto'
  drawerRef.value.style.bottom = resizeConfig.position.bottom || 'auto'
  drawerRef.value.style.left = resizeConfig.position.left || 'auto'
  drawerRef.value.style.right = resizeConfig.position.right || 'auto'
  
  // 初始化拖拽调整大小功能
  draggableResizableResult = makeElementDraggableResizable(
    drawerRef.value,
    {
      draggable: false,
      resizable: true,
      useCssTransforms: false,
      resizeOptions: {
        edges: resizeConfig.edges,
        minWidth: resizeConfig.minWidth,
        maxWidth: resizeConfig.maxWidth,
        minHeight: resizeConfig.minHeight,
        maxHeight: resizeConfig.maxHeight,
        margin: 8,
      },
    },
    {       onResize: (data) => {
      // 只更新抽屉尺寸状态，不再重新设置固定尺寸
      if (isHorizontalMode.value) {
        drawerState.value.width = data.width
      } else {
        drawerState.value.height = data.height
      }
    },
    },
  )
}

// 组件挂载时初始化
onMounted(() => {
  if (drawerRef.value) {
    initResizeFunctionality()
  }
})

// 组件卸载时清理
onUnmounted(() => {
  if (draggableResizableResult) {
    draggableResizableResult.cleanup()
  }
})
</script>

<style scoped>
.drawer-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
}

/* 场景选择器样式 */
.scene-selector {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 200;
  padding: 10px 15px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 15%);
}

.scene-selector label {
  margin-right: 10px;
  font-weight: 500;
  color: #262626;
}

.scene-selector select {
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.scene-selector select:hover {
  border-color: #40a9ff;
}

.scene-selector select:focus {
  border-color: #1890ff;
  outline: none;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 20%);
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 30%);
}

.drawer {
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 15%);
  transition: width 0.3s ease, height 0.3s ease;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #1890ff;
  border-bottom: 1px solid #e8e8e8;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  background: none;
  border: 0;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 10%);
  border-radius: 4px;
}

.drawer-resize-handle {
  position: absolute;
  z-index: 10;
}

/* 左侧调整大小 */
.drawer-resize-handle.resize-left {
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
}

/* 右侧调整大小 */
.drawer-resize-handle.resize-right {
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
}

/* 顶部调整大小 */
.drawer-resize-handle.resize-top {
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  cursor: row-resize;
}

/* 底部调整大小 */
.drawer-resize-handle.resize-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  cursor: row-resize;
}

.drawer-body {
  flex: 1;
  padding: 20px;
  overflow: auto;
  font-size: 14px;
}

.drawer-body h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #262626;
}

.drawer-body p {
  margin-bottom: 12px;
  color: #595959;
}
</style>