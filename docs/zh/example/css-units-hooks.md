# CSS 单位支持（Hooks 版本）

演示使用 `useDraggableResizableWrapper` Hook，初始位置与尺寸 (x, y, width, height) 以及后续更新时支持使用各种 CSS 单位。

支持的单位: px, %, vw, vh, rem, calc(...)

## 效果

<ClientOnly>
  <DemoCssUnitsHooks></DemoCssUnitsHooks>
</ClientOnly>

## 源码

<<< @/demos/css-units-hooks.vue

## 关键点

- 使用 Hook 创建交互能力，并将 `elementRef` 绑定到实际 DOM 元素：

```ts
const api = useDraggableResizableWrapper({
  initialX: '10%', initialY: '10%', initialWidth: '30%', initialHeight: '200px',
  draggable: true, resizable: true,
  resizeOptions: { edges: { top: true, right: true, bottom: true, left: true }, margin: 6 },
})
api.elementRef.value = el
```

- 后续可通过 Hook 的方法以 CSS 单位更新：

```ts
api.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
api.updatePosition('calc(60% - 120px)', '3rem')
api.updateSize('25vw', '25vh')
```

- Hook 返回的 `x/y/width/height` 为像素数值（Ref<number>），方便直接在模板显示。
