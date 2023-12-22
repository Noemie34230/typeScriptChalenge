export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {

    let object2 : [keyof T, T[keyof T]][] = Object.entries(obj) as [keyof T, T[keyof T]][]

    console.log(object2)
    
    return object2;
    
};


// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }