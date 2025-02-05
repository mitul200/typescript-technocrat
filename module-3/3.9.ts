{
  // Abstraction in OOP

  // Abstraction guve us idea however it's real implements provides in the class methods

  // idea

  // leader interface
  interface Vhicles1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vhicles1: Vhicles1 = {
  //   name: "khaled",
  //   model: "876zsdfsd",
  // };

  // implementation

  // abstract class dons't creat instonse
  class Car1 implements Vhicles1 {
    startEngine(): void {
      console.log(`I'm starting the engin`);
    }
    stopEngine(): void {
      console.log(`I'm stop the engin`);
    }
    move(): void {
      console.log(`I'm moving the car`);
    }
  }

  const bmwCar = new Car1();
  bmwCar.startEngine();

  // Abstraction class

  // leader class
  abstract class Vhicles2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
      console.log(`im testing the car `);
    }
  }

  // implementations
  class bmw2Car extends Vhicles2 {
    startEngine(): void {
      console.log(`I'm starting the BMW car engin`);
    }
    stopEngine(): void {
      console.log(`I'm stop the BMW car engin`);
    }
    move(): void {
      console.log(`I'm moving the BMW car `);
    }
  }
}
