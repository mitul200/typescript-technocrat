{
  // const roll1: number[] = [1234, 45667];
  type GenericArray<T> = Array<T>;

  // generic dynamicly
  const roll2: GenericArray<number> = [2, 3, 4, 5, 66];
  const roll3: GenericArray<string> = ["2", "3", "4", "5", "66"];
  const roll4: GenericArray<boolean> = [true, false];
}
