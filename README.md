# JavaScript Algorithms and Data Structures

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

## Code Examples

### Data Structures

1. [Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)
2. [Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
3. [Stack](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
4. [Hash Table](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
5. [Heap](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
6. [Priority Queue](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
7. [Trie](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/trie)
8. [Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
    * [Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
    * [AVL Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree)
    * B-Tree
    * 2-3 Tree
    * Red-Black Tree
    * Suffix Tree
    * Segment Tree or Interval Tree
    * Binary Indexed Tree or Fenwick Tree
9. [Graph](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph)

### Algorithms

* **Math**
  * [Factorial](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial)
  * [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci)
  * [Cartesian Product](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/cartesian-product)
  * [Power Set](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/power-set)
  * [Permutations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/permutations) (with and without repetitions)
  * [Combinations](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/combinations) (with and without repetitions)  
  * [Primality Test](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/primality-test) (trial division method)
  * [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * [Least Common Multiple](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/least-common-multiple) (LCM)
  * [Fisher–Yates Shuffle](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fisher-yates) - random permutation of a finite sequence
* **String**
  * [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * Hamming
  * Huffman
  * Knuth Morris Pratt
  * Longest common subsequence
  * longest common substring
  * Rabin Karp
* **Search**
  * [Binary Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
* **Sorting**
  * [Bubble Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
  * [Selection Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)
  * [Insertion Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
  * [Heap Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort)
  * [Merge Sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
  * [Quicksort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort)
  * [Shellsort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)
* **Graph**
  * [Depth-First Search (DFS)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search)
  * [Breadth-First Search (BFS)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search)
  * Detect Cycle
  * Topological Sorting
  * Dijkstra Algorithm to Find Shortest Path
  * Eulerian path, Eulerian circuit
  * Bellman Ford
  * Strongly Connected Component algorithm
  * Shortest Path Faster Algorithm (SPFA)
* **Tree**  
  * Depth-First Search (DFS)
  * Breadth-First Search (BFS)
* **Minimum Spanning Tree**
  * Prim’s algorithm
  * Kruskal’s algorithm
* **Dynamic Programming**
  * Increasing subsequence
  * Knapsack problem
  * Maximum subarray
  * Maximum sum path
  * Integer Partition
  * Longest common Subsequence
  * Longest Increasing subsequence
  * Shortest common supersequence
* **Uncategorized**  
  * Union-Find
  * Maze
  

## Running Tests

**Run all tests**
```
npm test
```

**Run tests by name**
```
npm test -- -t 'LinkedList'
```

## Playground

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- -t 'playground'
```

## Useful links

* [Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
* Algorithms
  * Dynamic Programming
    * [Introduction to Dynamic Programming 1](https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/)

## Useful Information

### Big O Notation
    
Order of growth of algorithms specified in Big O notation.
    
![Big O graphs](https://github.com/trekhleb/javascript-algorithms/blob/master/assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).
    
Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 60                            | 9000                            |
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
| **Shell sort**        | n log(n)  | depends on gap sequence  | n (log(n))^2  | 1         | No        |
