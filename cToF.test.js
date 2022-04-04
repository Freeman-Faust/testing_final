const celsiusToFahrenheit = require("./cToF");

describe("convert celsius to fahrenheit", () => {
  it("using a decimel for C", () => {
    const actualResult = celsiusToFahrenheit(6.5);
    expect(actualResult).toEqual(44);
  });
  it("using a string", () => {
    const actualResult = celsiusToFahrenheit("Ten");
    expect(actualResult).toEqual(NaN);
  });
});