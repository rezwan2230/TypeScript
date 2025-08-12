//todo-> conditional type

type a1 = number;
type b1 = string;

type z = a1 extends null ? true : false; //conditional type

type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};
type Vehicle = keyof Sheikh

//todo-> car/bike/ship ache ki na?
//* option-1
// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false
//* option-2
type CheckVehicle<T> = T extends Vehicle ? true : false

type HasBike = CheckVehicle<"bike">
type HasTruck = CheckVehicle<"trucktor">
