import { Reducer } from "../reducer";

export const reduceIf =
  (condition: boolean) =>
  <State>(reducer: Reducer<State>): Reducer<State> =>
  (state) => {
    if (condition) {
      return reducer(state);
    }
    return state;
  };

export default reduceIf;
