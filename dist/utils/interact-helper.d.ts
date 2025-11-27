/** 扩展Element类型以支持_dataUpdateTimer属性和事件监听器引用 */
declare global {
    interface Element {
        _dataUpdateTimer?: ReturnType<typeof setTimeout>;
        _resizeRAF?: number;
    }
    interface HTMLElement {
        _mouseEnterListener?: (event: MouseEvent) => void;
        _mouseLeaveListener?: (event: MouseEvent) => void;
    }
}
/** Modifier类型定义，从interactjs类型系统中推断 */
export type Modifier = any;
/**
 * 边缘配置接口
 */
export interface ElementEdges {
    /** 是否启用顶部边缘 */
    top?: boolean;
    /** 是否启用右侧边缘 */
    right?: boolean;
    /** 是否启用底部边缘 */
    bottom?: boolean;
    /** 是否启用左侧边缘 */
    left?: boolean;
}
/**
 * 拖拽配置选项
 */
export interface DragOptions {
    /** 是否启用拖拽功能 */
    enabled?: boolean;
    /** 允许触发拖拽的元素选择器或DOM元素 */
    allowFrom?: string | HTMLElement;
    /** 忽略拖拽的元素选择器或DOM元素 */
    ignoreFrom?: string | HTMLElement;
    /** 拖拽修饰器数组 */
    modifiers?: Modifier[];
    /** 拖拽节流阈值（毫秒） */
    threshold?: number;
    /** 限制初始拖拽方向 */
    startAxis?: 'x' | 'y' | 'xy';
    /** 锁定拖拽轴方向 */
    lockAxis?: 'x' | 'y' | 'xy' | 'start';
    /** 最大可拖拽次数 */
    max?: number;
    /** 每个元素最大可拖拽次数 */
    maxPerElement?: number;
}
/**
 * 调整大小配置选项
 */
export interface ResizeOptions {
    /** 是否启用调整大小功能 */
    enabled?: boolean;
    /** 可调整大小的边缘配置 */
    edges?: ElementEdges;
    /** 调整大小边缘的外边距 */
    margin?: number;
    /** 调整大小修饰器数组 */
    modifiers?: Modifier[];
    /** 调整大小节流阈值（毫秒） */
    threshold?: number;
    /** 是否限制为正方形调整大小 */
    square?: boolean;
    /** 是否保持宽高比 */
    preserveAspectRatio?: boolean;
    /** 调整大小反转行为 */
    invert?: 'none' | 'negate' | 'reposition';
    /** 最大可调整大小次数 */
    max?: number;
    /** 每个元素最大可调整大小次数 */
    maxPerElement?: number;
    /** 最小宽度 */
    minWidth?: number | string;
    /** 最小高度 */
    minHeight?: number | string;
    /** 最大宽度 */
    maxWidth?: number | string;
    /** 最大高度 */
    maxHeight?: number | string;
    /** 调整大小热区大小 */
    hotZoneSize?: number;
}
/**
 * 拖拽调整大小配置接口
 */
export interface ElementDragResizeOptions {
    /** 是否启用拖拽功能 */
    draggable?: boolean;
    /** 是否启用调整大小功能 */
    resizable?: boolean;
    /** 拖拽配置选项 */
    dragOptions?: DragOptions;
    /** 调整大小配置选项 */
    resizeOptions?: ResizeOptions;
    /** 是否使用CSS transform进行定位 */
    useCssTransforms?: boolean;
    /** 初始元素顶部位置 (支持数字或CSS单位) */
    x?: number | string;
    /** 初始元素左侧位置 (支持数字或CSS单位) */
    y?: number | string;
    /** 初始元素宽度 (支持数字或CSS单位) */
    width?: number | string;
    /** 初始元素高度 (支持数字或CSS单位) */
    height?: number | string;
}
/**
 * 拖拽事件回调数据
 */
export interface DragEventCallbackData {
    /** 事件类型 */
    type: 'dragstart' | 'dragmove' | 'dragend';
    /** 元素顶部位置 */
    top: number;
    /** 元素左侧位置 */
    left: number;
    /** X轴移动距离 */
    deltaX: number;
    /** Y轴移动距离 */
    deltaY: number;
}
/**
 * 调整大小事件回调数据
 */
export interface ResizeEventCallbackData {
    /** 事件类型 */
    type: 'resizestart' | 'resizemove' | 'resizeend';
    /** 元素宽度 */
    width: number;
    /** 元素高度 */
    height: number;
    /** 元素顶部位置 */
    top: number;
    /** 元素左侧位置 */
    left: number;
    /** 宽度变化量 */
    deltaWidth: number;
    /** 高度变化量 */
    deltaHeight: number;
    /** 调整大小的边缘 */
    edges: Partial<ElementEdges>;
}
/**
 * 回调函数接口
 */
export interface ElementDragResizeCallbacks {
    /** 拖拽事件回调函数 */
    onDrag?: (data: DragEventCallbackData) => void;
    /** 调整大小事件回调函数 */
    onResize?: (data: ResizeEventCallbackData) => void;
}
/**
 * makeElementDraggableResizable 函数返回的对象类型
 */
export interface DraggableResizableResult {
    /** 清理函数，用于卸载拖拽和调整大小功能 */
    cleanup: () => void;
    /** 同时更新位置和尺寸的方法 (支持数字或CSS单位) */
    updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void;
    /** 仅更新位置的方法 (支持数字或CSS单位) */
    updatePosition: (x: number | string, y: number | string) => void;
    /** 仅更新尺寸的方法 (支持数字或CSS单位) */
    updateSize: (width: number | string, height: number | string) => void;
}
/**
 * 创建元素拖拽调整大小功能
 * @param element 目标DOM元素
 * @param options 配置选项
 * @param callbacks 回调函数
 * @returns 包含清理函数和更新位置尺寸方法的对象
 */
export declare function makeElementDraggableResizable(element: HTMLElement | SVGElement, options?: ElementDragResizeOptions, callbacks?: ElementDragResizeCallbacks): DraggableResizableResult;
