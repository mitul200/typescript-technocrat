// Type guard using instance of
{
  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log("Im making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBarking() {
      console.log("im barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeowing() {
      console.log("I'm barking");
    }
  }

  // pro developer do that

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBarking();
    } else if (isCat(animal)) {
      animal.makeMeowing();
    } else {
      animal.makeSound();
    }
  };

  const cat = new Cat("meow bhai", "meow");
  const dog = new Dog("Dog bhai", "Dog");

  getAnimal(cat);
}
