# CSS 单位支持

演示初始位置与尺寸 (x, y, width, height) 以及后续更新时支持使用各种 CSS 单位。

支持的单位: px, %, vw, vh, rem, calc(...)

## 效果

<ClientOnly>
  <DemoCssUnits></DemoCssUnits>
</ClientOnly>

## 源码

<<< @/demos/css-units.vue

## 关键点

- 可以直接在组件属性里传入 CSS 单位字符串: 例如 `:initial-x="'10%'"`, `:initial-width="'30%'"`。
- 组件挂载后可通过暴露的方法以 CSS 单位更新位置和尺寸:

```ts
wrapper.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
wrapper.updatePosition('calc(60% - 120px)', '3rem')
wrapper.updateSize('25vw', '25vh')
```
- 内部会将这些单位换算为像素做拖拽与缩放计算，同时保留原始字符串便于再次解析与展示。
