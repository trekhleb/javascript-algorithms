/**
 * Finds the maximum profit from selling and buying the stocks.
 * DIVIDE & CONQUER APPROACH.
 *
 * @param {number[]} prices - Array of stock prices, i.e. [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Visiting callback to calculate the number of iterations.
 * @return {number} - The maximum profit
 */
const dqBestTimeToBuySellStocks = (prices, visit = () => {}) => {
  /**
   * Recursive implementation of the main function. It is hidden from the users.
   *
   * @param {boolean} buy - Whether we're allow to sell or to buy now
   * @param {number} day - Current day of trading (current index of prices array)
   * @returns {number} - Max profit from buying/selling
   */
  const recursiveBuyerSeller = (buy, day) => {
    // Registering the recursive call visit to calculate the complexity.
    visit();

    // Quitting the recursion if this is the last day of trading (prices array ended).
    if (day === prices.length) {
      return 0;
    }

    // If we're buying - we're loosing money (-1), if we're selling we're getting money (+1).
    const operationSign = buy ? -1 : +1;
    return Math.max(
      // Option 1: Don't do anything.
      recursiveBuyerSeller(buy, day + 1),
      // Option 2: Sell or Buy at the current price.
      operationSign * prices[day] + recursiveBuyerSeller(!buy, day + 1),
    );
  };

  const buy = true;
  const day = 0;

  return recursiveBuyerSeller(buy, day);
};

export default dqBestTimeToBuySellStocks;
