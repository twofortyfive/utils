// https://en.wikipedia.org/wiki/Semaphore_(programming)

type Status = "AVAILABLE" | "UNAVAILABLE";

export const lock = (name: string) => {
  let status: Status = "AVAILABLE";

  const canTake = (): boolean => status === "AVAILABLE";

  const take = (): void => {
    if (status === "UNAVAILABLE") {
      throw Error(`Lock '${name}' is not available.`);
    }
    status = "UNAVAILABLE";
  };

  const relieve = (): void => {
    status = "AVAILABLE";
  };

  return {
    canTake,
    take,
    relieve,
  };
};
