{
  // normal type alies function
  const creatArray = (params: string): string[] => {
    return [params];
  };

  const creatArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  interface User {
    id: number;
    role: string;
    adress: string;
  }

  const result = creatArray("asdfsfdd");
  const result1 = creatArrayWithGeneric<User>({
    id: 2345,
    role: "hero",
    adress: "gas tola",
  });

  // generic tupol with fanction
  const creatArrayWithGenericTupol = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const resultTupol = creatArrayWithGenericTupol<string, number>(
    "bangladesh",
    124
  );
}
