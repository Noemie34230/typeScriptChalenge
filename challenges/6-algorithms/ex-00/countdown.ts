export function countdown(count: number): number[] {
    let resultat = [];

    let newArray = [...resultat, count]
   
    for(let i = count - 1 ; i >= 1; i--) {
        newArray.push(i)
    }
    
    return newArray;

};

//compter à rebours depuis un nombre donné (count)
// donner le resultat dans un tableau

// **************** 
// définir une variable résultat qui est un tableau
// Savoir quelle est la valeur de count puis boucler en additionant count += count jusqu'à ce que count atteigne 1