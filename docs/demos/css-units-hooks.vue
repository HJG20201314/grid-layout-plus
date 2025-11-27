<script setup lang="ts">
import { onMounted } from 'vue'
import { useDraggableResizableWrapper, type UseDraggableResizableWrapperReturn } from '../../src/utils/hooks'
import type { ComponentPublicInstance } from 'vue'

interface UnitDemoItem {
  id: string,
  label: string,
  initialX: string,
  initialY: string,
  initialWidth: string,
  initialHeight: string,
}

const items: UnitDemoItem[] = [
  { id: 'item-a', label: '百分比 + px', initialX: '10%', initialY: '10%', initialWidth: '30%', initialHeight: '200px' },
  { id: 'item-b', label: 'calc + rem', initialX: 'calc(50% - 150px)', initialY: '2rem', initialWidth: '300px', initialHeight: '150px' },
  { id: 'item-c', label: 'vw + vh', initialX: '5vw', initialY: '10vh', initialWidth: '20vw', initialHeight: '20vh' },
]

// 预先在 setup 内创建每个条目的 hook，避免在 ref 回调中创建导致生命周期警告
const wrappers = new Map<string, UseDraggableResizableWrapperReturn>()
for (const item of items) {
  const api = useDraggableResizableWrapper({
    draggable: true,
    resizable: true,
    // 为避免 transform 与 left/top 叠加导致方向异常，示例中关闭 CSS 变换
    useCssTransforms: false,
    // 设置拖拽句柄，避免从内容区域拖拽造成误操作
    dragOptions: { allowFrom: '.header', ignoreFrom: '.body' },
    initialX: item.initialX,
    initialY: item.initialY,
    initialWidth: item.initialWidth,
    initialHeight: item.initialHeight,
    // 完整四边缩放，使用字符串单位阈值
    resizeOptions: { edges: { top: true, right: true, bottom: true, left: true }, margin: 6, minWidth: '120px', minHeight: '80px' },
  })
  wrappers.set(item.id, api)
}

// Helper getters for template
const getX = (id: string) => Math.round(wrappers.get(id)?.x.value ?? 0)
const getY = (id: string) => Math.round(wrappers.get(id)?.y.value ?? 0)
const getW = (id: string) => Math.round(wrappers.get(id)?.width.value ?? 0)
const getH = (id: string) => Math.round(wrappers.get(id)?.height.value ?? 0)

// 统一的 ref 绑定：仅执行 attach，不创建 hook
const bindWrapper = (id: string, elOrComp: Element | ComponentPublicInstance | null) => {
  if (!elOrComp) return
  const el = (elOrComp as any).$el ? (elOrComp as any).$el as Element : (elOrComp as Element)
  const api = wrappers.get(id)
  api?.attachElement(el as HTMLElement)
}

onMounted(() => {
  setTimeout(() => {
    const a = wrappers.get('item-a')
    a?.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
    const b = wrappers.get('item-b')
    b?.updatePosition('calc(60% - 120px)', '3rem')
    const c = wrappers.get('item-c')
    c?.updateSize('25vw', '25vh')
  }, 3000)
})
</script>

<template>
  <div class="css-units-demo">
    <h3>Hooks: CSS 单位支持示例 (x, y, width, height: px / % / vw / vh / rem / calc)</h3>
    <p class="tip">使用 useDraggableResizableWrapper Hook，3 秒后自动调用方法更新单位。</p>
    <div class="stage">
      <div
        v-for="item in items"
        :key="item.id"
        class="unit-item"
        :ref="(el) => bindWrapper(item.id, el)"
        :style="{
          // 关闭 transform 后，使用绝对定位样式来展示位置与尺寸
          left: getX(item.id) + 'px',
          top: getY(item.id) + 'px',
          width: getW(item.id) + 'px',
          height: getH(item.id) + 'px'
        }"
      >
        <div class="header">{{ item.label }}</div>
        <div class="body">
          <div>像素定位: x={{ getX(item.id) }}, y={{ getY(item.id) }}</div>
          <div>像素尺寸: w={{ getW(item.id) }}, h={{ getH(item.id) }}</div>
          <div class="raw">初始: {{ item.initialX }} / {{ item.initialY }} / {{ item.initialWidth }} / {{ item.initialHeight }}</div>
        </div>
      </div>
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
  width: 300px;
  height: 180px;
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
