{
  //  Generic with Interface
  interface Developer<T, X = null> {
    name: string;
    compuer: {
      brand: string;
      model: string;
      releseDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type PoorWatch = {
    brand: string;
    model: string;
    display: string;
  };

  // cleaner code to implement Type Alies
  const poorDeveloper: Developer<PoorWatch> = {
    name: "Khaled Bin Mahamud",
    compuer: {
      brand: "Fujitsu",
      model: "adsfasdf",
      releseDate: 2024,
    },
    smartWatch: {
      brand: "Bangachura",
      model: "nai",
      display: "nai",
    },
  };

  interface RichWatch {
    brand: string;
    model: string;
    feachers: boolean;
  }
  interface RichBike {
    brand: string;
    model: string;
  }

  const richDeveloper: Developer<RichWatch, RichBike> = {
    name: "Mitul",
    compuer: {
      brand: "MacBook",
      model: "8GB core i5",
      releseDate: 2025,
    },
    smartWatch: {
      brand: "Apple",
      model: "latest version Core",
      feachers: true,
    },
    bike: {
      brand: "MT15",
      model: "2nd version",
    },
  };
}
