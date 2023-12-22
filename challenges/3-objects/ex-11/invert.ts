export function invert<T extends object>(obj: T): { [K in keyof T]: string } {
    

    // let inverseObject : { [K in keyof T]: string } = {} as { [K in keyof T]: string } ;
    
    // for(const key in obj) {
    //     if(obj.hasOwnProperty(key)){
    //         inverseObject[obj[key] as keyof T] = key;
    //     }
    // }
    // console.log(inverseObject)

    // return inverseObject;
    
        return Object.entries(obj).reduce((acc, [key, value]) => {
            acc[value as keyof T] = key;
            console.log(acc)
            return acc;
        }, {} as { [K in keyof T]: string });
    
};