//Reference Type -->Object

const user: {
  // company: "Programming Hero"; //literal type
  readonly company: "Programming Hero";
  firstName: string;
  middelName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Rezwan",
  middelName: "islam",
  lastName: "repon",
  isMarried: true,
  company: "Programming Hero",
};

// user.company = "df"; //It will give an error because company is read only. we can't modify it.


