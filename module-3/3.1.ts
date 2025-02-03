{
  // Class and object
  class Animal {
    // name: string;
    // sound: string;
    // species: string;

    // public is defiend more easier & cleaner code
    constructor(
      public name: string,
      public sound: string,
      public species: string
    ) {
      // this.name = name;
      // this.sound = sound;
      // this.species = species;
    }

    makeSound() {
      console.log(
        `The ${this.name} is barking ${this.sound} & it is a ${this.species}`
      );
    }
  }

  const dog = new Animal("garman Shepard", "Dog", "geow geow");
  const cat = new Animal("Parshian Cat", "cat", "meow meow");
  cat.makeSound();

  // *** arro function a  this kaj kore naaaa ~ !
}
