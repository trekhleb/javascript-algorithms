/**
 * Finds the maximum profit from selling and buying the stocks.
 * DYNAMIC PROGRAMMING APPROACH.
 *
 * @param {number[]} prices - Array of stock prices, i.e. [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Visiting callback to calculate the number of iterations.
 * @return {number} - The maximum profit
 */
const dpBestTimeToBuySellStocks = (prices, visit = () => {}) => {
  visit();
  let lastBuy = -prices[0];
  let lastSold = 0;

  for (let day = 1; day < prices.length; day += 1) {
    visit();
    const curBuy = Math.max(lastBuy, lastSold - prices[day]);
    const curSold = Math.max(lastSold, lastBuy + prices[day]);
    lastBuy = curBuy;
    lastSold = curSold;
  }

  return lastSold;
};

export default dpBestTimeToBuySellStocks;
