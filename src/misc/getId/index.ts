type HasId = {
  id: string;
};

export const getId = <T extends HasId>({ id }: T) => id;
