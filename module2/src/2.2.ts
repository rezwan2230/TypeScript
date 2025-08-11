//Type and interface

type User1 = {
  name: string;
  age: number;
};

type UserWithRole1 = User1 & { roll: number };

interface UserWithRole2 extends User2 {
  role: string;
}

const user1: UserWithRole1 = {
  name: "reza",
  age: 23,
  roll: 1,
};

interface User2 {
  name: string;
  age: number;
}

const user2: UserWithRole2 = {
  name: "reza",
  age: 23,
  role: "porgrammer",
};


// arry is an object and function is an object. so we can crate an interface for and array and function

type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}
const number1: Roll1 = [1, 2, 3];
const number2: Roll2 = [1, 2, 3];



type Add1 = (num1: number, num2: number) => number;
interface Add2 {
  (num1: number, num2: number): number;
}

const add1: Add1 = (num1, num2) => num1 + num2;
console.log(add1(35, 45))
const add2: Add2 = (num1, num2) => num1 + num2;
console.log(add1(35, 45))
