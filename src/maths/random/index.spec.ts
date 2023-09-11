import fc from "fast-check";
import { random } from ".";
import { isNaturalNumber } from "../isNaturalNumber";

describe("Test of random()", () => {
  test("It should simply stretch and shift the range of randomness (min)", () => {
    const generator = () => 0;
    expect(random(generator)({ min: 10, max: 20 })).toEqual(10);
  });

  test("It should simply stretch and shift the range of randomness (max)", () => {
    const generator = () => 1;
    expect(random(generator)({ min: 10, max: 20 })).toEqual(20);
  });

  test("It should simply stretch and shift the range of randomness (middle)", () => {
    const generator = () => 0.5;
    expect(random(generator)({ min: 10, max: 20 })).toEqual(15);
  });

  test("The random value should be comprised between min and max boundaries", () => {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (min, max) => {
        fc.pre(min <= max);
        const result = random(Math.random)({ min, max });
        return min <= result && result <= max;
      })
    );
  });

  test("The random value should be a natural number", () => {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (min, max) => {
        fc.pre(min <= max);
        const result = random(Math.random)({ min, max });
        return isNaturalNumber(result);
      })
    );
  });
});
