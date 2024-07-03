# Algoritmos y Estructuras de Datos en JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Este repositorio contiene ejemplos basados en JavaScript de muchos
algoritmos y estructuras de datos populares.

Cada algoritmo y estructura de datos tiene su propio LÉAME con explicaciones relacionadas y
enlaces para lecturas adicionales (incluyendo algunas a vídeos de YouTube).

_Léelo en otros idiomas:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

*☝ Nótese que este proyecto está pensado con fines de aprendizaje e investigación,
y **no** para ser usado en producción.*

## Estructuras de Datos

Una estructura de datos es una forma particular de organizar y almacenar datos en un ordenador para que puedan accederse
y modificarse de forma eficiente. Más concretamente, una estructura de datos es un conjunto de valores
de datos, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a
los datos.

`P` - Principiante, `A` - Avanzado

* `P` [Lista enlazada](src/data-structures/linked-list)
* `P` [Lista doblemente enlazada](src/data-structures/doubly-linked-list)
* `P` [Cola](src/data-structures/queue)
* `P` [Pila](src/data-structures/stack)
* `P` [Tabla hash](src/data-structures/hash-table)
* `P` [Heap](src/data-structures/heap) - versiones máx y mín
* `P` [Cola de prioridad](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Árbol](src/data-structures/tree)
  * `A` [Árbol de búsqueda binaria](src/data-structures/tree/binary-search-tree)
  * `A` [Árbol AVL](src/data-structures/tree/avl-tree)
  * `A` [Árbol Rojo-Negro](src/data-structures/tree/red-black-tree)
  * `A` [Árbol de segmentos](src/data-structures/tree/segment-tree) - con ejemplos de consultas de rango mín/máx/suma
  * `A` [Árbol de Fenwick](src/data-structures/tree/fenwick-tree) (Árbol binario indexado)
* `A` [Grafo](src/data-structures/graph) (dirigido y no dirigido)
* `A` [Conjuntos disjuntos](src/data-structures/disjoint-set)
* `A` [Filtro de Bloom](src/data-structures/bloom-filter)

## Algoritmos

Un algoritmo es una especificación inequívoca de cómo resolver una clase de problemas. Es un conjunto de reglas que
definen con precisión una secuencia de operaciones.

`P` - Principiante, `A` - Avanzado

### Algoritmos por Tema

* **Matemáticas**
  * `P` [Manipulación de bits](src/algorithms/math/bits) - asignar/obtener/actualizar/limpiar bits, multiplicación/división por dos, hacer negativo, etc.
  * `P` [Factorial](src/algorithms/math/factorial)
  * `P` [Número de Fibonacci](src/algorithms/math/fibonacci)
  * `P` [Prueba de primalidad](src/algorithms/math/primality-test) (método de división de prueba)
  * `P` [Algoritmo de Euclides](src/algorithms/math/euclidean-algorithm) - calcular el Máximo común divisor (MCD)
  * `P` [Mínimo común múltiplo](src/algorithms/math/least-common-multiple) (MCM)
  * `P` [Criba de Eratóstenes](src/algorithms/math/sieve-of-eratosthenes) - encontrar todos los números primos hasta un límite dado
  * `P` [Es una potencia de dos?](src/algorithms/math/is-power-of-two) - comprobar si el número es una potencia de dos (algoritmos ingenuos y de bits)
  * `P` [Triángulo de Pascal](src/algorithms/math/pascal-triangle)
  * `P` [Números complejos](src/algorithms/math/complex-number) - números complejos y operaciones con ellos
  * `P` [Radianes & Grados](src/algorithms/math/radian) - conversión de radianes a grados y viceversa
  * `P` [Exponenciación rápida](src/algorithms/math/fast-powering)
  * `A` [Partición entera](src/algorithms/math/integer-partition)
  * `A` [Algoritmo π de Liu Hui](src/algorithms/math/liu-hui) - aproximar el cálculo de  π basado en polígonos de N lados
  * `A` [Transformada discreta de Fourier](src/algorithms/math/fourier-transform) - descomponer una función de tiempo (señal) en las frecuencias que la componen
* **Conjuntos**
  * `P` [Producto cartesiano](src/algorithms/sets/cartesian-product) - producto de múltiples conjuntos
  * `P` [Permutación de Fisher–Yates](src/algorithms/sets/fisher-yates) - permutación aleatoria de una secuencia finita
  * `A` [Conjunto potencia](src/algorithms/sets/power-set) - todos los subconjuntos de un conjunto
  * `A` [Permutaciones](src/algorithms/sets/permutations) (con y sin repeticiones)
  * `A` [Combinaciones](src/algorithms/sets/combinations) (con y sin repeticiones)
  * `A` [Subsecuencia común más larga](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Subsecuencia creciente más larga](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersecuencia común más corta](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema de la mochila](src/algorithms/sets/knapsack-problem) - "0/1" y "sin límite"
  * `A` [Máximo subarreglo](src/algorithms/sets/maximum-subarray) - versiones de "fuerza bruta" y "programación dinámica" (de Kadane)
  * `A` [Suma combinada](src/algorithms/sets/combination-sum) - encuentra todas las combinaciones que forman una suma específica
* **Cadenas de caracteres**
  * `P` [Distancia de Hamming](src/algorithms/string/hamming-distance) - número de posiciones en las que los símbolos son diferentes
  * `A` [Distancia de Levenshtein](src/algorithms/string/levenshtein-distance) - distancia mínima de edición entre dos secuencias
  * `A` [Algoritmo Knuth-Morris-Pratt](src/algorithms/string/knuth-morris-pratt) (Algoritmo KMP) - búsqueda de subcadenas (coincidencia de patrones)
  * `A` [Algoritmo Z](src/algorithms/string/z-algorithm) - búsqueda de subcadenas (coincidencia de patrones)
  * `A` [Algoritmo de Rabin Karp](src/algorithms/string/rabin-karp) - búsqueda de subcadenas
  * `A` [Subcadena común más larga](src/algorithms/string/longest-common-substring)
  * `A` [Coincidencia por expresiones regulares](src/algorithms/string/regular-expression-matching)
* **Búsquedas**
  * `P` [Búsqueda lineal](src/algorithms/search/linear-search)
  * `P` [Búsqueda de salto](src/algorithms/search/jump-search) (o Búsqueda de bloque) - búsqueda en una lista ordenada
  * `P` [Búsqueda binaria](src/algorithms/search/binary-search) - búsqueda en una lista ordenada
  * `P` [Búsqueda por interpolación](src/algorithms/search/interpolation-search) - búsqueda en una lista ordenada uniformemente distribuida
* **Ordenamiento**
  * `P` [Ordenamiento de burbuja](src/algorithms/sorting/bubble-sort)
  * `P` [Ordenamiento por selección](src/algorithms/sorting/selection-sort)
  * `P` [Ordenamiento por inserción](src/algorithms/sorting/insertion-sort)
  * `P` [Ordenamiento por Heap](src/algorithms/sorting/heap-sort)
  * `P` [Ordenamiento por mezcla](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort) - implementaciones in situ y no in situ
  * `P` [Shellsort](src/algorithms/sorting/shell-sort)
  * `P` [Ordenamiento por cuentas](src/algorithms/sorting/counting-sort)
  * `P` [Ordenamiento Radix](src/algorithms/sorting/radix-sort)
* **Listas enlazadas**
  * `P` [Recorrido directo](src/algorithms/linked-list/traversal)
  * `P` [Recorrido inverso](src/algorithms/linked-list/reverse-traversal)
* **Árboles**
  * `P` [Búsqueda en profundidad](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Búsqueda en anchura](src/algorithms/tree/breadth-first-search) (BFS)
* **Grafos**
  * `P` [Búsqueda en profundidad](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Búsqueda en anchura](src/algorithms/graph/breadth-first-search) (BFS)
  * `P` [Algoritmo de Kruskal](src/algorithms/graph/kruskal) - encontrar el árbol de cubrimiento mínimo (MST) para un grafo no dirigido ponderado
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - encontrar los caminos más cortos a todos los vértices del grafo desde un solo vértice
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - encontrar los caminos más cortos a todos los vértices del grafo desde un solo vértice
  * `A` [Algoritmo de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - encontrar los caminos más cortos entre todos los pares de vértices
  * `A` [Detectar ciclos](src/algorithms/graph/detect-cycle) - para grafos dirigidos y no dirigidos (versiones basadas en DFS y conjuntos disjuntos)
  * `A` [Algoritmo de Prim](src/algorithms/graph/prim) - encontrar el árbol de cubrimiento mínimo (MST) para un grafo no dirigido ponderado
  * `A` [Ordenamiento topológico](src/algorithms/graph/topological-sorting) - método DFS
  * `A` [Puntos de articulación](src/algorithms/graph/articulation-points) - algoritmo de Tarjan (basado en DFS)
  * `A` [Puentes](src/algorithms/graph/bridges) - algoritmo basado en DFS
  * `A` [Camino euleriano y circuito euleriano](src/algorithms/graph/eulerian-path) - algoritmo de Fleury - visitar cada arista exactamente una vez
  * `A` [Ciclo hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - visitar cada vértice exactamente una vez
  * `A` [Componentes fuertemente conexos](src/algorithms/graph/strongly-connected-components) - algoritmo de Kosaraju
  * `A` [Problema del viajante](src/algorithms/graph/travelling-salesman) - la ruta más corta posible que visita cada ciudad y vuelve a la ciudad de origen
* **Criptografía**
  * `P` [Hash polinomial](src/algorithms/cryptography/polynomial-hash) - función de hash rodante basada en polinomio
* **Sin categoría**
  * `P` [Torre de Hanói](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Rotación de matriz cuadrada](src/algorithms/uncategorized/square-matrix-rotation) - algoritmo in situ
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game) - ejemplos de backtracking, programación dinámica (de arriba hacia abajo + de abajo hacia arriba) y voraces
  * `P` [Caminos únicos](src/algorithms/uncategorized/unique-paths) - ejemplos de backtracking, programación dinámica y basados en el Triángulo de Pascal
  * `P` [Terrazas pluviales](src/algorithms/uncategorized/rain-terraces) - el problema de la retención del agua de lluvia (programación dinámica y fuerza bruta)
  * `A` [Problema de las N Reinas](src/algorithms/uncategorized/n-queens)
  * `A` [Problema del caballo (Knight tour)](src/algorithms/uncategorized/knight-tour)

### Algoritmos por paradigma

Un paradigma algorítmico es un método o enfoque genérico que subyace al diseño de una clase de algoritmos.
Es una abstracción superior a la noción de algoritmo, del mismo modo que un algoritmo es una abstracción superior a un programa de ordenador.

* **Fuerza Bruta** - mira todas las posibilidades y selecciona la mejor solución
  * `P` [Búsqueda lineal](src/algorithms/search/linear-search)
  * `P` [Terrazas pluviales](src/algorithms/uncategorized/rain-terraces) - el problema de la retención del agua de lluvia
  * `A` [Máximo subarreglo](src/algorithms/sets/maximum-subarray)
  * `A` [Problema del viajante](src/algorithms/graph/travelling-salesman) - la ruta más corta posible que visita cada ciudad y vuelve a la ciudad de origen
  * `A` [Transformada discreta de Fourier](src/algorithms/math/fourier-transform) - descomponer una función de tiempo (señal) en las frecuencias que la componen
* **Voraces** - escoge la mejor opción en el momento actual, sin ninguna consideración sobre el futuro
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game)
  * `A` [Problema de la mochila sin límite](src/algorithms/sets/knapsack-problem)
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - encontrar los caminos más cortos a todos los vértices del grafo desde un solo vértice
  * `A` [Algoritmo de Prim](src/algorithms/graph/prim) - encontrar el árbol de cubrimiento mínimo (MST) para un grafo no dirigido ponderado
  * `A` [Algoritmo de Kruskal](src/algorithms/graph/kruskal) - encontrar el árbol de cubrimiento mínimo (MST) para un grafo no dirigido ponderado
* **Divide y Vencerás** - divide el problema en partes más pequeñas y luego resuelve esas partes
  * `P` [Búsqueda binaria](src/algorithms/search/binary-search)
  * `P` [Torre de Hanói](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Triángulo de Pascal](src/algorithms/math/pascal-triangle)
  * `P` [Algoritmo de Euclides](src/algorithms/math/euclidean-algorithm) - calcular el Máximo Común Divisor (MCD)
  * `P` [Ordenamiento por mezcla](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort)
  * `P` [Búsqueda en profundidad (árboles)](src/algorithms/tree/depth-first-search) - (DFS)
  * `P` [Búsqueda en profundidad (grafos)](src/algorithms/graph/depth-first-search) - (DFS)
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game)
  * `P` [Exponenciación rápida](src/algorithms/math/fast-powering)
  * `A` [Permutaciones](src/algorithms/sets/permutations) - (con y sin repeticiones)
  * `A` [Combinaciones](src/algorithms/sets/combinations) - (con y sin repeticiones)
* **Programación Dinámica** - construye una solución usando sub-soluciones previamente encontradas
  * `P` [Número de Fibonacci](src/algorithms/math/fibonacci)
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game)
  * `P` [Caminos únicos](src/algorithms/uncategorized/unique-paths)
  * `P` [Terrazas pluviales](src/algorithms/uncategorized/rain-terraces) - el problema de la retención del agua de lluvia
  * `A` [Distancia de Levenshtein](src/algorithms/string/levenshtein-distance) - distancia mínima de edición entre dos secuencias
  * `A` [Subsecuencia común más larga](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Subcadena común más larga](src/algorithms/string/longest-common-substring)
  * `A` [Subsecuencia creciente más larga](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersecuencia común más corta](src/algorithms/sets/shortest-common-supersequence)
  * `A` [Problema de la mochila 0/1](src/algorithms/sets/knapsack-problem)
  * `A` [Partición entera](src/algorithms/math/integer-partition)
  * `A` [Máximo subarreglo](src/algorithms/sets/maximum-subarray)
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - encontrar los caminos más cortos a todos los vértices del grafo desde un solo vértice
  * `A` [Algoritmo de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - encontrar los caminos más cortos entre todos los pares de vértices
  * `A` [Coincidencia por expresiones regulares](src/algorithms/string/regular-expression-matching)
* **De Retorceso (Backtracking)** - De manera similar a la fuerza bruta, trata de generar todas las soluciones posibles, pero cada vez que genere la siguiente solución, comprueba si cumple con todas las condiciones, y sólo entonces continúa generando soluciones posteriores. De lo contrario, retrocede y sigue un camino diferente para encontrar una solución. Normalmente se utiliza un recorrido en profundidad (DFS) del espacio de estados.
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game)
  * `P` [Caminos únicos](src/algorithms/uncategorized/unique-paths)
  * `P` [Conjunto potencia](src/algorithms/sets/power-set) - todos los subconjuntos de un conjunto
  * `A` [Ciclo hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - visitar cada vértice exactamente una vez
  * `A` [Problema de las N Reinas](src/algorithms/uncategorized/n-queens)
  * `A` [Problema del caballo (Knight tour)](src/algorithms/uncategorized/knight-tour)
  * `A` [Suma combinada](src/algorithms/sets/combination-sum) - encuentra todas las combinaciones que forman una suma específica
* **Ramas y Límites** - recuerda la solución de menor costo encontrada en cada etapa de la búsqueda de rastreo, y utilizar el costo de la solución de menor costo encontrada hasta el momento como un límite inferior del costo de una solución de menor costo para el problema, a fin de descartar soluciones parciales con costos mayores que la solución de menor costo encontrada hasta el momento. Normalmente se utiliza un recorrido BFS en combinación con un recorrido DFS del árbol del espacio de estados.

## Cómo usar este repositorio

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

**Campo de juegos**

Puede jugar con estructuras de datos y algoritmos en el archivo `./src/playground/playground.js` y escribir
pruebas para ello en `./src/playground/__test__/playground.test.js`.

A continuación, simplemente ejecute el siguiente comando para comprobar si el código funciona como se espera:

```
npm test -- 'playground'
```

## Información útil

### Referencias

[▶ Estructuras de datos y algoritmos en YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notación O Grande

Orden de crecimiento de los algoritmos especificados en la notación O grande.

![Gráficas de Notación O grande ](./assets/big-o-graph.png)

Fuente: [Big O Cheat Sheet](http://bigocheatsheet.com/).

A continuación se muestra la lista de algunas de las notaciones de Big O más utilizadas y sus comparaciones de rendimiento
frente a diferentes tamaños de los datos de entrada.

| Notación O grande | Cálculos para 10 elementos | Cálculos para 100 elementos | Cálculos para 1000 elementos |
| ----------------- | -------------------------- | --------------------------- | ---------------------------- |
| **O(1)**          | 1                          | 1                           | 1                            |
| **O(log N)**      | 3                          | 6                           | 9                            |
| **O(N)**          | 10                         | 100                         | 1000                         |
| **O(N log N)**    | 30                         | 600                         | 9000                         |
| **O(N^2)**        | 100                        | 10000                       | 1000000                      |
| **O(2^N)**        | 1024                       | 1.26e+29                    | 1.07e+301                    |
| **O(N!)**         | 3628800                    | 9.3e+157                    | 4.02e+2567                   |

### Complejidad de las operaciones de estructuras de datos

| Estructura de Datos            | Accesso | Busqueda | Inserción | Borrado | Comentarios                                                     |
| ------------------------------ | :-----: | :------: | :-------: | :-----: | :-------------------------------------------------------------- |
| **Colección**                  |    1    |    n     |     n     |    n    |                                                                 |
| **Stack**                      |    n    |    n     |     1     |    1    |                                                                 |
| **Cola**                       |    n    |    n     |     1     |    1    |                                                                 |
| **Lista enlazada**             |    n    |    n     |     1     |    1    |                                                                 |
| **Tabla hash**                 |    -    |    n     |     n     |    n    | En caso de función hash perfecta los costos serían O(1)         |
| **Búsqueda por Árbol binario** |    n    |    n     |     n     |    n    | En el caso de un árbol equilibrado, los costos serían O(log(n)) |
| **Árbol B**                    | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Árbol Rojo-Negro**           | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Árbol AVL**                  | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Filtro de Bloom**            |    -    |    1     |     1     |    -    | Falsos positivos son posibles durante la búsqueda               |

### Complejidad de algoritmos de ordenamiento de arreglos

| Nombre                           | Mejor         | Promedio                | Pero                        | Memorya | Estable | Comentarios                                                   |
| -------------------------------- | :-----------: | :---------------------: | :-------------------------: | :-----: | :-----: | :------------------------------------------------------------ |
| **Ordenamiento de burbuja**      |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |  Si     |                                                               |
| **Ordenamiento por inserción**   |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |  Si     |                                                               |
| **Ordenamiento por selección**   | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |   No    |                                                               |
| **Ordenamiento por Heap**        | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1     |   No    |                                                               |
| **Ordenamiento por mezcla**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n     |  Si     |                                                               |
| **Quicksort**                    | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n)  |   No    | Quicksort utiliza O(log(n)) de espacio en el stack         |
| **Shellsort**                    | n&nbsp;log(n) | depende de la secuencia de huecos | n&nbsp;(log(n))<sup>2</sup> |   1   |   No   |                                                               |
| **Ordenamiento por cuentas**     |     n + r     |          n + r          |            n + r            | n + r   |  Si     | r - mayor número en el arreglo                                |
| **Ordenamiento Radix**           |    n \* k     |         n \* k          |           n \* k            | n + k   |  Si     | k - largo de la llave más larga                                     |

> ℹ️ Algunos otros [proyectos](https://trekhleb.dev/projects/) y [artículos](https://trekhleb.dev/blog/) sobre JavaScript y algoritmos en [trekhleb.dev](https://trekhleb.dev)
