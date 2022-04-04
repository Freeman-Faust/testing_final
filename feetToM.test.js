const feetToMeter = require("./feetToM");

describe("Convert feet to meters", () => {
  it("using an integer for feet", () => {
    const actualResult = feetToMeter(6);
    expect(actualResult).toEqual(1.8288000000000002);
  });
  it("using decimals for feet", () => {
    const actualResult = feetToMeter(9.5);
    expect(actualResult).toEqual(2.8956);
  });
});