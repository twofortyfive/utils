import { isValidEmail } from ".";

test("A valid email", () => {
  expect(isValidEmail("john.doe@gmail.com")).toEqual(true);
});

test("A valid email", () => {
  expect(isValidEmail("johndoe@gmail.com")).toEqual(true);
});

test("Not a valid email", () => {
  expect(isValidEmail("john.doe@gmail")).toEqual(false);
});

test("Not a valid email", () => {
  expect(isValidEmail("john.doe@.com")).toEqual(false);
});

test("Not a valid email", () => {
  expect(isValidEmail("@gmail.com")).toEqual(false);
});

test("Not a valid email", () => {
  expect(isValidEmail("")).toEqual(false);
});
