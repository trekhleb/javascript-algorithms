# Best Time to Buy and Sell Stock

## Task Description

Say you have an array prices for which the `i`-th element is the price of a given stock on day `i`.

Find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

> Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example #1**

```
Input: [7, 1, 5, 3, 6, 4]
Output: 7
```

_Explanation:_ Buy on day `2` (`price = 1`) and sell on day `3` (`price = 5`), `profit = 5-1 = 4`. Then buy on day `4` (`price = 3`) and sell on day `5` (`price = 6`), `profit = 6-3 = 3`.

**Example #2**

```
Input: [1, 2, 3, 4, 5]
Output: 4
```

_Explanation:_ Buy on day `1` (`price = 1`) and sell on day `5` (`price = 5`), `profit = 5-1 = 4`. Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

**Example #3**

```
Input: [7, 6, 4, 3, 1]
Output: 0
```

_Explanation:_ In this case, no transaction is done, i.e. max `profit = 0`.

## Possible Solutions

### Divide and conquer approach `O(2^n)`

We may try **all** combinations of buying and selling and find out the most profitable one by applying _divide and conquer approach_.

Let's say we have an array of prices `[7, 6, 4, 3, 1]` and we're on the _1st_ day of trading (at the very beginning of the array). At this point we may say that the overall maximum profit would be the _maximum_ of two following values:

1. _Option 1: Keep the money_ → profit would equal to the profit from buying/selling the rest of the stocks → `keepProfit = profit([6, 4, 3, 1])`.
2. _Option 2: Buy/sell at current price_ → profit in this case would equal to the profit from buying/selling the rest of the stocks plus (or minus, depending on whether we're selling or buying) the current stock price → `buySellProfit = -7 + profit([6, 4, 3, 1])`.

The overall profit would be equal to → `overalProfit = Max(keepProfit, buySellProfit)`.

As you can see the `profit([6, 4, 3, 1])` task is being solved in the same recursive manner.

> See the full code example in [dqBestTimeToBuySellStocks.js](dqBestTimeToBuySellStocks.js)

#### Time Complexity

As you may see, every recursive call will produce _2_ more recursive branches. The depth of the recursion will be `n` (size of prices array) and thus, the time complexity will equal to `O(2^n)`.

As you may see, this is very inefficient. For example for just `20` prices the number of recursive calls will be somewhere close to `2M`!

#### Additional Space Complexity

If we avoid cloning the prices array between recursive function calls and will use the array pointer then additional space complexity will be proportional to the depth of the recursion: `O(n)`

## Peak Valley Approach `O(n)`

If we plot the prices array (i.e. `[7, 1, 5, 3, 6, 4]`) we may notice that the points of interest are the consecutive valleys and peaks

![Peak Valley Approach](https://leetcode.com/media/original_images/122_maxprofit_1.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

So, if we will track the growing price and will sell the stocks immediately _before_ the price goes down we'll get the maximum profit (remember, we bought the stock in the valley at its low price).

> See the full code example in [peakvalleyBestTimeToBuySellStocks.js](peakvalleyBestTimeToBuySellStocks.js)

#### Time Complexity

Since the algorithm requires only one pass through the prices array, the time complexity would equal `O(n)`.

#### Additional Space Complexity

Except of the prices array itself the algorithm consumes the constant amount of memory. Thus, additional space complexity is `O(1)`.

## Accumulator Approach `O(n)`

There is even simpler approach exists. Let's say we have the prices array which looks like this `[1, 7, 2, 3, 6, 7, 6, 7]`:

![Simple One Pass](https://leetcode.com/media/original_images/122_maxprofit_2.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

You may notice, that we don't even need to keep tracking of a constantly growing price. Instead, we may simply add the price difference for _all growing segments_ of the chart which eventually sums up to the highest possible profit,

> See the full code example in [accumulatorBestTimeToBuySellStocks.js](accumulatorBestTimeToBuySellStocks.js)

#### Time Complexity

Since the algorithm requires only one pass through the prices array, the time complexity would equal `O(n)`.

#### Additional Space Complexity

Except of the prices array itself the algorithm consumes the constant amount of memory. Thus, additional space complexity is `O(1)`.

## References

- [Best Time to Buy and Sell Stock on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
