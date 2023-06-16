import { composeWithLens } from ".";
import { Reducer } from "../../reducer";
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

const raiseSpeed: Reducer<Speed> = ({ value }) => ({
  value: value + 10,
  unit: "km/h",
});

const accelerate: Reducer<Car> = composeWithLens<Car, Speed>(focusOnSpeed)(raiseSpeed);

describe("Composition with reducers", () => {
  test("Composition with reducers", () => {
    const actual = accelerate(car);
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
