//todo-> abstraction
//? we can implements abstract in two differt way
//? 1. interface
//? 2. abstract class

//todo-> using interface for implement abstraction

interface Vehicle1 {
  //   name: string;
  //   model: number;
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car1 implements Vehicle1 {
  startEngine(): void {
    console.log("I am starting the car engine..");
  }
  stopEngine(): void {
    console.log("I am stopping the cap engine");
  }
  move(): void {
    console.log("Car is moving...");
  }
  test() {
    console.log("I am testing..");
  }
}

// const toyotaCar = new Car1();
// toyotaCar.startEngine();


//todo-> using abstract class for implement abstraction
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
    test() {
    console.log("I am testing..");
  } 
}

class ToyotaCar extends Car2{
  startEngine(): void {
    console.log("I am starting the car engine..");
  }
  stopEngine(): void {
    console.log("I am stopping the cap engine");
  }
  move(): void {
    console.log("Car is moving...");
  }
}


const hondaCar = new ToyotaCar();
hondaCar.startEngine();
hondaCar.test()
