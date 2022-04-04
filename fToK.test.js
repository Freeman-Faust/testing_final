const fahrenheitToKelvin = require("./fToK");

describe("Convert fahrenheit to celcius", () => {
  it("using an integer for F", () => {
    const actualResult = fahrenheitToKelvin(96);
    expect(actualResult).toEqual(309);
  });
  it("using decimals for F", () => {
    const actualResult = fahrenheitToKelvin(2.5);
    expect(actualResult).toEqual(257);
  });
  it("using a string for F", () => {
    const actualResult = fahrenheitToKelvin("Fifty");
    expect(actualResult).toEqual(NaN);
  });
});