export const asyncNoop = (): Promise<void> => {
  return Promise.resolve();
};
