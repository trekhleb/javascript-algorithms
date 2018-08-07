# Algoritmos JavaScript y estructuras de datos

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Este repositorio contiene ejemplos basados en JavaScript de muchos
algoritmos populares y estructuras de datos.

Cada algoritmo y estructura de datos tiene su propio LÉAME
con explicaciones relacionadas y enlaces para lecturas adicionales (incluyendo algunas
a vídeos de YouTube).

_Léelo en otros idiomas:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md)

 > Estamos escribiendo un libro que explicará claramente, en detalle, los principales algoritmos.
Si desea ser notificado cuando se publique el libro "Algoritmos JavaScript
lanzamientos, [haga clic aquí](https://upscri.be/402324/).

## Estructuras de datos

Una estructura de datos es una forma particular de organizar y almacenar datos en un ordenador para que pueda
y modificarse de forma eficiente. Más concretamente, una estructura de datos es un conjunto de datos
los valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a
los datos.

`P` - Principiante, `A` - Avanzado

* `P` [Lista Enlazada](src/data-structures/linked-list)
* `P` [Lista Doblemente Enlazada](src/data-structures/doubly-linked-list)
* `P` [Cola](src/data-structures/queue)
* `P` [Pila - Stack](src/data-structures/stack)
* `P` [Hash Table](src/data-structures/hash-table)
* `P` [Pila - Heap](src/data-structures/heap)
* `P` [Cola de Prioridad](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Arbol](src/data-structures/tree)
    * `A` [Arbol de busqueda binaria](src/data-structures/tree/binary-search-tree)
    * `A` [Arbol AVL ](src/data-structures/tree/avl-tree)
    * `A` [Árbol Rojo-Negro](src/data-structures/tree/red-black-tree)
    * `A` [Árbol de segmentos](src/data-structures/tree/segment-tree) - con ejemplos de consultas de rango mín/máx/suma
    * `A` [Arbol de Fenwick ](src/data-structures/tree/fenwick-tree) (Árbol binario indexado)
* `A` [Grafo](src/data-structures/graph) (con dirección y sin dirección)
* `A` [Conjunto disjunto](src/data-structures/disjoint-set)
* `A` [Filtro Bloom](src/data-structures/bloom-filter)

## Algoritmos

Un algoritmo es una especificación inequívoca de cómo resolver una clase de problemas. Es un conjunto de reglas que definen con precisión una secuencia de operaciones.

`P` - Principiante, `A` - Avanzado

### Algoritmos por Tema

* **Matematica**
  * `P` [Manipulacion de bits](src/algorithms/math/bits) - setear/obtener/actualizar/limpiar bits, multiplication/division por dos, hacer negativo, etc.
  * `P` [Factorial](src/algorithms/math/factorial) 
  * `P` [Numero de Fibonacci](src/algorithms/math/fibonacci)
  * `P` [Prueba de Primacia](src/algorithms/math/primality-test) (metodo de division de prueba)
  * `P` [Algoritmo Euclideo](src/algorithms/math/euclidean-algorithm) - Calcular el maximo comun divisor (MCD)
  * `P` [Minimo comun multiplo](src/algorithms/math/least-common-multiple) (MCM)
  * `P` [Tamiz de Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - encontrar todos los números primos hasta cualquier límite dado
  * `P` [Es la potencia de dos](src/algorithms/math/is-power-of-two) - comprueba si el número es la potencia de dos (algoritmos ingenuos y de bits)
  * `P` [Triangulo de Pascal](src/algorithms/math/pascal-triangle)
  * `A` [Particion Entera](src/algorithms/math/integer-partition)
  * `A` [Algortimo π de Liu Hui  ](src/algorithms/math/liu-hui) - aproximado π cálculos basados en N-gons
* **Conjuntos**
  * `P` [Producto Cartesiano](src/algorithms/sets/cartesian-product) - pproducto de múltiples conjuntos
  * `P` [Permutación de Fisher–Yates](src/algorithms/sets/fisher-yates) - permutación aleatoria de una secuencia finita
  * `A` [Conjunto Potencia](src/algorithms/sets/power-set) - todos los subconjuntos de un conjunto
  * `A` [Permutaciones](src/algorithms/sets/permutations) (con y sin repeticiones)
  * `A` [Combinaciones](src/algorithms/sets/combinations) (con y sin repeticiones)
  * `A` [Subsecuencia Común más Larga](src/algorithms/sets/longest-common-subsequence) (SCL)
  * `A` [Subsecuencia Creciente mas Larga](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersequencia Común Más Corta](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema de la Mochila](src/algorithms/sets/knapsack-problem) - "0/1" y unos sin consolidar
  * `A` [Maxima Subcoleccion](src/algorithms/sets/maximum-subarray) - versiones de "Fuerza Bruta" y "Programación Dinámica" ( de Kadane's)
  * `A` [Suma Combinada](src/algorithms/sets/combination-sum) -  encuentra todas las combinaciones que forman una suma específica.
* **Cadenas de caracteres**
  * `P` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Busquedas**
  * `P` [Linear Search](src/algorithms/search/linear-search)
  * `P` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `P` [Binary Search](src/algorithms/search/binary-search) - search in sorted array
  * `P` [Interpolation Search](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Ordenamiento**
  * `P` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `P` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `P` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `P` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `P` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `P` [Shellsort](src/algorithms/sorting/shell-sort)
  * `P` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `P` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Arboles**
  * `P` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Grafos**
  * `P` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `P` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest paths to all graph vertices from single vertex
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS method
  * `A` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Sin Categoria**
  * `P` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples 
  * `P` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples 
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algoritmos por Paradigma

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

* **Fuerza Bruta** - look at all the possibilities and selects the best solution
  * `P` [Linear Search](src/algorithms/search/linear-search)
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Greedy** - choose the best option at the current time, without any consideration for the future
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide y venceras** - divide the problem into smaller parts and then solve those parts
  * `P` [Binary Search](src/algorithms/search/binary-search)
  * `P` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `P` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `P` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort)
  * `P` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
* **Programacion Dinamica** - build up a solution using previously found sub-solutions
  * `P` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `P` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `P` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
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
* **De Retorceso** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
different path of finding a solution. Normally the DFS traversal of state-space is being used.
  * `P` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `P` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Ramas y Limites** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
tree is being used.

## Como usar este repositorio

**Instalar las dependencias**
```
npm install
```

**Correr ESLint**

Es posible que desee ejecutarlo para comprobar la calidad del código.

```
npm run lint
```

**Correr los tests**
```
npm test
```

**Correr tests por nombre**
```
npm test -- 'LinkedList'
```

**Campo de Juegos**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Información util

### Refrencias

[▶ Estructuras de datos y Algoritmos en YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notacion Big O

Order of growth of algorithms specified in Big O notation.

![Graficas de Big O ](./assets/big-o-graph.png)

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
