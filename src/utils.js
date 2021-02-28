export const ppp = (prices, count) => {
  const price = Math.min(...prices.filter(isNonZero));
  return (price / count).toFixed(2);
};

const isNonZero = (p) => p !== 0;
