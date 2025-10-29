import type { InjectionKey } from 'vue'
import type { EventEmitter } from '@vexip-ui/utils'
import type { Layout, LayoutInstance, LayoutItem } from './types'

export const LAYOUT_KEY = Symbol('LAYOUT_KEY') as InjectionKey<LayoutInstance>
export const EMITTER_KEY = Symbol('EMITTER_KEY') as InjectionKey<EventEmitter>

/**
 * 返回布局的底部坐标。
 *
 * @param layout 布局数组。
 * @return 底部坐标。
 */
export function bottom(layout: Layout): number {
  let max = 0
  let bottomY
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h
    if (bottomY > max) max = bottomY
  }
  return max
}

export function cloneLayout(layout: Layout): Layout {
  const newLayout = Array(layout.length)
  for (let i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i])
  }
  return newLayout
}

// 快速路径到克隆，因为这是单态的
export function cloneLayoutItem(layoutItem: LayoutItem): LayoutItem {
  // return JSON.parse(JSON.stringify(layoutItem))
  return { ...layoutItem }
}

/**
 * 给定两个布局项，检查它们是否碰撞。
 *
 * @return 如果碰撞则返回true。
 */
export function collides(l1: LayoutItem, l2: LayoutItem): boolean {
  if (l1 === l2) return false // 相同元素
  if (l1.x + l1.w <= l2.x) return false // l1在l2左侧
  if (l1.x >= l2.x + l2.w) return false // l1在l2右侧
  if (l1.y + l1.h <= l2.y) return false // l1在l2上方
  if (l1.y >= l2.y + l2.h) return false // l1在l2下方
  return true // 盒子重叠
}

/**
 * 给定一个布局，对其进行压缩。即遍历每个 y 坐标并移除项目之间的空隙。
 *
 * @param  layout 布局。
 * @param  verticalCompact 是否垂直压缩布局。
 * @param  minPositions 最小位置映射。
 * @return 压缩后的布局。
 */
export function compact(layout: Layout, verticalCompact?: boolean, minPositions?: any): Layout {
  // 静态项立即放入 compareWith 数组，这样其它项会围绕它们排布。
  const compareWith = getStatics(layout)
  // 按行列遍历所有项。
  const sorted = sortLayoutItemsByRowCol(layout)
  // 存储新项。
  const out: Layout = Array(layout.length)

  for (let i = 0, len = sorted.length; i < len; i++) {
    let l = sorted[i]

    // 不移动 static 元素
    if (!l.static) {
      l = compactItem(compareWith, l, verticalCompact, minPositions)

      // 添加到比较数组，我们只与它之前的元素做碰撞检测。
      // 静态项已经在该数组中。
      compareWith.push(l)
    }

    // 添加到输出数组以保证顺序正确。
    out[layout.findIndex(i => i.i === l.i)] = l

    // 清除 moved 标记。
    l.moved = false
  }

  return out
}

/**
 * 压缩布局中的单个项。
 */
export function compactItem(
  compareWith: Layout,
  l: LayoutItem,
  verticalCompact?: boolean,
  minPositions?: any,
): LayoutItem {
  if (verticalCompact) {
    // 在不碰撞的情况下尽可能向上移动元素。
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--
    }
  } else if (minPositions) {
    const minY = minPositions[l.i].y
    while (l.y > minY && !getFirstCollision(compareWith, l)) {
      l.y--
    }
  }

  // 向下移动，并持续向下直到不再碰撞。
  let collides
  while ((collides = getFirstCollision(compareWith, l))) {
    l.y = collides.y + collides.h
  }
  return l
}

/**
 * 给定一个布局，确保所有元素都在其边界内。
 *
 * @param  layout 布局数组。
 * @param  bounds 列数边界。
 */
export function correctBounds(layout: Layout, bounds: { cols: number }): Layout {
  const collidesWith = getStatics(layout)
  for (let i = 0, len = layout.length; i < len; i++) {
    const l = layout[i]
    // 右侧越界
    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w
    // 左侧越界
    if (l.x < 0) {
      l.x = 0
      l.w = bounds.cols
    }
    if (!l.static) collidesWith.push(l)
    else {
      // 如果是 static 且与其它 static 碰撞，则向下移动。
      // 不能简单重叠，需要更优处理。
      while (getFirstCollision(collidesWith, l)) {
        l.y++
      }
    }
  }
  return layout
}

/**
 * 通过 ID 获取布局项，便于后续覆盖。
 *
 * @param    layout 布局数组。
 * @param   id     标识
 * @return     该 ID 对应的项。
 */
export function getLayoutItem(layout: Layout, id: number | string): LayoutItem | undefined {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i]
  }
}

/**
 * 返回与给定项发生碰撞的第一个项。
 * 遍历顺序似乎无关紧要（也许并不理想）。
 *
 * @param  layoutItem 布局项。
 * @return 发生碰撞的项，或 undefined。
 */
export function getFirstCollision(layout: Layout, layoutItem: LayoutItem): LayoutItem | undefined {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i]
  }
}

export function getAllCollisions(layout: Layout, layoutItem: LayoutItem): Array<LayoutItem> {
  return layout.filter(l => collides(l, layoutItem))
}

/**
 * 获取所有 static 元素。
 * @param layout 布局对象数组。
 * @return  static 布局项数组。
 */
export function getStatics(layout: Layout): Array<LayoutItem> {
  return layout.filter(l => l.static)
}

/**
 * 移动一个元素，并负责级联移动其它元素。
 *
 * @param layout 完整布局。
 * @param layoutItem 要移动的元素。
 * @param x 网格单位的 X。
 * @param y 网格单位的 Y。
 * @param isUserAction 是否用户拖拽/调整导致。
 */
export function moveElement(
  layout: Layout,
  layoutItem: LayoutItem,
  x?: number,
  y?: number,
  isUserAction = false,
  preventCollision = false,
): Layout {
  if (layoutItem.static) return layout

  const oldX = layoutItem.x
  const oldY = layoutItem.y

  const movingUp = y && layoutItem.y > y
  // 这比扩展对象要快很多
  if (typeof x === 'number') layoutItem.x = x
  if (typeof y === 'number') layoutItem.y = y
  layoutItem.moved = true

  // 如果发生碰撞，则移动。
  // 在进行比较时，我们必须对要比较的项进行排序
  // 以确保在发生多重碰撞时，我们获得的是
  // 最近的碰撞。
  let sorted = sortLayoutItemsByRowCol(layout)
  if (movingUp) sorted = sorted.reverse()
  const collisions = getAllCollisions(sorted, layoutItem)

  if (preventCollision && collisions.length) {
    layoutItem.x = oldX
    layoutItem.y = oldY
    layoutItem.moved = false
    return layout
  }

  // 移动每个发生碰撞的项。
  for (let i = 0, len = collisions.length; i < len; i++) {
    const collision = collisions[i]

    // 短路处理，避免无限循环
    if (collision.moved) continue

    // 这样在向上移动时会更精确一些，因为会稍等再交换。
    if (layoutItem.y > collision.y && layoutItem.y - collision.y > collision.h / 4) continue

    // 不移动静态项 - 我们必须将 *这个* 元素移开
    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, layoutItem, isUserAction)
    } else {
      layout = moveElementAwayFromCollision(layout, layoutItem, collision, isUserAction)
    }
  }

  return layout
}

/**
 * 根据碰撞结果将元素移开：有空间则尝试向上，否则向下。
 *
 * @param layout 完整布局。
 * @param collidesWith 与之碰撞的项。
 * @param itemToMove 需要移动的项。
 * @param isUserAction 是否由用户操作触发。
 */
export function moveElementAwayFromCollision(
  layout: Layout,
  collidesWith: LayoutItem,
  itemToMove: LayoutItem,
  isUserAction?: boolean,
): Layout {
  const preventCollision = false // we're already colliding
  // 如果碰撞上方有足够空间放置该元素，则移动到上方。
  // 我们只对主要碰撞执行此操作，因为在级联中可能会出现问题
  // 导致不必要的交换行为。
  if (isUserAction) {
    // 创建一个虚拟项，以便我们在此不修改项，仅在 moveElement 中修改。
    const fakeItem: LayoutItem = {
      x: itemToMove.x,
      y: itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: '-1',
    }
    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0)
    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(layout, itemToMove, undefined, fakeItem.y, preventCollision)
    }
  }

  // 之前的优化是直接移动到碰撞下方，但这可能会导致问题
  // 级联移动时，某个项可能会跳过碰撞并导致顺序反转。
  return moveElement(layout, itemToMove, undefined, itemToMove.y + 1, preventCollision)
}

/**
 * 将数字转为百分比字符串。
 *
 * @param   num 任意数字
 * @return      百分比字符串。
 */
export function perc(num: number): string {
  return num * 100 + '%'
}

export function setTransform(top: number, left: number, width: number, height: number) {
  // 将无单位值替换为 px
  const translate = 'translate3d(' + left + 'px,' + top + 'px, 0)'
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + 'px',
    height: height + 'px',
    position: 'absolute',
  }
}
/**
 * 与 setTransform 类似，但返回基于 right 的负值位移。
 */
export function setTransformRtl(top: number, right: number, width: number, height: number) {
  // 将无单位值替换为 px
  const translate = 'translate3d(' + right * -1 + 'px,' + top + 'px, 0)'
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + 'px',
    height: height + 'px',
    position: 'absolute',
  }
}

export function setTopLeft(top: number, left: number, width: number, height: number) {
  return {
    top: top + 'px',
    left: left + 'px',
    width: width + 'px',
    height: height + 'px',
    position: 'absolute',
  }
}
/**
 * 与 setTopLeft 类似，但使用 right 而不是 left。
 */
export function setTopRight(top: number, right: number, width: number, height: number) {
  return {
    top: top + 'px',
    right: right + 'px',
    width: width + 'px',
    height: height + 'px',
    position: 'absolute',
  }
}

/**
 * 获取按从左到右、从上到下排序的布局项，static 优先。
 */
export function sortLayoutItemsByRowCol(layout: Layout): Layout {
  return Array.from(layout).sort(function (a, b) {
    if (a.y === b.y && a.x === b.x) {
      return 0
    }

    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
      return 1
    }

    return -1
  })
}

/**
 * 校验布局，若不合法则抛出错误。
 *
 * @param layout 布局项数组。
 * @param contextName 错误语境名。
 * @throw 验证错误。
 */
export function validateLayout(layout: Layout, contextName?: string): void {
  contextName = contextName || 'Layout'
  const subProps = ['x', 'y', 'w', 'h']
  const keyArr = []
  if (!Array.isArray(layout)) throw new Error(contextName + ' must be an array!')
  for (let i = 0, len = layout.length; i < len; i++) {
    const item = layout[i]
    for (let j = 0; j < subProps.length; j++) {
      if (typeof (item as any)[subProps[j]] !== 'number') {
        throw new Error(
          'VueGridLayout: ' + contextName + '[' + i + '].' + subProps[j] + ' must be a number!',
        )
      }
    }

    if (item.i === undefined || item.i === null) {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].i cannot be null!')
    }

    if (typeof item.i !== 'number' && typeof item.i !== 'string') {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].i must be a string or number!')
    }

    if (keyArr.indexOf(item.i) >= 0) {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].i must be unique!')
    }
    keyArr.push(item.i)

    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].static must be a boolean!')
    }
  }
}

// Flow 无法很好推断，这里直接使用 Object
export function autoBindHandlers(
  el: Record<string, (...args: any[]) => any>,
  fns: Array<string>,
): void {
  fns.forEach(key => (el[key] = el[key].bind(el)))
}

/**
 * 将 JS 对象转换为 CSS 字符串，类似 React 的输出。
 */
export function createMarkup(obj: Record<string, any>) {
  const keys = Object.keys(obj)
  if (!keys.length) return ''
  let i
  const len = keys.length
  let result = ''

  for (i = 0; i < len; i++) {
    const key = keys[i]
    const val = obj[key]
    result += hyphenate(key) + ':' + addPx(key, val) + ';'
  }

  return result
}

/* 下列列表来源于 React 核心 */
export const IS_UNITLESS: Record<string, boolean> = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG 相关属性
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true,
}

/**
 * 为数值型样式追加 px（除非在无单位白名单内）。
 */
export function addPx(name: string, value: number | string) {
  if (typeof value === 'number' && !IS_UNITLESS[name]) {
    return value + 'px'
  } else {
    return value
  }
}

export const hyphenateRE = /([a-z\d])([A-Z])/g

/**
 * 将 camelCase 字符串连字符化。
 */
export function hyphenate(str: string) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase()
}

export function findItemInArray(array: any[], property: string, value: any) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][property] === value) {
      return true
    }
  }

  return false
}

export function findAndRemove(array: any[], property: string, value: any) {
  array.forEach(function (result, index) {
    if (result[property] === value) {
      // Remove from array
      array.splice(index, 1)
    }
  })
}

export function useNameHelper(block: string, namespace = 'vgl') {
  /**
   * 返回 `${namespace}-${block}`
   */
  const b = () => `${namespace}-${block}`
  /**
   * 返回 `${namespace}-${block}__${element}`
   */
  const be = (element: string) => `${b()}__${element}`
  /**
   * 返回 `${namespace}-${block}--${modifier}`
   */
  const bm = (modifier: string | number) => `${b()}--${modifier}`
  /**
   * 返回 `${namespace}-${block}__${element}--${modifier}`
   */
  const bem = (element: string, modifier: string | number) => `${b()}__${element}--${modifier}`

  return {
    b,
    be,
    bm,
    bem,
  }
}
