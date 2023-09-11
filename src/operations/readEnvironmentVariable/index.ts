export const readEnvironmentVariable = (name: string): string => {
  const variable: string | undefined = process.env[name];
  if (variable === undefined) {
    throw new Error(`No environment variable is set for ${name}.`);
  }
  return variable;
};

export default readEnvironmentVariable;
