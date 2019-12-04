# Algoritmi e Strutture Dati in Javascript

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Questa repository contiene esempi in Javascript dei più popolari algoritmi e strutture dati .

Ogni algortimo e struttura dati ha il suo README separato e la relative spiegazioni e i link per ulteriori approfondimenti (compresi quelli su YouTube).

_Leggilo in altre lingue:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Italian_](README.it-IT.md)

*☝ Si noti che questo progetto è destinato ad essere utilizzato solo per l'apprendimento e la ricerca e non è destinato ad essere utilizzato per il commercio.*

## Strutture Dati

Una struttura di dati è un particolare modo di organizzare e memorizzare i dati in un computer che  permeta di accedervi e modificarli in modo efficiente. Più precisamente, una struttura dati è una raccolta di dati, le relazioni tra di essi e le funzioni o operazioni che possono essere applicate ai dati.

`P` - Principiante, `A` - Avanzato

* `P` [Lista Concatenata](src/data-structures/linked-list)
* `P` [Doppia Lista Concatenata](src/data-structures/doubly-linked-list)
* `P` [Coda](src/data-structures/queue)
* `P` [Pila](src/data-structures/stack)
* `P` [Hash Table](src/data-structures/hash-table)
* `P` [Heap](src/data-structures/heap) - versione massimo e minimo heap
* `P` [Coda di priorità](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Albero](src/data-structures/tree)
  * `A` [Albero binario di ricerca](src/data-structures/tree/binary-search-tree)
  * `A` [Albero AVL](src/data-structures/tree/avl-tree)
  * `A` [RB Albero](src/data-structures/tree/red-black-tree)
  * `A` [Albero Segmentato](src/data-structures/tree/segment-tree) - con  min/max/sum esempi di query
  * `A` [Albero di Fenwick](src/data-structures/tree/fenwick-tree) (Albero binario indicizzato)
* `A` [Grafo](src/data-structures/graph) (direzionale e unidirezionale)
* `A` [Set Disgiunto](src/data-structures/disjoint-set)
* `A` [Filtro Bloom](src/data-structures/bloom-filter)

## Algoritmi

Un algoritmo è una specifica univoca per risolvere una classe di problemi. È
un insieme di regole che definiscono con precisione una sequenza di operazioni.

`P` - Principiante, `A` - Avanzato

### Algoritmi per Topic

* **Matematica**
  * `P` [Manipolazione dei Bit](src/algorithms/math/bits) - set/get/update/clear bits, moltiplicazione/divisione per due, gestire numeri negativi etc.
  * `P` [Fattoriale](src/algorithms/math/factorial) 
  * `P` [Numeri di Fibonacci](src/algorithms/math/fibonacci) - classico e forma chiusa
  * `P` [Test di Primalità](src/algorithms/math/primality-test) (metodo del divisore)
  * `P` [Algoritmo di Euclide](src/algorithms/math/euclidean-algorithm) - trova il massimo comune divisore (MCD)
  * `P` [Minimo Comune Multiplo](src/algorithms/math/least-common-multiple) (MCM)
  * `P` [Crivello di Eratostene](src/algorithms/math/sieve-of-eratosthenes) - trova i numeri i primi fino al limite indicato
  * `P` [Potenza di due](src/algorithms/math/is-power-of-two) - controlla se il numero è una potenza di due
  * `P` [Triangolo di Pascal](src/algorithms/math/pascal-triangle)
  * `P` [Numeri Complessi](src/algorithms/math/complex-number) - numeri complessi e operazioni 
  * `P` [Radiante & Gradi](src/algorithms/math/radian) - conversione da radiante a gradi e viceversa
  * `P` [Potenza di un Numero](src/algorithms/math/fast-powering)
  * `A` [Partizione di un Intero](src/algorithms/math/integer-partition)
  * `A` [Radice Quadrata](src/algorithms/math/square-root) - Metodo di Newton
  * `A` [Algoritmo di Liu Hui π](src/algorithms/math/liu-hui) - calcolare π usando un poligono
  * `A` [Trasformata Discreta di Fourier ](src/algorithms/math/fourier-transform) -decomporre una funzione di tempo (un segnale) nelle frequenze che lo compongono 
* **Set**
  * `P` [Prodotto Cartesiano](src/algorithms/sets/cartesian-product) - moltiplicazione multipla di set
  * `P` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - permutazione casuale di un sequenza finita
  * `A` [Power Set](src/algorithms/sets/power-set) - tutti i sottoinsiemi di un set (soluzioni bitwise e backtracking)
  * `A` [Permutazioni](src/algorithms/sets/permutations) (con e senza ripetizioni)
  * `A` [Combinazioni](src/algorithms/sets/combinations) (con e senza ripetizioni)
  * `A` [Massima Sottosequenza Comune](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Massima Sottosequenza Crescente](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Minima Sottosequenza Diffusa](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema dello Zaino di Knapsack](src/algorithms/sets/knapsack-problem) - "0/1" e "Senza Restrizioni"
  * `A` [Massimo SubArray](src/algorithms/sets/maximum-subarray) - "Brute Force" e "Programmazione Dinamica" versione Kadane
  * `A` [Somma di Combinazioni](src/algorithms/sets/combination-sum) - ricerca di tutte le combinazioni di una somma
* **String**
  * `P` [Distanza di Hamming](src/algorithms/string/hamming-distance) - numero di posizioni in cui i caratteri sono diversi
  * `A` [Distanza di Levenshtein](src/algorithms/string/levenshtein-distance) - numero minimo di modifiche per rendere uguali due stringhe
  * `A` [Algoritmo di Knuth-Morris-Pratt](src/algorithms/string/knuth-morris-pratt) (KMP) - ricerca nella sottostringa (pattern matching)
  * `A` [Algoritmo Z](src/algorithms/string/z-algorithm) - ricerca nella sottostringa (pattern matching)
  * `A` [Algoritmo di Rabin Karp ](src/algorithms/string/rabin-karp) - ricerca nella sottostringa
  * `A` [Sottostringa Comune più lunga](src/algorithms/string/longest-common-substring)
  * `A` [Espressioni Regolari](src/algorithms/string/regular-expression-matching)
* **Searches**
  * `P` [Ricerca Sequenziale](src/algorithms/search/linear-search)
  * `P` [Ricerca a Salti](src/algorithms/search/jump-search) (o Ricerca a Blocchi) - per la ricerca in array ordinati
  * `P` [Ricerca Binari](src/algorithms/search/binary-search) - per la ricerca in array ordinati
  * `P` [Ricerca Interpolata](src/algorithms/search/interpolation-search) - per la ricerca in un array ordinato uniformemente distibuito
* **Sorting**
  * `P` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `P` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `P` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `P` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `P` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort) - con e senza allocazione di ulteriore memoria
  * `P` [Shellsort](src/algorithms/sorting/shell-sort)
  * `P` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `P` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Lista Concatenatas**
  * `P` [Attraversamento Lista Concatenata](src/algorithms/linked-list/traversal)
  * `P` [Attraversamento Lista Concatenata nel senso Contrario](src/algorithms/linked-list/reverse-traversal)
* **Trees**
  * `P` [Ricerca in Profondità su Alberi](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Ricerca in Ampiezza su Alberi](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `P` [Ricerca in Profondità su Grafi](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Breadth-First Search su Grafi](src/algorithms/graph/breadth-first-search) (BFS)
  * `P` [Algoritmo di Kruskal](src/algorithms/graph/kruskal) - ricerca dell'Albero con Minima Distanza (MST) per grafi pesati unidirezionali
  * `A` [Algoritmo di Dijkstra](src/algorithms/graph/dijkstra) - ricerca dei percorsi più breve per raggiungere tutti i vertici del grafo da un singolo vertice 
  * `A` [Algoritmo di Bellman-Ford](src/algorithms/graph/bellman-ford) - ricerca dei percorsi più breve per raggiungere tutti i vertici del grafo da un singolo vertice 
  * `A` [Algoritmo di Floyd-Warshall](src/algorithms/graph/floyd-warshall) -  ricerca dei percorsi più brevi tra tutte le coppie di vertici
  * `A` [Rivelamento dei Cicli](src/algorithms/graph/detect-cycle) - per grafici diretti e non diretti (basate su partizioni DFS e Disjoint Set)
  * `A` [Algoritmo di Prim](src/algorithms/graph/prim) - ricerca dell'Albero Ricoprente Minimo (MST) per grafi unidirezionali pesati
  * `A` [Ordinamento Topologico](src/algorithms/graph/topological-sorting) - metodo DFS
  * `A` [Punti di Articolazione](src/algorithms/graph/articulation-points) - Algoritmo di Tarjan (basato su DFS)
  * `A` [Bridges](src/algorithms/graph/bridges) - basato su DFS
  * `A` [Cammino Euleriano e Circuito Euleriano](src/algorithms/graph/eulerian-path) - Algoritmo di Fleury - Visita ogni margine esattamente una volta
  * `A` [Ciclo di Hamiltonian](src/algorithms/graph/hamiltonian-cycle) - Visita ad ogni vertice solo una volta
  * `A` [Componenti Fortemente Connessa](src/algorithms/graph/strongly-connected-components) - algoritmo di Kosaraju
  * `A` [Problema del Commesso Viaggiatore](src/algorithms/graph/travelling-salesman) - il percorso più breve che visita ogni città e returna alla città iniziale
* **Cryptography**
  * `P` [Hash Polinomiale](src/algorithms/cryptography/polynomial-hash) - Una funzione hash di rolling basata sul polinomio 
* **Uncategorized**
  * `P` [Torre di Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Rotazione Matrice Quadrata](src/algorithms/uncategorized/square-matrix-rotation) - algoritmo in memoria
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, programmazione dinamica (top-down + bottom-up) ed esempre di greeedy
  * `P` [Percorsi Unici](src/algorithms/uncategorized/unique-paths) - backtracking, programmazione dinamica and l'esempio del Triangolo di Pascal  
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `P` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Brute Force** - look at all the possibilities and selects the best solution
  * `P` [Linear Search](src/algorithms/search/linear-search)
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `P` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
  * `P` [Binary Search](src/algorithms/search/binary-search)
  * `P` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `P` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `P` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort)
  * `P` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `P` [Fast Powering](src/algorithms/math/fast-powering)
  * `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
* **Dynamic Programming** - build up a solution using previously found sub-solutions
  * `P` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `P` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `P` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `P` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `P` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
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
| **Lista Concatenata**         | n         | n         | 1         | n         |           |
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
