export function fibonacci(n: number): number {
    // NE FONCTIONNE PAS, A REPRENDRE
    let result = 1
    for (let i = 1; i < n; i++) {
        result =(result-1) + (result-2);
    };
    
    return result;
};