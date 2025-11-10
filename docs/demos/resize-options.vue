<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'

import { makeElementDraggableResizable } from '../../src/utils/interact-helper'

// 展示各种resize配置选项
const items = reactive([
  { x: 10, y: 10, w: 180, h: 90, i: '0' },
  { x: 200, y: 10, w: 180, h: 90, i: '1' },
  { x: 10, y: 120, w: 120, h: 90, i: '2' },
  { x: 150, y: 120, w: 240, h: 90, i: '3' },
])

const dragOptions = reactive({
  allowFrom: '.title-bar',
})

// 配置选项
const resizeOption = reactive({
  // 启用的边缘
  enabledEdges: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  // 边距设置
  margin: 6,
  // 是否保持宽高比
  preserveAspectRatio: false,
  // 最小宽度
  minWidth: 100,
  // 最小高度
  minHeight: 60,
  // 最大宽度
  maxWidth: 300,
  // 最大高度
  maxHeight: 200,
})

// 清理函数数组
const cleanupFunctions = ref<Array<() => void>>([])

// 计算当前的resizeOption配置
const currentResizeOption = () => {
  const options: any = {
    edges: { ...resizeOption.enabledEdges },
    margin: resizeOption.margin,
    preserveAspectRatio: resizeOption.preserveAspectRatio,
    minWidth: resizeOption.minWidth,
    minHeight: resizeOption.minHeight,
    maxWidth: resizeOption.maxWidth,
    maxHeight: resizeOption.maxHeight,
  }
  
  console.log('Current resize options:', options)
  return options
}

// 事件处理
const onResizeStart = (item: any, event: any) => {
  console.log('Resize start:', item.i, event)
}

const onResizeEnd = (item: any, event: any) => {
  // 更新项目数据
  item.w = event.width
  item.h = event.height
  item.x = event.left
  item.y = event.top
}

const onDragEnd = (item: any, event: any) => {
  // 更新项目位置
  item.x = event.left
  item.y = event.top
}

// 初始化拖拽和调整大小功能
const initDraggableResizable = () => {
  console.log('Initializing draggable resizable elements...')
  
  // 先清理之前的实例
  cleanupFunctions.value.forEach(cleanup => cleanup())
  cleanupFunctions.value = []
  
  // 确保至少有一条边启用
  const hasEnabledEdges = Object.values(resizeOption.enabledEdges).some(enabled => enabled)
  if (!hasEnabledEdges) {
    console.warn('No edges enabled for resizing!')
    // 默认启用右边和下边
    resizeOption.enabledEdges.right = true
    resizeOption.enabledEdges.bottom = true
  }
  
  // 为每个项目初始化
  items.forEach(item => {
    const element = document.getElementById(`item-${item.i}`)
    if (element) {
      console.log(`Initializing item ${item.i}`)
      
      // 重置元素样式，确保正确的定位和尺寸
      element.style.position = 'absolute'
      element.style.width = `${item.w}px`
      element.style.height = `${item.h}px`
      element.style.left = `${item.x}px`
      element.style.top = `${item.y}px`
      element.style.zIndex = '1'
      
      // 确保元素可以被选中和拖拽
      element.style.userSelect = 'none'
      element.style.touchAction = 'none'
      
      // 创建拖拽和调整大小功能
      try {
        const options = {
          draggable: true,
          resizable: true,
          resizeOptions: currentResizeOption(),
        }
        
        console.log(`Applying options to item ${item.i}:`, options)
        
        const cleanup = makeElementDraggableResizable(
          element,
          options,
          {
            onResize: (data) => {
              console.log(`Resize event for item ${item.i}:`, data)
              if (data.type === 'resizestart') {
                onResizeStart(item, data)
              } else if (data.type === 'resizeend') {
                onResizeEnd(item, data)
              }
            },
            onDrag: (data) => {
              if (data.type === 'dragend') {
                onDragEnd(item, data)
              }
            },
          },
        )
        
        cleanupFunctions.value.push(cleanup)
        console.log(`Initialized item ${item.i} successfully`)
      } catch (error) {
        console.error(`Failed to initialize item ${item.i}:`, error)
      }
    } else {
      console.error(`Element not found for item ${item.i}`)
    }
  })
}

// 监听配置变化，重新初始化
const updateOptions = () => {
  initDraggableResizable()
}

// 生命周期钩子
onMounted(() => {
  // 等待DOM渲染完成
  setTimeout(() => {
    initDraggableResizable()
  }, 100)
})

onUnmounted(() => {
  // 清理所有实例
  cleanupFunctions.value.forEach(cleanup => cleanup())
})
</script>

<template>
  <div class="demo-container">
    <div class="control-panel">
      <h3>Resize配置选项</h3>
      
      <div class="control-group">
        <h4>启用的边缘</h4>
        <label>
          <input v-model="resizeOption.enabledEdges.top" type="checkbox" @change="updateOptions" />
          上边
        </label>
        <label>
          <input v-model="resizeOption.enabledEdges.right" type="checkbox" @change="updateOptions" />
          右边
        </label>
        <label>
          <input v-model="resizeOption.enabledEdges.bottom" type="checkbox" @change="updateOptions" />
          下边
        </label>
        <label>
          <input v-model="resizeOption.enabledEdges.left" type="checkbox" @change="updateOptions" />
          左边
        </label>
      </div>
      
      <div class="control-group">
        <h4>调整边距: {{ resizeOption.margin }}px</h4>
        <input 
          v-model.number="resizeOption.margin" 
          type="range" 
          min="0" 
          max="20" 
          step="1"
          @input="updateOptions"
        />
      </div>
      
      <div class="control-group">
        <label>
          <input v-model="resizeOption.preserveAspectRatio" type="checkbox" @change="updateOptions" />
          保持宽高比
        </label>
      </div>
      
      <div class="control-group">
        <h4>尺寸限制</h4>
        
        <div class="size-control">
          <label>最小宽度: {{ resizeOption.minWidth }}px</label>
          <input 
            v-model.number="resizeOption.minWidth" 
            type="range" 
            min="50" 
            max="200" 
            step="10"
            @input="updateOptions"
          />
        </div>
        
        <div class="size-control">
          <label>最小高度: {{ resizeOption.minHeight }}px</label>
          <input 
            v-model.number="resizeOption.minHeight" 
            type="range" 
            min="30" 
            max="150" 
            step="10"
            @input="updateOptions"
          />
        </div>
        
        <div class="size-control">
          <label>最大宽度: {{ resizeOption.maxWidth }}px</label>
          <input 
            v-model.number="resizeOption.maxWidth" 
            type="range" 
            min="200" 
            max="500" 
            step="20"
            @input="updateOptions"
          />
        </div>
        
        <div class="size-control">
          <label>最大高度: {{ resizeOption.maxHeight }}px</label>
          <input 
            v-model.number="resizeOption.maxHeight" 
            type="range" 
            min="100" 
            max="300" 
            step="20"
            @input="updateOptions"
          />
        </div>
      </div>
    </div>
    
    <div class="grid-container">
      <div 
        v-for="item in items" 
        :id="`item-${item.i}`"
        :key="item.i"
        class="resizable-item"
      >
        <div class="title-bar">
          拖拽区
        </div>
        <div class="text">
          <span>项目 {{ item.i }}</span>
          <div class="dimensions">
            W:{{ Math.round(item.w) }} H:{{ Math.round(item.h) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  gap: 20px;
  min-height: 400px;
  padding: 20px;
}

.control-panel {
  width: 280px;
  padding: 20px;
  font-size: 14px;
  background: #f5f5f5;
  border-radius: 8px;
}

.control-group {
  margin-bottom: 20px;
}

.control-group h4 {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 600;
}

.control-group label {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.control-group input[type="range"] {
  width: 100%;
  margin-top: 5px;
}

.size-control {
  margin-bottom: 12px;
}

.size-control label {
  display: block;
  margin-bottom: 5px;
  font-size: 13px;
}

.grid-container {
  position: relative;
  flex: 1;
  min-height: 300px;
  overflow: auto;
  background-color: #eee;
  border-radius: 8px;
}

.resizable-item {
  position: absolute;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.title-bar {
  text-align: center;
  cursor: move;
  background-color: aquamarine;
  border-radius: 4px 4px 0 0;
}

.text {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
}

.dimensions {
  font-size: 12px;
  opacity: 80%;
}
</style>