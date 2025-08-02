"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ternary
const age = 25;
const isAdult = age >= 18 ? "adult" : "not-adult";
console.log("🚀 ~ isAdult:", { isAdult });
//nullish coalescing operator (null/undefined) -> decision making
const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest";
console.log("🚀 ~ result1:", { result1 });
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log("🚀 ~ result2:", { result2 });
const user = {
    name: "Rezwan",
    address: {
        city: "Dhaka",
        road: "24/7",
        presentAddress: "Dhaka",
    },
};
const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
console.log("🚀 ~ permanentAddress:", { permanentAddress });
