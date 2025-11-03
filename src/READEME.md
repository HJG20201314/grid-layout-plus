# Grid Layout Plus

Grid Layout Plus 是一个基于 Vue 3 的灵活、响应式的网格布局系统，支持拖拽、调整大小、响应式布局等功能。

## 项目结构

```
src/
├── components/         # 核心组件
│   ├── grid-layout.vue # 网格布局容器组件
│   ├── grid-item.vue   # 网格布局项目组件
│   └── types.ts        # 组件类型定义
├── helpers/            # 辅助函数
│   ├── common.ts       # 通用功能和布局计算
│   ├── dom.ts          # DOM 操作相关
│   ├── draggable.ts    # 拖拽功能
│   ├── responsive.ts   # 响应式布局
│   └── types.ts        # 辅助函数类型定义
├── index.ts            # 项目入口
├── style.scss          # 样式文件
└── global.d.ts         # 全局类型声明
```

## 核心组件

### GridLayout

网格布局的容器组件，用于管理多个 GridItem 的排列。

**主要特性：**
- 支持拖拽和调整大小
- 响应式布局
- 碰撞检测和防止重叠
- 自动紧凑排列
- 多种事件监听

**主要属性：**
- `layout`: 布局配置数组
- `colNum`: 列数
- `rowHeight`: 行高
- `margin`: 项目间距
- `isDraggable`: 是否可拖拽
- `isResizable`: 是否可调整大小
- `responsive`: 是否启用响应式
- `breakpoints`: 断点配置
- `cols`: 各断点下列数

### GridItem

网格布局中的单个项目组件，必须放置在 GridLayout 内。

**主要特性：**
- 可拖拽移动
- 可调整大小
- 支持约束最小/最大尺寸
- 支持静态项目

**主要属性：**
- `i`: 唯一标识符
- `x`, `y`: 位置坐标
- `w`, `h`: 宽高
- `minW`, `minH`, `maxW`, `maxH`: 尺寸限制
- `static`: 是否为静态项目
- `dragIgnoreFrom`: 忽略拖拽的元素选择器
- `resizeIgnoreFrom`: 忽略调整大小的元素选择器

## 辅助功能

### 布局计算
- `compact`: 紧凑排列布局项
- `moveElement`: 移动元素并处理级联移动
- `collides`: 检测元素是否碰撞
- `correctBounds`: 修正布局边界

### 响应式布局
- `getBreakpointFromWidth`: 根据宽度获取当前断点
- `findOrGenerateResponsiveLayout`: 查找或生成响应式布局
- `getColsFromBreakpoint`: 获取指定断点的列数

### 拖拽支持
- `getControlPosition`: 获取控制位置
- `createCoreData`: 创建拖拽核心数据

## 使用方法

### 基本用法

```vue
<template>
  <GridLayout
    :layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :margin="[10, 10]"
    @layout-updated="layoutUpdated"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      {{ item.i }}
    </GridItem>
  </GridLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus--hjg'

const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' },
  { x: 4, y: 0, w: 2, h: 5, i: '2' }
])

function layoutUpdated(newLayout: any[]) {
  layout.value = newLayout
}
</script>
```

### 响应式布局

```vue
<template>
  <GridLayout
    :layout="layout"
    :responsive="true"
    :breakpoints="{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }"
    :cols="{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }"
    :responsive-layouts="responsiveLayouts"
    @breakpoint-changed="onBreakpointChange"
  >
    <!-- GridItems -->
  </GridLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus--hjg'

const layout = ref([])
const responsiveLayouts = ref({
  lg: [{ x: 0, y: 0, w: 2, h: 2, i: '0' }],
  md: [{ x: 0, y: 0, w: 2, h: 2, i: '0' }],
  // 其他断点的布局...
})

function onBreakpointChange(breakpoint: string) {
  console.log('当前断点:', breakpoint)
}
</script>
```

## 事件

GridLayout 组件支持多种事件：

- `layout-before-mount`: 布局挂载前
- `layout-mounted`: 布局挂载后
- `layout-updated`: 布局更新时
- `breakpoint-changed`: 断点变化时
- `update:layout`: 布局数据更新时
- `layout-ready`: 布局准备就绪时

GridItem 组件支持的事件：

- `container-resized`: 容器大小变化时
- `resize`: 调整大小时
- `resized`: 调整大小完成时
- `move`: 移动时
- `moved`: 移动完成时

## 类型定义

主要的类型定义包括：

- `Layout`: 布局数组类型
- `LayoutItem`: 布局项类型
- `Breakpoint`: 断点类型
- `ResponsiveLayout`: 响应式布局类型
- `GridLayoutProps`: GridLayout 组件属性
- `GridItemProps`: GridItem 组件属性

## 浏览器支持

支持所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。

## 许可证

MIT