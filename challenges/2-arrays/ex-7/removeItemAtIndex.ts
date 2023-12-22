export function removeItemAtIndex<T>(array: T[], index: number): T[] {
    let result = array.slice()
    result.splice(index, 1);
    return result;
    
};