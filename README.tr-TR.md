# JavaScript Algoritmalar ve Veri Yapıları

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Bu repository popüler algoritmaların ve veri yapılarının birçoğunun Javascript tabanlı örneklerini bulundurur.

Her bir algoritma ve veri yapısı kendine
ait açıklama ve videoya sahip README dosyası içerir.

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

*☝ Not, bu proje araştırma ve öğrenme amacı ile yapılmış
olup üretim için **yapılmamıştır**.*

## Veri Yapıları

Bir veri yapısı, verileri bir bilgisayarda organize etmenin ve depolamanın belirli bir yoludur, böylece
verimli bir şekilde erişilebilir ve değiştirilebilir. Daha iyi ifadeyle, bir veri yapısı bir veri koleksiyonudur,
aralarındaki ilişkiler, ve işlevler veya işlemler
veriye uygulanabilir.

`B` - Başlangıç, `A` - İleri Seviye

* `B` [Bağlantılı Veri Yapısı](src/data-structures/linked-list)
* `B` [Çift Yönlü Bağlı Liste](src/data-structures/doubly-linked-list)
* `B` [Kuyruk](src/data-structures/queue)
* `B` [Yığın](src/data-structures/stack)
* `B` [Hash Table](src/data-structures/hash-table)
* `B` [Heap](src/data-structures/heap) - max and min heap versions
* `B` [Öncelikli Kuyruk](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Ağaç](src/data-structures/tree)
  * `A` [İkili Arama Ağaçları](src/data-structures/tree/binary-search-tree)
  * `A` [AVL Tree](src/data-structures/tree/avl-tree)
  * `A` [Red-Black Tree](src/data-structures/tree/red-black-tree)
  * `A` [Segment Tree](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [Graph](src/data-structures/graph) (both directed and undirected)
* `A` [Disjoint Set](src/data-structures/disjoint-set)
* `A` [Bloom Filter](src/data-structures/bloom-filter)

## Algoritmalar

Bir algoritma, bir problem sınıfının nasıl çözüleceğine dair kesin bir tanımlamadır.
Bir işlem dizisini açık olarak tanımlayan kurallar dizisidir.


`B` - Başlangıç, `A` - İleri Seviye

### Konusuna göre Algoritma

* **Matematik**
  * `B` [Bit Manipülasyonu](src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  * `B` [İkili Kayan Nokta](src/algorithms/math/binary-floating-point) - kayan noktalı sayıların ikilik sistemde gösterimi.
  * `B` [Faktöriyel](src/algorithms/math/factorial)
  * `B` [Fibonacci Sayısı](src/algorithms/math/fibonacci) - klasik ve kapalı-form versiyonları
  * `B` [Asallık Testi](src/algorithms/math/primality-test) (deneyerek bölüm metodu)
  * `B` [Öklid Algoritması](src/algorithms/math/euclidean-algorithm) - En büyük ortak bölen hesaplama (EBOB)
  * `B` [En küçük Ortak Kat](src/algorithms/math/least-common-multiple) (EKOK)
  * `B` [Eratosten Kalburu](src/algorithms/math/sieve-of-eratosthenes) - belirli bir sayıya kadarki asal sayıları bulma
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - sayı ikinin katı mı sorgusu (naive ve bitwise algoritmaları)
  * `B` [Paskal Üçgeni](src/algorithms/math/pascal-triangle)
  * `B` [Karmaşık Sayılar](src/algorithms/math/complex-number) - karmaşık sayılar ve karmaşık sayılar ile temel işlemler
  * `B` [Radyan & Derece](src/algorithms/math/radian) - radyandan dereceye çeviri ve tersine çeviri
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `B` [Horner's method](src/algorithms/math/horner-method) - polinomal ifadelerin değerlendirilmesi
  * `B` [Matrices](src/algorithms/math/matrix) - matrisler ve basit matris operasyonları (çarpım, tersçapraz, vb.)
  * `B` [Euclidean Distance](src/algorithms/math/euclidean-distance) - iki nokta/vektör/matris arasındaki mesafe
  * `A` [Tamsayı Bölümü](src/algorithms/math/integer-partition)
  * `A` [Karekök](src/algorithms/math/square-root) - Newton yöntemi
  * `A` [Liu Hui π Algoritması](src/algorithms/math/liu-hui) - N-gons'a göre yaklaşık π hesabı
  * `A` [Ayrık Fourier Dönüşümü](src/algorithms/math/fourier-transform) - bir zaman fonksiyonunu (sinyal) içerdiği frekanslara ayırın
* **Setler**
  * `B` [Kartezyen Ürün](src/algorithms/sets/cartesian-product) - birden fazla kümenin çarpımı
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - sonlu bir dizinin rastgele permütasyonu
  * `A` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bit düzeyinde ve geri izleme yöntemleri)
  * `A` [Permütasyonlar](src/algorithms/sets/permutations)(tekrarlı ve tekrarsız)
  * `A` [Kombinasyonlar](src/algorithms/sets/combinations) (tekrarlı ve tekrarsız)
  * `A` [En Uzun Ortak Altdizi](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [En Uzun Artan Altdizi](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [En Kısa Ortak Üst Sıra](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0-1 sırt çantası problemi" ve "Sınırsız sırt çantası problemi"
  * `A` [Maksimum Altdizi](src/algorithms/sets/maximum-subarray) - "Kaba Kuvvet" ve "Dinamik Programlara" (Kadane'nin) versiyonu
  * `A` [Kombinasyon Toplamı](src/algorithms/sets/combination-sum) - belirli toplamı oluşturan tüm kombinasyonları bulun
* **Metin**
  * `B` [Hamming Mesafesi](src/algorithms/string/hamming-distance) - sembollerin farklı olduğu konumların sayısı
  * `A` [Levenshtein Mesafesi](src/algorithms/string/levenshtein-distance) - iki sekans arasındaki minimum düzenleme mesafesi
  * `A` [Knuth–Morris–Pratt Algoritması](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - altmetin araması (örüntü eşleme)
  * `A` [Z Algoritması](src/algorithms/string/z-algorithm) - altmetin araması (desen eşleştirme)
  * `A` [Rabin Karp Algoritması](src/algorithms/string/rabin-karp) - altmetin araması
  * `A` [En Uzun Ortak Alt Metin](src/algorithms/string/longest-common-substring)
  * `A` [Regular Expression Eşleme](src/algorithms/string/regular-expression-matching)
* **Aramalar**
  * `B` [Doğrusal Arama](src/algorithms/search/linear-search)
  * `B` [Jump Search](src/algorithms/search/jump-search) (ya da Block Search) - sıralı dizide arama
  * `B` [İkili Arama](src/algorithms/search/binary-search) - sıralı dizide arama
  * `B` [Interpolation Search](src/algorithms/search/interpolation-search) - tekdüze dağıtılmış sıralı dizide arama
* **Sıralama**
  * `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Bağlantılı Liste**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Ağaçlar**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - ağırlıklı yönlendirilmemiş grafik için Minimum Yayılma Ağacı'nı (MST) bulma
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - tek tepe noktasından tüm grafik köşelerine en kısa yolları bulmak
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - tek tepe noktasından tüm grafik köşelerine en kısa yolları bulmak
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - tüm köşe çiftleri arasındaki en kısa yolları bulun
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - hem yönlendirilmiş hem de yönlendirilmemiş grafikler için (DFS ve Ayrık Küme tabanlı sürümler)
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - ağırlıklı yönlendirilmemiş grafik için Minimum Yayılma Ağacı'nı (MST) bulma
  * `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS metodu
  * `A` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algoritması (DFS based)
  * `A` [Bridges](src/algorithms/graph/bridges) - DFS yöntemi ile algoritma
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury'nin algoritması - Her kenara tam olarak bir kez ulaş
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Her köşeyi tam olarak bir kez ziyaret et
  * `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - her şehri ziyaret eden ve başlangıç ​​şehrine geri dönen mümkün olan en kısa rota
* **Kriptografi**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - polinom temelinde dönen hash işlevi
  * `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
* **Makine Öğrenmesi**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
* **Kategoriye Ayrılmayanlar**
  * `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - tepeye ulaşmanın yollarını sayma (4 çözüm)
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algoritmik Paradigma

Algoritmik paradigma, bir sınıfın tasarımının altında yatan genel bir yöntem veya yaklaşımdır.
Algoritma dizayn tekniği olarak düşünülebilir. Her bir altproblemi (subproblem) asıl problemle
benzerlik gösteren problemlere uygulanabilir.

* **Brute Force** - mümkün olan tüm çözümleri tara ve en iyisini seç
  * `B` [Doğrusal Arama](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - tepeye çıkmanın yollarını hesapla
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - her şehri ziyaret eden ve başlangıç şehrine geri dönen mümkün olan en kısa rota
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - bir zaman fonksiyonunu (bir sinyal) onu oluşturan frekanslara ayırır
* **Açgözlü** - geleceği düşünmeden şu an için en iyi seçeneği seçin
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - tüm grafik köşelerine giden en kısa yolu bulmak
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - ağırlıklı yönlendirilmemiş grafik için Minimum Yayılma Ağacı'nı (MST) bulma
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - ağırlıklı yönlendirilmemiş grafik için Minimum Yayılma Ağacı'nı (MST) bulma
* **Böl ve Fethet** - sorunu daha küçük parçalara bölün ve sonra bu parçaları çözün
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
  * `A` [Permutations](src/algorithms/sets/permutations) (tekrarlı ve tekrarsız)
  * `A` [Combinations](src/algorithms/sets/combinations) (tekrarlı ve tekrarsız)
* **Dinamik Programlama** - önceden bulunan alt çözümleri kullanarak bir çözüm oluşturmak
  * `B` [Fibonacci Sayısı](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Eşsiz Yol](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  * `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - zirveye ulaşmanın yollarının sayısını sayın
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - iki sekans arasındaki minimum düzenleme mesafesi
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - tüm grafik köşelerine giden en kısa yolu bulmak
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - tüm köşe çiftleri arasındaki en kısa yolları bulun
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** - brute forceye benzer, mümkün tüm sonuçları tara, ancak bir sonraki çözümü her ürettiğinizde test edersiniz
tüm koşulları karşılıyorsa ve ancak o zaman sonraki çözümleri üretmeye devam edin. Aksi takdirde, geri dönün ve farklı bir çözüm arayın(?).
Normally the DFS traversal of state-space is being used.
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - all subsets of a set
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Her köşeyi tam olarak bir kez ziyaret edin
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - belirli toplamı oluşturan tüm kombinasyonları bulun
* **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
tree is being used.

## Repository'in Kullanımı

**Bütün dependencyleri kurun**
```
npm install
```

**ESLint'i başlatın**

Bunu kodun kalitesini kontrol etmek amacı ile çalıştırabilirsin.

```
npm run lint
```

**Bütün testleri çalıştır**
```
npm test
```

**Testleri ismine göre çalıştır**
```
npm test -- 'LinkedList'
```

**Deneme Alanı**

data-structures ve algorithms içerisinde `./src/playground/playground.js`
yazarak `./src/playground/__test__/playground.test.js` için test edebilirsin.


Ardından basitçe alttaki komutu girerek kodunun beklendiği gibi çalışıp çalışmadığını test edebilirsin:

```
npm test -- 'playground'
```

## Yararlı Bilgiler

### Referanslar

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

* Big O notation *, algoritmaları, girdi boyutu büyüdükçe çalışma süresi veya alan gereksinimlerinin nasıl arttığına göre sınıflandırmak için kullanılır.
Aşağıdaki grafikte, Big O gösteriminde belirtilen algoritmaların en yaygın büyüme sıralarını bulabilirsiniz.

![Big O graphs](./assets/big-o-graph.png)

Kaynak: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Altta Big O notations ve farklı input boyutlarına karşın yapılmış performans karşılaştırması listelenmektedir.

| Big O Notation | 10 Element için hesaplama | 100 Element için hesaplama | 1000 Element için hesaplama  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Veri Yapısı İşlem Karmaşıklığı

| Veri Yapısı          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Dizi**               | 1         | n         | n         | n         |           |
| **Yığın**               | n         | n         | 1         | 1         |           |
| **Sıralı**               | n         | n         | 1         | 1         |           |
| **Bağlantılı Liste**         | n         | n         | 1         | n         |           |
| **Yığın Tablo**          | -         | n         | n         | n         | Kusursuz hash fonksiyonu durumunda sonuç O(1) |
| **İkili Arama Ağacı**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | Arama esnasında yanlış sonuçlar çıkabilir |

### Dizi Sıralama Algoritmaları Karmaşıklığı

| İsim                  | En İyi            | Ortalama             | En Kötü               | Hafıza    | Kararlı    | Yorumlar  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Evet       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Evet       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Hayır        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | Hayır        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Evet       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | Hayır        | Hızlı sıralama genellikle O(log(n)) yığın alanıyla yapılır |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | Hayır         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Evet       | r - dizideki en büyük sayı |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Evet       | k - en uzun key'in uzunluğu |

## Projeyi Destekleme

Bu projeyi buradan destekleyebilirsiniz ❤️️ [GitHub](https://github.com/sponsors/trekhleb) veya ❤️️ [Patreon](https://www.patreon.com/trekhleb).

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
