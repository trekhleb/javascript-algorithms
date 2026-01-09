/**
 * Finds the maximum profit from selling and buying the stocks.
 * Greedy approach to accumulate profit only on price increases.
 *
 * @param {number[]} prices - Array of stock prices, i.e. [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Visiting callback to calculate the number of iterations.
 * @return {number} - The maximum profit
 */
const bestTimeToBuySellStocks = (prices, visit = () => {}) => {
  let profit = 0;
  for (let day = 1; day < prices.length; day++) {
    visit();
    // Add only if today's price is higher than yesterday's
    if (prices[day] > prices[day - 1]) {
      profit += prices[day] - prices[day - 1];
    }
  }
  return profit;
};

export default bestTimeToBuySellStocks;
