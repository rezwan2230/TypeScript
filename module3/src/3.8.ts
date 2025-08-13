//todo-> polymorphisom

//todo-> Problem-1
class Person {
  getSleep() {
    console.log(`I am sleeping for a 8 hours per day`);
  }
}
class Student extends Person {
  getSleep(): void {
    console.log(`I am sleeping for a 7 hours per day`);
  }
}
class Developer extends Person {
  getSleep(): void {
    console.log(`I am sleeping for a 6 hours per day`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);



//todo-> Peoblem-2
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public length: number, public width: number) {
    super();
  }
  getArea(): number {
    return this.length * this.width;
  }
}

const getShapeArea = (param: Shape) => {
  console.log(param.getArea());
};

const circle = new Circle(3);
const rectangle = new Rectangle(3, 5);
getShapeArea(circle);
getShapeArea(rectangle);
