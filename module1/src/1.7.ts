// spread operator, rest operator

//spread operator
const arr1: string[] = ["rezwan", "mir", "mizan"];
const arr2: string[] = ["tanmoy", "mejbah", "kaziyal"];
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
const greatFrinds = (...frinds: string[]): void => {
    // console.log(`Hi ${frinds[0]} ${frinds[1]} ${frinds[2]}`);
  frinds.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greatFrinds("rezwan", "mohabbat", "mitul");
