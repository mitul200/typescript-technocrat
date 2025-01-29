// Ternary, optional chaining & nullish coalescing operator
{
  const age: number = 18;

  // if (age >= 18) {
  //   console.log("aduls");
  // } else {
  //   console.log("teenagers");
  // }

  const isAdults = age >= 20 ? "adults" : "kids";
  console.log({ isAdults });

  // /nullish coalescing operator
  const isAuthentication = "";

  const result = isAuthentication ?? "Guest";
  const result1 = isAuthentication ? isAuthentication : "Guest";
  console.log({ result }, { result1 });

  // optional chaining

  type UsersIdentity = {
    name: string;
    age: number;
    adress: {
      permanentAdress: string;
      temporareyAdress?: string;
    };
    contuctNumber: string;
  };

  const users: UsersIdentity = {
    name: "khaled",
    age: 10,
    adress: {
      permanentAdress: "Dhaka",
    },
    contuctNumber: "asdfadf",
  };

  const temporareyAdress =
    users?.adress?.temporareyAdress ?? "Temporary Adress is not Founded";

  console.log({ temporareyAdress });
}
