import { isNaturalNumber } from ".";

describe("Test of isNaturalNumber()", () => {
  test("Regular case: natural number", () => {
    expect(isNaturalNumber(1)).toEqual(true);
  });

  test("Regular case: a floating point number is not a natural number", () => {
    expect(isNaturalNumber(1.5)).toEqual(false);
  });

  test("Regular case: a negative number is not a natural number", () => {
    expect(isNaturalNumber(-1)).toEqual(false);
  });

  test("Edge case", () => {
    expect(isNaturalNumber(0)).toEqual(true);
  });
});
