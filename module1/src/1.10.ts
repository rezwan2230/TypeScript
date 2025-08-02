//union types

type TFrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
type TFullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

type TDeveloper = TFrontendDeveloper | TFullStackDeveloper;

const newDeveloper: TDeveloper = "juniorDeveloper";

type TUser = {
  name: string;
  email?: string;
  gender: "male" | "female";
  bloodGroup:
    | "A(+ve)"
    | "A(-ve)"
    | "B(+ve)"
    | "B-ve)"
    | "AB(+ve)"
    | "AB(-ve)"
    | "O(+ve)"
    | "O(-ve)";
};

const user: TUser = {
  name: "rezwan",
  gender: "male",
  bloodGroup: "B(+ve)",
};

type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};
type BackenddDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStaackDeveloper = FrontendDeveloper & BackenddDeveloper;

const fullStackDeveloper: FullStaackDeveloper = {
  skills: ["html", "css", "express"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
