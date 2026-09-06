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
- [SOLITAIRE KLONDIKE ETERNAL RUSSIAN CLASSIC](https://thelearnquesters.pages.dev/solitaire-klondike-eternal-russian-classic.html)
- [SLAP MAN](https://studyplayings.web.app/slap-man.html)
- [COLOR BLOCK SORT](https://quizverses.github.io/color-block-sort.html)
- [CATEGORY 2D1 070](https://studyquests.github.io/category-2d1-070.html)
- [CRAZY AXE](https://quizverses.pages.dev/crazy-axe.html)
- [COOL CARS RACING AT ALTITUDE](https://quizverses.pages.dev/cool-cars-racing-at-altitude.html)
- [SHEEP SHEEP DUCK](https://quizverses-9d2f2.web.app/sheep-sheep-duck.html)
- [BALL PAINT 3D](https://quizverses.pages.dev/ball-paint-3d.html)
- [BLAST CUBES](https://quizverses.pages.dev/blast-cubes.html)
- [ICE CREAM SORT](https://quizverses.github.io/ice-cream-sort.html)
- [DIAMONDZ](https://quizverses.pages.dev/diamondz.html)
- [CRICKET CLASH PONG](https://quizverses.pages.dev/cricket-clash-pong.html)
- [PIN DETECTIVE](https://quizverses.github.io/pin-detective.html)
- [INDEX16](https://studyquests.github.io/index16.html)
- [MATH RUNNER](https://quizverses.github.io/math-runner.html)
- [BFFS LUXURY LOUNGEWEAR](https://quizverses.pages.dev/bffs-luxury-loungewear.html)
- [INDEX5](https://studyquests.github.io/index5.html)
- [MEMEVOIO](https://quizverses.github.io/memevoio.html)
- [CUBE DROP PUZZLE](https://quizverses.github.io/cube-drop-puzzle.html)
- [CONNECT THE DOTS COLOR LINES](https://quizverses.github.io/connect-the-dots-color-lines.html)
- [MERGE THE COINS USSR](https://quizverses.pages.dev/merge-the-coins-ussr.html)
- [INDEX37](https://studyquests.github.io/index37.html)
- [GUN BUILDER](https://quizverses.pages.dev/gun-builder.html)
- [SOLAR SMASH](https://quizverses.github.io/solar-smash.html)
- [SHELF SHIFT MATCH](https://quizverses.pages.dev/shelf-shift-match.html)
- [LEXY](https://studyquests.github.io/lexy.html)
- [COUNTER CRAFT SNIPER](https://quizverses.github.io/counter-craft-sniper.html)
- [EAT AND GROW FISH](https://studyquesthub.web.app/eat-and-grow-fish.html)
- [DOORS AWAKENING](https://quizverses.github.io/doors-awakening.html)
- [ZOO RESTAURANT](https://quizverses.github.io/zoo-restaurant.html)
- [SHELL STRIKERS](https://quizverses.github.io/shell-strikers.html)
- [CATEGORY BUILDING](https://studyplaying.github.io/category-building.html)
- [CATEGORY ROBOT49](https://studyquests.pages.dev/category-robot49.html)
- [GUNS BOTTLES](https://quizverses.github.io/guns-bottles.html)
- [DEAD BRAIN](https://studyquests.github.io/dead-brain.html)
- [CATEGORY COLLECT](https://studyplaying.github.io/category-collect.html)
- [INDEX3](https://studyquests.pages.dev/index3.html)
- [SPIDER NOOB OBSTACLE COURSE](https://quizverses.github.io/spider-noob-obstacle-course.html)
- [CYBERPUNK AGENT](https://studyplaying.github.io/cyberpunk-agent.html)
- [PARKING DRIVER](https://quizverses.pages.dev/parking-driver.html)
- [CATEGORY QUIZ](https://studyplayings.pages.dev/category-quiz.html)
- [CAR CARE REPAIR DUDU MECHANIC](https://quizverses.pages.dev/car-care-repair-dudu-mechanic.html)
- [FLIP IT 3D](https://studyplaying.github.io/flip-it-3d.html)
- [SOLITAIRE STORY TRIPEAKS 6](https://quizverses.github.io/solitaire-story-tripeaks-6.html)
- [ZOMBIE FRONTIER SHOOTER](https://studyquests.github.io/zombie-frontier-shooter.html)
- [FACE CHANGES](https://studyplaying.github.io/face-changes.html)
- [GO TO ZERO](https://studyplayings.web.app/go-to-zero.html)
- [BLOSSOM](https://quizverses.pages.dev/blossom.html)
- [KINGDOM MATCH](https://quizverses.github.io/kingdom-match.html)
- [RIDE SHOOTER](https://learnquester.github.io/ride-shooter.html)
- [MIRROR SHAPE](https://studyplayings.web.app/mirror-shape.html)
- [NG FLOW LINES](https://studyplayings.web.app/ng-flow-lines.html)
- [BASKETBALL STARS 2026](https://quizverses.pages.dev/basketball-stars-2026.html)
- [CATEGORY MOUSE1 707](https://studyplayings.web.app/category-mouse1-707.html)
- [CATEGORY WAR](https://studyquesthub.web.app/category-war.html)
- [FURY OF THE STEAMPUNK PRINCESS](https://studyplayings.web.app/fury-of-the-steampunk-princess.html)
- [CATEGORY ANIMAL](https://studyquesthub.web.app/category-animal.html)
- [SNAKE KING](https://studyquests.github.io/snake-king.html)
- [CATEGORY BRAIN260](https://studyplaying.github.io/category-brain260.html)
- [CATEGORY TOP DOWN251](https://studyplayings.web.app/category-top-down251.html)
- [CATEGORY LOGIC538](https://thelearnquester.web.app/category-logic538.html)
- [BOXTERIA](https://studyplaying.github.io/boxteria.html)
- [CATEGORY DRESS UP97](https://quizverses.pages.dev/category-dress-up97.html)
- [DEATH BALL](https://studyplayings.web.app/death-ball.html)
- [CATEGORY INCREMENTAL388](https://thelearnquester.web.app/category-incremental388.html)
- [SAND BLOCK BLAST](https://studyquests.github.io/sand-block-blast.html)
- [HOME RUSH THE FISH WAR](https://studyplaying.github.io/home-rush-the-fish-war.html)
- [SITEMAP](https://studyquesthub.web.app/sitemap.html)
- [CATEGORY FASHION105](https://studyquests.pages.dev/category-fashion105.html)
- [SPRUNKI MATCH](https://studyquesthub.web.app/sprunki-match.html)
- [BLOCK MINE FUSE TNT](https://quizverses.github.io/block-mine-fuse-tnt.html)
- [HEX PLANET IDLE](https://quizverses.github.io/hex-planet-idle.html)
- [BELL MADNESS](https://studyquests.github.io/bell-madness.html)
- [MEAN GIRLS GRADUATION DAY](https://quizverses.github.io/mean-girls-graduation-day.html)
- [ROYAL JEWELS MATCH](https://quizverses.github.io/royal-jewels-match.html)
- [CATEGORY MAHJONG 2](https://studyquests.github.io/category-mahjong-2.html)
- [CATEGORY SHOP49](https://studyplayings.web.app/category-shop49.html)
- [21 CARDS](https://quizverses.github.io/21-cards.html)
- [SLIME FARM](https://quizverses-9d2f2.web.app/slime-farm.html)
- [REAL FLIGHT SIMULATOR](https://quizverses.pages.dev/real-flight-simulator.html)
- [BUBBLE SHOOTER BUTTERFLY](https://quizverses.github.io/bubble-shooter-butterfly.html)
- [DUSTY MAZE HUNTER](https://quizverses.github.io/dusty-maze-hunter.html)
- [CATEGORY ANIMAL216](https://quizverses.pages.dev/category-animal216.html)
- [FASHION WEEK 2025](https://studyquests.pages.dev/fashion-week-2025.html)
- [SPACEIO](https://quizverses.github.io/spaceio.html)
- [K POP HUNTER HALLOWEEN FASHION](https://quizverses.github.io/k-pop-hunter-halloween-fashion.html)
- [NEON BLAST](https://studyquesthub.web.app/neon-blast.html)
- [HEADLEG DASH PARKOUR](https://quizverses.github.io/headleg-dash-parkour.html)
- [SUMMER TRIPLE MAHJONG](https://studyquests.github.io/summer-triple-mahjong.html)
- [CATEGORY BIKE 2](https://studyplaying.github.io/category-bike-2.html)
- [CATEGORY CONTROLLER59](https://thelearnquester.web.app/category-controller59.html)
- [SNIPER FOR BRAINROT](https://quizverses.pages.dev/sniper-for-brainrot.html)
- [WORD JAM ASSOCIATION PUZZLE](https://quizverses.github.io/word-jam-association-puzzle.html)
- [POP THEM](https://studyquests.github.io/pop-them.html)
- [CATEGORY MOBILE2 112](https://thelearnquester.web.app/category-mobile2-112.html)
- [DRUNK MAN 3D](https://quizverses.github.io/drunk-man-3d.html)
- [IDLE BARBER SHOP](https://studyplayings.web.app/idle-barber-shop.html)
- [CATEGORY FASHION105](https://studyquests.github.io/category-fashion105.html)
- [NUMBER COLLECTOR BRAINTEASER](https://quizverses.pages.dev/number-collector-brainteaser.html)
- [SAMURAI LEGACY](https://studyquests.github.io/samurai-legacy.html)
- [TANGLE MASTER 3D](https://studyplayings.web.app/tangle-master-3d.html)
- [CATEGORY CASUAL 5](https://studyplaying.github.io/category-casual-5.html)
- [CATEGORY WAR](https://studyquests.github.io/category-war.html)
- [CATEGORY PHYSICS371](https://studyplayings.web.app/category-physics371.html)
- [FIDGET TOYS POP IT](https://learnquester.github.io/fidget-toys-pop-it.html)
- [CATEGORY GAMES](https://thelearnquester.web.app/category-games.html)
- [SPACE SHOOTER SPEED TYPING CHALLENGE](https://quizverses-9d2f2.web.app/space-shooter-speed-typing-challenge.html)
- [CATEGORY ADVENTURE 3](https://studyplaying.github.io/category-adventure-3.html)
- [TAP TAP BUILDER](https://quizverses-9d2f2.web.app/tap-tap-builder.html)
- [CATEGORY RAMMERHEAD](https://thelearnquester.web.app/category-rammerhead.html)
- [CATEGORY RUNNING107](https://thelearnquester.web.app/category-running107.html)
- [SITEMAP](https://thelearnquester.web.app/sitemap.html)
- [WORMSARENAIO](https://studyquests.github.io/wormsarenaio.html)
- [CATEGORY CUTE](https://thelearnquester.web.app/category-cute.html)
- [MAHJONG GARDEN](https://quizverses-9d2f2.web.app/mahjong-garden.html)
- [CATEGORY POOL 2](https://thelearnquester.web.app/category-pool-2.html)
- [BLOCK MERGE CITY](https://studyquesthub.web.app/block-merge-city.html)
- [DYNAMONS 11](https://studyquesthub.web.app/dynamons-11.html)
- [SOLITAIRE SUMMER KLONDIKE](https://quizverses-9d2f2.web.app/solitaire-summer-klondike.html)
- [MY HORSE IS AMAZING](https://studyplayings.web.app/my-horse-is-amazing.html)
- [SLAP AND RUN](https://quizverses-9d2f2.web.app/slap-and-run.html)
- [CATEGORY CASUAL](https://studyplayings.web.app/category-casual.html)
- [FIRE AND WATER BIRDS](https://studyquests.github.io/fire-and-water-birds.html)
- [FOOTBALL HEADS 2025](https://quizverses.github.io/football-heads-2025.html)
- [SCHOOL ESCAPE OBBIE RUN](https://quizverses-9d2f2.web.app/school-escape-obbie-run.html)
- [SPRUNKI MONSTER MUSIC BEATS](https://studyquesthub.web.app/sprunki-monster-music-beats.html)
- [BRAINROT CLICKER](https://learnquester.github.io/brainrot-clicker.html)
- [CATEGORY OBSTACLE](https://quizverses-9d2f2.web.app/category-obstacle.html)
- [GRADUATION MAKEUP TRENDS](https://studyplaying.github.io/graduation-makeup-trends.html)
- [CANDY MATCH PUZZLE](https://quizverses.pages.dev/candy-match-puzzle.html)
