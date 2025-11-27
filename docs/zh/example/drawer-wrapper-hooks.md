# 抽屉固定边缩放（Hooks 版本）

使用 `useDraggableResizableWrapper` 实现抽屉固定一边、另一边缩放的场景，支持水平与垂直模式。

## 效果

<ClientOnly>
  <DemoDrawerWrapperHooks></DemoDrawerWrapperHooks>
</ClientOnly>

## 源码

<<< @/demos/drawer-wrapper-hooks.vue

## 要点

- 根据模式动态设置 `edges` 与锚定样式：

```ts
const getResizeOptions = () => {
  if (mode.value === 'right-fixed') return { edges: { left: true }, minWidth: 300, maxWidth: 'calc(100vw - 272px)', margin: 8 }
  if (mode.value === 'left-fixed') return { edges: { right: true }, minWidth: 300, maxWidth: 800, margin: 8 }
  if (mode.value === 'bottom-fixed') return { edges: { top: true }, minHeight: 200, maxHeight: 600, margin: 8 }
  return { edges: { bottom: true }, minHeight: 200, maxHeight: 600, margin: 8 }
}
```

- 水平模式绑定到宽度变化，垂直模式绑定到高度变化，使用 CSS 单位（如 `100vh` / `100vw`）占满另一维度。
