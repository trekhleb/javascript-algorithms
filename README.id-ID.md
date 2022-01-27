# Algoritme dan Struktur Data Javascript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Repositori ini berisi contoh-contoh algoritme dan struktur data yang populer menggunakan JavaScript.

Setiap algoritma dan struktur data memiliki README-nya tersendiri dengan penjelasan yang berkaitan dan tautan untuk bacaan lebih lanjut (termasuk tautan menuju video YouTube).

_Baca ini dalam bahasa yang lain:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
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
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

_☝ Perhatikan bahwa proyek ini hanya dimaksudkan untuk tujuan pembelajaran dan riset, dan **tidak** dimaksudkan untuk digunakan sebagai produksi._

## Struktur Data

Struktur data adalah cara tertentu untuk mengatur dan menyimpan data dalam komputer sehingga dapat diakses dan diubah secara efisien. Lebih tepatnya, struktur data adalah kumpulan dari nilai data, relasi di antara data-data, dan fungsi atau operasi yang dapat diterapkan pada data.

`P` - Pemula, `L` - Lanjutan

- `P` [Senarai Berantai](src/data-structures/linked-list)
- `P` [Senarai Berantai Ganda](src/data-structures/doubly-linked-list)
- `P` [Antrean](src/data-structures/queue)
- `P` [Tumpukan](src/data-structures/stack)
- `P` [Tabel Hash](src/data-structures/hash-table)
- `P` [_Heap_](src/data-structures/heap) - versi _heap_ maksimum dan minimum
- `P` [Antrean Prioritas](src/data-structures/priority-queue)
- `L` [_Trie_](src/data-structures/trie)
- `L` [Pohon](src/data-structures/tree)
  - `L` [Pohon Telusur Biner](src/data-structures/tree/binary-search-tree)
  - `L` [_AVL Tree_](src/data-structures/tree/avl-tree)
  - `L` [Pohon Merah Hitam](src/data-structures/tree/red-black-tree)
  - `L` [_Segment Tree_](src/data-structures/tree/segment-tree) - dengan contoh min/max/sum range query
  - `L` [Pohon Fenwick](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
- `L` [Graf](src/data-structures/graph) (directed dan undirected)
- `L` [_Disjoint Set_](src/data-structures/disjoint-set)
- `L` [_Bloom Filter_](src/data-structures/bloom-filter)

## Algoritma

Algoritma adalah sebuah perincian yang jelas tentang cara untuk memecahkan suatu masalah. Ia adalah sekumpulan aturan yang menjelaskan secara tepat urutan-urutan dari sebuah operasi.

`P` - Pemula, `L` - Lanjutan

### Algoritma Berdasarkanan Topik

- **Matematika**
  - `P` [Manipulasi Bit](src/algorithms/math/bits) - menetapkan/mendapatkan/memperbarui/menghapus bit, perkalian/pembagian dengan angka 2, membuat bilangan negatif dan lain-lain.
  - `P` [Faktorial](src/algorithms/math/Faktorial)
  - `P` [Bilangan Fibonacci](src/algorithms/math/fibonacci) - versi klasik dan bentuk tertutup
  - `P` [Faktor Prima](src/algorithms/math/prime-factors) - menemukan faktor prima dan menghitungnya menggunakan teorema Hardy-Ramanujan
  - `P` [Pengujian Bilangan Prima](src/algorithms/math/primality-test) (metode _trial division_)
  - `P` [Algoritma Euclidean](src/algorithms/math/euclidean-algorithm) - menghitung Faktor Persekutuan Terbesar (FPB)
  - `P` [_Least Common Multiple_](src/algorithms/math/least-common-multiple) (LCM)
  - `P` [_Sieve of Eratosthenes_](src/algorithms/math/sieve-of-eratosthenes) - menemukan semua bilangan prima hingga batas yang ditentukan
  - `P` [_Is Power of Two_](src/algorithms/math/is-power-of-two) - mengecek apakah sebuah bilangan adalah hasil dari pangkat dua (algoritma _naive_ dan _bitwise_)
  - `P` [Segitiga Pascal](src/algorithms/math/pascal-triangle)
  - `P` [Bilangan Kompleks](src/algorithms/math/complex-number) - bilangan kompleks dengan operasi dasarnya
  - `P` [Radian & Derajat](src/algorithms/math/radian) - konversi radian ke derajat dan sebaliknya
  - `P` [_Fast Powering_](src/algorithms/math/fast-powering)
  - `P` [Metode Horner](src/algorithms/math/horner-method) - evaluasi polinomial
  - `L` [Partisi Bilangan Bulat](src/algorithms/math/integer-partition)
  - `L` [Akar Pangkat Dua](src/algorithms/math/square-root) - metode Newton
  - `L` [Algoritma π Liu Hui](src/algorithms/math/liu-hui) - perkiraan perhitungan π berdasarkan segibanyak
  - `L` [Transformasi Diskrit Fourier](src/algorithms/math/fourier-transform) - menguraikan fungsi waktu (sinyal) menjadi frekuensi yang menyusunnya
- **Himpunan**
  - `P` [Produk Kartesian](src/algorithms/sets/cartesian-product) - hasil dari beberapa himpunan
  - `P` [Pengocokan Fisher–Yates](src/algorithms/sets/fisher-yates) - permutasi acak dari sebuah urutan terhingga
  - `L` [Himpunan Kuasa](src/algorithms/sets/power-set) - semua himpunan bagian dari sebuah himpunan
  - `L` [Permutasi](src/algorithms/sets/permutations) (dengan dan tanpa pengulangan)
  - `L` [Kombinasi](src/algorithms/sets/combinations) (dengan dan tanpa pengulangan)
  - `L` [_Longest Common Subsequence_](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `L` [_Longest Increasing Subsequence_](src/algorithms/sets/longest-increasing-subsequence)
  - `L` [_Shortest Common Supersequence_](src/algorithms/sets/shortest-common-supersequence) (SCS)
  - `L` [Permasalahan Knapsack](src/algorithms/sets/knapsack-problem) - "0/1" dan yang tidak "dibatasi"
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray) - "_Brute Force_" dan "Pemrograman Dinamis" versi Kadane
  - `L` [_Combination Sum_](src/algorithms/sets/combination-sum) - menemukan semua kombinasi yang membentuk jumlah tertentu
- **String**
  - `P` [Jarak Hamming](src/algorithms/string/hamming-distance) - jumlah posisi di mana ditemukan simbol-simbol yang berbeda
  - `L` [Algoritma Jarak Levenshtein](src/algorithms/string/levenshtein-distance) - _edit distance_ minimum antara dua urutan
  - `L` [Algoritma Knuth–Morris–Pratt](src/algorithms/string/knuth-morris-pratt) (Algoritma KMP) - pencarian substring (pencocokan pola)
  - `L` [Algoritma Z](src/algorithms/string/z-algorithm) - pencarian substring (pencocokan pola)
  - `L` [Algoritma Rabin Karp](src/algorithms/string/rabin-karp) - pencarian substring
  - `L` [_Longest Common Substring_](src/algorithms/string/longest-common-substring)
  - `L` [Pencocokan Ekspresi Reguler](src/algorithms/string/regular-expression-matching)
- **Pencarian**
  - `P` [Pencarian Linier](src/algorithms/search/linear-search)
  - `P` [Pencarian Lompat](src/algorithms/search/jump-search) (atau Block Search) - pencarian di larik tersortir
  - `P` [Pencarian Biner](src/algorithms/search/binary-search) - pencarian di larik tersortir
  - `P` [Pencarian Interpolasi](src/algorithms/search/interpolation-search) - pencarian di larik tersortir yang terdistribusi seragam
- **Penyortiran**
  - `P` [Sortir Gelembung](src/algorithms/sorting/bubble-sort)
  - `P` [Sortir Seleksi](src/algorithms/sorting/selection-sort)
  - `P` [Sortir Sisipan](src/algorithms/sorting/insertion-sort)
  - `P` [Sortir _Heap_](src/algorithms/sorting/heap-sort)
  - `P` [Sortir Gabungan](src/algorithms/sorting/merge-sort)
  - `P` [Sortir Cepat](src/algorithms/sorting/quick-sort) - implementasi _in-place_ dan _non-in-place_
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
  - `P` [Algoritma Kruskal](src/algorithms/graph/kruskal) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Algoritma Dijkstra](src/algorithms/graph/dijkstra) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritma Bellman-Ford](src/algorithms/graph/bellman-ford) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritma Floyd-Warshall](src/algorithms/graph/floyd-warshall) - menemukan jalur terpendek antara semua pasangan sudut
  - `L` [Mendeteksi Siklus](src/algorithms/graph/detect-cycle) - untuk graf berarah dan tidak berarah (berdasarkan versi DFS dan _Disjoint Set_)
  - `L` [ALgoritma Prim](src/algorithms/graph/prim) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Sortir Topologi](src/algorithms/graph/topological-sorting) - metode DFS
  - `L` [Poin Artikulasi](src/algorithms/graph/articulation-points) - Algoritma Tarjan (berdasarkan DFS)
  - `L` [Jembatan](src/algorithms/graph/bridges) - Algoritma berdasarkan DFS
  - `L` [Jalur dan Sirkuit Eulerian](src/algorithms/graph/eulerian-path) - Algoritma Fleury - Mengunjungi setiap tepinya tepat satu kali
  - `L` [Siklus Hamiltonian](src/algorithms/graph/hamiltonian-cycle) - mengunjungi setiap sudutnya tepat satu kali
  - `L` [Komponen yang Terkoneksi dengan Kuat](src/algorithms/graph/strongly-connected-components) - Algoritma Kosaraju
  - `L` [Permasalahan Penjual Keliling](src/algorithms/graph/travelling-salesman) - kemungkinan rute terpendek untuk mengunjungi setiap kota dan kembali lagi ke kota asal
- **Kriptografi**
  - `P` [Polinomial Hash](src/algorithms/cryptography/polynomial-hash) - fungsi rolling hash berdasarkan polinomial
  - `P` [Sandi Caesar](src/algorithms/cryptography/caesar-cipher) - sandi pengganti sederhana
- **Pembelajaran Mesin**
  - `P` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 fungsi JS sederhana yang mengilustrasikan bagaimana mesin-mesin dapat benar-benar belajar (perambatan maju/mundur)
- **Tidak Dikategorikan**
  - `P` [Menara Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `P` [Perputaran Matriks Persegi](src/algorithms/uncategorized/square-matrix-rotation) - algoritma _in-place_
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game) - runut-balik, pemrograman dinamis (atas ke bawah + bawah ke atas) and contoh-contoh _greedy_
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths) - runut-balik, pemrograman dinamis and contoh-contoh beradsarkan Segitiga Pascal
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_ (versi pemrograman dinamis and _brute force_)
  - `P` [Tangga Rekursif](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga (4 solusi)
  - `L` [Permainan N-Queen](src/algorithms/uncategorized/n-queens)
  - `L` [Permainan Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algoritma Berdasarkan Paradigma

Paradigma algoritmik adalah sebuah metode atau pendekatan umum yang mendasari desain sebuah tingkatan algoritma. Paradigma algoritmik merupakan abstraksi yang lebih tinggi dari gagasan sebuah algoritma, seperti halnya sebuah algoritma merupakan abstraksi yang lebih tinggi dari sebuah program komputer.

- **_Brute Force_** - melihat ke semua kemungkinan dan memilih solusi yang terbaik
  - `P` [Pencarian Linier](src/algorithms/search/linear-search)
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_
  - `P` [Tangga Rekursif](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray)
  - `L` [Permasalahan Penjual Keliling](src/algorithms/graph/travelling-salesman) - kemungkinan rute terpendek untuk mengunjungi setiap kota dan kembali lagi ke kota asal
  - `L` [Transformasi Diskrit Fourier](src/algorithms/math/fourier-transform) - menguraikan fungsi waktu (sinyal) menjadi frekuensi yang menyusunnya
- **_Greedy_** - memilih pilihan terbaik pada saat ini tanpa mempertimbangkan masa yang akan datang
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `L` [Permasalahan Knapsack yang Tidak Dibatasi](src/algorithms/sets/knapsack-problem)
  - `L` [Algoritma Dijkstra](src/algorithms/graph/dijkstra) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritma Prim](src/algorithms/graph/prim) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
  - `L` [Algoritma Kruskal](src/algorithms/graph/kruskal) - mencari rentang pohon minimum untuk graf tidak berarah berbobot
- **Memecah dan Menaklukkan** - membagi masalah menjadi bagian-bagian yang kecil, lalu memcahkan bagian-bagian tersebut
  - `P` [Pencarian Biner](src/algorithms/search/binary-search)
  - `P` [Menara Hanoi](src/algorithms/uncategorized/hanoi-tower)
  - `P` [Segitiga Pascal](src/algorithms/math/pascal-triangle)
  - `P` [Algoritma Euclidean](src/algorithms/math/euclidean-algorithm) - menghitung Faktor Persekutuan Terbesar (FPB)
  - `P` [Sortir Gabungan](src/algorithms/sorting/merge-sort)
  - `P` [Sortir Cepat](src/algorithms/sorting/quick-sort)
  - `P` [Pencarian Kedalaman Pertama untuk Pohon](src/algorithms/tree/depth-first-search) (DFS)
  - `P` [Pencarian Kedalaman Pertama untuk Graf](src/algorithms/graph/depth-first-search) (DFS)
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Fast Powering_](src/algorithms/math/fast-powering)
  - `L` [Permutasi](src/algorithms/sets/permutations) (dengan dan tanpa pengulangan)
  - `L` [Kombinasi](src/algorithms/sets/combinations) (dengan dan tanpa pengulangan)
- **Pemrograman Dinamis** - membangun sebuah solusi menggunakan upasolusi yang ditemukan sebelumnya
  - `P` [Bilangan Fibonacci](src/algorithms/math/fibonacci)
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths)
  - `P` [_Rain Terraces_](src/algorithms/uncategorized/rain-terraces) - permasalahan _trapping rain water_
  - `P` [Tangga Rekursif](src/algorithms/uncategorized/recursive-staircase) - menghitung jumlah cara untuk mencapai ke atas tangga
  - `L` [Algoritma Jarak Levenshtein](src/algorithms/string/levenshtein-distance) - _edit distance_ minimum antara dua urutan
  - `L` [_Longest Common Subsquence_](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `L` [_Longest Common Substring_](src/algorithms/string/longest-common-substring)
  - `L` [_Longest Increasing Subsequence_](src/algorithms/sets/longest-increasing-subsequence)
  - `L` [_Shortest Common Supersequence_](src/algorithms/sets/shortest-common-supersequence)
  - `L` [Permasalahan Knapsack 0/1](src/algorithms/sets/knapsack-problem)
  - `L` [Partisi Bilangan Bulat](src/algorithms/math/integer-partition)
  - `L` [Upalarik Maksimum](src/algorithms/sets/maximum-subarray)
  - `L` [Algoritma Bellman-Ford](src/algorithms/graph/bellman-ford) - menemukan jalur terpendek ke semua sudut graf dari sudut tunggal
  - `L` [Algoritma Floyd-Warshall](src/algorithms/graph/floyd-warshall) - menemukan jalur terpendek antara semua pasangan sudut
  - `L` [Pencocokan Ekspresi Reguler](src/algorithms/string/regular-expression-matching)
- **Runut-balik** - sama halnya dengan _brute force_, algoritma ini mencoba untuk menghasilkan segala kemungkinan solusi, tetapi setiap kali anda menghasilkan solusi selanjutnya, anda akan menguji apakah solusi tersebut memenuhi semua kondisi dan setelah itu baru akan menghasilkan solusi berikutnya. Apabila tidak, maka akan merunut-balik dan mencari solusi di jalur yang berbeda. Biasanya menggunakan lintas DFS dari ruang keadaan.
  - `P` [Permainan Melompat](src/algorithms/uncategorized/jump-game)
  - `P` [_Unique Paths_](src/algorithms/uncategorized/unique-paths)
  - `P` [Himpunan Kuasa](src/algorithms/sets/power-set) - semua himpunan bagian dari sebuah himpunan
  - `L` [Siklus Hamiltonian](src/algorithms/graph/hamiltonian-cycle) - mengunjungi setiap sudutnya tepat satu kali
  - `L` [Permainan N-Queen](src/algorithms/uncategorized/n-queens)
  - `L` [Permainan Knight's Tour](src/algorithms/uncategorized/knight-tour)
  - `L` [_Combination Sum_](src/algorithms/sets/combination-sum) - menemukan semua kombinasi yang membentuk jumlah tertentu
- **_Mencabang dan Membatasi_** - digunakan untuk membuang solusi parsial dengan biaya yang lebih besar dari solusi dengan biaya yang terendah yang ditemukan sejauh ini dengan cara mengingat solusi dengan biaya terendah yang ditemukan pada setiap tahap dari pencarian runut-balik dan menggunakan biaya dari solusi dengan biaya terendah sejauh ini sebagai batas bawah pada biaya dari solusi dengan biaya yang paling sedikit untuk permasalahannya. Biasanya menggunakan lintas BFS yang berkombinasi dengan lintas DFS dari pohon ruang keadaan.

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

**_Playground_**

Anda dapat bermain dengan algoritma dan struktur data di _file_ `./src/playground/playground.js` dan menuliskan tesnya di `./src/playground/__test__/playground.test.js`.

Lalu, hanya tinggal menjalankan perintah berikut untuk mengetes apakah kode _playground_ anda bekerja sesuai dengan keinginan:

```
npm test -- 'playground'
```

## Informasi Bermanfaat

### Referensi

[▶ Algoritma dan Struktur Data di YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notasi _Big O_

Notasi _Big O_ digunakan untuk mengklasifikasikan algoritma berdasarkan durasi atau ruang yang dibutuhkan seiring bertambahnya _input_. Pada grafik dibawah, anda dapat menemukan urutan pertumbuhan yang paling umum dari algoritma yang ditentukan dalam notasi _Big O_.

![Big O graphs](./assets/big-o-graph.png)

Sumber: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Di bawah ini adalah daftar dari beberapa notasi _Big O_ yang sering digunakan dan perbandingan kinerjanya terhadap berbagai ukuran _input data_.

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
| **Queue (Antrean)**                          |   n    |     n     |     1      |      1      |                                                          |
| **Linked List (Senarai Berantai)**           |   n    |     n     |     1      |      n      |                                                          |
| **Hash Table**                               |   -    |     n     |     n      |      n      | Apabila fungsi hash sempurna, biayanya akan menjadi O(1) |
| **Binary Search Tree (Pohon Telusur Biner)** |   n    |     n     |     n      |      n      | Apabila pohon seimbang, biayanya akan menjadi O(log(n))  |
| **B-Tree**                                   | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **Red-Black Tree (Pohon Merah-Hitam)**       | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **AVL Tree**                                 | log(n) |  log(n)   |   log(n)   |   log(n)    |                                                          |
| **Bloom Filter**                             |   -    |     1     |     1      |      -      | Positif palsu dimungkinkan saat pencarian                |

### Kompleksitas Algoritma Sortir Larik

| Nama                                   |    Terbaik    |          Rata-rata           |          Terburuk           | Memori | Stabil | Keterangan                                                                        |
| -------------------------------------- | :-----------: | :--------------------------: | :-------------------------: | :----: | :----: | :-------------------------------------------------------------------------------- |
| **Bubble sort (Sortir Gelembung)**     |       n       |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    |   Ya   |                                                                                   |
| **Insertion sort (Sortir Sisipan)**    |       n       |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    |   Ya   |                                                                                   |
| **Selection sort (Sortir Seleksi)**    | n<sup>2</sup> |        n<sup>2</sup>         |        n<sup>2</sup>        |   1    | Tidak  |                                                                                   |
| **Heap sort (Sortir _Heap_)**          | n&nbsp;log(n) |        n&nbsp;log(n)         |        n&nbsp;log(n)        |   1    | Tidak  |                                                                                   |
| **Merge Sort (Sortir Gabungan)**       | n&nbsp;log(n) |        n&nbsp;log(n)         |        n&nbsp;log(n)        |   n    |   Ya   |                                                                                   |
| **Quick sort (Sortir Cepat)**          | n&nbsp;log(n) |        n&nbsp;log(n)         |        n<sup>2</sup>        | log(n) | Tidak  | Sortir Cepat biasanya dilakukan secara _in-place_ dengan O(log(n)) ruang tumpukan |
| **Shell sort (Sortir Shell)**          | n&nbsp;log(n) | tergantung pada jarak urutan | n&nbsp;(log(n))<sup>2</sup> |   1    | Tidak  |                                                                                   |
| **Counting sort (Sortir Perhitungan)** |     n + r     |            n + r             |            n + r            | n + r  |   Ya   | r - angka terbesar dalam larik                                                    |
| **Radix sort (Sortir Akar)**           |    n \* k     |            n \* k            |           n \* k            | n + k  |   Ya   | k - panjang dari kunci terpanjang                                                 |

## Pendukung Proyek

> Anda dapat mendukung proyek ini via ❤️️ [GitHub](https://github.com/sponsors/trekhleb) atau ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Orang-orang yang mendukung proyek ini](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1`

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
