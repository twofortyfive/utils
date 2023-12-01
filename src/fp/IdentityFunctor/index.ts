export const IdentityFunctor = <U>(value: U) => ({
  map: <V>(fn: (u: U) => V) => IdentityFunctor(fn(value)),
  get: () => value,
});
