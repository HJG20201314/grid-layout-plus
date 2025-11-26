import interact from 'interactjs'
import { throttle } from '@vexip-ui/utils'

import { isCssUnitValue, parseCssSize, parsePositionValue } from './css-units'

import type { DragEvent, Interactable, ResizeEvent } from '@interactjs/types'


/** 扩展Element类型以支持_dataUpdateTimer属性和事件监听器引用 */
declare global {
  interface Element {
    _dataUpdateTimer?: ReturnType<typeof setTimeout>,
    _resizeRAF?: number
  }

  interface HTMLElement {
    _mouseEnterListener?: (event: MouseEvent) => void,
    _mouseLeaveListener?: (event: MouseEvent) => void
  }
}

/** 优化常量 */
const DEFAULT_THROTTLE_DELAY = 2 // 极低节流阈值以获得极致流畅度

/** Modifier类型定义，从interactjs类型系统中推断 */
export type Modifier = any

/**
 * 边缘配置接口
 */
export interface ElementEdges {
  /** 是否启用顶部边缘 */
  top?: boolean,
  /** 是否启用右侧边缘 */
  right?: boolean,
  /** 是否启用底部边缘 */
  bottom?: boolean,
  /** 是否启用左侧边缘 */
  left?: boolean
}

/**
 * 拖拽配置选项
 */
export interface DragOptions {
  /** 是否启用拖拽功能 */
  enabled?: boolean,
  /** 允许触发拖拽的元素选择器或DOM元素 */
  allowFrom?: string | HTMLElement,
  /** 忽略拖拽的元素选择器或DOM元素 */
  ignoreFrom?: string | HTMLElement,
  /** 拖拽修饰器数组 */
  modifiers?: Modifier[],
  /** 拖拽节流阈值（毫秒） */
  threshold?: number,
  /** 限制初始拖拽方向 */
  startAxis?: 'x' | 'y' | 'xy',
  /** 锁定拖拽轴方向 */
  lockAxis?: 'x' | 'y' | 'xy' | 'start',
  /** 最大可拖拽次数 */
  max?: number,
  /** 每个元素最大可拖拽次数 */
  maxPerElement?: number
}

/**
 * 调整大小配置选项
 */
export interface ResizeOptions {
  /** 是否启用调整大小功能 */
  enabled?: boolean,
  /** 可调整大小的边缘配置 */
  edges?: ElementEdges,
  /** 调整大小边缘的外边距 */
  margin?: number,
  /** 调整大小修饰器数组 */
  modifiers?: Modifier[],
  /** 调整大小节流阈值（毫秒） */
  threshold?: number,
  // 支持更多interactjs原生配置选项
  /** 是否限制为正方形调整大小 */
  square?: boolean,
  /** 是否保持宽高比 */
  preserveAspectRatio?: boolean,
  /** 调整大小反转行为 */
  invert?: 'none' | 'negate' | 'reposition',
  /** 最大可调整大小次数 */
  max?: number,
  /** 每个元素最大可调整大小次数 */
  maxPerElement?: number,
  /** 最小宽度 */
  minWidth?: number | string,
  /** 最小高度 */
  minHeight?: number | string,
  /** 最大宽度 */
  maxWidth?: number | string,
  /** 最大高度 */
  maxHeight?: number | string,
  /** 调整大小热区大小 */
  hotZoneSize?: number
}

/**
 * 拖拽调整大小配置接口
 */
export interface ElementDragResizeOptions {
  /** 是否启用拖拽功能 */
  draggable?: boolean,
  /** 是否启用调整大小功能 */
  resizable?: boolean,
  /** 拖拽配置选项 */
  dragOptions?: DragOptions,
  /** 调整大小配置选项 */
  resizeOptions?: ResizeOptions,
  /** 是否使用CSS transform进行定位 */
  useCssTransforms?: boolean,
  /** 初始元素顶部位置 (支持数字或CSS单位) */
  x?: number | string,
  /** 初始元素左侧位置 (支持数字或CSS单位) */
  y?: number | string,
  /** 初始元素宽度 (支持数字或CSS单位) */
  width?: number | string,
  /** 初始元素高度 (支持数字或CSS单位) */
  height?: number | string
}

/**
 * 拖拽事件回调数据
 */
export interface DragEventCallbackData {
  /** 事件类型 */
  type: 'dragstart' | 'dragmove' | 'dragend',
  /** 元素顶部位置 */
  top: number,
  /** 元素左侧位置 */
  left: number,
  /** X轴移动距离 */
  deltaX: number,
  /** Y轴移动距离 */
  deltaY: number
}

/**
 * 调整大小事件回调数据
 */
export interface ResizeEventCallbackData {
  /** 事件类型 */
  type: 'resizestart' | 'resizemove' | 'resizeend',
  /** 元素宽度 */
  width: number,
  /** 元素高度 */
  height: number,
  /** 元素顶部位置 */
  top: number,
  /** 元素左侧位置 */
  left: number,
  /** 宽度变化量 */
  deltaWidth: number,
  /** 高度变化量 */
  deltaHeight: number,
  /** 调整大小的边缘 */
  edges: Partial<ElementEdges>
}

/**
 * 回调函数接口
 */
export interface ElementDragResizeCallbacks {
  /** 拖拽事件回调函数 */
  onDrag?: (data: DragEventCallbackData) => void,
  /** 调整大小事件回调函数 */
  onResize?: (data: ResizeEventCallbackData) => void
}

/**
 * makeElementDraggableResizable 函数返回的对象类型
 */
export interface DraggableResizableResult {
  /** 清理函数，用于卸载拖拽和调整大小功能 */
  cleanup: () => void,
  /** 同时更新位置和尺寸的方法 (支持数字或CSS单位) */
  updatePositionAndSize: (x: number | string, y: number | string, width: number | string, height: number | string) => void,
  /** 仅更新位置的方法 (支持数字或CSS单位) */
  updatePosition: (x: number | string, y: number | string) => void,
  /** 仅更新尺寸的方法 (支持数字或CSS单位) */
  updateSize: (width: number | string, height: number | string) => void
}

/**
 * 创建元素拖拽调整大小功能
 * @param element 目标DOM元素
 * @param options 配置选项
 * @param callbacks 回调函数
 * @returns 包含清理函数和更新位置尺寸方法的对象
 */
export function makeElementDraggableResizable(
  element: HTMLElement | SVGElement,
  options: ElementDragResizeOptions = {},
  callbacks?: ElementDragResizeCallbacks,
): DraggableResizableResult {
  // 默认配置
  const defaultOptions: ElementDragResizeOptions = {
    draggable: true,
    resizable: true,
    useCssTransforms: true,
    dragOptions: {},
    resizeOptions: {
      edges: { top: false, right: false, bottom: false, left: false },
      margin: 8,
      hotZoneSize: 8,
    },
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }

  // 合并配置
  const mergedOptions = { ...defaultOptions, ...options }
  const { draggable, resizable, useCssTransforms, dragOptions, resizeOptions } = mergedOptions

  // 使用通用方式存储数据，兼容所有Element类型
  const getData = (key: string, defaultValue: string): string => {
    return element.getAttribute(`data-${key}`) || defaultValue
  }
  const setData = (key: string, value: string | number) => {
    element.setAttribute(`data-${key}`, value.toString())
  }

  // 获取初始尺寸
  const rect = element.getBoundingClientRect()
  const width = mergedOptions.width || rect.width || 0
  const height = mergedOptions.height || rect.height || 0

  /** 初始化数据 - 优先使用已存在的数据属性，如果没有则使用实际尺寸 */
  setData('x', mergedOptions.x || 0)
  setData('y', mergedOptions.y || 0)  
  setData('width', width.toString())
  setData('height', height.toString())

  const initialX = getData('x', '0')
  const initialY = getData('y', '0')
  const initialWidth = getData('width', width.toString())
  const initialHeight = getData('height', height.toString())

  // 使用解析后的初始缓存值 (内部统一使用像素值计算)
  let cachedX = parsePositionValue(initialX, element, 'x')
  let cachedY = parsePositionValue(initialY, element, 'y')
  let cachedWidth = parseCssSize(initialWidth, element, 'width')
  let cachedHeight = parseCssSize(initialHeight, element, 'height')

  /** 创建拖拽线元素 */
  const resizeLines = new Map<string, HTMLElement>()

  /** 移除cursor相关的样式存储和恢复功能，让使用方完全控制元素的光标样式 */

  /** 标记状态变量 */
  let isResizing = false
  let isDragging = false
  let activeEdges: Partial<ElementEdges> = {}

  /** 通用的定位检查函数 */
  const isPositioned = (property: 'left' | 'right' | 'top' | 'bottom') => {
    if (element instanceof HTMLElement) {
      const computedStyle = getComputedStyle(element)
      // 检查position是否为absolute或fixed，并且指定属性有非auto值
      return (computedStyle.position === 'absolute' || computedStyle.position === 'fixed') && 
             computedStyle[property] !== 'auto' && computedStyle[property] !== ''
    }
    return false
  }

  /** 检查元素是否为右侧定位 */
  const isRightPositioned = () => isPositioned('right')

  /** 检查元素是否为左侧定位 */
  const isLeftPositioned = () => isPositioned('left')

  /** 检查元素是否为顶部定位 */
  const isTopPositioned = () => isPositioned('top')

  /** 检查元素是否为底部定位 */
  const isBottomPositioned = () => isPositioned('bottom')

  /** 共享的缓存变量 - 使用已解析的 cachedX/cachedY/cachedWidth/cachedHeight (CSS单位已转换为像素) */
  // (已在上方通过 parsePositionValue 与 parseCssSize 初始化, 这里不再重复声明)

  /** 设置拖拽边的hover状态 */
  const setEdgeActive = (edges: Partial<ElementEdges>) => {
    activeEdges = edges
    ;(['top', 'right', 'bottom', 'left'] as const).forEach(edge => {
      const line = resizeLines.get(edge)
      if (line) {
        // 只处理内部线条的背景色，外部线条保持透明
        const innerLine = line.firstElementChild as HTMLElement
        if (innerLine) {
          innerLine.style.backgroundColor = edges[edge] ? 'rgba(29, 98, 236, 1)' : 'rgba(29, 98, 236, 0)'
        }
      }
    })
  }

  /** 重置所有拖拽边的状态 */
  const resetEdgesActive = () => {
    resizeLines.forEach(line => {
      // 只处理内部线条的背景色，外部线条保持透明
      const innerLine = line.firstElementChild as HTMLElement
      if (innerLine) {
        innerLine.style.backgroundColor = 'rgba(29, 98, 236, 0)'
      }
    })
    activeEdges = {}
  }

  const createResizeLines = () => {
    const edges = resizeOptions?.edges || {}
    // 获取margin值，默认为4
    const margin = resizeOptions?.margin ?? 4
    // 热区放大尺寸，设置为10px以提高可点击性
    const hotZoneSize = resizeOptions?.hotZoneSize ?? 10
    
    const lineStyle = {
      position: 'absolute',
      backgroundColor: 'rgba(29, 98, 236, 0)', // 始终保持透明
      pointerEvents: 'auto', // 设置为auto以支持hover效果
      // 移除transition，因为背景色不会变化
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    
    // 内部div样式，用于放大热区
    const innerLineStyle = {
      backgroundColor: 'rgba(29, 98, 236, 0)', // 初始透明
      transition: 'background-color 0.1s ease',
      pointerEvents: 'auto',
    }

    /** 为线条添加hover效果的函数 */
    const setupHoverEffect = (outerLine: HTMLElement, innerLine: HTMLElement) => {
      /** 鼠标进入时只显示内部线条的背景色 */
      const handleMouseEnter = () => {
        // outerLine保持透明
        innerLine.style.backgroundColor = 'rgba(29, 98, 236, 1)'
      }

      /** 鼠标离开时恢复内部线条透明，但在拖拽过程中不执行 */
      const handleMouseLeave = () => {
        if (!isResizing) {
          // outerLine保持透明
          innerLine.style.backgroundColor = 'rgba(29, 98, 236, 0)'
        }
      }

      /** 添加事件监听器 */
      outerLine.addEventListener('mouseenter', handleMouseEnter)
      outerLine.addEventListener('mouseleave', handleMouseLeave)

      /** 存储事件监听器引用，以便后续移除 */
      outerLine._mouseEnterListener = handleMouseEnter
      outerLine._mouseLeaveListener = handleMouseLeave
    }

    /** 顶部拖拽线 */
    if (edges.top) {
      // 外部容器
      const outerLine = document.createElement('div')
      // 内部热区div
      const innerLine = document.createElement('div')
      
      // 设置外部容器样式（热区放大）
      Object.assign(outerLine.style, lineStyle, {
        top: `-${hotZoneSize / 2 + margin}px`,
        left: '0',
        width: '100%',
        height: `${hotZoneSize}px`,
        cursor: 'row-resize',
        zIndex: '10',
        alignItems: 'center',
        justifyContent: 'center',
      })
      
      // 设置内部线条样式（实际显示的线条）
      Object.assign(innerLine.style, innerLineStyle, {
        width: '100%',
        height: '2px',
      })
      
      // 将内部线条添加到外部容器
      outerLine.appendChild(innerLine)
      // 设置hover效果
      setupHoverEffect(outerLine, innerLine)
      // 添加到元素
      element.appendChild(outerLine)
      // 存储引用
      resizeLines.set('top', outerLine)
    }

    /** 右侧拖拽线 */
    if (edges.right) {
      // 外部容器
      const outerLine = document.createElement('div')
      // 内部热区div
      const innerLine = document.createElement('div')
      
      // 设置外部容器样式（热区放大）
      Object.assign(outerLine.style, lineStyle, {
        top: '0',
        right: `-${hotZoneSize / 2 + margin}px`,
        width: `${hotZoneSize}px`,
        height: '100%',
        cursor: 'col-resize',
        zIndex: '10',
        alignItems: 'center',
        justifyContent: 'center',
      })
      
      // 设置内部线条样式（实际显示的线条）
      Object.assign(innerLine.style, innerLineStyle, {
        width: '2px',
        height: '100%',
      })
      
      // 将内部线条添加到外部容器
      outerLine.appendChild(innerLine)
      // 设置hover效果
      setupHoverEffect(outerLine, innerLine)
      // 添加到元素
      element.appendChild(outerLine)
      // 存储引用
      resizeLines.set('right', outerLine)
    }

    /** 底部拖拽线 */
    if (edges.bottom) {
      // 外部容器
      const outerLine = document.createElement('div')
      // 内部热区div
      const innerLine = document.createElement('div')
      
      // 设置外部容器样式（热区放大）
      Object.assign(outerLine.style, lineStyle, {
        bottom: `-${hotZoneSize / 2 + margin}px`,
        left: '0',
        width: '100%',
        height: `${hotZoneSize}px`,
        cursor: 'row-resize',
        zIndex: '10',
        alignItems: 'center',
        justifyContent: 'center',
      })
      
      // 设置内部线条样式（实际显示的线条）
      Object.assign(innerLine.style, innerLineStyle, {
        width: '100%',
        height: '2px',
      })
      
      // 将内部线条添加到外部容器
      outerLine.appendChild(innerLine)
      // 设置hover效果
      setupHoverEffect(outerLine, innerLine)
      // 添加到元素
      element.appendChild(outerLine)
      // 存储引用
      resizeLines.set('bottom', outerLine)
    }

    /** 左侧拖拽线 */
    if (edges.left) {
      // 外部容器
      const outerLine = document.createElement('div')
      // 内部热区div
      const innerLine = document.createElement('div')
      
      // 设置外部容器样式（热区放大）
      Object.assign(outerLine.style, lineStyle, {
        top: '0',
        left: `-${hotZoneSize / 2 + margin}px`,
        width: `${hotZoneSize}px`,
        height: '100%',
        cursor: 'col-resize',
        zIndex: '10',
        alignItems: 'center',
        justifyContent: 'center',
      })
      
      // 设置内部线条样式（实际显示的线条）
      Object.assign(innerLine.style, innerLineStyle, {
        width: '2px',
        height: '100%',
      })
      
      // 将内部线条添加到外部容器
      outerLine.appendChild(innerLine)
      // 设置hover效果
      setupHoverEffect(outerLine, innerLine)
      // 添加到元素
      element.appendChild(outerLine)
      // 存储引用
      resizeLines.set('left', outerLine)
    }
  }

  /** 设置拖拽线可见性 */
  const setResizeLinesVisible = (_visible: boolean) => {
    resizeLines.forEach(line => {
      /** 始终保持pointerEvents为auto以支持hover效果 */
      line.style.pointerEvents = 'auto'
      line.style.display = 'flex' // 确保线条总是显示
    })
  }

  /** 初始化interact实例 */
  const interactable: Interactable = interact(element)
    /** 设置元素样式 */
    .styleCursor(false)

  /** 配置拖拽功能 */
  if (draggable) {
    /** 定义拖拽事件处理函数 */
    const handleDragStart = (_event: DragEvent) => {
      /** 设置当前正在拖拽的状态 */
      isDragging = true

      // 禁用调整大小功能
      if (resizable && resizeOptions) {
        interactable.resizable(false)
      }

      callbacks?.onDrag?.({
        type: 'dragstart',
        top: cachedY,
        left: cachedX,
        deltaX: 0,
        deltaY: 0,
      })
    }

    const handleDragMove = (event: DragEvent) => {
      // 更新缓存的坐标值
      cachedX += event.dx
      cachedY += event.dy

      if (event.target instanceof HTMLElement) {
        const computedStyle = getComputedStyle(event.target)
        const isAbsoluteOrFixed = computedStyle.position === 'absolute' || computedStyle.position === 'fixed'

        if (useCssTransforms && !isAbsoluteOrFixed) {
          // 对于非绝对/固定定位元素，使用transform
          event.target.style.transform = `translate(${cachedX}px, ${cachedY}px)`
        } else if (isAbsoluteOrFixed) {
          // 对于绝对/固定定位元素，使用直接定位
          // 优先级：left > right, top > bottom
          if (isLeftPositioned()) {
            event.target.style.left = `${cachedX}px`
          } else if (!isRightPositioned()) {
            event.target.style.left = `${cachedX}px`
          } else if (isRightPositioned()) {
            event.target.style.right = `${-cachedX}px`
          }
          
          if (isTopPositioned()) {
            event.target.style.top = `${cachedY}px`
          } else if (!isBottomPositioned()) {
            event.target.style.top = `${cachedY}px`
          } else if (isBottomPositioned()) {
            event.target.style.bottom = `${-cachedY}px`
          }
        } else {
          // 对于其他情况（如relative），使用transform
          event.target.style.transform = `translate(${cachedX}px, ${cachedY}px)`
        }
      }

      // 延迟更新数据属性，减少DOM操作频率
      if (!event.target._dataUpdateTimer) {
        event.target._dataUpdateTimer = setTimeout(() => {
          if (event.target instanceof Element) {
            event.target.setAttribute('data-x', cachedX.toString())
            event.target.setAttribute('data-y', cachedY.toString())
          }
          delete event.target._dataUpdateTimer
        }, 50)
      }

      // 如果有回调，使用requestAnimationFrame异态处理以提高性能
      if (callbacks?.onDrag) {
        requestAnimationFrame(() => {
          callbacks.onDrag?.({
            type: 'dragmove',
            top: cachedY,
            left: cachedX,
            deltaX: event.dx,
            deltaY: event.dy,
          })
        })
      }
    }

    const handleDragEnd = (event: DragEvent) => {
      // 重置拖拽状态
      isDragging = false

      // 重新启用调整大小功能
      if (resizable && resizeOptions) {
        interactable.resizable(true)
      }

      // 立即更新数据属性，确保最终状态正确
      if (event.target instanceof Element) {
        event.target.setAttribute('data-x', cachedX.toString())
        event.target.setAttribute('data-y', cachedY.toString())
      }

      callbacks?.onDrag?.({
        type: 'dragend',
        top: cachedY,
        left: cachedX,
        deltaX: event.dx,
        deltaY: event.dy,
      })
    }

    // 创建节流版本的拖拽move处理函数
    const throttleDragMove = throttle(
      handleDragMove,
      dragOptions?.threshold ?? DEFAULT_THROTTLE_DELAY,
    )

    // 创建拖拽配置
    const draggableConfig: any = {
      enabled: true,
      allowFrom: dragOptions?.allowFrom,
      ignoreFrom: dragOptions?.ignoreFrom,
      modifiers: dragOptions?.modifiers || [],
      listeners: {
        start: handleDragStart,
        move: throttleDragMove,
        end: handleDragEnd,
      },
    }

    // 添加额外支持的配置选项
    if (dragOptions?.startAxis) draggableConfig.startAxis = dragOptions.startAxis
    if (dragOptions?.lockAxis) draggableConfig.lockAxis = dragOptions.lockAxis
    if (dragOptions?.max !== undefined) draggableConfig.max = dragOptions.max
    if (dragOptions?.maxPerElement !== undefined)
      draggableConfig.maxPerElement = dragOptions.maxPerElement

    interactable.draggable(draggableConfig)
  }

  // 配置调整大小功能
  if (resizable && resizeOptions) {
    // 创建拖拽线
    createResizeLines()

    // 缓存最小/最大尺寸值，避免在每次resize move时重新计算
    let cachedMinWidth = 10
    let cachedMinHeight = 10
    let cachedMaxWidth = Infinity
    let cachedMaxHeight = Infinity
    let cachedAspectRatio = cachedWidth / cachedHeight // 缓存宽高比

    const handleResizeStart = (event: ResizeEvent) => {
      // 显示拖拽线
      setResizeLinesVisible(true)

      // 设置当前正在调整大小的状态
      isResizing = true

      // 禁用拖拽功能
      if (draggable && dragOptions) {
        interactable.draggable(false)
      }

      // 标记活动边的hover状态
      const normalizedEdges: Partial<ElementEdges> = {
        top: Boolean(event.edges?.top),
        right: Boolean(event.edges?.right),
        bottom: Boolean(event.edges?.bottom),
        left: Boolean(event.edges?.left),
      }

      // 应用活动边的样式
      setEdgeActive(normalizedEdges)

      // 预计算并缓存最小/最大尺寸值，只在resize开始时计算一次
      cachedMinWidth = parseCssSize(resizeOptions?.minWidth ?? 10, event.target, 'width')
      cachedMinHeight = parseCssSize(resizeOptions?.minHeight ?? 10, event.target, 'height')
      cachedMaxWidth = parseCssSize(resizeOptions?.maxWidth ?? Infinity, event.target, 'width')
      cachedMaxHeight = parseCssSize(resizeOptions?.maxHeight ?? Infinity, event.target, 'height')
      cachedAspectRatio = cachedWidth / cachedHeight

      // 如果有回调，使用requestAnimationFrame异态处理以提高性能
      if (callbacks?.onResize) {
        requestAnimationFrame(() => {
          callbacks.onResize?.({
            type: 'resizestart',
            width: cachedWidth,
            height: cachedHeight,
            top: cachedY,
            left: cachedX,
            deltaWidth: 0,
            deltaHeight: 0,
            edges: normalizedEdges,
          })
        })
      }
    }

    const handleResizeMove = (event: ResizeEvent) => {
      // 动态检查元素的定位状态
      const rightPositioned = isRightPositioned()
      const leftPositioned = isLeftPositioned()
      const topPositioned = isTopPositioned()
      const bottomPositioned = isBottomPositioned()

      // 对于drawer组件的固定定位场景，确保cached值在模式切换后正确初始化
      // 检查元素是否有明确的固定定位属性设置
      const computedStyle =
        event.target instanceof HTMLElement ? getComputedStyle(event.target) : null

      // 根据用户要求实现不同边缘调整时的位置计算
      const deltaWidth = event.deltaRect?.width || 0
      const deltaHeight = event.deltaRect?.height || 0

      // 计算原始宽高比（如果需要保持宽高比）
      let adjustedDeltaWidth = deltaWidth
      let adjustedDeltaHeight = deltaHeight

      // 如果启用了保持宽高比且不是固定定位元素
      if (
        resizeOptions?.preserveAspectRatio &&
        !rightPositioned &&
        !leftPositioned &&
        !topPositioned &&
        !bottomPositioned
      ) {
        // 使用缓存的宽高比
        // 确定主要拖拽方向并调整另一维度
        // 如果是水平边缘（左右），根据宽度变化调整高度
        if (event.edges?.left || event.edges?.right) {
          adjustedDeltaHeight = deltaWidth / cachedAspectRatio
        } else if (event.edges?.top || event.edges?.bottom) {
          // 如果是垂直边缘（上下），根据高度变化调整宽度
          adjustedDeltaWidth = deltaHeight * cachedAspectRatio
        }
      }

      // 计算目标尺寸，使用缓存的限制值
      let targetWidth = cachedWidth + adjustedDeltaWidth
      let targetHeight = cachedHeight + adjustedDeltaHeight

      // 应用最小最大限制
      targetWidth = Math.max(cachedMinWidth, Math.min(cachedMaxWidth, targetWidth))
      targetHeight = Math.max(cachedMinHeight, Math.min(cachedMaxHeight, targetHeight))

      // 重新计算实际的delta值
      adjustedDeltaWidth = targetWidth - cachedWidth
      adjustedDeltaHeight = targetHeight - cachedHeight

      // 避免不必要的计算和更新
      if (adjustedDeltaWidth === 0 && adjustedDeltaHeight === 0) {
        return // 没有变化，直接返回
      }

      // 在应用尺寸限制后，根据实际的delta值调整位置
      // 对于固定定位元素，我们避免调整cached值，而是直接通过CSS属性控制位置
      // 这样可以确保固定点不变，避免尺寸变化跳跃

      // 对于固定定位元素，在模式切换后首次resize时重置cached值
      // 确保尺寸计算基于实际的DOM状态而不是缓存值
      if (
        (rightPositioned || leftPositioned || topPositioned || bottomPositioned) &&
        computedStyle
      ) {
        // 重新获取元素的实际尺寸，避免模式切换后缓存值不准确
        const currentRect = event.target.getBoundingClientRect()
        if (
          Math.abs(currentRect.width - cachedWidth) > 1 ||
          Math.abs(currentRect.height - cachedHeight) > 1
        ) {
          cachedWidth = currentRect.width
          cachedHeight = currentRect.height
        }
      }

      // 只对非固定定位元素调整cached值
      if (!rightPositioned && !leftPositioned && !topPositioned && !bottomPositioned) {
        // 1. resize上边时
        if (event.edges?.top) {
          cachedY -= adjustedDeltaHeight
        }
        // 2. resize右边时
        if (event.edges?.right) {
          // 不调整cachedX，因为resize右边不影响位置
        }
        // 3. resize下边时
        if (event.edges?.bottom) {
          // 不调整cachedY，因为resize下边不影响位置
        }
        // 4. resize左边时
        if (event.edges?.left) {
          cachedX -= adjustedDeltaWidth
        }
      }

      // 更新尺寸缓存
      cachedWidth = targetWidth
      cachedHeight = targetHeight

      // 优化DOM操作，支持多种resize方向

      // 对于所有元素，首先更新宽度
      if (event.edges?.left || event.edges?.right) {
        event.target.style.width = `${cachedWidth}px`
      }

      // 对于所有元素，首先更新高度
      if (event.edges?.top || event.edges?.bottom) {
        event.target.style.height = `${cachedHeight}px`
      }

      // 对于固定定位元素，需要额外调整位置以保持固定点不变
      // 这些调整会在下面的特殊处理部分完成

      // 针对底部固定元素拖动上边的特殊处理
      if (event.edges?.top && bottomPositioned) {
        // 底部固定时，拖动上边需要计算新的top位置
        // 获取父容器高度
        const parentRect = event.target.parentElement?.getBoundingClientRect()
        if (parentRect) {
          // 对于底部固定元素，top应该是：父容器高度 - 元素高度 - bottom定位值
          const bottomValue = parseInt(getComputedStyle(event.target).bottom || '0', 10)
          const newTop = parentRect.height - cachedHeight - bottomValue
          event.target.style.top = `${newTop}px`
        }
      }

      // 针对右侧固定元素拖动左边的特殊处理
      if (event.edges?.left && rightPositioned) {
        // 右侧固定时，拖动左边需要计算新的left位置
        // 获取父容器宽度
        const parentRect = event.target.parentElement?.getBoundingClientRect()
        if (parentRect) {
          // 对于右侧固定元素，left应该是：父容器宽度 - 元素宽度 - right定位值
          const rightValue = parseInt(getComputedStyle(event.target).right || '0', 10)
          const newLeft = parentRect.width - cachedWidth - rightValue
          event.target.style.left = `${newLeft}px`
        }
      }

      // 针对左侧固定元素拖动右边的特殊处理
      if (event.edges?.right && leftPositioned) {
        // 左侧固定时，拖动右边需要确保宽度变化平滑
        // 获取父容器宽度和当前left值
        const leftValue = parseInt(getComputedStyle(event.target).left || '0', 10)
        // 直接设置width属性，由于left已经固定，这会自动保持左侧固定点不变
        // 为了确保模式切换后的平滑性，显式设置left值
        event.target.style.left = `${leftValue}px`
      }

      // 针对顶部固定元素拖动下边的特殊处理
      if (event.edges?.bottom && topPositioned) {
        // 顶部固定时，拖动下边需要确保高度变化平滑
        // 获取当前top值
        const topValue = parseInt(getComputedStyle(event.target).top || '0', 10)
        // 直接设置height属性，由于top已经固定，这会自动保持顶部固定点不变
        // 为了确保模式切换后的平滑性，显式设置top值
        event.target.style.top = `${topValue}px`
      }

      // 对于非固定定位元素且使用transform的情况，更新位置
      if (
        !rightPositioned &&
        !leftPositioned &&
        !topPositioned &&
        !bottomPositioned &&
        useCssTransforms
      ) {
        event.target.style.transform = `translate(${cachedX}px, ${cachedY}px)`
      }

      // 完全移除data属性的更新，这些属性在resize过程中不是必需的，只在结束时更新
      // 减少DOM操作以提高性能

      // 转换 edges 类型
      const normalizedEdges: Partial<ElementEdges> = {
        top: Boolean(event.edges?.top),
        right: Boolean(event.edges?.right),
        bottom: Boolean(event.edges?.bottom),
        left: Boolean(event.edges?.left),
      }

      // 如果有回调，使用requestAnimationFrame异态处理以提高性能
      if (callbacks?.onResize) {
        requestAnimationFrame(() => {
          callbacks.onResize?.({
            type: 'resizemove',
            width: cachedWidth,
            height: cachedHeight,
            top: cachedY,
            left: cachedX,
            deltaWidth: deltaWidth,
            deltaHeight: deltaHeight,
            edges: normalizedEdges,
          })
        })
      }
    }

    const handleResizeEnd = (event: ResizeEvent) => {
      // 移除正在调整大小的状态
      isResizing = false

      // 重新启用拖拽功能
      if (draggable && dragOptions) {
        interactable.draggable(true)
      }

      // 重置拖拽边状态
      resetEdgesActive()

      // 不再需要清除动画帧，因为resize处理函数不再使用requestAnimationFrame包装

      // 立即更新数据属性，确保最终状态正确
      if (event.target instanceof Element) {
        event.target.setAttribute('data-x', cachedX.toString())
        event.target.setAttribute('data-y', cachedY.toString())
        event.target.setAttribute('data-width', cachedWidth.toString())
        event.target.setAttribute('data-height', cachedHeight.toString())
      }

      // 转换 edges 类型
      const normalizedEdges: Partial<ElementEdges> = {
        top: Boolean(event.edges?.top),
        right: Boolean(event.edges?.right),
        bottom: Boolean(event.edges?.bottom),
        left: Boolean(event.edges?.left),
      }

      // 使用requestAnimationFrame确保回调在DOM更新后执行
      requestAnimationFrame(() => {
        callbacks?.onResize?.({
          type: 'resizeend',
          width: cachedWidth,
          height: cachedHeight,
          top: cachedY,
          left: cachedX,
          deltaWidth: event.deltaRect?.width || 0,
          deltaHeight: event.deltaRect?.height || 0,
          edges: normalizedEdges,
        })
      })
    }

    // 直接使用handleResizeMove，移除多余的动画帧包装，减少函数调用栈
    const rafResizeMove = handleResizeMove

    // 完全移除节流，直接处理所有resize事件以获得最佳响应性
    const throttleResizeMove = rafResizeMove

    // 创建调整大小配置
    const resizableConfig: any = {
      enabled: true,
      edges: resizeOptions?.edges || {},
      modifiers: resizeOptions?.modifiers || [],
      listeners: {
        start: handleResizeStart,
        move: throttleResizeMove,
        end: handleResizeEnd,
      },
    }

    // 添加额外支持的配置选项
    if (resizeOptions?.square !== undefined) resizableConfig.square = resizeOptions.square
    if (resizeOptions?.preserveAspectRatio !== undefined)
      resizableConfig.preserveAspectRatio = resizeOptions.preserveAspectRatio
    if (resizeOptions?.invert) resizableConfig.invert = resizeOptions.invert
    if (resizeOptions?.margin !== undefined) resizableConfig.margin = resizeOptions.margin
    if (resizeOptions?.max !== undefined) resizableConfig.max = resizeOptions.max
    if (resizeOptions?.maxPerElement !== undefined)
      resizableConfig.maxPerElement = resizeOptions.maxPerElement
    if (resizeOptions?.minWidth !== undefined)
      resizableConfig.minWidth = parseCssSize(resizeOptions.minWidth, element, 'width')
    if (resizeOptions?.minHeight !== undefined)
      resizableConfig.minHeight = parseCssSize(resizeOptions.minHeight, element, 'height')
    if (resizeOptions?.maxWidth !== undefined)
      resizableConfig.maxWidth = parseCssSize(resizeOptions.maxWidth, element, 'width')
    if (resizeOptions?.maxHeight !== undefined)
      resizableConfig.maxHeight = parseCssSize(resizeOptions.maxHeight, element, 'height')

    try {
      interactable.resizable(resizableConfig)
    } catch (error) {
      console.error('Error setting up resizable:', error)
    }
  }

  // 初始化样式
  if (element instanceof HTMLElement) {
    // 移除任何可能存在的transition效果，避免与resize冲突
    element.style.transition = 'none'
    
    // 设置初始宽度和高度
    element.style.width = `${cachedWidth}px`
    element.style.height = `${cachedHeight}px`
  }

  // 初始化transform样式
  if (element instanceof HTMLElement) {
    const computedStyle = getComputedStyle(element)
    
    // 检查元素是否使用绝对定位或固定定位
    const isAbsoluteOrFixed = computedStyle.position === 'absolute' || computedStyle.position === 'fixed'
    
    if (useCssTransforms && !isAbsoluteOrFixed) {
      // 对于非绝对/固定定位元素（如relative或static），使用transform
      element.style.transform = `translate(${cachedX}px, ${cachedY}px)`
    } else if (isAbsoluteOrFixed) {
      // 对于绝对/固定定位元素，使用直接定位
      if (!isRightPositioned() && !isLeftPositioned()) {
        element.style.left = `${cachedX}px`
      }
      if (!isTopPositioned() && !isBottomPositioned()) {
        element.style.top = `${cachedY}px`
      }
    } else {
      // 对于其他情况（如relative），优先使用transform
      element.style.transform = `translate(${cachedX}px, ${cachedY}px)`
    }
  }

  // 更新位置的方法
  const updatePosition = (newX: number | string, newY: number | string) => {
    // 将传入值解析为像素用于内部计算
    cachedX = parsePositionValue(newX, element, 'x')
    cachedY = parsePositionValue(newY, element, 'y')

    // 更新DOM元素的位置
    if (element instanceof HTMLElement) {
      const computedStyle = getComputedStyle(element)
      const isAbsoluteOrFixed = computedStyle.position === 'absolute' || computedStyle.position === 'fixed'
      const setLeft = (val: number | string) => {
        if (typeof val === 'string' && isCssUnitValue(val) && isAbsoluteOrFixed) {
          element.style.left = val
        } else {
          element.style.left = `${cachedX}px`
        }
      }
      const setTop = (val: number | string) => {
        if (typeof val === 'string' && isCssUnitValue(val) && isAbsoluteOrFixed) {
          element.style.top = val
        } else {
          element.style.top = `${cachedY}px`
        }
      }
      if (useCssTransforms && !isAbsoluteOrFixed) {
        // transform只能使用像素值
        element.style.transform = `translate(${cachedX}px, ${cachedY}px)`
      } else if (isAbsoluteOrFixed) {
        element.style.right = ''
        element.style.bottom = ''
        
        // 无论是否已设置left/top，都强制更新位置
        setLeft(newX)
        setTop(newY)
      } else {
        element.style.transform = `translate(${cachedX}px, ${cachedY}px)`
      }
    }

    // 更新数据属性 (保持原始值, 以便再次解析)
    if (element instanceof Element) {
      element.setAttribute('data-x', typeof newX === 'string' ? newX : cachedX.toString())
      element.setAttribute('data-y', typeof newY === 'string' ? newY : cachedY.toString())
    }
  }

  // 更新尺寸的方法
  const updateSize = (newWidth: number | string, newHeight: number | string) => {
    cachedWidth = typeof newWidth === 'number' ? newWidth : parseCssSize(newWidth, element, 'width')
    cachedHeight = typeof newHeight === 'number' ? newHeight : parseCssSize(newHeight, element, 'height')

    if (element instanceof HTMLElement) {
      const setWidth = (val: number | string) => {
        if (typeof val === 'string' && isCssUnitValue(val)) {
          element.style.width = val
        } else {
          element.style.width = `${cachedWidth}px`
        }
      }
      const setHeight = (val: number | string) => {
        if (typeof val === 'string' && isCssUnitValue(val)) {
          element.style.height = val
        } else {
          element.style.height = `${cachedHeight}px`
        }
      }
      setWidth(newWidth)
      setHeight(newHeight)
    }

    if (element instanceof Element) {
      element.setAttribute('data-width', typeof newWidth === 'string' ? newWidth : cachedWidth.toString())
      element.setAttribute('data-height', typeof newHeight === 'string' ? newHeight : cachedHeight.toString())
    }
  }

  // 更新位置和大小的方法（组合方法）
  const updatePositionAndSize = (newX: number | string, newY: number | string, newWidth: number | string, newHeight: number | string) => {
    updatePosition(newX, newY)
    updateSize(newWidth, newHeight)
  }

  // 返回清理函数和更新方法
  return {
    cleanup: () => {
      // 移除拖拽线
      resizeLines.forEach(line => {
        // 移除事件监听器
        if (line._mouseEnterListener) {
          line.removeEventListener('mouseenter', line._mouseEnterListener)
        }
        if (line._mouseLeaveListener) {
          line.removeEventListener('mouseleave', line._mouseLeaveListener)
        }
        // 移除DOM元素
        line.remove()
      })

      // 清理interact实例
      try {
        interactable.unset()
      } catch (error) {
        console.error('Error unsetting interactable:', error)
      }
    },
    updatePositionAndSize,
    updatePosition,
    updateSize,
  }
}
