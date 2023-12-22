export function assign<T, U>(target: T, source: U): T & U {
    const result = ({...target, ...source});

    console.log(target, source)
    // { a: 1, b: 2 } { b: 3, c: 4 }
    console.log({...target, ...source})
    // { a: 1, b: 3, c: 4 } 

  

    return result;
};