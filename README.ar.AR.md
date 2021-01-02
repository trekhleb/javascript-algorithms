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
[_Italiana_](README.it-IT.md)

 ☝ ملاحضة هذا المشروع مخصص للاستخدام لأغراض التعلم والبحث
فقط ، و ** ليست ** معدة للاستخدام في **الإنتاج**

## هياكل البيانات

هياكل البيانات هي طريقة خاصة لتنظيم البيانات وتخزينها في جهاز الكمبيوتر بحيث
يمكن الوصول إليها وتعديلها بكفاءة. بتعبير أدق ، هيكل البيانات هو مجموعة من البيانات
القيم والعلاقات فيما بينها والوظائف أو العمليات التي يمكن تطبيقها عليها
البيانات.


`B` - مبتدئ, `A` - المتقدمة

* `B` [قائمة مرتبطة](src/data-structures/linked-list)
* `B` [قائمة مرتبطة بشكل مضاعف](src/data-structures/doubly-linked-list)
* `B` [طابور, Queue](src/data-structures/queue)
* `B` [كومة](src/data-structures/stack)
* `B` [جدول التجزئة](src/data-structures/hash-table)
* `B` [كومة](src/data-structures/heap) -الحد الأقصى والحد الأدنى من إصدارات الكومة
* `B` [طابور الأولوية](src/data-structures/priority-queue)
* `A` [تري](src/data-structures/trie)
* `A` [شجرة](src/data-structures/tree)
  * `A` [شجرة البحث الثنائية](src/data-structures/tree/binary-search-tree)
  * `A` [شجرة AVL](src/data-structures/tree/avl-tree)
  * `A` [شجرة الأحمر والأسود](src/data-structures/tree/red-black-tree)
  * `A` [شجرة القطعة](src/data-structures/tree/segment-tree) - مع أمثلة على استفسارات النطاق الأدنى / الأقصى / المجموع
  * `A` [شجرة فينويك](src/data-structures/tree/fenwick-tree) (شجرة ثنائية مفهرسة)
* `A` [Graph](src/data-structures/graph) (كلاهما موجه وغير موجه)
* `A` [مجموعة منفصلة](src/data-structures/disjoint-set)
* `A` [مرشح بلوم](src/data-structures/bloom-filter)


## الخوارزميات

الخوارزمية هي تحديد لا لبس فيه لكيفية حل فئة من المشاكل. أنه
مجموعة من القواعد التي تحدد بدقة تسلسل العمليات.

`B` - مبتدئ ، `A` - متقدم


### الخوارزميات حسب الموضوع

* **رياضيات**
* `B` [معالجة البت](src/algorithms/math/bits)
* `B` [عاملي](src/algorithms/math/factorial) 
* `B` [رقم فيبوناتشي](src/algorithms/math/fibonacci) - الإصدارات الكلاسيكية والمغلقة
* `B` [اختبار البدائية](src/algorithms/math/primality-test) (طريقة تقسيم المحاكمة)
* `B` [الخوارزمية الإقليدية](src/algorithms/math/euclidean-algorithm) - احسب القاسم المشترك الأكبر (GCD)
* `B` [أقل مضاعف مشترك](src/algorithms/math/least-common-multiple) (LCM)
* `B` [منخل إراتوستينس](src/algorithms/math/sieve-of-eratosthenes) - إيجاد جميع الأعداد الأولية حتى أي حد معين
* `B` [هي قوة اثنين](src/algorithms/math/is-power-of-two) - تحقق مما إذا كان الرقم هو قوة اثنين (الخوارزميات الساذجة والبتية)
* `B` [مثلث باسكال](src/algorithms/math/pascal-triangle)
* `B` [عدد مركب](src/algorithms/math/complex-number) - الأعداد المركبة والعمليات الأساسية معهم
* `B` [راديان ودرجة](src/algorithms/math/radian) - راديان لدرجة التحويل والعكس
* `B` [تشغيل سريع](src/algorithms/math/fast-powering)
* `B` [طريقة هورنر](src/algorithms/math/horner-method) - تقييم متعدد الحدود
* `A` [قسم صحيح](src/algorithms/math/integer-partition)
* `A` [الجذر التربيعي](src/algorithms/math/square-root) - طريقة نيوتن
* `A` [خوارزمية ليو هوي π](src/algorithms/math/liu-hui) - π حسابات تقريبية على أساس N-gons
* `A` [تحويل فورييه المنفصل](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up 
* **مجموعات**
* `B` [المنتج الديكارتي](src/algorithms/sets/cartesian-product) - product of multiple sets
* `B` [فيشر ييتس شافل](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
* `A` [مجموعة الطاقة](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
* `A` [التباديل](src/algorithms/sets/permutations) (with and without repetitions)
* `A` [مجموعات](src/algorithms/sets/combinations) (with and without repetitions)
* `A` [أطول نتيجة مشتركة](src/algorithms/sets/longest-common-subsequence) (LCS)
* `A` [أطول زيادة متتالية](src/algorithms/sets/longest-increasing-subsequence)
* `A` [أقصر تسلسل فائق مشترك](src/algorithms/sets/shortest-common-supersequence) (SCS)
* `A` [مشكلة حقيبة الظهر](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
* `A` [الحد الأقصى من Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
* `A` [مجموع الجمع](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Strings**
* `B` [مسافة هامنج](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
* `A` [المسافة ليفنشتاين](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
* `A` [خوارزمية كنوث - موريس - برات](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
* `A` [خوارزمية Z](src/algorithms/string/z-algorithm) - substring search (pattern matching)
* `A` [خوارزمية رابين كارب](src/algorithms/string/rabin-karp) - substring search
* `A` [أطول سلسلة فرعية مشتركة](src/algorithms/string/longest-common-substring)
* `A` [مطابقة التعبير العادي](src/algorithms/string/regular-expression-matching)
* **Searches**
* `B` [البحث الخطي](src/algorithms/search/linear-search)
* `B` [بحث سريع](src/algorithms/search/jump-search) (or Block Search) - search in sorted array