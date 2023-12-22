export function plusOneEach(arr: number[]): number[] {
    let result = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        result[i] += 1;
      }
    
    return result
};