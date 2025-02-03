{
  type Vehicals = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicals;
}
