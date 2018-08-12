# Algoritmos JavaScript y Estructuras de Datos

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Este repositorio contiene ejemplos basados en JavaScript de muchos
algoritmos populares y estructuras de datos.

Cada algoritmo y estructura de datos tiene su propio LÉAME con explicaciones relacionadas y 
enlaces para lecturas adicionales (incluyendo algunas a vídeos de YouTube).

_Léelo en otros idiomas:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Português_](README.pt-BR.md)

> Estamos escribiendo un libro que explicará claramente, en detalle, los principales algoritmos.
Si desea ser notificado cuando se publique el libro "Algoritmos JavaScript
lanzamientos, [haga clic aquí](https://upscri.be/402324/).

## Estructuras de Datos

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

Un algoritmo es una especificación inequívoca de cómo resolver una clase de problemas. Es un conjunto de reglas que 
definen con precisión una secuencia de operaciones.

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
  * `A` [Algortimo π de Liu Hui ](src/algorithms/math/liu-hui) - aproximado π cálculos basados en N-gons
* **Conjuntos**
  * `P` [Producto Cartesiano](src/algorithms/sets/cartesian-product) - pproducto de múltiples conjuntos
  * `P` [Permutación de Fisher–Yates](src/algorithms/sets/fisher-yates) - permutación aleatoria de una secuencia finita
  * `A` [Conjunto Potencia](src/algorithms/sets/power-set) - todos los subconjuntos de un conjunto
  * `A` [Permutaciones](src/algorithms/sets/permutations) (con y sin repeticiones)
  * `A` [Combinaciones](src/algorithms/sets/combinations) (con y sin repeticiones)
  * `A` [Subsecuencia Común más Larga](src/algorithms/sets/longest-common-subsequence) (SCL)
  * `A` [Subsecuencia Creciente más Larga](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersequencia Común Más Corta](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema de la Mochila](src/algorithms/sets/knapsack-problem) - "0/1" y unos sin consolidar
  * `A` [Maxima Subarreglo](src/algorithms/sets/maximum-subarray) - versiones de "Fuerza Bruta" y "Programación Dinámica" ( de Kadane's)
  * `A` [Suma Combinada](src/algorithms/sets/combination-sum) - encuentra todas las combinaciones que forman una suma específica.
* **Cadenas de Caracteres**
  * `P` [Distancia de Hamming](src/algorithms/string/hamming-distance) - número de posiciones en las que los símbolos son diferentes
  * `A` [Distancia de Levenshtein](src/algorithms/string/levenshtein-distance) - distancia mínima de edición entre dos secuencias
  * `A` [Algoritmo Knuth-Morris-Prattm](src/algorithms/string/knuth-morris-pratt) (Algoritmo KMP) - búsqueda por subcadenas (coincidencia de patrones)
  * `A` [Algoritmo Z](src/algorithms/string/z-algorithm) - úsqueda de subcadenas (coincidencia de patrones)
  * `A` [Algoritmo de Rabin Karp ](src/algorithms/string/rabin-karp) - búsqueda por subcadenas
  * `A` [Subcadena Común Más Larga](src/algorithms/string/longest-common-substring)
  * `A` [Coincidencia por Expresiones Regulares](src/algorithms/string/regular-expression-matching)
* **Busquedas**
  * `P` [Búsqueda Lineal](src/algorithms/search/linear-search)
  * `P` [Búsqueda de Salto](src/algorithms/search/jump-search) (o Búsqueda de Bloque) - búsqueda en una lista ordenada
  * `P` [Búsqueda binaria](src/algorithms/search/binary-search) - búsqueda en una lista ordenada
  * `P` [ Búsqueda por Interpolación](src/algorithms/search/interpolation-search) - búsqueda en una lista ordenada yd uniformemente distribuida
* **Ordenamiento**
  * `P` [Ordenamiento de Burbuja](src/algorithms/sorting/bubble-sort)
  * `P` [Ordenamiento por Selección](src/algorithms/sorting/selection-sort)
  * `P` [Ordenamiento por Inserción](src/algorithms/sorting/insertion-sort)
  * `P` [ Ordenamiento en Pilas](src/algorithms/sorting/heap-sort)
  * `P` [Ordenamiento por Fusion](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort) - implementaciones in situ y no in situ
  * `P` [Shellsort](src/algorithms/sorting/shell-sort)
  * `P` [Clasificación de Recuento](src/algorithms/sorting/counting-sort)
  * `P` [Ordenamiento Radix](src/algorithms/sorting/radix-sort)
* **Arboles**
  * `P` [Búsqueda en profundidad](src/algorithms/tree/depth-first-search) (DFS)
  * `P` [Búsqueda en anchura](src/algorithms/tree/breadth-first-search) (BFS)
* **Grafos**
  * `P` [Búsqueda en profundidad](src/algorithms/graph/depth-first-search) (DFS)
  * `P` [Búsqueda en anchura](src/algorithms/graph/breadth-first-search) (BFS)
  * `P` [Algoritmo de Kruskal’s](src/algorithms/graph/kruskal) - encontrar el árbol de expansión mínima (MST) para el grafo no dirigido ponderado
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - encontrar las trayectorias más cortas a todos los vértices del grafo desde un solo vértice
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - encontrar las trayectorias más cortas a todos los vértices del gráfico desde un solo vértice
  * `A` [Algortimo de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - encuentra los caminos más cortos entre todos los pares de vértices
  * `A` [Ciclo de detección](src/algorithms/graph/detect-cycle) - para gráficos dirigidos y no dirigidos (versiones basadas en DFS y Conjuntos Disjuntos)
  * `A` [Algoritmo de Prim](src/algorithms/graph/prim) - encontrar el árbol de expansión mínima (MST) para una grafo no dirigido ponderada
  * `A` [Clasificación topológica](src/algorithms/graph/topological-sorting) - método DFS
  * `A` [Puntos de Articulación](src/algorithms/graph/articulation-points) - Algoritmo de Tarjan (basado en DFS)
  * `A` [Puentes](src/algorithms/graph/bridges) - Algoritmo basado en DFS
  * `A` [Senda Euleriana y un Circuito Euleriano](src/algorithms/graph/eulerian-path) - algoritmo de Fleury - Visite cada borde exactamente una vez
  * `A` [Ciclo Hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - visite cada vértice exactamente una vez
  * `A` [Componentes Fuertemente Conectados](src/algorithms/graph/strongly-connected-components) - Algoritmo de Kosaraju
  * `A` [Problema del Vendedor Itinerante](src/algorithms/graph/travelling-salesman) - la ruta más corta posible que visita cada ciudad y vuelve a la ciudad de origen
* **Criptografia**
  * `P` [Hash Polinomial](src/algorithms/cryptography/polynomial-hash) - función de hash rodante basada en polinomio
* **Sin Categoria**
  * `P` [Torre de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Rotación de matriz cuadrada](src/algorithms/uncategorized/square-matrix-rotation) - algoritmo in situ
  * `P` [Juego de los saltos](src/algorithms/uncategorized/jump-game) - retroceso, programación dinámica (de arriba hacia abajo + de abajo hacia arriba) y ejemplos codiciosos
  * `P` [Caminos Unicos](src/algorithms/uncategorized/unique-paths) -etroceso, programación dinámica y ejemplos basados en el Triángulo de Pascal
  * `P` [Terrazas Pluviales](src/algorithms/uncategorized/rain-terraces) - problema de atrapamiento de aguas pluviales (programación dinámica y versiones de fuerza bruta)
  * `A` [Problema de N-Reinas](src/algorithms/uncategorized/n-queens)
  * `A` [Una gira de Caballeros](src/algorithms/uncategorized/knight-tour)

### Algoritmos por Paradigma

Un paradigma algorítmico es un método o enfoque genérico que subyace al diseño de una clase de algoritmos.
Es una abstracción superior a la noción de algoritmo, del mismo modo que un algoritmo es una abstracción superior a un programa de ordenador.

* **Fuerza Bruta** - mira todas las posibilidades y selecciona la mejor solución
  * `P` [Busqueda Lienal](src/algorithms/search/linear-search)
  * `P` [Terrazas Pluviales](src/algorithms/uncategorized/rain-terraces) - el problema de la retención del agua de lluvia
  * `A` [Subcoleción maxima](src/algorithms/sets/maximum-subarray)
  * `A` [Problema del Vendedor Itinerante](src/algorithms/graph/travelling-salesman) - la ruta más corta posible que visita cada ciudad y vuelve a la ciudad de origen
* **Codiciosos** - escoja la mejor opción en el momento actual, sin ninguna consideración para el futuro.
  * `P` [El juego de los saltos](src/algorithms/uncategorized/jump-game)
  * `A` [Problema de la Mochila no Consolidada](src/algorithms/sets/knapsack-problem)
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - encontrar la ruta más corta a todos los vértices del gráfico
  * `A` [Algortimo de Prim](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Algoritmo de Kruskal](src/algorithms/graph/kruskal) - encontrar el árbol de expansión mínima (MST) para una gráfica no dirigida ponderada
* **Divide y Venceras** - divide el problema en partes más pequeñas y luego resuelve esas partes.
  * `P` [Búsqueda Binaria](src/algorithms/search/binary-search)
  * `P` [Torre de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `P` [Triangulo de Pascal](src/algorithms/math/pascal-triangle)
  * `P` [Algoritmo Euclideo](src/algorithms/math/euclidean-algorithm) - ccalcular el Maximo Comun Divisor (MCD)
  * `P` [Clasificacion por Fusión](src/algorithms/sorting/merge-sort)
  * `P` [Quicksort](src/algorithms/sorting/quick-sort)
  * `P` [Busqueda por Profundidad](src/algorithms/tree/depth-first-search) - (DFS)
  * `P` [Busqueda por Anchura](src/algorithms/graph/depth-first-search) - (DFS)
  * `P` [Juego de los Saltos](src/algorithms/uncategorized/jump-game)
  * `A` [Permutaciones](src/algorithms/sets/permutations) - (con y sin repeticiones)
  * `A` [Combinaciones](src/algorithms/sets/combinations) - (con y sin repeticiones)
* **Programacion Dinamica** - onstruya una solución usando sub-soluciones previamente encontradas
  * `P` [Numero de Fibonacci](src/algorithms/math/fibonacci)
  * `P` [Juego de los Saltos](src/algorithms/uncategorized/jump-game)
  * `P` [Unicos Caminos](src/algorithms/uncategorized/unique-paths)
  * `P` [Terrazas Pluviales](src/algorithms/uncategorized/rain-terraces) - el problema de la retención del agua de lluvia
  * `A` [Distancia de Levenshtein](src/algorithms/string/levenshtein-distance) - distancia mínima de edición entre dos secuencias
  * `A` [Subsecuencia Comun más Larga](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Subcadena de Caracteres Comun más larga](src/algorithms/string/longest-common-substring)
  * `A` [Subsecuencia Creciente más Larga](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Susecuencia Comun más Corta](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Problema de la Mochila](src/algorithms/sets/knapsack-problem)
  * `A` [Particion Entera](src/algorithms/math/integer-partition)
  * `A` [Subarreglo Macima](src/algorithms/sets/maximum-subarray)
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - encontrar el camino más corto a todos los vértices del grafo
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) -encuentra los caminos más cortos entre todos los pares de vértices
  * `A` [Coincidencia por Expresiones regulares](src/algorithms/string/regular-expression-matching)
* **De Retorceso** - de manera similar a la fuerza bruta, trate de generar todas las soluciones posibles, pero cada vez que genere la siguiente solución, compruebe si cumple con todas las condiciones, y sólo entonces continúe generando soluciones posteriores. De lo contrario, retroceda y siga un camino diferente para encontrar una solución. Normalmente se utiliza la travesía del espacio estatal.
  * `P` [Juego de Saltos](src/algorithms/uncategorized/jump-game)
  * `P` [Camino Unico](src/algorithms/uncategorized/unique-paths)
  * `A` [Ciclo Hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - Visite cada vértice exactamente una vez
  * `A` [Problema de las N-Reinas](src/algorithms/uncategorized/n-queens)
  * `A` [Gira de Caballeros](src/algorithms/uncategorized/knight-tour)
  * `A` [Suma Combinada](src/algorithms/sets/combination-sum) - encuentra todas las combinaciones que forman una suma específica.
* **Ramas y Limites** - recuerde la solución de menor costo encontrada en cada etapa de la búsqueda de rastreo, y utilice el costo de la solución de menor costo encontrada hasta el momento como un límite más bajo en el costo de una solución de menor costo para el problema, a fin de descartar soluciones parciales con costos mayores que la solución de menor costo encontrada hasta el momento. Normalmente se utiliza la travesía BFS en combinación con la travesía DFS del árbol del espacio de estado.

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

Puede jugar con estructuras de datos y algoritmos en el archivo `./src/playground/playground.js` y escribir 
pruebas para ello en `./src/playground/__test__/playground.test.js`.

A continuación, simplemente ejecute el siguiente comando para comprobar si el código funciona como se espera:

```
npm test -- 'playground'
```

## Información Util

### Refrencias

[▶ Estructuras de datos y Algoritmos en YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notación O Grande

Orden de crecimiento de los algoritmos especificados en la notación O grande.

![Graficas de Notación O grande ](./assets/big-o-graph.png)

Fuente: [Notación O grande, Hoja de atajos](http://bigocheatsheet.com/).

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

### Complejidad de las operaciones de estructura de datos

| Estructura de Datos            | Accesso | Busqueda | Inserción | Borrado | Comentarios                                                     |
| ------------------------------ | :-----: | :------: | :-------: | :-----: | :-------------------------------------------------------------- |
| **Coleción**                   |    1    |    n     |     n     |    n    |                                                                 |
| **Stack**                      |    n    |    n     |     1     |    1    |                                                                 |
| **Cola**                       |    n    |    n     |     1     |    1    |                                                                 |
| **Lista Enlazada**             |    n    |    n     |     1     |    1    |                                                                 |
| **Tabla de Hash**              |    -    |    n     |     n     |    n    | En caso de función hash perfecta los costos serían O(1)         |
| **Búsqueda por Arbol Binario** |    n    |    n     |     n     |    n    | En el caso de un árbol equilibrado, los costes serían O(log(n)) |
| **Árbol B**                    | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Árbol Rojo-Negro**           | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Árbol AVL**                  | log(n)  |  log(n)  |  log(n)   | log(n)  |                                                                 |
| **Filtro de Bloom**            |    -    |    1     |     1     |    -    | Falsos positivos son posibles durante la búsqueda               |

### Complejidad de Algoritmos de Clasificación de Arreglos

| Nombre                           | Mejor         | Promedio                | Pero                        | Memorya | Estable | Comentarios                                                   |
| -------------------------------- | :-----------: | :---------------------: | :-------------------------: | :-----: | :-----: | :------------------------------------------------------------ |
| **Clasificación de Burbujas**    |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |  Si     |                                                               |
| **Clasificación por Inserción**  |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |  Si     |                                                               |
| **Clasificacion por Selección**  | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1     |   No    |                                                               |
| **Classificacion por Pila**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1     |   No    |                                                               |
| **Clasificacion por Fusion**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n     |  Si     |                                                               |
| **Quick sort**                   | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n)  |   No    | Quicksort es utilizqado con O(log(n)) espacio en el stack  |
| **Shell sort**                   | n&nbsp;log(n) | depende de la secuencia de huecos | n&nbsp;(log(n))<sup>2</sup> |   1   |   No   |                                                               |
| **Clasificacion por Conteo**     |     n + r     |          n + r          |            n + r            | n + r   |  Si     | r - mayor numero en arreglo                                   |
| **Radix sort**                   |    n \* k     |         n \* k          |           n \* k            | n + k   |  Si     | k - largo de la llave más larga                                     |
