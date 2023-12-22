export function removeFirstItem<T>(array: T[]): T[] {
    let result = array.slice();
    result.shift();
    return result;
};