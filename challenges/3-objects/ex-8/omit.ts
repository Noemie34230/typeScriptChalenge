export function omit<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Omit<T, K> {
    
    
    let object2 = {...obj};

    for (const key of keys){
        delete object2[key];
    }

    return object2;

  };