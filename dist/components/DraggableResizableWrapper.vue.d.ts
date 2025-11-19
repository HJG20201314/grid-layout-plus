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
    isDragging: import('vue').Ref<boolean>;
    isResizing: import('vue').Ref<boolean>;
    activeEdges: import('vue').Ref<Record<string, boolean>>;
    updatePositionAndSize: (x: number, y: number, width: number, height: number) => void;
    updatePosition: (x: number, y: number) => void;
    updateSize: (width: number, height: number) => void;
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
    initialX: number;
    initialY: number;
    initialWidth: number;
    initialHeight: number;
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
