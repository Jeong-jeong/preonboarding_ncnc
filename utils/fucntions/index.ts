const PERCENT_NUMBER = 100;

export const getDiscount = (originalPrice: number, targetPrice: number) =>
  Math.floor(((originalPrice - targetPrice) / originalPrice) * PERCENT_NUMBER);

export const getStorageValue = <T>(key: string, initialState: T) => {
  if (typeof window !== 'undefined') {
    const getStorageValue = window.localStorage.getItem(key);
    return getStorageValue ? JSON.parse(getStorageValue) : initialState;
  }
};
