import { last } from ".";

describe("Test of last()", () => {
  test("Regular case", () => {
    expect(last([0, 1, 2, 3])).toEqual(3);
  });

  test("Edge case", () => {
    expect(() => last([])).toThrowError("Can't get last element of an empty array.");
  });
});
