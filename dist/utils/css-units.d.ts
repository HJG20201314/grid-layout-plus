export declare const isCssUnitValue: (val: unknown) => val is string;
/**
 * 解析尺寸值(宽/高)为像素
 * @param size 要解析的尺寸值, 支持 number | string (px,% ,vw,vh,rem,em,calc,ch,ex)
 * @param element 关联元素, 用于 % / em / calc 降级测量
 * @param direction width|height 用于 % 基准选择
 */
export declare function parseCssSize(size: number | string, element: HTMLElement | SVGElement | null | undefined, direction?: 'width' | 'height'): number;
/**
 * 解析位置值 (x/y) 为像素, x 使用 width 语义, y 使用 height 语义
 */
export declare function parsePositionValue(value: number | string, element: HTMLElement | SVGElement | null | undefined, axis: 'x' | 'y'): number;
