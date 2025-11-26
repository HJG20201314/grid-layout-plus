# DraggableResizableWrapper 组件文档

## 概述

`DraggableResizableWrapper` 是一个基于 `makeElementDraggableResizable` 方法封装的泛型拖拽调整大小壳组件。使用方只需要将需要拖拽和调整大小的内容放入该组件的插槽中，即可实现拖拽和调整大小功能。

## 特性

- ✅ **泛型设计**：支持任意内容的拖拽和调整大小
- ✅ **灵活配置**：可独立控制拖拽和调整大小功能
- ✅ **边缘控制**：可配置允许调整大小的边缘
- ✅ **状态反馈**：提供拖拽和调整大小的状态信息
- ✅ **事件支持**：完整的拖拽和调整大小事件
- ✅ **类型安全**：完整的 TypeScript 类型支持
- ✅ **性能优化**：基于 interact.js 实现，性能优异

## 基本用法

```vue
<template>
  <DraggableResizableWrapper>
    <template #default="{ x, y, width, height, isDragging, isResizing }">
      <div class="my-content">
        <p>位置: ({{ x }}, {{ y }})</p>
        <p>尺寸: {{ width }} × {{ height }}</p>
        <p v-if="isDragging">
          正在拖拽...
        </p>
        <p v-if="isResizing">
          正在调整大小...
        </p>
      </div>
    </template>
  </DraggableResizableWrapper>
</template>

<script setup>
import { DraggableResizableWrapper } from '@/components'
</script>
```

## Props 属性

| 属性名             | 类型            | 默认值  | 说明                                         |
| ------------------ | --------------- | ------- | -------------------------------------------- |
| `draggable`        | `boolean`       | `true`  | 是否启用拖拽功能                             |
| `resizable`        | `boolean`       | `true`  | 是否启用调整大小功能                         |
| `useCssTransforms` | `boolean`       | `true`  | 是否使用 CSS transform 进行位置变换          |
| `dragOptions`      | `DragOptions`   | `{}`    | 拖拽配置选项                                 |
| `resizeOptions`    | `ResizeOptions` | `{}`    | 调整大小配置选项                             |
| `initialX`         | `number`        | `0`     | 初始 X 坐标                                  |
| `initialY`         | `number`        | `0`     | 初始 Y 坐标                                  |
| `initialWidth`     | `number`        | `200`   | 初始宽度                                     |
| `initialHeight`    | `number`        | `150`   | 初始高度                                     |
| `watchDeep`        | `boolean`       | `false` | watch监听器的deep配置，是否深度监听属性变化  |
| `watchImmediate`   | `boolean`       | `false` | watch监听器的immediate配置，是否立即触发回调 |

## 插槽作用域参数

| 参数名        | 类型                    | 说明                   |
| ------------- | ----------------------- | ---------------------- |
| `x`           | `number`                | 当前 X 坐标            |
| `y`           | `number`                | 当前 Y 坐标            |
| `width`       | `number`                | 当前宽度               |
| `height`      | `number`                | 当前高度               |
| `isDragging`  | `boolean`               | 是否正在拖拽           |
| `isResizing`  | `boolean`               | 是否正在调整大小       |
| `activeEdges` | `Partial<ElementEdges>` | 当前活跃的调整大小边缘 |

## 事件

| 事件名        | 参数类型                  | 说明               |
| ------------- | ------------------------- | ------------------ |
| `dragStart`   | `DragEventCallbackData`   | 拖拽开始时触发     |
| `dragMove`    | `DragEventCallbackData`   | 拖拽移动时触发     |
| `dragEnd`     | `DragEventCallbackData`   | 拖拽结束时触发     |
| `resizeStart` | `ResizeEventCallbackData` | 调整大小开始时触发 |
| `resizeMove`  | `ResizeEventCallbackData` | 调整大小移动时触发 |
| `resizeEnd`   | `ResizeEventCallbackData` | 调整大小结束时触发 |

## 暴露的方法

组件通过 `defineExpose` 暴露了以下属性和方法，可以通过 ref 访问：

| 名称 | 类型 | 说明 |
|------|------|------|
| `elementRef` | `Ref<HTMLElement \| undefined>` | DOM 元素引用 |
| `x` | `Ref<number>` | 当前 X 坐标（Ref 类型） |
| `y` | `Ref<number>` | 当前 Y 坐标（Ref 类型） |
| `width` | `Ref<number>` | 当前宽度（Ref 类型） |
| `height` | `Ref<number>` | 当前高度（Ref 类型） |
| `isDragging` | `Ref<boolean>` | 是否正在拖拽（Ref 类型） |
| `isResizing` | `Ref<boolean>` | 是否正在调整大小（Ref 类型） |
| `activeEdges` | `Ref<Record<string, boolean>>` | 当前活跃的边缘（Ref 类型） |
| `updatePositionAndSize` | `(x: number, y: number, width: number, height: number) => void` | 更新位置和尺寸 |
| `updatePosition` | `(x: number, y: number) => void` | 仅更新位置 |
| `updateSize` | `(width: number, height: number) => void` | 仅更新尺寸 |

### 通过 ref 访问组件实例

```vue
<template>
  <DraggableResizableWrapper ref="wrapperRef">
    <template #default>
      <div>内容</div>
    </template>
  </DraggableResizableWrapper>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { DraggableResizableWrapperExposed } from './types'

const wrapperRef = ref<DraggableResizableWrapperExposed>()

onMounted(() => {
  if (wrapperRef.value) {
    // 访问状态属性（需要通过 .value）
    console.log('当前位置:', wrapperRef.value.x.value, wrapperRef.value.y.value)
    console.log('当前尺寸:', wrapperRef.value.width.value, wrapperRef.value.height.value)
    
    // 访问 DOM 元素（需要通过 .value）
    // const element = wrapperRef.value.elementRef.value
    
    // 调用更新方法（直接调用）
    wrapperRef.value.updatePosition(100, 200)
    wrapperRef.value.updateSize(300, 400)
    wrapperRef.value.updatePositionAndSize(50, 100, 250, 350)
  }
})
</script>
```

## 高级配置

### Watch 配置选项

你可以通过 `watchDeep` 和 `watchImmediate` 属性来控制 watch 监听器的行为：

```vue
<template>
  <DraggableResizableWrapper
    :draggable="true"
    :resizable="true"
    :watch-deep="true"
    :watch-immediate="true"
  >
    <template #default="{ x, y, width, height }">
      <div class="my-content">
        <p>位置: ({{ x }}, {{ y }})</p>
        <p>尺寸: {{ width }} × {{ height }}</p>
      </div>
    </template>
  </DraggableResizableWrapper>
</template>
```

- `watchDeep: true` - 深度监听 `dragOptions` 和 `resizeOptions` 对象内部属性的变化
- `watchImmediate: true` - 组件挂载时立即触发一次回调函数

### 拖拽选项 (dragOptions)

```vue
<script setup>
const dragOptions = {
  threshold: 16,              // 拖拽阈值
  allowFrom: '.drag-handle',  // 只允许从特定元素拖拽
  ignoreFrom: 'input, button', // 忽略特定元素
  modifiers: [],              // 修饰符
  startAxis: 'xy',            // 开始轴
  lockAxis: 'xy',              // 锁定轴
}
console.log(dragOptions)
</script>
```

### 调整大小选项 (resizeOptions)

```vue
<script setup>
const resizeOptions = {
  edges: {                    // 允许调整大小的边缘
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  margin: 8,                  // 边缘检测边距
  minWidth: 100,              // 最小宽度
  minHeight: 80,              // 最小高度
  maxWidth: 600,              // 最大宽度
  maxHeight: 400,             // 最大高度
  preserveAspectRatio: false,  // 保持宽高比
}
console.log(resizeOptions)
</script>
```

## 完整示例

```vue
<template>
  <DraggableResizableWrapper
    :draggable="true"
    :resizable="true"
    :use-css-transforms="true"
    :drag-options="dragOptions"
    :resize-options="resizeOptions"
    :initial-x="50"
    :initial-y="50"
    :initial-width="300"
    :initial-height="200"
    :watch-deep="true"
    :watch-immediate="false"
    @drag-start="handleDragStart"
    @drag-move="handleDragMove"
    @drag-end="handleDragEnd"
    @resize-start="handleResizeStart"
    @resize-move="handleResizeMove"
    @resize-end="handleResizeEnd"
  >
    <template #default="{ x, y, width, height, isDragging, isResizing, activeEdges }">
      <div class="my-card" :class="{ dragging: isDragging, resizing: isResizing }">
        <div class="card-header">
          <h3>可拖拽卡片</h3>
        </div>
        <div class="card-content">
          <p>位置: ({{ Math.round(x) }}, {{ Math.round(y) }})</p>
          <p>尺寸: {{ Math.round(width) }} × {{ Math.round(height) }}</p>
          <div v-if="isDragging" class="status">
            🔄 正在拖拽...
          </div>
          <div v-if="isResizing" class="status">
            📐 正在调整大小...
          </div>
          <div v-if="isResizing" class="active-edges">
            活跃边缘:
            <span v-if="activeEdges.top">顶部</span>
            <span v-if="activeEdges.right">右侧</span>
            <span v-if="activeEdges.bottom">底部</span>
            <span v-if="activeEdges.left">左侧</span>
          </div>
        </div>
      </div>
    </template>
  </DraggableResizableWrapper>
</template>

<script setup>
import { DraggableResizableWrapper } from '@/components'

const dragOptions = {
  threshold: 16,
  modifiers: [],
}

const resizeOptions = {
  edges: { top: true, right: true, bottom: true, left: true },
  margin: 8,
  minWidth: 100,
  minHeight: 80,
  maxWidth: 600,
  maxHeight: 400,
}

const handleDragStart = (data) => {
  console.log('拖拽开始:', data)
}

const handleDragMove = (data) => {
  console.log('拖拽移动:', data)
}

const handleDragEnd = (data) => {
  console.log('拖拽结束:', data)
}

const handleResizeStart = (data) => {
  console.log('调整大小开始:', data)
}

const handleResizeMove = (data) => {
  console.log('调整大小移动:', data)
}

const handleResizeEnd = (data) => {
  console.log('调整大小结束:', data)
}
</script>

<!-- disable eslint -->
<style scoped>
.my-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
}

.my-card.dragging {
  opacity: 0.8;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.my-card.resizing {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.card-header {
  padding: 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.card-header h3 {
  margin: 0;
  color: #495057;
}

.card-content {
  padding: 16px;
  flex: 1;
}

.status {
  margin: 8px 0;
  padding: 4px 8px;
  background: #e3f2fd;
  border-radius: 4px;
  color: #1976d2;
  font-size: 14px;
}

.active-edges {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}

.active-edges span {
  background: rgba(25, 118, 210, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  margin-right: 4px;
}
</style>
```

## 使用建议

### 1. 性能优化

- 使用 `useCssTransforms: true` 可以获得更好的性能
- 避免在插槽内容中使用复杂的计算
- 合理使用事件节流
- 仅在需要时使用 `watchDeep: true`，深度监听会带来额外的性能开销
- 谨慎使用 `watchImmediate: true`，确保初始化逻辑不会导致不必要的计算

### 2. 用户体验

- 提供拖拽和调整大小的视觉反馈
- 在拖拽和调整大小时显示状态信息
- 合理设置最小/最大尺寸限制

### 3. 样式设计

- 为拖拽和调整大小状态提供不同的视觉样式
- 使用合适的阴影和边框效果
- 考虑添加过渡动画效果

### 4. 边缘配置

- 根据内容类型选择合适的调整大小边缘
- 合理设置边缘检测边距 (`margin`)
- 考虑是否需要保持宽高比

## 注意事项

1. **定位方式**：组件默认使用相对定位，内部元素使用绝对定位
2. **尺寸单位**：所有尺寸单位都是像素 (px)
3. **事件节流**：拖拽和调整大小事件会根据需要节流处理
4. **清理工作**：组件卸载时会自动清理事件监听器和 DOM 元素
5. **浏览器兼容性**：基于 interact.js，支持现代浏览器

## 相关类型定义

```typescript
interface DragEventCallbackData {
  type: 'dragstart' | 'dragmove' | 'dragend'
  top: number
  left: number
  deltaX: number
  deltaY: number
}

interface ResizeEventCallbackData {
  type: 'resizestart' | 'resizemove' | 'resizeend'
  width: number
  height: number
  top: number
  left: number
  deltaWidth: number
  deltaHeight: number
  edges: Partial<ElementEdges>
}

interface ElementEdges {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}
```

这个组件提供了一种简单而强大的方式来实现任意内容的拖拽和调整大小功能，使用方只需要关注自己的业务逻辑和样式设计即可。
