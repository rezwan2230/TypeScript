//todo-> oop->class

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  //!arrow function are not working here couse if we write an arrow function here we can't use "this" keyword.
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Puppy", "Shepard", "Gheu Gheu");
const cat = new Animal("Simba", "Parshian", "Meaw Meaw");
console.log(dog);
dog.makeSound();
console.log(cat);
cat.makeSound();

