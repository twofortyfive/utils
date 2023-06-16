import isNaturalNumber from "../isNaturalNumber";

type Boundaries = {
  min: number;
  max: number;
};

type RandomGenerator = () => number;

export const random =
  (generator: RandomGenerator) =>
  ({ min, max }: Boundaries): number => {
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

export default random;
