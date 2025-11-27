# CSS Units Support (Hooks)

Demonstrates using `useDraggableResizableWrapper` with CSS units for x, y, width, height.

Supported: px, %, vw, vh, rem, calc(...)

## Demo

<ClientOnly>
  <DemoCssUnitsHooks></DemoCssUnitsHooks>
</ClientOnly>

## Source

<<< @/demos/css-units-hooks.vue

## Notes

- Bind the hook to a DOM element via template ref callback:

```ts
const api = useDraggableResizableWrapper({ initialX: '10%', initialY: '10%', initialWidth: '30%', initialHeight: '200px' })
api.elementRef.value = el
```

- Update later with CSS units:

```ts
api.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
api.updatePosition('calc(60% - 120px)', '3rem')
api.updateSize('25vw', '25vh')
```
