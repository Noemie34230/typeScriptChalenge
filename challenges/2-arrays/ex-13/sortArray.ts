export function sortArray<T>(array: T[]): T[] {
    let result = [...array];

    for(const number of result) {
        result.sort()
    }
    console.log(result)
    return result;
};