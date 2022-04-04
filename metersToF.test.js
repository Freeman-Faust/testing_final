const meterToFeet = require("./metersToF");

describe("Convert meters to feet", () => {
  it("using an integer for meters", () => {
    const actualResult = meterToFeet(3);
    expect(actualResult).toEqual(9.84251968503937);
  });
  it("using decimals for meters", () => {
    const actualResult = meterToFeet(4.667);
    expect(actualResult).toEqual(15.311679790026245);
  });
});