<script setup lang="ts">
import { reactive } from 'vue'

// 使用 12 列栅格模拟左右分割：左侧可水平缩放，右侧自动占余下列数。
const TOTAL_COLS = 12
const layout = reactive([
  { x: 0, y: 0, w: 4, h: 8, i: 'left' }, // 左侧初始占 4 列
  { x: 4, y: 0, w: TOTAL_COLS - 4, h: 8, i: 'right', static: true }, // 右侧自动占余下列
])

// 左侧缩放时同步右侧位置与宽度，保持同一行（y=0）避免碰撞下沉
function onResize(i: string, h: number, w: number) {
  if (i !== 'left') return
  const left = layout.find(item => item.i === 'left')!
  const right = layout.find(item => item.i === 'right')!
  // 使用传入的最新 w 而不是读取 left.w（可能尚未更新）
  right.x = w
  right.w = Math.max(TOTAL_COLS - w, 1)
  // 保持同一行与高度同步
  left.y = 0
  right.y = 0
  right.h = h
}
</script>

<template>
  <GridLayout
    v-model:layout="layout"
    :row-height="40"
    :col-num="TOTAL_COLS"
    :maxRows="8"
    :prevent-collision="true"
    :vertical-compact="false"
    restoreOnDrag
    isBounded
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :static="item.static || false"
      :is-draggable="false"
      :is-resizable="item.i === 'left'"
      :minW="2"
      :maxW="TOTAL_COLS - 2"
      :resizeOption="item.i === 'left' ? { edges: { right: true }, margin: 6 } : undefined"
      @resize="onResize"
      @resized="onResize"
    >
      <div class="pane" :class="item.i">
        <strong>{{ item.i === 'left' ? 'Left Pane' : 'Right Pane' }}</strong>
        <div class="info">w: {{ item.w }} cols</div>
        <div v-if="item.i==='left'" class="hint">Drag right edge to resize</div>
      </div>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
:deep(.vgl-layout) { background:#f5f5f5; border:1px solid #ccc; }
:deep(.vgl-item) { background:#fff; border:1px solid #d0d0d0; }
.pane { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; font-size:14px; }
.pane.left { background:#eef6ff; }
.pane.right { background:#fafafa; }
.hint { font-size:12px; color:#555; }
.info { font-size:12px; }
</style>
