import { Breakpoints, Layout, ResponsiveLayout } from '../helpers/types';
import { DragEventCallbackData, ElementDragResizeOptions, ElementEdges, ResizeEventCallbackData } from '../utils/interact-helper';
import { Ref } from 'vue';
/**
 * DraggableResizableWrapper 组件 Props 类型定义
 */
export interface DraggableResizableWrapperProps {
    draggable?: boolean;
    resizable?: boolean;
    useCssTransforms?: boolean;
    dragOptions?: ElementDragResizeOptions['dragOptions'];
    resizeOptions?: ElementDragResizeOptions['resizeOptions'];
    initialX?: number | string;
    initialY?: number | string;
    initialWidth?: number | string;
    initialHeight?: number | string;
    watchDeep?: boolean;
    watchImmediate?: boolean;
}
/**
 * DraggableResizableWrapper 组件 Emits 类型定义
 */
export interface DraggableResizableWrapperEmits {
    dragStart: [data: DragEventCallbackData];
    dragMove: [data: DragEventCallbackData];
    dragEnd: [data: DragEventCallbackData];
    resizeStart: [data: ResizeEventCallbackData];
    resizeMove: [data: ResizeEventCallbackData];
    resizeEnd: [data: ResizeEventCallbackData];
}
/**
 * DraggableResizableWrapper 组件 Slot 作用域参数类型定义
 */
export interface DraggableResizableWrapperSlotScope {
    x: number;
    y: number;
    width: number;
    height: number;
    isDragging: boolean;
    isResizing: boolean;
    activeEdges: Partial<ElementEdges>;
}
/**
 * DraggableResizableWrapper 组件暴露的方法类型定义
 */
export interface DraggableResizableWrapperExposed {
    elementRef: Ref<HTMLElement | undefined>;
    x: Ref<number>;
    y: Ref<number>;
    width: Ref<number>;
    height: Ref<number>;
    isDragging: Ref<boolean>;
    isResizing: Ref<boolean>;
    activeEdges: Ref<Partial<ElementEdges>>;
    updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void;
    updatePosition: (x: number | string, y: number | string) => void;
    updateSize: (width: number | string, height: number | string) => void;
}
export interface GridLayoutProps {
    autoSize?: boolean;
    colNum?: number;
    rowHeight?: number;
    maxRows?: number;
    margin?: number[];
    isDraggable?: boolean;
    isResizable?: boolean;
    isMirrored?: boolean;
    isBounded?: boolean;
    useCssTransforms?: boolean;
    verticalCompact?: boolean;
    restoreOnDrag?: boolean;
    layout: Layout;
    responsive?: boolean;
    responsiveLayouts?: Partial<ResponsiveLayout>;
    transformScale?: number;
    breakpoints?: Breakpoints;
    cols?: Breakpoints;
    preventCollision?: boolean;
    useStyleCursor?: boolean;
}
export interface GridItemProps {
    isDraggable?: boolean;
    isResizable?: boolean;
    isBounded?: boolean;
    static?: boolean;
    minH?: number;
    minW?: number;
    maxH?: number;
    maxW?: number;
    x: number;
    y: number;
    w: number;
    h: number;
    i: number | string;
    dragIgnoreFrom?: string;
    dragAllowFrom?: string;
    resizeIgnoreFrom?: string;
    preserveAspectRatio?: boolean;
    dragOption?: Record<string, any>;
    resizeOption?: Record<string, any>;
}
