/**
 * Finds the maximum profit from selling and buying the stocks.
 * PEAK VALLEY APPROACH.
 *
 * @param {number[]} prices - Array of stock prices, i.e. [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Visiting callback to calculate the number of iterations.
 * @return {number} - The maximum profit
 */
const peakvalleyBestTimeToBuySellStocks = (prices, visit = () => {}) => {
  visit();
  let profit = 0;
  let low = prices[0];
  let high = prices[0];

  prices.slice(1).forEach((currentPrice) => {
    visit();
    if (currentPrice < high) {
      // If price went down, we need to sell.
      profit += high - low;
      low = currentPrice;
      high = currentPrice;
    } else {
      // If price went up, we don't need to do anything but increase a high record.
      high = currentPrice;
    }
  });

  // In case if price went up during the last day
  // and we didn't have chance to sell inside the forEach loop.
  profit += high - low;

  return profit;
};

export default peakvalleyBestTimeToBuySellStocks;
