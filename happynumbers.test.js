const happyNumbers = require("./happynumbers");

test("happyNumbers exists", () => {
  expect(happyNumbers).toBeDefined();
});

test("Should return true for 19", () => {
  expect(happyNumbers(19)).toBe(true);
});

test("Should return false for 0", () => {
  expect(happyNumbers(0)).toBe(false);
});
