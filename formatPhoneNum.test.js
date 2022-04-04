const formatPhoneNumber = require("./formatPhoneNum");

describe("Convert phone number format", () => {
  it("10 digit number", () => {
    const actualResult = formatPhoneNumber(5052998170);
    expect(actualResult).toEqual("(505) 299-8170");
  });
  it("10 digit string", () => {
    const actualResult = formatPhoneNumber("1234567890");
    expect(actualResult).toEqual("(123) 456-7890");
  });
  test('throws on not enough digits', () => {
    expect(() => {
      formatPhoneNumber(8675309);
    }).toThrow();
  });
});