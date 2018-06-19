# JavaScript Algorithms and Data Structures

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

This repository contains JavaScript based examples of many
popular algorithms and data structures.

Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos).

_Read this in other languages:_
[简体中文](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md),
[繁體中文](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-TW.md)

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

`B` - Beginner, `A` - Advanced

* `B` [Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
* `B` [Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
* `B` [Stack](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
* `B` [Hash Table](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
* `B` [Heap](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
* `B` [Priority Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
* `A` [Trie](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/trie)
* `A` [Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
    * `A` [Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
    * `A` [AVL Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree)
    * `A` [Red-Black Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree)
    * `A` [Segment Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
    * `A` [Fenwick Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [Graph](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph) (both directed and undirected)
* `A` [Disjoint Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced

### Algorithms by Topic

* **Math**
  * `B` [Factorial](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial) 
  * `B` [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * `B` [Primality Test](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/primality-test) (trial division method)
  * `B` [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Least Common Multiple](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/least-common-multiple) (LCM)
  * `A` [Integer Partition](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition)
  * `B` [Sieve of Eratosthenes](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  * `B` [Is Power of Two](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  * `A` [Liu Hui π Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
* **Sets**
  * `B` [Cartesian Product](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/cartesian-product) - product of multiple sets
  * `A` [Power Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations) (with and without repetitions)
  * `B` [Fisher–Yates Shuffle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `A` [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Increasing Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
* **Strings**
  * `A` [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `B` [Hamming Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [Knuth–Morris–Pratt Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search
  * `A` [Rabin Karp Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/rabin-karp) - substring search
  * `A` [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/longest-common-substring)
* **Searches**
  * `B` [Linear Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/linear-search)
  * `B` [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
* **Sorting**
  * `B` [Bubble Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)
  * `A` [Counting Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/counting-sort)
  * `A` [Radix Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/radix-sort)
* **Trees**
  * `B` [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `B` [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search) (BFS)
  * `A` [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `A` [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * `A` [Detect Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `B` [Kruskal’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Topological Sorting](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/topological-sorting) - DFS method
  * `A` [Articulation Points](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [Bridges](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Eulerian Path and Eulerian Circuit](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [Strongly Connected Components](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Uncategorized**  
  * `B` [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/hanoi-tower)
  * `A` [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `A` [Unbound Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `A` [Prim’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * `B` [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
  * `B` [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/hanoi-tower)
  * `B` [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `A` [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations) (with and without repetitions)
  * `B` [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search) (DFS)
* **Dynamic Programming** - build up a solution using previously found sub-solutions
  * `B` [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * `A` [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-common-subsequnce) (LCS)
  * `A` [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * `A` [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)
* **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
tree is being used.

## How to use this repository

**Install all dependencies**
```
npm install
```

**Run all tests**
```
npm test
```

**Run tests by name**
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

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

Order of growth of algorithms specified in Big O notation.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

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

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | 1         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |

### Array Sorting Algorithms Complexity

| Name                  | Best      | Average   | Worst         | Memory    | Stable    | Comments  |
| --------------------- | :-------: | :-------: | :-----------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n         | n^2       | n^2           | 1         | Yes       |           |
| **Insertion sort**    | n         | n^2       | n^2           | 1         | Yes       |           |
| **Selection sort**    | n^2       | n^2       | n^2           | 1         | No        |           |
| **Heap sort**         | n log(n)  | n log(n)  | n log(n)      | 1         | No        |           |
| **Merge sort**        | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |           |
| **Quick sort**        | n log(n)  | n log(n)  | n^2           | log(n)    | No        |           |
| **Shell sort**        | n log(n)  | depends on gap sequence   | n (log(n))^2  | 1         | No        |           |
| **Counting sort**     | n + r     | n + r     | n + r         | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k     | n * k     | n * k         | n + k    | Yes        | k - length of longest key |
