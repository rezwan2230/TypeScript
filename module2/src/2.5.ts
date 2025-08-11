// function with generics

const createArray = (param: string): string[] => {
  return [param];
};
const result1 = createArray("Hello");
// console.log("🚀 ~ result1:", result1);

// function with generics
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};
const result2 = createArrayWithGeneric<string>("Hello");
// console.log("🚀 ~ result2:", result2);

type TUser = {
  name: string;
  age: number;
};

const result3 = createArrayWithGeneric<TUser>({ name: "Rezwan", age: 23 });
// console.log("🚀 ~ result3:", result3);

//problem 1
const identity = <T>(param: T): T => {
  return param;
};
// console.log(identity<string>("Hello"));
// console.log(identity<number>(100));

//problem 2
const getFirstElement = <T>(param: [T, ...T[]]): T => {
  return param[0];
};
// console.log(getFirstElement<number>([10, 20, 30]));
// console.log(getFirstElement<string>(["a", "b", "c"]));

//problem 3
const mergeObjects = <X, Y>(ob1: X, ob2: Y): X & Y => ({ ...ob1, ...ob2 });
// console.log(mergeObjects({name: "John"}, {age: 25}));

// problem 4
const findMax = (arr: number[]): number => {
  if (arr.length == 0) {
    throw new Error("array is empty");
  }
  return Math.max(...arr);
};
// console.log(findMax([3, 7, 2]));

// -------------------------------------------------------------
const createArrayWithTouple = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
console.log(createArrayWithTouple<string, number>("rezwan", 23));
console.log(createArrayWithTouple<string, string>("rezwan", "zishan"));
console.log(createArrayWithTouple("rezwan", { id: 2, address: "GB" }));




const addCourseToStudent = <T>(student: T): T & { course: string } => {
  const course = "Next level web development";
  return {
    ...student,
    course,
  };
};
console.log(addCourseToStudent({ name: "rezwan", id: 2 }));
console.log(addCourseToStudent({ name: "zishan" }));
