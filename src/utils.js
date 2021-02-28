/**
 * @param {number[]} prices
 * @param {number}
 */
export const ppp = (prices, count) => {
  const price = Math.min(...prices.filter(isValidPrice));
  return (price / count).toFixed(2);
};

const isValidPrice = (p) => p !== undefined && p !== 0;
