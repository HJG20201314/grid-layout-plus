/**
 * 获取当前文档的书写方向。
 * 优先读取 document.dir，其次读取 <html> 标签 dir 属性；在 SSR 时返回内存中的 currentDir。
 * @returns 'ltr' | 'rtl' | 'auto'
 */
export declare function getDocumentDir(): string | null;
/**
 * 设置文档书写方向。
 * 在浏览器环境直接修改 <html> 标签的 dir 属性；在 SSR 环境仅更新内存变量以便后续使用。
 * @param dir 期望的方向值
 */
export declare function setDocumentDir(dir: 'ltr' | 'rtl' | 'auto'): void;
