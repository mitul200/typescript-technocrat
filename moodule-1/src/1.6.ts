{
  // learning function

  // normal function ==>

  function added(numb1: number, numb2: number): number {
    return numb1 + numb2;
  }
  added(2, 2);

  const addNumber = (num1: number, num2: number): number => num1 + num2;

  // Objects has inside a function ===>  methods

  const poorUser = {
    name: "Khaled",
    balance: 0,
    addBalance(balance: number): string {
      return `My balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 3, 5, 8];

  // call back function
  const newArray: number[] = arr.map(
    (element: number): number => element * element
  );
}
