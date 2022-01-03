# JavaScript-Algorithmen und Datenstrukturen

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Dieses Repository enthält JavaScript Beispiele für viele
gängige Algorithmen und Datenstrukturen.

Jeder Algorithmus und jede Datenstruktur hat eine eigene README
mit zugehörigen Erklärungen und weiterführenden Links (einschließlich zu YouTube-Videos).

_Lies dies in anderen Sprachen:_
[_English_](https://github.com/trekhleb/javascript-algorithms/)
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md)

_☝ Beachte, dass dieses Projekt nur für Lern- und Forschungszwecke gedacht ist und **nicht** für den produktiven Einsatz verwendet werden soll_

## Datenstrukturen

Eine Datenstruktur ist eine bestimmte Art und Weise, Daten in einem Computer so zu organisieren und zu speichern, dass sie
effizient erreicht und verändert werden können. Genauer gesagt, ist eine Datenstruktur eine Sammlung von Werten,
den Beziehungen zwischen ihnen und den Funktionen oder Operationen, die auf die Daten angewendet werden können.

`B` - Anfänger:innen, `A` - Fortgeschrittene

* `B` [Verkettete Liste (Linked List)](src/data-structures/linked-list)
* `B` [Doppelt verkettete Liste (Doubly Linked List)](src/data-structures/doubly-linked-list)
* `B` [Warteschlange (Queue)](src/data-structures/queue)
* `B` [Stapelspeicher (Stack)](src/data-structures/stack)
* `B` [Hashtabelle (Hash Table)](src/data-structures/hash-table)
* `B` [Heap-Algorithmus (Heap)](src/data-structures/heap) - max und min Heap-Versionen
* `B` [Vorrangwarteschlange (Priority Queue)](src/data-structures/priority-queue)
* `A` [Trie (Trie)](src/data-structures/trie)
* `A` [Baum (Tree)](src/data-structures/tree)
  * `A` [Binärer Suchbaum (Binary Search Tree)](src/data-structures/tree/binary-search-tree)
  * `A` [AVL-Baum (AVL Tree)](src/data-structures/tree/avl-tree)
  * `A` [Rot-Schwarz-Baum (Red-Black Tree)](src/data-structures/tree/red-black-tree)
  * `A` [Segment-Baum (Segment Tree)](src/data-structures/tree/segment-tree) - mit Min/Max/Summenbereich-Abfrage Beispiel
  * `A` [Fenwick Baum (Fenwick Tree)](src/data-structures/tree/fenwick-tree) (Binär indizierter Baum / Binary Indexed Tree)
* `A` [Graph (Graph)](src/data-structures/graph) (sowohl gerichtet als auch ungerichtet)
* `A` [Union-Find-Struktur (Disjoint Set)](src/data-structures/disjoint-set)
* `A` [Bloomfilter (Bloom Filter)](src/data-structures/bloom-filter)

## Algorithmen

Ein Algorithmus ist eine eindeutige Spezifikation, wie eine Klasse von Problemen zu lösen ist. Er besteht
aus einem Satz von Regeln, die eine Abfolge von Operationen genau definieren.

`B` - Anfänger:innen, `A` - Fortgeschrittene

### Algorithmen nach Thema

* **Mathe**
  * `B` [Bitmanipulation (Bit Manipulation)](src/algorithms/math/bits) - Bits setzen/lesen/aktualisieren/löschen, Multiplikation/Division durch zwei negieren usw..
  * `B` [Faktoriell (Factorial)](src/algorithms/math/factorial)
  * `B` [Fibonacci-Zahl (Fibonacci Number)](src/algorithms/math/fibonacci) - Klassische und geschlossene Version
  * `B` [Primfaktoren (Prime Factors)](src/algorithms/math/prime-factors) - Auffinden von Primfaktoren und deren Zählung mit Hilfe des Satz von Hardy-Ramanujan (Hardy-Ramanujan's theorem)
  * `B` [Primzahl-Test (Primality Test)](src/algorithms/math/primality-test) (Probedivision / trial division method)
  * `B` [Euklidischer Algorithmus (Euclidean Algorithm)](src/algorithms/math/euclidean-algorithm) - Berechnen des größten gemeinsamen Teilers (ggT)
  * `B` [Kleinstes gemeinsames Vielfaches (Least Common Multiple)](src/algorithms/math/least-common-multiple) (kgV)
  * `B` [Sieb des Eratosthenes (Sieve of Eratosthenes)](src/algorithms/math/sieve-of-eratosthenes) - Finden aller Primzahlen bis zu einer bestimmten Grenze
  * `B` [Power of two (Is Power of Two)](src/algorithms/math/is-power-of-two) - Prüft, ob die Zahl eine Zweierpotenz ist (naive und bitweise Algorithmen)
  * `B` [Pascalsches Dreieck (Pascal's Triangle)](src/algorithms/math/pascal-triangle)
  * `B` [Komplexe Zahlen (Complex Number)](src/algorithms/math/complex-number) - Komplexe Zahlen und Grundoperationen mit ihnen
  * `B` [Bogenmaß & Grad (Radian & Degree)](src/algorithms/math/radian) - Umrechnung von Bogenmaß in Grad und zurück
  * `B` [Fast Powering Algorithmus (Fast Powering)](src/algorithms/math/fast-powering)
  * `B` [Horner-Schema (Horner's method)](src/algorithms/math/horner-method) - Polynomauswertung
  * `B` [Matrizen (Matrices)](src/algorithms/math/matrix) - Matrizen und grundlegende Matrixoperationen (Multiplikation, Transposition usw.)
  * `B` [Euklidischer Abstand (Euclidean Distance)](src/algorithms/math/euclidean-distance) - Abstand zwischen zwei Punkten/Vektoren/Matrizen
  * `A` [Ganzzahlige Partitionierung (Integer Partition)](src/algorithms/math/integer-partition)
  * `A` [Quadratwurzel (Square Root)](src/algorithms/math/square-root) - Newtonverfahren (Newton's method)
  * `A` [Liu Hui π Algorithmus (Liu Hui π Algorithm)](src/algorithms/math/liu-hui) - Näherungsweise π-Berechnungen auf Basis von N-gons
  * `A` [Diskrete Fourier-Transformation (Discrete Fourier Transform)](src/algorithms/math/fourier-transform) - Eine Funktion der Zeit (ein Signal) in die Frequenzen zerlegen, aus denen sie sich zusammensetzt
* **Sets**
  * `B` [Kartesisches Produkt (Cartesian Product)](src/algorithms/sets/cartesian-product) - Produkt aus mehreren Mengen
  * `B` [Fisher-Yates-Verfahren (Fisher–Yates Shuffle)](src/algorithms/sets/fisher-yates) - Zufällige Permutation einer endlichen Folge
  * `A` [Potenzmenge (Power Set)](src/algorithms/sets/power-set) - Alle Teilmengen einer Menge (Bitweise und Rücksetzverfahren Lösungen(backtracking solutions))
  * `A` [Permutation (Permutations)](src/algorithms/sets/permutations) (mit und ohne Wiederholungen)
  * `A` [Kombination (Combinations)](src/algorithms/sets/combinations) (mit und ohne Wiederholungen)
  * `A` [Problem der längsten gemeinsamen Teilsequenz (Longest Common Subsequence)](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Längste gemeinsame Teilsequenz (Longest Increasing Subsequence)](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Der kürzeste gemeinsame String (Shortest Common Supersequence)](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Rucksackproblem (Knapsack Problem)](src/algorithms/sets/knapsack-problem) - "0/1" und "Ungebunden"
  * `A` [Das Maximum-Subarray Problem (Maximum Subarray)](src/algorithms/sets/maximum-subarray) - "Brute-Force-Methode" und "Dynamische Programmierung" (Kadane' Algorithmus)
  * `A` [Kombinationssumme (Combination Sum)](src/algorithms/sets/combination-sum) - Alle Kombinationen finden, die eine bestimmte Summe bilden
* **Zeichenketten (Strings)**
  * `B` [Hamming-Abstand (Hamming Distance)](src/algorithms/string/hamming-distance) - Anzahl der Positionen, an denen die Symbole unterschiedlich sind
  * `A` [Levenshtein-Distanz (Levenshtein Distance)](src/algorithms/string/levenshtein-distance) - Minimaler Editierabstand zwischen zwei Sequenzen
  * `A` [Knuth-Morris-Pratt-Algorithmus (Knuth–Morris–Pratt Algorithm)](src/algorithms/string/knuth-morris-pratt) (KMP Algorithmus) - Teilstringsuche (Mustervergleich / Pattern Matching)
  * `A` [Z-Algorithmus (Z Algorithm)](src/algorithms/string/z-algorithm) - Teilstringsuche (Mustervergleich / Pattern Matching)
  * `A` [Rabin-Karp-Algorithmus (Rabin Karp Algorithm)](src/algorithms/string/rabin-karp) - Teilstringsuche
  * `A` [Längstes häufiges Teilzeichenfolgenproblem (Longest Common Substring)](src/algorithms/string/longest-common-substring)
  * `A` [Regulärer Ausdruck (Regular Expression Matching)](src/algorithms/string/regular-expression-matching)
* **Suchen**
  * `B` [Lineare Suche (Linear Search)](src/algorithms/search/linear-search)
  * `B` [Sprungsuche (Jump Search)](src/algorithms/search/jump-search) (oder Blocksuche) - Suche im sortierten Array
  * `B` [Binäre Suche (Binary Search)](src/algorithms/search/binary-search) - Suche in einem sortierten Array
  * `B` [Interpolationssuche (Interpolation Search)](src/algorithms/search/interpolation-search) - Suche in gleichmäßig verteilt sortiertem Array
* **Sortieren**
  * `B` [Bubblesort (Bubble Sort)](src/algorithms/sorting/bubble-sort)
  * `B` [Selectionsort (Selection Sort)](src/algorithms/sorting/selection-sort)
  * `B` [Einfügesortierenmethode (Insertion Sort)](src/algorithms/sorting/insertion-sort)
  * `B` [Haldensortierung (Heap Sort)](src/algorithms/sorting/heap-sort)
  * `B` [Mergesort (Merge Sort)](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort (Quicksort)](src/algorithms/sorting/quick-sort) - in-place und non-in-place Implementierungen
  * `B` [Shellsort (Shellsort)](src/algorithms/sorting/shell-sort)
  * `B` [Countingsort (Counting Sort)](src/algorithms/sorting/counting-sort)
  * `B` [Fachverteilen (Radix Sort)](src/algorithms/sorting/radix-sort)
* **Verkettete Liste (Linked List)**
  * `B` [Gerade Traversierung (Straight Traversal)](src/algorithms/linked-list/traversal)
  * `B` [Umgekehrte Traversierung (Reverse Traversal)](src/algorithms/linked-list/reverse-traversal)
* **Bäume**
  * `B` [Tiefensuche (Depth-First Search)](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breitensuche (Breadth-First Search)](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphen**
  * `B` [Tiefensuche (Depth-First Search)](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breitensuche (Breadth-First Search)](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Algorithmus von Kruskal (Kruskal’s Algorithm)](src/algorithms/graph/kruskal) - Finden des Spannbaum (Minimum Spanning Tree / MST) für einen gewichteten ungerichteten Graphen
  * `A` [Dijkstra-Algorithmus (Dijkstra Algorithm)](src/algorithms/graph/dijkstra) - Finden der kürzesten Wege zu allen Knoten des Graphen von einem einzelnen Knotenpunkt aus
  * `A` [Bellman-Ford-Algorithmus (Bellman-Ford Algorithm)](src/algorithms/graph/bellman-ford) - Finden der kürzesten Wege zu allen Knoten des Graphen von einem einzelnen Knotenpunkt aus
  * `A` [Algorithmus von Floyd und Warshall (Floyd-Warshall Algorithm)](src/algorithms/graph/floyd-warshall) - Die kürzesten Wege zwischen allen Knotenpaaren finden
  * `A` [Zykluserkennung (Detect Cycle)](src/algorithms/graph/detect-cycle) - Sowohl für gerichtete als auch für ungerichtete Graphen (DFS- und Disjoint-Set-basierte Versionen)
  * `A` [Algorithmus von Prim (Prim’s Algorithm)](src/algorithms/graph/prim) - Finden des Spannbaums (Minimum Spanning Tree / MST) für einen gewichteten ungerichteten Graphen
  * `A` [Topologische Sortierung (Topological Sorting)](src/algorithms/graph/topological-sorting) - DFS-Verfahren
  * `A` [Artikulationspunkte (Articulation Points)](src/algorithms/graph/articulation-points) - Algorithmus von Tarjan (Tarjan's algorithm) (DFS basiert)
  * `A` [Brücke (Bridges)](src/algorithms/graph/bridges) - DFS-basierter Algorithmus
  * `A` [Eulerkreisproblem (Eulerian Path and Eulerian Circuit)](src/algorithms/graph/eulerian-path) - Algorithmus von Fleury (Fleury's algorithm) - Jede Kante genau einmal durchlaufen.
  * `A` [Hamiltonkreisproblem (Hamiltonian Cycle)](src/algorithms/graph/hamiltonian-cycle) - Jeden Eckpunkt genau einmal durchlaufen.
  * `A` [Starke Zusammenhangskomponente (Strongly Connected Components)](src/algorithms/graph/strongly-connected-components) - Kosarajus Algorithmus
  * `A` [Problem des Handlungsreisenden (Travelling Salesman Problem)](src/algorithms/graph/travelling-salesman) - Kürzestmögliche Route, die jede Stadt besucht und zur Ausgangsstadt zurückkehrt
* **Kryptographie**
  * `B` [Polynomiale Streuwertfunktion(Polynomial Hash)](src/algorithms/cryptography/polynomial-hash) - Rollierende Streuwert-Funktion basierend auf Polynom
  * `B` [Schienenzaun Chiffre (Rail Fence Cipher)](src/algorithms/cryptography/rail-fence-cipher) - Ein Transpositionsalgorithmus zur Verschlüsselung von Nachrichten
  * `B` [Caesar-Verschlüsselung (Caesar Cipher)](src/algorithms/cryptography/caesar-cipher) - Einfache Substitutions-Chiffre
  * `B` [Hill-Chiffre (Hill Cipher)](src/algorithms/cryptography/hill-cipher) - Substitutionschiffre basierend auf linearer Algebra
* **Maschinelles Lernen**
  * `B` [Künstliches Neuron (NanoNeuron)](https://github.com/trekhleb/nano-neuron) - 7 einfache JS-Funktionen, die veranschaulichen, wie Maschinen tatsächlich lernen können (Vorwärts-/Rückwärtspropagation)
  * `B` [Nächste-Nachbarn-Klassifikation (k-NN)](src/algorithms/ml/knn) - k-nächste-Nachbarn-Algorithmus
  * `B` [k-Means (k-Means)](src/algorithms/ml/k-means) - k-Means-Algorithmus
* **Image Processing**
  * `B` [Inhaltsabhängige Bildverzerrung (Seam Carving)](src/algorithms/image-processing/seam-carving) - Algorithmus zur inhaltsabhängigen Bildgrößenänderung
* **Unkategorisiert**
  * `B` [Türme von Hanoi (Tower of Hanoi)](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Rotationsmatrix (Square Matrix Rotation)](src/algorithms/uncategorized/square-matrix-rotation) - In-Place-Algorithmus
  * `B` [Jump Game (Jump Game)](src/algorithms/uncategorized/jump-game) - Backtracking, dynamische Programmierung (Top-down + Bottom-up) und gierige Beispiele
  * `B` [Eindeutige Pfade (Unique Paths)](src/algorithms/uncategorized/unique-paths) - Backtracking, dynamische Programmierung und Pascalsches Dreieck basierte Beispiele
  * `B` [Regenterrassen (Rain Terraces)](src/algorithms/uncategorized/rain-terraces) - Auffangproblem für Regenwasser (trapping rain water problem) (dynamische Programmierung und Brute-Force-Versionen)
  * `B` [Rekursive Treppe (Recursive Staircase)](src/algorithms/uncategorized/recursive-staircase) - Zählen der Anzahl der Wege, die nach oben führen (4 Lösungen)
  * `B` [Beste Zeit zum Kaufen/Verkaufen von Aktien (Best Time To Buy Sell Stocks)](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - Beispiele für "Teile und Herrsche" und Beispiele für den One-Pass-Algorithmus
  * `A` [Damenproblem (N-Queens Problem)](src/algorithms/uncategorized/n-queens)
  * `A` [Springerproblem (Knight's Tour)](src/algorithms/uncategorized/knight-tour)

### Algorithmen nach Paradigma

Ein algorithmisches Paradigma ist eine generische Methode oder ein Ansatz, der dem Entwurf einer Klasse von Algorithmen zugrunde liegt. Es ist eine Abstraktion, die höher ist als der Begriff des Algorithmus. Genauso wie ein Algorithmus eine Abstraktion ist, die höher ist als ein Computerprogramm.

* **Brachiale Gewalt (Brute Force)** - schaut sich alle Möglichkeiten an und wählt die beste Lösung aus
  * `B` [Lineare Suche (Linear Search)](src/algorithms/search/linear-search)
  * `B` [Regenterrassen (Rain Terraces)](src/algorithms/uncategorized/rain-terraces) - Auffangproblem für Regenwasser (trapping rain water problem) (dynamische Programmierung und Brute-Force-Versionen)
  * `B` [Rekursive Treppe (Recursive Staircase)](src/algorithms/uncategorized/recursive-staircase) - Zählen der Anzahl der Wege, die nach oben führen (4 Lösungen)
  * `A` [Das Maximum-Subarray Problem (Maximum Subarray)](src/algorithms/sets/maximum-subarray)
  * `A` [Problem des Handlungsreisenden (Travelling Salesman Problem)](src/algorithms/graph/travelling-salesman) - Kürzestmögliche Route, die jede Stadt besucht und zur Ausgangsstadt zurückkehrt
  * `A` [Diskrete Fourier-Transformation (Discrete Fourier Transform)](src/algorithms/math/fourier-transform) - Eine Funktion der Zeit (ein Signal) in die Frequenzen zerlegen, aus denen sie sich zusammensetzt
* **Gierig (Greedy)** - Wählt die beste Option zum aktuellen Zeitpunkt, ohne Rücksicht auf die Zukunft
  * `B` [Jump Game (Jump Game)](src/algorithms/uncategorized/jump-game)
  * `A` [Rucksackproblem (Unbound Knapsack Problem)](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra-Algorithmus (Dijkstra Algorithm)](src/algorithms/graph/dijkstra) - Finden der kürzesten Wege zu allen Knoten des Graphen von einem einzelnen Knotenpunkt aus
  * `A` [Algorithmus von Prim (Prim’s Algorithm)](src/algorithms/graph/prim) - Finden des Spannbaums (Minimum Spanning Tree / MST) für einen gewichteten ungerichteten Graphen
  * `B` [Algorithmus von Kruskal (Kruskal’s Algorithm)](src/algorithms/graph/kruskal) - Finden des Spannbaum (Minimum Spanning Tree / MST) für einen gewichteten ungerichteten Graphen
* **Teile und herrsche** - Das Problem in kleinere Teile aufteilen und diese Teile dann lösen
  * `B` [Binäre Suche (Binary Search)](src/algorithms/search/binary-search)
  * `B` [Türme von Hanoi (Tower of Hanoi)](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Pascalsches Dreieck (Pascal's Triangle)](src/algorithms/math/pascal-triangle)
  * `B` [Euklidischer Algorithmus (Euclidean Algorithm)](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Mergesort (Merge Sort)](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort (Quicksort)](src/algorithms/sorting/quick-sort)
  * `B` [Tiefensuche (Depth-First Search)](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breitensuche (Breadth-First Search)](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Matrizen (Matrices)](src/algorithms/math/matrix) - Matrizen und grundlegende Matrixoperationen (Multiplikation, Transposition usw.)
  * `B` [Jump Game (Jump Game)](src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering Algorithmus (Fast Powering)](src/algorithms/math/fast-powering)
  * `B` [Beste Zeit zum Kaufen/Verkaufen von Aktien (Best Time To Buy Sell Stocks)](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - Beispiele für "Teile und Herrsche" und Beispiele für den One-Pass-Algorithmus
  * `A` [Permutation (Permutations)](src/algorithms/sets/permutations) (mit und ohne Wiederholungen)
  * `A` [Kombination (Combinations)](src/algorithms/sets/combinations) (mit und ohne Wiederholungen)
* **Dynamische Programmierung** - Eine Lösung aus zuvor gefundenen Teillösungen aufbauen
  * `B` [Fibonacci-Zahl (Fibonacci Number)](src/algorithms/math/fibonacci)
  * `B` [Jump Game (Jump Game)](src/algorithms/uncategorized/jump-game)
  * `B` [Eindeutige Pfade (Unique Paths)](src/algorithms/uncategorized/unique-paths)
  * `B` [Regenterrassen (Rain Terraces)](src/algorithms/uncategorized/rain-terraces) - Auffangproblem für Regenwasser (trapping rain water problem) (dynamische Programmierung und Brute-Force-Versionen)
  * `B` [Rekursive Treppe (Recursive Staircase)](src/algorithms/uncategorized/recursive-staircase) - Zählen der Anzahl der Wege, die nach oben führen (4 Lösungen)
  * `B` [Inhaltsabhängige Bildverzerrung (Seam Carving)](src/algorithms/image-processing/seam-carving) - Algorithmus zur inhaltsabhängigen Bildgrößenänderung
  * `A` [Levenshtein-Distanz (Levenshtein Distance)](src/algorithms/string/levenshtein-distance) - Minimaler Editierabstand zwischen zwei Sequenzen
  * `A` [Problem der längsten gemeinsamen Teilsequenz (Longest Common Subsequence)](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Längstes häufiges Teilzeichenfolgenproblem (Longest Common Substring)](src/algorithms/string/longest-common-substring)
  * `A` [Längste gemeinsame Teilsequenz (Longest Increasing Subsequence)](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Der kürzeste gemeinsame String (Shortest Common Supersequence)](src/algorithms/sets/shortest-common-supersequence)
  * `A` [Rucksackproblem (0/1 Knapsack Problem)](src/algorithms/sets/knapsack-problem)
  * `A` [Ganzzahlige Partitionierung (Integer Partition)](src/algorithms/math/integer-partition)
  * `A` [Das Maximum-Subarray Problem (Maximum Subarray)](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford-Algorithmus (Bellman-Ford Algorithm)](src/algorithms/graph/bellman-ford) - Finden der kürzesten Wege zu allen Knoten des Graphen von einem einzelnen Knotenpunkt aus
  * `A` [Algorithmus von Floyd und Warshall (Floyd-Warshall Algorithm)](src/algorithms/graph/floyd-warshall) - Die kürzesten Wege zwischen allen Knotenpaaren finden
  * `A` [Regulärer Ausdruck (Regular Expression Matching)](src/algorithms/string/regular-expression-matching)
* **Zurückverfolgung** - Ähnlich wie bei Brute-Force versuchen Sie, alle möglichen Lösungen zu generieren, aber jedes Mal, wenn Sie die nächste Lösung generieren, testen Sie, ob sie alle Bedingungen erfüllt, und fahren erst dann mit der Generierung weiterer Lösungen fort. Andernfalls gehen Sie zurück und nehmen einen anderen Weg, um eine Lösung zu finden. Normalerweise wird das DFS-Traversal des Zustandsraums verwendet.
  * `B` [Jump Game (Jump Game)](src/algorithms/uncategorized/jump-game)
  * `B` [Eindeutige Pfade (Unique Paths)](src/algorithms/uncategorized/unique-paths)
  * `A` [Potenzmenge (Power Set)](src/algorithms/sets/power-set) - Alle Teilmengen einer Menge
  * `A` [Hamiltonkreisproblem (Hamiltonian Cycle)](src/algorithms/graph/hamiltonian-cycle) - Jeden Eckpunkt genau einmal durchlaufen.
  * `A` [Damenproblem (N-Queens Problem)](src/algorithms/uncategorized/n-queens)
  * `A` [Springerproblem (Knight's Tour)](src/algorithms/uncategorized/knight-tour)
  * `A` [Kombinationssumme (Combination Sum)](src/algorithms/sets/combination-sum) - Alle Kombinationen finden, die eine bestimmte Summe bilden
* **Verzweigung & Bindung** - Merkt sich die Lösung mit den niedrigsten Kosten, die in jeder Phase der Backtracking-Suche gefunden wurde, und verwendet die Kosten der bisher gefundenen Lösung mit den niedrigsten Kosten als untere Schranke für die Kosten einer Lösung des Problems mit den geringsten Kosten, um Teillösungen zu verwerfen, deren Kosten größer sind als die der bisher gefundenen Lösung mit den niedrigsten Kosten. Normalerweise wird das BFS-Traversal in Kombination mit dem DFS-Traversal des Zustandsraumbaums verwendet.

## So verwendest du dieses Repository

**Alle Abhängigkeiten installieren**

```
npm install
```

**ESLint ausführen**

You may want to run it to check code quality.

```
npm run lint
```

**Alle Tests ausführen**

```
npm test
```

**Tests nach Namen ausführen**

```
npm test -- 'LinkedList'
```

**Fehlerbehebung**

Falls das Linting oder Testen fehlschlägt, versuche, den Ordner "node_modules" zu löschen und die npm-Pakete neu zu installieren:

```
rm -rf ./node_modules
npm i
```

**Spielwiese**

Du kannst mit Datenstrukturen und Algorithmen in der Datei `./src/playground/playground.js` herumspielen und
dir in dieser Datei Tests schreiben `./src/playground/__test__/playground.test.js`.

Dann führe einfach folgenden Befehl aus, um zu testen, ob dein Spielwiesencode wie erwartet funktioniert:

```
npm test -- 'playground'
```

## Nützliche Informationen

### Referenzen

[▶ Datenstrukturen und Algorithmen auf YouTube(Englisch)](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### O-Notation (_Big O Notation_)

Die O-Notation wird verwendet, um Algorithmen danach zu klassifizieren, wie ihre Laufzeit oder ihr Platzbedarf mit zunehmender Eingabegröße wächst. In der folgenden Tabelle finden Sie die häufigsten Wachstumsordnungen von Algorithmen, die in Big-O-Notation angegeben sind.

![O-Notation Graphen](./assets/big-o-graph.png)

Quelle: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Nachfolgend finden Sie eine Liste einiger der am häufigsten verwendeten Big O-Notationen und deren Leistungsvergleiche für unterschiedliche Größen der Eingabedaten.

| Big O Notation | Berechnungen für 10 Elemente | Berechnungen für 100 Elemente | Berechnungen für 1000 Elemente |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------ |
| **O(1)**       | 1                            | 1                             | 1                              |
| **O(log N)**   | 3                            | 6                             | 9                              |
| **O(N)**       | 10                           | 100                           | 1000                           |
| **O(N log N)** | 30                           | 600                           | 9000                           |
| **O(N^2)**     | 100                          | 10000                         | 1000000                        |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                      |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                     |

### Komplexität von Datenstrukturoperationen

| Datenstruktur          | Zugriff auf | Suche  | Einfügen | Löschung | Kommentare                                                      |
| ---------------------- | :---------: | :----: | :------: | :------: | :-------------------------------------------------------------- |
| **Array**              |      1      |   n    |    n     |    n     |                                                                 |
| **Stack**              |      n      |   n    |    1     |    1     |                                                                 |
| **Queue**              |      n      |   n    |    1     |    1     |                                                                 |
| **Linked List**        |      n      |   n    |    1     |    n     |                                                                 |
| **Hash Table**         |      -      |   n    |    n     |    n     | Im Falle einer perfekten Hash-Funktion wären die Kosten O(1)    |
| **Binary Search Tree** |      n      |   n    |    n     |    n     | Im Falle eines ausgeglichenen Baumes wären die Kosten O(log(n)) |
| **B-Tree**             |   log(n)    | log(n) |  log(n)  |  log(n)  |                                                                 |
| **Red-Black Tree**     |   log(n)    | log(n) |  log(n)  |  log(n)  |                                                                 |
| **AVL Tree**           |   log(n)    | log(n) |  log(n)  |  log(n)  |                                                                 |
| **Bloom Filter**       |      -      |   1    |    1     |    -     | Falschpostive sind bei der Suche möglichen                      |

### Komplexität von Array-Sortieralgorithmen

| Name               |    Bester     |      Durchschnitt       |        Schlechtester        | Speicher | Stabil | Kommentar                                                                  |
| ------------------ | :-----------: | :---------------------: | :-------------------------: | :------: | :----: | :------------------------------------------------------------------------- |
| **Bubble sort**    |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |    1     |   JA   |                                                                            |
| **Insertion sort** |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |    1     |   Ja   |                                                                            |
| **Selection sort** | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |    1     |  Nein  |                                                                            |
| **Heap sort**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |    1     |  Nein  |                                                                            |
| **Merge sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |    n     |   Ja   |                                                                            |
| **Quick sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        |  log(n)  |  Nein  | Quicksort wird normalerweise in-place mit O(log(n)) Stapelplatz ausgeführt |
| **Shell sort**     | n&nbsp;log(n) | abhängig von Spaltfolge | n&nbsp;(log(n))<sup>2</sup> |    1     |  Nein  |                                                                            |
| **Counting sort**  |     n + r     |          n + r          |            n + r            |  n + r   |   Ja   | r - größte Zahl im Array                                                   |
| **Radix sort**     |    n \* k     |         n \* k          |           n \* k            |  n + k   |   Ja   | k - Länge des längsten Schlüssels                                          |

## Projekt-Unterstützer

> Du kannst dieses Projekt unterstützen über ❤️️ [GitHub](https://github.com/sponsors/trekhleb) or ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Leute, die dieses Projekt unterstützen](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 0`

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)

