import { GridItemProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        wrapper: HTMLElement;
    };
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<GridItemProps, {
    state: {
        cols: number;
        containerWidth: number;
        rowHeight: number;
        margin: number[];
        maxRows: number;
        draggable: boolean | undefined;
        resizable: boolean | undefined;
        bounded: boolean | undefined;
        transformScale: number;
        useCssTransforms: boolean;
        useStyleCursor: boolean;
        isDragging: boolean;
        dragging: {
            top: number;
            left: number;
        };
        isResizing: boolean;
        resizing: {
            width: number;
            height: number;
        };
        style: Record<string, string>;
        rtl: boolean;
        activeResizeEdges: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
        enabledResizeEdges: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
    };
    wrapper: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    move: (...args: any[]) => void;
    resize: (...args: any[]) => void;
    "container-resized": (...args: any[]) => void;
    resized: (...args: any[]) => void;
    moved: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<GridItemProps> & Readonly<{
    onMove?: ((...args: any[]) => any) | undefined;
    onResize?: ((...args: any[]) => any) | undefined;
    "onContainer-resized"?: ((...args: any[]) => any) | undefined;
    onResized?: ((...args: any[]) => any) | undefined;
    onMoved?: ((...args: any[]) => any) | undefined;
}>, {
    preserveAspectRatio: boolean;
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string;
    resizeIgnoreFrom: string;
    dragOption: Record<string, any>;
    resizeOption: Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapper: HTMLElement;
}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
