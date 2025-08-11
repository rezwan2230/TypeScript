//Generic type

type GenericArray<T> = Array<T>;

// const rolls: number[] = [23, 34, 234];
// const rolls: Array<number> = [23, 34, 234];
const rolls: GenericArray<number> = [23, 34, 234];

// const stra: string[] = ["fsf", "gsg", "hdegd"];
// const stra: Array<string> = ["fsf", "gsg", "hdegd"];
const stra: GenericArray<string> = ["fsf", "gsg", "hdegd"];

// const booleans: boolean[] = [true, false, true, false];
// const booleans: Array<boolean> = [true, false, true, false];
const booleans: GenericArray<boolean> = [true, false, true, false];

//Generic array of Objecet
const user: GenericArray<{
  name: string;
  age: number;
}> = [
  {
    name: "rezwan",
    age: 20,
  },
  {
    name: "zishan",
    age: 22,
  },
];

//Generic touple

type GenericTouple<T, M> = [T, M];

const touple1: GenericTouple<string, number> = ["Rezwan", 23];
const touple2: GenericTouple<number, number> = [34, 23];

const userWIthID1: GenericTouple<number,{name: string;email: string;}
> = [123, { name: "Rezwan", email: "rezwan@email.com" }];


type TUser = {
  name: string;
  email: string;
};
const userWIthID2: GenericTouple<number, TUser> = [123, {name: "Rezwan", email: "rezwan@email.com"}]
