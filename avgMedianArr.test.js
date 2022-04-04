
const averageMedian = require("./avgMedianArr");

describe("Find the median of odd numbered arrays, and the average of even numbered arrays", () => {
  it("an odd numbered array", () => {
    const actualResult = averageMedian([1,2,3,4,5]);
    expect(actualResult).toEqual(3);
  });
  it("an even numbered array", () => {
    const actualResult = averageMedian(1,2,3,4,5,6);
    expect(actualResult).toEqual(3.5);
  });
  
});