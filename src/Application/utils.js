/**
 * @param {number[]} prices
 * @param {number}
 */
export const ppp = (prices, count) => {
  const validPrices = prices.filter(isValidPrice);
  if (validPrices.length === 0) {
    return "No valid price";
  }

  return (Math.min(...validPrices) / count).toFixed(2);
};

const isValidPrice = (p) => p !== undefined && p !== 0;
