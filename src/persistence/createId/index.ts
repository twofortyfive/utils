import { v4 as uuid } from "uuid";

export const createId = (): string => {
  return uuid();
};
