import { InjectionKey } from 'vue';
import { EventEmitter } from '@vexip-ui/utils';
import { Layout, LayoutInstance, LayoutItem } from './types';
export declare const LAYOUT_KEY: InjectionKey<LayoutInstance>;
export declare const EMITTER_KEY: InjectionKey<EventEmitter>;
/**
 * 返回布局的底部坐标。
 *
 * @param layout 布局数组。
 * @return 底部坐标。
 */
export declare function bottom(layout: Layout): number;
export declare function cloneLayout(layout: Layout): Layout;
export declare function cloneLayoutItem(layoutItem: LayoutItem): LayoutItem;
/**
 * 给定两个布局项，检查它们是否碰撞。
 *
 * @return 如果碰撞则返回true。
 */
export declare function collides(l1: LayoutItem, l2: LayoutItem): boolean;
/**
 * 给定一个布局，对其进行压缩。即遍历每个 y 坐标并移除项目之间的空隙。
 *
 * @param  layout 布局。
 * @param  verticalCompact 是否垂直压缩布局。
 * @param  minPositions 最小位置映射。
 * @return 压缩后的布局。
 */
export declare function compact(layout: Layout, verticalCompact?: boolean, minPositions?: any): Layout;
/**
 * 压缩布局中的单个项。
 */
export declare function compactItem(compareWith: Layout, l: LayoutItem, verticalCompact?: boolean, minPositions?: any): LayoutItem;
/**
 * 给定一个布局，确保所有元素都在其边界内。
 *
 * @param  layout 布局数组。
 * @param  bounds 列数边界。
 */
export declare function correctBounds(layout: Layout, bounds: {
    cols: number;
}): Layout;
/**
 * 通过 ID 获取布局项，便于后续覆盖。
 *
 * @param    layout 布局数组。
 * @param   id     标识
 * @return     该 ID 对应的项。
 */
export declare function getLayoutItem(layout: Layout, id: number | string): LayoutItem | undefined;
/**
 * 返回与给定项发生碰撞的第一个项。
 * 遍历顺序似乎无关紧要（也许并不理想）。
 *
 * @param  layoutItem 布局项。
 * @return 发生碰撞的项，或 undefined。
 */
export declare function getFirstCollision(layout: Layout, layoutItem: LayoutItem): LayoutItem | undefined;
export declare function getAllCollisions(layout: Layout, layoutItem: LayoutItem): Array<LayoutItem>;
/**
 * 获取所有 static 元素。
 * @param layout 布局对象数组。
 * @return  static 布局项数组。
 */
export declare function getStatics(layout: Layout): Array<LayoutItem>;
/**
 * 移动一个元素，并负责级联移动其它元素。
 *
 * @param layout 完整布局。
 * @param layoutItem 要移动的元素。
 * @param x 网格单位的 X。
 * @param y 网格单位的 Y。
 * @param isUserAction 是否用户拖拽/调整导致。
 */
export declare function moveElement(layout: Layout, layoutItem: LayoutItem, x?: number, y?: number, isUserAction?: boolean, preventCollision?: boolean): Layout;
/**
 * 根据碰撞结果将元素移开：有空间则尝试向上，否则向下。
 *
 * @param layout 完整布局。
 * @param collidesWith 与之碰撞的项。
 * @param itemToMove 需要移动的项。
 * @param isUserAction 是否由用户操作触发。
 */
export declare function moveElementAwayFromCollision(layout: Layout, collidesWith: LayoutItem, itemToMove: LayoutItem, isUserAction?: boolean): Layout;
/**
 * 将数字转为百分比字符串。
 *
 * @param   num 任意数字
 * @return      百分比字符串。
 */
export declare function perc(num: number): string;
export declare function setTransform(top: number, left: number, width: number, height: number): {
    transform: string;
    WebkitTransform: string;
    MozTransform: string;
    msTransform: string;
    OTransform: string;
    width: string;
    height: string;
    position: string;
};
/**
 * 与 setTransform 类似，但返回基于 right 的负值位移。
 */
export declare function setTransformRtl(top: number, right: number, width: number, height: number): {
    transform: string;
    WebkitTransform: string;
    MozTransform: string;
    msTransform: string;
    OTransform: string;
    width: string;
    height: string;
    position: string;
};
export declare function setTopLeft(top: number, left: number, width: number, height: number): {
    top: string;
    left: string;
    width: string;
    height: string;
    position: string;
};
/**
 * 与 setTopLeft 类似，但使用 right 而不是 left。
 */
export declare function setTopRight(top: number, right: number, width: number, height: number): {
    top: string;
    right: string;
    width: string;
    height: string;
    position: string;
};
/**
 * 获取按从左到右、从上到下排序的布局项，static 优先。
 */
export declare function sortLayoutItemsByRowCol(layout: Layout): Layout;
/**
 * 校验布局，若不合法则抛出错误。
 *
 * @param layout 布局项数组。
 * @param contextName 错误语境名。
 * @throw 验证错误。
 */
export declare function validateLayout(layout: Layout, contextName?: string): void;
export declare function autoBindHandlers(el: Record<string, (...args: any[]) => any>, fns: Array<string>): void;
/**
 * 将 JS 对象转换为 CSS 字符串，类似 React 的输出。
 */
export declare function createMarkup(obj: Record<string, any>): string;
export declare const IS_UNITLESS: Record<string, boolean>;
/**
 * 为数值型样式追加 px（除非在无单位白名单内）。
 */
export declare function addPx(name: string, value: number | string): string | number;
export declare const hyphenateRE: RegExp;
/**
 * 将 camelCase 字符串连字符化。
 */
export declare function hyphenate(str: string): string;
export declare function findItemInArray(array: any[], property: string, value: any): boolean;
export declare function findAndRemove(array: any[], property: string, value: any): void;
export declare function useNameHelper(block: string, namespace?: string): {
    b: () => string;
    be: (element: string) => string;
    bm: (modifier: string | number) => string;
    bem: (element: string, modifier: string | number) => string;
};
