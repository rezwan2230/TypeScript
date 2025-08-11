//type assertion [jkhon ami nijei jypescript er cheye type valo jani, ami nijei bole dibo je aitai string naki number hobe]

let anything: any;
anything = "rezwanul islam";
(anything as string).length;

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value == "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `he converted Value is : ${convertedValue}`;
  }
  if (typeof value == "number") {
    return value * 1000;
  }
};

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;
console.log("🚀 ~ result1:", result1);
console.log("🚀 ~ result2:", result2);



//tyr catch
type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}
