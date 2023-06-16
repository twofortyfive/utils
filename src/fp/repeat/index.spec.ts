import fc from "fast-check";
import repeat from ".";

describe("Test of repeat()", () => {
  test("Repeat 0 times", () => {
    const increment = (i: number) => i + 1;
    expect(repeat<number>(0)(increment)(0)).toEqual(0);
  });

  test("Repeat 1 time", () => {
    const increment = (i: number) => i + 1;
    expect(repeat<number>(1)(increment)(0)).toEqual(1);
  });

  test("Repeat n times", () => {
    fc.assert(
      fc.property(fc.nat({ max: 10 }), (n) => {
        const increment = (i: number) => i + 1;
        return repeat<number>(n)(increment)(0) === n;
      })
    );
  });
});
