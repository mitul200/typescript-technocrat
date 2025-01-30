{
  const searchName = (value: string) => {
    if (value) {
      console.log("searching...");
    } else {
      console.log("there is nothing to Search");
    }
  };

  searchName(null);

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpreed = (value * 1000) / 3600;
      console.log(`Get Speed in meter ${convertedSpreed}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpreed = (parseFloat(result) * 1000) / 3600;
      console.log(`Get Speed in meter ${convertedSpreed}`);
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedInMeterPerSecond(null);
}
