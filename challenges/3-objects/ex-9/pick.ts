export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Pick<T, K> {

    let object2: Pick<T, K> = {} as Pick<T, K>;

    for (const key of keys) {
        object2[key] = obj[key];

    }

    return object2;

  };