//nullable types / unknown type

const searchName = (value: string | null) => {
  if (value) {
    console.log("searching..");
  } else {
    console.log("There is nothing to search");
  }
};
searchName(null);


//unknown
const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value == "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`Speed In Meter Per Second : ${convertedSpeed}`);
  } else if (typeof value == "string") {
    const [result = "0", unit] = value.split(" ");
    const convertedSpeed = (parseFloat(result) * 1000) / 3600;
    console.log(`Speed In Meter Per Second : ${convertedSpeed}`);
  } else {
    console.log("wrong input");
  }
};

getSpeedInMeterPerSecond(500);
getSpeedInMeterPerSecond("5000 mhs");
getSpeedInMeterPerSecond(null);



//never type
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error ami kori nai apna apni hoye gase");
