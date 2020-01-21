# JavaScript 演算法與資料結構

[![build status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

這個知識庫包含許多 JavaScript 的資料結構與演算法的基礎範例。
每個演算法和資料結構都有其個別的文件，內有相關的解釋以及更多相關的文章或Youtube影片連結。

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md)

## 資料結構

資料結構是一個電腦用來組織和排序資料的特定方式，透過這樣的方式資料可以有效率地被讀取以及修改。更精確地說，一個資料結構是一個資料值的集合、彼此間的關係，函數或者運作可以應用於資料上。

`B` - 初學者, `A` - 進階

* `B` [鏈結串列](src/data-structures/linked-list)
* `B` [雙向鏈接串列](src/data-structures/doubly-linked-list)
* `B` [貯列](src/data-structures/queue)
* `B` [堆疊](src/data-structures/stack)
* `B` [雜湊表](src/data-structures/hash-table)
* `B` [堆](src/data-structures/heap)
* `B` [優先貯列](src/data-structures/priority-queue)
* `A` [字典樹](src/data-structures/trie)
* `A` [樹](src/data-structures/tree)
  * `A` [二元搜尋樹](src/data-structures/tree/binary-search-tree)
  * `A` [AVL樹](src/data-structures/tree/avl-tree)
  * `A` [紅黑樹](src/data-structures/tree/red-black-tree)
  * `A` [線段書](src/data-structures/tree/segment-tree) - 有 最小/最大/總和 等範圍查詢例子
  * `A` [樹狀數組](src/data-structures/tree/fenwick-tree) (二元索引樹)
* `A` [圖](src/data-structures/graph) (有向跟無向皆包含)
* `A` [互斥集](src/data-structures/disjoint-set)
* `A` [布隆過濾器](src/data-structures/bloom-filter)

## 演算法

演算法是一個如何解決一類問題的非模糊規格。演算法是一個具有精確地定義了一系列運作的規則的集合

`B` - 初學者, `A` - 進階

### 演算法議題分類

* **數學類**
  * `B` [位元運算](src/algorithms/math/bits) - 設值/取得/更新/清除位元, 乘以/除以 2, 取負數 etc.
  * `B` [階層](src/algorithms/math/factorial)
  * `B` [費伯納西數列](src/algorithms/math/fibonacci)
  * `B` [Primality Test](src/algorithms/math/primality-test) (排除法)
  * `B` [歐幾里得算法](src/algorithms/math/euclidean-algorithm) - 計算最大公因數 (GCD)
  * `B` [最小公倍數](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [質數判斷](src/algorithms/math/sieve-of-eratosthenes) - 找一個區間內的所有質數
  * `B` [判斷 2 的次方數](src/algorithms/math/is-power-of-two) - 判斷數字是否爲 2 的次方數 (naive and bitwise algorithms)
  * `B` [巴斯卡三角形](src/algorithms/math/pascal-triangle)
  * `B` [複數](src/algorithms/math/complex-number) - 複數與複數的基本運算
  * `B` [弧度](src/algorithms/math/radian) - 弧度與向後轉換
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `A` [整數拆分](src/algorithms/math/integer-partition)
  * `A` [平方根](src/algorithms/math/square-root) - 牛頓法
  * `A` [割圓術 (劉徽)](src/algorithms/math/liu-hui) - 使用 N 邊趨近於 π
  * `A` [離散傅立葉變換](src/algorithms/math/fourier-transform) - 將時間（信號）的函數分解成組成它的頻率
* **集合**
  * `B` [笛卡爾積](src/algorithms/sets/cartesian-product) - 多個集合的乘積
  * `B` [洗牌算法](src/algorithms/sets/fisher-yates) - 隨機置換一有限序列
  * `A` [冪集合](src/algorithms/sets/power-set) - 所有集合的子集合
  * `A` [排列](src/algorithms/sets/permutations) (有/無重複)
  * `A` [组合](src/algorithms/sets/combinations) (有/無重複)
  * `A` [最長共同子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最長遞增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短共同子序列](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [背包問題](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [最大子序列問題](src/algorithms/sets/maximum-subarray) - 暴力法以及動態編程的(Kadane's)版本
  * `A` [组合總和](src/algorithms/sets/combination-sum) - 找到形成特定總和的所有組合
* **字串**
  * `B` [漢明距離](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [萊文斯坦距離](src/algorithms/string/levenshtein-distance) - 兩序列間的最小編輯距離
  * `A` [KMP 演算法](src/algorithms/string/knuth-morris-pratt) - 子字串搜尋
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp 演算法](src/algorithms/string/rabin-karp) - 子字串搜尋
  * `A` [最長共通子序列](src/algorithms/string/longest-common-substring)
  * `A` [正則表達式匹配](src/algorithms/string/regular-expression-matching)
* **搜尋**
  * `B` [線性搜尋](src/algorithms/search/linear-search)
  * `B` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `B` [二元搜尋](src/algorithms/search/binary-search)
  * `B` [插補搜尋](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **排序**
  * `B` [氣泡排序](src/algorithms/sorting/bubble-sort)
  * `B` [選擇排序](src/algorithms/sorting/selection-sort)
  * `B` [插入排序](src/algorithms/sorting/insertion-sort)
  * `B` [堆排序](src/algorithms/sorting/heap-sort)
  * `B` [合併排序](src/algorithms/sorting/merge-sort)
  * `B` [快速排序](src/algorithms/sorting/quick-sort)
  * `B` [希爾排序](src/algorithms/sorting/shell-sort)
  * `B` [計數排序](src/algorithms/sorting/counting-sort)
  * `B` [基數排序](src/algorithms/sorting/radix-sort)
* **鏈結串列**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **樹**
  * `B` [深度優先搜尋](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [廣度優先搜尋](src/algorithms/tree/breadth-first-search) (BFS)
* **圖**
  * `B` [深度優先搜尋](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [廣度優先搜尋](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s 演算法](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Dijkstra 演算法](src/algorithms/graph/dijkstra) - 找到所有圖頂點的最短路徑
  * `A` [Bellman-Ford 演算法](src/algorithms/graph/bellman-ford) - 找到所有圖頂點的最短路徑
  * `A` [Floyd-Warshall algorithm](src/algorithms/graph/floyd-warshall) - 一次循环可以找出所有頂點之间的最短路徑
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s 演算法](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [拓撲排序](src/algorithms/graph/topological-sorting) - DFS method
  * `A` [關節點](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [橋](src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [尤拉路徑及尤拉環](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [漢彌爾頓環](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [強連通組件](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [旅行推銷員問題](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **密碼學**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
* **機器學習**
  * `B` [奈米神經元](https://github.com/trekhleb/nano-neuron) - 7 個簡單地的 JS 函數，說明機器如何實際學習(向前/向後傳播)
* **未分類**
  * `B` [河內塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [旋轉矩陣](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game) - 回溯、動態規劃 (從上至下 + 從下至上)與貪婪的範例
  * `B` [不同的路徑](src/algorithms/uncategorized/unique-paths) - 回溯、動態規劃與巴斯卡三角形的範例
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `A` [N-皇后問題](src/algorithms/uncategorized/n-queens)
  * `A` [騎士走棋盤](src/algorithms/uncategorized/knight-tour)

### 演算法範型

演算法的範型是一個泛用方法或設計一類底層演算法的方式。它是一個比演算法的概念更高階的抽象化，就像是演算法是比電腦程式更高階的抽象化。

* **暴力法** - 尋遍所有的可能解然後選取最好的解
  * `B` [線性搜尋](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [最大子序列](src/algorithms/sets/maximum-subarray)
  * `A` [旅行推銷員問題](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **貪婪法** - 不考慮未來的情況下，在現在選擇一個最佳的選項
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [未定背包問題](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra 演算法](src/algorithms/graph/dijkstra) - 找到所有圖頂點的最短路徑
  * `A` [Prim’s 演算法](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s 演算法](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **分治法** - divide the problem into smaller parts and then solve those parts
  * `B` [二元搜尋](src/algorithms/search/binary-search)
  * `B` [河內塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [巴斯克三角形](src/algorithms/math/pascal-triangle)
  * `B` [歐幾里得演算法](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [合併排序](src/algorithms/sorting/merge-sort)
  * `B` [快速排序](src/algorithms/sorting/quick-sort)
  * `B` [樹深度優先搜尋](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [圖深度優先搜尋](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `A` [排列](src/algorithms/sets/permutations) (有/無重複)
  * `A` [组合](src/algorithms/sets/combinations) (有/無重複)
* **動態編程** - build up to a solution using previously found sub-solutions
  * `B` [費伯納西數列](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [不同的路徑](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [萊溫斯坦距離](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [最長共同子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最長共同子字串](src/algorithms/string/longest-common-substring)
  * `A` [最長遞增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短共同子序列](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1背包問題](src/algorithms/sets/knapsack-problem)
  * `A` [整數拆分](src/algorithms/math/integer-partition)
  * `A` [最大子序列](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford 演算法](src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * `A` [正則表達式匹配](src/algorithms/string/regular-expression-matching)

* **回溯法** - 用類似暴力法來嘗試產生所有可能解，但每次只在能滿足所有測試條件，且只有繼續產生子序列方案來產生的解決方案。否則回溯並尋找不同路徑的解決方案。
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [不同的路徑](src/algorithms/uncategorized/unique-paths)
  * `B` [冪集合](src/algorithms/sets/power-set) - all subsets of a set
  * [漢彌爾頓迴路](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-皇后問題](src/algorithms/uncategorized/n-queens)
  * `A` [騎士走棋盤](src/algorithms/uncategorized/knight-tour)
  * `A` [組合總和](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Branch & Bound**

## 如何使用本知識庫

**安裝所有必須套件**

```
npm install
```

**執行 ESLint**

```
npm run lint
```

**執行所有測試**
```
npm test
```

**以名稱執行該測試**
```
npm test -- 'LinkedList'
```
**練習場**

你可以透過在`./src/playground/playground.js`裡面的檔案練習資料結構以及演算法，並且撰寫在`./src/playground/__test__/playground.test.js`裡面的測試程式。

接著直接執行下列的指令來測試你練習的 code 是否如預期運作：

```
npm test -- 'playground'
```

## 有用的資訊

### 參考

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### 大 O 標記

特別用大 O 標記演算法增長度的排序。

![Big O 表](./assets/big-o-graph.png)

資料來源: [Big O Cheat Sheet](http://bigocheatsheet.com/).

下列列出幾個常用的 Big O 標記以及其不同大小資料量輸入後的運算效能比較。

| Big O 標記     | 10個資料量需花費的時間       | 100個資料量需花費的時間       | 1000個資料量需花費的時間        |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### 資料結構運作複雜度

| 資料結構              | 存取      | 搜尋      | 插入    | 刪除      | 註解        |
| -------------------- | :-------: | :-----: | :-----: | :-------: | :-------:|
| **陣列**              | 1         | n       | n       | n         |           |
| **堆疊**              | n         | n       | 1       | 1         |           |
| **貯列**              | n         | n       | 1       | 1         |           |
| **鏈結串列**          | n         | n        | 1       | 1         |           |
| **雜湊表**            | -         | n        | n       | n         | 在完美的雜湊函式下，只要花費 O(1) |
| **二元搜尋樹**         | n         | n        | n       | n         | 如果是平衡樹，只要花費 O(log(n)) |
| **B-Tree**           | log(n)    | log(n)    | log(n)  | log(n)    |           |
| **紅黑樹**            | log(n)    | log(n)    | log(n)  | log(n)    |           |
| **AVL Tree**         | log(n)    | log(n)    | log(n)  | log(n)    |           |
| **布隆過濾器**         | -         | 1         | 1       | _          | 搜尋時可能會有錯誤 |
### 陣列排序演算法複雜度

| 名稱                | 最佳      | 平均      | 最差          | 記憶體    | 穩定      | 註解      |
| ------------------ | :-------: | :-------: | :-----------: | :-------: | :-------: | :-------: |
| **氣派排序**         | n         | n^2       | n^2           | 1         | Yes       |        |
| **插入排序**         | n         | n^2       | n^2           | 1         | Yes       |        |
| **選擇排序**         | n^2       | n^2       | n^2           | 1         | No        |        |
| **Heap 排序**       | n log(n)  | n log(n)  | n log(n)      | 1         | No        |        |
| **合併排序**         | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |        |
| **快速排序**         | n log(n)  | n log(n)  | n^2           | log(n)    | No        | 快速排序通常在 O(log(n)) 的時間完成 |
| **希爾排序**         | n log(n)  | 由gap sequence決定   | n (log(n))^2  | 1         | No        |        |
| **計數排序**         | n + r     | n + r     | n + r         | n + r     | Yes       | r - biggest number in array |
| **基數排序**         | n * k     | n * k     | n * k         | n + k     | Yes       | k - length of longest key |