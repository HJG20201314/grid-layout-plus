<script setup lang="ts">
import { ref, reactive } from 'vue'

// 简单可拖拽对话框示例：标题栏可拖动，内部内容区域不触发拖拽。
// 使用单个 GridLayout 包含一个 GridItem，当拖动标题时移动整个对话框。

const layout = reactive([
  { x: 2, y: 1, w: 6, h: 6, i: 'dialog' }
])

// 允许通过按钮切换尺寸（演示调整大小）
function expand() {
  const item = layout[0]
  item.w = Math.min(item.w + 1, 10)
  item.h = Math.min(item.h + 1, 12)
}
function shrink() {
  const item = layout[0]
  item.w = Math.max(item.w - 1, 3)
  item.h = Math.max(item.h - 1, 3)
}
</script>

<template>
  <GridLayout
    v-model:layout="layout"
    :col-num="12"
    :row-height="40"
    :prevent-collision="true"
    :vertical-compact="false"
    isMirrored
    style="height:600px;border:1px dashed #bbb;"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :is-draggable="true"
      :is-resizable="true"
      dragAllowFrom=".dlg-header"  
      dragIgnoreFrom=".dlg-body, .dlg-footer, button"
      :minW="3"
      :minH="3"
      :resizeOption="{ edges: { right: true, bottom: true }, margin: 6 }"
    >
      <div class="dialog-wrapper">
        <div class="dlg-header">
          <span class="title">Draggable Dialog</span>
          <div class="ops">
            <button type="button" @click.stop="expand">+</button>
            <button type="button" @click.stop="shrink">-</button>
          </div>
        </div>
        <div class="dlg-body">
          <p>This dialog header supports dragging. Resize from right or bottom edge.</p>
          <p>x: {{ item.x }}, y: {{ item.y }}, w: {{ item.w }}, h: {{ item.h }}</p>
        </div>
        <div class="dlg-footer">
          <button type="button">Confirm</button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.dialog-wrapper { position:absolute; inset:0; display:flex; flex-direction:column; background:#fff; border:1px solid #d0d0d0; box-shadow:0 4px 14px rgba(0,0,0,.12); }
.dlg-header { display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:#3a7afe; color:#fff; font-weight:500; cursor:move; user-select:none; }
.dlg-header .ops button { margin-left:4px; }
.dlg-body { flex:1; padding:12px; font-size:14px; line-height:1.5; overflow:auto; }
.dlg-footer { padding:8px 12px; text-align:right; background:#fafafa; border-top:1px solid #eee; }
button { border:1px solid #ccc; background:#fff; padding:4px 10px; cursor:pointer; border-radius:4px; }
button:hover { background:#f0f0f0; }
</style>
