# JavaScript 演算法與資料結構

> 🇺🇦 烏克蘭正遭受攻擊 (https://war.ukraine.ua/) — 由俄羅斯軍隊發動。平民遭到傷害，住宅區被轟炸。
> - 捐助烏克蘭：
>   - [Serhiy Prytula 慈善基金會](https://prytulafoundation.org/en/)
>   - [Come Back Alive 慈善基金會](https://savelife.in.ua/en/donate-en/)
>   - [烏克蘭國家銀行（募款專戶）](https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi)
> - 更多資訊請見 [war.ukraine.ua](https://war.ukraine.ua/) 與 [烏克蘭外交部 (MFA)](https://twitter.com/MFA_Ukraine)

<hr/>

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

這個知識庫包含許多 JavaScript 的資料結構與演算法的基礎範例。
每個演算法和資料結構都有其個別的文件，內有相關的解釋以及更多相關的文章或Youtube影片連結。

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_繁體中文_](README.zh-TW.md),
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
[_Deutsch_](README.de-DE.md),
[_Uzbek_](README.uz-UZ.md)
[_עברית_](README.he-IL.md)

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
* [布隆過濾器](src/data-structures/bloom-filter)
* [LRU 快取](src/data-structures/lru-cache/) - 最近最少使用（Least Recently Used）快取
 ## 演算法

演算法是針對一類問題提供明確解決方案的規範。  
它是一組精確定義的規則，用來描述一系列操作步驟。

`B` - 初學者，`A` - 進階

### 按主題分類的演算法

* **數學類**
  * `B` [位元運算](src/algorithms/math/bits) - 設定/取得/更新/清除位元、乘除以二、取負數等。
  * `B` [二進位浮點數](src/algorithms/math/binary-floating-point) - 浮點數的二進位表示。
  * `B` [階乘](src/algorithms/math/factorial)
  * `B` [費波那契數列](src/algorithms/math/fibonacci) - 經典與閉合形式。
  * `B` [質因數分解](src/algorithms/math/prime-factors) - 找出質因數並使用 Hardy-Ramanujan 定理計算。
  * `B` [質數測試](src/algorithms/math/primality-test) (試除法)
  * `B` [歐幾里得演算法](src/algorithms/math/euclidean-algorithm) - 計算最大公因數 (GCD)
  * `B` [最小公倍數](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [埃拉托斯特尼篩法](src/algorithms/math/sieve-of-eratosthenes) - 找出所有小於給定值的質數
  * `B` [二的冪檢查](src/algorithms/math/is-power-of-two)
  * `B` [帕斯卡三角形](src/algorithms/math/pascal-triangle)
  * `B` [複數運算](src/algorithms/math/complex-number)
  * `B` [弧度與角度](src/algorithms/math/radian)
  * `B` [快速冪算法](src/algorithms/math/fast-powering)
  * `B` [霍納法則](src/algorithms/math/horner-method)
  * `B` [矩陣](src/algorithms/math/matrix)
  * `B` [歐幾里得距離](src/algorithms/math/euclidean-distance)
  * `A` [整數拆分](src/algorithms/math/integer-partition)
  * `A` [平方根](src/algorithms/math/square-root)
  * `A` [劉徽圓周率算法](src/algorithms/math/liu-hui)
  * `A` [離散傅立葉變換](src/algorithms/math/fourier-transform)
* **集合類**
  * `B` [笛卡爾積](src/algorithms/sets/cartesian-product)
  * `B` [費雪耶茨洗牌法](src/algorithms/sets/fisher-yates)
  * `A` [冪集](src/algorithms/sets/power-set)
  * `A` [排列](src/algorithms/sets/permutations)
  * `A` [組合](src/algorithms/sets/combinations)
  * `A` [最長公共子序列](src/algorithms/sets/longest-common-subsequence)
  * `A` [最長遞增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短公共超序列](src/algorithms/sets/shortest-common-supersequence)
  * `A` [背包問題](src/algorithms/sets/knapsack-problem)
  * `A` [最大子序列問題](src/algorithms/sets/maximum-subarray)
  * `A` [組合總和](src/algorithms/sets/combination-sum)
* **字串類**
  * `B` [漢明距離](src/algorithms/string/hamming-distance)
  * `B` [回文檢查](src/algorithms/string/palindrome)
  * `A` [萊文斯坦距離](src/algorithms/string/levenshtein-distance)
  * `A` [KMP 演算法](src/algorithms/string/knuth-morris-pratt)
  * `A` [Z 演算法](src/algorithms/string/z-algorithm)
  * `A` [Rabin Karp 演算法](src/algorithms/string/rabin-karp)
  * `A` [最長公共子字串](src/algorithms/string/longest-common-substring)
  * `A` [正則表達式匹配](src/algorithms/string/regular-expression-matching)
* **搜尋類**
  * `B` [線性搜尋](src/algorithms/search/linear-search)
  * `B` [跳躍搜尋](src/algorithms/search/jump-search)
  * `B` [二元搜尋](src/algorithms/search/binary-search)
  * `B` [內插搜尋](src/algorithms/search/interpolation-search)
* **排序類**
  * `B` [氣泡排序](src/algorithms/sorting/bubble-sort)
  * `B` [選擇排序](src/algorithms/sorting/selection-sort)
  * `B` [插入排序](src/algorithms/sorting/insertion-sort)
  * `B` [堆排序](src/algorithms/sorting/heap-sort)
  * `B` [合併排序](src/algorithms/sorting/merge-sort)
  * `B` [快速排序](src/algorithms/sorting/quick-sort)
  * `B` [希爾排序](src/algorithms/sorting/shell-sort)
  * `B` [計數排序](src/algorithms/sorting/counting-sort)
  * `B` [基數排序](src/algorithms/sorting/radix-sort)
  * `B` [桶排序](src/algorithms/sorting/bucket-sort)
* **鏈表**
  * `B` [正向遍歷](src/algorithms/linked-list/traversal)
  * `B` [反向遍歷](src/algorithms/linked-list/reverse-traversal)
* **樹**
  * `B` [深度優先搜尋](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [廣度優先搜尋](src/algorithms/tree/breadth-first-search) (BFS)
* **圖**
  * `B` [深度優先搜尋](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [廣度優先搜尋](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal 演算法](src/algorithms/graph/kruskal)
  * `A` [Dijkstra 演算法](src/algorithms/graph/dijkstra)
  * `A` [Bellman-Ford 演算法](src/algorithms/graph/bellman-ford)
  * `A` [Floyd-Warshall 演算法](src/algorithms/graph/floyd-warshall)
  * `A` [環檢測](src/algorithms/graph/detect-cycle)
  * `A` [Prim 演算法](src/algorithms/graph/prim)
  * `A` [拓撲排序](src/algorithms/graph/topological-sorting)
  * `A` [關節點](src/algorithms/graph/articulation-points)
  * `A` [橋](src/algorithms/graph/bridges)
  * `A` [歐拉路徑與歐拉回路](src/algorithms/graph/eulerian-path)
  * `A` [哈密頓迴圈](src/algorithms/graph/hamiltonian-cycle)
  * `A` [強連通分量](src/algorithms/graph/strongly-connected-components)
  * `A` [旅行推銷員問題](src/algorithms/graph/travelling-salesman)
* **密碼學**
  * `B` [多項式雜湊](src/algorithms/cryptography/polynomial-hash)
  * `B` [鐵軌密碼](src/algorithms/cryptography/rail-fence-cipher)
  * `B` [凱撒密碼](src/algorithms/cryptography/caesar-cipher)
  * `B` [Hill 密碼](src/algorithms/cryptography/hill-cipher)
* **機器學習**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron)
  * `B` [k-最近鄰演算法 (k-NN)](src/algorithms/ml/knn)
  * `B` [k-平均演算法 (k-Means)](src/algorithms/ml/k-means)
* **影像處理**
  * `B` [縫隙雕刻 (Seam Carving)](src/algorithms/image-processing/seam-carving)
* **統計學**
  * `B` [加權隨機](src/algorithms/statistics/weighted-random)
* **進化演算法**
  * `A` [遺傳演算法](https://github.com/trekhleb/self-parking-car-evolution)
* **未分類**
  * `B` [河內塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [矩陣旋轉](src/algorithms/uncategorized/square-matrix-rotation)
  * `B` [跳躍遊戲](src/algorithms/uncategorized/jump-game)
  * `B` [唯一路徑](src/algorithms/uncategorized/unique-paths)
  * `B` [雨水收集](src/algorithms/uncategorized/rain-terraces)
  * `B` [遞迴階梯](src/algorithms/uncategorized/recursive-staircase)
  * `B` [最佳買賣股票時機](src/algorithms/uncategorized/best-time-to-buy-sell-stocks)
  * `B` [有效括號](src/algorithms/stack/valid-parentheses)
  * `A` [N 皇后問題](src/algorithms/uncategorized/n-queens)
  * `A` [騎士巡邏](src/algorithms/uncategorized/knight-tour)

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
