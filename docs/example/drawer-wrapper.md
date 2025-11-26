# Drawer Wrapper Example

Demonstrates building a resizable drawer using the `DraggableResizableWrapper` component. Supports four modes:

1. Right fixed (resize from left)
2. Left fixed (resize from right)
3. Bottom fixed (resize from top)
4. Top fixed (resize from bottom)

## Effect

<ClientOnly>
  <DemoDrawerWrapper></DemoDrawerWrapper>
</ClientOnly>

## Source

<<< @/demos/drawer-wrapper.vue

## Notes

- Uses CSS unit strings for initial position / size (e.g. `calc(100% - 400px)`).
- Disables transforms (`use-css-transforms="false"`) to rely on absolute positioning for fixed-edge behavior.
- Edge configuration switches automatically when mode changes.
