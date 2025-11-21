# 抽屉包装组件示例

演示使用 `DraggableResizableWrapper` 组件实现可缩放的抽屉，支持四种模式：

1. 右侧固定（左侧缩放）
2. 左侧固定（右侧缩放）
3. 底部固定（顶部缩放）
4. 顶部固定（底部缩放）

## 效果

<ClientOnly>
  <DemoDrawerWrapper></DemoDrawerWrapper>
</ClientOnly>

## 源码

<<< @/demos/drawer-wrapper.vue

## 说明

- 使用 CSS 单位字符串初始化定位/尺寸（如 `calc(100% - 400px)`）。
- 关闭 transforms（`use-css-transforms="false"`），通过绝对定位保持固定边。
- 模式切换时自动更新缩放边缘配置。
