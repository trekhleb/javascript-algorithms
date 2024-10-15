# JavaScript algoritmlari va ma'lumotlar tuzilmalari

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)
![repo size](https://img.shields.io/github/repo-size/trekhleb/javascript-algorithms.svg)

Bu repozitoriyada JavaScript-ga asoslangan ko'plab mashhur algoritmlar
va ma'lumotlar tuzilmalarining namunalari mavjud.

Har bir algoritm va ma'lumotlar tuzilmasining alohida README fayli
bo'lib, unda tegishli tushuntirishlar va qo'shimcha o'qish uchun
havolalar (shu jumladan YouTube videolariga ham havolalar) mavjud.

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
[_Türkçe_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md),
[_Uzbek_](README.uz-UZ.md)
[_עברית_](README.he-HE.md)

Yodda tuting, bu loyiha faqat o'quv va tadqiqot maqsadida ishlatilishi
uchun mo'ljallangan va ishlab chiqarishda ishlatilishi **mumkin emas**.

## Ma'lumotlar tuzilmalari

Ma'lumotlar tuzilmasi - bu kompyuterda ma'lumotlarni samarali tarzda
olish va o'zgartirish uchun ularni tashkil etish va saqlashning ma'lum
bir usuli. Ayniqsa, ma'lumotlar tuzilmasi ma'lumot qiymatlarining
to'plami, ular orasidagi munosabatlar va ma'lumotlarga qo'llanilishi
mumkin bo'lgan funksiyalar yoki operatsiyalardir.

`B` - Boshlang'ich, `A` - Ilg'or

- `B` [Bog'langan ro'yxat](src/data-structures/linked-list)
- `B` [Ikki marta bog'langan ro'yxat](src/data-structures/doubly-linked-list)
- `B` [Navbat](src/data-structures/queue)
- `B` [Stek](src/data-structures/stack)
- `B` [Hash jadvali](src/data-structures/hash-table)
- `B` [Heap](src/data-structures/heap) - maksimal va minimal heap versiyalari
- `B` [Ustuvor navbat](src/data-structures/priority-queue)
- `A` [Trie](src/data-structures/trie)
- `A` [Daraxt](src/data-structures/tree)
  - `A` [Ikkilik qidiruv daraxt](src/data-structures/tree/binary-search-tree)
  - `A` [AVL daraxt](src/data-structures/tree/avl-tree)
  - `A` [Qizil-qora daraxt](src/data-structures/tree/red-black-tree)
  - `A` [Segment daraxt](src/data-structures/tree/segment-tree) - min/max/sum diapazon so'rovlari bilan misollar
  - `A` [Fenwick daraxt](src/data-structures/tree/fenwick-tree) (ikkilik indeksli daraxt)
- `A` [Graf](src/data-structures/graph) (yo'naltirilgan hamda yo'naltirilmagan)
- `A` [Ajratilgan to'plam](src/data-structures/disjoint-set) - union-find ma'lumotlar strukturasi yoki merge-find to'plami
- `A` [Bloom filtri](src/data-structures/bloom-filter)
- `A` [LRU keshi](src/data-structures/lru-cache/) - Eng kam ishlatilgan (LRU) keshi

## Algoritmlar

Algoritm muammolar sinfini qanday hal qilishning aniq spetsifikatsiyasi. Bu operatsiyalar ketma-ketligini aniqlaydigan qoidalar to'plami.

`B` - Boshlang'ich, `A` - Ilg'or

### Mavzu bo'yicha algoritmlar

- **Matematika**
  - `B` [Bit manipulatsiyasi](src/algorithms/math/bits) - bitlarni qo'yish/olish/yangilash/tozalash, ikkilikka ko'paytirish/bo'lish, manfiy qilish va hokazo.
  - `B` [Ikkilik suzuvchi nuqta](src/algorithms/math/binary-floating-point) - suzuvchi nuqtali sonlarning ikkilik tasviri.
  - `B` [Faktorial](src/algorithms/math/factorial)
  - `B` [Fibonachchi raqam](src/algorithms/math/fibonacci) - klassik va yopiq shakldagi versiyalar
  - `B` [Asosiy omillar](src/algorithms/math/prime-factors) - tub omillarni topish va ularni Xardi-Ramanujan teoremasi yordamida sanash
  - `B` [Birlamchilik testi](src/algorithms/math/primality-test) (sinov bo'linish usuli)
  - `B` [Evklid algoritmi](src/algorithms/math/euclidean-algorithm) - eng katta umumiy bo'luvchini (EKUB) hisoblash
  - `B` [Eng kichik umumiy karrali](src/algorithms/math/least-common-multiple) (EKUK)
  - `B` [Eratosfen elagi](src/algorithms/math/sieve-of-eratosthenes) - berilgan chegaragacha barcha tub sonlarni topish
  - `B` [Ikkining darajasimi](src/algorithms/math/is-power-of-two) - raqamning ikkining darajasi ekanligini tekshirish (sodda va bitli algoritmlar)
  - `B` [Paskal uchburchagi](src/algorithms/math/pascal-triangle)
  - `B` [Kompleks sonlar](src/algorithms/math/complex-number) - kompleks sonlar va ular bilan asosiy amallar
  - `B` [Radian & Daraja](src/algorithms/math/radian) - radianlarni darajaga va orqaga aylantirish
  - `B` [Tez ko'tarish](src/algorithms/math/fast-powering)
  - `B` [Horner metodi](src/algorithms/math/horner-method) - polinomlarni baholash
  - `B` [Matritsalar](src/algorithms/math/matrix) - matritsalar va asosiy matritsa operatsiyalari (ko'paytirish, transpozitsiya va boshqalar).
  - `B` [Evklid masofasi](src/algorithms/math/euclidean-distance) - ikki nuqta/vektor/matritsa orasidagi masofa
  - `A` [Butun sonlarni bo'lish](src/algorithms/math/integer-partition)
  - `A` [Kvadrat ildiz](src/algorithms/math/square-root) - Nyuton metodi
  - `A` [Liu Hui π algoritmi](src/algorithms/math/liu-hui) - N-gonlarga asoslangan π ning taxminiy hisoblari
  - `A` [Diskret Furye transformatsiyasi](src/algorithms/math/fourier-transform) - vaqt funksiyasini (signalni) uni tashkil etuvchi chastotalarga ajratish
- **Sets**
  - `B` [Karteziya maxsuloti](src/algorithms/sets/cartesian-product) - bir nechta to'plamlarning ko'paytmasi
  - `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - chekli ketma-ketlikni tasodifiy almashtirish
  - `A` [Power Set](src/algorithms/sets/power-set) - to'plamning barcha kichik to'plamlari (bitwise, backtracking va kaskadli echimlar)
  - `A` [Permutatsiyalar](src/algorithms/sets/permutations) (takroriyalash bilan va takroriyalashsiz)
  - `A` [Kombinatsiyalar](src/algorithms/sets/combinations) (takroriyalash bilan va takroriyalashsiz)
  - `A` [Eng uzun umumiy ketma-ketlik](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `A` [Eng uzun ortib boruvchi ketma-ketlik](src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Eng qisqa umumiy ketma-ketlik](src/algorithms/sets/shortest-common-supersequence) (SCS)
  - `A` [Knapsack muammosi](src/algorithms/sets/knapsack-problem) - "0/1" va "Bir-biriga bog'lanmagan"
  - `A` [Maksimal kichik massiv](src/algorithms/sets/maximum-subarray) - Toʻliq kuch va dinamik dasturlash (Kadane usuli) versiyalari
  - `A` [Kombinatsiya yig'indisi](src/algorithms/sets/combination-sum) - ma'lum summani tashkil etuvchi barcha kombinatsiyalarni topish
- **Stringlar**
  - `B` [Hamming masofasi](src/algorithms/string/hamming-distance) - belgilarning bir-biridan farq qiladigan pozitsiyalar soni
  - `B` [Palindrom](src/algorithms/string/palindrome) - satrning teskari tomoni ham bir xil ekanligini tekshirish
  - `A` [Levenshtein masofasi](src/algorithms/string/levenshtein-distance) - ikki ketma-ketlik o'rtasidagi minimal tahrirlash masofasi
  - `A` [Knuth–Morris–Pratt Algoritmi](src/algorithms/string/knuth-morris-pratt) (KMP Algoritmi) - kichik qatorlarni qidirish (mosh keluvchi naqshni qidirish)
  - `A` [Z Algoritmi](src/algorithms/string/z-algorithm) - kichik qatorlarni qidirish (mosh keluvchi naqshni qidirish)
  - `A` [Rabin Karp Algoritmi](src/algorithms/string/rabin-karp) - kichik qatorlarni qidirish
  - `A` [Eng uzun umumiy kichik matn](src/algorithms/string/longest-common-substring)
  - `A` [Regulyar ifoda moslashuvi](src/algorithms/string/regular-expression-matching) (RegEx)
- **Qidiruvlar**
  - `B` [Linear qidirish](src/algorithms/search/linear-search)
  - `B` [Jump qidirish](src/algorithms/search/jump-search) (yoki Blok qidirish) - saralangan qatorda qidirish
  - `B` [Ikkilik qidirish](src/algorithms/search/binary-search) - saralangan qatorda qidirish
  - `B` [Interpolatsiya qidirish](src/algorithms/search/interpolation-search) - bir tekis taqsimlangan saralangan qatorda qidirish
- **Tartiblash**
  - `B` [Pufakcha tartiblash](src/algorithms/sorting/bubble-sort)
  - `B` [Tanlash tartibi](src/algorithms/sorting/selection-sort)
  - `B` [Kiritish tartibi](src/algorithms/sorting/insertion-sort)
  - `B` [Heap tartibi](src/algorithms/sorting/heap-sort)
  - `B` [Birlashtirish tartibi](src/algorithms/sorting/merge-sort)
  - `B` [Tezkor saralash](src/algorithms/sorting/quick-sort) - joyida va joyida bo'lmagan amalga oshirish
  - `B` [Shell tartiblash](src/algorithms/sorting/shell-sort)
  - `B` [Sanash tartibi](src/algorithms/sorting/counting-sort)
  - `B` [Radiksli tartiblash](src/algorithms/sorting/radix-sort)
  - `B` [Bucket tartiblash](src/algorithms/sorting/bucket-sort)
- **Bog'langan ro'yhatlar**
  - `B` [To'g'ri traversal](src/algorithms/linked-list/traversal)
  - `B` [Teskari traversal](src/algorithms/linked-list/reverse-traversal)
- **Daraxtlar**
  - `B` [Birinchi-pastga qarab qidirish](src/algorithms/tree/depth-first-search) (Depth-First Search)
  - `B` [Birinchi-yonga qarab qidirish](src/algorithms/tree/breadth-first-search) (Breadth-First Search)
- **Grafiklar**
  - `B` [Birinchi-pastga qarab qidirish](src/algorithms/graph/depth-first-search) (Depth-First Search)
  - `B` [Birinchi-yonga qarab qidirish](src/algorithms/graph/breadth-first-search) (Breadth-First Search)
  - `B` [Kruskal Algoritmi](src/algorithms/graph/kruskal) - og'irlikdagi yo'naltirilmagan grafik uchun Minimal kengayuvchi daraxtni (MST) topish
  - `A` [Dijkstra Algoritmi](src/algorithms/graph/dijkstra) - grafikning bir cho'qqisidan qolgan barcha nuqtalarga eng qisqa yo'llarni topish
  - `A` [Bellman-Ford Algoritmi](src/algorithms/graph/bellman-ford) - grafikning bir cho'qqisidan qolgan barcha nuqtalarga eng qisqa yo'llarni topish
  - `A` [Floyd-Warshall Algoritmi](src/algorithms/graph/floyd-warshall) - grafikning barcha uchlari orasidagi eng qisqa masofalarni topish
  - `A` [Siklni aniqlash](src/algorithms/graph/detect-cycle) - yo'naltirilgan va yo'naltirilmagan grafiklar uchun (DFS va Disjoint Set-ga asoslangan versiyalar)
  - `A` [Prim Algoritmi](src/algorithms/graph/prim) - og'irlikdagi yo'naltirilmagan grafik uchun Minimal kengayuvchi daraxtni (MST) topish
  - `A` [Topologik saralash](src/algorithms/graph/topological-sorting) - DFS metodi
  - `A` [Artikulyatsiya nuqtalari](src/algorithms/graph/articulation-points) - Tarjan algoritmi (DFS asosida)
  - `A` [Ko'priklar](src/algorithms/graph/bridges) - DFS asosidagi algoritm
  - `A` [Eyler yo'li va Eyler sxemasi](src/algorithms/graph/eulerian-path) - Fleury algoritmi - Har bir chekkaga bir marta tashrif buyurish
  - `A` [Gamilton sikli](src/algorithms/graph/hamiltonian-cycle) - Har bir cho'qqiga bir marta tashrif buyurish
  - `A` [Kuchli bog'langan komponentlar](src/algorithms/graph/strongly-connected-components) - Kosaraju algoritmi
  - `A` [Sayohatchi sotuvchi muammosi](src/algorithms/graph/travelling-salesman) - har bir shaharga tashrif buyuradigan va kelib chiqqan shaharga qaytib keladigan eng qisqa yo'l
- **Kriptografiya**
  - `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - polinomga asoslangan hash funktsiyasi
  - `B` [Rail Fence Cipher](src/algorithms/cryptography/rail-fence-cipher) - xabarlarni kodlash uchun transpozitsiya shifrlash algoritmi
  - `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - oddiy almashtirish shifridir
  - `B` [Hill Cipher](src/algorithms/cryptography/hill-cipher) - chiziqli algebraga asoslangan almashtirish shifri
- **Machine Learning**
  - `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - Mashinalar aslida qanday o'rganishi mumkinligini ko'rsatadigan 7 ta oddiy JS funksiyasi (forward/backward tarqalish)
  - `B` [k-NN](src/algorithms/ml/knn) - eng yaqin qo'shnilarni tasniflash algoritmi
  - `B` [k-Means](src/algorithms/ml/k-means) - k-Means kalsterlash algoritmi
- **Tasvirga ishlov berish**
  - `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - kontentga moslashuvchan rasm o'lchamini o'zgartirish algoritmi
- **Statistikalar**
  - `B` [Weighted Random](src/algorithms/statistics/weighted-random) - elementlarning og'irligi asosida ro'yxatdan tasodifiy elementni tanlash
- **Evolyutsion algoritmlar**
  - `A` [Genetik algoritm](https://github.com/trekhleb/self-parking-car-evolution) - avtoturargohni o'rgatish uchun genetik algoritm qanday qo'llanilishiga misol.
- **Kategoriyasiz**
  - `B` [Xanoy minorasi](src/algorithms/uncategorized/hanoi-tower)
  - `B` [Kvadrat matritsaning aylanishi](src/algorithms/uncategorized/square-matrix-rotation) - joyidagi algoritm
  - `B` [Sakrash o'yini](src/algorithms/uncategorized/jump-game) - orqaga qaytish, dinamik dasturlash (yuqoridan pastga + pastdan yuqoriga) va ochko'z misollar
  - `B` [Noyob yo'llar](src/algorithms/uncategorized/unique-paths) - orqaga qaytish, dinamik dasturlash va Paskal uchburchagiga asoslangan misolla
  - `B` [Yomg'ir teraslari](src/algorithms/uncategorized/rain-terraces) - yomg'ir suvini ushlab turish muammosi (dinamik dasturlash va qo'pol kuch versiyalari)
  - `B` [Rekursiv zinapoya](src/algorithms/uncategorized/recursive-staircase) - yuqoriga chiqish yo'llari sonini hisoblash (4 ta echim)
  - `B` [Aksiyalarni sotib olish va sotish uchun eng yaxshi vaqt](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - bo'linib-zabt etish va bir marta o'tish misollari
  - `A` [N-Queens Muommosi](src/algorithms/uncategorized/n-queens)
  - `A` [Ritsar sayohati](src/algorithms/uncategorized/knight-tour)

### Paradigma bo'yicha algoritmlar

Algorithmic paradigm - bu algoritmlar sinfini loyihalashtirishga asos bo'lib xizmat qiladigan umumiy usul yoki yondashuv. Bu algoritm tushunchasidan yuqori darajadagi abstraktsiya bo'lib, algoritm kompyuter dasturi tushunchasidan yuqori darajadagi abstraktsiya bo'lgani kabi.

- **Brute Force** - barcha imkoniyatlarni ko'rib chiqib va eng yaxshi echimni tanlash
  - `B` [Chiziqli qidirish](src/algorithms/search/linear-search)
  - `B` [Yomg'irli teraslar](src/algorithms/uncategorized/rain-terraces) - yomg'ir suvini to'plash muammosi
  - `B` [Rekursiv zinapoya](src/algorithms/uncategorized/recursive-staircase) - cho'qqiga chiqish yo'llari sonini hisoblash
  - `A` [Maksimal kichik massiv](src/algorithms/sets/maximum-subarray)
  - `A` [Sayohatchi sotuvchi muammosi](src/algorithms/graph/travelling-salesman) - har bir shaharga tashrif buyuradigan va kelib chiqqan shaharga qaytib keladigan eng qisqa yo'l
  - `A` [Diskret Furye transformatsiyasi](src/algorithms/math/fourier-transform) - vaqt funksiyasini (signalni) uni tashkil etuvchi chastotalarga ajratish
- **Greedy** - kelajakni o'ylamasdan, hozirgi vaqtda eng yaxshi variantni tanlash
  - `B` [Sakrash o'yini](src/algorithms/uncategorized/jump-game)
  - `A` [Bog'lanmagan yukxalta muammosi](src/algorithms/sets/knapsack-problem)
  - `A` [Dijkstra Algoritmi](src/algorithms/graph/dijkstra) - grafikning bir cho'qqisidan qolgan barcha nuqtalarga eng qisqa yo'llarni topish
  - `A` [Prim Algoritmi](src/algorithms/graph/prim) - og'irlikdagi yo'naltirilmagan grafik uchun Minimal kengayuvchi daraxtni (MST) topish
  - `A` [Kruskal Algoritmi](src/algorithms/graph/kruskal) - og'irlikdagi yo'naltirilmagan grafik uchun Minimal kengayuvchi daraxtni (MST) topish
- **Divide and Conquer** - muammoni kichikroq qismlarga bo'lib va keyin bu qismlarni hal qilish

  - `B` [Ikkilik qidiruv](src/algorithms/search/binary-search)
  - `B` [Xanoy minorasi](src/algorithms/uncategorized/hanoi-tower)
  - `B` [Paskal uchburchagi](src/algorithms/math/pascal-triangle)
  - `B` [Evklid Algoritmi](src/algorithms/math/euclidean-algorithm) - eng katta umumiy bo'luvchini (EKUB) hisoblash
  - `B` [Birlashtirish tartibi](src/algorithms/sorting/merge-sort)
  - `B` [Tezkor saralash](src/algorithms/sorting/quick-sort)
  - `B` [Birinchi-pastga qarab qidirish daraxti](src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Birinchi-pastga qarab qidirish grafigi](src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Matritsalar](src/algorithms/math/matrix) - turli shakldagi matritsalarni hosil qilish va kesib o'tish
  - `B` [Sakrash o'yini](src/algorithms/uncategorized/jump-game)
  - `B` [Tez ko'tarish](src/algorithms/math/fast-powering)
  - `B` [Aksiyalarni sotib olish va sotish uchun eng yaxshi vaqt](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - bo'linib-zabt etish va bir marta o'tish misollari
  - `A` [Permutatsiyalar](src/algorithms/sets/permutations) (takroriyalash bilan va takroriyalashsiz)
  - `A` [Kombinatsiyalar](src/algorithms/sets/combinations) (takroriyalash bilan va takroriyalashsiz)
  - `A` [Maksimal kichik massiv](src/algorithms/sets/maximum-subarray)

- **Dinamik dasturlash** - ilgari topilgan kichik yechimlar yordamida yechim yaratish
  - `B` [Fibonachchi raqam](src/algorithms/math/fibonacci)
  - `B` [Sakrash o'yini](src/algorithms/uncategorized/jump-game)
  - `B` [Noyob yo'llar](src/algorithms/uncategorized/unique-paths)
  - `B` [Yomg'ir teraslari](src/algorithms/uncategorized/rain-terraces) - yomg'ir suvini to'plash muammosi
  - `B` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
  - `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - kontentga moslashuvchan rasm o'lchamini o'zgartirish algoritmi
  - `A` [Levenshtein masofasi](src/algorithms/string/levenshtein-distance) - ikki ketma-ketlik o'rtasidagi minimal tahrirlash masofasi
  - `A` [Eng uzun umumiy ketma-ketlik](src/algorithms/sets/longest-common-subsequence) (LCS)
  - `A` [Eng uzun umumiy kichik matn](src/algorithms/string/longest-common-substring)
  - `A` [Eng uzun ortib boruvchi ketma-ketlik](src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Eng qisqa umumiy ketma-ketlik](src/algorithms/sets/shortest-common-supersequence)
  - `A` [0/1 Knapsak muommosi](src/algorithms/sets/knapsack-problem)
  - `A` [Butun sonlarni bo'lish](src/algorithms/math/integer-partition)
  - `A` [Maksimal kichik massiv](src/algorithms/sets/maximum-subarray)
  - `A` [Bellman-Ford Algoritmi](src/algorithms/graph/bellman-ford) - grafikning bir cho'qqisidan qolgan barcha nuqtalarga eng qisqa yo'llarni topish
  - `A` [Floyd-Warshall Algoritmi](src/algorithms/graph/floyd-warshall) -grafikning barcha uchlari orasidagi eng qisqa masofalarni topish
  - `A` [Regulyar ifoda moslashuvi](src/algorithms/string/regular-expression-matching)
- **Backtracking** - brute forcega o'xshab, barcha mumkin bo'lgan yechimlarni generatsiya qilishga harakat qiladi, lekin har safar keyingi yechimni yaratganingizda, yechim barcha shartlarga javob beradimi yoki yo'qligini tekshirasiz va shundan keyingina keyingi yechimlarni ishlab chiqarishni davom ettirasiz. Aks holda, orqaga qaytib, yechim topishning boshqa yo'liga o'tasiz. Odatda state-space ning DFS-qidiruvi ishlatiladi.
  - `B` [Sakrash o'yini](src/algorithms/uncategorized/jump-game)
  - `B` [Noyob yo'llar](src/algorithms/uncategorized/unique-paths)
  - `B` [Power Set](src/algorithms/sets/power-set) - to'plamning barcha kichik to'plamlari
  - `A` [Gamilton sikli](src/algorithms/graph/hamiltonian-cycle) - Har bir cho'qqiga bir marta tashrif buyurish
  - `A` [N-Queens muommosi](src/algorithms/uncategorized/n-queens)
  - `A` [Ritsar sayohati](src/algorithms/uncategorized/knight-tour)
  - `A` [Kombinatsiya yig'indisi](src/algorithms/sets/combination-sum) - ma'lum summani tashkil etuvchi barcha kombinatsiyalarni topish
- **Branch & Bound** - shu paytgacha topilgan eng arzon echimdan kattaroq xarajatlarga ega qisman echimlarni bekor qilish uchun, backtracking qidiruvining har bir bosqichida topilgan eng arzon echimni eslab qoling va shu paytgacha topilgan eng arzon yechim narxidan muammoni eng kam xarajatli yechim narxining past chegarasi sifatida foydalaning. Odatda state-space daraxtining DFS o'tishi bilan birgalikda BFS traversal qo'llaniladi.

## Ushbu repozitoriyadan qanday foydalanish kerak

**Barcha dependensiylarni o'rnating**

```
npm install
```

**ESLint ni ishga tushiring**

Kod sifatini tekshirish uchun ESLint ni ishga tushirishingiz mumkin.

```
npm run lint
```

**Barcha testlarni ishga tushuring**

```
npm test
```

**Testlarni nom bo'yicha ishga tushirish**

```
npm test -- 'LinkedList'
```

**Muammolarni bartaraf qilish (Troubleshooting)**

Agar linting yoki sinov muvaffaqiyatsiz bo'lsa, `node_modules` papkasini o'chirib, npm paketlarini qayta o'rnatishga harakat qiling:

```
rm -rf ./node_modules
npm i
```

Shuningdek, to'g'ri Node versiyasidan foydalanayotganingizga ishonch hosil qiling (`>=16`). Agar Node versiyasini boshqarish uchun [nvm](https://github.com/nvm-sh/nvm) dan foydalanayotgan bo'lsangiz, loyihaning ildiz papkasidan `nvm use` ni ishga tushiring va to'g'ri versiya tanlanadi.

**O'yin maydoni (Playground)**

`./src/playground/playground.js` faylida ma'lumotlar strukturalari va algoritmlar bilan o'ynashingiz, `./src/playground/test/playground.test.js` faylida esa ular uchun testlar yozishingiz mumkin.

Shundan so'ng, playground kodingiz kutilgandek ishlashini tekshirish uchun quyidagi buyruqni ishga tushirishingiz kifoya:

```
npm test -- 'playground'
```

## Foydali ma'lumotlar

### Manbalar

- [▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 Data Structure Sketches](https://okso.app/showcase/data-structures)

### Big O Notation

_Big O notation_ algoritmlarni kirish hajmi oshgani sayin ularning ishlash vaqti yoki bo'sh joy talablari qanday o'sishiga qarab tasniflash uchun ishlatiladi. Quyidagi jadvalda siz Big O notatsiyasida ko'rsatilgan algoritmlarning o'sishining eng keng tarqalgan tartiblarini topishingiz mumkin.

![Big O grafiklar](./assets/big-o-graph.png)

Manba: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Quyida eng ko'p qo'llaniladigan Big O notatsiyalarining ro'yxati va ularning kirish ma'lumotlarining turli o'lchamlariga nisbatan ishlashini taqqoslash keltirilgan.

| Big O Notatsiya | Turi         | 10 ta element uchun hisob-kitoblar | 100 ta element uchun hisob-kitoblar | 1000 ta element uchun hisob-kitoblar |
| --------------- | ------------ | ---------------------------------- | ----------------------------------- | ------------------------------------ |
| **O(1)**        | O'zgarmas    | 1                                  | 1                                   | 1                                    |
| **O(log N)**    | Logarifmik   | 3                                  | 6                                   | 9                                    |
| **O(N)**        | Chiziqli     | 10                                 | 100                                 | 1000                                 |
| **O(N log N)**  | n log(n)     | 30                                 | 600                                 | 9000                                 |
| **O(N^2)**      | Kvadrat      | 100                                | 10000                               | 1000000                              |
| **O(2^N)**      | Eksponensial | 1024                               | 1.26e+29                            | 1.07e+301                            |
| **O(N!)**       | Faktorial    | 3628800                            | 9.3e+157                            | 4.02e+2567                           |

### Ma'lumotlar tuzilmalarining operatsiyalari murakkabligi

| Ma'lumotlar tuzilmalari     | Kirish | Qidirish | Kiritish | O'chirish | Izohlar                                                    |
| --------------------------- | :----: | :------: | :------: | :-------: | :--------------------------------------------------------- |
| **Massiv**                  |   1    |    n     |    n     |     n     |                                                            |
| **Stak**                    |   n    |    n     |    1     |     1     |                                                            |
| **Navbat**                  |   n    |    n     |    1     |     1     |                                                            |
| **Bog'langan ro'yhat**      |   n    |    n     |    1     |     n     |                                                            |
| **Hash jadval**             |   -    |    n     |    n     |     n     | Mukammal xash funksiyasi bo'lsa, xarajatlar O (1) bo'ladi. |
| **Ikkilik qidiruv daraxti** |   n    |    n     |    n     |     n     | Balanslangan daraxt narxida O(log(n)) bo'ladi.             |
| **B-daraxti**               | log(n) |  log(n)  |  log(n)  |  log(n)   |                                                            |
| **Qizil-qora daraxt**       | log(n) |  log(n)  |  log(n)  |  log(n)   |                                                            |
| **AVL Daraxt**              | log(n) |  log(n)  |  log(n)  |  log(n)   |                                                            |
| **Bloom filtri**            |   -    |    1     |    1     |     -     | Qidiruv paytida noto'g'ri pozitivlar bo'lishi mumkin       |

### Massivlarni saralash algoritmlarining murakkabligi

| Nomi                      |  Eng yaxshi   |          O'rta          |          Eng yomon          | Xotira | Barqaror | Izohlar                                                                      |
| ------------------------- | :-----------: | :---------------------: | :-------------------------: | :----: | :------: | :--------------------------------------------------------------------------- |
| **Pufakcha tartiblash**   |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |    Ha    |                                                                              |
| **Kiritish tartibi**      |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |    Ha    |                                                                              |
| **Tanlash tartibi**       | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |   Yo'q   |                                                                              |
| **Heap tartibi**          | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1    |   Yo'q   |                                                                              |
| **Birlashtirish tartibi** | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n    |    Ha    |                                                                              |
| **Tezkor saralash**       | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n) |   Yo'q   | Tezkor saralash odatda O(log(n)) stek maydoni bilan joyida amalga oshiriladi |
| **Shell tartiblash**      | n&nbsp;log(n) | depends on gap sequence | n&nbsp;(log(n))<sup>2</sup> |   1    |   Yo'q   |                                                                              |
| **Sanash tartibi**        |     n + r     |          n + r          |            n + r            | n + r  |    Ha    | r - massivdagi eng katta raqam                                               |
| **Radiksli tartiblash**   |    n \* k     |         n \* k          |           n \* k            | n + k  |    Ha    | k - eng uzun kalitning uzunligi                                              |

## Loyihani qo'llab-quvvatlovchilar

> Siz ushbu loyihani ❤️️ [GitHub](https://github.com/sponsors/trekhleb) yoki ❤️️ [Patreon](https://www.patreon.com/trekhleb) orqali qo'llab-quvvatlashingiz mumkin.

[Ushbu loyihani qo'llab-quvvatlagan odamlar](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1`

## Muallif

[@trekhleb](https://trekhleb.dev)

A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
