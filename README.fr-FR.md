# Algorithmes et Structures de Données en JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Ce dépôt contient des exemples d'implémentation en JavaScript de plusieurs
algorithmes et structures de données populaires.

Chaque algorithme et structure de donnée possède son propre README contenant
les explications détaillées et liens (incluant aussi des vidéos Youtube) pour
complément d'informations.

_Lisez ceci dans d'autres langues:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

## Data Structures

Une structure de données est une manière spéciale d'organiser et de stocker
des données dans un ordinateur de manière à ce que l'on puisse accéder à
cette information et la modifier de manière efficiente. De manière plus
spécifique, une structure de données est un ensemble composé d'une collection
de valeurs, des relations entre ces valeurs ainsi que d'un ensemble de
fonctions ou d'opérations pouvant être appliquées sur ces données.

`B` - Débutant, `A` - Avancé

- `B` [Liste Chaînée](src/data-structures/linked-list)
- `B` [Liste Doublement Chaînée](src/data-structures/doubly-linked-list)
- `B` [Queue](src/data-structures/queue)
- `B` [Pile](src/data-structures/stack)
- `B` [Table de Hachage](src/data-structures/hash-table)
- `B` [Tas](src/data-structures/heap)
- `B` [Queue de Priorité](src/data-structures/priority-queue)
- `A` [Trie](src/data-structures/trie)
- `A` [Arbre](src/data-structures/tree)
  - `A` [Arbre de recherche Binaire](src/data-structures/tree/binary-search-tree)
  - `A` [Arbre AVL](src/data-structures/tree/avl-tree)
  - `A` [Arbre Red-Black](src/data-structures/tree/red-black-tree)
  - `A` [Arbre de Segments](src/data-structures/tree/segment-tree) - avec exemples de requêtes de type min/max/somme sur intervalles
  - `A` [Arbre de Fenwick](src/data-structures/tree/fenwick-tree) (Arbre Binaire Indexé)
- `A` [Graphe](src/data-structures/graph) (orienté et non orienté)
- `A` [Ensembles Disjoints](src/data-structures/disjoint-set)
- `A` [Filtre de Bloom](src/data-structures/bloom-filter)

## Algorithmes

Un algorithme est une démarche non ambigüe expliquant comment résoudre une
classe de problèmes. C'est un ensemble de règles décrivant de manière précise
une séquence d'opérations.

`B` - Débutant, `A` - Avancé

### Algorithmes par topic

- **Math**
  - `B` [Manipulation de Bit](src/algorithms/math/bits/README.fr-FR.md) - définir/obtenir/mettre à jour/effacer les bits, multiplication/division par deux, négativiser etc.
  - `B` [Factorielle](src/algorithms/math/factorial/README.fr-FR.md)
  - `B` [Nombre de Fibonacci](src/algorithms/math/fibonacci/README.fr-FR.md)
  - `B` [Test de Primalité](src/algorithms/math/primality-test) (méthode du test de division)
  - `B` [Algorithme d'Euclide](src/algorithms/math/euclidean-algorithm/README.fr-FR.md) - calcule le Plus Grand Commun Diviseur (PGCD)
  - `B` [Plus Petit Commun Multiple](src/algorithms/math/least-common-multiple) (PPCM)
  - `B` [Crible d'Eratosthène](src/algorithms/math/sieve-of-eratosthenes) - trouve tous les nombres premiers inférieurs à une certaine limite
  - `B` [Puissance de Deux](src/algorithms/math/is-power-of-two) - teste si un nombre donné est une puissance de deux (algorithmes naif et basé sur les opérations bit-à-bit)
  - `B` [Triangle de Pascal](src/algorithms/math/pascal-triangle)
  - `B` [Nombre complexe](src/algorithms/math/complex-number/README.fr-FR.md) - nombres complexes et opérations de bases
  - `A` [Partition Entière](src/algorithms/math/integer-partition)
  - `A` [Approximation de π par l'algorithme de Liu Hui](src/algorithms/math/liu-hui) - approximation du calcul de π basé sur les N-gons
  - `B` [Exponentiation rapide](src/algorithms/math/fast-powering/README.fr-FR.md)
  - `A` [Transformée de Fourier Discrète](src/algorithms/math/fourier-transform/README.fr-FR.md) - décomposer une fonction du temps (un signal) en fréquences qui la composent
- **Ensembles**
  - `B` [Produit Cartésien](src/algorithms/sets/cartesian-product) - produit de plusieurs ensembles
  - `B` [Mélange de Fisher–Yates](src/algorithms/sets/fisher-yates) - permulation aléatoire d'une séquence finie
  - `A` [Ensemble des parties d'un ensemble](src/algorithms/sets/power-set) - tous les sous-ensembles d'un ensemble
  - `A` [Permutations](src/algorithms/sets/permutations) (avec et sans répétitions)
  - `A` [Combinaisons](src/algorithms/sets/combinations) (avec et sans répétitions)
  - `A` [Plus Longue Sous-séquence Commune](src/algorithms/sets/longest-common-subsequence)
  - `A` [Plus Longue Sous-suite strictement croissante](src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Plus Courte Super-séquence Commune](src/algorithms/sets/shortest-common-supersequence)
  - `A` [Problème du Sac à Dos](src/algorithms/sets/knapsack-problem) - versions "0/1" et "Sans Contraintes"
  - `A` [Sous-partie Maximum](src/algorithms/sets/maximum-subarray) - versions "Force Brute" et "Programmation Dynamique" (Kadane)
  - `A` [Somme combinatoire](src/algorithms/sets/combination-sum) - trouve toutes les combinaisons qui forment une somme spécifique
- **Chaînes de Caractères**
  - `B` [Distance de Hamming](src/algorithms/string/hamming-distance) - nombre de positions auxquelles les symboles sont différents
  - `A` [Distance de Levenshtein](src/algorithms/string/levenshtein-distance) - distance minimale d'édition entre deux séquences
  - `A` [Algorithme de Knuth–Morris–Pratt](src/algorithms/string/knuth-morris-pratt) (Algorithme KMP) - recherche de sous-chaîne (pattern matching)
  - `A` [Algorithme Z](src/algorithms/string/z-algorithm) - recherche de sous-chaîne (pattern matching)
  - `A` [Algorithme de Rabin Karp](src/algorithms/string/rabin-karp) - recherche de sous-chaîne
  - `A` [Plus Longue Sous-chaîne Commune](src/algorithms/string/longest-common-substring)
  - `A` [Expression Régulière](src/algorithms/string/regular-expression-matching)
- **Recherche**
  - `B` [Recherche Linéaire](src/algorithms/search/linear-search)
  - `B` [Jump Search](src/algorithms/search/jump-search) Recherche par saut (ou par bloc) - recherche dans une liste triée
  - `B` [Recherche Binaire](src/algorithms/search/binary-search) - recherche dans une liste triée
  - `B` [Recherche par Interpolation](src/algorithms/search/interpolation-search) - recherche dans une liste triée et uniformément distribuée
- **Tri**
  - `B` [Tri Bullet](src/algorithms/sorting/bubble-sort)
  - `B` [Tri Sélection](src/algorithms/sorting/selection-sort)
  - `B` [Tri Insertion](src/algorithms/sorting/insertion-sort)
  - `B` [Tri Par Tas](src/algorithms/sorting/heap-sort)
  - `B` [Tri Fusion](src/algorithms/sorting/merge-sort)
  - `B` [Tri Rapide](src/algorithms/sorting/quick-sort) - implémentations _in-place_ et _non in-place_
  - `B` [Tri Shell](src/algorithms/sorting/shell-sort)
  - `B` [Tri Comptage](src/algorithms/sorting/counting-sort)
  - `B` [Tri Radix](src/algorithms/sorting/radix-sort)
- **Arbres**
  - `B` [Parcours en Profondeur](src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Parcours en Largeur](src/algorithms/tree/breadth-first-search) (BFS)
- **Graphes**
  - `B` [Parcours en Profondeur](src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Parcours en Largeur](src/algorithms/graph/breadth-first-search) (BFS)
  - `B` [Algorithme de Kruskal](src/algorithms/graph/kruskal) - trouver l'arbre couvrant de poids minimal sur un graphe pondéré non dirigé
  - `A` [Algorithme de Dijkstra](src/algorithms/graph/dijkstra) - trouver tous les plus courts chemins partant d'un noeud vers tous les autres noeuds dans un graphe
  - `A` [Algorithme de Bellman-Ford](src/algorithms/graph/bellman-ford) - trouver tous les plus courts chemins partant d'un noeud vers tous les autres noeuds dans un graphe
  - `A` [Algorithme de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - trouver tous les plus courts chemins entre toutes les paires de noeuds dans un graphe
  - `A` [Détection de Cycle](src/algorithms/graph/detect-cycle) - pour les graphes dirigés et non dirigés (implémentations basées sur l'algorithme de Parcours en Profondeur et sur les Ensembles Disjoints)
  - `A` [Algorithme de Prim](src/algorithms/graph/prim) - trouver l'arbre couvrant de poids minimal sur un graphe pondéré non dirigé
  - `A` [Tri Topologique](src/algorithms/graph/topological-sorting) - méthode DFS
  - `A` [Point d'Articulation](src/algorithms/graph/articulation-points) - algorithme de Tarjan (basé sur l'algorithme de Parcours en Profondeur)
  - `A` [Bridges](src/algorithms/graph/bridges) - algorithme basé sur le Parcours en Profondeur
  - `A` [Chemin Eulérien et Circuit Eulérien](src/algorithms/graph/eulerian-path) - algorithme de Fleury - visite chaque arc exactement une fois
  - `A` [Cycle Hamiltonien](src/algorithms/graph/hamiltonian-cycle) - visite chaque noeud exactement une fois
  - `A` [Composants Fortements Connexes](src/algorithms/graph/strongly-connected-components) - algorithme de Kosaraju
  - `A` [Problème du Voyageur de Commerce](src/algorithms/graph/travelling-salesman) - chemin le plus court visitant chaque cité et retournant à la cité d'origine
- **Non catégorisé**
  - `B` [Tours de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `B` [Rotation de Matrice Carrée](src/algorithms/uncategorized/square-matrix-rotation) - algorithme _in place_
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game) - retour sur trace, programmation dynamique (haut-bas + bas-haut) et exemples gourmands
  - `B` [Chemins Uniques](src/algorithms/uncategorized/unique-paths) - retour sur trace, programmation dynamique (haut-bas + bas-haut) et exemples basés sur le Triangle de Pascal
  - `A` [Problème des N-Dames](src/algorithms/uncategorized/n-queens)
  - `A` [Problème du Cavalier](src/algorithms/uncategorized/knight-tour)

### Algorithmes par Paradigme

Un paradigme algorithmique est une méthode générique ou une approche qui
sous-tend la conception d'une classe d'algorithmes. C'est une abstraction
au-dessus de la notion d'algorithme, tout comme l'algorithme est une abstraction
supérieure à un programme informatique.

- **Force Brute** - cherche parmi toutes les possibilités et retient la meilleure
  - `B` [Recherche Linéaire](src/algorithms/search/linear-search)
  - `A` [Sous-partie Maximum](src/algorithms/sets/maximum-subarray)
  - `A` [Problème du Voyageur de Commerce](src/algorithms/graph/travelling-salesman) - chemin le plus court visitant chaque cité et retournant à la cité d'origine
- **Gourmand** - choisit la meilleure option à l'instant courant, sans tenir compte de la situation future
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `A` [Problème du Sac à Dos Sans Contraintes](src/algorithms/sets/knapsack-problem)
  - `A` [Algorithme de Dijkstra](src/algorithms/graph/dijkstra) - trouver tous les plus courts chemins partant d'un noeud vers tous les autres noeuds dans un graphe
  - `A` [Algorithme de Prim](src/algorithms/graph/prim) - trouver l'arbre couvrant de poids minimal sur un graphe pondéré non dirigé
  - `A` [Algorithme de Kruskal](src/algorithms/graph/kruskal) - trouver l'arbre couvrant de poids minimal sur un graphe pondéré non dirigé
- **Diviser et Régner** - divise le problème en sous problèmes (plus simples) et résoud ces sous problèmes
  - `B` [Recherche Binaire](src/algorithms/search/binary-search)
  - `B` [Tours de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `B` [Triangle de Pascal](src/algorithms/math/pascal-triangle)
  - `B` [Algorithme d'Euclide](src/algorithms/math/euclidean-algorithm) - calcule le Plus Grand Commun Diviseur (PGCD)
  - `B` [Tri Fusion](src/algorithms/sorting/merge-sort)
  - `B` [Tri Rapide](src/algorithms/sorting/quick-sort)
  - `B` [Arbre de Parcours en Profondeur](src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Graphe de Parcours en Profondeur](src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `A` [Permutations](src/algorithms/sets/permutations) (avec et sans répétitions)
  - `A` [Combinations](src/algorithms/sets/combinations) (avec et sans répétitions)
- **Programmation Dynamique** - construit une solution en utilisant les solutions précédemment trouvées
  - `B` [Nombre de Fibonacci](src/algorithms/math/fibonacci)
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `B` [Chemins Uniques](src/algorithms/uncategorized/unique-paths)
  - `A` [Distance de Levenshtein](src/algorithms/string/levenshtein-distance) - distance minimale d'édition entre deux séquences
  - `A` [Plus Longue Sous-séquence Commune](src/algorithms/sets/longest-common-subsequence)
  - `A` [Plus Longue Sous-chaîne Commune](src/algorithms/string/longest-common-substring)
  - `A` [Plus Longue Sous-suite strictement croissante](src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Plus Courte Super-séquence Commune](src/algorithms/sets/shortest-common-supersequence)
  - `A` [Problème de Sac à Dos](src/algorithms/sets/knapsack-problem)
  - `A` [Partition Entière](src/algorithms/math/integer-partition)
  - `A` [Sous-partie Maximum](src/algorithms/sets/maximum-subarray)
  - `A` [Algorithme de Bellman-Ford](src/algorithms/graph/bellman-ford) - trouver tous les plus courts chemins partant d'un noeud vers tous les autres noeuds dans un graphe
  - `A` [Algorithme de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - trouver tous les plus courts chemins entre toutes les paires de noeuds dans un graphe
  - `A` [Expression Régulière](src/algorithms/string/regular-expression-matching)
- **Retour sur trace** - de même que la version "Force Brute", essaie de générer toutes les solutions possibles, mais pour chaque solution générée, on teste si elle satisfait toutes les conditions, et seulement ensuite continuer à générer des solutions ultérieures. Sinon, l'on revient en arrière, et l'on essaie un
  chemin différent pour tester d'autres solutions. Normalement, la traversée en profondeur de l'espace d'états est utilisée.
  - `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  - `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  - `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  - `A` [Problème des N-Dames](src/algorithms/uncategorized/n-queens)
  - `A` [Problème du Cavalier](src/algorithms/uncategorized/knight-tour)
  - `A` [Somme combinatoire](src/algorithms/sets/combination-sum) - trouve toutes les combinaisons qui forment une somme spécifique
- **Séparation et Evaluation** - pemet de retenir une solution à moindre coût dans un ensemble. Pour chaque étape, l'on garde une trace de la solution la moins coûteuse trouvée jusqu'à présent en tant que borne inférieure du coût. Cela afin d'éliminer les solutions partielles dont les coûts sont plus élevés que celui de la solution actuelle retenue. Normalement, la traversée en largeur en combinaison avec la traversée en profondeur de l'espace d'états de l'arbre est utilisée.

## Comment utiliser ce dépôt

**Installer toutes les dépendances**

```
npm install
```

**Exécuter ESLint**

Vous pouvez l'installer pour tester la qualité du code.

```
npm run lint
```

**Exécuter tous les tests**

```
npm test
```

**Exécuter les tests par nom**

```
npm test -- 'LinkedList'
```

**Tests personnalisés**

Vous pouvez manipuler les structures de données et algorithmes présents dans ce
dépôt avec le fichier `./src/playground/playground.js` et écrire vos propres
tests dans file `./src/playground/__test__/playground.test.js`.

Vous pourrez alors simplement exécuter la commande suivante afin de tester si
votre code fonctionne comme escompté

```
npm test -- 'playground'
```

## Informations Utiles

### Références

[▶ Structures de Données et Algorithmes sur YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notation Grand O

Comparaison de la performance d'algorithmes en notation Grand O.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Voici la liste de certaines des notations Grand O les plus utilisées et de leurs
comparaisons de performance suivant différentes tailles pour les données d'entrée.

| Notation Grand O | Opérations pour 10 éléments | Opérations pour 100 éléments | Opérations pour 1000 éléments |
| ---------------- | --------------------------- | ---------------------------- | ----------------------------- |
| **O(1)**         | 1                           | 1                            | 1                             |
| **O(log N)**     | 3                           | 6                            | 9                             |
| **O(N)**         | 10                          | 100                          | 1000                          |
| **O(N log N)**   | 30                          | 600                          | 9000                          |
| **O(N^2)**       | 100                         | 10000                        | 1000000                       |
| **O(2^N)**       | 1024                        | 1.26e+29                     | 1.07e+301                     |
| **O(N!)**        | 3628800                     | 9.3e+157                     | 4.02e+2567                    |

### Complexité des Opérations suivant les Structures de Données

| Structure de donnée            | Accès  | Recherche | Insertion | Suppression | Commentaires                                                               |
| ------------------------------ | :----: | :-------: | :-------: | :---------: | :------------------------------------------------------------------------- |
| **Liste**                      |   1    |     n     |     n     |      n      |                                                                            |
| **Pile**                       |   n    |     n     |     1     |      1      |                                                                            |
| **Queue**                      |   n    |     n     |     1     |      1      |                                                                            |
| **Liste Liée**                 |   n    |     n     |     1     |      1      |                                                                            |
| **Table de Hachage**           |   -    |     n     |     n     |      n      | Dans le cas des fonctions de hachage parfaites, les couts seraient de O(1) |
| **Arbre de Recherche Binaire** |   n    |     n     |     n     |      n      | Dans le cas des arbre équilibrés, les coûts seraient de O(log(n))          |
| **Arbre B**                    | log(n) |  log(n)   |  log(n)   |   log(n)    |                                                                            |
| **Arbre Red-Black**            | log(n) |  log(n)   |  log(n)   |   log(n)    |                                                                            |
| **Arbre AVL**                  | log(n) |  log(n)   |  log(n)   |   log(n)    |                                                                            |
| **Filtre de Bloom**            |   -    |     1     |     1     |      -      | Les faux positifs sont possibles lors de la recherche                      |

### Complexité des Algorithmes de Tri de Liste

| Nom               |   Meilleur    |        Moyenne         |            Pire             | Mémoire | Stable | Commentaires                                                                         |
| ----------------- | :-----------: | :--------------------: | :-------------------------: | :-----: | :----: | :----------------------------------------------------------------------------------- |
| **Tri Bulle**     |       n       |     n<sup>2</sup>      |        n<sup>2</sup>        |    1    |  Oui   |                                                                                      |
| **Tri Insertion** |       n       |     n<sup>2</sup>      |        n<sup>2</sup>        |    1    |  Oui   |                                                                                      |
| **Tri Sélection** | n<sup>2</sup> |     n<sup>2</sup>      |        n<sup>2</sup>        |    1    |  Non   |                                                                                      |
| **Tri par Tas**   | n&nbsp;log(n) |     n&nbsp;log(n)      |        n&nbsp;log(n)        |    1    |  Non   |                                                                                      |
| **Merge sort**    | n&nbsp;log(n) |     n&nbsp;log(n)      |        n&nbsp;log(n)        |    n    |  Oui   |                                                                                      |
| **Tri Rapide**    | n&nbsp;log(n) |     n&nbsp;log(n)      |        n<sup>2</sup>        | log(n)  |  Non   | le Tri Rapide est généralement effectué _in-place_ avec une pile de taille O(log(n)) |
| **Tri Shell**     | n&nbsp;log(n) | dépend du gap séquence | n&nbsp;(log(n))<sup>2</sup> |    1    |  Non   |                                                                                      |
| **Tri Comptage**  |     n + r     |         n + r          |            n + r            |  n + r  |  Oui   | r - le plus grand nombre dans la liste                                               |
| **Tri Radix**     |    n \* k     |         n \* k         |           n \* k            |  n + k  |  Non   | k - longueur du plus long index                                                      |

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
