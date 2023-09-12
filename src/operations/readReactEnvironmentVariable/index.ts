import { readEnvironmentVariable } from "../internals";

export const readReactEnvironmentVariable = (name: string): string => {
  return readEnvironmentVariable("REACT_APP_" + name);
};
