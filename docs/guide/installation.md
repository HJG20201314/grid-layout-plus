# Installation

## From npm registry

Using `pnpm` (Recommended):

```sh
pnpm i grid-layout-plus
```

Using `yarn`:

```sh
yarn add grid-layout-plus
```

## From GitHub repository

Using `pnpm`:

```sh
pnpm add git+https://github.com/HJG20201314/grid-layout-plus.git
```

Using `yarn`:

```sh
yarn add git+https://github.com/HJG20201314/grid-layout-plus.git
```

Using `npm`:

```sh
npm install git+https://github.com/HJG20201314/grid-layout-plus.git
```

### ⚠️ Important Notes for GitHub Installation

When installing from GitHub, the build artifacts (`dist`, `es`, `lib` directories) are not included in the repository. The package will automatically build during installation, but if you encounter issues (getting old versions), please clear your package manager cache:

**For pnpm:**
```sh
# Clear pnpm cache
pnpm store prune

# Reinstall
pnpm remove grid-layout-plus
pnpm add git+https://github.com/HJG20201314/grid-layout-plus.git
```

**For yarn:**
```sh
# Clear yarn cache
yarn cache clean

# Reinstall
yarn remove grid-layout-plus
yarn add git+https://github.com/HJG20201314/grid-layout-plus.git
```

**For npm:**
```sh
# Clear npm cache
npm cache clean --force

# Reinstall
npm uninstall grid-layout-plus
npm install git+https://github.com/HJG20201314/grid-layout-plus.git
```

## Import

Globally import:

```ts
import { GridLayout, GridItem } from 'grid-layout-plus'

app
  .component('GridLayout', GridLayout)
  .component('GridItem', GridItem)
```

Import in a component:

```vue
<script setup lang="ts">
import { GridLayout, GridItem } from 'grid-layout-plus'
</script>
```

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus'

export default defineComponent({
  components: {
    GridLayout,
    GridItem
  }
})
</script>
```

## Browser

Include the browser-ready bundle (download from [releases](https://github.com/HJG20201314/grid-layout-plus/releases)) in your page.

```html
<script src="dist/grid-layout-plus.js"></script>
```
