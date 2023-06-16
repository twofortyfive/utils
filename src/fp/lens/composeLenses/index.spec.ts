import { composeLenses } from ".";
import { Lens } from "../Lens";

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

const focusOnValue: Lens<Speed, number> = {
  get: ({ value }) => value,
  set: (speed, value) => ({ ...speed, value }),
};

const focusOnSpeedValue = composeLenses<Car, Speed, number>(focusOnSpeed)(focusOnValue);

describe("Lenses compose easily", () => {
  test("Read", () => {
    expect(focusOnSpeedValue.get(car)).toEqual(50);
  });

  test("Write", () => {
    const actual = focusOnSpeedValue.set(car, 60);
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
