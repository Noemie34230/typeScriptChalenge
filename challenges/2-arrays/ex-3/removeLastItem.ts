export function removeLastItem<T>(array: T[]): T[] {
    let result = array.slice();
    result.pop();
    return result;
};