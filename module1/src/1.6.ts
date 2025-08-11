//Learning function

//Normal Function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

console.log(add(5, 2));

// Arrow function
const addNumber = (num1: number, num2: number): number => num1 + num2;
console.log(addNumber(5, 2));

// Object -> function -> method
//we always make a normal funciton inside a object and that is callled method.
const poorUser = {
  name: "rezwan",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};
poorUser.addBalance(10);

// Array Map
const arr: number[] = [10, 20, 30, 40];
const newArr: number[] = arr.map((arr: number): number => arr * arr);
console.log(newArr);


