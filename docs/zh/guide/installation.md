# 安装

## 从 npm 仓库安装

使用 `pnpm`（推荐）：

```sh
pnpm i grid-layout-plus
```

使用 `yarn`：

```sh
yarn add grid-layout-plus
```

## 从 GitHub 仓库安装

使用 `pnpm`：

```sh
pnpm add git+https://github.com/HJG20201314/grid-layout-plus.git
```

使用 `yarn`：

```sh
yarn add git+https://github.com/HJG20201314/grid-layout-plus.git
```

使用 `npm`：

```sh
npm install git+https://github.com/HJG20201314/grid-layout-plus.git
```

### ⚠️ GitHub 安装重要提示

从 GitHub 安装时，构建产物（`dist`、`es`、`lib` 目录）默认不会包含在仓库中。包会在安装时自动构建，但如果您遇到问题（获取到旧版本），请清除包管理器缓存：

**对于 pnpm：**
```sh
# 清除 pnpm 缓存
pnpm store prune

# 重新安装
pnpm remove grid-layout-plus
pnpm add git+https://github.com/HJG20201314/grid-layout-plus.git
```

**对于 yarn：**
```sh
# 清除 yarn 缓存
yarn cache clean

# 重新安装
yarn remove grid-layout-plus
yarn add git+https://github.com/HJG20201314/grid-layout-plus.git
```

**对于 npm：**
```sh
# 清除 npm 缓存
npm cache clean --force

# 重新安装
npm uninstall grid-layout-plus
npm install git+https://github.com/HJG20201314/grid-layout-plus.git
```

## 引入

全局引入：

```ts
import { GridLayout, GridItem } from 'grid-layout-plus'

app
  .component('GridLayout', GridLayout)
  .component('GridItem', GridItem)
```

在组件内引入：

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

## 浏览器

在你的页面添加可用于浏览器的软件包 (从 [发布](https://github.com/HJG20201314/grid-layout-plus/releases) 中下载)。

```html
<script src="dist/grid-layout-plus.js"></script>
```
