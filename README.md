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
- [DIGITAL CIRCUS IO](https://studyplayings.web.app/digital-circus-io.html)
- [MOJO EMOJI](https://studyquests.pages.dev/mojo-emoji.html)
- [SNIPING ALIENS](https://studyplayings.pages.dev/sniping-aliens.html)
- [MATCH FIND 3D](https://studyquests.pages.dev/match-find-3d.html)
- [ROYAL PUZZLE BURST](https://studyquests.pages.dev/royal-puzzle-burst.html)
- [DR PARKING](https://learnquester.github.io/dr-parking.html)
- [GOING BALLS 3D](https://studyplaying.github.io/going-balls-3d.html)
- [JELLO BUBBLES](https://studyplayings.pages.dev/jello-bubbles.html)
- [CUTE CRAFT LAB](https://studyplaying.github.io/cute-craft-lab.html)
- [MERGE RACER STUNTS CAR](https://studyplaying.github.io/merge-racer-stunts-car.html)
- [GEMSTONE GLAM](https://studyplayings.pages.dev/gemstone-glam.html)
- [SLIME RUSH](https://studyplayings.pages.dev/slime-rush.html)
- [MY TINY LAND](https://studyplaying.github.io/my-tiny-land.html)
- [CATEGORY SOLITAIRE](https://studyplaying.github.io/category-solitaire.html)
- [CATEGORY THINKY](https://studyplayings.pages.dev/category-thinky.html)
- [FAMILY PET DOG GAMES](https://studyplaying.github.io/family-pet-dog-games.html)
- [DRAW BRIDGE PUZZLE](https://studyplaying.github.io/draw-bridge-puzzle.html)
- [STICKMAN SHOOTER BROS](https://studyplayings.pages.dev/stickman-shooter-bros.html)
- [COLOR DOTS CHALLENGE](https://studyplayings.pages.dev/color-dots-challenge.html)
- [DEFENDERS OF THE REALM AN EPIC WAR](https://studyplaying.github.io/defenders-of-the-realm-an-epic-war.html)
- [RED ESCAPE](https://studyplayings.web.app/red-escape.html)
- [PULL THE PINS](https://studyplaying.github.io/pull-the-pins.html)
- [CATEGORY STRATEGY](https://studyplayings.pages.dev/category-strategy.html)
- [CLICKER HERO](https://iskillquest.pages.dev/clicker-hero.html)
- [CATEGORY TRAIN YOUR BRAIN24](https://studyplayings.pages.dev/category-train-your-brain24.html)
- [CATEGORY BATTLE ROYALE25](https://studyplayings.web.app/category-battle-royale25.html)
- [PUPPY TREAT SORTING](https://studyplayings.pages.dev/puppy-treat-sorting.html)
- [MATCH 3D PUZZLE SAGA](https://studyplaying.github.io/match-3d-puzzle-saga.html)
- [COLOR BUMP DANCER](https://studyplayings.pages.dev/color-bump-dancer.html)
- [JOURNEY OF ESCAPE](https://studyplaying.github.io/journey-of-escape.html)
- [PUZZLE LINES AND KNOTS 1](https://studyplayings.pages.dev/puzzle-lines-and-knots-1.html)
- [CHILL CLICKER](https://studyplayings.web.app/chill-clicker.html)
- [MOTO ATTACK BIKE RACING](https://studyplaying.github.io/moto-attack-bike-racing.html)
- [TAXI SIMULATOR 2024](https://studyquests.pages.dev/taxi-simulator-2024.html)
- [FIND IT FIND THE DIFFERENCES](https://studyplayings.pages.dev/find-it-find-the-differences.html)
- [FARM OF WORDS](https://studyplayings.web.app/farm-of-words.html)
- [FIGHT TRIVIA](https://studyplayings.web.app/fight-trivia.html)
- [BOMBARDINO CROCODILO TERROR JUMPSCARE](https://studyplaying.github.io/bombardino-crocodilo-terror-jumpscare.html)
- [SQUARE WORLD 3D](https://studyplaying.github.io/square-world-3d.html)
- [RAGDOLL FOOTBALL 2 PLAYERS](https://studyplayings.web.app/ragdoll-football-2-players.html)
- [CATEGORY RACING DRIVING](https://studyplaying.github.io/category-racing-driving.html)
- [BR BR PATAPIM OBBY CHALLENGE](https://studyplayings.web.app/br-br-patapim-obby-challenge.html)
- [MIGHTY RUN](https://studyplayings.web.app/mighty-run.html)
- [CATEGORY STICKMAN 2](https://studyplayings.pages.dev/category-stickman-2.html)
- [SHIP CONTROL 3D](https://studyplayings.pages.dev/ship-control-3d.html)
- [FISH FEEDING](https://studyplayings.pages.dev/fish-feeding.html)
- [CATEGORY DRESS UP 2](https://studyplaying.github.io/category-dress-up-2.html)
- [KITTEN NEVER DIES](https://studyplayings.web.app/kitten-never-dies.html)
- [CATEGORY JUMPING150](https://studyplayings.web.app/category-jumping150.html)
- [CARD MASTER](https://studyplayings.pages.dev/card-master.html)
- [STUDENT AND TEACHER](https://studyplayings.web.app/student-and-teacher.html)
- [MAHJONG GARDEN](https://studyplayings.pages.dev/mahjong-garden.html)
- [ROBBY BOMBERMAN](https://studyplayings.pages.dev/robby-bomberman.html)
- [TEACHER SIMULATOR](https://studyplayings.pages.dev/teacher-simulator.html)
- [CATEGORY CASUAL 5](https://studyplayings.web.app/category-casual-5.html)
- [CATEGORY COLOR197](https://studyplayings.pages.dev/category-color197.html)
- [CATEGORY GOGUARDIAN](https://studyplaying.github.io/category-goguardian.html)
- [ROAD TO 7](https://studyplayings.pages.dev/road-to-7.html)
- [ANTS PARTY](https://studyquests.pages.dev/ants-party.html)
- [SLITHERCRAFT IO](https://studyplayings.web.app/slithercraft-io.html)
- [MONSTER TRUCK CRUSH](https://studyplaying.github.io/monster-truck-crush.html)
- [FLICK SHOT SOCCER](https://studyplaying.github.io/flick-shot-soccer.html)
- [LEVEL EATEN](https://studyplaying.github.io/level-eaten.html)
- [GEOMETRY VIBES X BALL](https://studyplayings.web.app/geometry-vibes-x-ball.html)
- [CATEGORY BASKETBALL 2](https://studyplayings.web.app/category-basketball-2.html)
- [MATCH 3 DREAM ROOM](https://studyquests.pages.dev/match-3-dream-room.html)
- [HERO TRANSFORM RUN](https://learnquester.github.io/hero-transform-run.html)
- [CHALLENGER CITY DRIVER](https://studyplayings.web.app/challenger-city-driver.html)
- [NUTS BOLTS SCREW GLASS](https://studyplaying.github.io/nuts-bolts-screw-glass.html)
- [ANGRY CITY SMASHER](https://studyplayings.pages.dev/angry-city-smasher.html)
- [STEAL BRAINROT ARENA](https://studyplayings.web.app/steal-brainrot-arena.html)
- [SOLITAIRE WINTER](https://learnquester.github.io/solitaire-winter.html)
- [PICK BRAINROT 3D BATTLE](https://studyplaying.github.io/pick-brainrot-3d-battle.html)
- [FURRY KUNG FU](https://studyplaying.github.io/furry-kung-fu.html)
- [CATEGORY BATTLE](https://thelearnquester.web.app/category-battle.html)
- [SMARTLE](https://studyplayings.web.app/smartle.html)
- [ROAD TO 7](https://learnquester.github.io/road-to-7.html)
- [CATEGORY FLASH](https://studyplaying.github.io/category-flash.html)
- [BATTLE OF TANK STEEL](https://learnquester.github.io/battle-of-tank-steel.html)
- [TOILET TIME](https://studyplaying.github.io/toilet-time.html)
- [CATEGORY MAHJONG GAMES](https://thelearnquester.web.app/category-mahjong-games.html)
- [COLOR BLOCK SORT](https://thelearnquester.web.app/color-block-sort.html)
- [THEO MORINIS MAGICAL RESORT](https://learnquester.github.io/theo-morinis-magical-resort.html)
- [1945 AIR FORCE SPACE SHOOTER](https://studyplayings.web.app/1945-air-force-space-shooter.html)
- [CATEGORY GUN238](https://studyplaying.github.io/category-gun238.html)
- [CATEGORY DRAGON](https://studyplaying.github.io/category-dragon.html)
- [ARROW TAP PUZZLE](https://learnquester.github.io/arrow-tap-puzzle.html)
- [SNEAKER ART](https://studyplaying.github.io/sneaker-art.html)
- [ARROW TAP PUZZLE](https://studyplaying.github.io/arrow-tap-puzzle.html)
- [WORD MINE](https://learnquester.github.io/word-mine.html)
- [LIVE OR DIE](https://studyplayings.web.app/live-or-die.html)
- [GROSS OUT RUN](https://studyquests.pages.dev/gross-out-run.html)
- [DISASSEMBLE THE PICTURE PUZZLE](https://studyplaying.github.io/disassemble-the-picture-puzzle.html)
- [DEFORM IT](https://learnquester.github.io/deform-it.html)
- [GRILL IT ALL](https://learnquester.github.io/grill-it-all.html)
- [SLOPE SPOOKY](https://studyquests.pages.dev/slope-spooky.html)
- [CAR CRASH TEST ABANDONED CITY](https://learnquester.github.io/car-crash-test-abandoned-city.html)
- [SORT AND STYLE BACK TO SCHOOL](https://studyquests.pages.dev/sort-and-style-back-to-school.html)
- [XMAS PRESENTS MAHJONG](https://studyplaying.github.io/xmas-presents-mahjong.html)
- [CATEGORY FASHION105](https://studyplaying.github.io/category-fashion105.html)
- [SUMMER CONNECT](https://studyquests.pages.dev/summer-connect.html)
- [REAL DRIVE 3D](https://learnquester.github.io/real-drive-3d.html)
- [BRAINROTS LAVA SURVIVE ONLINE](https://studyquests.pages.dev/brainrots-lava-survive-online.html)
- [CIRCLE RUN ENDLESS](https://studyplayings.pages.dev/circle-run-endless.html)
- [CATEGORY COLOR](https://studyplaying.github.io/category-color.html)
- [THE STONE MINER](https://learnquester.github.io/the-stone-miner.html)
- [HIDDEN OBJECT EMILYS CASE](https://learnquester.github.io/hidden-object-emilys-case.html)
- [CATEGORY MAHJONG37](https://studyplaying.github.io/category-mahjong37.html)
- [COZY KITCHEN MERGE](https://learnquester.github.io/cozy-kitchen-merge.html)
- [GUN EVOLUTION](https://studyquests.pages.dev/gun-evolution.html)
- [CATEGORY COLLECT565](https://studyplaying.github.io/category-collect565.html)
- [CATEGORY MATCH 3 2](https://studyplaying.github.io/category-match-3-2.html)
- [CATEGORY RACING DRIVING](https://studyplayings.web.app/category-racing-driving.html)
- [STACK UP](https://studyplayings.pages.dev/stack-up.html)
- [PIN MASTER](https://studyquests.pages.dev/pin-master.html)
- [PHANTOM THIEF CAT RUNNING](https://studyplaying.github.io/phantom-thief-cat-running.html)
- [CATEGORY MATCH 3 2](https://studyplayings.pages.dev/category-match-3-2.html)
- [ANGRY CHIBI RUN](https://studyplaying.github.io/angry-chibi-run.html)
- [DART HERO](https://studyplayings.pages.dev/dart-hero.html)
- [SUPER STAR ANIMAL SALON](https://learnquester.github.io/super-star-animal-salon.html)
- [BATTLE ARENA](https://learnquester.github.io/battle-arena.html)
- [ROYAL COIN RUSH](https://studyquests.pages.dev/royal-coin-rush.html)
- [COLORSFORMS](https://studyquests.pages.dev/colorsforms.html)
- [CATEGORY DRAWING34](https://thelearnquester.web.app/category-drawing34.html)
- [PALM ISLAND SOLITAIRE](https://learnquester.github.io/palm-island-solitaire.html)
- [PESKY MOLES](https://learnquester.github.io/pesky-moles.html)
- [BLOCKPUZZLE COLOR BLAST](https://studyplaying.github.io/blockpuzzle-color-blast.html)
- [TILEMAN IO](https://thelearnquester.web.app/tileman-io.html)
- [CATEGORY INTERSTELLAR](https://thelearnquester.web.app/category-interstellar.html)
- [MAGIC BUBBLES](https://studyplaying.github.io/magic-bubbles.html)
