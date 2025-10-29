/**
 * 单个布局基础必需字段。
 * 表示一个网格项的最小数据：宽度、高度、坐标以及唯一标识。
 */
export interface LayoutItemRequired {
  w: number, // 项占据的列宽（网格列单位，正整数）
  h: number, // 项占据的行高（网格行单位，正整数）
  x: number, // 左上角列坐标（0 基）
  y: number, // 左上角行坐标（0 基）
  i: number | string // 唯一标识符（渲染与 diff 用）
}

/**
 * 布局项的完整数据结构，包含可选约束与状态标记。
 */
export interface LayoutItem extends LayoutItemRequired {
  minW?: number, // 最小列宽（未设则不限制）
  minH?: number, // 最小行高（未设则不限制）
  maxW?: number, // 最大列宽（未设则不限制）
  maxH?: number, // 最大行高（未设则不限制）
  moved?: boolean, // 本次交互（拖拽/缩放）过程中是否已被移动
  static?: boolean, // 静态：不可拖拽/缩放，压缩时不重排
  isDraggable?: boolean, // 局部覆盖可拖拽（优先于全局）
  isResizable?: boolean // 局部覆盖可缩放（优先于全局）
}

/**
 * 布局数组，由多个布局项组成。
 */
export type Layout = Array<LayoutItem>

/**
 * 响应式断点名称集合，按宽度从小到大使用。
 */
export type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'

/**
 * 断点与数值映射，通常值表示最小宽度或列数等含义。
 */
export type Breakpoints = Record<Breakpoint, number>

/**
 * 每个断点对应一个布局结构，用于响应式切换。
 */
export type ResponsiveLayout = Record<Breakpoint, Layout>

/** @internal 内部接口：用于在依赖注入中共享布局状态与操作方法 */
export interface LayoutInstance {
  responsive: boolean, // 是否启用响应式布局切换
  lastBreakpoint: Breakpoint, // 最近一次使用的断点名称
  cols: Breakpoints, // 所有断点与对应列数映射
  colNum: number, // 当前使用的总列数（非响应式或已解析断点）
  rowHeight: number, // 单行像素高度（换算网格行高）
  width: number, // 容器当前像素宽度
  margin: number[], // 每项外边距 [水平, 垂直]
  isDraggable: boolean, // 全局是否允许拖拽
  isResizable: boolean, // 全局是否允许缩放
  isBounded: boolean, // 是否限制项在容器内部拖拽
  transformScale: number, // 坐标与尺寸换算缩放比
  useCssTransforms: boolean, // 是否使用 CSS Transform 定位
  useStyleCursor: boolean, // 是否使用光标样式指示交互
  maxRows: number, // 最大允许行数（垂直限制）
  isMirrored: boolean, // 镜像模式（影响 RTL 渲染）
  increaseItem: (item: any) => void, // 注册子项实例
  decreaseItem: (item: any) => void // 注销子项实例
}
