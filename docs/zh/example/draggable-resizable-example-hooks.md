# 一般用法示例（Hooks 版本）

使用 `useDraggableResizableWrapper` 替代组件，直接绑定到普通元素，支持拖拽、缩放与事件回调。

## 效果

<ClientOnly>
  <DemoDraggableResizableExampleHooks></DemoDraggableResizableExampleHooks>
</ClientOnly>

## 源码

<<< @/demos/DraggableResizableExample-hooks.vue

## 要点

- 通过模板 ref 回调将 hook 绑定至 DOM：

```ts
primaryApi = useDraggableResizableWrapper({ draggable, resizable, useCssTransforms, dragOptions, resizeOptions, initialX: 50, initialY: 50, initialWidth: 300, initialHeight: 200 }, { onDragStart, onDragMove, onDragEnd, onResizeStart, onResizeMove, onResizeEnd })
primaryApi.elementRef.value = el
```

- 在模板中读取像素位置与尺寸：`primaryApi.x.value / primaryApi.width.value`。
- 保留事件日志与第二个卡片样式示例，两者都通过 hook 管理。
