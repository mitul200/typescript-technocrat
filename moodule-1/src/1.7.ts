// Spread and Rest Operator
{
  const poorUser = {
    name: "Mr.z",
  };
}

// learn spread operator

const bro1: string[] = ["khaled", "bin", "mahamud"];
const bro2: string[] = ["khaledd", "binn", "mahamudd"];

bro1.push(...bro2);

const mentors = {
  typescript: "ali",
  redax: "Shakib",
  dbms: "Siam",
};

const mentors2 = {
  prisma: "shakib",
  next: "shakib",
  cloud: "ali",
};

const mentorsList = {
  ...mentors,
  ...mentors2,
};

// learn rest operator
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`hello ${friend}`));
};
greetFriends("mitul", "emu", "ali", "shakib", "siam", "raju");
