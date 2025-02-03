{
  // typeOf guard

  type Alphaneumeric = number | string;

  const add = (
    params1: Alphaneumeric,
    params2: Alphaneumeric
  ): Alphaneumeric => {
    if (typeof params1 === "number" && typeof params2 === "number") {
      return params1 + params2;
    } else {
      return params1.toString() + params2.toString();
    }
  };
  const result = add(10, 20);
  console.log(result);

  // in guard

  type students1 = {
    name: string;
  };
  type students2 = {
    name: string;
    card: string;
  };

  const cheakingInTheGate = (students: students1 | students2) => {
    if ("card" in students) {
      console.log(
        `Im a students name is ${students.name} I have a ${students.card}`
      );
    } else {
      console.log(
        `I'm a students my name is ${students.name} I forget to bring to card `
      );
    }
  };

  const result1: students1 = {
    name: "khaled",
  };
  const result2: students2 = {
    name: "khaled Bin Mahamud",
    card: "Id Cards",
  };
  cheakingInTheGate(result1);
}
