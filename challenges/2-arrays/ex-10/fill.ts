export function fill<T>(array: T[], value: T): T[]{
    
    let result = [...array];

    for (const number of result) {
        result.fill(value);
    };


    return result;
};