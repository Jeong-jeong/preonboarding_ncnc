import { useState, useMemo } from 'react';
import { getStorageValue } from 'utils/fucntions';

const useLocalStorage = <T, K>(key: string, initialValue: T) => {
  const memoStoredValue = useMemo(() => getStorageValue(key, initialValue), [key]);
  const [storedValue, setStoredValue] = useState(memoStoredValue || initialValue);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error('failed to set value');
    }
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
