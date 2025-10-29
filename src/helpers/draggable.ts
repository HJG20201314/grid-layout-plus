// 从事件中获取 {x, y} 坐标
export function getControlPosition(e: MouseEvent) {
  return offsetXYFromParentOf(e)
}

// 从 offsetParent 计算偏移
export function offsetXYFromParentOf(evt: MouseEvent) {
  const offsetParent = (evt.target as HTMLElement)?.offsetParent || document.body
  const offsetParentRect =
    (evt as any).offsetParent === document.body
      ? { left: 0, top: 0 }
      : offsetParent.getBoundingClientRect()

  const x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left
  const y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top

  /* const x = Math.round(evt.clientX + offsetParent.scrollLeft - offsetParentRect.left);
  const y = Math.round(evt.clientY + offsetParent.scrollTop - offsetParentRect.top); */

  return { x, y }
}

// 创建一个由 <DraggableCore> 事件暴露的数据对象
export function createCoreData(lastX: number, lastY: number, x: number, y: number) {
  // 状态变化通常（但不总是）是异步的，需要最新值
  const isStart = !isNum(lastX)

  if (isStart) {
    // 如果是首次移动，将当前 x 和 y 作为上一坐标
    return {
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x,
      y,
    }
  } else {
    // 否则计算增量值
    return {
      deltaX: x - lastX,
      deltaY: y - lastY,
      lastX,
      lastY,
      x,
      y,
    }
  }
}

function isNum(num: unknown): num is number {
  // 判断是否为有效数字（排除 NaN）
  return typeof num === 'number' && !Number.isNaN(num)
}
