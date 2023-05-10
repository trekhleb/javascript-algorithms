# JavaScript 演算法與資料結構

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
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
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

## 資料結構

資料結構是一個電腦用來組織和排序資料的特定方式，透過這樣的方式資料可以有效率地被讀取以及修改。更精確地說，一個資料結構是一個資料值的集合、彼此間的關係，函數或者運作可以應用於資料上。

* [鏈結串列](src/data-structures/linked-list)
* [貯列](src/data-structures/queue)
* [堆疊](src/data-structures/stack)
* [雜湊表](src/data-structures/hash-table)
* [堆](src/data-structures/heap)
* [優先貯列](src/data-structures/priority-queue)
* [字典樹](src/data-structures/trie)
* [樹](src/data-structures/tree)
  * [二元搜尋樹](src/data-structures/tree/binary-search-tree)
  * [AVL樹](src/data-structures/tree/avl-tree)
  * [紅黑樹](src/data-structures/tree/red-black-tree)
* [圖](src/data-structures/graph) (有向跟無向皆包含)
* [互斥集](src/data-structures/disjoint-set)

## 演算法

演算法是一個如何解決一類問題的非模糊規格。演算法是一個具有精確地定義了一系列運作的規則的集合

### 演算法議題分類

* **數學類**
  * [階層](src/algorithms/math/factorial)
  * [費伯納西數列](src/algorithms/math/fibonacci)
  * [Primality Test](src/algorithms/math/primality-test) (排除法)
  * [歐幾里得算法](src/algorithms/math/euclidean-algorithm) - 計算最大公因數 (GCD)
  * [最小公倍數](src/algorithms/math/least-common-multiple) (LCM)
  * [整數拆分](src/algorithms/math/integer-partition)
* **集合**
  * [笛卡爾積](src/algorithms/sets/cartesian-product) - 多個集合的乘積
  * [冪集合](src/algorithms/sets/power-set) - 所有集合的子集合
  * [排列](src/algorithms/sets/permutations) (有/無重複)
  * [组合](src/algorithms/sets/combinations) (有/無重複)
  * [洗牌算法](src/algorithms/sets/fisher-yates) - 隨機置換一有限序列
  * [最長共同子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * [最長遞增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * [背包問題](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * [最大子序列問題](src/algorithms/sets/maximum-subarray) - 暴力法以及動態編程的(Kadane's)版本
* **字串**
  * [萊文斯坦距離](src/algorithms/string/levenshtein-distance) - 兩序列間的最小編輯距離
  * [漢明距離](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * [KMP 演算法](src/algorithms/string/knuth-morris-pratt) - 子字串搜尋
  * [Rabin Karp 演算法](src/algorithms/string/rabin-karp) - 子字串搜尋
  * [最長共通子序列](src/algorithms/string/longest-common-substring)
* **搜尋**
  * [二元搜尋](src/algorithms/search/binary-search)
* **排序**
  * [氣泡排序](src/algorithms/sorting/bubble-sort)
  * [選擇排序](src/algorithms/sorting/selection-sort)
  * [插入排序](src/algorithms/sorting/insertion-sort)
  * [堆排序](src/algorithms/sorting/heap-sort)
  * [合併排序](src/algorithms/sorting/merge-sort)
  * [快速排序](src/algorithms/sorting/quick-sort)
  * [希爾排序](src/algorithms/sorting/shell-sort)
* **樹**
  * [深度優先搜尋](src/algorithms/tree/depth-first-search) (DFS)
  * [廣度優先搜尋](src/algorithms/tree/breadth-first-search) (BFS)
* **圖**
  * [深度優先搜尋](src/algorithms/graph/depth-first-search) (DFS)
  * [廣度優先搜尋](src/algorithms/graph/breadth-first-search) (BFS)
  * [Dijkstra 演算法](src/algorithms/graph/dijkstra) - 找到所有圖頂點的最短路徑
  * [Bellman-Ford 演算法](src/algorithms/graph/bellman-ford) - 找到所有圖頂點的最短路徑
  * [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * [Prim’s 演算法](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Kruskal’s 演算法](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [拓撲排序](src/algorithms/graph/topological-sorting) - DFS method
  * [關節點](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * [橋](src/algorithms/graph/bridges) - DFS based algorithm
  * [尤拉路徑及尤拉環](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * [漢彌爾頓環](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * [強連通組件](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * [旅行推銷員問題](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * [Floyd-Warshall algorithm](src/algorithms/graph/floyd-warshall) - 一次循环可以找出所有頂點之间的最短路徑
* **未分類**
  * [河內塔](src/algorithms/uncategorized/hanoi-tower)
  * [N-皇后問題](src/algorithms/uncategorized/n-queens)
  * [騎士走棋盤](src/algorithms/uncategorized/knight-tour)

### 演算法範型

演算法的範型是一個泛用方法或設計一類底層演算法的方式。它是一個比演算法的概念更高階的抽象化，就像是演算法是比電腦程式更高階的抽象化。

* **暴力法** - 尋遍所有的可能解然後選取最好的解
  * [最大子序列](src/algorithms/sets/maximum-subarray)
  * [旅行推銷員問題](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **貪婪法** - choose the best option at the current time, without any consideration for the future
  * [未定背包問題](src/algorithms/sets/knapsack-problem)
  * [Dijkstra 演算法](src/algorithms/graph/dijkstra) - 找到所有圖頂點的最短路徑
  * [Prim’s 演算法](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Kruskal’s 演算法](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **分治法** - divide the problem into smaller parts and then solve those parts
  * [二元搜尋](src/algorithms/search/binary-search)
  * [河內塔](src/algorithms/uncategorized/hanoi-tower)
  * [歐幾里得演算法](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * [排列](src/algorithms/sets/permutations) (有/無重複)
  * [组合](src/algorithms/sets/combinations) (有/無重複)
  * [合併排序](src/algorithms/sorting/merge-sort)
  * [快速排序](src/algorithms/sorting/quick-sort)
  * [樹深度優先搜尋](src/algorithms/tree/depth-first-search) (DFS)
  * [圖深度優先搜尋](src/algorithms/graph/depth-first-search) (DFS)
* **動態編程** - build up to a solution using previously found sub-solutions
  * [費伯納西數列](src/algorithms/math/fibonacci)
  * [萊溫斯坦距離](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * [最長共同子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * [最長共同子字串](src/algorithms/string/longest-common-substring)
  * [最長遞增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * [最短共同子序列](src/algorithms/sets/shortest-common-supersequence)
  * [0/1背包問題](src/algorithms/sets/knapsack-problem)
  * [整數拆分](src/algorithms/math/integer-partition)
  * [最大子序列](src/algorithms/sets/maximum-subarray)
  * [Bellman-Ford 演算法](src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
* **回溯法** - 用類似暴力法來嘗試產生所有可能解，但每次只在能滿足所有測試條件，且只有繼續產生子序列方案來產生的解決方案。否則回溯並尋找不同路徑的解決方案。
  * [漢彌爾頓迴路](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * [N-皇后問題](src/algorithms/uncategorized/n-queens)
  * [騎士走棋盤](src/algorithms/uncategorized/knight-tour)
* **Branch & Bound**

## 如何使用本知識庫

**安裝所有必須套件**

```
npm install
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

| 資料結構                | 存取      | 搜尋      | 插入      | 刪除      |
| ----------------------- | :-------: | :-------: | :-------: | :-------: |
| **陣列**                | 1         | n         | n         | n         |
| **堆疊**                | n         | n         | 1         | 1         |
| **貯列**                | n         | n         | 1         | 1         |
| **鏈結串列**            | n         | n         | 1         | 1         |
| **雜湊表**              | -         | n         | n         | n         |
| **二元搜尋樹**          | n         | n         | n         | n         |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |
| **紅黑樹**              | log(n)    | log(n)    | log(n)    | log(n)    |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |

### 陣列排序演算法複雜度

| 名稱                   | 最佳      | 平均      | 最差          | 記憶體    | 穩定      |
| ---------------------- | :-------: | :-------: | :-----------: | :-------: | :-------: |
| **氣泡排序**           | n         | n^2       | n^2           | 1         | Yes       |
| **插入排序**           | n         | n^2       | n^2           | 1         | Yes       |
| **選擇排序**           | n^2       | n^2       | n^2           | 1         | No        |
| **Heap 排序**          | n log(n)  | n log(n)  | n log(n)      | 1         | No        |
| **合併排序**           | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |
| **快速排序**           | n log(n)  | n log(n)  | n^2           | log(n)    | No        |
| **希爾排序**           | n log(n)  | 由gap sequence決定   | n (log(n))^2  | 1         | No        |

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
