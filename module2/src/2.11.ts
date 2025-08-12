//todo-> utility types

//todo-> Pick utility
type TPerson = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};
type Name = Pick<TPerson, "name">;
type NameAge = Pick<TPerson, "name" | "age">;

//todo-> Omit
type ContactInfo = Omit<TPerson, "name" | "age">;

//todo-> requeird utility
type PersonRequired = Required<TPerson>;

//todo-> partial utility
type PersonParital = Partial<TPerson>;

//todo-> read only
type PersonReadOnly = Readonly<TPerson>;
const person1: PersonReadOnly = {
  name: "rezwwam",
  age: 23,
  contactNo: "017",
};
// person1.name="sdfsf" //!it will give an error cause these types are readonly
console.log(person1.name);

//todo-> record type
// type MyObj = {
//     a: string
//     b: string
// }
// const obj1: MyObj = {
// a: "aa",
// b: "bb",
// c: "cc"
// }

type MyObj = Record<string, string>;
const obj1: MyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const emptyObj: Record<string, unknown> = {};
emptyObj.isUser = true;
