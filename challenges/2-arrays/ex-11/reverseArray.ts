export function reverseArray<T>(array: T[]): T[] {
    let result = [...array]

    for (const number of result) {
        result.reverse();
    }
    console.log(result)
    return result;
};