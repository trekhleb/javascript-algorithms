<div dir=rtl>

# جافا سكريبت خوارزميات  وهياكل البيانات

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

تحتوي هذا مقالة على أمثلة عديدة تستند إلى الخوارزميات الشائعة وهياكل البيانات في الجافا سكريبت.

كل خوارزمية وهياكل البيانات لها برنامج README منفصل خاص بها
مع التفسيرات والروابط ذات الصلة لمزيد من القراءة (بما في ذلك تلك
إلى مقاطع فيديو YouTube).

_اقرأ هذا في لغات أخرى:_
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
[_Deutsch_](README.de-DE.md)

 ☝ ملاحضة هذا المشروع مخصص للاستخدام لأغراض التعلم والبحث
فقط ، و ** ليست ** معدة للاستخدام في **الإنتاج**

## هياكل البيانات

هياكل البيانات هي طريقة خاصة لتنظيم البيانات وتخزينها في جهاز الحاسوب بحيث
يمكن الوصول إليها وتعديلها بكفاءة بتعبير أدق، هيكل البيانات هو مجموعة من البيانات
القيم والعلاقات فيما بينها والوظائف أو العمليات التي يمكن تطبيقها عليها
البيانات.


`ب` - مبتدئ, `ت` - المتقدمة

* `ب` [قائمة مرتبطة](src/data-structures/linked-list)
* `ب` [قائمة مرتبطة بشكل مضاعف](src/data-structures/doubly-linked-list)
* `ب` [طابور, Queue](src/data-structures/queue)
* `ب` [كومة](src/data-structures/stack)
* `ب` [جدول التجزئة](src/data-structures/hash-table)
* `ب` [كومة](src/data-structures/heap) -الحد الأقصى والحد الأدنى من إصدارات الكومة
* `ب` [طابور الأولوية](src/data-structures/priority-queue)
* `ت` [تري](src/data-structures/trie)
* `ت` [شجرة](src/data-structures/tree)
  * `ت` [شجرة البحث الثنائية](src/data-structures/tree/binary-search-tree)
  * `ت` [شجرة AVL](src/data-structures/tree/avl-tree)
  * `ت` [شجرة الأحمر والأسود](src/data-structures/tree/red-black-tree)
  * `ت` [شجرة القطعة](src/data-structures/tree/segment-tree) - مع أمثلة على استفسارات النطاق الأدنى / الأقصى / المجموع
  * `ت` [شجرة فينويك](src/data-structures/tree/fenwick-tree) (شجرة ثنائية مفهرسة)
* `ت` [Graph](src/data-structures/graph) (كلاهما موجه وغير موجه)
* `ت` [مجموعة منفصلة](src/data-structures/disjoint-set)
* `ت` [مرشح بلوم](src/data-structures/bloom-filter)


## الخوارزميات

الخوارزمية هي تحديد لا لبس فيه لكيفية حل فئة من المشاكل. أنه
مجموعة من القواعد التي تحدد بدقة تسلسل العمليات.

`ب` - مبتدئ ، `ت` - متقدم


### الخوارزميات حسب الموضوع

* **رياضيات**
  * `ب` [معالجة البت](src/algorithms/math/bits)
  * `ب` [عاملي](src/algorithms/math/factorial)
  * `ب` [رقم فيبوناتشي](src/algorithms/math/fibonacci) - الإصدارات الكلاسيكية والمغلقة
  * `ب` [اختبار البدائية](src/algorithms/math/primality-test) (طريقة تقسيم المحاكمة)
  * `ب` [الخوارزمية الإقليدية](src/algorithms/math/euclidean-algorithm) - احسب القاسم المشترك الأكبر (GCD)
  * `ب` [أقل مضاعف مشترك](src/algorithms/math/least-common-multiple) (LCM)
  * `ب` [منخل إراتوستينس](src/algorithms/math/sieve-of-eratosthenes) - إيجاد جميع الأعداد الأولية حتى أي حد معين
  * `ب` [هي قوة اثنين](src/algorithms/math/is-power-of-two) - تحقق مما إذا كان الرقم هو قوة اثنين (الخوارزميات الساذجة والبتية)
  * `ب` [مثلث باسكال](src/algorithms/math/pascal-triangle)
  * `ب` [عدد مركب](src/algorithms/math/complex-number) - الأعداد المركبة والعمليات الأساسية معهم
  * `ب` [راديان ودرجة](src/algorithms/math/radian) - راديان لدرجة التحويل والعكس
  * `ب` [تشغيل سريع](src/algorithms/math/fast-powering)
  * `ب` [طريقة هورنر](src/algorithms/math/horner-method) - تقييم متعدد الحدود
  * `ت` [قسم صحيح](src/algorithms/math/integer-partition)
  * `ت` [الجذر التربيعي](src/algorithms/math/square-root) - طريقة نيوتن
  * `ت` [خوارزمية ليو هوي π](src/algorithms/math/liu-hui) - π حسابات تقريبية على أساس N-gons
  * `ت` [تحويل فورييه المنفصل](src/algorithms/math/fourier-transform) - حلل وظيفة الوقت (إشارة) في الترددات التي يتكون منها
* **مجموعات**
  * `ب` [المنتج الديكارتي](src/algorithms/sets/cartesian-product) - منتج من مجموعات متعددة
  * `ب` [فيشر ييتس شافل](src/algorithms/sets/fisher-yates) - التقليب العشوائي لتسلسل محدود
  * `ت` [مجموعة الطاقة](src/algorithms/sets/power-set) - جميع المجموعات الفرعية للمجموعة (حلول البت والتتبع التراجعي)
  * `ت` [التباديل](src/algorithms/sets/permutations) (مع وبدون التكرار)
  * `ت` [مجموعات](src/algorithms/sets/combinations) (مع وبدون التكرار)
  * `ت` [أطول نتيجة مشتركة](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `ت` [أطول زيادة متتالية](src/algorithms/sets/longest-increasing-subsequence)
  * `ت` [أقصر تسلسل فائق مشترك](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `ت` [مشكلة حقيبة الظهر](src/algorithms/sets/knapsack-problem) - "0/1" و "غير منضم"
  * `ت` [الحد الأقصى من Subarray](src/algorithms/sets/maximum-subarray) -إصدارات "القوة الغاشمة" و "البرمجة الديناميكية" (كادان)
  * `ت` [مجموع الجمع](src/algorithms/sets/combination-sum) - ابحث عن جميع التركيبات التي تشكل مبلغًا محددًا
* **سلاسل**
  * `ب` [مسافة هامنج](src/algorithms/string/hamming-distance) - عدد المواقف التي تختلف فيها الرموز
  * `ت` [المسافة ليفنشتاين](src/algorithms/string/levenshtein-distance) - الحد الأدنى لمسافة التحرير بين تسلسلين
  * `ت` [خوارزمية كنوث - موريس - برات](src/algorithms/string/knuth-morris-pratt) (خوارزمية KMP) - بحث السلسلة الفرعية (مطابقة النمط)
  * `ت` [خوارزمية Z](src/algorithms/string/z-algorithm) - بحث سلسلة فرعية (مطابقة النمط)
  * `ت` [خوارزمية رابين كارب](src/algorithms/string/rabin-karp) - بحث السلسلة الفرعية
  * `ت` [أطول سلسلة فرعية مشتركة](src/algorithms/string/longest-common-substring)
  * `ت` [مطابقة التعبير العادي](src/algorithms/string/regular-expression-matching)
* **عمليات البحث**
  * `ب` [البحث الخطي](src/algorithms/search/linear-search)
  * `ب` [بحث سريع](src/algorithms/search/jump-search) (أو حظر البحث) - ابحث في مصفوفة مرتبة
  * `ب` [بحث ثنائي](src/algorithms/search/binary-search) - البحث في مجموعة مرتبة
  * `ب` [بحث الاستيفاء](src/algorithms/search/interpolation-search) - البحث في مجموعة مرتبة موزعة بشكل موحد

* **فرز**
  * `ب` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `ب` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `ب` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `ب` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `ب` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `ب` [Quicksort](src/algorithms/sorting/quick-sort) - عمليات التنفيذ في المكان وغير في المكان
  * `ب` [Shellsort](src/algorithms/sorting/shell-sort)
  * `ب` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `ب` [Radix Sort](src/algorithms/sorting/radix-sort)
* **القوائم المرتبطة**
  * `ب` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `ب` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **الأشجار**
  * `ب` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `ب` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **الرسوم البيانية**
  * `ب` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `ب` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `ب` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - إيجاد الحد الأدنى من شجرة الامتداد (MST) للرسم البياني الموزون غير الموجه
  * `ت` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) -إيجاد أقصر المسارات لجميع رؤوس الرسم البياني من رأس واحد
  * `ت` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - إيجاد أقصر المسارات لجميع رؤوس الرسم البياني من رأس واحد
  * `ت` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - إيجاد أقصر المسارات بين جميع أزواج الرؤوس
  * `ت` [Detect Cycle](src/algorithms/graph/detect-cycle) - لكل من الرسوم البيانية الموجهة وغير الموجهة (الإصدارات القائمة على DFS و Disjoint Set)
  * `ت` [Prim’s Algorithm](src/algorithms/graph/prim) - إيجاد الحد الأدنى من شجرة الامتداد (MST) للرسم البياني الموزون غير الموجه
  * `ت` [Topological Sorting](src/algorithms/graph/topological-sorting) - طريقة البحث العمق الأول (DFS)
  * `ت` [Articulation Points](src/algorithms/graph/articulation-points) - خوارزمية تارجان (تعتمد على DFS)
  * `ت` [Bridges](src/algorithms/graph/bridges) - خوارزمية تعتمد على DFS
  * `ت` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - خوارزمية فلوري - قم بزيارة كل حافة مرة واحدة بالضبط
  * `ت` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - قم بزيارة كل قمة مرة واحدة بالضبط
  * `ت` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - خوارزمية Kosaraju
  * `ت` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - أقصر طريق ممكن يزور كل مدينة ويعود إلى المدينة الأصلية
* **التشفير
  * `ب` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - المتداول دالة التجزئة على أساس متعدد الحدود
  * `ب` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - استبدال بسيط للشفرات
* **التعلم الالي**
  * `ب` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 وظائف JS بسيطة توضح كيف يمكن للآلات أن تتعلم بالفعل (الانتشار إلى الأمام / الخلف)
* **غير مصنف**
  * `ب` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `ب` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - خوارزمية في المكان
  * `ب` [Jump Game](src/algorithms/uncategorized/jump-game) - التراجع ، البرمجة الديناميكية (من أعلى إلى أسفل + من أسفل إلى أعلى) والأمثلة الجشعة
  * `ب` [Unique Paths](src/algorithms/uncategorized/unique-paths) - التراجع والبرمجة الديناميكية والأمثلة القائمة على مثلث باسكال
  * `ب` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - محاصرة مشكلة مياه الأمطار (البرمجة الديناميكية وإصدارات القوة الغاشمة)
  * `ب` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - احسب عدد الطرق للوصول إلى القمة (4 حلول)
  * `ت` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `ت` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### الخوارزميات حسب النموذج

النموذج الحسابي هو طريقة أو نهج عام يكمن وراء تصميم الفصل
من الخوارزميات. إنه تجريد أعلى من مفهوم الخوارزمية ، تمامًا مثل
الخوارزمية هي تجريد أعلى من برنامج الكمبيوتر.

* **القوة الغاشمة** - انظر في جميع الاحتمالات وحدد الحل الأفضل
  * `ب` [Linear Search](src/algorithms/search/linear-search)
  * `ب` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - محاصرة مشكلة مياه الأمطار
  * `ب` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - احسب عدد الطرق للوصول إلى القمة
  * `ت` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `ت` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - أقصر طريق ممكن يزور كل مدينة ويعود إلى المدينة الأصلية
  * `ت` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - حلل وظيفة الوقت (إشارة) في الترددات التي يتكون منها
* **جشع** - اختر الخيار الأفضل في الوقت الحالي ، دون أي اعتبار للمستقبل
  * `ب` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `ت` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `ت` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - إيجاد أقصر مسار لجميع رؤوس الرسم البياني
  * `ت` [Prim’s Algorithm](src/algorithms/graph/prim) - إيجاد الحد الأدنى من شجرة الامتداد (MST) للرسم البياني الموزون غير الموجه
  * `ت` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - إيجاد الحد الأدنى من شجرة الامتداد (MST) للرسم البياني الموزون غير الموجه
* **فرق تسد** - قسّم المشكلة إلى أجزاء أصغر ثم حل تلك الأجزاء
  * `ب` [Binary Search](src/algorithms/search/binary-search)
  * `ب` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `ب` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `ب` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - حساب القاسم المشترك الأكبر (GCD)
  * `ب` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `ب` [Quicksort](src/algorithms/sorting/quick-sort)
  * `ب` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `ب` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `ب` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `ب` [Fast Powering](src/algorithms/math/fast-powering)
  * `ت` [Permutations](src/algorithms/sets/permutations) (مع التكرار وبدونه)
  * `ت` [Combinations](src/algorithms/sets/combinations) (مع التكرار وبدونه)
* **البرمجة الديناميكية** - بناء حل باستخدام الحلول الفرعية التي تم العثور عليها مسبقًا
  * `ب` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `ب` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `ب` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `ب` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - محاصرة مشكلة مياه الأمطار
  * `ب` [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - احسب عدد الطرق للوصول إلى القمة
  * `ت` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - الحد الأدنى لمسافة التحرير بين تسلسلين
  * `ت` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `ت` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `ت` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `ت` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `ت` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `ت` [Integer Partition](src/algorithms/math/integer-partition)
  * `ت` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `ت` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - إيجاد أقصر مسار لجميع رؤوس الرسم البياني
  * `ت` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - إيجاد أقصر المسارات بين جميع أزواج الرؤوس
  * `ت` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **التراجع** - على غرار القوة الغاشمة ، حاول إنشاء جميع الحلول الممكنة ، ولكن في كل مرة تقوم فيها بإنشاء الحل التالي الذي تختبره
إذا استوفت جميع الشروط ، وعندها فقط استمر في إنشاء الحلول اللاحقة. خلاف ذلك ، تراجع ، واذهب إلى
طريق مختلف لإيجاد حل. عادةً ما يتم استخدام اجتياز DFS لمساحة الدولة.
  * `ب` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `ب` [Unique Paths](src/algorithms/uncategorized/unique-paths)
  * `ب` [Power Set](src/algorithms/sets/power-set) - جميع المجموعات الفرعية للمجموعة
  * `ت` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - قم بزيارة كل قمة مرة واحدة بالضبط
  * `ت` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `ت` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `ت` [Combination Sum](src/algorithms/sets/combination-sum) - ابحث عن جميع التركيبات التي تشكل مبلغًا محددًا


* ** Branch & Bound ** - تذكر الحل الأقل تكلفة الموجود في كل مرحلة من مراحل التراجع
البحث ، واستخدام تكلفة الحل الأقل تكلفة الموجود حتى الآن بحد أدنى لتكلفة
الحل الأقل تكلفة للمشكلة ، من أجل تجاهل الحلول الجزئية بتكاليف أكبر من
تم العثور على حل بأقل تكلفة حتى الآن. اجتياز BFS عادةً بالاشتراك مع اجتياز DFS لمساحة الحالة
يتم استخدام الشجرة.

## كيفية استخدام هذا المستودع

**تثبيت كل التبعيات**

<div dir=ltr>

```
npm install
```

</div>

**قم بتشغيل ESLint**

قد ترغب في تشغيله للتحقق من جودة الكود.

<div dir=ltr>

```
npm run lint
```

</div>

**قم بإجراء جميع الاختبارات**

<div dir=ltr>

```
npm test
```

</div>

**قم بإجراء الاختبارات بالاسم**

<div dir=ltr>

```
npm test -- 'LinkedList'
```

</div>

**ملعب**

يمكنك اللعب بهياكل البيانات والخوارزميات في ملف `. /src/playground/playground.js` والكتابة
اختبارات لها في `./src/playground/__test__/playground.test.js`.

ثم قم ببساطة بتشغيل الأمر التالي لاختبار ما إذا كان كود الملعب الخاص بك يعمل كما هو متوقع:

<div dir=ltr>

```
npm test -- 'playground'
```

</div>

## معلومات مفيدة

### المراجع

[▶ هياكل البيانات والخوارزميات على موقع يوتيوب](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

* يتم استخدام **Big O notation** لتصنيف الخوارزميات وفقًا لكيفية نمو متطلبات وقت التشغيل أو المساحة مع نمو حجم الإدخال.
قد تجد في الرسم البياني أدناه الأوامر الأكثر شيوعًا لنمو الخوارزميات المحددة في تBig O notation.

![Big O graphs](./assets/big-o-graph.png)

مصدر: [Big O Cheat Sheet](http://bigocheatsheet.com/).

فيما يلي قائمة ببعض رموز Big O notation الأكثر استخدامًا ومقارنات أدائها مقابل أحجام مختلفة من بيانات الإدخال.

<div dir=ltr>

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### تعقيد عمليات بنية البيانات

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         |في حالة وجود تكاليف دالة تجزئة مثالية ستكون O (1)|
| **Binary Search Tree**  | n         | n         | n         | n         | في حالة توازن تكاليف الشجرة ستكون O (log (n))|
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         |الإيجابيات الكاذبة ممكنة أثناء البحث|

### تعقيد خوارزميات فرز الصفيف

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | نعم       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | نعم       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | لا        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | لا        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | نعم       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | عادةً ما يتم إجراء الفرز السريع في مكانه مع مساحة مكدس O (log (n))|
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | لا       |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       |r - أكبر رقم في المجموعة|
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | ك - طول أطول مفتاح |

</div>

## دعم المشروع

> يمكنك دعم هذا المشروع عبر ❤️️ [GitHub](https://github.com/sponsors/trekhleb) أو ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[الناس الذين يدعمون هذا المشروع](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 0`

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
