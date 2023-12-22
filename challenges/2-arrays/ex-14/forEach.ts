export function forEach<T>(
    array: T[],
    callback: (item: T, index: number) => void
  ): void {
    console.log(array)
    // let result = [...array];
    array.forEach(function(item, index) {
      
    });
    console.log(callback)
    console.log(array)
  };