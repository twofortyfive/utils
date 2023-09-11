import { isNaturalNumber } from "../isNaturalNumber";

export type Range = {
  min: number;
  max: number;
};

export type RandomGenerator = () => number;

export const random =
  (generator: RandomGenerator) =>
  ({ min, max }: Range): number => {
    if (!isNaturalNumber(min) || !isNaturalNumber(max)) {
      throw Error("min and max are expected to be natural numbers");
    }
    if (min > max) {
      throw Error("min > max");
    }
    if (min < 0) {
      throw Error("min < 0");
    }
    return Math.round(min + (max - min) * generator());
  };
