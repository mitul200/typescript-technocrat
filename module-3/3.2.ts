{
  // Inheritance in OOP.

  class Parents {
    constructor(
      public name: string,
      public age: number,
      public country: string
    ) {}
    getSleep(numberOfHours: number) {
      console.log(
        `stundents name is ${this.name} and his age is ${this.age} moreover his country is ${this.country}`
      );
    }
  }

  class Student extends Parents {
    constructor(
      public name: string,
      public age: number,
      public country: string
    ) {
      super(name, age, country);
    }
  }

  // techer role

  class Teacher extends Parents {
    constructor(
      public name: string,
      public age: number,
      public country: string,
      public role: string
    ) {
      super(name, age, country);
    }
  }

  const studentsIdentity = new Student("Khaled", 23, "Bangladesh");
  studentsIdentity.name;
  const teacherIdentity = new Teacher(
    "mofiz ~ Mia",
    12,
    "udanda",
    "accounting teacher"
  );
  teacherIdentity.name;
}
