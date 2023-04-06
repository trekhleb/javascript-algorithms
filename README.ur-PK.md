# جاوا اسکرپٹ الگورتھم اور ڈیٹا سٹرکچرز

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

اس مخزن میں کئی مشہور الگورتھمز اور ڈیٹا سٹرکچرز کے جاوا اسکرپٹ پر مبنی مثالیں شامل ہیں۔

ہر الگورتھم اور ڈیٹا سٹرکچر کا اپنا علیحدہ README فائل ہے جس میں متعلقہ وضاحت اور مزید پڑھنے کے لنکس شامل ہیں (جن میں یوٹیوب کے ویڈیوز شامل ہیں۔)

_دیگر زبانوں میں پڑھیں:_
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
[_Deutsch_](README.de-DE.md)

*☝ نوٹ کریں کہ یہ پروجیکٹ صرف سیکھنے اور تحقیق کے مقاصد کے لئے استعمال کیا جاسکتا ہے، اور یہ **انتہائی ضروری نہیں** کہ اسے پیداوار کے لئے استعمال کیا جائے۔*

## ڈیٹا ساختاریں

ایک ڈیٹا ساختار ایک خاص طریقے سے ڈیٹا کو منظم اور کمپیوٹر میں ذخیرہ کرنے کا ایک طریقہ ہے تاکہ اسے انتہائی تیزی سے دسترسی حاصل کرنا اور ترمیم کرنا ممکن ہو۔ بالکل درست طور پر، ایک ڈیٹا ساختار ایک ڈیٹا کی مجموعہ قیمتیں ہوتی ہیں، جن کے درمیان رشتے ہوتے ہیں، اور جن پر عمل یا کارکردگیاں لاگو کی جا سکتی ہیں۔

`B` - شروع کرنے والوں کے لئے، `A` - ایڈوانسڈ

* `B` [Linked List](src/data-structures/linked-list) (لنکڈ لسٹ)
* `B` [Doubly Linked List](src/data-structures/doubly-linked-list) (ڈبلی لنکڈ لسٹ)
* `B` [Queue](src/data-structures/queue) (کیو)
* `B` [Stack](src/data-structures/stack) (اسٹیک)
* `B` [Hash Table](src/data-structures/hash-table) (ہیش ٹیبل)
* `B` [Heap](src/data-structures/heap) - max and min heap versions (ہیپ)
* `B` [Priority Queue](src/data-structures/priority-queue) (ترجیح کی قطار)
* `A` [Trie](src/data-structures/trie) (ٹرائی)
* `A` [Tree](src/data-structures/tree) (ٹری)
  * `A` [Binary Search Tree](src/data-structures/tree/binary-search-tree) (بائنری تلاش کی گئی ٹری)
  * `A` [AVL Tree](src/data-structures/tree/avl-tree) (AVL ٹری)
  * `A` [Red-Black Tree](src/data-structures/tree/red-black-tree) (ریڈ بلیک ٹری)
  * `A` [Segment Tree](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples (سیگمنٹ ٹری)
  * `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree) (فینوک ٹری)
* `A` [Graph](src/data-structures/graph) (ترسیلی اور غیر ترسیلی دونوں)
* `A` [Disjoint Set](src/data-structures/disjoint-set) - ایک یونین-فائنڈ ڈیٹا سٹرکچر یا مرج-فائنڈ سیٹ
* `A` [Bloom Filter](src/data-structures/bloom-filter)
* `A` [LRU Cache](src/data-structures/lru-cache/) - کم استعمال ہونے والا کیش

## الگورتھم

ایک الگورتھم کسی مسئلے کو حل کرنے کے لئے واضح ہدایات کا ایک مشخصہ ہوتا ہے۔ یہ
ایک سیکوئنس آف آپریشنز کی وضاحت کرنے والے قواعد کا مجموعہ ہے۔

`B` - مبتدی، `A` - اعلی

### موضوع کے لحاظ سے الگورتھمز

* **Maths**
  * `B` [بٹ منیپولیشن](src/algorithms/math/bits) - بٹس کا ترتیب ، قیمت کا حصول / تبدیلی / کٹوتی، دو سے ضرب / تقسیم، منفی بنانا، وغیرہ
  * `B` [بائنری فلوٹنگ پوائنٹ](src/algorithms/math/binary-floating-point) - فلوٹنگ پوائنٹ نمبرز کا بائنری نظام میں ترجمہ
  * `B` [فیکٹوریل](src/algorithms/math/factorial)
  * `B` [فیبوناچی نمبر](src/algorithms/math/fibonacci) - کلاسیک اور بند شدہ روپ
  * `B` [بارہا اجزاء](src/algorithms/math/prime-factors) - بارہا اجزاء تلاش کرنا اور ہارڈی - رامانوجن کی مساوات کے استعمال سے ان کی شماریاتی تعداد کا حصول
  * `B` [پرائم پرکھ](src/algorithms/math/primality-test) (ٹرائل ڈویژن میتھڈ)
  * `B` [یوکلیدی فقرہ](src/algorithms/math/euclidean-algorithm) - سب سے بڑا مشترکہ مضرب (GCD) کا حساب لگانا
  * `B` [کم سے کم مشترکہ ضرب](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [سوئیچر کے زریعے](src/algorithms/math/sieve-of-eratosthenes) - دیے گئے حد تک تمام پرائم نمبر تلاش کرنا
  * `B` [دو کا طاقت ہونا](src/algorithms/math/is-power-of-two) - جانچیں کہ کیا عدد دو کی طاقت ہے (نائیو اور بٹ وائز الگورتھمز)
  * `B` [پاسکال کا تکون](src/algorithms/math/pascal-triangle)
  * `B` [کمپلیکس نمبر](src/algorithms/math/complex-number) - کمپلیکس نمبرز اور ان کے بنیادی عملیات
  * `B` [Radian & Degree](src/algorithms/math/radian) - ریڈیئن سے ڈگری اور اس کے برعکس تبادلہ
  * `B` [Fast Powering](src/algorithms/math/fast-powering) 
  * `B` [Horner's method](src/algorithms/math/horner-method) - پولینومیل کی قیمت کا حساب
  * `B` [Matrices](src/algorithms/math/matrix) - میٹرکس اور بنیادی میٹرکس کے عمل (ضرب، تراکیب، وغیرہ)
  * `B` [Euclidean Distance](src/algorithms/math/euclidean-distance) - دو نقطوں / سمتیوں / میٹرکس کے درمیان فاصلہ
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Square Root](src/algorithms/math/square-root) - نیوٹن کا طریقہ، جذر کا حساب
  * `A` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - ایک ن-گوں پر مبنی تقریبی π کی حساب کشیاں
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - وقت کے تفاعل کو ان تعداد کے تعددوں میں تقسیم کریں جو اس کو بناتے ہیں (ایک سگنل)
* **Sets**
  * `B` [کارٹیسیائی ضرب](src/algorithms/sets/cartesian-product) - کئی سیٹوں کا ضرب
  * `B` [فشر ییٹس شفل](src/algorithms/sets/fisher-yates) - محدود ترتیب کا اختیاری طریقہ
  * `A` [پاور سیٹ](src/algorithms/sets/power-set) - سیٹ کے تمام ذیلی سیٹ (بٹ وائز، واپس جانے والے حل، اور کیسکیڈنگ حل)
  * `A` [ترتیبات](src/algorithms/sets/permutations) (تکرار کے ساتھ اور بغیر)
  * `A` [کمبنیشن](src/algorithms/sets/combinations) (تکرار کے ساتھ اور بغیر)
  * `A` [لانگسٹ کامن سبسیکوئنس](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [لانگسٹ انکریسنگ سبسیکوئنس](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [شارٹسٹ کامن سپر سیکوئنس](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [نظرانداز کرنے والی چیزوں کی سب سے بڑی مجموعہ](src/algorithms/sets/knapsack-problem) - "0/1" اور "Unbound" کے
  * `A` [زیادہ سے زیادہ ذیلی سیکوئنس](src/algorithms/sets/maximum-subarray) - "بھرتا فورس" اور "ڈائنیمک پروگرامنگ" (کادینز) ورژنز
  * `A` [کمبینیشن کا مجموعہ](src/algorithms/sets/combination-sum) - مخصوص مجموعہ کے تمام کمبینیشنز تلاش کریں
* **Strings**
  * `B` [ہیمنگ فاصلہ](src/algorithms/string/hamming-distance) - جہاں حروف کے علامتوں میں فرق ہوتا ہے وہاں کی جگہوں کی تعداد
  * `B` [پالنڈروم](src/algorithms/string/palindrome) - چیز جو الٹے سے پڑھنے پر بھی وہی رہتی ہے
  * `A` [لیونشٹائن فاصلہ](src/algorithms/string/levenshtein-distance) - دو ترتیبوں کے درمیان کم سے کم ترمیمی فاصلہ
  * `A` [نوٹھ-مورس-پریٹ الگورتھم](src/algorithms/string/knuth-morris-pratt) (KMP الگورتھم) - ذیلی ترتیب تلاش (پیٹرن میچنگ)
  * `A` [Z الگورتھم](src/algorithms/string/z-algorithm) - ذیلی ترتیب تلاش (پیٹرن میچنگ)
  * `A` [رابن کارپ الگورتھم](src/algorithms/string/rabin-karp) - ذیلی ترتیب تلاش
  * `A` [سب سے لمبا مشترکہ ذیلی ترتیب](src/algorithms/string/longest-common-substring)
  * `A` [ریگولر ایکسپریشن میچنگ](src/algorithms/string/regular-expression-matching)
* **Searches**
  * `B` [خطی تلاش](src/algorithms/search/linear-search)
  * `B` [جمپ تلاش](src/algorithms/search/jump-search) (یا بلاک تلاش) - تلاش در آرایه‌های مرتب شده
  * `B` [دودوئی تلاش](src/algorithms/search/binary-search) - تلاش در آرایه‌های مرتب شده
  * `B` [تلاش تعاملی](src/algorithms/search/interpolation-search) - تلاش در آرایه‌های مرتب شده و بر پایه توزیع یکنواخت
* **Sorting**
  * `B` [ببل سارٹ](src/algorithms/sorting/bubble-sort)
  * `B` [انتخابی سارٹ](src/algorithms/sorting/selection-sort)
  * `B` [داخل کرنے والی سارٹ](src/algorithms/sorting/insertion-sort)
  * `B` [ہیپ سارٹ](src/algorithms/sorting/heap-sort)
  * `B` [مرج سارٹ](src/algorithms/sorting/merge-sort)
  * `B` [کوئک سارٹ](src/algorithms/sorting/quick-sort) - ان پلیس اور غیر ان پلیس ترتیب دینے کے اجراءات
  * `B` [شیل سارٹ](src/algorithms/sorting/shell-sort)
  * `B` [گنتی سارٹ](src/algorithms/sorting/counting-sort)
  * `B` [ریڈکس سارٹ](src/algorithms/sorting/radix-sort)
  * `B` [بکٹ سارٹ](src/algorithms/sorting/bucket-sort)
* **Linked Lists**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Trees**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
  * `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) -  وزن دار اور بے جانبدار گراف کے لئے کم سے کم درخت کے تلاش کے لئے
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) -  ایک ورٹیکس سے تمام ورٹیس کی کم تر راہ کے تلاش کے لئے
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - ایک ورٹیکس سے تمام ورٹیس کی کم تر راہ کے تلاش کے لئے
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - تمام جوڑوں کے درمیان کم تر راہ کی تلاش
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) -  سمت نہیں جانبدار گراف کے لئے (DFS اور Disjoint Set مرکزی ورژن)
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) -  وزن دار اور بے جانبدار گراف کے لئے کم سے کم درخت کے تلاش کے لئے
  * `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS میتھڈ
  * `A` [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - ہر ایج کا دورہ کریں 
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - ہر ورٹیکس کا دورہ کریں
  * `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - ہر شہر کو دورہ کرنے اور اصل شہر تک واپسی کے لئے کم سے کم راہ کا تلاش کریں
* **Cryptography**
  * `B` [پولینومیل ہیش](src/algorithms/cryptography/polynomial-hash) - پولینوم پر مبنی رولنگ ہیش تفاعل
  * `B` [ریل فینس سائفر](src/algorithms/cryptography/rail-fence-cipher) - پیغامات کو کوڈ کرنے کے لئے ایک ٹرانسپوزیشن سائفر الگورتھم
  * `B` [سیزر سائفر](src/algorithms/cryptography/caesar-cipher) - سادہ ادل بدل سائفر
  * `B` [ہل سائفر](src/algorithms/cryptography/hill-cipher) - خطی الجبرا پر مبنی ادل بدل سائفر
* **Machine Learning**
  * `B` [نینو نیوران](https://github.com/trekhleb/nano-neuron) - مشین کیسے سیکھتی ہے کا عینی مثال (فارورڈ/بیک وارڈ پروپیگیشن)
  * `B` [k-NN](src/algorithms/ml/knn) - k-نزدیک ترین پڑوسی کلاسیفکیشن الگورتھم
  * `B` [k-Means](src/algorithms/ml/k-means) - k-مینز کلسٹرنگ الگورتھم
* **Image Processing**
  * `B` [سیم کارونگ](src/algorithms/image-processing/seam-carving) - مواد کے مطابقت سے تصویر کا سائز بدلنے کا الگورتھم
* **Statistics**
  * `B` [ویٹڈ رینڈم](src/algorithms/statistics/weighted-random) - وزنوں کے اساس پر فہرست سے رینڈم آئٹم منتخب کریں
* **Evolutionary algorithms**
  * `A` [جینیٹک الگورتھم](https://github.com/trekhleb/self-parking-car-evolution) - جینیٹک الگورتھم کیسے استعمال کیا جا سکتا ہے خود کار پارکنگ کی تربیت کے لئے کا ایک مثال
* **Uncategorized**
  * `B` [ٹاور آف ہانوئی](src/algorithms/uncategorized/hanoi-tower)
  * `B` [سکوائر میٹرکس روٹیشن](src/algorithms/uncategorized/square-matrix-rotation) - ایک دم ہی الگورتھم
  * `B` [جمپ گیم](src/algorithms/uncategorized/jump-game) - واپسی، ڈائنامک پروگرامنگ (ٹاپ ڈاؤن + بوٹم اپ) اور لالچی مثالیں
  * `B` [یونیک پاتھز](src/algorithms/uncategorized/unique-paths) - واپسی، ڈائنامک پروگرامنگ اور پاسکل کی تکیہ پر مبنی مثالیں
  * `B` [رین ٹیریسز](src/algorithms/uncategorized/rain-terraces) - بارش کے پانی کا مسئلہ (ڈائنامک پروگرامنگ اور بریوٹ فورس ورژنز)
  * `B` [ریکرسوئیو اسٹیئر کیس](src/algorithms/uncategorized/recursive-staircase) - اوپر پہنچنے کے طریقوں کی تعداد کا حساب لگائیں (4 حل)
  * `B` [بہترین وقت خریدنے اور فروخت کرنے کے لئے](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - تقسیم اور حکمت عملی اور ایک دم گزرنے کے مثالیں
  * `A` [این کوئینز مسئلہ](src/algorithms/uncategorized/n-queens)
  * `A` [کنگھٹے کی سیر](src/algorithms/uncategorized/knight-tour)

### الگورتھمز کی تصوریاتی نظریات

الگورتھم کے طرز پرکار کی نظریہ  ایک جنریک طریقہ یا نظریہ ہے جو الگورتھم کلاس کی ڈیزائن کی بنیاد ہوتا ہے۔ یہ ایک الگورتھم کے تصور سے بالاتر  ایک ایسا امتیاز ہے، جیسے کہ الگورتھم کمپیوٹر پروگرام سے بالاتر ایک تصور ہے۔

* **Brute Force** - تمام ممکنہ حلوں کی نگرانی کریں اور بہترین حل کو منتخب کریں
  * `B` [لینئر تلاش](src/algorithms/search/linear-search)
  * `B` [رین ٹیریسز](src/algorithms/uncategorized/rain-terraces) - پانی کی ٹریپنگ مسئلہ
  * `B` [ریکرسیون سیڑھیاں](src/algorithms/uncategorized/recursive-staircase) - اوپر پہنچنے کے طریقوں کی تعداد کا حساب لگائیں
  * `A` [زیادہ سے زیادہ سب ایرے](src/algorithms/sets/maximum-subarray)
  * `A` [ٹریولنگ سیلزمین مسئلہ](src/algorithms/graph/travelling-salesman) - ہر شہر کو دورانیہ کم سے کم کرتے ہوئے اور واپسی شہر تک کم سے کم دورانیہ والا راستہ
  * `A` [ڈسکریٹ فوریئر بدل](src/algorithms/math/fourier-transform) - وقت کے تفاعل (ایک سگنل) کو ان فریکوئنسوں میں تقسیم کریں جو اسے بناتے ہیں۔
* **Greedy** - موجودہ وقت پر بہترین اختیار کا انتخاب کریں، بغیر مستقبل کے کسی بھی خیال کے
  * `B` [چھلانگ بازی](src/algorithms/uncategorized/jump-game)
  * `A` [بے قید کنپسیک مسئلہ](src/algorithms/sets/knapsack-problem)
  * `A` [ڈائکسٹرا الگورتھم](src/algorithms/graph/dijkstra) - تمام گراف کے ورٹیسز تک کمترین راستہ تلاش کرنا۔
  * `A` [پریم الگورتھم](src/algorithms/graph/prim) - وزن دار بے جانبی گراف کے لئے کم سے کم پھیلاو شجرہ (MST) تلاش کرنا۔
  * `A` [کروسکل الگورتھم](src/algorithms/graph/kruskal) - وزن دار بے جانبی گراف کے لئے کم سے کم پھیلاو شجرہ (MST) تلاش کرنا۔
* **Dynamic Programming** - پہلے حاصل شدہ سب سولیوشنز کا استعمال کرکے حل کو بنانا
  * `B` [فبوناچی نمبر](src/algorithms/math/fibonacci)
  * `B` [جمپ گیم](src/algorithms/uncategorized/jump-game)
  * `B` [یونیک پاس](src/algorithms/uncategorized/unique-paths)
  * `B` [رین ٹیریسز](src/algorithms/uncategorized/rain-terraces) - بارش کے پانی کو قید کرنے والی مسئلہ
  * `B` [ریکرسوی اسٹیئرکیس](src/algorithms/uncategorized/recursive-staircase) - اوپر پہنچنے کے طریقوں کی تعداد کا حساب کریں
  * `B` [سیم کارونگ](src/algorithms/image-processing/seam-carving) - مواد-بخش عکس تبدیلی الگورتھم
  * `A` [لیونشٹائن فاصلہ](src/algorithms/string/levenshtein-distance) - دو ترتیبوں کے درمیان کم سے کم ترمیمی فاصلہ
  * `A` [لانگست کامن سبسیکوئنس](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [لانگست کامن سب سٹرنگ](src/algorithms/string/longest-common-substring)
  * `A` [لانگست انکریسنگ سبسیکوئنس](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [شارٹسٹ کامن سپرسیکوئنس](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 نیٹ بیگ پرابلم](src/algorithms/sets/knapsack-problem)
  * `A` [صحیح تقسیم](src/algorithms/math/integer-partition)
  * `A` [زیادہ سے زیادہ ذیلی ترتیب کا مجموعہ](src/algorithms/sets/maximum-subarray)
  * `A` [بیلمین فورڈ الگورتھم](src/algorithms/graph/bellman-ford) - تمام گراف ورٹیسز تک کا سب سے کم راستہ تلاش کرنا
* **Dynamic Programming** - پہلے حاصل شدہ ذیلی حلوں کا استعمال کرتے ہوئے حل کا تعمیر کریں۔
  * `A` [فلوڈ-وارشل الگورتھم](src/algorithms/graph/floyd-warshall) - تمام جوڑوں کے درمیان کم تر راستے تلاش کریں۔
  * `A` [ریگولر ایکسپریشن میچنگ](src/algorithms/string/regular-expression-matching)
* **Backtracking** - بروتُھ فورس کی طرح، تمام ممکنہ حل تیار کرنے کی کوشش کریں، لیکن ہر بار جب آپ اگلا حل تیار کرتے ہیں تو آپ ٹیسٹ کرتے ہیں کہ کیا یہ تمام شرائط کو پورا کرتا ہے، اور صرف اس صورت آگے بڑھیں جب آپ بعد میں آنے والے حل تیار کرتے ہیں۔ ورنہ، پھر واپس چلیں، اور حل تلاش کرنے کے دوسرے راستے پر جائیں۔ عموماً، حالتی فضا کے ڈی ایف ایس ٹریورسل کا استعمال کیا جاتا ہے۔
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - سیٹ کے تمام ذیلی سیٹس۔
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - ہر ورٹیکس کا ایک بار دورہ کریں۔
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) - ایک خاص کل مجموعہ بنانے والے تمام کنبنیشنز کو تلاش کریں۔
* **Branch & Bound** - ہر وقت بیک ٹریکنگ کے ہر مرحلے پر کم ترین لاگتی حل یاد رکھیں، اور اب تک پائی جانے والی
کم ترین لاگتی حل کی لاگت کو کم ترین لاگت والے حل کی لاگت کی کم سے کم حد کے طور پر استعمال کریں تا کہ انحصار
جو حل ہے جو اب تک حاصل کیا گیا ہے، سے بڑھ کر لاگت کے ساتھ جزوی حل کو ختم کر سکیں۔ عموماً حالات کے DFS ٹریورس کے ساتھ BFS ٹریورس استعمال کیا جاتا ہے۔


## اس ریپازیٹری کا استعمال کیسے کریں

**تمام وابستگیاں انسٹال کریں**

```
npm install
```

**ESLint چلائیں**

آپ کوڈ کی معیار کی جانچ کرنے کے لئے اسے چلانا چاہتے ہوں گے۔

```
npm run lint
```

**تمام ٹیسٹس چلائیں**

```
npm test
```

**نام کے مطابق ٹیسٹس چلائیں**

```
npm test -- 'LinkedList'
```

**مشکلات کے حل**

اگر لنٹنگ یا ٹیسٹنگ ناکام ہو رہی ہے، تو نوڈ_موڈیولز فولڈر کو حذف کرنے اور npm پیکیجز دوبارہ انسٹال کرنے کی کوشش کریں:

```
rm -rf ./node_modules
npm i
```

اِس بات کا اطمینان کر لیں کہ آپ صحیح نوڈ ورژن (>=16) استعمال کر رہے ہیں۔ اگر آپ نوڈ ورژن کی نگرانی کے لیے [nvm](https://github.com/nvm-sh/nvm) استعمال کر رہے ہیں تو آپ پروجیکٹ کی روٹ فولڈر سے `nvm use` کمانڈ کو چلائیں گے اور سیکھے گئے ورژن کو چن لیا جائے گا۔

**Playground**

آپ `./src/playground/playground.js` فائل میں ڈیٹا سٹرکچرز اور الگورتھمز کے ساتھ کھیل سکتے ہیں اور اس کے لیے `./src/playground/__test__/playground.test.js` میں ٹیسٹس لکھ سکتے ہیں۔

پھر صرف مندرجہ ذیل کمانڈ کو چلائیں تاکہ یقین کر لیں کہ آپ کے پلے گراؤنڈ کوڈ کام کرتا ہے یا نہیں:

```
npm test -- 'playground'
```

## مفید معلومات

### حوالے

- [▶ یوٹیوب پر ڈیٹا سٹرکچرز اور الگورتھمز](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 ڈیٹا سٹرکچر سکیچز](https://okso.app/showcase/data-structures)

### بڑا او نوٹیشن

*بڑا او نوٹیشن* استعمال کیا جاتا ہے تاکہ الگورتھم کے چلنے کا وقت یا فضا کے طلبہ کو مدد کی جاسکے جب کسی ان پٹ کی سائز بڑھتی ہے۔ آپ چارٹ میں نیچے سب سے عام الگورتھموں کے طلبہ کے زبردست گرتھ کے حوالے سے جان سکتے ہیں جو بڑا او نوٹیشن میں مخصوص کئے گئے ہیں۔

![Big O graphs](./assets/big-o-graph.png)

مرجع: [Big O Cheat Sheet](http://bigocheatsheet.com/).

نیچے کچھ سب سے زیادہ استعمال ہونے والے بڑا او نوٹیشن کی فہرست اور ان کے پرفارمنس کے مختلف سائز کے ان پٹ ڈیٹا کے ساتھ موازنہ کیا گیا ہے۔

| بڑا او نوٹیشن | قسم        | 10 عناصر کے لئے حسابات | 100 عناصر کے لئے حسابات | 1000 عناصر کے لئے حسابات  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | مستقل    | 1                            | 1                             | 1                               |
| **O(log N)**   | لوگرتھمی | 3                            | 6                             | 9                               |
| **O(N)**       | لکیری      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | کامل ہیش تفاعل کی صورت میں لاگ کی قیمت 1 کے برابر ہوگی۔ |
| **Binary Search Tree**  | n         | n         | n         | n         | متوازن درخت کی صورت میں لاگ کی قیمت n کے لحاظ سے کم ہوگی، یعنی O(log(n))۔ |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | جعلی مثبت جواب تلاش کرتے وقت ممکن ہیں۔ |

### Array Sorting Algorithms Complexity

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

## Project Backers

> آپ اس پروجیکٹ کی حمایت ❤️️ [GitHub](https://github.com/sponsors/trekhleb) یا ❤️️ [Patreon](https://www.patreon.com/trekhleb) کے ذریعے کر سکتے ہیں۔

[ان لوگوں نے اس پروجیکٹ کی حمایت کی ہے](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1`

## مصنف

[@trekhleb](https://trekhleb.dev)

JavaScript اور الگورتھمز کے بارے میں مزید [پروجیکٹس](https://trekhleb.dev/projects/) اور [مضامین](https://trekhleb.dev/blog/) trekhleb.dev پر۔
