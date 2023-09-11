import { reduceIf } from ".";
import { Reducer } from "../reducer";

describe("Test of reduceIf()", () => {
  test("Condition is false", () => {
    const reducer: Reducer<number> = (n) => n + 1;
    expect(reduceIf(false)(reducer)(0)).toEqual(0);
  });

  test("Condition is true", () => {
    const reducer: Reducer<number> = (n) => n + 1;
    expect(reduceIf(true)(reducer)(0)).toEqual(1);
  });
});
