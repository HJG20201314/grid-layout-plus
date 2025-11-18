<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'

import { makeElementDraggableResizable } from '../../src/utils/interact-helper'

// 元素数据
const items = reactive([
  { w: 200, h: 100, i: '0', preserveAspectRatio: true, title: '保持宽高比' },
  { w: 200, h: 100, i: '1', preserveAspectRatio: false, title: '不保持宽高比' },
])

// 清理函数数组
const cleanupFunctions = ref<Array<() => void>>([])

// 创建resize配置
const createResizeOptions = (preserveAspectRatio: boolean) => {
  return {
    edges: { top: true, right: true, bottom: true, left: true },
    margin: 0,
    preserveAspectRatio,
    minWidth: 100,
    minHeight: 50,
    maxWidth: 400,
    maxHeight: 300,
  }
}

// 初始化元素
const initItems = () => {
  items.forEach(item => {
    const element = document.getElementById(`item-${item.i}`)
    if (element) {
      // 设置元素样式
      element.style.width = `${item.w}px`
      element.style.height = `${item.h}px`
      // 确保不使用position属性
      element.style.position = 'static'
      
      // 初始化调整大小功能
      const result = makeElementDraggableResizable(
        element,
        {
          draggable: true,
          resizable: true,
          resizeOptions: createResizeOptions(item.preserveAspectRatio),
        },
        {
          onResize: (data) => {
            console.log('onResize: ', data)
            // 更新数据
            item.w = data.width
            item.h = data.height
            
            // 同时更新元素的实际样式
            const element = document.getElementById(`item-${item.i}`)
            if (element) {
              element.style.width = `${data.width}px`
              element.style.height = `${data.height}px`
            }
          },
        },
      )
      
      cleanupFunctions.value.push(result.cleanup)
    }
  })
}

// 生命周期钩子
onMounted(() => {
  // 等待DOM渲染完成
  setTimeout(() => {
    initItems()
  }, 100)
})

onUnmounted(() => {
  // 清理所有实例
  cleanupFunctions.value.forEach(cleanup => cleanup())
})
</script>

<template>
  <div class="demo-container">
    <div class="demo-title">
      <h2>保持宽高比功能演示</h2>
      <p>展示元素的宽高比保持功能（不支持position属性）</p>
    </div>
    
    <div class="demo-section">
      <h3>元素调整大小演示</h3>
      <div class="demo-stage">
        <div
          v-for="item in items"
          :id="`item-${item.i}`"
          :key="item.i"
          class="demo-item"
        >
          <div class="demo-item-title">
            {{ item.title }}
          </div>
          <div class="demo-item-content">
            <p>尝试调整此元素的大小，观察宽高比变化</p>
            <p class="demo-item-dimensions">
              尺寸: {{ item.w.toFixed(0) }}×{{ item.h.toFixed(0) }}
            </p>
            <p class="demo-item-ratio">
              宽高比: {{ (item.w / item.h).toFixed(2) }}:1
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="demo-info">
      <h3>功能说明</h3>
      <ul>
        <li>保持宽高比选项允许在调整元素大小时保持原有的宽高比例</li>
        <li>无论从哪个边缘拖动，元素都会根据拖动方向自动计算并调整另一维度的尺寸</li>
        <li>注意：保持宽高比功能不支持position属性设置</li>
        <li>通过对比可以看出保持宽高比和不保持宽高比的区别</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}

.demo-title {
  margin-bottom: 30px;
  text-align: center;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-stage {
  display: flex;
  gap: 20px;
  min-height: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px dashed #ccc;
  border-radius: 8px;
}

.demo-item {
  overflow: hidden;
  touch-action: none;
  user-select: none;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.demo-item-title {
  padding: 8px 12px;
  font-weight: bold;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.demo-item-content {
  padding: 12px;
  font-size: 14px;
  color: #333;
}

.demo-item-dimensions,
.demo-item-ratio {
  padding: 4px 8px;
  margin: 8px 0 0;
  font-family: monospace;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.demo-info {
  padding: 20px;
  margin-top: 40px;
  background-color: #e3f2fd;
  border-radius: 8px;
}

.demo-info h3 {
  margin-top: 0;
  color: #1565c0;
}

.demo-info ul {
  line-height: 1.6;
  color: #37474f;
}
</style>