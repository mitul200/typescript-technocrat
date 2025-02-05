// Polymorphism
{
  class Person {
    getSleep() {
      console.log(`I'm sleeping 8 hours per day`);
    }
  }

  class Students extends Person {
    getSleep() {
      console.log(`I'm sleeping 7 hours per day`);
    }
  }

  class Developers extends Person {
    getSleep() {
      console.log(`I'm sleeping 4 hours per day`);
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Students();
  const person3 = new Developers();

  getSleepingHours(person2);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  
  class Circle extends Shape {
    constructor(public redious: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.redious;
    }
  }

  const getShapeArea = (params: Shape) => {
    console.log(params.getArea());
  };

  const shape1 = new Circle(2);
  getShapeArea(shape1);
}
