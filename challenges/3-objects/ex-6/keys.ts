export function keys<T extends {}>(obj: T): string[]{
    let result = Object.keys(obj);

    return result;
};