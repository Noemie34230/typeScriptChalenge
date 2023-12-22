export function uniq<T>(array: T[]): T[] {
    let result = [...new Set(array)]

    console.log(new Set(array), [...new Set(array)])
    // Set(3) { 1, 2, 3 } [ 1, 2, 3 ]   
    return result;
};