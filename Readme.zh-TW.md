# JavaScript 演算法與資料結構

[![build status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

這個知識庫包含許多 JavaScript 的資料結構與演算法的基礎範例。
每個演算法和資料結構都有其個別的文件，內有相關的解釋以及更多相關的文章或Youtube影片連結。

_Read this in other languages:_ [简体中文](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)

_Read this in other languages:_ [繁體中文](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-TW.md)

## 資料結構

資料結構是一個電腦用來組織和排序資料的特定方式，透過這樣的方式資料可以有效率地被讀取以及修改。更精確地說，一個資料結構是一個資料值的集合、彼此間的關係，函數或者運作可以應用於資料上。

* [Linked List 鏈結串列](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
* [Queue 貯列](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
* [Stack 堆疊](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
* [Hash Table 雜湊表](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
* [Heap 堆](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
* [Priority Queue 優先貯列](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
* [Trie 字典樹](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/trie)
* [Tree 樹](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
  * [Binary Search Tree 二元搜尋樹](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
  * [AVL Tree AVL樹](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree)
  * Red-Black Tree
  * Suffix Tree
  * Segment Tree or Interval Tree
  * Binary Indexed Tree or Fenwick Tree
* [Graph 圖](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph) (both directed and undirected)
* [Disjoint Set 互斥集](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set)

## 演算法

演算法是一個如何解決一類問題的非模糊規格。演算法是一個具有精確地定義了一系列運作的規則的集合

### 演算法議題分類 TODO

* **數學類**
  * [Factorial](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial)
  * [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * [Primality Test](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/primality-test) (trial division method)
  * [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * [Least Common Multiple](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/least-common-multiple) (LCM)
  * [Integer Partition](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition)
* **集合**
  * [Cartesian Product](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/cartesian-product) - product of multiple sets
  * [Power Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/power-set) - all subsets of the set 
  * [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations) (with and without repetitions)
  * [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations) (with and without repetitions)
  * [Fisher–Yates Shuffle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-common-subsequnce) (LCS) 
  * [Longest Increasing subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence)
  * [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence) (SCS)
  * [Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
* **字串**
  * [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * [Hamming Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * [Knuth–Morris–Pratt Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/knuth-morris-pratt) - substring search
  * [Rabin Karp Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/rabin-karp) - substring search
  * [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/longest-common-substring)
* **搜尋**
  * [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
* **排序**
  * [Bubble Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
  * [Selection Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)
  * [Insertion Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
  * [Heap Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort)
  * [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort)
  * [Shellsort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)
* **樹**  
  * [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search) (DFS)
  * [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search) (BFS)
* **圖**
  * [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search) (DFS)
  * [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search) (BFS)
  * [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * [Detect Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * [Prim’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Kruskal’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Topological Sorting](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/topological-sorting) - DFS method
  * [Articulation Points](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * [Bridges](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bridges) - DFS based algorithm
  * [Eulerian Path and Eulerian Circuit](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * [Strongly Connected Components](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **未分類**  
  * [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/hanoi-tower)
  * [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/n-queens)
  * [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)
  
### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class 
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an 
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray)
  * [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * [Unbound Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem)
  * [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * [Prim’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Kruskal’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
  * [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/hanoi-tower)
  * [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations) (with and without repetitions)
  * [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations) (with and without repetitions)
  * [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort)
  * [Tree Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search) (DFS)
  * [Graph Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search) (DFS)
* **Dynamic Programming** - build up to a solution using previously found sub-solutions
  * [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-common-subsequnce) (LCS)
  * [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/longest-common-substring)
  * [Longest Increasing subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence)
  * [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence)
  * [0/1 Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem)
  * [Integer Partition](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition)
  * [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray)
  * [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
* **Backtracking** - similarly to brute force try to generate all possible solutions but each time you generate a solution test 
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise backtrack and go on a 
different path of finding solution
  * [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/n-queens)
  * [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)
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
npm test -- -t 'LinkedList'
```
**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- -t 'playground'
```

## 有用的資訊

### 參考

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### 大 O 標記
    
Order of growth of algorithms specified in Big O notation.
    
![Big O 表](https://github.com/trekhleb/javascript-algorithms/blob/master/assets/big-o-graph.png?raw=true)

資料來源: [Big O Cheat Sheet](http://bigocheatsheet.com/).
    
Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity
        
| Data Structure          | Access    | Search    | Insertion | Deletion  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | 
| **Array**               | 1         | n         | n         | n         |
| **Stack**               | n         | n         | 1         | 1         |
| **Queue**               | n         | n         | 1         | 1         | 
| **Linked List**         | n         | n         | 1         | 1         |
| **Hash Table**          | -         | n         | n         | n         |
| **Binary Search Tree**  | n         | n         | n         | n         |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |

### Array Sorting Algorithms Complexity

| Name                  | Best      | Average   | Worst         | Memory    | Stable    |
| --------------------- | :-------: | :-------: | :-----------: | :-------: | :-------: |
| **Bubble sort**       | n         | n^2       | n^2           | 1         | Yes       |
| **Insertion sort**    | n         | n^2       | n^2           | 1         | Yes       |
| **Selection sort**    | n^2       | n^2       | n^2           | 1         | No        |
| **Heap sort**         | n log(n)  | n log(n)  | n log(n)      | 1         | No        |
| **Merge sort**        | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |
| **Quick sort**        | n log(n)  | n log(n)  | n^2           | log(n)    | No        |
| **Shell sort**        | n log(n)  | depends on gap sequence   | n (log(n))^2  | 1         | No        |
