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

* [Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
* [Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
* [Stack](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
* [Hash Table](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
* [Heap](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
* [Priority Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
* [Trie](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/trie)
* [Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
    * [Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
    * [AVL Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree)
    * [Red-Black Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree)
    * [Segment Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
    * [Fenwick Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* [Graph](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph) (both directed and undirected)
* [Disjoint Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

### Algorithms by Topic

* **Math**
  * [Factorial](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial)
  * [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * [Primality Test](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/primality-test) (trial division method)
  * [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * [Least Common Multiple](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/least-common-multiple) (LCM)
  * [Integer Partition](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition)
  * [Sieve of Eratosthenes](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  * [Is Power of Two](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
* **Sets**
  * [Cartesian Product](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/cartesian-product) - product of multiple sets
  * [Power Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/power-set) - all subsets of a set
  * [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations) (with and without repetitions)
  * [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/combinations) (with and without repetitions)
  * [Fisher–Yates Shuffle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-common-subsequnce) (LCS) 
  * [Longest Increasing subsequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/longest-increasing-subsequence)
  * [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence) (SCS)
  * [Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
* **Strings**
  * [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * [Hamming Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * [Knuth–Morris–Pratt Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/knuth-morris-pratt) - substring search
  * [Rabin Karp Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/rabin-karp) - substring search
  * [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/longest-common-substring)
* **Searches**
  * [Linear Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/linear-search)
  * [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
* **Sorting**
  * [Bubble Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
  * [Selection Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)
  * [Insertion Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
  * [Heap Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort)
  * [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * [Shellsort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)
  * [Counting Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/counting-sort)
  * [Radix Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/radix-sort)
* **Trees**
  * [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search) (DFS)
  * [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
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
* **Uncategorized**  
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
* **Dynamic Programming** - build up a solution using previously found sub-solutions
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
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a 
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/n-queens)
  * [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)
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
    
![Big O graphs](https://github.com/trekhleb/javascript-algorithms/blob/master/assets/big-o-graph.png?raw=true)

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
