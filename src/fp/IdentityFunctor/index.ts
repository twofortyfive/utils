export const IdentityFunctor = <U>(value: U) => {
  return {
    map: <V>(fn: (u: U) => V) => IdentityFunctor(fn(value)),
    get: () => value,
  };
};
