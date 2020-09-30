Bu depo, birçok popüler algoritma ve veri yapısının JavaScript tabanlı örneklerini içerir.
Her algoritma ve veri yapısının, ilgili açıklamalar ve daha fazla okuma için bağlantılarla birlikte kendi ayrı README'si vardır (YouTube videolarına yönelik olanlar dahil).

Diğer dillerde oku:
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.m)

Bu projenin yalnızca öğrenme ve araştırma amacıyla kullanılması amaçlandığını ve üretim için kullanılması amaçlanmadığını unutmayın.

## Veri yapıları : 

Bir veri yapısı, bir bilgisayar içerisindeki veriyi depolama ve organize etmenin özel bir yoludur. Böylece, erişilebilir ve  verimli bir şekilde değiştrilebilir.
Daha kesin olmak gerekirse, bir veri yapısı veri değerlerinin, onların aralarındaki ilişkinin, fonksiyonların veyahut veriye uygulanabilecek işlemlerin koleksiyonudur/derlemesidir.

`B` - Başlangıç, `G` - Gelişmiş

* `B` [Linked List](src/data-structures/linked-list)
* `B` [Doubly Linked List](src/data-structures/doubly-linked-list)
* `B` [Queue](src/data-structures/queue)
* `B` [Stack](src/data-structures/stack)
* `B` [Hash Table](src/data-structures/hash-table)
* `B` [Heap](src/data-structures/heap) - max and min heap versions
* `B` [Priority Queue](src/data-structures/priority-queue)
* `G` [Trie](src/data-structures/trie)
* `G` [Tree](src/data-structures/tree)
  * `G` [Binary Search Tree](src/data-structures/tree/binary-search-tree)
  * `G` [AVL Tree](src/data-structures/tree/avl-tree)
  * `G` [Red-Black Tree](src/data-structures/tree/red-black-tree)
  * `G` [Segment Tree](src/data-structures/tree/segment-tree) - minimum/maksimum/toplam sorgu örnekleriyle
  * `G` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree) 
* `G` [Graph](src/data-structures/graph) (hem yönlendirilmiş hem de yönlendirilmemiş)
* `G` [Disjoint Set](src/data-structures/disjoint-set)
* `G` [Bloom Filter](src/data-structures/bloom-filter)

## Algoritmalar

Bir algoritma, bir problem sınıfının nasıl çözüleceğine dair kesin bir tanımlamadır. Bu bir işlem dizisini açıkça tanımlayan bir dizi kuraldır.

`B` - Başlangıç, `G` - Gelişmiş

### Konuya göre algoritmalar

* **Math**
  * `B` [Bit Manipulation](src/algorithms/math/bits) - Bitleri bölmek,getirmek, güncellemek, temizlemek, 2 ile çarpmak/bölmek, negatif yapmak vb. 
  * `B` [Factorial](src/algorithms/math/factorial) 
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci) - Klasik ve closed-form versiyonlar 
  * `B` [Primality Test](src/algorithms/math/primality-test) (trial division method)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - En büyük ortak böleni (EBOB) hesaplama 
  * `B` [Least Common Multiple](src/algorithms/math/least-common-multiple) En küçük ortak kat (EKOK)
  * `B` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - herhangi bir limite kadar olan tüm asal sayıları bulma
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - sayının ikinin kuvveti olup olmadığını kontrol etmek (naif ve bitsel algoritmalar)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Complex Number](src/algorithms/math/complex-number) - karmaşık sayılar ve onlarla temel işlemler
  * `B` [Radian & Degree](src/algorithms/math/radian) - radyan dereceye ve geriye doğru dönüşüm
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `G` [Integer Partition](src/algorithms/math/integer-partition)
  * `G` [Square Root](src/algorithms/math/square-root) - Newton metodu
  * `G` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  * `G` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up 
* **Sets**
  * `G` [Cartesian Product](src/algorithms/sets/cartesian-product) - product of multiple sets
  * `G` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `G` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
  * `G` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `G` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
  * `G` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `G` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `G` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `G` [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `G` [Maximum Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  * `G` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Strings**
  * `B` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `G` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `G` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `G` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `G` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
  * `G` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `G` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
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
  * `G` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * `G` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest paths to all graph vertices from single vertex
  * `G` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `G` [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `G` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `G` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS method
  * `G` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `G` [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
  * `G` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `G` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `G` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `G` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Cryptography**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
  * `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
* **Machine Learning**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
* **Uncategorized**
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples 
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples 
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `G` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `G` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `G` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `G` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `G` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `G` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `G` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `G` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `G` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * `B` [Binary Search](src/algorithms/search/binary-search)
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `G` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `G` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
* **Dynamic Programming** - build up a solution using previously found sub-solutions
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `G` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `G` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `G` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `G` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `G` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `G` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `G` [Integer Partition](src/algorithms/math/integer-partition)
  * `G` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `G` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * `G` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `G` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  * `G` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `G` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `G` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `G` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
