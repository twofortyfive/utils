export const defaultOptions =
  <Options extends {}>(defaultValues: Options) =>
  (values: Partial<Options>): Options => ({
    ...defaultValues,
    ...values,
  });
