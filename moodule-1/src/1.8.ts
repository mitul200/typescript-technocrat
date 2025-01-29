// destructing

// object destructing
const contact = {
  id: 1,
  phoneNumber: "+8801234567890",
  address: "Dhaka, Bangladesh",
  name: {
    firstName: "Mohamed",
    middleName: "Khaled",
    lastName: "Hossain",
  },
};

const {
  id,
  name: { lastName },
} = contact;

// Array Destructuring
const myFriends = ["Mitul", "Emu", "Ali", "Shakib", "Siam"];

console.log(myFriends);

const [, , bestFriends, ...rest] = myFriends;

// Skipping Values: The first two elements ("Mitul" and "Emu") are skipped using commas.
// bestFriends Assignment: "Ali" is assigned to bestFriends (since it's the third element).
// Rest Operator (...rest): The remaining elements (["Shakib", "Siam"]) are collected into rest.
