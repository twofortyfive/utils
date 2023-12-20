export const last = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error("Can't get last element of an empty array.");
  }
  return array[array.length - 1];
};
