//todo-> type guard

//todo-> typefo guard
type AlphaNeumeric = string | number;
type AddTwoInteger = (
  param1: string | number,
  param2: string | number
) => string | number;

const add1: AddTwoInteger = (param1, param2) => {
  if (typeof param1 == "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    // return `${param1}`+`${param2}`
    return param1.toString() + param2.toString();
  }
};
console.log(add1(4, 5));

//todo-> another option to add interger or string
type TA = string | number;
type TAddTowIntegerOrString<X, Y> = X extends string
  ? Y extends string
    ? string
    : number
  : number;

const addTwoIntegerOrString = <T extends TA, U extends TA>(
  param1: T,
  param2: U
): TAddTowIntegerOrString<T, U> => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return (param1 + param2) as TAddTowIntegerOrString<T, U>;
  }
  return (param1.toString() + param2.toString()) as TAddTowIntegerOrString<
    T,
    U
  >;
};

console.log(addTwoIntegerOrString(5, 3));
console.log(addTwoIntegerOrString(5, "3"));

//todo-> in guard
//!always works on object
type TNormalUser = {
  name: string;
};
type TAdminUser = {
  name: string;
  role: string;
};
const getUser = (user: TNormalUser | TAdminUser) => {
  if ("role" in user) {
    //?always works on object
    console.log(`My name is ${user.name} and my role is : ${user.role}`);
  } else {
    console.log(`My name is ${user.name} and I am a : normal user`);
  }
};
const result1 = getUser({ name: "rezwan" });
const result2 = getUser({ name: "rezwan", role: "admin" });

