// Type alias
{
  type Students = {
    name: string;
    contucts?: string;
    gender: string;
    age: number;
    adres: string;
  };

  const students1: Students = {
    name: "khaled",
    contucts: "01950030115",
    gender: "male",
    age: 23,
    adres: "12 adc 435",
  };

  const students2: Students = {
    name: "Mitul",
    gender: "male",
    age: 24,
    adres: "12 ADA 4350",
  };

  // alias using for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
