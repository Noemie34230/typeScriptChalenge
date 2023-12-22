export function equilateralTriangle(count: number): string {
    let result = "";

    

    for (let i = 1; i <= count; i++) {
        result += "*";
        result += "\n";
    
    }
    

    
    console.log(result);
    return result

};

// il faut récupérer le count qui sera la valeur le nombre de ligne à faire
// la variable result est une chaîne de caratère