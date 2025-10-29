import type { Breakpoints, Layout, ResponsiveLayout } from '../helpers/types'

export interface GridLayoutProps {
  autoSize?: boolean, // 是否自动根据内容计算容器高度
  colNum?: number, // 非响应式下的基础列数
  rowHeight?: number, // 每行的像素高度（网格行高换算）
  maxRows?: number, // 最大允许行数（垂直限制）
  margin?: number[], // 项之间的间距 [水平, 垂直]
  isDraggable?: boolean, // 全局是否允许拖拽
  isResizable?: boolean, // 全局是否允许缩放
  isMirrored?: boolean, // 镜像模式（与 RTL 组合影响方向）
  isBounded?: boolean, // 是否限制拖拽在容器内部
  useCssTransforms?: boolean, // 使用 CSS Transform 定位（性能更佳）
  verticalCompact?: boolean, // 启用垂直压缩移除空洞
  restoreOnDrag?: boolean, // 拖拽参考紧凑布局进行还原（保持初始紧凑性）
  layout: Layout, // 当前布局数据（必填）
  responsive?: boolean, // 是否开启响应式断点切换
  responsiveLayouts?: Partial<ResponsiveLayout>, // 自定义各断点初始布局
  transformScale?: number, // 拖拽/缩放像素与网格单位换算倍率
  breakpoints?: Breakpoints, // 宽度断点映射表
  cols?: Breakpoints, // 各断点对应的列数映射
  preventCollision?: boolean, // 是否阻止碰撞（发生时不允许进入）
  useStyleCursor?: boolean // 是否使用内联 cursor 指示交互
}

export interface GridItemProps {
  isDraggable?: boolean, // 局部覆盖是否可拖拽
  isResizable?: boolean, // 局部覆盖是否可缩放
  isBounded?: boolean, // 局部覆盖是否受容器边界限制
  static?: boolean, // 是否静态（不可拖拽/缩放且不参与压缩）
  minH?: number, // 最小行高（网格行单位）
  minW?: number, // 最小列宽（网格列单位）
  maxH?: number, // 最大行高（网格行单位）
  maxW?: number, // 最大列宽（网格列单位）
  x: number, // 初始列坐标（0 基）
  y: number, // 初始行坐标（0 基）
  w: number, // 初始宽度（列数）
  h: number, // 初始高度（行数）
  i: number | string, // 唯一标识符
  dragIgnoreFrom?: string, // 拖拽忽略选择器（逗号分隔）
  dragAllowFrom?: string, // 拖拽允许起始选择器（白名单）
  resizeIgnoreFrom?: string, // 缩放忽略选择器
  preserveAspectRatio?: boolean, // 缩放时是否保持宽高比
  dragOption?: Record<string, any>, // 透传给 interact.draggable 的额外配置
  resizeOption?: Record<string, any> // 透传给 interact.resizable 的额外配置
}
