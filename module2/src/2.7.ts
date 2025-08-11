//generic constraint with keyof operator

type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner1 = "bike" | "car" | "ship";

const person: Owner1 = "bike";

type Owner2 = keyof Vehicle;


const user = {
  name: "zishan",
  id: 4,
  email: "zishan@gmail.com",
  hasWatch: "nothing",
};

function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
const result = getProperty(user, "name");
