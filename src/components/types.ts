import type { Breakpoints, Layout, ResponsiveLayout } from '../helpers/types'
import type {
  DragEventCallbackData,
  ElementDragResizeOptions,
  ResizeEventCallbackData,
} from '../utils/interact-helper'
import type { Ref } from 'vue'

/**
 * DraggableResizableWrapper 组件 Props 类型定义
 */
export interface DraggableResizableWrapperProps {
  draggable?: boolean, // 是否启用拖拽功能
  resizable?: boolean, // 是否启用调整大小功能
  useCssTransforms?: boolean, // 是否使用CSS transform进行定位
  dragOptions?: ElementDragResizeOptions['dragOptions'], // 拖拽配置选项
  resizeOptions?: ElementDragResizeOptions['resizeOptions'], // 调整大小配置选项
  initialX?: number | string, // 初始X坐标 支持CSS单位
  initialY?: number | string, // 初始Y坐标 支持CSS单位
  initialWidth?: number | string, // 初始宽度 支持CSS单位
  initialHeight?: number | string, // 初始高度 支持CSS单位
  watchDeep?: boolean, // watch监听器的deep配置
  watchImmediate?: boolean // watch监听器的immediate配置
}

/**
 * DraggableResizableWrapper 组件 Emits 类型定义
 */
export interface DraggableResizableWrapperEmits {
  dragStart: [data: DragEventCallbackData], // 拖拽开始事件
  dragMove: [data: DragEventCallbackData], // 拖拽移动事件
  dragEnd: [data: DragEventCallbackData], // 拖拽结束事件
  resizeStart: [data: ResizeEventCallbackData], // 调整大小开始事件
  resizeMove: [data: ResizeEventCallbackData], // 调整大小移动事件
  resizeEnd: [data: ResizeEventCallbackData] // 调整大小结束事件
}

/**
 * DraggableResizableWrapper 组件 Slot 作用域参数类型定义
 */
export interface DraggableResizableWrapperSlotScope {
  x: number, // 当前X坐标
  y: number, // 当前Y坐标
  width: number, // 当前宽度
  height: number, // 当前高度
  isDragging: boolean, // 是否正在拖拽
  isResizing: boolean, // 是否正在调整大小
  activeEdges: Record<string, boolean> // 当前激活的边缘
}

/**
 * DraggableResizableWrapper 组件暴露的方法类型定义
 */
export interface DraggableResizableWrapperExposed {
  // DOM 元素引用
  elementRef: Ref<HTMLElement | undefined>,
  // 当前状态 - 位置和尺寸 (Ref 类型)
  x: Ref<number>,
  y: Ref<number>,
  width: Ref<number>,
  height: Ref<number>,
  // 当前状态 - 交互状态 (Ref 类型)
  isDragging: Ref<boolean>,
  isResizing: Ref<boolean>,
  activeEdges: Ref<Record<string, boolean>>,
  // 更新方法
  updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void,
  updatePosition: (x: number | string, y: number | string) => void,
  updateSize: (width: number | string, height: number | string) => void
}

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
