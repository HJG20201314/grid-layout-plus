// 文档方向管理工具：在无 document 环境（SSR）下回退到内存变量，在浏览器环境读写 <html dir> 属性
let currentDir: 'ltr' | 'rtl' | 'auto' = 'auto' // 记录最近设置的方向，用于无 document 场景回退

/**
 * 检查是否存在全局 document（区分浏览器与 SSR 环境）。
 * @returns 是否可访问 document 对象
 */
function hasDocument() {
  return typeof document !== 'undefined'
}

/**
 * 获取当前文档的书写方向。
 * 优先读取 document.dir，其次读取 <html> 标签 dir 属性；在 SSR 时返回内存中的 currentDir。
 * @returns 'ltr' | 'rtl' | 'auto'
 */
export function getDocumentDir() {
  if (!hasDocument()) {
    return currentDir
  }
  const direction =
    typeof document.dir !== 'undefined'
      ? document.dir
      : document.getElementsByTagName('html')[0].getAttribute('dir')
  return direction
}

/**
 * 设置文档书写方向。
 * 在浏览器环境直接修改 <html> 标签的 dir 属性；在 SSR 环境仅更新内存变量以便后续使用。
 * @param dir 期望的方向值
 */
export function setDocumentDir(dir: 'ltr' | 'rtl' | 'auto') {
  if (!hasDocument()) {
    currentDir = dir
    return
  }

  const html = document.getElementsByTagName('html')[0]
  html.setAttribute('dir', dir)
}
