# 排列

當順序無關緊要時，它就是 **組合**。

當順序重要時，它就是 **排列**。

**"保險箱的組合是472"**。我們關心順序。`724` 將不起作用，`247` 也將不起作用。它必須剛好是 `4-7-2`。

## 排列無重複

排列，也稱為"排列編號"或"順序"，是將有序列表 `S` 的元素重新排列為與 `S` 本身一一對應的形式。

以下是字符串 `ABC` 的排列。

`ABC ACB BAC BCA CBA CAB`

舉例來說，例如跑步比賽中的前三個人：您不能排在第一和第二。

**組合數**

```
n * (n-1) * (n -2) * ... * 1 = n!
```

## 重複排列

當允許重複時，我們可以進行重複排列。

例如，下面的鎖：可能是 `333`。

![Permutation Lock](https://www.mathsisfun.com/combinatorics/images/combination-lock.jpg)

**組合數**

```
n * n * n ... (r times) = n^r
```

## 備忘單

排列備忘單

![Permutations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*JNK-n0Pt0Vbxk0lxVpgT5A.png)

組合備忘單

![Combinations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*7cFRn8jW4g_91YgDAbmxRQ.png)

排列/組合演算法概念

![Algorithms Idea](https://cdn-images-1.medium.com/max/2000/1*vLsSsZMnesCFPCYTYMbxrQ.png)


## 參考文獻

- [Math Is Fun](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- [Permutations/combinations cheat sheets](https://medium.com/@trekhleb/permutations-combinations-algorithms-cheat-sheet-68c14879aba5)