import { DraggableResizableWrapperProps } from './types';
import { DragEventCallbackData, ResizeEventCallbackData } from '../utils/interact-helper';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            x: number;
            y: number;
            width: number;
            height: number;
            isDragging: boolean;
            isResizing: boolean;
            activeEdges: Record<string, boolean>;
        }): any;
    };
    refs: {
        elementRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DraggableResizableWrapperProps, {
    elementRef: import('vue').Ref<HTMLElement | undefined>;
    x: import('vue').Ref<number>;
    y: import('vue').Ref<number>;
    width: import('vue').Ref<number>;
    height: import('vue').Ref<number>;
    isDragging: boolean;
    isResizing: boolean;
    activeEdges: Record<string, boolean>;
    updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void;
    updatePosition: (x: number | string, y: number | string) => void;
    updateSize: (width: number | string, height: number | string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dragStart: (data: DragEventCallbackData) => any;
    dragMove: (data: DragEventCallbackData) => any;
    dragEnd: (data: DragEventCallbackData) => any;
    resizeStart: (data: ResizeEventCallbackData) => any;
    resizeMove: (data: ResizeEventCallbackData) => any;
    resizeEnd: (data: ResizeEventCallbackData) => any;
}, string, import('vue').PublicProps, Readonly<DraggableResizableWrapperProps> & Readonly<{
    onDragStart?: ((data: DragEventCallbackData) => any) | undefined;
    onDragMove?: ((data: DragEventCallbackData) => any) | undefined;
    onDragEnd?: ((data: DragEventCallbackData) => any) | undefined;
    onResizeStart?: ((data: ResizeEventCallbackData) => any) | undefined;
    onResizeMove?: ((data: ResizeEventCallbackData) => any) | undefined;
    onResizeEnd?: ((data: ResizeEventCallbackData) => any) | undefined;
}>, {
    draggable: boolean;
    resizable: boolean;
    useCssTransforms: boolean;
    dragOptions: import('..').DragOptions;
    resizeOptions: import('..').ResizeOptions;
    initialX: number | string;
    initialY: number | string;
    initialWidth: number | string;
    initialHeight: number | string;
    watchDeep: boolean;
    watchImmediate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    elementRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
