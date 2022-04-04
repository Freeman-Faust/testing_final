const checkAnagram = require("./checkAnagram");

describe("convert celsius to fahrenheit", () => {
  it("same length and anagrams", () => {
    const actualResult = checkAnagram("god", "dog");
    expect(actualResult).toEqual(true);
  });
  it("same length but not anagrams", () => {
    const actualResult = checkAnagram("ben","ten");
    expect(actualResult).toEqual(false);
  });
  it("different lengths", () => {
    const actualResult = checkAnagram("ten","tent");
    expect(actualResult).toEqual(false);
    });
  it("longer anagram", () => {
    const actualResult = checkAnagram("angered","enraged");
    expect(actualResult).toEqual(true);
  });
  it("Not a string", () => {
    const actualResult = checkAnagram(23,"enraged");
    expect(actualResult).toEqual('Not string(s)');
  });
});
