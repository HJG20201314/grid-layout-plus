# 动态更新示例（Hooks 版本）

通过 `useDraggableResizableWrapper` 的 `updatePositionAndSize / updatePosition / updateSize` 方法，动态更新位置与尺寸。

## 效果

<ClientOnly>
  <DemoDynamicUpdateTestHooks></DemoDynamicUpdateTestHooks>
</ClientOnly>

## 源码

<<< @/demos/dynamic-update-test-hooks.vue

## 要点

- 初始化时传入初始数值：

```ts
api = useDraggableResizableWrapper({ draggable: true, resizable: true, initialX: 50, initialY: 50, initialWidth: 200, initialHeight: 150 })
api.elementRef.value = el
```

- 通过按钮调用更新方法：

```ts
api.updatePositionAndSize(newX, newY, newWidth, newHeight)
api.updatePosition(newX, newY)
api.updateSize(newWidth, newHeight)
```

- 模板直接显示像素值：`api.x.value` / `api.width.value`。
