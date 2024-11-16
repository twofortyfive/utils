import { composeWithLens } from ".";
import { Lens } from "../Lens";

type A = number;

type B = {
  a: A;
  other: "other";
};

const lens: Lens<B, A> = {
  get: ({ a }) => a,
  set: (b, a) => ({ ...b, a }),
};

describe("Test of composeWithLens()", () => {
  test("", () => {
    // Given
    const b: B = {
      a: 42,
      other: "other",
    };
    const reducer = composeWithLens(lens)((a) => a + 1);

    // When
    const actual = reducer(b);

    // Then
    const expected: B = {
      a: 43,
      other: "other",
    };
    expect(actual).toEqual(expected);
  });
});
