# Algoritme dan Struktur Data Javascript

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

<!-- This repository contains JavaScript based examples of many
popular algorithms and data structures. -->

Repositori ini berisi contoh-contoh berbasis Javascript dari algoritme dan struktur data yang populer.

<!-- Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos). -->

Setiap algoritme dan struktur data memiliki README tersendiri dengan penjelasan terkait dan tautan untuk bacaan lebih lanjut (termasuk tautan menuju video YouTube).

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
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md)

<!-- _☝ Note that this project is meant to be used for learning and researching purposes
only, and it is **not** meant to be used for production._ -->

_☝ Perhatikan bahwa proyek ini dimaksudkan hanya untuk tujuan pembelajaran dan riset, dan **tidak** dimaksudkan untuk digunakan sebagai produksi._

## Struktur Data

<!-- A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data. -->

Struktur data adalah cara tertentu untuk mengatur dan menyimpan data dalam komputer sehingga dapat diakses dan diubah secara efisien. Lebih tepatnya, struktur data adalah kumpulan dari nilai data, relasi di antara data-data, dan fungsi atau operasi yang dapat diterapkan pada data.

`P` - Pemula, `L` - Lanjutan

- `P` [Linked List](src/data-structures/linked-list)
- `P` [Doubly Linked List](src/data-structures/doubly-linked-list)
- `P` [Queue](src/data-structures/queue)
- `P` [Stack](src/data-structures/stack)
- `P` [Hash Table](src/data-structures/hash-table)
- `P` [Heap](src/data-structures/heap) - versi max dan min heap
- `P` [Priority Queue](src/data-structures/priority-queue)
- `L` [Trie](src/data-structures/trie)
- `L` [Tree](src/data-structures/tree)
  - `L` [Pencarian Biner Tree](src/data-structures/tree/binary-search-tree)
  - `L` [AVL Tree](src/data-structures/tree/avl-tree)
  - `L` [Red-Black Tree](src/data-structures/tree/red-black-tree)
  - `L` [Segment Tree](src/data-structures/tree/segment-tree) - dengan contoh min/max/sum range query
  - `L` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
- `L` [Graph](src/data-structures/graph) (directed dan undirected)
- `L` [Disjoint Set](src/data-structures/disjoint-set)
- `L` [Bloom Filter](src/data-structures/bloom-filter)

## Algorithms

<!-- An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations. -->

Algoritme adalah sebuah perincian yang jelas tentang cara memecahkan suatu masalah. Algoritme adalah sekumpulan aturan yang menjelaskan secara tepat urutan-urutan dari sebuah operasi.

`P` - Pemula, `L` - Lanjutan

### Algorithms by Topic

- **Matematika**
  - `P` [Bit Manipulation](src/algorithms/math/bits) - set/get/update/clear bits, perkalian/pembagian dengan angka 2, membuat bilangan negatif etc.
  - `P` [Factorial](src/algorithms/math/factorial)
  - `P` [Bilangan Fibonacci](src/algorithms/math/fibonacci) - versi klasik dan _closed-form_
  - `P` [Prime Factors](src/algorithms/math/prime-factors) - menemukan faktor prima dan menghitungnya menggunakan teorema Hardy-Ramanujan's
  - `P` [Primality Test](src/algorithms/math/primality-test) (metode trial division)
  - `P` [Algoritme Euclidean](src/algorithms/math/euclidean-algorithm) - menghitung Faktor Persekutuan Terbesar (FPB)
  - `P` [Least Common Multiple](src/algorithms/math/least-common-multiple) (LCM)
  - `P` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - menemukan semua bilangan prima hingga batas yang diberikan
  - `P` [Is Power of Two](src/algorithms/math/is-power-of-two) - mengecek apakah sebuah bilangan adalah hasil dari pangkat dua (algoritme naive dan bitwise)
  - `P` [Segitiga Pascal](src/algorithms/math/pascal-triangle)
  - `P` [Complex Number](src/algorithms/math/complex-number) - bilangan kompleks dengan operasi dasarnya
  - `P` [Radian & Degree](src/algorithms/math/radian) - konversi radian ke derajat dan sebaliknya
  - `P` [_Fast Powering_](src/algorithms/math/fast-powering)
  - `P` [Horner's method](src/algorithms/math/horner-method) - evaluasi polinomial
  - `L` [Partisi Bilangan Bulat](src/algorithms/math/integer-partition)
  - `L` [Square Root](src/algorithms/math/square-root) - metode Newton
  - `L` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - perkiraan perhitungan π berdasarkan segibanyak
  - `L` [Transformasi Diskrit Fourier](src/algorithms/math/fourier-transform) - menguraikan fungsi waktu (sinyal) menjadi frekuensi yang menyusunnya
- **Himpunan**
  - `P` [Cartesian Product](src/algorithms/sets/cartesian-product) - hasil dari beberapa himpunan
  - `P` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - permutasi acak dari sebuah urutan terhingga
  - `L` [Himpunan Kuasa](src/algorithms/sets/power-set) - semua himpunan bagian dari sebuah himpunan
  - `L` [Permutasi](src/algorithms/sets/permutations) (dengan dan tanpa pengulangan)
  - `L` [Kombinasi](src/algorithms/sets/combinations) (dengan dan tanpa pengulangan)
  - `L` [_Longest Common Subsequence_](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `L` [_Longest Increasing Subsequence_](src/algorithms/sets/longest-increasing-subsequence)
  - `L` [_Shortest Common Supersequence_](src/algorithms/sets/shortest-common-supersequence) (SCS)
  - `L` [Permasalahan Knapsack](src/algorithms/sets/knapsack-problem) - "0/1" dan yang tidak "terikat"
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray) - "Brute Force" dan "Pemrograman Dinamis" versi Kadane
  - `L` [_Combination Sum_](src/algorithms/sets/combination-sum) - menemukan semua kombinasi yang membentuk jumlah tertentu
- **String**
  - `P` [Hamming Distance](src/algorithms/string/hamming-distance) - jumlah posisi di mana ditemukan simbol-simbol yang berbeda
  - `L` [Algoritme Levenshtein Distance](src/algorithms/string/levenshtein-distance) - _edit distance_ minimum antara dua urutan
  - `L` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (Algoritme KMP) - pencarian substring (pencocokan pola)
  - `L` [Z Algorithm](src/algorithms/string/z-algorithm) - pencarian substring (pencocokan pola)
  - `L` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - pencarian substring
  - `L` [_Longest Common Substring_](src/algorithms/string/longest-common-substring)
  - `L` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
- **Pencarian**
  - `P` [Pencarian Linier](src/algorithms/search/linear-search)
  - `P` [Jump Search](src/algorithms/search/jump-search) (atau Block Search) - pencarian di senarai tersortir
  - `P` [Pencarian Biner](src/algorithms/search/binary-search) - pencarian di senarai tersortir
  - `P` [Interpolation Search](src/algorithms/search/interpolation-search) - pencarian di senarai tersortir yang terdistribusi seragam
- **Penyortiran**
  - `P` [Sortir Gelembung](src/algorithms/sorting/bubble-sort)
  - `P` [Sortir Seleksi](src/algorithms/sorting/selection-sort)
  - `P` [Sortir Sisipan](src/algorithms/sorting/insertion-sort)
  - `P` [Sortir Susunan](src/algorithms/sorting/heap-sort)
  - `P` [Sortir Gabungan](src/algorithms/sorting/merge-sort)
  - `P` [Sortir Cepat](src/algorithms/sorting/quick-sort) - implementasi di tempat dan tidak di tempat
  - `P` [Sortir Shell](src/algorithms/sorting/shell-sort)
  - `P` [Sortir Perhitungan](src/algorithms/sorting/counting-sort)
  - `P` [Sortir Akar](src/algorithms/sorting/radix-sort)
- **Senarai Berantai**
  - `P` [Lintas Lurus](src/algorithms/linked-list/traversal)
  - `P` [Lintas Terbalik](src/algorithms/linked-list/reverse-traversal)
- **Pohon**
  - `P` [Pencarian Kedalaman Pertama](src/algorithms/tree/depth-first-search) (DFS)
  - `P` [Pencarian Luas Pertama](src/algorithms/tree/breadth-first-search) (BFS)
- **Graf**
  - `P` [Pencarian Kedalaman Pertama](src/algorithms/graph/depth-first-search) (DFS)
  - `P` [Pencarian Luas Pertama](src/algorithms/graph/breadth-first-search) (BFS)
  - `P` [Algoritme Kruskal](src/algorithms/graph/kruskal) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Algoritme Dijkstra](src/algorithms/graph/dijkstra) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritme Bellman-Ford](src/algorithms/graph/bellman-ford) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritme Floyd-Warshall](src/algorithms/graph/floyd-warshall) - menemukan jalur terpendek antara semua pasangan sudut
  - `L` [Mendeteksi Siklus](src/algorithms/graph/detect-cycle) - untuk graf berarah dan tidak berarah (berdasarkan versi DFS dan Himpunan Terputus)
  - `L` [ALgoritme Prim](src/algorithms/graph/prim) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Sortir Topologi](src/algorithms/graph/topological-sorting) - metode DFS
  - `L` [Poin Artikulasi](src/algorithms/graph/articulation-points) - Algoritme Tarjan (berdasarkan DFS)
  - `L` [Jembatan](src/algorithms/graph/bridges) - Algoritme berdasarkan DFS
  - `L` [Jalur dan Sirkuit Eulerian](src/algorithms/graph/eulerian-path) - Algoritme Fleury - Mengunjungi setiap tepinya tepat satu kali
  - `L` [Siklus Hamiltonian](src/algorithms/graph/hamiltonian-cycle) - mengunjungi setiap sudutnya tepat satu kali
  - `L` [Komponen yang Terkoneksi dengan Kuat](src/algorithms/graph/strongly-connected-components) - Algoritme Kosaraju
  - `L` [Permasalahan Penjual Keliling](src/algorithms/graph/travelling-salesman) - kemungkinan rute terpendek untuk mengunjungi setiap kota dan kembali lagi ke kota asal
- **Kriptografi**
  - `P` [Hash Polinomial](src/algorithms/cryptography/polynomial-hash) - fungsi rolling hash berdasarkan polinomial
  - `P` [Sandi Caesar](src/algorithms/cryptography/caesar-cipher) - sandi pengganti sederhana
- **Pembelajaran Mesin**
  - `P` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 fungsi JS sederhana yang mengilustrasikan bagaimana mesin-mesin dapat benar-benar belajar (perambatan maju/mundur)
- **Tidak Dikategorikan**
  - `P` [Menara Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `P` [Perputaran Matriks Persegi](src/algorithms/uncategorized/square-matrix-rotation) - algoritme ditempat
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game) - penulusuran mundur, pemrograman dinamis (atas ke bawah + bawah ke atas) and contoh-contoh _greedy_
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths) - penulusuran mundur, pemrograman dinamis and dontoh-contoh beradsarkan Segitiga Pascal
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_ (versi pemrograman dinamis and _brute force_)
  - `P` [_Recursive Staircase_](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga (4 solusi)
  - `L` [Permainan N-Queen](src/algorithms/uncategorized/n-queens)
  - `L` [Permainan _Knight's Tour_](src/algorithms/uncategorized/knight-tour)

### Algoritme Berdasarkan Paradigma

<!-- An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program. -->

Paradigma algoritmik adalah sebuah metode atau pendekatan umum yang mendasari desain sebuah tingkatan algoritme. Paradigma algoritmik merupakan abstraksi yang lebih tinggi dari gagasan sebuah algoritme, seperti halnya sebuah algoritme merupakan abstraksi yang lebih tinggi dari sebuah program komputer.

- **_Brute Force_** - melihat ke semua kemungkinan dan memilih solusi yang terbaik
  - `P` [Pencarian Linier](src/algorithms/search/linear-search)
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_
  - `P` [_Recursive Staircase_](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray)
  - `L` [Permasalahan Penjual Keliling](src/algorithms/graph/travelling-salesman) - kemungkinan rute terpendek untuk mengunjungi setiap kota dan kembali lagi ke kota asal
  - `L` [Transformasi Diskrit Fourier](src/algorithms/math/fourier-transform) - menguraikan fungsi waktu (sinyal) menjadi frekuensi yang menyusunnya
- **_Greedy_** - memilih pilihan terbaik pada saat ini tanpa mempertimbangkan masa yang akan datang
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `L` [Permasalahan Ransel yang Tidak Terikat](src/algorithms/sets/knapsack-problem)
  - `L` [Algoritme Dijkstra](src/algorithms/graph/dijkstra) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritme Prim](src/algorithms/graph/prim) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Algoritme Kruskal](src/algorithms/graph/kruskal) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
- **Memecah dan Menaklukkan** - membagi masalah menjadi bagian-bagian yang kecil, lalu memcahkan bagian-bagian tersebut
  - `P` [Pencarian Biner](src/algorithms/search/binary-search)
  - `P` [Menara Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `P` [Segitiga Pascal](src/algorithms/math/pascal-triangle)
  - `P` [Algoritme Euclidean](src/algorithms/math/euclidean-algorithm) - menghitung Faktor Persekutuan Terbesar (FPB)
  - `P` [Sortir Gabungan](src/algorithms/sorting/merge-sort)
  - `P` [Sortir Cepat](src/algorithms/sorting/quick-sort)
  - `P` [Pencarian Kedalaman Pertama untuk Pohom](src/algorithms/tree/depth-first-search) (DFS)
  - `P` [Pencarian Kedalaman Pertama untuk Graf](src/algorithms/graph/depth-first-search) (DFS)
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Fast Powering_](src/algorithms/math/fast-powering)
  - `L` [Permutasi](src/algorithms/sets/permutations) (dengan dan tanpa pengulangan)
  - `L` [Kombinasi](src/algorithms/sets/combinations) (dengan dan tanpa pengulangan)
- **Pemrograman Dinamis** - build up a solution using previously found sub-solutions
  - `P` [Bilangan Fibonacci](src/algorithms/math/fibonacci)
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths)
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_
  - `P` [_Recursive Staircase_](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga
  - `L` [Algoritme Levenshtein Distance](src/algorithms/string/levenshtein-distance) - _edit distance_ minimum antara dua urutan
  - `L` [_Longest Common Subsquence_](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `L` [_Longest Common Substring_](src/algorithms/string/longest-common-substring)
  - `L` [_Longest Increasing Subsequence_](src/algorithms/sets/longest-increasing-subsequence)
  - `L` [_Shortest Common Supersequence_](src/algorithms/sets/shortest-common-supersequence)
  - `L` [Permasalahan Knapsack 0/1](src/algorithms/sets/knapsack-problem)
  - `L` [Partisi Bilangan Bulat](src/algorithms/math/integer-partition)
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray)
  - `L` [Algoritme Bellman-Ford](src/algorithms/graph/bellman-ford) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritme Floyd-Warshall](src/algorithms/graph/floyd-warshall) - menemukan jalur terpendek antara semua pasangan sudut
  - `L` [Mencocokkan Expresi Reguler](src/algorithms/string/regular-expression-matching)
- **Runut-balik** - sama halnya dengan _brute force_, algoritme ini mencoba untuk menghasilkan segala kemungkinan solusi, tetapi anda akan menguji apakah solusi tersebut memenuhi semua kondisi setiap kali anda menghasilkan solusi selanjutnya dan setelah itu baru akan menghasilkan solusi berikutnya. Apabila tidak, maka akan merunut-balik dan mencari solusi di jalur yang berbeda. Biasanya menggunakan lintas DFS dari ruang keadaan.
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths)
  - `P` [Himpunan Kuasa](src/algorithms/sets/power-set) - all subsets of a set
  - `L` [Siklus Hamiltonian](src/algorithms/graph/hamiltonian-cycle) - mengunjungi setiap sudutnya tepat satu kali
  - `L` [Permainan N-Queen](src/algorithms/uncategorized/n-queens)
  - `L` [Permainan _Knight's Tour_](src/algorithms/uncategorized/knight-tour)
  - `L` [Combination Sum](src/algorithms/sets/combination-sum) - menemukan semua kombinasi yang membentuk jumlah tertentu
- **_Branch & Bound_** - digunakan untuk membuang solusi parsial dengan biaya yang lebih besar dari solusi dengan biaya yang terendah yang ditemukan sejauh ini dengan cara mengingat solusi dengan biaya terendah yang ditemukan pada setiap tahap dari pencarian runut-balik dan menggunakan biaya dari solusi dengan biaya terendah sejauh ini sebagai batas bawah pada biaya dari solusi dengan biaya yang paling sedikit untuk permasalahannya. Biasanya menggunakan lintas BFS yang berkombinasi dengan lintas DFS dari pohon ruang keadaan.

## Cara menggunakan repositori ini

**Meng-_install_ semua dependensi**

```
npm install
```

**Menjalankan ESLint**

Anda dapat menjalankannya untuk memeriksa kualitas kode.

```
npm run lint
```

**Menjalankan semua tes**

```
npm test
```

**Menjalankan tes berdasarkan nama**

```
npm test -- 'LinkedList'
```

**Tempat Bermain**

Anda dapat bermain dengan algoritme dan struktur data di _file_ `./src/playground/playground.js` dan menuliskan tesnya di `./src/playground/__test__/playground.test.js`.

Lalu, hanya tinggal menjalankan perintah berikut untuk mengetes apakah kode _playground_ anda bekerja sesuai dengan keinginan:

```
npm test -- 'playground'
```

## Informasi Bermanfaat

### Referensi

[▶ Algoritme dan Struktur Data di YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notasi _Big O_

Notasi _Big O_ digunakan untuk mengklasifikasikan algoritme berdasarkan durasi atau ruang yang dibutuhkan seiring bertambahnya _input_. Pada grafik dibawah, anda dapat menemukan urutan pertumbuhan yang paling umum dari algoritme yang ditentukan dalam notasi _Big O_.

![Big O graphs](./assets/big-o-graph.png)

Sumber: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Di bawah ini adalah daftar dari beberapa notasi _Bog O_ yang sering digunakan dan perbandingan kinerjanya terhadap berbagai ukuran _input data_.

| Notasi _Big O_ | Komputasi untuk 10 elemen | Komputasi untuk 100 elemen | Komputasi untuk 1000 elemen |
| -------------- | ------------------------- | -------------------------- | --------------------------- |
| **O(1)**       | 1                         | 1                          | 1                           |
| **O(log N)**   | 3                         | 6                          | 9                           |
| **O(N)**       | 10                        | 100                        | 1000                        |
| **O(N log N)** | 30                        | 600                        | 9000                        |
| **O(N^2)**     | 100                       | 10000                      | 1000000                     |
| **O(2^N)**     | 1024                      | 1.26e+29                   | 1.07e+301                   |
| **O(N!)**      | 3628800                   | 9.3e+157                   | 4.02e+2567                  |

### Kompleksitas Operasi Struktur Data

| Struktur Data                                | Akses  | Pencarian | Penyisipan | Penghapusan | Keterangan                                               |
| -------------------------------------------- | :----: | :-------: | :--------: | :---------: | :------------------------------------------------------- |
| **Array (Larik)**                            |   1    |     n     |     n      |      n      |                                                          |
| **Stack (Tumpukan)**                         |   n    |     n     |     1      |      1      |                                                          |
| **Queue (Antrian)**                          |   n    |     n     |     1      |      1      |                                                          |
| **Linked List (Senarai Berantai)**           |   n    |     n     |     1      |      n      |                                                          |
| **Hash Table**                               |   -    |     n     |     n      |      n      | Apabila fungsi hash sempurna, biayanya akan menjadi O(1) |
| **Binary Search Tree (Pohon Telusur Biner)** |   n    |     n     |     n      |      n      | Apabila pohon seimbang, biayanya akan menjadi O(log(n))  |
| **B-Tree**                                   | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **Red-Black Tree (Pohon Merah-Hitam)**       | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **AVL Tree**                                 | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **Bloom Filter**                             |   -    |     1     |     1      |      -      | Positif palsu dimungkinkan saat pencarian                |

### Kompleksitas Algoritme Sortir Larik

| Nama                                   |    Terbaik    |          Rata-rata           |          Terburuk           | Memori | Stabil | Keterangan                                                                        |
| -------------------------------------- | :-----------: | :--------------------------: | :-------------------------: | :----: | :----: | :-------------------------------------------------------------------------------- |
| **Bubble sort (Sortir Gelembung)**     |       n       |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    |   Ya   |                                                                                   |
| **Insertion sort (Sortir Sisipan)**    |       n       |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    |   Ya   |                                                                                   |
| **Selection sort (Sortir Pilihan)**    | n<sup>2</sup> |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    | Tidak  |                                                                                   |
| **Heap sort (Sortir Susunan)**         | n&nbsp;log(n) |        n&nbsp;log(n)         |        n&nbsp;log(n)        |   1    | Tidak  |                                                                                   |
| **Merge Sort (Sortir Gabungan)**       | n&nbsp;log(n) |        n&nbsp;log(n)         |        n&nbsp;log(n)        |   n    |   Ya   |                                                                                   |
| **Quick sort (Sortir Cepat)**          | n&nbsp;log(n) |        n&nbsp;log(n)         |        n<sup>2</sup>        | log(n) | Tidak  | Sortir Cepat biasanya dilakukan secara _in-place_ dengan O(log(n)) ruang tumpukan |
| **Shell sort (Sortir Shell)**          | n&nbsp;log(n) | tergantung pada jarak urutan | n&nbsp;(log(n))<sup>2</sup> |   1    | Tidak  |                                                                                   |
| **Counting sort (Sortir Perhitungan)** |     n + r     |            n + r             |            n + r            | n + r  |   Ya   | r - angka terbesar dalam larik                                                    |
| **Radix sort (Sortir Akar)**           |    n \* k     |            n \* k            |           n \* k            | n + k  |   Ya   | k - panjang dari kunci terpanjang                                                 |

## Pendukung Proyek

> Anda dapat mendukung proyek ini via ❤️️ [GitHub](https://github.com/sponsors/trekhleb) atau ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Orang-orang yang mendukung proyek ini](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1`
