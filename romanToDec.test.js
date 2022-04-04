const romanToDecimal = require("./romanToDec");

describe("Convert Roman numerals to decimals", () => {
  it("using a roman number", () => {
    const actualResult = romanToDecimal("MCXVII");
    expect(actualResult).toEqual(1117);
  });
  it("using characters that are not roman numerals", () => {
    const actualResult = romanToDecimal("FFRTQ");
    expect(actualResult).toEqual(NaN);
  });
});