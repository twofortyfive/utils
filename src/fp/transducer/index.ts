import { Reducer } from "../reducer";

export type Transducer<State> = (reducer: Reducer<State>) => Reducer<State>;
