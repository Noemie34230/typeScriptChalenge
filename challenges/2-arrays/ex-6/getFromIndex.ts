export function getFromIndex<T>(array: T[], index: number): T {
    let result = array.slice();
    
    return result[index]
};