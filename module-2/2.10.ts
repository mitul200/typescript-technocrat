{
  // const arrrayOfNumber: number[] = [1, 2, 3, 4, 5];

  const arrayofString: string[] = ["1", "2", "3"];
  const arrayofNumber: number[] = arrayofString.map((str) => {
    return parseFloat(str);
  });
  console.log(arrayofNumber);

  // mapped types

  type AreaNumbers = {
    height: number;
    width: number;
  };

  // [key in keyof T = { height: number; width: string }]

  // areaString ar upor looping kore key a man gulo daynamic vabe change korte pari
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: number; width: string }> = {
    height: 100,
    width: "sadf",
  };
}
