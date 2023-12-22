export function addItem(arr: number[], item: number): number[] {
    let result = arr.slice();
    result.push(item);
    return result
};