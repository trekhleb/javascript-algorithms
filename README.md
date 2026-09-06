# JavaScript Algorithms and Data Structures

> 🇺🇦 UKRAINE [IS BEING ATTACKED](https://war.ukraine.ua/) BY RUSSIAN ARMY. CIVILIANS ARE GETTING KILLED. RESIDENTIAL AREAS ARE GETTING BOMBED.
> - Help Ukraine via:
>   - [Serhiy Prytula Charity Foundation](https://prytulafoundation.org/en/)
>   - [Come Back Alive Charity Foundation](https://savelife.in.ua/en/donate-en/)
>   - [National Bank of Ukraine](https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi)
> - More info on [war.ukraine.ua](https://war.ukraine.ua/) and [MFA of Ukraine](https://twitter.com/MFA_Ukraine)

<hr/>

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)
![repo size](https://img.shields.io/github/repo-size/trekhleb/javascript-algorithms.svg)

This repository contains JavaScript based examples of many
popular algorithms and data structures.

Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos).

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türkçe_](README.tr-TR.md),
[_Italiano_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md),
[_Uzbek_](README.uz-UZ.md),
[_עברית_](README.he-IL.md)

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

Remember that each data has its own trade-offs. And you need to pay attention more to why you're choosing a certain data structure than to how to implement it.

`B` - Beginner, `A` - Advanced

* `B` [Linked List](src/data-structures/linked-list)
* `B` [Doubly Linked List](src/data-structures/doubly-linked-list)
* `B` [Queue](src/data-structures/queue)
* `B` [Stack](src/data-structures/stack)
* `B` [Deque](src/data-structures/deque) - double-ended queue
* `B` [Hash Table](src/data-structures/hash-table)
* `B` [Heap](src/data-structures/heap) - max and min heap versions
* `B` [Priority Queue](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Tree](src/data-structures/tree)
  * `A` [Binary Search Tree](src/data-structures/tree/binary-search-tree)
  * `A` [AVL Tree](src/data-structures/tree/avl-tree)
  * `A` [Red-Black Tree](src/data-structures/tree/red-black-tree)
  * `A` [Segment Tree](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [Graph](src/data-structures/graph) (both directed and undirected)
* `A` [Disjoint Set](src/data-structures/disjoint-set) - a union–find data structure or merge–find set
* `A` [Bloom Filter](src/data-structures/bloom-filter)
* `A` [LRU Cache](src/data-structures/lru-cache/) - Least Recently Used (LRU) cache

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced

### Algorithms by Topic

* **Math**
  * `B` [Bit Manipulation](src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  * `B` [Binary Floating Point](src/algorithms/math/binary-floating-point) - binary representation of the floating-point numbers.
  * `B` [Factorial](src/algorithms/math/factorial)
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci) - classic and closed-form versions
  * `B` [Prime Factors](src/algorithms/math/prime-factors) - finding prime factors and counting them using Hardy-Ramanujan's theorem
  * `B` [Primality Test](src/algorithms/math/primality-test) (trial division method)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Least Common Multiple](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Complex Number](src/algorithms/math/complex-number) - complex numbers and basic operations with them
  * `B` [Radian & Degree](src/algorithms/math/radian) - radians to degree and backwards conversion
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `B` [Horner's method](src/algorithms/math/horner-method) - polynomial evaluation
  * `B` [Matrices](src/algorithms/math/matrix) - matrices and basic matrix operations (multiplication, transposition, etc.)
  * `B` [Euclidean Distance](src/algorithms/math/euclidean-distance) - distance between two points/vectors/matrices
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Square Root](src/algorithms/math/square-root) - Newton's method
  * `A` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Sets**
  * `B` [Cartesian Product](src/algorithms/sets/cartesian-product) - product of multiple sets
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `A` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise, backtracking, and cascading solutions)
  * `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Strings**
  * `B` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `B` [Palindrome](src/algorithms/string/palindrome) - check if the string is the same in reverse
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Searches**
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `B` [Binary Search](src/algorithms/search/binary-search) - search in sorted array
  * `B` [Interpolation Search](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Sorting**
  * `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
  * `B` [Bucket Sort](src/algorithms/sorting/bucket-sort)
* **Linked Lists**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Trees**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding the shortest paths to all graph vertices from single vertex
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding the shortest paths to all graph vertices from single vertex
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS method
  * `A` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Cryptography**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
  * `B` [Rail Fence Cipher](src/algorithms/cryptography/rail-fence-cipher) - a transposition cipher algorithm for encoding messages
  * `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
  * `B` [Hill Cipher](src/algorithms/cryptography/hill-cipher) - substitution cipher based on linear algebra
* **Machine Learning**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
  * `B` [k-NN](src/algorithms/ml/knn) - k-nearest neighbors classification algorithm
  * `B` [k-Means](src/algorithms/ml/k-means) - k-Means clustering algorithm
* **Image Processing**
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - content-aware image resizing algorithm
* **Statistics**
  * `B` [Weighted Random](src/algorithms/statistics/weighted-random) - select the random item from the list based on items' weights
* **Evolutionary algorithms**
  * `A` [Genetic algorithm](https://github.com/trekhleb/self-parking-car-evolution) - example of how the genetic algorithm may be applied for training the self-parking cars
* **Uncategorized**
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `B` [Best Time To Buy Sell Stocks](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  * `B` [Valid Parentheses](src/algorithms/stack/valid-parentheses) - check if a string has valid parentheses (using stack)
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach the top
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding the shortest path to all graph vertices
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * `B` [Binary Search](src/algorithms/search/binary-search)
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Matrices](src/algorithms/math/matrix) - generating and traversing the matrices of different shapes
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `B` [Best Time To Buy Sell Stocks](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  * `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
* **Dynamic Programming** - build up a solution using previously found sub-solutions
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach the top
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - content-aware image resizing algorithm
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding the shortest path to all graph vertices
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate the next solution, you test
if it satisfies all conditions and only then continue generating subsequent solutions. Otherwise, backtrack and go on a
different path to finding a solution. Normally the DFS traversal of state-space is being used.
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally, BFS traversal in combination with DFS traversal of state-space
tree is being used.

## How to use this repository

**Install all dependencies**

```
npm install
```

**Run ESLint**

You may want to run it to check code quality.

```
npm run lint
```

**Run all tests**

```
npm test
```

**Run tests by name**

```
npm test -- 'LinkedList'
```

**Troubleshooting**

If linting or testing is failing, try to delete the `node_modules` folder and re-install npm packages:

```
rm -rf ./node_modules
npm i
```

Also, make sure that you're using the correct Node version (`>=16`). If you're using [nvm](https://github.com/nvm-sh/nvm) for Node version management you may run `nvm use` from the root folder of the project and the correct version will be picked up.

**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just, simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Useful Information

### References

- [▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 Data Structure Sketches](https://okso.app/showcase/data-structures)

### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below, you may find the most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

<!-- ## Project Backers

> You may support this project via ❤️️ [GitHub](https://github.com/sponsors/trekhleb) or ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Folks who are backing this project](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1` -->

## Author

[@trekhleb](https://trekhleb.dev)

A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev):

- 🧠 [yesbrainer.ai](https://yesbrainer.ai/) – council of AI models for the decisions that aren’t no-brainers (BYOK, private, no account)
- ✍🏻 [okso.app](https://okso.app/) – drawing app to express, grasp, and organize your thoughts and ideas


## 🌐 Web Resources & Interactive Index
- [DESERT ROVER SURVIVAL](https://learnquester.pages.dev/desert-rover-survival.html)
- [CHALLENGE YOUR FRIENDS](https://iskillquest.pages.dev/challenge-your-friends.html)
- [CATEGORY CONTROLLER](https://learnquester.pages.dev/category-controller.html)
- [CATEGORY MERGE](https://learnquesters.pages.dev/category-merge.html)
- [CATEGORY CLASSIC98](https://themindzone.pages.dev/category-classic98.html)
- [CATEGORY PLATFORM258](https://theskillquest.pages.dev/category-platform258.html)
- [CATEGORY MAKEUP51](https://learnquester.pages.dev/category-makeup51.html)
- [HORROR HOTEL SCARY ROOM](https://thequizzone.pages.dev/horror-hotel-scary-room.html)
- [CATEGORY IO](https://studyplayings.pages.dev/category-io.html)
- [IDLE DAIRY FARM TYCOON](https://thequizzone.pages.dev/idle-dairy-farm-tycoon.html)
- [KINGDOM WARS TD](https://thequizzone.pages.dev/kingdom-wars-td.html)
- [EPIC RACING DESCENT ON CARS](https://thequizzone.pages.dev/epic-racing-descent-on-cars.html)
- [CATEGORY WAR](https://studyquesthub.web.app/category-war.html)
- [BASKETBALL RUSH](https://quizverses.github.io/basketball-rush.html)
- [ROYAL CROWN BLAST](https://thequizzone.pages.dev/royal-crown-blast.html)
- [BRAINROT CLEANING](https://quizverses-9d2f2.web.app/brainrot-cleaning.html)
- [BLOCK DIGGER](https://thelearnquester.web.app/block-digger.html)
- [EARTHQUAKE IO](https://thequizzone.pages.dev/earthquake-io.html)
- [PLANET HOPPER](https://thequizzone.pages.dev/planet-hopper.html)
- [KEY QUEST](https://thequizzone.pages.dev/key-quest.html)
- [CATEGORY EDUCATIONAL](https://studyquesthub.web.app/category-educational.html)
- [WORD SEASONS](https://themindzone.pages.dev/word-seasons.html)
- [STARRY STYLE DORAMA OF DREAM](https://themindzone.pages.dev/starry-style-dorama-of-dream.html)
- [OFFROAD CRASH CLIMBER 4X4](https://thequizzone.pages.dev/offroad-crash-climber-4x4.html)
- [CHRISTMAS SORTING](https://quizverses.github.io/christmas-sorting.html)
- [POLICE STATION](https://thequizzone.pages.dev/police-station.html)
- [CATEGORY CASUAL](https://learnquester.pages.dev/category-casual.html)
- [MAGICAL DIARY PAPER DRESS UP](https://thequizzone.pages.dev/magical-diary-paper-dress-up.html)
- [CATEGORY FOOTBALL](https://studyquesthub.web.app/category-football.html)
- [DRAGON ESCAPE](https://thequizzone.pages.dev/dragon-escape.html)
- [TSUNAMI RACE](https://thequizzone.pages.dev/tsunami-race.html)
- [HOLE AND FILL COLLECT MASTER](https://thequizzone.pages.dev/hole-and-fill-collect-master.html)
- [COOKING WORLD REBORN](https://themindzone.pages.dev/cooking-world-reborn.html)
- [MINI GOLF BATTLE](https://studyplayings.web.app/mini-golf-battle.html)
- [APPLE WORM](https://thequizzone.pages.dev/apple-worm.html)
- [MEMOJI](https://thequizzone.pages.dev/memoji.html)
- [SOCCER DASH](https://studyplayings.web.app/soccer-dash.html)
- [CATEGORY AGILITY 2](https://studyquests.pages.dev/category-agility-2.html)
- [CONSTRUCTION SET 3D BUILDER](https://thequizzone.pages.dev/construction-set-3d-builder.html)
- [CATEGORY BLOCK91](https://studyplaying.github.io/category-block91.html)
- [WITCHY AND THE PUZZLE ADVENTURES](https://studyplaying.github.io/witchy-and-the-puzzle-adventures.html)
- [GARDEN GUARDIANS](https://quizverses.github.io/garden-guardians.html)
- [SPACEFLIGHT SIMULATOR](https://studyquests.pages.dev/spaceflight-simulator.html)
- [THE GRENCH COUPLE HOLIDAY DRESS UP](https://thequizzone.pages.dev/the-grench-couple-holiday-dress-up.html)
- [OFFROAD LIFE 3D](https://quizverses.github.io/offroad-life-3d.html)
- [CATEGORY AGILITY 2](https://learnquester.github.io/category-agility-2.html)
- [ELEMENTAL DRESSUP MAGIC](https://studyplayings.pages.dev/elemental-dressup-magic.html)
- [SANTA VS SKRITCH](https://thequizzone.pages.dev/santa-vs-skritch.html)
- [PEG SOLITAIRE](https://thequizzone.pages.dev/peg-solitaire.html)
- [ZOMBIE SIEGEIO](https://studyplayings.web.app/zombie-siegeio.html)
- [RAGDOLL FOOTBALL 2 PLAYERS](https://thequizzone.pages.dev/ragdoll-football-2-players.html)
- [MISSION SANTA DELIVER THE GIFTS](https://thequizzone.pages.dev/mission-santa-deliver-the-gifts.html)
- [HALLOWEEN FRUIT SLICE](https://thequizzone.pages.dev/halloween-fruit-slice.html)
- [DOWNHILL CAR RIDE CRASH TEST](https://thequizzone.pages.dev/downhill-car-ride-crash-test.html)
- [CELEBRITY THANKSGIVING PREP](https://thequizzone.pages.dev/celebrity-thanksgiving-prep.html)
- [LAST STANDING](https://thequizzone.pages.dev/last-standing.html)
- [RAGDOLL MEGA DUNK](https://studyquesthub.web.app/ragdoll-mega-dunk.html)
- [TUNG SAHUR COLORING](https://thequizzone.pages.dev/tung-sahur-coloring.html)
- [TILE PAIR MATCH](https://studyquesthub.web.app/tile-pair-match.html)
- [SKY BALLS 3D](https://thequizzone.pages.dev/sky-balls-3d.html)
- [NUMBER COLLECTOR BRAINTEASER](https://quizverses.github.io/number-collector-brainteaser.html)
- [SUPER MX LAST SEASON](https://quizverses.github.io/super-mx-last-season.html)
- [FIND GOODS](https://thequizzone.pages.dev/find-goods.html)
- [LAZY WORKERS](https://thequizzone.pages.dev/lazy-workers.html)
- [GRENADE SIMULATOR](https://thelearnquester.web.app/grenade-simulator.html)
- [SODA BLOCK JAM](https://learnquesters.pages.dev/soda-block-jam.html)
- [CATEGORY CARDS](https://quizverses.github.io/category-cards.html)
- [BLOCK BLAST JEWEL PUZZLE](https://thelearnquester.web.app/block-blast-jewel-puzzle.html)
- [NETQUEL COM](https://quizverses.github.io/netquel-com.html)
- [THE BIG HIT RUN](https://studyquests.github.io/the-big-hit-run.html)
- [STEAM SORTER](https://studyquesthub.web.app/steam-sorter.html)
- [SLINGER BLOCK](https://studyplayings.pages.dev/slinger-block.html)
- [MAGIC SORTING](https://thequizzone.pages.dev/magic-sorting.html)
- [THE COUNTERFEIT BANK](https://studyquests.pages.dev/the-counterfeit-bank.html)
- [SERIOUS HEAD 2](https://quizverses.github.io/serious-head-2.html)
- [ICONIC HALLOWEEN COSTUMES](https://thequizzone.pages.dev/iconic-halloween-costumes.html)
- [CATEGORY INCREMENTAL](https://learnquesters.pages.dev/category-incremental.html)
- [CATEGORY PUZZLE 7](https://quizverses.github.io/category-puzzle-7.html)
- [MY PERFECT FARM](https://thelearnquesters.pages.dev/my-perfect-farm.html)
- [NOOB JAILBREAK 2](https://thequizzone.pages.dev/noob-jailbreak-2.html)
- [CATEGORY MAHJONG 3](https://thequizzone.pages.dev/category-mahjong-3.html)
- [DREAM ROOM MAKEOVER](https://quizverses.github.io/dream-room-makeover.html)
- [VOLLEY BEAN](https://studyquests.github.io/volley-bean.html)
- [TANGLE MASTER 3D](https://studyplayings.web.app/tangle-master-3d.html)
- [KICK LUCKY BOXES ONLINE](https://thequizzone.pages.dev/kick-lucky-boxes-online.html)
- [SNAKE 2048IO](https://thelearnquester.web.app/snake-2048io.html)
- [STICK FIGHT THE CHAOS](https://thequizzone.pages.dev/stick-fight-the-chaos.html)
- [LEGEND OF FIREBALL](https://learnquester.github.io/legend-of-fireball.html)
- [DUNGEON MASTER CULT CRAFT](https://quizverses.github.io/dungeon-master-cult-craft.html)
- [LODE RETRO ADVENTURE](https://quizverses.github.io/lode-retro-adventure.html)
- [CATEGORY ROGUELIKE GAMES](https://thelearnquesters.pages.dev/category-roguelike-games.html)
- [BRIDGE FIGHT](https://thelearnquesters.pages.dev/bridge-fight.html)
- [BASE JUMP WINGSUIT FLYING](https://studyquests.github.io/base-jump-wingsuit-flying.html)
- [CATEGORY SCHOOL](https://thelearnquester.web.app/category-school.html)
- [MERGE SQUARES](https://studyplaying.github.io/merge-squares.html)
- [TUNG SAHUR COLORING](https://thelearnquesters.pages.dev/tung-sahur-coloring.html)
- [FASHION PRINCESS DRESS UP FOR GIRLS](https://thelearnquesters.pages.dev/fashion-princess-dress-up-for-girls.html)
- [TRALALA LA LA LA ITALIANO](https://thequizzone.pages.dev/tralala-la-la-la-italiano.html)
- [CRYSTAL CONNECT](https://learnquester.github.io/crystal-connect.html)
- [FOREST SURVIVOR ROUGELIKE](https://thelearnquesters.pages.dev/forest-survivor-rougelike.html)
- [CATEGORY LOGIC538](https://learnquesters.pages.dev/category-logic538.html)
- [CATEGORY ADVENTURE 2](https://thelearnquesters.pages.dev/category-adventure-2.html)
- [ZOMBIE SPACE EPISODE II](https://thequizzone.pages.dev/zombie-space-episode-ii.html)
- [CATEGORY DRESS UP GAMES](https://thelearnquesters.pages.dev/category-dress-up-games.html)
- [INDEX5](https://studyplaying.github.io/index5.html)
- [COLOR CONQUEST TERRITORY WAR](https://studyquests.github.io/color-conquest-territory-war.html)
- [CINEMA BUSINESS IDLE GAMES](https://quizverses.github.io/cinema-business-idle-games.html)
- [GEM DEEP DIGGER](https://studyquesthub.web.app/gem-deep-digger.html)
- [CROSS CONNECT WORD](https://studyquests.github.io/cross-connect-word.html)
- [MINI GAMES PUZZLE COLLECTION](https://thequizzone.pages.dev/mini-games-puzzle-collection.html)
- [COZY GARDEN IDLE](https://studyplayings.web.app/cozy-garden-idle.html)
- [CATEGORY SOLITAIRE](https://quizverses.github.io/category-solitaire.html)
- [DIG FLOW SAVE WATER](https://quizverses.github.io/dig-flow-save-water.html)
- [MONEY PING PONG](https://quizverses.github.io/money-ping-pong.html)
- [DOOMSDAY ZOMBIE TD](https://studyquesthub.web.app/doomsday-zombie-td.html)
- [PICK BRAINROT 3D BATTLE](https://studyplaying.github.io/pick-brainrot-3d-battle.html)
- [ICE CREAM INC](https://studyplayings.web.app/ice-cream-inc.html)
- [MAGIC FOREST MERGE THE SECRETS](https://studyquesthub.web.app/magic-forest-merge-the-secrets.html)
- [UP HERO](https://studyplayings.web.app/up-hero.html)
- [CATEGORY SPACE57](https://quizverses.github.io/category-space57.html)
- [JEWELRY IDLE](https://thelearnquesters.pages.dev/jewelry-idle.html)
- [PARKING FRENZY](https://thelearnquesters.pages.dev/parking-frenzy.html)
- [TRANSFORM CAR BATTLE](https://thequizzone.pages.dev/transform-car-battle.html)
- [CATEGORY CASUAL 13](https://thelearnquesters.pages.dev/category-casual-13.html)
- [OBBY HALLOWEEN DANGER SKATE](https://thelearnquesters.pages.dev/obby-halloween-danger-skate.html)
- [BASE JUMP WINGSUIT FLYING](https://thelearnquester.web.app/base-jump-wingsuit-flying.html)
- [HAPPY FLUFFY CUBES](https://thequizzone.pages.dev/happy-fluffy-cubes.html)
- [GUN BUILDER](https://quizverses.github.io/gun-builder.html)
- [SORT TILES](https://thelearnquesters.pages.dev/sort-tiles.html)
- [CATEGORY IO](https://learnquester.pages.dev/category-io.html)
