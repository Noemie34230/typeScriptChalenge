export function intersection<T>(array1: T[], array2: T[]): T[] {

    return array1.filter(x => array2.indexOf(x)!== -1);
};