import { lock } from ".";

describe("Test of lock()", () => {
  test("by default, a lock is available", () => {
    // GIVEN
    const { canTake } = lock("lock");

    // THEN
    expect(canTake()).toEqual(true);
  });

  test("can take if the lock is available", () => {
    // GIVEN
    const { canTake, take } = lock("lock");

    // WHEN
    take();

    // THEN
    expect(canTake()).toEqual(false);
  });

  test("can NOT take if the lock is NOT available", () => {
    // GIVEN
    const { take } = lock("lock");
    take();

    // WHEN
    // THEN
    expect(take).toThrowError("Lock 'lock' is not available.");
  });

  test("a lock can be relieved", () => {
    // GIVEN
    const { canTake, take, relieve } = lock("lock");
    take();

    // WHEN
    relieve();

    // THEN
    expect(canTake()).toEqual(true);
  });
});
