# Algoritma JavaScript dan Struktur Data

> 🇺🇦 UKRAINE [SEDANG DISERANG](https://twitter.com/MFA_Ukraine) OLEH TENTERA RUSIA. ORANG AWAM SEMAKIN DIBUNUH. KAWASAN KEDIAMAN SEMAKIN DIBOM.
> - Bantu Ukraine melalui [Bank Negara Ukraine](https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi)
> - Bantu Ukraine melalui dana [SaveLife](https://savelife.in.ua/en/donate-en/)
> - Maklumat lanjut tentang [war.ukraine.ua](https://war.ukraine.ua/)

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow% 3ACI+cawangan%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Repositori ini mengandungi banyak contoh berasaskan JavaScript
algoritma dan struktur data yang popular.

Setiap algoritma dan struktur data mempunyai README tersendiri
dengan penjelasan dan pautan berkaitan untuk bacaan lanjut (termasuk yang
kepada video YouTube).

_Baca ini dalam bahasa lain:_
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
[_Arab_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

*☝ Ambil perhatian bahawa projek ini bertujuan untuk digunakan untuk tujuan pembelajaran dan penyelidikan
sahaja, dan ia **tidak** bertujuan untuk digunakan untuk pengeluaran.*

## Struktur Data

Struktur data ialah cara tertentu untuk mengatur dan menyimpan data dalam komputer supaya ia boleh
boleh diakses dan diubah suai dengan cekap. Lebih tepat lagi, struktur data ialah himpunan data
nilai, hubungan di antara mereka, dan fungsi atau operasi yang boleh digunakan
data itu.

`B` - Pemula, `A` - Lanjutan

* `B` [Senarai Terpaut](src/struktur-data/senarai-terpaut)
* `B` [Senarai Terpaut Berganda](src/struktur-data/senarai-berpaut-dua)
* `B` [Barisan](src/struktur-data/baris gilir)
* `B` [Timbunan](src/struktur-data/tindanan)
* `B` [Jadual Hash](src/struktur-data/jadual cincang)
* `B` [Timbunan](src/struktur-data/timbunan) - versi timbunan maks dan min
* `B` [Baris Keutamaan](src/struktur-data/baris gilir keutamaan)
* `A` [Trie](src/data-structures/trie)
* `A` [Pokok](src/struktur-data/pokok)
  * `A` [Pokok Carian Perduaan](src/struktur-data/pokok/pokok-cari-perduaan)
  * `A` [AVL Tree](src/data-structures/tree/avl-tree)
  * `A` [Pokok Merah-Hitam](src/struktur-data/pokok/pokok-merah-hitam)
  * `A` [Pokok Segmen](src/data-structures/tree/segment-tree) - dengan contoh pertanyaan julat min/maks/jumlah
  * `A` [Pokok Fenwick](src/struktur-data/pokok/pokok-fenwick) (Pokok Berindeks Perduaan)
* `A` [Graf](src/struktur-data/graf) (kedua-dua terarah dan tidak terarah)
* `A` [Set Terpisah](src/struktur-data/set-terpisah)
* `A` [Bloom Filter](src/data-structures/bloom-filter)

## Algoritma

Algoritma ialah spesifikasi yang tidak jelas tentang cara menyelesaikan kelas masalah. Ia adalah
satu set peraturan yang mentakrifkan dengan tepat urutan operasi.

`B` - Pemula, `A` - Lanjutan

### Algoritma mengikut Topik

* **Matematik**
  * `B` [Manipulasi Bit](src/algoritma/matematik/bit) - set/dapatkan/kemas kini/kosongkan bit, darab/bahagi dengan dua, jadikan negatif dsb.
  * `B` [Titik Terapung Perduaan](src/algoritma/matematik/titik terapung binari) - perwakilan binari nombor titik terapung.
  * `B` [Factorial](src/algoritma/matematik/faktorial)
  * `B` [Nombor Fibonacci](src/algoritma/matematik/fibonacci) - versi klasik dan bentuk tertutup
  * `B` [Faktor Perdana](src/algoritma/matematik/faktor-prima) - mencari faktor perdana dan mengiranya menggunakan teorem Hardy-Ramanujan
  * `B` [Ujian Primaliti](src/algoritma/matematik/ujian-primaliti) (kaedah pembahagian percubaan)
  * `B` [Algoritma Euclidean](src/algorithm/math/euclidean-algorithm) - kira Pembahagi Sepunya Terhebat (GCD)
  * `B` [Garab Sepunya Terkecil](src/algoritma/matematik/bilangan-paling-biasa) (LCM)
  * `B` [Ayak Eratosthenes](src/algoritma/matematik/ayak-eratosthenes) - mencari semua nombor perdana sehingga mana-mana had tertentu
  * `B` [Adalah Kuasa Dua](src/algoritma/math/is-power-of-two) - semak sama ada nombor itu kuasa dua (algoritma naif dan bitwise)
  * `B` [Segitiga Pascal](src/algoritma/matematik/segitiga-pascal)
  * `B` [Nombor Kompleks](src/algoritma/matematik/nombor-kompleks) - nombor kompleks dan operasi asas dengannya
  * `B` [Radian & Darjah](src/algoritma/matematik/radian) - penukaran radian kepada darjah dan ke belakang
  * `B` [Fast Powering](src/algorithm/math/fast-powering)
  * `B` [Kaedah Horner](src/algoritma/matematik/kaedah-horner) - penilaian polinomial
  * `B` [Matriks](src/algoritma/matematik/matriks) - matriks dan operasi matriks asas (pendaraban, transposisi, dsb.)
  * `B` [Jarak Euclidean](src/algoritma/matematik/jarak-euclidean) - jarak antara dua titik/vektor/matriks
  * `A` [Pembahagian Integer](src/algoritma/matematik/integer-partition)
  * `A` [Akar Kuasa Dua](src/algoritma/matematik/akar-kuadrat) - Kaedah Newton
  * `A` [Algoritma Liu Hui π](src/algoritma/math/liu-hui) - anggaran π pengiraan berdasarkan N-gons
  * `A` [Transformasi Fourier Diskret](src/algoritma/matematik/fourier-transform) - menguraikan fungsi masa (suatu isyarat) kepada frekuensi yang membentuknya
* **Set**
  * `B` [Produk Cartesian](src/algoritma/set/produk cartesian) - hasil daripada berbilang set
  * `B` [Fisher–Yates Shuffle](src/algoritma/sets/fisher-yates) - pilih atur rawak bagi urutan terhingga
  * `A` [Set Kuasa](src/algoritma/set/set-kuasa) - semua subset set (penyelesaian bitwise dan backtracking)
  * `A` [Permutasi](src/algoritma/set/permutasi) (dengan dan tanpa ulangan)
  * `A` [Gabungan](src/algoritma/set/gabungan) (dengan dan tanpa ulangan)
  * `A` [Turutan Sepunya Terpanjang](src/algoritma/set/susulan-biasa-terpanjang) (LCS)
  * `A` [Surutan Bertambah Terpanjang](src/algoritma/set/susulan-bertambah-panjang)
  * `A` [Jurutan Sepunya Terpendek](src/algoritma/set/jujukan-sepunya-terpendek) (SCS)
  * `A` [Masalah Knapsack](src/algorithms/sets/knapsack-problem) - "0/1" dan "Unbound"
  * `A` [Maximum Subarray](src/algorithm/sets/maximum-subarray) - versi "Brute Force" dan "Dynamic Programming" (Kadane's)
  * `A` [Jumlah Gabungan](src/algoritma/set/jumlah-gabungan) - cari semua gabungan yang membentuk jumlah tertentu
* **Rentetan**
  * `B` [Jarak Hamming](src/algoritma/rentetan/jarak hamming) - bilangan kedudukan di mana simbol berbeza
  * `B` [Palindrome](src/algorithm/string/palindrome) - semak sama ada rentetan adalah sama secara terbalik
  * `A` [Jarak Levenshtein](src/algoritma/rentetan/levenshtein-jarak) - jarak edit minimum antara dua jujukan
  * `A` [Algoritma Knuth–Morris–Pratt](src/algorithm/string/knuth-morris-pratt) (Algoritma KMP) - carian subrentetan (padanan corak)
  * `A` [Z Algoritma](src/algorithm/string/z-algorithm) - carian subrentetan (padanan corak)
  * `A` [Algoritma Rabin Karp](src/algorithm/string/rabin-karp) - carian subrentetan
  * `A` [Subrentetan Biasa Terpanjang](src/algoritma/rentetan/subrentetan-biasa-terpanjang)
  * `A` [Padanan Ungkapan Biasa](src/algoritma/rentetan/padanan-ungkapan-biasa)
  * **Carian**
  * `B` [Carian Linear](src/algorithm/search/linear-search)
  * `B` [Cari Lompat](src/algorithm/search/jump-search) (atau Carian Sekat) - cari dalam tatasusunan yang diisih
  * `B` [Carian Binari](src/algorithm/search/binary-search) - cari dalam tatasusunan yang diisih
  * `B` [Carian Interpolasi](src/algoritma/search/interpolation-search) - cari dalam tatasusunan tersusun yang diedarkan secara seragam
* **Menyusun**
  * `B` [Isih Buih](src/algoritma/isih/isih-buih)
  * `B` [Isih Pilihan](src/algoritma/isih/isih-pilihan)
  * `B` [Isih Sisipan](src/algoritma/isih/isihan-sisipan)
  * `B` [Isih Timbunan](src/algoritma/isih/isih-timbun)
  * `B` [Isih Gabung](src/algoritma/isih/isih-gabung)
  * `B` [Quicksort](src/algorithm/sorting/quick-sort) - pelaksanaan di tempat dan bukan di tempat
  * `B` [Shellsort](src/algoritm/sorting/shell-sort)
  * `B` [Isih Mengira](src/algoritma/isihan/isihan-kira)
  * `B` [Isih Radix](src/algoritma/isih/isih-radix)
* **Senarai Terpaut**
  * `B` [Straight Traversal](src/algorithm/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithm/linked-list/reverse-traversal)
* **Pokok**
  * `B` [Depth-First Search](src/algorithm/tree/depth-first-search) (DFS)
  * `B` [Breadth-First-search](src/algorithm/tree/breadth-first-search) (BFS)
* **Graf**
  * `B` [Depth-First Search](src/algorithm/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithm/graph/breadth-first-search) (BFS)
  * `B` [Algoritma Kruskal](src/algoritma/graf/kruskal) - mencari Pokok Spanning Minimum (MST) untuk graf tidak berwajaran
  * `A` [Algoritma Dijkstra](src/algorithm/graph/dijkstra) - mencari laluan terpendek ke semua bucu graf dari bucu tunggal
  * `A` [Algoritma Bellman-Ford](src/algoritma/graf/bellman-ford) - mencari laluan terpendek ke semua bucu graf daripada bucu tunggal
  * `A` [Algoritma Floyd-Warshall](src/algorithm/graph/floyd-warshall) - cari laluan terpendek antara semua pasangan bucu
  * `A` [Detect Cycle](src/algorithm/graph/detect-cycle) - untuk kedua-dua graf terarah dan tidak terarah (versi berasaskan DFS dan Disjoint Set)
  * `A` [Algoritma Prim](src/algoritma/graf/prim) - mencari Pokok Spanning Minimum (MST) untuk graf tidak berwajaran
  * `A` [Isih Topologi](src/algoritma/graf/isihan-topologi) - Kaedah DFS
  * `A` [Mata Artikulasi](src/algoritma/graf/titik-artikulasi) - Algoritma Tarjan (berasaskan DFS)
  * `A` [Bridges](src/algorithm/graph/bridges) - algoritma berasaskan DFS
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithm/graph/eulerian-path) - Algoritma Fleury - Lawati setiap tepi tepat sekali
  * `A` [Kitaran Hamiltonian](src/algoritma/graf/kitaran-hamilton) - Lawati setiap bucu tepat sekali
  * `A` [Komponen Bersambung Kuat](src/algoritma/graf/komponen-kuat-bersambung) - Algoritma Kosaraju
  * `A` [Masalah Jurujual Perjalanan](src/algoritma/graf/jurujual-perjalanan) - laluan terpendek mungkin yang melawati setiap bandar dan kembali ke bandar asal
* **Kriptografi**
  * `B` [Cincangan Polinomial](src/algoritma/kriptografi/cincang polinomial) - fungsi cincang bergolek berdasarkan polinomial
  * `B` [Sifir Pagar Rel](src/algoritma/kriptografi/sifir-pagar-rel) - algoritma sifir transposisi untuk pengekodan mesej
  * `B` [Caesar Cipher](src/algoritma/kriptografi/caesar-cipher) - sifir penggantian mudah
  * `B` [Sifir Bukit](src/algoritma/kriptografi/sifir bukit) - sifir penggantian berdasarkan algebra linear
* **Pembelajaran Mesin**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 fungsi JS mudah yang menggambarkan bagaimana mesin sebenarnya boleh belajar (perambatan ke hadapan/belakang)
  * `B` [k-NN](src/algoritma/ml/knn) - algoritma klasifikasi jiran terdekat k
  * `B` [k-Means](src/algorithm/ml/k-means) - algoritma pengelompokan k-Means
* **Pemprosesan imej**
  * `B` [Ukiran Jahitan](src/algoritma/pemprosesan-imej/ukiran-jahitan) - algoritma saiz semula imej sedar kandungan
* **Statistik**
  * `B` [Rawak Berwajaran](src/algoritma/statistik/rawak-wajaran) - pilih item rawak daripada senarai berdasarkan berat item
* **Algoritma evolusi**
  * `A` [Algoritma genetik](https://github.com/trekhleb/self-parking-car-evolution) - contoh cara algoritma genetik boleh digunakan untuk melatih kereta letak sendiri
  * **Tidak dikategorikan**
  * `B` [Menara Hanoi](src/algoritma/tidak dikategorikan/menara-hanoi)
  * `B` [Putaran Matriks Persegi](src/algoritma/tidak dikategorikan/putaran-matriks-persegi) - algoritma di tempat
  * `B` [Permainan Lompat](src/algoritma/tidak dikategorikan/permainan lompat) - menjejak ke belakang, pengaturcaraan dinamik (atas ke bawah + bawah ke atas) dan contoh tamak
  * `B` [Laluan Unik](src/algorithms/uncategorized/unique-paths) - penjejakan ke belakang, pengaturcaraan dinamik dan contoh berasaskan Segitiga Pascal
  * `B` [Teres Hujan](src/algoritma/tidak dikategorikan/teres hujan) - memerangkap masalah air hujan (versi pengaturcaraan dinamik dan kekerasan)
  * `B` [Tangga Rekursif](src/algoritma/tidak dikategorikan/tangga rekursif) - kira bilangan cara untuk sampai ke atas (4 penyelesaian)
  * `B` [Masa Terbaik Untuk Membeli Saham Jual](src/algoritma/tidak dikategorikan/masa-terbaik-untuk-membeli-menjual-saham) - bahagikan dan takluk serta contoh satu laluan
  * `A` [Masalah N-Queens](src/algoritma/uncategorized/n-queens)
  * `A` [Lawatan Kesatria](src/algoritma/tidak dikategorikan/jelajah kesatria)

### Algoritma mengikut Paradigma

Paradigma algoritma ialah kaedah atau pendekatan generik yang mendasari reka bentuk kelas
daripada algoritma. Ia adalah abstraksi yang lebih tinggi daripada tanggapan algoritma, sama seperti an
algoritma adalah abstraksi yang lebih tinggi daripada program komputer.

* **Brute Force** - lihat semua kemungkinan dan pilih penyelesaian terbaik
  * `B` [Carian Linear](src/algorithm/search/linear-search)
  * `B` [Rain Terraces](src/algoritma/uncategorized/rain-teres) - memerangkap masalah air hujan
  * `B` [Tangga Rekursif](src/algoritma/tak berkategori/tangga rekursif) - kira bilangan cara untuk sampai ke atas
  * `A` [Subarray Maksimum](src/algoritma/set/subarray maksimum)
  * `A` [Masalah Jurujual Perjalanan](src/algoritma/graf/jurujual-perjalanan) - laluan terpendek mungkin yang melawati setiap bandar dan kembali ke bandar asal
  * `A` [Transformasi Fourier Diskret](src/algoritma/matematik/fourier-transform) - menguraikan fungsi masa (suatu isyarat) kepada frekuensi yang membentuknya
* **Rakus** - pilih pilihan terbaik pada masa semasa, tanpa sebarang pertimbangan untuk masa hadapan
* `B` [Permainan Lompat](src/algoritma/tidak dikategorikan/permainan lompat)
  * `A` [Masalah Knapsack Tidak Terikat](src/algoritma/set/masalah-knapsack)
  * `A` [Algoritma Dijkstra](src/algoritma/graf/dijkstra) - mencari laluan terpendek ke semua bucu graf
  * `A` [Algoritma Prim](src/algoritma/graf/prim) - mencari Pokok Spanning Minimum (MST) untuk graf tidak berwajaran
  * `A` [Algoritma Kruskal](src/algoritma/graf/kruskal) - mencari Pokok Spanning Minimum (MST) untuk graf tidak berwajaran
* **Divide and Conquer** - bahagikan masalah kepada bahagian yang lebih kecil dan kemudian selesaikan bahagian tersebut
  * `B` [Carian Perduaan](src/algoritma/carian/pencarian-perduaan)
  * `B` [Menara Hanoi](src/algoritma/tidak dikategorikan/menara-hanoi)
  * `B` [Segitiga Pascal](src/algoritma/matematik/segitiga-pascal)
  * `B` [Algoritma Euclidean](src/algorithm/math/euclidean-algorithm) - kira Pembahagi Sepunya Terhebat (GCD)
  * `B` [Isih Gabung](src/algoritma/isih/isih-gabung)
  * `B` [Isih Pantas](src/algoritma/isih/isih-pantas)
  * `B` [Carian Kedalaman-Pertama Pokok](src/algoritma/pokok/carian-pertama-dalam) (DFS)
  * `B` [Graph Depth-First Search](src/algorithm/graph/depth-first-search) (DFS)
  * `B` [Matriks](src/algoritma/matematik/matriks) - menjana dan melintasi matriks pelbagai bentuk
  * `B` [Permainan Lompat](src/algoritma/tidak dikategorikan/permainan lompat)
  * `B` [Fast Powering](src/algorithm/math/fast-powering)
  * `B` [Masa Terbaik Untuk Membeli Saham Jual](src/algoritma/tidak dikategorikan/masa-terbaik-untuk-membeli-menjual-saham) - bahagikan dan takluk serta contoh satu laluan
  * `A` [Permutasi](src/algoritma/set/permutasi) (dengan dan tanpa ulangan)
  * `A` [Gabungan](src/algoritma/set/gabungan) (dengan dan tanpa ulangan)
  * `A` [Subarray Maksimum](src/algoritma/set/subarray maksimum)
* **Pengaturcaraan Dinamik** - bina penyelesaian menggunakan sub-penyelesaian yang ditemui sebelum ini
  * `B` [Nombor Fibonacci](src/algoritma/matematik/fibonacci)
  * `B` [Permainan Lompat](src/algoritma/tidak dikategorikan/permainan lompat)
  * `B` [Laluan Unik](src/algoritma/tidak dikategorikan/laluan-unik)
  * `B` [Rain Terraces](src/algoritma/uncategorized/rain-teres) - memerangkap masalah air hujan

  * `B` [Tangga Rekursif](src/algoritma/tak berkategori/tangga rekursif) - kira bilangan cara untuk sampai ke atas
  * `B` [Ukiran Jahitan](src/algoritma/pemprosesan-imej/ukiran-jahitan) - algoritma saiz semula imej sedar kandungan
  * `A` [Jarak Levenshtein](src/algoritma/rentetan/levenshtein-jarak) - jarak edit minimum antara dua jujukan
  * `A` [Turutan Sepunya Terpanjang](src/algoritma/set/susulan-biasa-terpanjang) (LCS)
  * `A` [Subrentetan Biasa Terpanjang](src/algoritma/rentetan/subrentetan-biasa-terpanjang)
  * `A` [Surutan Bertambah Terpanjang](src/algoritma/set/susulan-bertambah-panjang)
  * `A` [Jujukan Sepunya Terpendek](src/algoritma/set/jujukan-sepunya-terpendek)
  * `A` [0/1 Masalah Knapsack](src/algoritma/set/knapsack-problem)
  * `A` [Pembahagian Integer](src/algoritma/matematik/integer-partition)
  * `A` [Subarray Maksimum](src/algoritma/set/subarray maksimum)
  * `A` [Algoritma Bellman-Ford](src/algorithm/graph/bellman-ford) - mencari laluan terpendek ke semua bucu graf
  * `A` [Algoritma Floyd-Warshall](src/algorithm/graph/floyd-warshall) - cari laluan terpendek antara semua pasangan bucu
  * `A` [Padanan Ungkapan Biasa](src/algoritma/rentetan/padanan-ungkapan-biasa)
* **Penjejakan Belakang** - sama seperti kekerasan, cuba jana semua penyelesaian yang mungkin, tetapi setiap kali anda menjana penyelesaian seterusnya anda menguji
jika ia memenuhi semua syarat, dan hanya kemudian terus menjana penyelesaian seterusnya. Jika tidak, mundur, dan teruskan a
jalan yang berbeza untuk mencari penyelesaian. Biasanya traversal DFS bagi ruang keadaan sedang digunakan.
  * `B` [Permainan Lompat](src/algoritma/tidak dikategorikan/permainan lompat)
  * `B` [Laluan Unik](src/algoritma/tidak dikategorikan/laluan-unik)
  * `B` [Set Kuasa](src/algoritma/set/set-kuasa) - semua subset set
  * `A` [Kitaran Hamiltonian](src/algoritma/graf/kitaran-hamilton) - Lawati setiap bucu tepat sekali
  * `A` [Masalah N-Queens](src/algoritma/uncategorized/n-queens)
  * `A` [Lawatan Kesatria](src/algoritma/tidak dikategorikan/jelajah kesatria)
  * `A` [Jumlah Gabungan](src/algoritma/set/jumlah-gabungan) - cari semua gabungan yang membentuk jumlah tertentu

  * **Branch & Bound** - ingat penyelesaian kos terendah yang terdapat pada setiap peringkat penjejakan ke belakang
cari, dan gunakan kos penyelesaian kos terendah yang ditemui setakat ini sebagai had yang lebih rendah pada kos
penyelesaian kos termurah untuk masalah, untuk membuang penyelesaian separa dengan kos lebih besar daripada
penyelesaian kos terendah ditemui setakat ini. Biasanya traversal BFS digabungkan dengan traversal DFS of state-space
pokok sedang digunakan.

## Cara menggunakan repositori ini

**Pasang semua kebergantungan**

```
pemasangan npm
```

**Jalankan ESLint**

Anda mungkin mahu menjalankannya untuk menyemak kualiti kod.

```
npm run lint
```

**Jalankan semua ujian**

```
ujian npm
```

**Jalankan ujian mengikut nama**

```
ujian npm -- 'LinkedList'
```

**Penyelesaian masalah**

Jika linting atau ujian gagal, cuba padamkan folder `node_modules` dan pasang semula pakej npm:

```
rm -rf ./node_modules
npm i
```

Juga pastikan anda menggunakan versi Nod yang betul (`>=14.16.0`). Jika anda menggunakan [nvm](https://github.com/nvm-sh/nvm) untuk pengurusan versi Nod, anda boleh menjalankan `nvm use` daripada folder akar projek dan versi yang betul akan diambil.

**Taman permainan**

Anda boleh bermain dengan struktur data dan algoritma dalam fail `./src/playground/playground.js` dan tulis
mengujinya dalam `./src/playground/__test__/playground.test.js`.

Kemudian hanya jalankan arahan berikut untuk menguji sama ada kod taman permainan anda berfungsi seperti yang diharapkan:

```
ujian npm -- 'taman permainan'
```

## Informasi berguna

### Rujukan

[▶ Struktur Data dan Algoritma di YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Notasi O Besar

*Notasi O Besar* digunakan untuk mengklasifikasikan algoritma mengikut cara masa berjalan atau keperluan ruang mereka berkembang apabila saiz input bertambah.
Pada carta di bawah anda mungkin menemui susunan pertumbuhan algoritma yang paling biasa yang dinyatakan dalam tatatanda Big O.

![Graf O Besar](./assets/big-o-graph.png)

Sumber: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Di bawah ialah senarai beberapa tatatanda Big O yang paling banyak digunakan dan perbandingan prestasinya terhadap saiz data input yang berbeza.

| Notasi O Besar | Taip | Pengiraan untuk 10 elemen | Pengiraan untuk 100 elemen | Pengiraan untuk 1000 elemen |
| -------------- | ----------- | ---------------------------- | ---------------------------- | ------------------------------- |
| **O(1)** | Malar | 1 | 1 | 1 |
| **O(log N)** | Logaritma | 3 | 6 | 9 |
| **O(N)** | Linear | 10 | 100 | 1000 |
| **O(N log N)** | n log(n) | 30 | 600 | 9000 |
| **O(N^2)** | Kuadratik | 100 | 10000 | 1000000 |
| **O(2^N)** | Eksponen | 1024 | 1.26e+29 | 1.07e+301 |
| **O(N!)** | Faktorial | 3628800 | 9.3e+157 | 4.02e+2567

### Kerumitan Operasi Struktur Data

| Struktur Data | Akses | Cari | Sisipan | Pemadaman | Komen |
| ------------------------ | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array** | 1 | n | n | n | |
| **Timbunan** | n | n | 1 | 1 | |
| **Beratur** | n | n | 1 | 1 | |
| **Senarai Terpaut** | n | n | 1 | n | |
| **Jadual Hash** | - | n | n | n | Dalam kes kos fungsi cincang yang sempurna ialah O(1) |
| **Pokok Carian Binari** | n | n | n | n | Dalam kes kos pokok seimbang ialah O(log(n)) |
| **B-Tree** | log(n) | log(n) | log(n) | log(n) | |
| **Pokok Merah-Hitam** | log(n) | log(n) | log(n) | log(n) | |
| **Pokok AVL** | log(n) | log(n) | log(n) | log(n) | |
| **Penapis Bloom** | - | 1 | 1 | - | Positif palsu mungkin semasa mencari |

### Kerumitan Algoritma Pengisihan Tatasusunan

| Nama | Terbaik | Purata | Paling teruk | Memori | Stabil | Komen |
| ---------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Isih gelembung** | n | n<sup>2</sup> | n<sup>2</sup> | 1 | Ya | |
| **Isihan sisipan** | n | n<sup>2</sup> | n<sup>2</sup> | 1 | Ya | |
| **Isih pilihan** | n<sup>2</sup> | n<sup>2</sup> | n<sup>2</sup> | 1 | Tidak | |
| **Isihan timbunan** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) | 1 | Tidak | |
| **Isih gabung** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) | n | Ya | |
| **Isih cepat** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) | Tidak | Quicksort biasanya dilakukan di tempat dengan ruang tindanan O(log(n)) |
| **Isih cangkerang** | n&nbsp;log(n) | bergantung pada jujukan jurang | n&nbsp;(log(n))<sup>2</sup> | 1 | Tidak | |
| **Isih mengira** | n + r | n + r | n + r | n + r | Ya | r - nombor terbesar dalam tatasusunan |
| **Isih Radix** | n * k | n * k | n * k | n + k | Ya | k - panjang kunci terpanjang |

## Penyokong Projek

> Anda boleh menyokong projek ini melalui ❤️️ [GitHub](https://github.com/sponsors/trekhleb) atau ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[Orang yang menyokong projek ini](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 0`

> ℹ️ Beberapa lagi [projek](https://trekhleb.dev/projects/) dan [artikel](https://trekhleb.dev/blog/) tentang JavaScript dan algoritma pada [trekhleb.dev](https:/ /trekhleb.dev)