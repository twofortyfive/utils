export const createInMemoryDatabase = <Key extends string, Item extends {}>() => {
  const database: Partial<Record<Key, Item>> = {};

  const setItem = (key: Key, data: Item): void => {
    database[key] = data;
  };

  const getItem = (key: Key): Item => database[key];

  const updateItem = (key: Key, patch: Partial<Item>): void => {
    setItem(key, {
      ...getItem(key),
      ...patch,
    });
  };

  const deleteItem = (key: Key): void => {
    delete database[key];
  };

  return {
    setItem,
    getItem,
    updateItem,
    deleteItem,
  };
};
