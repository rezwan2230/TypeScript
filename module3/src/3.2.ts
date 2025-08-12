//todo-> inheritence

class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  getSleep(numbberOfHours: number) {
    console.log(`${this.name} will sleep for ${numbberOfHours} hours a day.`);
  }
}

class Student extends Person {
  constructor(public name: string, public age: number, public address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string
  ) {
    super(name, age, address);
  }
  takeClass(numbberOfClasses: number) {
    console.log(`${this.name} will take ${numbberOfClasses} classes today.`);
  }
}

const student1 = new Student("Rezwan", 25, "Gaibandha");
console.log(student1);
student1.getSleep(23);

const teacher1 = new Teacher("Rezwan", 25, "Gaibandha", "lecturer");
console.log(teacher1);
teacher1.takeClass(23);
