<template>
  <div class="demo-container">
    <div class="controls">
      <h3>动态更新位置和尺寸测试</h3>
      <div class="control-group">
        <label>X: <input v-model.number="newX" type="number" /></label>
        <label>Y: <input v-model.number="newY" type="number" /></label>
      </div>
      <div class="control-group">
        <label>宽度: <input v-model.number="newWidth" type="number" /></label>
        <label>高度: <input v-model.number="newHeight" type="number" /></label>
      </div>
      <button @click="updatePositionAndSize">
        更新位置和尺寸
      </button>
      <button @click="updatePositionOnly">
        仅更新位置
      </button>
      <button @click="updateSizeOnly">
        仅更新尺寸
      </button>
      <button @click="randomUpdate">
        随机更新
      </button>
      <button @click="resetToInitial">
        重置到初始值
      </button>
    </div>

    <div class="demo-area">
      <DraggableResizableWrapper
        ref="wrapperRef"
        :initial-x="x"
        :initial-y="y"
        :initial-width="width"
        :initial-height="height"
        :draggable="true"
        :resizable="true"
        @drag-end="onDragEnd"
        @resize-end="onResizeEnd"
      >
        <template #default="{ x, y, width, height }">
          <div class="test-box">
            <div class="info">
              <p>位置: ({{ Math.round(x) }}, {{ Math.round(y) }})</p>
              <p>尺寸: {{ Math.round(width) }} × {{ Math.round(height) }}</p>
              <p class="tip">
                拖拽我或调整边缘试试！
              </p>
            </div>
          </div>
        </template>
      </DraggableResizableWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import DraggableResizableWrapper from '../../src/components/DraggableResizableWrapper.vue'

// 初始值
const x = ref(50)
const y = ref(50)
const width = ref(200)
const height = ref(150)

// 新值输入
const newX = ref(100)
const newY = ref(100)
const newWidth = ref(250)
const newHeight = ref(200)

// 组件引用
const wrapperRef = ref<InstanceType<typeof DraggableResizableWrapper>>()

// 更新位置和尺寸
const updatePositionAndSize = () => {
  if (wrapperRef.value) {
    wrapperRef.value.updatePositionAndSize(newX.value, newY.value, newWidth.value, newHeight.value)
  }
}

// 仅更新位置
const updatePositionOnly = () => {
  if (wrapperRef.value) {
    wrapperRef.value.updatePosition(newX.value, newY.value)
  }
}

// 仅更新尺寸
const updateSizeOnly = () => {
  if (wrapperRef.value) {
    wrapperRef.value.updateSize(newWidth.value, newHeight.value)
  }
}

// 随机更新
const randomUpdate = () => {
  const maxX = 400
  const maxY = 300
  const minSize = 100
  const maxSize = 300
  
  newX.value = Math.floor(Math.random() * maxX)
  newY.value = Math.floor(Math.random() * maxY)
  newWidth.value = Math.floor(Math.random() * (maxSize - minSize)) + minSize
  newHeight.value = Math.floor(Math.random() * (maxSize - minSize)) + minSize
  
  updatePositionAndSize()
}

// 重置到初始值
const resetToInitial = () => {
  newX.value = 50
  newY.value = 50
  newWidth.value = 200
  newHeight.value = 150
  updatePositionAndSize()
}

// 拖拽结束回调
const onDragEnd = (data: any) => {
  console.log('拖拽结束:', data)
  // 更新输入框的值以反映当前状态
  newX.value = Math.round(data.left)
  newY.value = Math.round(data.top)
}

// 调整大小结束回调
const onResizeEnd = (data: any) => {
  console.log('调整大小结束:', data)
  // 更新输入框的值以反映当前状态
  newWidth.value = Math.round(data.width)
  newHeight.value = Math.round(data.height)
  newX.value = Math.round(data.left)
  newY.value = Math.round(data.top)
}
</script>

<style scoped>
.demo-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.controls {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  min-width: 280px;
  padding: 25px;
  background: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 20%);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 10%);
}

.controls h3 {
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.control-group label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: #555;
}

.control-group input {
  width: 100px;
  padding: 8px 12px;
  font-size: 14px;
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.control-group input:focus {
  background: white;
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 10%);
}

button {
  padding: 12px 20px;
  margin: 8px 4px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  border: 0;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 30%);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

button:hover {
  box-shadow: 0 6px 20px rgba(76, 175, 80, 40%);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

button:nth-child(2n) {
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
  box-shadow: 0 4px 15px rgba(33, 150, 243, 30%);
}

button:nth-child(2n):hover {
  box-shadow: 0 6px 20px rgba(33, 150, 243, 40%);
}

button:nth-child(3n) {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
  box-shadow: 0 4px 15px rgba(255, 152, 0, 30%);
}

button:nth-child(3n):hover {
  box-shadow: 0 6px 20px rgba(255, 152, 0, 40%);
}

.demo-area {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 5%);
}

.test-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 30%);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 20%);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.test-box:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 30%);
  transform: scale(1.02);
}

.info {
  padding: 20px;
  text-align: center;
}

.info p {
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 30%);
}

.info .tip {
  margin-top: 15px;
  font-size: 14px;
  font-style: italic;
  opacity: 90%;
}

@media (width <= 768px) {
  .controls {
    position: relative;
    top: 0;
    right: 0;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .demo-area {
    height: 400px;
  }
}
</style>