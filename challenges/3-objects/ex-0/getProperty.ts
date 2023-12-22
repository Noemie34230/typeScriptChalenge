export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    let result = obj[key];


    return result
};