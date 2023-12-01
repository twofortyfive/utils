type Predicate<T> = (t: T) => boolean;

export const not =
  <T>(fn: Predicate<T>): Predicate<T> =>
  (t: T) =>
    !fn(t);
