import interact from 'interactjs'
import { throttle } from '@vexip-ui/utils'

import type { DragEvent, Interactable, ResizeEvent } from '@interactjs/types'

// 扩展Element类型以支持_dataUpdateTimer属性和事件监听器引用
declare global {
  interface Element {
    _dataUpdateTimer?: ReturnType<typeof setTimeout>
  }
  
  interface HTMLElement {
    _mouseEnterListener?: (event: MouseEvent) => void,
    _mouseLeaveListener?: (event: MouseEvent) => void
  }
}

// 优化常量
const DEFAULT_THROTTLE_DELAY = 8 // 降低默认节流阈值以提高流畅度

// Modifier类型定义，从interactjs类型系统中推断
type Modifier = any

/**
 * 边缘配置接口
 */
interface ElementEdges {
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
interface DragOptions {
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
interface ResizeOptions {
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
  maxHeight?: number | string
}

/**
 * 拖拽调整大小配置接口
 */
interface ElementDragResizeOptions {
  /** 是否启用拖拽功能 */
  draggable?: boolean,
  /** 是否启用调整大小功能 */
  resizable?: boolean,
  /** 拖拽配置选项 */
  dragOptions?: DragOptions,
  /** 调整大小配置选项 */
  resizeOptions?: ResizeOptions,
  /** 是否使用CSS transform进行定位 */
  useCssTransforms?: boolean
}

/**
 * 拖拽事件回调数据
 */
interface DragEventCallbackData {
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
interface ElementDragResizeCallbacks {
  /** 拖拽事件回调函数 */
  onDrag?: (data: DragEventCallbackData) => void,
  /** 调整大小事件回调函数 */
  onResize?: (data: ResizeEventCallbackData) => void
}

/**
 * 创建元素拖拽调整大小功能
 * @param element 目标DOM元素
 * @param options 配置选项
 * @param callbacks 回调函数
 * @returns 销毁函数
 */
export function makeElementDraggableResizable(
  element: HTMLElement | SVGElement,
  options: ElementDragResizeOptions = {},
  callbacks?: ElementDragResizeCallbacks,
): () => void {
  // 默认配置
  const defaultOptions: ElementDragResizeOptions = {
    draggable: true,
    resizable: true,
    useCssTransforms: true,
    dragOptions: {},
    resizeOptions: {
      edges: { top: false, right: false, bottom: false, left: false },
    },
  }

  // 合并配置
  const mergedOptions = { ...defaultOptions, ...options }
  const { draggable, resizable, useCssTransforms, dragOptions, resizeOptions } = mergedOptions

  // 使用通用方式存储数据，兼容所有Element类型
  const getData = (key: string, defaultValue: string): string => {
    return element.getAttribute(`data-${key}`) || defaultValue
  }
  const setData = (key: string, value: string) => {
    element.setAttribute(`data-${key}`, value)
  }
  
  // 获取初始尺寸
  const rect = element.getBoundingClientRect()
  const width = rect.width || 0
  const height = rect.height || 0
  
  // 初始化数据
  setData('x', getData('x', '0'))
  setData('y', getData('y', '0'))
  setData('width', getData('width', width.toString()))
  setData('height', getData('height', height.toString()))

  // 创建拖拽线元素
  const resizeLines = new Map<string, HTMLElement>()
  
  // 移除cursor相关的样式存储和恢复功能
  // 让使用方完全控制元素的光标样式

  // 标记状态变量
  let isResizing = false
  let isDragging = false
  let activeEdges: Partial<ElementEdges> = {}

  // 共享的缓存变量 - 这是修复translate被重置问题的关键
  // 所有功能使用相同的坐标缓存，确保状态一致性
  let cachedX = parseFloat(getData('x', '0'))
  let cachedY = parseFloat(getData('y', '0'))
  let cachedWidth = parseFloat(getData('width', width.toString()))
  let cachedHeight = parseFloat(getData('height', height.toString()))

  // 设置拖拽边的hover状态
  const setEdgeActive = (edges: Partial<ElementEdges>) => {
    activeEdges = edges
    ;(['top', 'right', 'bottom', 'left'] as const).forEach(edge => {
      const line = resizeLines.get(edge)
      if (line) {
        line.style.backgroundColor = edges[edge] ? 'rgba(29, 98, 236, 1)' : 'rgba(29, 98, 236, 0)'
      }
    })
  }

  // 重置所有拖拽边的状态
  const resetEdgesActive = () => {
    resizeLines.forEach(line => {
      line.style.backgroundColor = 'rgba(29, 98, 236, 0)'
    })
    activeEdges = {}
  }

  const createResizeLines = () => {
    const edges = resizeOptions?.edges || {}
    // 获取margin值，默认为4
    const margin = resizeOptions?.margin ?? 4
    const lineStyle = {
      position: 'absolute',
      backgroundColor: 'rgba(29, 98, 236, 0)', // 初始透明
      pointerEvents: 'auto', // 设置为auto以支持hover效果
      transition: 'background-color 0.1s ease',
    }

    // 为线条添加hover效果的函数
    const setupHoverEffect = (line: HTMLElement) => {
      // 鼠标进入时显示背景色
      const handleMouseEnter = () => {
        line.style.backgroundColor = 'rgba(29, 98, 236, 1)'
      }
      
      // 鼠标离开时恢复透明，但在拖拽过程中不执行
      const handleMouseLeave = () => {
        if (!isResizing) {
          line.style.backgroundColor = 'rgba(29, 98, 236, 0)'
        }
      }
      
      // 添加事件监听器
      line.addEventListener('mouseenter', handleMouseEnter)
      line.addEventListener('mouseleave', handleMouseLeave)
      
      // 存储事件监听器引用，以便后续移除
      line._mouseEnterListener = handleMouseEnter
      line._mouseLeaveListener = handleMouseLeave
    }

    // 顶部拖拽线
    if (edges.top) {
      const line = document.createElement('div')
      Object.assign(line.style, lineStyle, {
        top: `-${margin}px`,
        left: '0',
        width: '100%',
        height: '2px',
        cursor: 'row-resize',
        zIndex: '10',
      })
      setupHoverEffect(line)
      element.appendChild(line)
      resizeLines.set('top', line)
    }

    // 右侧拖拽线
    if (edges.right) {
      const line = document.createElement('div')
      Object.assign(line.style, lineStyle, {
        top: '0',
        right: `-${margin}px`,
        width: '2px',
        height: '100%',
        cursor: 'col-resize',
        zIndex: '10',
      })
      setupHoverEffect(line)
      element.appendChild(line)
      resizeLines.set('right', line)
    }

    // 底部拖拽线
    if (edges.bottom) {
      const line = document.createElement('div')
      Object.assign(line.style, lineStyle, {
        bottom: `-${margin}px`,
        left: '0',
        width: '100%',
        height: '2px',
        cursor: 'row-resize',
        zIndex: '10',
      })
      setupHoverEffect(line)
      element.appendChild(line)
      resizeLines.set('bottom', line)
    }

    // 左侧拖拽线
    if (edges.left) {
      const line = document.createElement('div')
      Object.assign(line.style, lineStyle, {
        top: '0',
        left: `-${margin}px`,
        width: '2px',
        height: '100%',
        cursor: 'col-resize',
        zIndex: '10',
      })
      setupHoverEffect(line)
      element.appendChild(line)
      resizeLines.set('left', line)
    }
  }

  // 设置拖拽线可见性
  const setResizeLinesVisible = (_visible: boolean) => {
    resizeLines.forEach(line => {
      // 始终保持pointerEvents为auto以支持hover效果
      line.style.pointerEvents = 'auto'
      line.style.display = 'block' // 确保线条总是显示
    })
  }

  // 初始化interact实例
  const interactable: Interactable = interact(element)
    // 设置元素样式
    .styleCursor(false)

  // 配置拖拽功能
  if (draggable) {
    // 定义拖拽事件处理函数
    const handleDragStart = (_event: DragEvent) => {
      // 设置当前正在拖拽的状态
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

      // 使用transform而不是position，避免重新计算布局
      if (useCssTransforms) {
        // 直接设置transform，确保位置正确
        event.target.style.transform = `translate(${cachedX}px, ${cachedY}px)`
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

      // 如果有回调，使用requestAnimationFrame异步处理以提高性能
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
    const throttleDragMove = throttle(handleDragMove, dragOptions?.threshold ?? DEFAULT_THROTTLE_DELAY)

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
    if (dragOptions?.maxPerElement !== undefined) draggableConfig.maxPerElement = dragOptions.maxPerElement
    
    interactable.draggable(draggableConfig)
  }

  // 解析CSS尺寸值为像素值的辅助函数
  // 添加direction参数来区分是宽度还是高度的计算
  const parseCssSize = (size: number | string, element: HTMLElement | SVGElement, direction: 'width' | 'height' = 'width'): number => {
    if (typeof size === 'number') {
      return size
    }
    
    // 如果已经是像素值格式，直接解析
    if (size.endsWith('px')) {
      return parseFloat(size)
    }
    
    // 创建临时元素，使用getComputedStyle来获取实际像素值
    const temp = document.createElement('div')
    
    // 基础样式设置，确保准确计算
    Object.assign(temp.style, {
      position: 'absolute',
      visibility: 'hidden', // 保持尺寸但不可见
      zIndex: '-1000', // 确保元素在页面内容的后面
      margin: '0',
      padding: '0',
      border: 'none',
      overflow: 'hidden',
      boxSizing: 'border-box',
      width: direction === 'width' ? size : 'auto',
      height: direction === 'height' ? size : 'auto',
    })
    
    try {
      // 获取元素的父容器作为参考
      const parentNode = element.parentNode
      const container = parentNode instanceof Node ? parentNode : document.body
      
      container.appendChild(temp)
      
      // 使用getComputedStyle获取计算后的像素值
      // 确保temp是HTMLElement类型以避免TypeScript类型错误
      const computedStyle = getComputedStyle(temp as HTMLElement)
      const sizeProperty = direction === 'width' ? 'width' : 'height'
      const sizeInPixels = parseFloat(computedStyle[sizeProperty])
      
      // 返回有效尺寸或默认值
      return isNaN(sizeInPixels) || sizeInPixels <= 0 ? 100 : sizeInPixels
    } catch (e) {
      // 如果解析失败，返回默认值
      return 100
    } finally {
      // 确保移除临时元素
      if (temp.parentNode) {
        temp.parentNode.removeChild(temp)
      }
    }
  }

  // 配置调整大小功能
  if (resizable && resizeOptions) {
    // 创建拖拽线
    createResizeLines()

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
      
      callbacks?.onResize?.({
        type: 'resizestart',
        width: cachedWidth,
        height: cachedHeight,
        top: cachedY,
        left: cachedX,
        deltaWidth: 0,
        deltaHeight: 0,
        edges: normalizedEdges,
      })
    }

    const handleResizeMove = (event: ResizeEvent) => {
      // 根据用户要求实现不同边缘调整时的位置计算
      const deltaWidth = event.deltaRect?.width || 0
      const deltaHeight = event.deltaRect?.height || 0
      
      // 计算原始宽高比（如果需要保持宽高比）
      let adjustedDeltaWidth = deltaWidth
      let adjustedDeltaHeight = deltaHeight
      
      // 如果启用了保持宽高比
      if (resizeOptions?.preserveAspectRatio) {
        // 计算当前宽高比
        const aspectRatio = cachedWidth / cachedHeight
        
        // 确定主要拖拽方向并调整另一维度
        // 如果是水平边缘（左右），根据宽度变化调整高度
        if (event.edges?.left || event.edges?.right) {
          adjustedDeltaHeight = deltaWidth / aspectRatio
        } else if (event.edges?.top || event.edges?.bottom) {
          // 如果是垂直边缘（上下），根据高度变化调整宽度
          adjustedDeltaWidth = deltaHeight * aspectRatio
        }
      }
      
      // 计算新的宽度和高度，应用最大最小尺寸限制
      // 使用parseCssSize函数解析复杂的CSS尺寸值
      const minWidth = parseCssSize(resizeOptions?.minWidth ?? 10, event.target, 'width')
      const minHeight = parseCssSize(resizeOptions?.minHeight ?? 10, event.target, 'height')
      const maxWidth = parseCssSize(resizeOptions?.maxWidth ?? Infinity, event.target, 'width')
      const maxHeight = parseCssSize(resizeOptions?.maxHeight ?? Infinity, event.target, 'height')
      
      // 计算目标尺寸
      let targetWidth = cachedWidth + adjustedDeltaWidth
      let targetHeight = cachedHeight + adjustedDeltaHeight
      
      // 应用最小最大限制
      targetWidth = Math.max(minWidth, Math.min(maxWidth, targetWidth))
      targetHeight = Math.max(minHeight, Math.min(maxHeight, targetHeight))
      
      // 重新计算实际的delta值
      adjustedDeltaWidth = targetWidth - cachedWidth
      adjustedDeltaHeight = targetHeight - cachedHeight
      
      // 在应用尺寸限制后，根据实际的delta值调整位置
      // 1. resize上边时：cachedX不变，cachedY减去实际变化的高度
      if (event.edges?.top) {
        cachedY -= adjustedDeltaHeight
      }
      // 2. resize右边时：cachedX，cachedY不变
      // 3. resize下边时：cachedX，cachedY不变
      // 4. resize左边时：cachedY不变，cachedX减去实际变化的宽度
      if (event.edges?.left) {
        cachedX -= adjustedDeltaWidth
      }
      
      // 更新尺寸缓存
      cachedWidth = targetWidth
      cachedHeight = targetHeight
      
      // 更新样式，避免不必要的DOM操作
      event.target.style.width = `${cachedWidth}px`
      event.target.style.height = `${cachedHeight}px`

      // 使用transform而不是position
      if (useCssTransforms) {
        // 直接应用translate，确保位置正确 - 这是修复translate被重置的关键
        event.target.style.transform = `translate(${cachedX}px, ${cachedY}px)`
      }

      // 延迟更新数据属性，减少DOM操作频率
      if (!event.target._dataUpdateTimer) {
        event.target._dataUpdateTimer = setTimeout(() => {
          if (event.target instanceof Element) {
            event.target.setAttribute('data-x', cachedX.toString())
            event.target.setAttribute('data-y', cachedY.toString())
            event.target.setAttribute('data-width', cachedWidth.toString())
            event.target.setAttribute('data-height', cachedHeight.toString())
          }
          delete event.target._dataUpdateTimer
        }, 50)
      }

      // 转换 edges 类型
      const normalizedEdges: Partial<ElementEdges> = {
        top: Boolean(event.edges?.top),
        right: Boolean(event.edges?.right),
        bottom: Boolean(event.edges?.bottom),
        left: Boolean(event.edges?.left),
      }
      
      // 如果有回调，使用requestAnimationFrame异步处理以提高性能
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
    }

    // 创建节流版本的调整大小move处理函数
    const throttleResizeMove = throttle(handleResizeMove, resizeOptions?.threshold ?? DEFAULT_THROTTLE_DELAY)

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
    if (resizeOptions?.preserveAspectRatio !== undefined) resizableConfig.preserveAspectRatio = resizeOptions.preserveAspectRatio
    if (resizeOptions?.invert) resizableConfig.invert = resizeOptions.invert
    if (resizeOptions?.margin !== undefined) resizableConfig.margin = resizeOptions.margin
    if (resizeOptions?.max !== undefined) resizableConfig.max = resizeOptions.max
    if (resizeOptions?.maxPerElement !== undefined) resizableConfig.maxPerElement = resizeOptions.maxPerElement
    if (resizeOptions?.minWidth !== undefined) resizableConfig.minWidth = parseCssSize(resizeOptions.minWidth, element, 'width')
    if (resizeOptions?.minHeight !== undefined) resizableConfig.minHeight = parseCssSize(resizeOptions.minHeight, element, 'height')
    if (resizeOptions?.maxWidth !== undefined) resizableConfig.maxWidth = parseCssSize(resizeOptions.maxWidth, element, 'width')
    if (resizeOptions?.maxHeight !== undefined) resizableConfig.maxHeight = parseCssSize(resizeOptions.maxHeight, element, 'height')
    
    try {
      interactable.resizable(resizableConfig)
    } catch (error) {
      console.error('Error setting up resizable:', error)
    }
  }

  // 初始化transform样式
  if (useCssTransforms) {
    element.style.transform = `translate(${cachedX}px, ${cachedY}px)`
  }

  // 返回清理函数
  return () => {
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
  }
}