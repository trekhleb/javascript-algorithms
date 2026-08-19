# Estrutura de Dados e Algoritmos em JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Este repositório contém exemplos baseados em JavaScript de muitos
algoritmos e estruturas de dados populares.

Cada algoritmo e estrutura de dados possui seu próprio README
com explicações relacionadas e links para leitura adicional (incluindo
vídeos para YouTube)

_Leia isto em outros idiomas:_
[_English_](https://github.com/trekhleb/javascript-algorithms/)
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md),
[_Uzbek_](README.uz-UZ.md)
[_עברית_](README.he-IL.md)

## Estrutura de Dados

Uma estrutura de dados é uma maneira particular de organizar e armazenar dados em um computador para que ele possa
ser acessado e modificado de forma eficiente. Mais precisamente, uma estrutura de dados é uma coleção de valores de dados, as relações entre eles e as funções ou operações que podem ser aplicadas aos dados.

`B` - Iniciante, `A` - Avançado

* `B` [Lista Encadeada (Linked List)](src/data-structures/linked-list/README.pt-BR.md)
* `B` [Lista Duplamente Ligada (Doubly Linked List)](src/data-structures/doubly-linked-list/README.pt-BR.md)
* `B` [Fila (Queue)](src/data-structures/queue/README.pt-BR.md)
* `B` [Pilha (Stack)](src/data-structures/stack/README.pt-BR.md)
* `B` [Tabela de Hash (Hash Table)](src/data-structures/hash-table/README.pt-BR.md)
* `B` [Heap](src/data-structures/heap/README.pt-BR.md) - versões de heap máximo e mínimo
* `B` [Fila de Prioridade (Priority Queue)](src/data-structures/priority-queue/README.pt-BR.md)
* `A` [Árvore de Prefixos (Trie)](src/data-structures/trie/README.pt-BR.md)
* `A` [Árvore (Tree)](src/data-structures/tree/README.pt-BR.md)
  * `A` [Árvore de Pesquisa Binária (Binary Search Tree)](src/data-structures/tree/binary-search-tree/README.pt-BR.md)
  * `A` [Árvore AVL (AVL Tree)](src/data-structures/tree/avl-tree/README.pt-BR.md)
  * `A` [Árvore Rubro-Negra (Red-Black Tree)](src/data-structures/tree/red-black-tree/README.pt-BR.md)
  * `A` [Árvore de Segmento (Segment Tree)](src/data-structures/tree/segment-tree/README.pt-BR.md) - com exemplos de consultas min / max / sum range
  * `A` [Árvore Fenwick (Fenwick Tree)](src/data-structures/tree/fenwick-tree/README.pt-BR.md) (Árvore indexada binária)
* `A` [Grafo (Graph)](src/data-structures/graph/README.pt-BR.md) (ambos dirigidos e não direcionados)
* `A` [Conjunto Disjunto (Disjoint Set)](src/data-structures/disjoint-set/README.pt-BR.md)
* `A` [Filtro Bloom (Bloom Filter)](src/data-structures/bloom-filter/README.pt-BR.md)

## Algoritmos

Um algoritmo é uma especificação inequívoca de como resolver uma classe de problemas. Isto é
um conjunto de regras que define precisamente uma sequência de operações.

`B` - Iniciante, `A` - Avançado

### Algoritmos por Tópico

* **Matemática**
  * `B` [Manipulação Bit](src/algorithms/math/bits) - set/get/update/clear bits, multiplicação / divisão por dois, tornar negativo etc.
  * `B` [Fatorial](src/algorithms/math/factorial)
  * `B` [Número de Fibonacci](src/algorithms/math/fibonacci)
  * `B` [Teste de Primalidade](src/algorithms/math/primality-test) (método de divisão experimental)
  * `B` [Algoritmo Euclidiano](src/algorithms/math/euclidean-algorithm) - Calcular o Máximo Divisor Comum (MDC)
  * `B` [Mínimo Múltiplo Comum](src/algorithms/math/least-common-multiple) Calcular o Mínimo Múltiplo Comum (MMC)
  * `B` [Peneira de Eratóstenes](src/algorithms/math/sieve-of-eratosthenes) - Encontrar todos os números primos até um determinado limite
  * `B` [Potência de Dois](src/algorithms/math/is-power-of-two) - Verifique se o número é a potência de dois (algoritmos ingênuos e bit a bit)
  * `B` [Triângulo de Pascal](src/algorithms/math/pascal-triangle)
  * `B` [Número Complexo](src/algorithms/math/complex-number) - Números complexos e operações básicas com eles
  * `A` [Partição Inteira](src/algorithms/math/integer-partition)
  * `A` [Algoritmo Liu Hui π](src/algorithms/math/liu-hui) - Cálculos aproximados de π baseados em N-gons
* **Conjuntos**
  * `B` [Produto Cartesiano](src/algorithms/sets/cartesian-product) - Produto de vários conjuntos
  * `B` [Permutações de Fisher–Yates](src/algorithms/sets/fisher-yates) - Permutação aleatória de uma sequência finita
  * `A` [Potência e Conjunto](src/algorithms/sets/power-set) - Todos os subconjuntos de um conjunto
  * `A` [Permutações](src/algorithms/sets/permutations) (com e sem repetições)
  * `A` [Combinações](src/algorithms/sets/combinations) (com e sem repetições)
  * `A` [Mais Longa Subsequência Comum](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Maior Subsequência Crescente](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersequência Comum Mais Curta](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema da Mochila](src/algorithms/sets/knapsack-problem) - "0/1" e "Não consolidado"
  * `A` [Subarray Máximo](src/algorithms/sets/maximum-subarray) - "Força bruta" e "Programação Dinâmica", versões de Kadane
  * `A` [Soma de Combinação](src/algorithms/sets/combination-sum) - Encontre todas as combinações que formam uma soma específica
* **Cadeia de Caracteres**
  * `B` [Distância de Hamming](src/algorithms/string/hamming-distance) - Número de posições em que os símbolos são diferentes
  * `B` [Palíndromos](src/algorithms/string/palindrome) - Verifique se a cadeia de caracteres (string) é a mesma ao contrário
  * `A` [Distância Levenshtein](src/algorithms/string/levenshtein-distance) - Distância mínima de edição entre duas sequências
  * `A` [Algoritmo Knuth–Morris–Pratt](src/algorithms/string/knuth-morris-pratt) (Algoritmo KMP) - Pesquisa de substring (correspondência de padrão)
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - Pesquisa de substring (correspondência de padrão)
  * `A` [Algoritmo de Rabin Karp](src/algorithms/string/rabin-karp) - Pesquisa de substring
  * `A` [Substring Comum Mais Longa](src/algorithms/string/longest-common-substring)
  * `A` [Expressões Regulares Correspondentes](src/algorithms/string/regular-expression-matching)
* **Buscas**
  * `B` [Busca Linear (Linear Search)](src/algorithms/search/linear-search)
  * `B` [Busca por Saltos (Jump Search)](src/algorithms/search/jump-search) - Pesquisa em matriz ordenada
  * `B` [Busca Binária (Binary Search)](src/algorithms/search/binary-search) - Pesquisa em matriz ordenada
  * `B` [Busca por Interpolação (Interpolation Search)](src/algorithms/search/interpolation-search) - Pesquisa em matriz classificada uniformemente distribuída
* **Classificação**
  * `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) - Implementações local e não local
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Árvores**
  * `B` [Busca em Profundidade (Depth-First Search)](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Busca em Largura (Breadth-First Search)](src/algorithms/tree/breadth-first-search) (BFS)
* **Grafos**
  * `B` [Busca em Profundidade (Depth-First Search)](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Busca em Largura (Breadth-First Search)](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Algoritmo de Kruskal](src/algorithms/graph/kruskal) - Encontrando Árvore Mínima de Abrangência (MST) para grafo conexo com pesos
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - Encontrar caminhos mais curtos para todos os vértices do grafo a partir de um único vértice
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - Encontrar caminhos mais curtos para todos os vértices do grafo a partir de um único vértice
  * `A` [Algoritmo de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - Encontrar caminhos mais curtos entre todos os pares de vértices
  * `A` [Detectar Ciclo](src/algorithms/graph/detect-cycle) - Para grafos direcionados e não direcionados (versões baseadas em DFS e Conjunto Disjuntivo)
  * `A` [Algoritmo de Prim](src/algorithms/graph/prim) - Encontrando Árvore Mínima de Abrangência (MST) para grafo não direcionado ponderado
  * `A` [Ordenação Topológica](src/algorithms/graph/topological-sorting) - Métodos DFS
  * `A` [Pontos de Articulação](src/algorithms/graph/articulation-points) - O algoritmo de Tarjan (baseado em DFS)
  * `A` [Pontes](src/algorithms/graph/bridges) - Algoritmo baseado em DFS
  * `A` [Caminho e Circuito Euleriano](src/algorithms/graph/eulerian-path) - Algoritmo de Fleury - Visite todas as bordas exatamente uma vez
  * `A` [Ciclo Hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - Visite todas as bordas exatamente uma vez
  * `A` [Componentes Fortemente Conectados](src/algorithms/graph/strongly-connected-components) - Algoritmo de Kosaraju
  * `A` [Problema do Caixeiro Viajante](src/algorithms/graph/travelling-salesman) - Rota mais curta possível que visita cada cidade e retorna à cidade de origem
* **Criptografia**
  * `B` [Hash Polinomial](src/algorithms/cryptography/polynomial-hash) - Função de hash de rolagem baseada em polinômio
* **Sem categoria**
  * `B` [Torre de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Rotação de Matriz Quadrada](src/algorithms/uncategorized/square-matrix-rotation) - Algoritmo no local
  * `B` [Jogo do Salto](src/algorithms/uncategorized/jump-game) - Backtracking, programação dinâmica (top-down + bottom-up) e exemplos gananciosos
  * `B` [Caminhos Únicos](src/algorithms/uncategorized/unique-paths) - Backtracking, programação dinâmica e exemplos baseados no triângulo de Pascal
  * `B` [Terraços de Chuva](src/algorithms/uncategorized/rain-terraces) - Problema de retenção da água da chuva (programação dinâmica e versões de força bruta)
  * `A` [Problema das N-Rainhas](src/algorithms/uncategorized/n-queens)
  * `A` [Passeio do Cavaleiro](src/algorithms/uncategorized/knight-tour)

### Algoritmos por Paradigma

Um paradigma algorítmico é um método ou abordagem genérica subjacente ao design de uma classe
de algoritmos. É uma abstração maior do que a noção de um algoritmo, assim como
algoritmo é uma abstração maior que um programa de computador.

* **Força bruta** - Pense em todas as possibilidades e escolha a melhor solução
  * `B` [Busca Linear (Linear Search)](src/algorithms/search/linear-search)
  * `B` [Terraços de Chuva](src/algorithms/uncategorized/rain-terraces) - Problema de retenção de água da chuva (programação dinâmica e versões de força bruta)
  * `A` [Subarray Máximo](src/algorithms/sets/maximum-subarray)
  * `A` [Problema do Caixeiro Viajante](src/algorithms/graph/travelling-salesman) - Rota mais curta possível que visita cada cidade e retorna à cidade de origem
* **Ganância** - Escolha a melhor opção no momento, sem qualquer consideração pelo futuro
  * `B` [Jogo do Salto](src/algorithms/uncategorized/jump-game)
  * `A` [Problema da Mochila](src/algorithms/sets/knapsack-problem)
  * `A` [Algoritmo de Dijkstra](src/algorithms/graph/dijkstra) - Encontrar caminhos mais curtos para todos os vértices do grafo a partir de um único vértice
  * `A` [Algoritmo de Prim](src/algorithms/graph/prim) - Encontrando Árvore Mínima de Abrangência (MST) para grafo não direcionado ponderado
  * `A` [Algoritmo de Kruskal](src/algorithms/graph/kruskal) - Encontrando Árvore Mínima de Abrangência (MST) para grafo conexo com pesos
* **Dividir e Conquistar** - Dividir o problema em partes menores e então resolver essas partes
  * `B` [Busca Binária (Binary Search)](src/algorithms/search/binary-search)
  * `B` [Torre de Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Triângulo de Pascal](src/algorithms/math/pascal-triangle)
  * `B` [Algoritmo Euclidiano](src/algorithms/math/euclidean-algorithm) - Calcular o Máximo Divisor Comum (MDC)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort)
  * `B` [Busca em Profundidade (Depth-First Search)](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Busca em Largura (Breadth-First Search)](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Jogo do Salto](src/algorithms/uncategorized/jump-game)
  * `A` [Permutações](src/algorithms/sets/permutations) (com e sem repetições)
  * `A` [Combinações](src/algorithms/sets/combinations) (com e sem repetições)
* **Programação Dinâmica** - Criar uma solução usando sub-soluções encontradas anteriormente
  * `B` [Número de Fibonacci](src/algorithms/math/fibonacci)
  * `B` [Jogo do Salto](src/algorithms/uncategorized/jump-game)
  * `B` [Caminhos Únicos](src/algorithms/uncategorized/unique-paths)
  * `B` [Terraços de Chuva](src/algorithms/uncategorized/rain-terraces) - Trapping problema da água da chuva
  * `A` [Distância Levenshtein](src/algorithms/string/levenshtein-distance) - Distância mínima de edição entre duas sequências
  * `A` [Mais Longa Subsequência Comum](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Substring Comum Mais Longa](src/algorithms/string/longest-common-substring)
  * `A` [Maior Subsequência Crescente](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersequência Comum Mais Curta](src/algorithms/sets/shortest-common-supersequence)
  * `A` [Problema da Mochila](src/algorithms/sets/knapsack-problem)
  * `A` [Partição Inteira](src/algorithms/math/integer-partition)
  * `A` [Subarray Máximo](src/algorithms/sets/maximum-subarray)
  * `A` [Algoritmo de Bellman-Ford](src/algorithms/graph/bellman-ford) - Encontrar caminhos mais curtos para todos os vértices do grafo a partir de um único vértice
  * `A` [Algoritmo de Floyd-Warshall](src/algorithms/graph/floyd-warshall) - Encontrar caminhos mais curtos entre todos os pares de vértices
  * `A` [Expressões Regulares Correspondentes](src/algorithms/string/regular-expression-matching)
* **Backtracking** - Da mesma forma que a força bruta, tente gerar todas as soluções possíveis, mas, cada vez que você gerar a próxima solução será necessário testar se a mesma satisfaz todas as condições, e só então continuará a gerar as soluções subsequentes. Caso contrário, volte atrás e siga um caminho diferente para encontrar uma solução. Normalmente, a passagem DFS do espaço de estados está sendo usada.
  * `B` [Jogo do Salto](src/algorithms/uncategorized/jump-game)
  * `B` [Caminhos Únicos](src/algorithms/uncategorized/unique-paths)
  * `A` [Ciclo Hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - Visite todos os vértices exatamente uma vez
  * `A` [Problema das N-Rainhas](src/algorithms/uncategorized/n-queens)
  * `A` [Passeio do Cavaleiro](src/algorithms/uncategorized/knight-tour)
  * `A` [Soma de Combinação](src/algorithms/sets/combination-sum) - Encontre todas as combinações que formam uma soma específica
* **Branch & Bound** - Lembre-se da solução de menor custo encontrada em cada etapa do retrocesso, pesquisar e usar o custo da solução de menor custo encontrada até o limite inferior do custo de
solução de menor custo para o problema, a fim de descartar soluções parciais com custos maiores que o
solução de menor custo encontrada até o momento. Normalmente, a travessia BFS em combinação com a passagem DFS do espaço de estados
árvore está sendo usada

## Como usar este repositório

**Instalar todas as dependências**
```
npm install
```

**Executar o ESLint**

Você pode querer executá-lo para verificar a qualidade do código.

```
npm run lint
```

**Execute todos os testes**
```
npm test
```

**Executar testes por nome**
```
npm test -- 'LinkedList'
```
**Solução de problemas**

Caso o linting ou o teste estejam falhando, tente excluir a pasta node_modules e reinstalar os pacotes npm:
```
rm -rf ./node_modules
npm i
```

Verifique também se você está usando uma versão correta do Node (>=14.16.0). Se você estiver usando [nvm](https://github.com/nvm-sh/nvm) para gerenciamento de versão do Node, você pode executar `nvm use` a partir da pasta raiz do projeto e a versão correta será escolhida.

**Playground**

Você pode brincar com estruturas de dados e algoritmos no arquivo `./src/playground/playground.js` e escrever
testes para isso em `./src/playground/__test__/playground.test.js`.

Em seguida, basta executar o seguinte comando para testar se o código do seu playground funciona conforme o esperado:

```
npm test -- 'playground'
```

## Informação útil

### Referências

- [▶ Estruturas de Dados e Algoritmos no YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 Esboços de Estruturas de Dados](https://okso.app/showcase/data-structures)

### Notação Big O

A notação Big O é usada para classificar algoritmos de acordo com a forma como seu tempo de execução ou requisitos de espaço crescem à medida que o tamanho da entrada aumenta. No gráfico abaixo você pode encontrar as ordens mais comuns de crescimento de algoritmos especificados na notação Big O.

![Notação Big-O](./assets/big-o-graph.png)

Fonte: [Notação Big-O Dicas](https://bigocheatsheet.com/).

Abaixo está a lista de algumas das notações Big O mais usadas e suas comparações de desempenho em relação aos diferentes tamanhos dos dados de entrada.

| Notação Big-O  | Cálculos para 10 elementos   | Cálculos para 100 elementos   | Cálculos para 1000 elementos    |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Complexidade de operações de estrutura de dados

| Estrutura de dados      | Acesso    | Busca     | Inserção  | Eliminação | Comentários |
| ----------------------- | :-------: | :-------: | :-------: | :-------:  | :--------   |
| **Array**               | 1         | n         | n         | n          |             |
| **Stack**               | n         | n         | 1         | 1          |             |
| **Queue**               | n         | n         | 1         | 1          |             |
| **Linked List**         | n         | n         | 1         | 1          |             |
| **Hash Table**          | -         | n         | n         | n          | Em caso de uma função hash perfeita, os custos seriam O(1) |
| **Binary Search Tree**  | n         | n         | n         | n          | No caso de custos de árvore equilibrados seria O(log(n))
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)     |             |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)     |             |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)     |             |
| **Bloom Filter**        | -         | 1         | 1         | -          | Falsos positivos são possíveis durante a pesquisa |

### Complexidade dos Algoritmos de Ordenação de Matrizes

| Nome                  | Melhor          | Média               | Pior                | Mémoria   | Estável   | Comentários |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :--------   |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Sim       |             |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Sim       |             |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Não       |             |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | Não       |             |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Sim       |             |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | Não       | O Quicksort geralmente é feito no local com espaço de pilha O(log(n)) |
| **Shell sort**        | n&nbsp;log(n)   | depende da sequência de lacunas | n&nbsp;(log(n))<sup>2</sup>     | 1      | Não    |                   |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Sim       | r - maior número na matriz          |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Sim       | k - comprimento da chave mais longa |

> ℹ️ Outros [projetos](https://trekhleb.dev/projects/) e [artigos](https://trekhleb.dev/blog/) sobre JavaScript e algoritmos em [trekhleb.dev](https://trekhleb.dev)
