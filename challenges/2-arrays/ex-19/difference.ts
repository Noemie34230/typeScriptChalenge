export function difference<T>(array: T[], values: T[]): T[] {
    let array1 = new Set(values); 
    console.log(array1)
    let array2 = array.filter(function(item){
        return !array1.has(item) // la méthode has fonctionne avec SET
    });
    
    return array2

    // const array2 = array.filter(item => !array1.has(item));
    
};