{
  // const roll1: number[] = [1234, 45667];
  type GenericArray<T> = Array<T>;

  // generic dynamicly
  const roll2: GenericArray<number> = [2, 3, 4, 5, 66];
  const roll3: GenericArray<string> = ["2", "3", "4", "5", "66"];
  const roll4: GenericArray<boolean> = [true, false];

  type GenericArray1<T> = T[];

  const users: GenericArray1<{ name: string; age: number; role: string }> = [
    {
      name: "Alice",
      age: 25,
      role: "Admin",
    },
    {
      name: "Bob",
      age: 30,
      role: "Developer",
    },
    {
      name: "Charlie",
      age: 22,
      role: "Designer",
    },
    {
      name: "Diana",
      age: 28,
      role: "Manager",
    },
  ];
}
