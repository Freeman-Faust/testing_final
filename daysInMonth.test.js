const getMonthDays = require("./daysInMonth");

describe("Corretly return the number of days in a given month, provided as the number of the month and year on a Julian calendar", () => {
  it("February", () => {
    const actualResult = getMonthDays(2,2016);
    expect(actualResult).toEqual(29);
  });
  it("January", () => {
    const actualResult = getMonthDays(1,2022);
    expect(actualResult).toEqual(31);
  });
  it("June", () => {
    const actualResult = getMonthDays(6,1980);
    expect(actualResult).toEqual(30);
  });
  test('using a string', () => {
    expect(() => {
        getMonthDays("February");
    }).toThrow();
  });
});