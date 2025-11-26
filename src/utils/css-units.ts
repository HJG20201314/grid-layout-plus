// 通用 CSS 单位解析工具方法抽离
// 提供: isCssUnitValue, parseCssSize, parsePositionValue
// 统一在交互与包装组件中使用, 避免重复逻辑

export const isCssUnitValue = (val: unknown): val is string => typeof val === 'string' && /(px|%|vw|vh|rem|em|calc\(|ch|ex)/i.test(val || '')

/**
 * 解析尺寸值(宽/高)为像素
 * @param size 要解析的尺寸值, 支持 number | string (px,% ,vw,vh,rem,em,calc,ch,ex)
 * @param element 关联元素, 用于 % / em / calc 降级测量
 * @param direction width|height 用于 % 基准选择
 */
export function parseCssSize(
  size: number | string,
  element: HTMLElement | SVGElement | null | undefined,
  direction: 'width' | 'height' = 'width',
): number {
  if (typeof size === 'number') return size
  if (typeof size !== 'string' || !size) return 0

  const raw = size.trim()
  // 纯数字
  if (/^[-+]?[0-9]*\.?[0-9]+$/.test(raw)) return parseFloat(raw)
  // px
  if (/px$/i.test(raw)) return parseFloat(raw)
  // vh / vw
  if (/vh$/i.test(raw)) { const v = parseFloat(raw); return isNaN(v) ? 0 : window.innerHeight * v / 100 }
  if (/vw$/i.test(raw)) { const v = parseFloat(raw); return isNaN(v) ? 0 : window.innerWidth * v / 100 }
  // rem
  if (/rem$/i.test(raw)) { const v = parseFloat(raw); const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16; return rootSize * v }
  // em
  if (/em$/i.test(raw)) {
    const v = parseFloat(raw)
    const selfSize = element instanceof HTMLElement
      ? parseFloat(getComputedStyle(element).fontSize)
      : parseFloat(getComputedStyle(document.documentElement).fontSize)
    return (selfSize || 16) * v
  }
  // 百分比 (需要父元素)
  if (/%$/i.test(raw)) {
    const v = parseFloat(raw)
    const parent = element instanceof HTMLElement ? element.parentElement : null
    if (!parent || isNaN(v)) return 0
    const rect = parent.getBoundingClientRect()
    const base = direction === 'width' ? rect.width : rect.height
    return base * v / 100
  }
  // calc(...) 及其它复杂表达式降级测量
  if (/calc\(/i.test(raw) || /(ch|ex)$/i.test(raw) || isCssUnitValue(raw)) {
    return measureFallback(raw, element, direction)
  }
  // 未匹配则返回0
  return 0
}

function measureFallback(raw: string, element: HTMLElement | SVGElement | null | undefined, direction: 'width' | 'height'): number {
  const temp = document.createElement('div')
  temp.style.position = 'absolute'
  temp.style.visibility = 'hidden'
  temp.style.pointerEvents = 'none'
  temp.style.margin = '0'
  temp.style.padding = '0'
  temp.style.border = '0'
  temp.style.boxSizing = 'border-box'
  if (direction === 'width') temp.style.width = raw; else temp.style.height = raw
  const container = (element instanceof HTMLElement && element.parentElement) || document.body
  container.appendChild(temp)
  const pixels = parseFloat(getComputedStyle(temp)[direction])
  temp.remove()
  return isNaN(pixels) ? 0 : pixels
}

/**
 * 解析位置值 (x/y) 为像素, x 使用 width 语义, y 使用 height 语义
 */
export function parsePositionValue(
  value: number | string,
  element: HTMLElement | SVGElement | null | undefined,
  axis: 'x' | 'y',
): number {
  if (typeof value === 'number') return value
  if (!isCssUnitValue(value)) return parseFloat(value) || 0
  return parseCssSize(value, element, axis === 'x' ? 'width' : 'height')
}
