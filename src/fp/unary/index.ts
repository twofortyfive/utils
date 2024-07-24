type UnaryOrMoreFunction<T, R> = (t: T) => R;

export const unary =
  <T, R>(fn: UnaryOrMoreFunction<T, R>) =>
  (t: T): R =>
    fn(t);
