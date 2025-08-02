"use strict";
// spread operator, rest operator and destructuring
Object.defineProperty(exports, "__esModule", { value: true });
//spread operator
const arr1 = ["rezwan", "mir", "mizan"];
const arr2 = ["tanmoy", "mejbah", "kaziyal"];
arr1.push(...arr2);
const mentors1 = {
    typescript: "mezbah",
    redux: "mir",
    dbms: "mizan",
};
const mentors2 = {
    prizma: "firoz",
    next: "tanmoy",
    cloud: "nahid",
};
const mentorList = {
    ...mentors1,
    ...mentors2,
};
//learn rest operator
const greatFrinds = (...frinds) => {
    console.log(`Hi ${frinds[0]} ${frinds[1]} ${frinds[2]}`);
    //   frinds.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greatFrinds("rezwan", "mohabbat", "mitul");
