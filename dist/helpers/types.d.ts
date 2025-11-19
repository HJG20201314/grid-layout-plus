/**
 * 单个布局基础必需字段。
 * 表示一个网格项的最小数据：宽度、高度、坐标以及唯一标识。
 */
export interface LayoutItemRequired {
    w: number;
    h: number;
    x: number;
    y: number;
    i: number | string;
}
/**
 * 布局项的完整数据结构，包含可选约束与状态标记。
 */
export interface LayoutItem extends LayoutItemRequired {
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    moved?: boolean;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
}
/**
 * 布局数组，由多个布局项组成。
 */
export type Layout = Array<LayoutItem>;
/**
 * 响应式断点名称集合，按宽度从小到大使用。
 */
export type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
/**
 * 断点与数值映射，通常值表示最小宽度或列数等含义。
 */
export type Breakpoints = Record<Breakpoint, number>;
/**
 * 每个断点对应一个布局结构，用于响应式切换。
 */
export type ResponsiveLayout = Record<Breakpoint, Layout>;
/** @internal 内部接口：用于在依赖注入中共享布局状态与操作方法 */
export interface LayoutInstance {
    responsive: boolean;
    lastBreakpoint: Breakpoint;
    cols: Breakpoints;
    colNum: number;
    rowHeight: number;
    width: number;
    margin: number[];
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    transformScale: number;
    useCssTransforms: boolean;
    useStyleCursor: boolean;
    maxRows: number;
    isMirrored: boolean;
    increaseItem: (item: any) => void;
    decreaseItem: (item: any) => void;
}
