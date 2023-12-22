export function setProperty<T, K extends keyof T>(
    object: T,
    key: K,
    value: T[K]
  ): T {
    
    let object2 = {...object};

    object2[key] = value;



    return object2
  };