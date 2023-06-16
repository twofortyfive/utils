import { Lens } from "../Lens";

export const composeLenses =
  <W, V, U>(first: Lens<W, V>) =>
  (second: Lens<V, U>): Lens<W, U> => ({
    get: (w) => second.get(first.get(w)),
    set: (w, u) => first.set(w, second.set(first.get(w), u)),
  });
