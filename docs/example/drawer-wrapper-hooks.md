# Drawer (Fixed Edge Resize) - Hooks

Implement drawers with a fixed edge and resizable opposite using `useDraggableResizableWrapper`.

## Demo

<ClientOnly>
  <DemoDrawerWrapperHooks></DemoDrawerWrapperHooks>
</ClientOnly>

## Source

<<< @/demos/drawer-wrapper-hooks.vue

## Notes

- Set `edges` based on mode and anchor the wrapper accordingly.
- Horizontal mode varies width; vertical mode varies height; use vw/vh to fill the other axis.
