export const readEnvironmentVariable =
  (prefix = "") =>
  (name: string): string => {
    const fullName = prefix + name;

    const variable: string | undefined = process.env[fullName];

    if (variable === undefined) {
      throw new Error(`No environment variable is set for ${fullName}.`);
    }

    return variable;
  };
