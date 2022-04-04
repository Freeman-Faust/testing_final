const PalindromeIterative = require('./palindrome');
const PalindromeRecursive = require('./palindrome')

describe("Convert Roman numerals to decimals", () => {
  it("using recursive with palindrome", () => {
    const actualResult = PalindromeRecursive("radar");
    expect(actualResult).toEqual(true);
  });
  it("using recursive with non-palindrome", () => {
    const actualResult = PalindromeRecursive("Halifax");
    expect(actualResult).toEqual(false);
  });
  it("using iterative with a palindrome", () => {
    const actualResult = PalindromeIterative("level");
    expect(actualResult).toEqual(true);
  });
  it("using iterative with a non-palindrome", () => {
    const actualResult = PalindromeIterative("tire");
    expect(actualResult).toEqual(false);
  });
});