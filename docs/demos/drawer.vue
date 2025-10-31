<script setup lang="ts">
import { reactive } from 'vue'

// 右侧抽屉：固定贴靠右边，拖拽左边缘改变宽度（保持右侧边界不动）。
const TOTAL_COLS = 12
const layout = reactive([
  // 初始宽度 4 列，x = TOTAL_COLS - w 使得右侧贴边
  { x: TOTAL_COLS - 4, y: 0, w: 4, h: 8, i: 'drawer' }
])

function onResize(i: string, h: number, w: number) {
  if (i !== 'drawer') return
  const item = layout[0]
  // 根据新宽度反算 x，保持右侧始终对齐 TOTAL_COLS
  item.w = w
  item.h = h
  item.x = Math.max(TOTAL_COLS - item.w, 0)
}
</script>

<template>
  <GridLayout
    v-model:layout="layout"
    :col-num="TOTAL_COLS"
    :row-height="40"
    :vertical-compact="false"
    :prevent-collision="true"
    isMirrored
    style="height:400px;border:1px dashed #bbb;position:relative;"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :is-draggable="false"
      :is-resizable="true"
      :minW="3"
      :maxW="TOTAL_COLS - 1"
      :resizeOption="{ edges: { left: true }, margin: 6 }"
      @resize="onResize"
      @resized="onResize"
    >
      <div class="drawer" :style="{ width: '100%', height: '100%' }">
        <div class="drawer-header">Right Drawer (Drag Left Edge)</div>
        <div class="drawer-body">
          <p>Drag the left thin edge to resize width. Right side stays fixed.</p>
          <p>x: {{ item.x }}, w: {{ item.w }}, h: {{ item.h }}</p>
        </div>
      </div>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.drawer { position:absolute; inset:0; display:flex; flex-direction:column; background:#fff; border-left:1px solid #ccc; box-shadow:0 0 10px rgba(0,0,0,.15); }
.drawer-header { padding:10px 14px; font-weight:600; background:#2d7ef7; color:#fff; user-select:none; }
.drawer-body { flex:1; padding:12px; overflow:auto; font-size:14px; }
/* 左边缘可缩放的辅助高亮（与全局样式中 .vgl-item__edge 共用） */
:deep(.vgl-item__edge--left.is-enabled) { cursor: ew-resize; }
</style>
