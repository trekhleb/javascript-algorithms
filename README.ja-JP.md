# JavaScriptアルゴリズムとデータ構造

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

このリポジトリには、JavaScriptベースの一般的なアルゴリズムとデータ構造に関する多数のサンプルが含まれています。


各アルゴリズムとデータ構造には独自のREADMEがあります。
関連する説明、そして参考資料 (YouTube動画)も含まれています。

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
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

## データ構造

データ構造は、データ値、データ値との間の関係、
そして、データを扱うことができる関数と演算の集合で、
データを特定の方法で構成して保存することで、より効率的に
アクセスして変更することができます。

`B` - 初心者, `A` - 上級

* `B` [リンクされたリスト](src/data-structures/linked-list)
* `B` [二重リンクリスト](src/data-structures/doubly-linked-list)
* `B` [キュー](src/data-structures/queue)
* `B` [スタック](src/data-structures/stack)
* `B` [ハッシュ表](src/data-structures/hash-table)
* `B` [ヒープ](src/data-structures/heap) - max and min heap versions
* `B` [優先度キュー](src/data-structures/priority-queue)
* `A` [トライ](src/data-structures/trie)
* `A` [ツリー](src/data-structures/tree)
  * `A` [バイナリ検索ツリー](src/data-structures/tree/binary-search-tree)
  * `A` [AVLツリー](src/data-structures/tree/avl-tree)
  * `A` [赤黒のツリー](src/data-structures/tree/red-black-tree)
  * `A` [セグメントツリー](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [フェンウィック・ツリー](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [グラフ](src/data-structures/graph) (both directed and undirected)
* `A` [分離集合](src/data-structures/disjoint-set)
* `A` [ブルームフィルタ](src/data-structures/bloom-filter)

## アルゴリズム

アルゴリズムとは、問題のクラスをどのように解決するかの明確な仕様です。
一連の操作を正確に定義する一連のルールです。

`B` - 初心者, `A` - 上級

### トピック別アルゴリズム

* **数学**
  * `B` [ビット操作](src/algorithms/math/bits) - set/get/update/clear bits, 2つの乗算/除算, 否定的にする. 等
  * `B` [因果関係](src/algorithms/math/factorial)
  * `B` [フィボナッチ数](src/algorithms/math/fibonacci) - クラシックとクローズドフォームのバージョン
  * `B` [素数性テスト](src/algorithms/math/primality-test) (trial division 方法)
  * `B` [ユークリッドアルゴリズム](src/algorithms/math/euclidean-algorithm) - 最大公約数を計算する (GCD)
  * `B` [最小公倍数](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [エラトステネスのふるい](src/algorithms/math/sieve-of-eratosthenes) - 与えられた限度まですべての素数を見つける
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - 数値が2の累乗であるかどうかを調べる（単純なアルゴリズムとビットごとのアルゴリズム）
  * `B` [パスカルの三角形](src/algorithms/math/pascal-triangle)
  * `B` [複素数](src/algorithms/math/complex-number) - 複素数とその基本演算
  * `B` [ラジアン＆度](src/algorithms/math/radian) - 度数と逆方向の変換に対するラジアン
  * `B` [高速電力供給](src/algorithms/math/fast-powering)
  * `A` [整数パーティション](src/algorithms/math/integer-partition)
  * `A` [Liu Hui π アルゴリズム](src/algorithms/math/liu-hui) - N-gonsに基づく近似π計算
  * `A` [離散フーリエ変換](src/algorithms/math/fourier-transform) - 時間（信号）の関数をそれを構成する周波数に分解する
* **セット**
  * `B` [デカルト積 ](src/algorithms/sets/cartesian-product) - 複数の積の積
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - 有限シーケンスのランダム置換
  * `A` [パワーセット](src/algorithms/sets/power-set) - セットのすべてのサブセット（ビットごとのソリューションとバックトラッキングソリューション）
  * `A` [順列](src/algorithms/sets/permutations) （繰り返しの有無にかかわらず）
  * `A` [組み合わせ](src/algorithms/sets/combinations) （繰返しあり、繰返しなし）
  * `A` [最長共通部分列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最長増加サブシーケンス](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短共通スーパーシーケンス](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [ナップザック問題 ](src/algorithms/sets/knapsack-problem) - 「0/1」と「非結合」問題
  * `A` [最大サブアレイ](src/algorithms/sets/maximum-subarray) - 「ブルートフォース」と「ダイナミックプログラミング」（Kadane's版）
  * `A` [組み合わせ合計](src/algorithms/sets/combination-sum) - 特定の合計を構成するすべての組み合わせを見つける
* **文字列**
  * `B` [ハミング距離](src/algorithms/string/hamming-distance) - シンボルが異なる位置の数
  * `A` [レーベンシュタイン距離](src/algorithms/string/levenshtein-distance) - 2つのシーケンス間の最小編集距離
  * `A` [Knuth-Morris-Prattアルゴリズム](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - 部分文字列検索 (pattern matching)
  * `A` [Z アルゴリズム](src/algorithms/string/z-algorithm) - 部分文字列検索 (pattern matching)
  * `A` [Rabin Karpアルゴリズム](src/algorithms/string/rabin-karp) - 部分文字列検索
  * `A` [最長共通部分文字列](src/algorithms/string/longest-common-substring)
  * `A` [正規表現マッチング](src/algorithms/string/regular-expression-matching)
* **検索**
  * `B` [リニアサーチ](src/algorithms/search/linear-search)
  * `B` [ジャンプ検索](src/algorithms/search/jump-search) (Jump Search) - ソートされた配列で検索
  * `B` [バイナリ検索](src/algorithms/search/binary-search) - ソートされた配列で検索
  * `B` [補間探索](src/algorithms/search/interpolation-search) - 一様分布のソート配列で検索する
* **並べ替え**
  * `B` [バブルソート](src/algorithms/sorting/bubble-sort)
  * `B` [選択ソート](src/algorithms/sorting/selection-sort)
  * `B` [挿入ソート](src/algorithms/sorting/insertion-sort)
  * `B` [ヒープソート](src/algorithms/sorting/heap-sort)
  * `B` [マージソート](src/algorithms/sorting/merge-sort)
  * `B` [クイックソート](src/algorithms/sorting/quick-sort) -インプレースおよび非インプレース・インプリメンテーション
  * `B` [シェルソート](src/algorithms/sorting/shell-sort)
  * `B` [並べ替えを数える](src/algorithms/sorting/counting-sort)
  * `B` [基数ソート](src/algorithms/sorting/radix-sort)
* **リンクされたリスト**
  * `B` [ストレートトラバーサル](src/algorithms/linked-list/traversal)
  * `B` [逆方向のトラバーサル](src/algorithms/linked-list/reverse-traversal)
* **ツリー**
  * `B` [深度優先検索](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [幅優先検索](src/algorithms/tree/breadth-first-search) (BFS)
* **グラフ**
  * `B` [深度優先検索](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [幅優先検索](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskalのアルゴリズム](src/algorithms/graph/kruskal) - 重み付き無向グラフの最小スパニングツリー（MST）の発見
  * `A` [Dijkstraアルゴリズム](src/algorithms/graph/dijkstra) - 単一の頂点からすべてのグラフ頂点への最短経路を見つける
  * `A` [Bellman-Fordアルゴリズム](src/algorithms/graph/bellman-ford) - 単一の頂点からすべてのグラフ頂点への最短経路を見つける
  * `A` [Floyd-Warshallアルゴリズム](src/algorithms/graph/floyd-warshall) - すべての頂点ペア間の最短経路を見つける
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - 有向グラフと無向グラフの両方（DFSおよびディスジョイントセットベースのバージョン）
  * `A` [プリムのアルゴリズム](src/algorithms/graph/prim) - 重み付き無向グラフの最小スパニングツリー（MST）の発見
  * `A` [トポロジカルソート](src/algorithms/graph/topological-sorting) - DFSメソッド
  * `A` [アーティキュレーションポイント](src/algorithms/graph/articulation-points) - Tarjanのアルゴリズム（DFSベース）
  * `A` [ブリッジ ](src/algorithms/graph/bridges) - DFSベースのアルゴリズム
  * `A` [オイラーパスとオイラー回路](src/algorithms/graph/eulerian-path) - フルリーアルゴリズム - すべてのエッジを正確に1回訪問する
  * `A` [ハミルトニアンサイクル](src/algorithms/graph/hamiltonian-cycle) - すべての頂点を正確に1回訪問する
  * `A` [強連結成分](src/algorithms/graph/strongly-connected-components) - コサラジュのアルゴリズム
  * `A` [トラベリングセールスマン問題](src/algorithms/graph/travelling-salesman) - 各都市を訪問し、起点都市に戻る最短経路
* **暗号**
  * `B` [多項式ハッシュ](src/algorithms/cryptography/polynomial-hash) - 関数多項式に基づくハッシュ関数
* **未分類**
  * `B` [ハノイの塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [正方行列回転](src/algorithms/uncategorized/square-matrix-rotation) - インプレイスアルゴリズム
  * `B` [ジャンプゲーム](src/algorithms/uncategorized/jump-game) - バックトラック、ダイナミックプログラミング（トップダウン+ボトムアップ）、欲張りの例
  * `B` [ユニークなパス](src/algorithms/uncategorized/unique-paths) - バックトラック、動的プログラミング、PascalのTriangleベースの例
  * `B` [レインテラス](src/algorithms/uncategorized/rain-terraces) - トラップ雨水問題（ダイナミックプログラミングとブルートフォースバージョン）
  * `B` [再帰的階段](src/algorithms/uncategorized/recursive-staircase) - 上に到達する方法の数を数える（4つのソリューション）
  * `A` [N-クイーンズ問題](src/algorithms/uncategorized/n-queens)
  * `A` [ナイトツアー](src/algorithms/uncategorized/knight-tour)

### Paradigmによるアルゴリズム

アルゴリズムパラダイムは、あるクラスのアルゴリズムの設計の基礎をなす一般的な方法またはアプローチである。それは、アルゴリズムがコンピュータプログラムよりも高い抽象であるのと同様に、アルゴリズムの概念よりも高い抽象である。
* **ブルートフォース** - すべての可能性を見て最適なソリューションを選択する
  * `B` [線形探索](src/algorithms/search/linear-search)
  * `B` [レインテラス](src/algorithms/uncategorized/rain-terraces) - 雨水問題
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - 先頭に到達する方法の数を数えます
  * `A` [最大サブアレイ](src/algorithms/sets/maximum-subarray)
  * `A` [旅行セールスマン問題](src/algorithms/graph/travelling-salesman) - 各都市を訪れ、起点都市に戻る最短ルート
  * `A` [離散フーリエ変換](src/algorithms/math/fourier-transform) - 時間（信号）の関数をそれを構成する周波数に分解する
* **欲張り** - 未来を考慮することなく、現時点で最適なオプションを選択する
  * `B` [ジャンプゲーム](src/algorithms/uncategorized/jump-game)
  * `A` [結合されていないナップザック問題](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - すべてのグラフ頂点への最短経路を見つける
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - 重み付き無向グラフの最小スパニングツリー（MST）を見つける
  * `A` [Kruskalのアルゴリズム](src/algorithms/graph/kruskal) - 重み付き無向グラフの最小スパニングツリー（MST）を見つける
* **分割と征服** - 問題をより小さな部分に分割し、それらの部分を解決する
  * `B` [バイナリ検索](src/algorithms/search/binary-search)
  * `B` [ハノイの塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [パスカルの三角形](src/algorithms/math/pascal-triangle)
  * `B` [ユークリッドアルゴリズム](src/algorithms/math/euclidean-algorithm) - GCD（Greatest Common Divisor）を計算する
  * `B` [マージソート](src/algorithms/sorting/merge-sort)
  * `B` [クイックソート](src/algorithms/sorting/quick-sort)
  * `B` [ツリーの深さ優先検索](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [グラフの深さ優先検索](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [ジャンプゲーム](src/algorithms/uncategorized/jump-game)
  * `B` [高速電力供給](src/algorithms/math/fast-powering)
  * `A` [順列](src/algorithms/sets/permutations) （繰り返しの有無にかかわらず）
  * `A` [組み合わせ](src/algorithms/sets/combinations)（繰返しあり、繰返しなし）
* **動的プログラミング** - 以前に発見されたサブソリューションを使用してソリューションを構築する
  * `B` [フィボナッチ数](src/algorithms/math/fibonacci)
  * `B` [ジャンプゲーム](src/algorithms/uncategorized/jump-game)
  * `B` [ユニークなパス](src/algorithms/uncategorized/unique-paths)
  * `B` [雨テラス](src/algorithms/uncategorized/rain-terraces) - トラップ雨水問題
  * `B` [再帰的階段](src/algorithms/uncategorized/recursive-staircase) - 上に到達する方法の数を数える
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - 2つのシーケンス間の最小編集距離
  * `A` [最長共通部分列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最長共通部分文字列](src/algorithms/string/longest-common-substring)
  * `A` [最長増加サブシーケンス](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短共通共通配列](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1ナップザック問題](src/algorithms/sets/knapsack-problem)
  * `A` [整数パーティション](src/algorithms/math/integer-partition)
  * `A` [最大サブアレイ](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Fordアルゴリズム](src/algorithms/graph/bellman-ford) - すべてのグラフ頂点への最短経路を見つける
  * `A` [Floyd-Warshallアルゴリズム](src/algorithms/graph/floyd-warshall) - すべての頂点ペア間の最短経路を見つける
  * `A` [正規表現マッチング](src/algorithms/string/regular-expression-matching)
* **バックトラッキング** - ブルートフォースと同様に、可能なすべてのソリューションを生成しようとしますが、
  次のソリューションを生成するたびにすべての条件を満たすかどうかをテストし、それ以降は引き続きソリューションを生成します。
  それ以外の場合は、バックトラックして、解決策を見つける別の経路に進みます。
  通常、状態空間のDFSトラバーサルが使用されています。
  * `B` [ジャンプゲーム](src/algorithms/uncategorized/jump-game)
  * `B` [ユニークなパス](src/algorithms/uncategorized/unique-paths)
  * `B` [パワーセット](src/algorithms/sets/power-set) - セットのすべてのサブセット
  * `A` [ハミルトニアンサイクル](src/algorithms/graph/hamiltonian-cycle) - すべての頂点を正確に1回訪問する
  * `A` [N-クイーンズ問題](src/algorithms/uncategorized/n-queens)
  * `A` [ナイトツアー](src/algorithms/uncategorized/knight-tour)
  * `A` [組み合わせ合計](src/algorithms/sets/combination-sum) - 特定の合計を構成するすべての組み合わせを見つける
* **ブランチ＆バウンド** - バックトラック検索の各段階で見つかった最もコストの低いソリューションを覚えておいて、最もコストの低いソリューションのコストを使用します。これまでに発見された最もコストの低いソリューションよりも大きなコストで部分ソリューションを破棄するように指示します。通常、状態空間ツリーのDFSトラバーサルと組み合わせたBFSトラバーサルが使用されています。

## このリポジトリの使い方

**すべての依存関係をインストールする**
```
npm install
```

**ESLintを実行する**

これを実行してコードの品質をチェックすることができます。

```
npm run lint
```

**すべてのテストを実行する**
```
npm test
```

**名前でテストを実行する**
```
npm test -- 'LinkedList'
```

**playground**

データ構造とアルゴリズムを `./src/playground/playground.js` ファイルで再生し、
それに対するテストを書くことができ `./src/playground/__test__/playground.test.js`.

次に、次のコマンドを実行して、遊び場コードが正常に動作するかどうかをテストします。

```
npm test -- 'playground'
```

## 有用な情報

### 参考文献

[▶ データ構造とアルゴリズム on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### ビッグO表記

*Big O表記法は* 入力サイズが大きくなるにつれて実行時間やスペース要件がどのように増加するかに応じてアルゴリズムを分類するために使用されます。下のチャートでは、Big O表記で指定されたアルゴリズムの成長の最も一般的な順序を見つけることができます。

![Big Oグラフ](./assets/big-o-graph.png)

出典: [Big Oチートシート](http://bigocheatsheet.com/).

以下は、最も使用されているBig O表記のリストと、入力データのさまざまなサイズに対するパフォーマンス比較です。

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### データ構造操作の複雑さ

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

### 配列の並べ替えアルゴリズムの複雑さ

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

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
