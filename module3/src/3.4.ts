//todo-> instance of guard

class Animal {
  constructor(public name: string, public species: string) {}
  makeSound() {
    console.log("I am making sound");
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking...");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am meaw meaw...");
  }
}

//! we can use function to handle smart way
const isDog = (animal: Animal)=>{
    return animal instanceof Dog;
}
const isCat = (animal: Animal)=>{
    return animal instanceof Cat;
}
const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
};

const dog = new Dog("Honey", "Dog");
const cat = new Cat("Simba", "Cat");

console.log(dog.name);
getAnimal(dog);
getAnimal(cat);
