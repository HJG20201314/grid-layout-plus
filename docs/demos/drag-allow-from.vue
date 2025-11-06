<template>
  <div class="demo-container">
    <h2>指定拖拽触发区域 (allowFrom)</h2>
    <p>本示例展示如何通过 <code>allowFrom</code> 属性指定只允许通过特定元素触发拖拽功能。</p>
    
    <div class="demo-wrapper">
      <!-- 示例1: 通过标题栏拖拽 -->
      <div class="example-card">
        <h3>示例1: 通过标题栏拖拽</h3>
        <div 
          ref="draggableElement1" 
          class="draggable-box"
        >
          <div class="drag-handle title-bar">
            <span>📋 标题栏 - 点击这里拖拽</span>
          </div>
          <div class="content">
            <p>此区域不可拖拽，只有标题栏可拖拽</p>
          </div>
        </div>
      </div>
      
      <!-- 示例2: 通过图标拖拽 -->
      <div class="example-card">
        <h3>示例2: 通过图标拖拽</h3>
        <div 
          ref="draggableElement2" 
          class="draggable-box"
        >
          <div class="drag-handle icon-handle">
            <span class="grip-icon">☰</span>
          </div>
          <div class="content">
            <p>点击左侧的拖拽图标来移动此框</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="demo-code">
      <h3>代码示例</h3>
      <pre><code>{{ codeExample }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { makeElementDraggableResizable } from '../../src/utils'

// 元素引用
const draggableElement1 = ref<HTMLElement>()
const draggableElement2 = ref<HTMLElement>()

// 清理函数引用
const cleanupFunctions: (() => void)[] = []

// 代码示例
const codeExample = `// 示例1: 通过标题栏拖拽
makeElementDraggableResizable(element, {
  dragOptions: {
    allowFrom: '.title-bar', // 只允许通过.title-bar元素拖拽
    threshold: 8 // 降低节流阈值以提高拖拽流畅度
  }
})

// 示例2: 通过图标拖拽
makeElementDraggableResizable(element, {
  dragOptions: {
    allowFrom: '.icon-handle', // 只允许通过.icon-handle元素拖拽
    threshold: 8 // 降低节流阈值以提高拖拽流畅度
  }
})`

onMounted(() => {
  // 初始化拖拽功能
  if (draggableElement1.value) {
    const cleanup1 = makeElementDraggableResizable(draggableElement1.value, {
      dragOptions: {
        allowFrom: '.title-bar', // 只允许通过标题栏拖拽
        threshold: 8, // 降低节流阈值以提高拖拽流畅度
      },
    }, {
      onDrag: (data) => {
        if (data.type === 'dragmove') {
          console.log('Box 1 moved:', data)
        }
      },
    })
    cleanupFunctions.push(cleanup1)
  }
  
  if (draggableElement2.value) {
    const cleanup2 = makeElementDraggableResizable(draggableElement2.value, {
      dragOptions: {
        allowFrom: '.icon-handle', // 只允许通过图标拖拽
        threshold: 8, // 降低节流阈值以提高拖拽流畅度
      },
    }, {
      onDrag: (data) => {
        if (data.type === 'dragmove') {
          console.log('Box 2 moved:', data)
        }
      },
    })
    cleanupFunctions.push(cleanup2)
  }
})

onUnmounted(() => {
  // 清理资源
  cleanupFunctions.forEach(cleanup => cleanup())
})
</script>

<style scoped>
.demo-container {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 40px;
  min-width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.draggable-box {
  position: relative;
  width: 300px;
  min-height: 150px;
  overflow: hidden;
  cursor: default;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);
  transition: box-shadow 0.2s ease;
}

.draggable-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 15%);
}

.title-bar {
  padding: 12px 16px;
  font-weight: 500;
  color: white;
  cursor: move;
  user-select: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.icon-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  cursor: move;
  user-select: none;
  background: #f0f0f0;
}

.grip-icon {
  font-size: 18px;
  color: #666;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 20px;
  padding-left: 60px;
  color: #555;
}

.draggable-box:nth-child(1) .content {
  padding-left: 20px;
}

.demo-code {
  padding: 0;
  margin-top: 40px;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 8px;
}

.demo-code h3 {
  padding: 15px 20px;
  margin: 0;
  font-size: 16px;
  color: #495057;
  background: #e9ecef;
}

pre {
  padding: 20px;
  margin: 0;
  overflow-x: auto;
  font-family: Consolas, Monaco, "Courier New", monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #f8f8f2;
  background: #2d2d2d;
}

code {
  padding: 2px 4px;
  font-family: Consolas, Monaco, "Courier New", monospace;
  font-size: 0.9em;
  background: #e9ecef;
  border-radius: 4px;
}

pre code {
  padding: 0;
  background: none;
}

h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

h3 {
  margin-bottom: 15px;
  color: #495057;
}

p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #6c757d;
}
</style>