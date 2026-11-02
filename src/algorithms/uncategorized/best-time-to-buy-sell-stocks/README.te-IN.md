# Best Time to Buy and Sell Stock

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

## Task Description

మీ దగ్గర prices అనే array ఉంది అనుకోండి — అందులో `i`-th element అంటే రోజు `i` న ఒక stock price.

Maximum profit కనుక్కోండి. ఎన్ని transactions అయినా చేయొచ్చు (అంటే stock లో ఒక share ని చాలాసార్లు కొని, అమ్మొచ్చు).

> Note: ఒకేసారి చాలా transactions చేయకూడదు (అంటే మళ్ళీ కొనే ముందు stock అమ్మేయాలి).

**Example #1**

```
Input: [7, 1, 5, 3, 6, 4]
Output: 7
```

_Explanation:_ రోజు `2` న కొనండి (`price = 1`), రోజు `3` న అమ్మండి (`price = 5`), `profit = 5-1 = 4`. తర్వాత రోజు `4` న కొనండి (`price = 3`), రోజు `5` న అమ్మండి (`price = 6`), `profit = 6-3 = 3`.

**Example #2**

```
Input: [1, 2, 3, 4, 5]
Output: 4
```

_Explanation:_ రోజు `1` న కొనండి (`price = 1`), రోజు `5` న అమ్మండి (`price = 5`), `profit = 5-1 = 4`. గమనించండి — రోజు 1 న కొని, రోజు 2 న మళ్ళీ కొని, తర్వాత అమ్మడం కుదరదు, ఎందుకంటే అలా చేస్తే ఒకేసారి చాలా transactions చేసినట్టు. మళ్ళీ కొనే ముందు అమ్మేయాలి.

**Example #3**

```
Input: [7, 6, 4, 3, 1]
Output: 0
```

_Explanation:_ ఈ case లో ఏ transaction చేయము, అంటే max `profit = 0`.

## Possible Solutions

### Divide and conquer approach `O(2^n)`

కొనడం, అమ్మడం యొక్క **అన్ని** combinations ట్రై చేసి, _divide and conquer approach_ వాడి ఎక్కువ profit వచ్చేది కనుక్కోవచ్చు.

మన దగ్గర prices array `[7, 6, 4, 3, 1]` ఉంది, మనం trading లో _1st_ రోజు (array మొదట్లో) ఉన్నాం అనుకుందాం. ఈ point దగ్గర మొత్తం maximum profit అంటే ఈ రెండు values లో _maximum_ అని చెప్పొచ్చు:

1. _Option 1: డబ్బు దగ్గరే ఉంచుకోవడం_ → profit అంటే మిగతా stocks కొని/అమ్మితే వచ్చే profit → `keepProfit = profit([6, 4, 3, 1])`.
2. _Option 2: ఇప్పటి price కి కొనడం/అమ్మడం_ → ఈ case లో profit అంటే మిగతా stocks కొని/అమ్మితే వచ్చే profit కి ఇప్పటి stock price కలపడం (లేదా తీసేయడం, అమ్ముతున్నామా కొంటున్నామా అనేదాన్ని బట్టి) → `buySellProfit = -7 + profit([6, 4, 3, 1])`.

మొత్తం profit → `overallProfit = Max(keepProfit, buySellProfit)`.

చూడొచ్చు — `profit([6, 4, 3, 1])` task ని కూడా ఇదే recursive పద్ధతిలో solve చేస్తాం.

> పూర్తి code example కోసం [dqBestTimeToBuySellStocks.js](dqBestTimeToBuySellStocks.js) చూడండి

#### Time Complexity

చూడొచ్చు — ప్రతి recursive call ఇంకో _2_ recursive branches తయారుచేస్తుంది. Recursion లోతు `n` (prices array సైజ్) ఉంటుంది, కాబట్టి time complexity `O(2^n)`.

చూడొచ్చు, ఇది చాలా inefficient. ఉదాహరణకి కేవలం `20` prices కే recursive calls దాదాపు `2M` (20 లక్షలు) దగ్గర ఉంటాయి!

#### Additional Space Complexity

Recursive function calls మధ్య prices array ని clone చేయకుండా, array pointer వాడితే — additional space complexity recursion లోతుకి proportional గా ఉంటుంది: `O(n)`

## Peak Valley Approach `O(n)`

Prices array (అంటే `[7, 1, 5, 3, 6, 4]`) ని graph గా గీస్తే, ముఖ్యమైన points అంటే వరుసగా వచ్చే లోయలు (valleys), శిఖరాలు (peaks) అని గమనించొచ్చు

![Peak Valley Approach](https://leetcode.com/media/original_images/122_maxprofit_1.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

కాబట్టి, పెరుగుతున్న price ని ట్రాక్ చేస్తూ, price తగ్గే _ముందే_ వెంటనే stocks అమ్మేస్తే maximum profit వస్తుంది (గుర్తుపెట్టుకోండి, stock ని లోయలో తక్కువ price కి కొన్నాం).

> పూర్తి code example కోసం [peakvalleyBestTimeToBuySellStocks.js](peakvalleyBestTimeToBuySellStocks.js) చూడండి

#### Time Complexity

Algorithm prices array మీద ఒక్కసారి వెళ్తే చాలు కాబట్టి, time complexity `O(n)`.

#### Additional Space Complexity

Prices array కాకుండా algorithm constant memory మాత్రమే వాడుతుంది. కాబట్టి, additional space complexity `O(1)`.

## Accumulator Approach `O(n)`

ఇంకా సింపుల్ పద్ధతి కూడా ఉంది. మన దగ్గర prices array `[1, 7, 2, 3, 6, 7, 6, 7]` ఇలా ఉంది అనుకుందాం:

![Simple One Pass](https://leetcode.com/media/original_images/122_maxprofit_2.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

గమనించొచ్చు — నిరంతరం పెరుగుతున్న price ని ట్రాక్ చేయాల్సిన అవసరం కూడా లేదు. బదులుగా, chart లో _పెరుగుతున్న అన్ని భాగాల_ price తేడాని కలుపుతూ వెళ్తే చాలు — చివరికి అదే వీలైనంత ఎక్కువ profit,

> పూర్తి code example కోసం [accumulatorBestTimeToBuySellStocks.js](accumulatorBestTimeToBuySellStocks.js) చూడండి

#### Time Complexity

Algorithm prices array మీద ఒక్కసారి వెళ్తే చాలు కాబట్టి, time complexity `O(n)`.

#### Additional Space Complexity

Prices array కాకుండా algorithm constant memory మాత్రమే వాడుతుంది. కాబట్టి, additional space complexity `O(1)`.

## References

- [LeetCode లో Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
