const upperCaseConversion = require("./upperCaseConv");

describe("Convert strings with lower case to all upper case", () => {
  it("all lower case", () => {
    const actualResult = upperCaseConversion("this is a test");
    expect(actualResult).toEqual("THIS IS A TEST");
  });
  it("partial lower case", () => {
    const actualResult = upperCaseConversion("This is ONly a TEST");
    expect(actualResult).toEqual("THIS IS ONLY A TEST");
  });
  it("all upper case", () => {
    const actualResult = upperCaseConversion("HAD THIS BEEN A REAL EMERGENCY...");
    expect(actualResult).toEqual("HAD THIS BEEN A REAL EMERGENCY...");
  });
  it("all upper case", () => {
    const actualResult = upperCaseConversion('1244');
    expect(actualResult).toEqual("1244");
  });
});