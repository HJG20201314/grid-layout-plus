import { Breakpoint, LayoutItem } from '../helpers/types';
import { GridLayoutProps } from './types';
/**
 * getItem
 * 按 id 获取已注册的 GridItem 实例。
 */
declare function getItem(id: number | string): any;
/**
 * layoutUpdate
 * 当外部传入 layout 发生增删变化时：
 * 1. 计算差异增量并更新 originalLayout
 * 2. 重新初始化响应式缓存
 * 3. 压缩并广播更新事件
 */
declare function layoutUpdate(): void;
/**
 * dragEvent
 * 处理 GridItem 拖拽生命周期：更新占位、调用 moveElement、按需压缩与广播。
 * 支持 restoreOnDrag 保持拖拽前紧凑参考位置。
 */
declare function dragEvent(eventName: string, id: number | string, x: number, y: number, h: number, w: number): void;
/**
 * resizeEvent
 * 处理缩放：根据 preventCollision 判断是否需要限制占位尺寸，更新占位与压缩布局。
 */
declare function resizeEvent(eventName: string | undefined, id: number | string, x: number, y: number, h: number, w: number): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        item?(_: {
            item: LayoutItem;
        }): any;
    };
    refs: {
        wrapper: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<GridLayoutProps, {
    state: {
        width: number;
        mergedStyle: {};
        lastLayoutLength: number;
        isDragging: boolean;
        placeholder: {
            x: number;
            y: number;
            w: number;
            h: number;
            i: number | string;
        };
        layouts: {
            xxs: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: number | string;
            }[];
            xs: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: number | string;
            }[];
            sm: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: number | string;
            }[];
            md: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: number | string;
            }[];
            lg: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: number | string;
            }[];
        };
        lastBreakpoint: Breakpoint | null;
        originalLayout: {
            minW?: number | undefined;
            minH?: number | undefined;
            maxW?: number | undefined;
            maxH?: number | undefined;
            moved?: boolean | undefined;
            static?: boolean | undefined;
            isDraggable?: boolean | undefined;
            isResizable?: boolean | undefined;
            w: number;
            h: number;
            x: number;
            y: number;
            i: number | string;
        }[];
    };
    getItem: typeof getItem;
    resizeEvent: typeof resizeEvent;
    dragEvent: typeof dragEvent;
    layoutUpdate: typeof layoutUpdate;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "layout-before-mount": (...args: any[]) => void;
    "layout-mounted": (...args: any[]) => void;
    "layout-updated": (...args: any[]) => void;
    "breakpoint-changed": (...args: any[]) => void;
    "update:layout": (...args: any[]) => void;
    "layout-ready": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<GridLayoutProps> & Readonly<{
    "onLayout-before-mount"?: ((...args: any[]) => any) | undefined;
    "onLayout-mounted"?: ((...args: any[]) => any) | undefined;
    "onLayout-updated"?: ((...args: any[]) => any) | undefined;
    "onBreakpoint-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:layout"?: ((...args: any[]) => any) | undefined;
    "onLayout-ready"?: ((...args: any[]) => any) | undefined;
}>, {
    margin: number[];
    useCssTransforms: boolean;
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    cols: import('..').Breakpoints;
    rowHeight: number;
    maxRows: number;
    transformScale: number;
    useStyleCursor: boolean;
    responsive: boolean;
    autoSize: boolean;
    colNum: number;
    isMirrored: boolean;
    verticalCompact: boolean;
    restoreOnDrag: boolean;
    responsiveLayouts: Partial<import('..').ResponsiveLayout>;
    breakpoints: import('..').Breakpoints;
    preventCollision: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapper: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
