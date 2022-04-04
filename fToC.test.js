const fahrenheitToCelsius = require("./fToC");

describe("Convert fahrenheit to celcius", () => {
  it("using an integer for F", () => {
    const actualResult = fahrenheitToCelsius(104);
    expect(actualResult).toEqual(40);
  });
  it("using decimals for F", () => {
    const actualResult = fahrenheitToCelsius(-14.5);
    expect(actualResult).toEqual(-26);
  });
});