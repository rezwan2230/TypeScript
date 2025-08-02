// type alias

type TStudent = {
  name: string;
  age: number;
  gender: string;
  contaceNo?: string;
  address: string;
};

const student1: TStudent = {
  name: "Rezwan",
  age: 26,
  gender: "male",
  contaceNo: "017345353",
  address: "Gaibandha",
};

const student2: TStudent = {
  name: "Oishi",
  age: 52,
  gender: "female",
  address: "Noakhali",
};



type TUserName = string;
type TIsAdmin = boolean;
const userName: TUserName = "rezwan";
const isAdmin: TIsAdmin = true;


type TAdd = (num1: number, num2: number) => number;
const add: TAdd = (num1, num2) => num1 + num2;
