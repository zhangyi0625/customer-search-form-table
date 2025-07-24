/**
 * 拷贝对象中部分属性
 * @param source
 * @param keys
 * @param invert
 * @returns
 */
export declare function filterKeys(source: any, keys: string[], invert?: boolean): any;
/**
 * 根据原有的属性名代替新属性名 根据index匹配 两者长度必须匹配
 * @param arr
 * @param wishName
 * @param newName
 * @returns
 */
export declare function replaceObjectName(arr: any, wishName: string[], newName: string[]): any;
