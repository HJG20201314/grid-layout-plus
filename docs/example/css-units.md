# CSS Units Support

Demonstrates using CSS units for initial position and size (x, y, width, height) and updating them dynamically via component methods.

Supported units: px, %, vw, vh, rem, calc(...)

## Effect

<ClientOnly>
  <DemoCssUnits></DemoCssUnits>
</ClientOnly>

## Source

<<< @/demos/css-units.vue

## Key Points

- Pass CSS unit strings to `DraggableResizableWrapper` props: `:initial-x="'10%'"`, `:initial-width="'30%'"` etc.
- After mount you can call exposed methods with CSS units:

```ts
wrapper.updatePositionAndSize('15%', 'calc(5% + 1rem)', '40%', '250px')
wrapper.updatePosition('calc(60% - 120px)', '3rem')
wrapper.updateSize('25vw', '25vh')
```
- Internally values are converted to pixels for drag / resize math, but original units are preserved on re-update.
