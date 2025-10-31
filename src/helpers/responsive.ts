import { cloneLayout, compact, correctBounds } from './common'

import type { Breakpoint, Breakpoints, Layout, ResponsiveLayout } from './types'

/**
 * 给定一个宽度，找到满足条件的最高断点（width > breakpoint）。
 *
 * @param breakpoints 断点对象 (例如 {lg: 1200, md: 960, ...})
 * @param width 屏幕宽度。
 * @return 小于该宽度的最大断点名称。
 */
export function getBreakpointFromWidth(breakpoints: Breakpoints, width: number): Breakpoint {
  const sorted = sortBreakpoints(breakpoints)
  let matching = sorted[0]
  for (let i = 1, len = sorted.length; i < len; i++) {
    const breakpointName = sorted[i]
    if (width > breakpoints[breakpointName]) matching = breakpointName
  }
  return matching
}

/**
 * 根据断点获取对应的列数。
 * @param breakpoint 断点名称。
 * @param cols 断点与列数的映射表。
 * @return 列数。
 */
export function getColsFromBreakpoint(breakpoint: Breakpoint, cols: Breakpoints): number {
  if (!cols[breakpoint]) {
    throw new Error(
      'ResponsiveGridLayout: `cols` entry for breakpoint ' + breakpoint + ' is missing!',
    )
  }
  return cols[breakpoint]
}

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
export function findOrGenerateResponsiveLayout(
  orgLayout: Layout,
  layouts: ResponsiveLayout,
  breakpoints: Breakpoints,
  breakpoint: Breakpoint,
  lastBreakpoint: Breakpoint,
  cols: number,
  verticalCompact: boolean,
): Layout {
  // debugger
  // 如果已存在该断点布局，直接返回其克隆。
  if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint])
  // 查找或生成下一个布局
  let layout = orgLayout

  const breakpointsSorted = sortBreakpoints(breakpoints)
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint))
  for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
    const b = breakpointsAbove[i]
    if (layouts[b]) {
      layout = layouts[b]
      break
    }
  }
  // 克隆布局，避免修改原对象
  layout = cloneLayout(layout || []) // clone layout so we don't modify existing items
  return compact(correctBounds(layout, { cols }), verticalCompact)
}

export function generateResponsiveLayout(
  layout: Layout,
  breakpoints: Breakpoints,
  breakpoint: Breakpoint,
  lastBreakpoint: Breakpoint,
  cols: number,
  verticalCompact: boolean,
): Layout {
  // 如果已存在对应断点布局则直接返回（本实现中已注释相关逻辑）。
  /* if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]);
  // 查找或生成下一个布局
  let layout = layouts[lastBreakpoint]; */
  /* const breakpointsSorted = sortBreakpoints(breakpoints);
const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
  const b = breakpointsAbove[i];
  if (layouts[b]) {
    layout = layouts[b];
    break;
  }
} */
  // 克隆布局防止修改原数据
  layout = cloneLayout(layout || []) // clone layout so we don't modify existing items
  return compact(correctBounds(layout, { cols }), verticalCompact)
}

/**
 * 给定断点映射，返回按宽度排序的断点数组，例如 ['xxs','xs','sm',...]。
 *
 * @param breakpoints 断点名到宽度的键值对。
 * @return 排序后的断点数组。
 */
export function sortBreakpoints(breakpoints: Breakpoints): Array<Breakpoint> {
  const keys = Object.keys(breakpoints) as Array<Breakpoint>
  return keys.sort((a, b) => breakpoints[a] - breakpoints[b])
}
