export function rightAngleTriangle(count: number): string {
    let result = "";

    while(count>=1){

        for (let i = 1; i <= count; i++) {
            result += "*";
        
        }
        result += "\n"
        count--;
    }

    return result;
};



// On récupére le count qui remplacer par un même nombre d'étoiles (string)
// ensuite il faut sauter une ligne et renvoyer le count -1 jusqu'à terminer à une étoile;
// définir une variable result comme une chaîne de caractère vide.
// il faut remplacer le nombre count par des étoiles