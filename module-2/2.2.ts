{
  // type =>> alies
  type User1 = {
    name: string;
    age: number;
  };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  // intersec
  type UserWithRole1 = User1 & { role: string };

  const user: UserWithRole1 = {
    name: "khaled",
    age: 34,
    role: "Admin",
  };

  // interface only work for objects

  // type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll2 = [1, 2, 3, 4, 5];
}
