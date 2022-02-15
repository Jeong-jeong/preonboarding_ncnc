const PERCENT_NUMBER = 100;

export const getDiscount = (originalPrice: number, targetPrice: number) =>
  Math.floor(((originalPrice - targetPrice) / originalPrice) * PERCENT_NUMBER);
