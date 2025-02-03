{
  // when i use it => jokhon akta type onno akta type ar upor depends kore tokon ei vabe types use kora jabe
  // Conditional types with generic
  type Brands = {
    bike: string;
    car: string;
    ship: string;
  };

  // keyOf Brands means bike | car | ship
  type checkBrands<T> = T extends keyof Brands ? true : false;
  type HasBike = checkBrands<"bike">;
}
