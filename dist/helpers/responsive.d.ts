import { Breakpoint, Breakpoints, Layout, ResponsiveLayout } from './types';
/**
 * 给定一个宽度，找到满足条件的最高断点（width > breakpoint）。
 *
 * @param breakpoints 断点对象 (例如 {lg: 1200, md: 960, ...})
 * @param width 屏幕宽度。
 * @return 小于该宽度的最大断点名称。
 */
export declare function getBreakpointFromWidth(breakpoints: Breakpoints, width: number): Breakpoint;
/**
 * 根据断点获取对应的列数。
 * @param breakpoint 断点名称。
 * @param cols 断点与列数的映射表。
 * @return 列数。
 */
export declare function getColsFromBreakpoint(breakpoint: Breakpoint, cols: Breakpoints): number;
/**
 * 根据已存在的布局与一个新的断点，查找或生成一个新的布局。
 *
 * 若更高的断点已有布局，则基于其生成；否则基于原始布局复制。
 *
 * @param orgLayout 原始布局。
 * @param layouts 已存在的各断点布局。
 * @param breakpoints 所有断点。
 * @param breakpoint 新断点。
 * @param lastBreakpoint 上一个断点（用于回退）。
 * @param cols 新断点的列数。
 * @param verticalCompact 是否垂直压缩布局。
 * @return 新布局。
 */
export declare function findOrGenerateResponsiveLayout(orgLayout: Layout, layouts: ResponsiveLayout, breakpoints: Breakpoints, breakpoint: Breakpoint, lastBreakpoint: Breakpoint, cols: number, verticalCompact: boolean): Layout;
export declare function generateResponsiveLayout(layout: Layout, breakpoints: Breakpoints, breakpoint: Breakpoint, lastBreakpoint: Breakpoint, cols: number, verticalCompact: boolean): Layout;
/**
 * 给定断点映射，返回按宽度排序的断点数组，例如 ['xxs','xs','sm',...]。
 *
 * @param breakpoints 断点名到宽度的键值对。
 * @return 排序后的断点数组。
 */
export declare function sortBreakpoints(breakpoints: Breakpoints): Array<Breakpoint>;
