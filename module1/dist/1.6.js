"use strict";
//Learning function
Object.defineProperty(exports, "__esModule", { value: true });
//Normal Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
console.log(add(5, 2));
// Arrow function
const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(5, 2));
// Object -> function -> method
//we always make a normal funciton inside a object and that is callled method.
const poorUser = {
    name: "rezwan",
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
poorUser.addBalance(10);
// Array Map
const arr = [10, 20, 30, 40];
const newArr = arr.map((arr) => arr * arr);
console.log(newArr);
