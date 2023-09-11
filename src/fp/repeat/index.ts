import { range } from "../../maths/range";
import { flow } from "../flow";
import { Transducer } from "../transducer";

export const repeat =
  <T>(times: number): Transducer<T> =>
  (reducer) => {
    const reducers = range(times).map(() => reducer);
    return flow(...reducers);
  };
