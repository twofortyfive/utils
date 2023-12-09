export type Range = {
  min: number;
  max: number;
};

export type RandomGenerator = () => number;

export const random =
  (generator: RandomGenerator) =>
  ({ min, max }: Range): number => {
    if (min > max) {
      throw Error("min > max");
    }
    return min + (max - min) * generator();
  };
