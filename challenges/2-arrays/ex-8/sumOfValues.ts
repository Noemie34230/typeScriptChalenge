export function sumOfValues(array: number[]): number{
    let sum = 0;

    for (const num of array) {
        sum += num;
    }
    return sum
};