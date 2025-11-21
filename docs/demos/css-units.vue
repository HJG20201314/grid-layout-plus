<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DraggableResizableWrapper from '../../src/components/DraggableResizableWrapper.vue'

interface UnitDemoItem {
  id: string,
  label: string,
  initialX: string,
  initialY: string,
  initialWidth: string,
  initialHeight: string,
}

const items = ref<UnitDemoItem[]>([
  { id: 'item-a', label: '百分比 + px', initialX: '10%', initialY: '10%', initialWidth: '30%', initialHeight: '200px' },
  { id: 'item-b', label: 'calc + rem', initialX: 'calc(50% - 150px)', initialY: '2rem', initialWidth: '300px', initialHeight: '150px' },
  { id: 'item-c', label: 'vw + vh', initialX: '5vw', initialY: '10vh', initialWidth: '20vw', initialHeight: '20vh' },
])

const wrapperRefs = new Map<string, any>()

onMounted(() => {
  setTimeout(() => {
    const a = wrapperRefs.get('item-a')
    a?.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
    const b = wrapperRefs.get('item-b')
    b?.updatePosition('calc(60% - 120px)', '3rem')
    const c = wrapperRefs.get('item-c')
    c?.updateSize('25vw', '25vh')
  }, 3000)
})
</script>

<template>
  <div class="css-units-demo">
    <h3>CSS 单位支持示例 (x, y, width, height: px / % / vw / vh / rem / calc)</h3>
    <p class="tip">使用 DraggableResizableWrapper, 3 秒后自动调用组件方法更新单位。</p>
    <div class="stage">
      <DraggableResizableWrapper
        v-for="item in items"
        :key="item.id"
        :ref="el => el && wrapperRefs.set(item.id, el)"
        :initial-x="item.initialX"
        :initial-y="item.initialY"
        :initial-width="item.initialWidth"
        :initial-height="item.initialHeight"
        :resize-options="{ edges: { top: true, right: true, bottom: true, left: true }, margin: 6, minWidth: '120px', minHeight: '80px' }"
        watch-deep
      >
        <template #default="{ x, y, width, height }">
          <div class="unit-item">
            <div class="header">{{ item.label }}</div>
            <div class="body">
              <div>像素定位: x={{ Math.round(x) }}, y={{ Math.round(y) }}</div>
              <div>像素尺寸: w={{ Math.round(width) }}, h={{ Math.round(height) }}</div>
              <div class="raw">初始: {{ item.initialX }} / {{ item.initialY }} / {{ item.initialWidth }} / {{ item.initialHeight }}</div>
            </div>
          </div>
        </template>
      </DraggableResizableWrapper>
    </div>
  </div>
</template>

<style scoped>
.css-units-demo { padding: 16px; }
.tip { font-size: 12px; color: #666; }
.stage {
  position: relative;
  width: 100%;
  min-height: 500px;
  background: #f5f5f7;
  border: 1px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;
}
.unit-item {
  position: absolute;
  box-sizing: border-box;
  background: #fff;
  border: 2px solid #409eff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,.08);
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 100%;
}
.unit-item .header {
  padding: 6px 10px;
  font-size: 13px;
  font-weight: 600;
  background: #ecf5ff;
  border-bottom: 1px solid #d9ecff;
  cursor: move;
}
.unit-item .body { padding: 8px 10px; font-size: 12px; line-height: 1.4; }
.raw { margin-top: 4px; font-style: italic; color: #999; word-break: break-all; }
</style>
