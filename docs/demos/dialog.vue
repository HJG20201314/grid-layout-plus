<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { type DraggableResizableResult, makeElementDraggableResizable } from '../../src/utils/interact-helper'

// 对话框位置和尺寸状态
const dialogState = ref({
  x: 80,
  y: 40,
  width: 360,
  height: 240,
})

// 引用对话框元素
const dialogRef = ref<HTMLElement>()
let draggableResizableResult: DraggableResizableResult | null = null

// 初始化拖拽和调整大小功能
onMounted(() => {
  if (dialogRef.value) {
    // 设置初始样式
    dialogRef.value.style.position = 'absolute'
    dialogRef.value.style.left = `${dialogState.value.x}px`
    dialogRef.value.style.top = `${dialogState.value.y}px`
    dialogRef.value.style.width = `${dialogState.value.width}px`
    dialogRef.value.style.height = `${dialogState.value.height}px`
    
    // 使用interact-helper设置拖拽和调整大小
    draggableResizableResult = makeElementDraggableResizable(
      dialogRef.value,
      {
        draggable: true,
        resizable: true,
        dragOptions: {
          allowFrom: '.dlg-header',
          ignoreFrom: '.dlg-body, .dlg-footer, button',
        },
        resizeOptions: {
          edges: { right: true, bottom: true },
          margin: 6,
          minWidth: 120,
          minHeight: 120,
        },
        useCssTransforms: true,
      },
      {
        onDrag: (data) => {
          dialogState.value.x = data.left
          dialogState.value.y = data.top
          // 同步更新DOM位置
          if (dialogRef.value) {
            dialogRef.value.style.left = `${data.left}px`
            dialogRef.value.style.top = `${data.top}px`
          }
        },
        onResize: (data) => {
          dialogState.value.width = data.width
          dialogState.value.height = data.height
          dialogState.value.x = data.left
          dialogState.value.y = data.top
        },
      },
    )
  }
})

// 清理资源
onUnmounted(() => {
  if (draggableResizableResult) {
    draggableResizableResult.cleanup()
  }
})

// 允许通过按钮切换尺寸
function expand() {
  dialogState.value.width = Math.min(dialogState.value.width + 40, 600)
  dialogState.value.height = Math.min(dialogState.value.height + 40, 480)
  if (draggableResizableResult) {
    draggableResizableResult.updateSize(dialogState.value.width, dialogState.value.height)
  }
}

function shrink() {
  dialogState.value.width = Math.max(dialogState.value.width - 40, 120)
  dialogState.value.height = Math.max(dialogState.value.height - 40, 120)
  if (draggableResizableResult) {
    draggableResizableResult.updateSize(dialogState.value.width, dialogState.value.height)
  }
}
</script>

<template>
  <div class="dialog-container" style=" position: relative;height: 600px;">
    <div 
      ref="dialogRef" 
      class="dialog-wrapper"
    >
      <div class="dlg-header">
        <span class="title">Draggable Dialog</span>
        <div class="ops">
          <button type="button" @click.stop="expand">
            +
          </button>
          <button type="button" @click.stop="shrink">
            -
          </button>
        </div>
      </div>
      <div class="dlg-body">
        <p>This dialog header supports dragging. Resize from right or bottom edge.</p>
        <p>x: {{ dialogState.x }}, y: {{ dialogState.y }}, w: {{ dialogState.width }}, h: {{ dialogState.height }}</p>
      </div>
      <div class="dlg-footer">
        <button type="button">
          Confirm
        </button>
        <button type="button">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-container {
  position: relative;
  height: 600px;
}

.dialog-wrapper {
  position: absolute;
  display:flex;
  flex-direction:column;
  background:#fff;
  border:1px solid #d0d0d0;
  box-shadow:0 4px 14px rgba(0,0,0,12%);
}

.dlg-header {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:8px 12px;
  font-weight:500;
  color:#fff;
  cursor:move;
  user-select:none;
  background:#3a7afe;
}
.dlg-header .ops button { margin-left:4px; }

.dlg-body {
  flex:1;
  padding:12px;
  overflow:auto;
  font-size:14px;
  line-height:1.5;
}

.dlg-footer {
  padding:8px 12px;
  text-align:right;
  background:#fafafa;
  border-top:1px solid #eee;
}

button {
  padding:4px 10px;
  cursor:pointer;
  background:#fff;
  border:1px solid #ccc;
  border-radius:4px;
}
button:hover { background:#f0f0f0; }
</style>
