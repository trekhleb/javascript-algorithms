# אלגוריתמים ומבני נתונים ב-JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)
![גודל המאגר](https://img.shields.io/github/repo-size/trekhleb/javascript-algorithms.svg)

מאגר זה מכיל דוגמאות מבוססות JavaScript של אלגוריתמים ומבני נתונים פופולריים רבים.

לכל אלגוריתם ומבנה נתונים יש README משלו עם הסברים קשורים וקישורים לקריאה נוספת (כולל קישורים לסרטוני YouTube).

_קרא זאת בשפות אחרות:_
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

*☝ שים לב שפרויקט זה מיועד למטרות לימוד ומחקר בלבד, ואינו מיועד לשימוש בייצור.*

## מבני נתונים

מבנה נתונים הוא דרך מסוימת לארגן ולאחסן נתונים במחשב כך שניתן לגשת אליהם ולשנות אותם ביעילות. ליתר דיוק, מבנה נתונים הוא אוסף של ערכי נתונים, היחסים ביניהם, והפונקציות או הפעולות שניתן ליישם על הנתונים.

זכור שלכל מבנה נתונים יש את היתרונות והחסרונות שלו. חשוב לשים לב יותר לסיבה שבגללה אתה בוחר מבנה נתונים מסוים מאשר לאופן היישום שלו.

`B` - מתחיל, `A` - מתקדם

* `B` [רשימה מקושרת](src/data-structures/linked-list)
* `B` [רשימה מקושרת כפולה](src/data-structures/doubly-linked-list)
* `B` [תור](src/data-structures/queue)
* `B` [מחסנית](src/data-structures/stack)
* `B` [טבלת גיבוב](src/data-structures/hash-table)
* `B` [ערימה](src/data-structures/heap) - גרסאות מקסימום ומינימום
* `B` [תור עדיפויות](src/data-structures/priority-queue)
* `A` [עץ תחיליות](src/data-structures/trie)
* `A` [עץ](src/data-structures/tree)
  * `A` [עץ חיפוש בינארי](src/data-structures/tree/binary-search-tree)
  * `A` [עץ AVL](src/data-structures/tree/avl-tree)
  * `A` [עץ אדום-שחור](src/data-structures/tree/red-black-tree)
  * `A` [עץ מקטעים](src/data-structures/tree/segment-tree) - עם דוגמאות לשאילתות מינימום/מקסימום/סכום של טווח
  * `A` [עץ פנוויק](src/data-structures/tree/fenwick-tree) (עץ בינארי מאונדקס)
* `A` [גרף](src/data-structures/graph) (מכוון ולא מכוון)
* `A` [קבוצה מופרדת](src/data-structures/disjoint-set) - מבנה נתונים של איחוד-מציאה או מיזוג-מציאה
* `A` [מסנן בלום](src/data-structures/bloom-filter)
* `A` [מטמון LRU](src/data-structures/lru-cache/) - מטמון פחות שימוש לאחרונה (LRU)

## אלגוריתמים

אלגוריתם הוא מפרט חד משמעי כיצד לפתור סוג של בעיות. זוהי קבוצה של כללים המגדירים במדויק רצף של פעולות.

`B` - מתחיל, `A` - מתקדם

### אלגוריתמים לפי נושא

* **מתמטיקה**
  * `B` [מניפולציה על ביטים](src/algorithms/math/bits) - קביעה/עדכון/ניקוי ביטים, הכפלה/חילוק ב-2, הפיכה לשלילי וכו'
  * `B` [נקודה צפה בינארית](src/algorithms/math/binary-floating-point) - ייצוג בינארי של מספרים בנקודה צפה
  * `B` [פקטוריאל](src/algorithms/math/factorial)
  * `B` [מספר פיבונאצ'י](src/algorithms/math/fibonacci) - גרסאות קלאסיות וסגורות
  * `B` [גורמים ראשוניים](src/algorithms/math/prime-factors) - מציאת גורמים ראשוניים וספירתם באמצעות משפט הארדי-רמנוג'אן
  * `B` [בדיקת ראשוניות](src/algorithms/math/primality-test) (שיטת החלוקה הניסיונית)
  * `B` [אלגוריתם אוקלידס](src/algorithms/math/euclidean-algorithm) - חישוב המחלק המשותף הגדול ביותר (GCD)
  * `B` [המכפיל המשותף הקטן ביותר](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [נפה של ארטוסתנס](src/algorithms/math/sieve-of-eratosthenes) - מציאת כל המספרים הראשוניים עד לגבול כלשהו
  * `B` [האם חזקה של שתיים](src/algorithms/math/is-power-of-two) - בדיקה אם מספר הוא חזקה של שתיים (אלגוריתמים נאיביים וביטיים)
  * `B` [משולש פסקל](src/algorithms/math/pascal-triangle)
  * `B` [מספר מרוכב](src/algorithms/math/complex-number) - מספרים מרוכבים ופעולות בסיסיות עליהם
  * `B` [רדיאן ומעלות](src/algorithms/math/radian) - המרה מרדיאנים למעלות ובחזרה
  * `B` [חזקה מהירה](src/algorithms/math/fast-powering)
  * `B` [שיטת הורנר](src/algorithms/math/horner-method) - הערכת פולינום
  * `B` [מטריצות](src/algorithms/math/matrix) - מטריצות ופעולות בסיסיות על מטריצות (כפל, טרנספוזיציה וכו')
  * `B` [מרחק אוקלידי](src/algorithms/math/euclidean-distance) - מרחק בין שתי נקודות/וקטורים/מטריצות
  * `A` [חלוקת מספר שלם](src/algorithms/math/integer-partition)
  * `A` [שורש ריבועי](src/algorithms/math/square-root) - שיטת ניוטון
  * `A` [אלגוריתם π של ליו הוי](src/algorithms/math/liu-hui) - חישובי π מקורבים על בסיס N-גונים
  * `A` [התמרת פורייה הבדידה](src/algorithms/math/fourier-transform) - פירוק פונקציה של זמן (אות) לתדרים המרכיבים אותה

* **קבוצות**
  * `B` [מכפלה קרטזית](src/algorithms/sets/cartesian-product) - מכפלה של מספר קבוצות
  * `B` [ערבוב פישר-ייטס](src/algorithms/sets/fisher-yates) - תמורה אקראית של רצף סופי
  * `A` [קבוצת חזקה](src/algorithms/sets/power-set) - כל תתי הקבוצות של קבוצה (פתרונות ביטיים, מעקב לאחור וקסקדה)
  * `A` [תמורות](src/algorithms/sets/permutations) (עם ובלי חזרות)
  * `A` [צירופים](src/algorithms/sets/combinations) (עם ובלי חזרות)
  * `A` [תת-רצף משותף ארוך ביותר](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [תת-רצף עולה ארוך ביותר](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [על-רצף משותף קצר ביותר](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [בעיית התרמיל](src/algorithms/sets/knapsack-problem) - "0/1" ו"לא מוגבל"
  * `A` [תת-מערך מקסימלי](src/algorithms/sets/maximum-subarray) - "כוח ברוטלי" ו"תכנות דינמי" (Kadane) גרסאות
  * `A` [סכום צירוף](src/algorithms/sets/combination-sum) - מציאת כל הצירופים שיוצרים סכום ספציפי

* **מחרוזות**
  * `B` [מרחק המינג](src/algorithms/string/hamming-distance) - מספר העמדות שבהן הסמלים שונים
  * `B` [פלינדרום](src/algorithms/string/palindrome) - בדיקה אם המחרוזת זהה בקריאה לאחור
  * `A` [מרחק לוונשטיין](src/algorithms/string/levenshtein-distance) - מרחק העריכה המינימלי בין שתי רצפים
  * `A` [אלגוריתם קנות'-מוריס-פראט](src/algorithms/string/knuth-morris-pratt) (אלגוריתם KMP) - חיפוש תת-מחרוזת (התאמת תבנית)
  * `A` [אלגוריתם Z](src/algorithms/string/z-algorithm) - חיפוש תת-מחרוזת (התאמת תבנית)
  * `A` [אלגוריתם רבין קארפ](src/algorithms/string/rabin-karp) - חיפוש תת-מחרוזת
  * `A` [תת-מחרוזת משותפת ארוכה ביותר](src/algorithms/string/longest-common-substring)
  * `A` [התאמת ביטוי רגולרי](src/algorithms/string/regular-expression-matching)

* **חיפושים**
  * `B` [חיפוש לינארי](src/algorithms/search/linear-search)
  * `B` [חיפוש קפיצות](src/algorithms/search/jump-search) (או חיפוש בלוקים) - חיפוש במערך ממוין
  * `B` [חיפוש בינארי](src/algorithms/search/binary-search) - חיפוש במערך ממוין
  * `B` [חיפוש אינטרפולציה](src/algorithms/search/interpolation-search) - חיפוש במערך ממוין עם התפלגות אחידה

* **מיון**
  * `B` [מיון בועות](src/algorithms/sorting/bubble-sort)
  * `B` [מיון בחירה](src/algorithms/sorting/selection-sort)
  * `B` [מיון הכנסה](src/algorithms/sorting/insertion-sort)
  * `B` [מיון ערימה](src/algorithms/sorting/heap-sort)
  * `B` [מיון מיזוג](src/algorithms/sorting/merge-sort)
  * `B` [מיון מהיר](src/algorithms/sorting/quick-sort) - יישומים במקום ולא במקום
  * `B` [מיון צדפות](src/algorithms/sorting/shell-sort)
  * `B` [מיון ספירה](src/algorithms/sorting/counting-sort)
  * `B` [מיון בסיס](src/algorithms/sorting/radix-sort)
  * `B` [מיון דלי](src/algorithms/sorting/bucket-sort)

* **רשימות מקושרות**
  * `B` [מעבר ישר](src/algorithms/linked-list/traversal)
  * `B` [מעבר הפוך](src/algorithms/linked-list/reverse-traversal)

* **עצים**
  * `B` [חיפוש לעומק](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [חיפוש לרוחב](src/algorithms/tree/breadth-first-search) (BFS)

* **גרפים**
  * `B` [חיפוש לעומק](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [חיפוש לרוחב](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [אלגוריתם קרוסקל](src/algorithms/graph/kruskal) - מציאת עץ פורש מינימלי (MST) עבור גרף לא מכוון משוקלל
  * `A` [אלגוריתם דייקסטרה](src/algorithms/graph/dijkstra) - מציאת המסלולים הקצרים ביותר לכל קודקודי הגרף מקודקוד יחיד
  * `A` [אלגוריתם בלמן-פורד](src/algorithms/graph/bellman-ford) - מציאת המסלולים הקצרים ביותר לכל קודקודי הגרף מקודקוד יחיד
  * `A` [אלגוריתם פלויד-וורשל](src/algorithms/graph/floyd-warshall) - מציאת המסלולים הקצרים ביותר בין כל זוגות הקודקודים
  * `A` [זיהוי מעגל](src/algorithms/graph/detect-cycle) - עבור גרפים מכוונים ולא מכוונים (גרסאות מבוססות DFS וקבוצה מופרדת)
  * `A` [אלגוריתם פרים](src/algorithms/graph/prim) - מציאת עץ פורש מינימלי (MST) עבור גרף לא מכוון משוקלל
  * `A` [מיון טופולוגי](src/algorithms/graph/topological-sorting) - שיטת DFS
  * `A` [נקודות חיתוך](src/algorithms/graph/articulation-points) - אלגוריתם טרג'ן (מבוסס DFS)
  * `A` [גשרים](src/algorithms/graph/bridges) - אלגוריתם מבוסס DFS
  * `A` [מסלול ומעגל אוילר](src/algorithms/graph/eulerian-path) - אלגוריתם פלרי - ביקור בכל קשת בדיוק פעם אחת
  * `A` [מעגל המילטון](src/algorithms/graph/hamiltonian-cycle) - ביקור בכל קודקוד בדיוק פעם אחת
  * `A` [רכיבים קשירים חזק](src/algorithms/graph/strongly-connected-components) - אלגוריתם קוסרג'ו
  * `A` [בעיית הסוכן הנוסע](src/algorithms/graph/travelling-salesman) - המסלול הקצר ביותר האפשרי שמבקר בכל עיר וחוזר לעיר המוצא

* **הצפנה**
  * `B` [גיבוב פולינומי](src/algorithms/cryptography/polynomial-hash) - פונקציית גיבוב מתגלגלת המבוססת על פולינום
  * `B` [צופן גדר מסילה](src/algorithms/cryptography/rail-fence-cipher) - אלגוריתם הצפנת טרנספוזיציה להצפנת הודעות
  * `B` [צופן קיסר](src/algorithms/cryptography/caesar-cipher) - צופן החלפה פשוט
  * `B` [צופן היל](src/algorithms/cryptography/hill-cipher) - צופן החלפה המבוסס על אלגברה לינארית

* **למידת מכונה**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 פונקציות JS פשוטות שמדגימות כיצד מכונות יכולות ללמוד באמת (תפוצה קדימה/אחורה)
  * `B` [k-NN](src/algorithms/ml/knn) - אלגוריתם סיווג k-השכנים הקרובים ביותר
  * `B` [k-Means](src/algorithms/ml/k-means) - אלגוריתם אשכול k-Means

* **עיבוד תמונה**
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - אלגוריתם שינוי גודל תמונה מודע תוכן

* **סטטיסטיקה**
  * `B` [משקל אקראי](src/algorithms/statistics/weighted-random) - בחירת פריט אקראי מהרשימה על בסיס משקלי הפריטים

* **אלגוריתמים אבולוציוניים**
  * `A` [אלגוריתם גנטי](https://github.com/trekhleb/self-parking-car-evolution) - דוגמה לאופן שבו ניתן ליישם אלגוריתם גנטי לאימון מכוניות בחניה עצמית

* **לא מסווג**
  * `B` [מגדלי האנוי](src/algorithms/uncategorized/hanoi-tower)
  * `B` [סיבוב מטריצה ריבועית](src/algorithms/uncategorized/square-matrix-rotation) - אלגוריתם במקום
  * `B` [משחק הקפיצות](src/algorithms/uncategorized/jump-game) - דוגמאות למעקב לאחור, תכנות דינמי (מלמעלה למטה + מלמטה למעלה) וחמדני
  * `B` [מסלולים ייחודיים](src/algorithms/uncategorized/unique-paths) - דוגמאות למעקב לאחור, תכנות דינמי ומבוססות על משולש פסקל
  * `B` [מדרגות גשם](src/algorithms/uncategorized/rain-terraces) - בעיית לכידת מי גשם (גרסאות תכנות דינמי וכוח ברוטלי)
  * `B` [מדרגות רקורסיביות](src/algorithms/uncategorized/recursive-staircase) - ספירת מספר הדרכים להגיע לראש (4 פתרונות)
  * `B` [הזמן הטוב ביותר לקנות ולמכור מניות](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - דוגמאות לחלוקה וכיבוש ומעבר אחד
  * `A` [בעיית N-המלכות](src/algorithms/uncategorized/n-queens)
  * `A` [סיור הפרש](src/algorithms/uncategorized/knight-tour)

### אלגוריתמים לפי פרדיגמה

פרדיגמה אלגוריתמית היא שיטה או גישה כללית המונחת בבסיס התכנון של מחלקת אלגוריתמים. זוהי הפשטה גבוהה יותר מהמושג של אלגוריתם, בדיוק כפי שאלגוריתם הוא הפשטה גבוהה יותר מתוכנית מחשב.

* **כוח ברוטלי** - בודק את כל האפשרויות ובוחר את הפתרון הטוב ביותר
  * `B` [חיפוש לינארי](src/algorithms/search/linear-search)
  * `B` [מדרגות גשם](src/algorithms/uncategorized/rain-terraces) - בעיית לכידת מי גשם
  * `B` [מדרגות רקורסיביות](src/algorithms/uncategorized/recursive-staircase) - ספירת מספר הדרכים להגיע לראש
  * `A` [תת-מערך מקסימלי](src/algorithms/sets/maximum-subarray)
  * `A` [בעיית הסוכן הנוסע](src/algorithms/graph/travelling-salesman) - המסלול הקצר ביותר האפשרי שמבקר בכל עיר וחוזר לעיר המוצא
  * `A` [התמרת פורייה הבדידה](src/algorithms/math/fourier-transform) - פירוק פונקציה של זמן (אות) לתדרים המרכיבים אותה

* **חמדני** - בוחר את האפשרות הטובה ביותר בזמן הנוכחי, ללא כל התחשבות בעתיד
  * `B` [משחק הקפיצות](src/algorithms/uncategorized/jump-game)
  * `A` [בעיית התרמיל הלא מוגבל](src/algorithms/sets/knapsack-problem)
  * `A` [אלגוריתם דייקסטרה](src/algorithms/graph/dijkstra) - מציאת המסלולים הקצרים ביותר לכל קודקודי הגרף
  * `A` [אלגוריתם פרים](src/algorithms/graph/prim) - מציאת עץ פורש מינימלי (MST) עבור גרף לא מכוון משוקלל
  * `A` [אלגוריתם קרוסקל](src/algorithms/graph/kruskal) - מציאת עץ פורש מינימלי (MST) עבור גרף לא מכוון משוקלל

* **חלוקה וכיבוש** - מחלק את הבעיה לחלקים קטנים יותר ואז פותר חלקים אלה
  * `B` [חיפוש בינארי](src/algorithms/search/binary-search)
  * `B` [מגדלי האנוי](src/algorithms/uncategorized/hanoi-tower)
  * `B` [משולש פסקל](src/algorithms/math/pascal-triangle)
  * `B` [אלגוריתם אוקלידס](src/algorithms/math/euclidean-algorithm) - חישוב המחלק המשותף הגדול ביותר (GCD)
  * `B` [מיון מיזוג](src/algorithms/sorting/merge-sort)
  * `B` [מיון מהיר](src/algorithms/sorting/quick-sort)
  * `B` [חיפוש לעומק בעץ](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [חיפוש לעומק בגרף](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [מטריצות](src/algorithms/math/matrix) - יצירה ומעבר על מטריצות בצורות שונות
  * `B` [משחק הקפיצות](src/algorithms/uncategorized/jump-game)
  * `B` [חזקה מהירה](src/algorithms/math/fast-powering)
  * `B` [הזמן הטוב ביותר לקנות ולמכור מניות](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - דוגמאות לחלוקה וכיבוש ומעבר אחד
  * `A` [תמורות](src/algorithms/sets/permutations) (עם ובלי חזרות)
  * `A` [צירופים](src/algorithms/sets/combinations) (עם ובלי חזרות)
  * `A` [תת-מערך מקסימלי](src/algorithms/sets/maximum-subarray)

* **תכנות דינמי** - בניית פתרון באמצעות תת-פתרונות שנמצאו קודם לכן
  * `B` [מספר פיבונאצ'י](src/algorithms/math/fibonacci)
  * `B` [משחק הקפיצות](src/algorithms/uncategorized/jump-game)
  * `B` [מסלולים ייחודיים](src/algorithms/uncategorized/unique-paths)
  * `B` [מדרגות גשם](src/algorithms/uncategorized/rain-terraces) - בעיית לכידת מי גשם
  * `B` [מדרגות רקורסיביות](src/algorithms/uncategorized/recursive-staircase) - ספירת מספר הדרכים להגיע לראש
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - אלגוריתם שינוי גודל תמונה מודע תוכן
  * `A` [מרחק לוונשטיין](src/algorithms/string/levenshtein-distance) - מרחק העריכה המינימלי בין שתי רצפים
  * `A` [תת-רצף משותף ארוך ביותר](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [תת-מחרוזת משותפת ארוכה ביותר](src/algorithms/string/longest-common-substring)
  * `A` [תת-רצף עולה ארוך ביותר](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [על-רצף משותף קצר ביותר](src/algorithms/sets/shortest-common-supersequence)
  * `A` [בעיית התרמיל 0/1](src/algorithms/sets/knapsack-problem)
  * `A` [חלוקת מספר שלם](src/algorithms/math/integer-partition)
  * `A` [תת-מערך מקסימלי](src/algorithms/sets/maximum-subarray)
  * `A` [אלגוריתם בלמן-פורד](src/algorithms/graph/bellman-ford) - מציאת המסלולים הקצרים ביותר לכל קודקודי הגרף
  * `A` [אלגוריתם פלויד-וורשל](src/algorithms/graph/floyd-warshall) - מציאת המסלולים הקצרים ביותר בין כל זוגות הקודקודים
  * `A` [התאמת ביטוי רגולרי](src/algorithms/string/regular-expression-matching)

* **מעקב לאחור** - בדומה לכוח ברוטלי, מנסה לייצר את כל הפתרונות האפשריים, אך בכל פעם שאתה מייצר פתרון הבא אתה בודק אם הוא עומד בכל התנאים, ורק אז ממשיך לייצר פתרונות הבאים. אחרת, חוזר אחורה, והולך בנתיב אחר של מציאת פתרון. בדרך כלל מעבר DFS של מרחב המצבים משמש.
  * `B` [משחק הקפיצות](src/algorithms/uncategorized/jump-game)
  * `B` [מסלולים ייחודיים](src/algorithms/uncategorized/unique-paths)
  * `B` [קבוצת חזקה](src/algorithms/sets/power-set) - כל תתי הקבוצות של קבוצה
  * `A` [מעגל המילטון](src/algorithms/graph/hamiltonian-cycle) - ביקור בכל קודקוד בדיוק פעם אחת
  * `A` [בעיית N-המלכות](src/algorithms/uncategorized/n-queens)
  * `A` [סיור הפרש](src/algorithms/uncategorized/knight-tour)
  * `A` [סכום צירוף](src/algorithms/sets/combination-sum) - מציאת כל הצירופים שיוצרים סכום ספציפי

* **סניף וחסום** - זוכר את הפתרון בעלות הנמוכה ביותר שנמצא בכל שלב של החיפוש המעקב לאחור, ומשתמש בעלות של הפתרון בעלות הנמוכה ביותר שנמצא עד כה כגבול תחתון על העלות של פתרון בעלות מינימלית לבעיה, על מנת לפסול פתרונות חלקיים עם עלויות גדולות יותר מהפתרון בעלות הנמוכה ביותר שנמצא עד כה. בדרך כלל מעבר BFS בשילוב עם מעבר DFS של עץ מרחב המצבים משמש.

## כיצד להשתמש במאגר זה

**התקנת כל התלויות**

```
npm install
```

**הרצת ESLint**

ייתכן שתרצה להריץ אותו כדי לבדוק את איכות הקוד.

```
npm run lint
```

**הרצת כל הבדיקות**

```
npm test
```

**הרצת בדיקות לפי שם**

```
npm test -- 'LinkedList'
```

**פתרון בעיות**

אם הלינטינג או הבדיקות נכשלים, נסה למחוק את התיקייה `node_modules` ולהתקין מחדש את חבילות npm:

```
rm -rf ./node_modules
npm i
```

בנוסף, ודא שאתה משתמש בגרסת Node נכונה (`>=16`). אם אתה משתמש ב-[nvm](https://github.com/nvm-sh/nvm) לניהול גרסאות Node, תוכל להריץ `nvm use` מתיקיית השורש של הפרויקט והגרסה הנכונה תיבחר.

**שטח משחקים**

אתה יכול לשחק עם מבני נתונים ואלגוריתמים בקובץ `./src/playground/playground.js` ולכתוב
בדיקות עבורו ב-`./src/playground/__test__/playground.test.js`.

לאחר מכן פשוט הרץ את הפקודה הבאה כדי לבדוק אם קוד שטח המשחקים שלך עובד כמצופה:

```
npm test -- 'playground'
```

## מידע שימושי

### הפניות

- [▶ מבני נתונים ואלגוריתמים ב-YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 סקיצות של מבני נתונים](https://okso.app/showcase/data-structures)

### סימון ה-O הגדול

סימון *ה-O הגדול* משמש לסיווג אלגוריתמים לפי כיצד זמן הריצה או דרישות המרחב שלהם גדלים ככל שגודל הקלט גדל.
בתרשים שלהלן תוכל למצוא את הסדרים הנפוצים ביותר של צמיחת אלגוריתמים המצוינים בסימון ה-O הגדול.

![גרפי ה-O הגדול](./assets/big-o-graph.png)

מקור: [Big O Cheat Sheet](http://bigocheatsheet.com/).

להלן רשימה של כמה מסימוני ה-O הגדול הנפוצים ביותר והשוואות הביצועים שלהם מול גדלים שונים של נתוני קלט.

| סימון ה-O הגדול | חישובים ל-10 אלמנטים | חישובים ל-100 אלמנטים | חישובים ל-1000 אלמנטים |
| ---------------- | --------------------- | ---------------------- | ----------------------- |
| **O(1)**         | 1                     | 1                      | 1                       |
| **O(log N)**     | 3                     | 6                      | 9                       |
| **O(N)**         | 10                    | 100                    | 1000                    |
| **O(N log N)**   | 30                    | 600                    | 9000                    |
| **O(N^2)**       | 100                   | 10000                  | 1000000                 |
| **O(2^N)**       | 1024                  | 1.26e+29               | 1.07e+301               |
| **O(N!)**        | 3628800               | 9.3e+157               | 4.02e+2567              |

### מורכבות פעולות מבני נתונים

| מבנה נתונים          | גישה    | חיפוש   | הכנסה   | מחיקה   | הערות  |
| --------------------- | :-----: | :-----: | :-----: | :-----: | :------ |
| **מערך**              | 1       | n       | n       | n       |         |
| **מחסנית**            | n       | n       | 1       | 1       |         |
| **תור**               | n       | n       | 1       | 1       |         |
| **רשימה מקושרת**      | n       | n       | 1       | n       |         |
| **טבלת גיבוב**        | -       | n       | n       | n       | במקרה של פונקציית גיבוב מושלמת, העלויות יהיו O(1) |
| **עץ חיפוש בינארי**   | n       | n       | n       | n       | במקרה של עץ מאוזן, העלויות יהיו O(log(n)) |
| **עץ B**              | log(n)  | log(n)  | log(n)  | log(n)  |         |
| **עץ אדום-שחור**      | log(n)  | log(n)  | log(n)  | log(n)  |         |
| **עץ AVL**            | log(n)  | log(n)  | log(n)  | log(n)  |         |
| **מסנן בלום**         | -       | 1       | 1       | -       | תוצאות חיוביות שגויות אפשריות בעת חיפוש |

### מורכבות אלגוריתמי מיון מערכים

| שם                  | הטוב ביותר        | ממוצע               | הגרוע ביותר         | זיכרון  | יציב    | הערות  |
| ------------------- | :----------------: | :-----------------: | :------------------: | :-----: | :-----: | :------ |
| **מיון בועות**      | n                  | n<sup>2</sup>       | n<sup>2</sup>        | 1       | כן      |         |
| **מיון הכנסה**      | n                  | n<sup>2</sup>       | n<sup>2</sup>        | 1       | כן      |         |
| **מיון בחירה**      | n<sup>2</sup>      | n<sup>2</sup>       | n<sup>2</sup>        | 1       | לא      |         |
| **מיון ערימה**      | n&nbsp;log(n)      | n&nbsp;log(n)       | n&nbsp;log(n)        | 1       | לא      |         |
| **מיון מיזוג**      | n&nbsp;log(n)      | n&nbsp;log(n)       | n&nbsp;log(n)        | n       | כן      |         |
| **מיון מהיר**       | n&nbsp;log(n)      | n&nbsp;log(n)       | n<sup>2</sup>        | log(n)  | לא      | מיון מהיר בדרך כלל מבוצע במקום עם O(log(n)) שטח מחסנית |
| **מיון צדפות**      | n&nbsp;log(n)      | תלוי ברצף הפער      | n&nbsp;(log(n))<sup>2</sup>  | 1         | לא      |         |
| **מיון ספירה**      | n + r              | n + r               | n + r                | n + r   | כן      | r - המספר הגדול ביותר במערך |
| **מיון בסיס**       | n * k              | n * k               | n * k                | n + k   | כן      | k - אורך המפתח הארוך ביותר |

## תומכי הפרויקט

> אתה יכול לתמוך בפרויקט זה דרך ❤️️ [GitHub](https://github.com/sponsors/trekhleb) או ❤️️ [Patreon](https://www.patreon.com/trekhleb).

[אנשים שתומכים בפרויקט זה](https://github.com/trekhleb/javascript-algorithms/blob/master/BACKERS.md) `∑ = 1`

## מחבר

[@trekhleb](https://trekhleb.dev)

כמה [פרויקטים](https://trekhleb.dev/projects/) ו[מאמרים](https://trekhleb.dev/blog/) נוספים על JavaScript ואלגוריתמים ב-[trekhleb.dev](https://trekhleb.dev)* `B` [משחק הקפיצות](src/algorithms/uncategor * `B` [חיפוש בינארי](src/algorithms
