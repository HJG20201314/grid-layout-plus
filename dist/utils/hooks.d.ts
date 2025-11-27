import { Ref, ComputedRef } from 'vue';
import { DragEventCallbackData, ElementDragResizeOptions, ElementEdges, ResizeEventCallbackData } from './interact-helper';
/**
 * Hook props 定义
 */
export interface UseDraggableResizableWrapperProps {
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
 * Hook 事件回调定义
 */
export interface UseDraggableResizableWrapperEvents {
    onDragStart?: (data: DragEventCallbackData) => void;
    onDragMove?: (data: DragEventCallbackData) => void;
    onDragEnd?: (data: DragEventCallbackData) => void;
    onResizeStart?: (data: ResizeEventCallbackData) => void;
    onResizeMove?: (data: ResizeEventCallbackData) => void;
    onResizeEnd?: (data: ResizeEventCallbackData) => void;
}
/**
 * Hook 返回值定义
 */
export interface UseDraggableResizableWrapperReturn {
    elementRef: Ref<HTMLElement | undefined>;
    x: Ref<number>;
    y: Ref<number>;
    width: Ref<number>;
    height: Ref<number>;
    isDragging: Ref<boolean>;
    isResizing: Ref<boolean>;
    activeEdges: Ref<Partial<ElementEdges>>;
    slotScope: ComputedRef<{
        x: number;
        y: number;
        width: number;
        height: number;
        isDragging: boolean;
        isResizing: boolean;
        activeEdges: Record<string, boolean>;
    }>;
    updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void;
    updatePosition: (x: number | string, y: number | string) => void;
    updateSize: (width: number | string, height: number | string) => void;
    cleanup: () => void;
    /** 模板中绑定元素的便捷方法 */
    attachElement: (ref: Element | any | null, refs?: Record<string, any>) => void;
}
/**
 * useDraggableResizableWrapper
 * 将 DraggableResizableWrapper 组件逻辑抽象为可复用 Hook。
 * 使用方式：在组件中调用该 Hook，绑定 elementRef 到容器元素即可开箱使用。
 *
 * @param props 用户配置项，控制是否可拖拽/缩放、定位方式、初始位置与尺寸、以及原生 interact 透传配置
 * @param events 事件回调集合，包含拖拽/缩放的 start/move/end 钩子
 * @returns 返回交互所需的元素引用、位置与尺寸状态、交互状态、插槽作用域，以及位置尺寸更新与清理方法
 */
export declare function useDraggableResizableWrapper(props?: UseDraggableResizableWrapperProps, events?: UseDraggableResizableWrapperEvents): UseDraggableResizableWrapperReturn;
