//todo-> Promise with string

const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};
const shwoData = async () => {
  const data = await createPromise();
  console.log(data);
};
shwoData();


//todo-> Promise with object
type TInfo = {
  name: string;
  age: number;
};

const createObjectPromise = (): Promise<TInfo> => {
  return new Promise<TInfo>((resolve, reject) => {
    const data: TInfo = { name: "rezwan", age: 23 };
    if (data) {
      resolve(data);
    } else {
      reject("data not found");
    }
  });
};
const getPromise = async () => {
  const info: TInfo = await createObjectPromise();
  console.log(info);
};
getPromise();



// todo-> fetch todo data from placeholder
type TTodo = {
  userId: 1;
  id: 1;
  title: "delectus aut autem";
  completed: false;
};
const getTodoFromPlaceholder = async (): Promise<TTodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: TTodo = await res.json();
  return data;
};
const getTodo  = async () => {
    const data:TTodo = await getTodoFromPlaceholder();
    console.log(data);
};
getTodo()



