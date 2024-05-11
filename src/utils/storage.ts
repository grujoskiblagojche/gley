export type GetStorage = () => Storage | void;

function getPersistedKey(key: string): string {
  return `kinemoe_${key}`;
}

export const getPersistedValue = <S>(
  rawKey: string,
  getStorage: GetStorage = getLocalStorage
): S | undefined => {
  const key = getPersistedKey(rawKey);

  try {
    const storage = getStorage();

    if (!storage) {
      return;
    }

    return parseValue(storage.getItem(key));
  } catch (_e) {
    console.error(`Failed to load: "${key}"`);

    return;
  }
};

export const persistValue = <S>(
  rawKey: string,
  value: S,
  getStorage: GetStorage = getLocalStorage
): void => {
  const normalizedValue = JSON.stringify(value);
  const key = getPersistedKey(rawKey);

  try {
    const storage = getStorage();

    if (!storage) {
      return;
    }

    if (storage.getItem(key) !== normalizedValue) {
      storage.setItem(key, normalizedValue);
    }
  } catch (_e) {
    console.error(`Failed to save: ["${key}", ${normalizedValue}]`);
  }
};

export const getLocalStorage = () => {
  return window.localStorage;
};

const parseValue = <S>(value: string | null): S | undefined => {
  if (value == null) {
    return undefined;
  }

  return JSON.parse(value);
};
