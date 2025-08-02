"use strict";
//destructuring
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring
const user = {
    id: 1,
    name: {
        firstName: "Rezwan",
        middleName: "Islam",
        lastName: "Repon",
    },
    contactNo: "0134342434",
    address: {
        presentAddress: {
            district: "Gaibandha",
            division: "Rangpur",
        },
        parmanentAddress: {
            post: "Khidir",
            union: "malibari",
        },
    },
};
const { name: { middleName: name }, //name elias
address: { presentAddress: { division: bivag }, }, } = user;
// console.log("🚀 ~ middleName:", name);
// console.log("🚀 ~ division:", bivag);
//array destructuring
const myFriends = ["zishan", "tailor", "kaziyal", "harun", "oishi", "mahadi"];
const [, , bestFriend, ...rest] = myFriends;
console.log("🚀 ~ rest:", rest);
console.log("🚀 ~ BestFriend:", bestFriend);
