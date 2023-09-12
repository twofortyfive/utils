import { readEnvironmentVariable } from "../internals";

export const readNodeEnvironmentVariable = (name: string): string => {
  // Requires using dotenv
  return readEnvironmentVariable(name);
};
