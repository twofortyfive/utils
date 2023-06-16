import { Lens } from ".";

type Speed = {
  value: number;
  unit: "km/h";
};

type Car = {
  speed: Speed;
  seats: number;
};

const focusOnSpeed: Lens<Car, Speed> = {
  get: ({ speed }) => speed,
  set: (car, speed) => ({ ...car, speed }),
};

const car: Car = {
  speed: {
    value: 50,
    unit: "km/h",
  },
  seats: 5,
};

describe("A lens allows to focus on a specific part of a larger object", () => {
  test("Read", () => {
    expect(focusOnSpeed.get(car)).toEqual({
      value: 50,
      unit: "km/h",
    });
  });

  test("Write", () => {
    const actual = focusOnSpeed.set(car, {
      value: 60,
      unit: "km/h",
    });
    const expected: Car = {
      speed: {
        value: 60,
        unit: "km/h",
      },
      seats: 5,
    };
    expect(actual).toEqual(expected);
  });
});
