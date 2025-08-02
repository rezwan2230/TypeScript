"use strict";
//nullable types / unknown type
Object.defineProperty(exports, "__esModule", { value: true });
const searchName = (value) => {
    if (value) {
        console.log("searching..");
    }
    else {
        console.log("There is nothing to search");
    }
};
searchName(null);
//unknown
const getSpeedInMeterPerSecond = (value) => {
    if (typeof value == "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`Speed In Meter Per Second : ${convertedSpeed}`);
    }
    else if (typeof value == "string") {
        const [result = "0", unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`Speed In Meter Per Second : ${convertedSpeed}`);
    }
    else {
        console.log("wrong input");
    }
};
getSpeedInMeterPerSecond(500);
getSpeedInMeterPerSecond("5000 mhs");
getSpeedInMeterPerSecond(null);
//never type
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error ami kori nai apna apni hoye gase");
