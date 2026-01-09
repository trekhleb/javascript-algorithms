# JavaScript Algoritmi i Strukture podataka 
# IN PROGRESS...

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)


Ovaj repozitorij sadrzi JavaScript bazirane primjere od vise
popularnih Algoritama i Struktura podataka.

Svaki Algoritam i Struktura podataka ima svoj vlastiti, poseban README
koji je povezan sa objasnjenjima i linkovima za dalje citanje (ukljucujuci i Youtube video materijale).

_procitajte na drugim jezicima:_
[_Arabic_](README.ar-AR.md),
[_Türk_](README.tr-TR.md),
[_Русский_](README.ru-RU.md),
[_Français_](README.fr-FR.md),
[_Italiana_](README.it-IT.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),


*☝ Ovaj projekt je osmisljen da se koristi iskljucivo u svrhe ucenja i nacunog istrazivanja, i **nije** osmisljen da bude koristen u produkciji.*

## Strukture Podataka 

Struktura podataka je poseban način organiziranja i pohranjivanja podataka u računar kako bi istim
mogloe ofikasno pristupiti i mijenjati. Preciznije, struktura podataka je zbirka podataka
vrijednosti, odnosa među njima, funkcije ili operacije koje se mogu primijeniti na
podatke.

`B` - Pocetnik - Beginner, `A` - Napredni - Advanced

* `B` [Linked List](src/data-structures/linked-list)
* `B` [Doubly Linked List](src/data-structures/doubly-linked-list)
* `B` [Queue](src/data-structures/queue)
* `B` [Stack](src/data-structures/stack)
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
* `A` [Disjoint Set](src/data-structures/disjoint-set)
* `A` [Bloom Filter](src/data-structures/bloom-filter)

## Algoritmi

Algoritam je nedvosmislena specifikacija kako riješiti klasu problema. To je
skup pravila koja precizno definiraju niz operacija.

`B` - Pocetnik - Beginner, `A` - Napredni - Advanced

### Algoritmi po temama

* **Matematika**
  * `B` [Bit Manipulation](src/algorithms/math/bits) - postaviti / dobiti / ažurirati / očistiti bitove, množenje / dijeljenje sa dva, napraviti negativne itd
  * `B` [Factorial](src/algorithms/math/factorial)
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci) - klasične verzije i verzije zatvorenog oblika
  * `B` [Prime Factors](src/algorithms/math/prime-factors) - pronalaženje glavnih faktora i njihovo brojanje pomoću Hardy-Ramanujanove teoreme
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
* **Setovi**
  * `B` [Cartesian Product](src/algorithms/sets/cartesian-product) - product of multiple sets
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `A` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
  * `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Stringovi**
  * `B` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Pretrage**
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `B` [Binary Search](src/algorithms/search/binary-search) - search in sorted array
  * `B` [Interpolation Search](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Sortiranje**
  * `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Linkovane Liste**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Trees**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Grafovi**
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
* **Kriptografija**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
  * `B` [Rail Fence Cipher](src/algorithms/cryptography/rail-fence-cipher) - a transposition cipher algorithm for encoding messages
  * `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
  * `B` [Hill Cipher](src/algorithms/cryptography/hill-cipher) - substitution cipher based on linear algebra
* **Masinsko ucenje**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
  * `B` [k-NN](src/algorithms/ml/knn) - k-nearest neighbors classification algorithm
  * `B` [k-Means](src/algorithms/ml/k-means) - k-Means clustering algorithm
* **Procesiranje slika**
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - content-aware image resizing algorithm
* **Nekategorizirani**
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `B` [Best Time To Buy Sell Stocks](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algoritmi Paradigme

Algoritmička paradigma je generička metoda ili pristup koji leži u osnovi dizajna klase
algoritama. To je apstrakcija viša od pojma algoritma, baš kao i
sto je i algoritam viša apstrakcija od računarskog programa.

* ** Brute Force ** - sagledajte sve mogućnosti i odaberite najbolje rješenje
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy** - odaberite najbolju opciju u ovom trenutku, bez ikakvog razmatranja za budućnost
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding the shortest path to all graph vertices
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - podijeli problem na manje dijelove, a zatim riješi te dijelove
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
* **Dynamic Programming** - izgraditi rješenje koristeći prethodno pronađena podrešenja
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
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
* **Backtracking** - slično kao brute force, pokušaj generirati sva moguća rješenja, ali svaki put kada generiramo sljedeće rješenje testiramo
da li zadovoljava sve uvjete, a tek onda nastavimo s generiranjem sljedećih rješenja. U suprotnom, vrati se i idi dalje trazeci drugi put pronalaženja rješenja. Uobičajeno se koristi DFS traversal of state-space.
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Branch & Bound** - pamti se najjefikasnije rješenje pronađeno u svakoj fazi povratka unatrag,
pretraži i upotrijebi cijenu tog rješenja pronađenog do sada kao donju granicu cijene
za najjeftinije/najefikasnije (koje trosi najmanje resursa) rješenje problema, kako bi se odbacila djelomična rješenja s troškovima većim od
do sada pronađenog najjeftinijeg/najefikasnijeg rješenja. Uobicajeno se koristi BFS traversal u kombinaciji sa DFS traversal of state-space
tree.

## Kako koristiti ovaj repozitorij

**Instaliraj dependencies**

```
npm install
```

**Pokreni ESLint**

You may want to run it to check code quality.

```
npm run lint
```

**Pokreni sve tests**

```
npm test
```

**Pokreni testove po imenu**

```
npm test -- 'LinkedList'
```

**Problematika i kako je rijesiti**

In case if linting or testing is failing try to delete the `node_modules` folder and re-install npm packages:

```
rm -rf ./node_modules
npm i
```

**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

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

## Project Backers

> You may support this project via ❤️️ [GitHub](https://github.com/sponsors/trekhleb) or ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Folks who are backing this project](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 0`
