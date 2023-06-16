import { Reducer } from "../reducer";

export const flow =
  <State>(...fns: Reducer<State>[]): Reducer<State> =>
  (t) =>
    fns.reduce((acc, fn) => fn(acc), t);

export default flow;
