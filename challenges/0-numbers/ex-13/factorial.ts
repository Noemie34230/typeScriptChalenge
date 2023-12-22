export function factorial(n: number): number {
    let result = 1
    for (let i = 1; i < n; i++) {
        n *=i;
    };
    
    return result;

};