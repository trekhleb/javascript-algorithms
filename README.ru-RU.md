# Алгоритмы и структуры данных на JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

В этом репозитории содержатся базовые JavaScript-примеры многих популярных алгоритмов и структур данных.

Для каждого алгоритма и структуры данных есть свой файл README с соответствующими пояснениями и ссылками на материалы для дальнейшего изучения (в том числе и ссылки на видеоролики в YouTube).

_Читать на других языках:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

*☝ Замечание: этот репозиторий предназначен для учебно-исследовательских целей (**не** для использования в продакшн-системах).*

## Структуры данных

Структура данных (англ. data structure) — программная единица, позволяющая хранить и обрабатывать множество однотипных и/или логически связанных данных в вычислительной технике. Для добавления, поиска, изменения и удаления данных структура данных предоставляет некоторый набор функций, составляющих её интерфейс.

`B` - Базовый уровень, `A` - Продвинутый уровень

* `B` [Связный список](src/data-structures/linked-list)
* `B` [Двунаправленный связный список](src/data-structures/doubly-linked-list)
* `B` [Очередь](src/data-structures/queue)
* `B` [Стек](src/data-structures/stack)
* `B` [Хеш-таблица](src/data-structures/hash-table)
* `B` [Куча](src/data-structures/heap) — максимальная и минимальная версии
* `B` [Очередь с приоритетом](src/data-structures/priority-queue)
* `A` [Префиксное дерево](src/data-structures/trie)
* `A` [Деревья](src/data-structures/tree)
  * `A` [Двоичное дерево поиска](src/data-structures/tree/binary-search-tree)
  * `A` [АВЛ-дерево](src/data-structures/tree/avl-tree)
  * `A` [Красно-чёрное дерево](src/data-structures/tree/red-black-tree)
  * `A` [Дерево отрезков](src/data-structures/tree/segment-tree) — для минимума, максимума и суммы отрезков
  * `A` [Дерево Фенвика](src/data-structures/tree/fenwick-tree) (двоичное индексированное дерево)
* `A` [Граф](src/data-structures/graph) (ориентированный и неориентированный)
* `A` [Система непересекающихся множеств](src/data-structures/disjoint-set)
* `A` [Фильтр Блума](src/data-structures/bloom-filter)

## Алгоритмы

Алгоритм — конечная совокупность точно заданных правил решения некоторого класса задач или набор инструкций, описывающих порядок действий исполнителя для решения некоторой задачи.

`B` - Базовый уровень, `A` - Продвинутый уровень

### Алгоритмы по тематике

* **Математика**
  * `B` [Битовые манипуляции](src/algorithms/math/bits) — получение/запись/сброс/обновление битов, умножение/деление на 2, сделать отрицательным и т.п.
  * `B` [Двоичное число с плавающей запятой](src/algorithms/math/binary-floating-point) - двоичное представление чисел с плавающей запятой
  * `B` [Факториал](src/algorithms/math/factorial)
  * `B` [Числа Фибоначчи](src/algorithms/math/fibonacci) — классическое решение, решение в замкнутой форме
  * `B` [Простые множители](src/algorithms/math/prime-factors) - нахождение простых множителей и их подсчёт с использованием теоремы Харди-Рамануджана
  * `B` [Тест простоты](src/algorithms/math/primality-test) (метод пробного деления)
  * `B` [Алгоритм Евклида](src/algorithms/math/euclidean-algorithm) — нахождение наибольшего общего делителя (НОД)
  * `B` [Наименьшее общее кратное](src/algorithms/math/least-common-multiple) (НОК)
  * `B` [Решето Эратосфена](src/algorithms/math/sieve-of-eratosthenes) — нахождение всех простых чисел до некоторого целого числа n
  * `B` [Степень двойки](src/algorithms/math/is-power-of-two) — является ли число степенью двойки (простое и побитовое решения)
  * `B` [Треугольник Паскаля](src/algorithms/math/pascal-triangle)
  * `B` [Комплексные числа](src/algorithms/math/complex-number) — комплексные числа, базовые операции над ними
  * `B` [Радианы и градусы](src/algorithms/math/radian) — конвертирование радианов в градусы и наоборот
  * `B` [Быстрое возведение в степень](src/algorithms/math/fast-powering)
  * `B` [Схема Горнера](src/algorithms/math/horner-method) - оценка полиномов
  * `B` [Матрицы](src/algorithms/math/matrix) - матрицы и основные операции с матрицами (умножение, транспонирование и т.д.)
  * `B` [Евклидово расстояние](src/algorithms/math/euclidean-distance) - расстояние между двумя точками/векторами/матрицами
  * `A` [Разбиение числа](src/algorithms/math/integer-partition)
  * `A` [Квадратный корень](src/algorithms/math/square-root) — метод Ньютона
  * `A` [Алгоритм Лю Хуэя](src/algorithms/math/liu-hui) — расчёт числа π с заданной точностью методом вписанных правильных многоугольников
  * `A` [Дискретное преобразование Фурье](src/algorithms/math/fourier-transform) — разложение временной функции (сигнала) на частотные составляющие
* **Множества**
  * `B` [Декартово произведение](src/algorithms/sets/cartesian-product) — результат перемножения множеств
  * `B` [Тасование Фишера — Йетса](src/algorithms/sets/fisher-yates) — создание случайных перестановок конечного множества
  * `A` [Булеан](src/algorithms/sets/power-set) — все подмножества заданного множества (побитовый поиск и поиск с возвратом)
  * `A` [Перестановки](src/algorithms/sets/permutations) (с повторениями и без повторений)
  * `A` [Сочетания](src/algorithms/sets/combinations) (с повторениями и без повторений)
  * `A` [Наибольшая общая подпоследовательность](src/algorithms/sets/longest-common-subsequence)
  * `A` [Наибольшая увеличивающаяся подпоследовательность](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Наименьшая общая супер-последовательность](src/algorithms/sets/shortest-common-supersequence)
  * `A` [Задача о рюкзаке](src/algorithms/sets/knapsack-problem) — "0/1" и "неограниченный" рюкзаки
  * `A` [Максимальный под-массив](src/algorithms/sets/maximum-subarray) — метод полного перебора и алгоритм Кадане
  * `A` [Комбинации сумм](src/algorithms/sets/combination-sum) — нахождение всех комбинаций, сумма каждой из которых равна заданному числу
* **Алгоритмы работы со строками**
  * `B` [Расстояние Хэмминга](src/algorithms/string/hamming-distance) — число позиций, в которых соответствующие символы различны
  * `A` [Расстояние Левенштейна](src/algorithms/string/levenshtein-distance) — метрика, измеряющая разность между двумя последовательностями
  * `A` [Алгоритм Кнута — Морриса — Пратта](src/algorithms/string/knuth-morris-pratt) — поиск подстроки (сопоставление с шаблоном)
  * `A` [Z-функция](src/algorithms/string/z-algorithm) — поиск подстроки (сопоставление с шаблоном)
  * `A` [Алгоритм Рабина — Карпа](src/algorithms/string/rabin-karp) — поиск подстроки
  * `A` [Наибольшая общая подстрока](src/algorithms/string/longest-common-substring)
  * `A` [Разборщик регулярных выражений](src/algorithms/string/regular-expression-matching)
* **Алгоритмы поиска**
  * `B` [Линейный поиск](src/algorithms/search/linear-search)
  * `B` [Поиск с перескоком](src/algorithms/search/jump-search) (поиск блоков) — поиск в упорядоченном массиве
  * `B` [Двоичный поиск](src/algorithms/search/binary-search) — поиск в упорядоченном массиве
  * `B` [Интерполяционный поиск](src/algorithms/search/interpolation-search) — поиск в равномерно распределённом упорядоченном массиве.
* **Алгоритмы сортировки**
  * `B` [Сортировка пузырьком](src/algorithms/sorting/bubble-sort)
  * `B` [Сортировка выбором](src/algorithms/sorting/selection-sort)
  * `B` [Сортировка вставками](src/algorithms/sorting/insertion-sort)
  * `B` [Пирамидальная сортировка (сортировка кучей)](src/algorithms/sorting/heap-sort)
  * `B` [Сортировка слиянием](src/algorithms/sorting/merge-sort)
  * `B` [Быстрая сортировка](src/algorithms/sorting/quick-sort) — с использованием дополнительной памяти и без её использования
  * `B` [Сортировка Шелла](src/algorithms/sorting/shell-sort)
  * `B` [Сортировка подсчётом](src/algorithms/sorting/counting-sort)
  * `B` [Поразрядная сортировка](src/algorithms/sorting/radix-sort)
* **Связный список**
  * `B` [Прямой обход](src/algorithms/linked-list/traversal)
  * `B` [Обратный обход](src/algorithms/linked-list/reverse-traversal)
* **Деревья**
  * `B` [Поиск в глубину](src/algorithms/tree/depth-first-search)
  * `B` [Поиск в ширину](src/algorithms/tree/breadth-first-search)
* **Графы**
  * `B` [Поиск в глубину](src/algorithms/graph/depth-first-search)
  * `B` [Поиск в ширину](src/algorithms/graph/breadth-first-search)
  * `B` [Алгоритм Краскала](src/algorithms/graph/kruskal) — нахождение минимального остовного дерева для взвешенного неориентированного графа
  * `A` [Алгоритм Дейкстры](src/algorithms/graph/dijkstra) — нахождение кратчайших путей от одной из вершин графа до всех остальных
  * `A` [Алгоритм Беллмана — Форда](src/algorithms/graph/bellman-ford) — нахождение кратчайших путей от одной из вершин графа до всех остальных
  * `A` [Алгоритм Флойда — Уоршелла](src/algorithms/graph/floyd-warshall) — нахождение кратчайших расстояний между всеми вершинами графа
  * `A` [Задача нахождения цикла](src/algorithms/graph/detect-cycle) — для ориентированных и неориентированных графов (на основе поиска в глубину и системы непересекающихся множеств)
  * `A` [Алгоритм Прима](src/algorithms/graph/prim) — нахождение минимального остовного дерева для взвешенного неориентированного графа
  * `A` [Топологическая сортировка](src/algorithms/graph/topological-sorting) — на основе поиска в глубину
  * `A` [Шарниры (разделяющие вершины)](src/algorithms/graph/articulation-points) — алгоритм Тарьяна (на основе поиска в глубину)
  * `A` [Мосты](src/algorithms/graph/bridges) — на основе поиска в глубину
  * `A` [Эйлеров путь и Эйлеров цикл](src/algorithms/graph/eulerian-path) — алгоритм Флёри (однократное посещение каждой вершины)
  * `A` [Гамильтонов цикл](src/algorithms/graph/hamiltonian-cycle) — проходит через каждую вершину графа ровно один раз
  * `A` [Компоненты сильной связности](src/algorithms/graph/strongly-connected-components) — алгоритм Косарайю
  * `A` [Задача коммивояжёра](src/algorithms/graph/travelling-salesman) — кратчайший маршрут, проходящий через указанные города с последующим возвратом в исходный город
* **Криптография**
  * `B` [Полиноминальный хэш](src/algorithms/cryptography/polynomial-hash) — функция кольцевого хэша, основанная на полиноме
  * `B` [Шифр ​​ограждения рельсов](src/algorithms/cryptography/rail-fence-cipher) - алгоритм транспозиционного шифра для кодирования сообщений
  * `B` [Шифр Цезаря](src/algorithms/cryptography/caesar-cipher) - простой подстановочный шифр
  * `B` [Шифр Хилла](src/algorithms/cryptography/hill-cipher) - подстановочный шифр на основе линейной алгебры
* **Машинное обучение**
  * `B` [Нано-нейрон](https://github.com/trekhleb/nano-neuron) — 7 простых JavaScript функций, отображающих способности машины к обучению (прямое и обратное распространение)
  * `B` [k-NN](src/algorithms/ml/knn) - алгоритм классификации k-ближайших соседей
  * `B` [k-Means](src/algorithms/ml/k-means) - алгоритм кластеризации по методу k-средних
* **Обработка изображений**
  * `B` [Резьба по шву](src/algorithms/image-processing/seam-carving) - алгоритм изменения размера изображения с учетом содержания
* **Статистика**
  * `B` [Взвешенная случайность](src/algorithms/statistics/weighted-random) - выбор случайного элемента из списка на основе веса элементов
* **Эволюционные алгоритмы**
  * `A` [Генетический алгоритм](https://github.com/trekhleb/self-parking-car-evolution) - пример применения генетического алгоритма для обучения самопаркующихся автомобилей
* **Прочие алгоритмы**
  * `B` [Ханойская башня](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Поворот квадратной матрицы](src/algorithms/uncategorized/square-matrix-rotation) — используется дополнительная память
  * `B` [Прыжки](src/algorithms/uncategorized/jump-game) — на основе бэктрекинга, динамического программирования (сверху-вниз + снизу-вверх) и жадных алгоритмов
  * `B` [Поиск уникальных путей](src/algorithms/uncategorized/unique-paths) — на основе бэктрекинга, динамического программирования и треугольника Паскаля
  * `B` [Подсчёт дождевой воды](src/algorithms/uncategorized/rain-terraces) — на основе перебора и динамического программирования
  * `B` [Задача о рекурсивной лестнице](src/algorithms/uncategorized/recursive-staircase) — подсчёт количества путей, по которым можно достичь верха лестницы (4 способа)
  * `B` [Лучшее время для покупки и продажи акций](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - примеры "разделяй и властвуй" и в один проход
  * `A` [Задача об N ферзях](src/algorithms/uncategorized/n-queens)
  * `A` [Маршрут коня](src/algorithms/uncategorized/knight-tour)

### Алгоритмы по парадигме программирования

Парадигма программирования — общий метод или подход, лежащий в основе целого класса алгоритмов. Понятие "парадигма программирования" является более абстрактным по отношению к понятию "алгоритм", которое в свою очередь является более абстрактным по отношению к понятию "компьютерная программа".

* **Алгоритмы полного перебора** — поиск лучшего решения исчерпыванием всевозможных вариантов
  * `B` [Линейный поиск](src/algorithms/search/linear-search)
  * `B` [Подсчёт дождевой воды](src/algorithms/uncategorized/rain-terraces)
  * `B` [Задача о рекурсивной лестнице](src/algorithms/uncategorized/recursive-staircase) — подсчёт количества путей, по которым можно достичь верха лестницы
  * `A` [Максимальный подмассив](src/algorithms/sets/maximum-subarray)
  * `A` [Задача коммивояжёра](src/algorithms/graph/travelling-salesman) — кратчайший маршрут, проходящий через указанные города с последующим возвратом в исходный город
  * `A` [Дискретное преобразование Фурье](src/algorithms/math/fourier-transform) — разложение временной функции (сигнала) на частотные составляющие
* **Жадные алгоритмы** — принятие локально оптимальных решений с учётом допущения об оптимальности конечного решения
  * `B` [Прыжки](src/algorithms/uncategorized/jump-game)
  * `A` [Задача о неограниченном рюкзаке](src/algorithms/sets/knapsack-problem)
  * `A` [Алгоритм Дейкстры](src/algorithms/graph/dijkstra) — нахождение кратчайших путей от одной из вершин графа до всех остальных
  * `A` [Алгоритм Прима](src/algorithms/graph/prim) — нахождение минимального остовного дерева для взвешенного неориентированного графа
  * `A` [Алгоритм Краскала](src/algorithms/graph/kruskal) — нахождение минимального остовного дерева для взвешенного неориентированного графа
* **Разделяй и властвуй** — рекурсивное разбиение решаемой задачи на более мелкие
  * `B` [Двоичный поиск](src/algorithms/search/binary-search)
  * `B` [Ханойская башня](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Треугольник Паскаля](src/algorithms/math/pascal-triangle)
  * `B` [Алгоритм Евклида](src/algorithms/math/euclidean-algorithm) — нахождение наибольшего общего делителя (НОД)
  * `B` [Сортировка слиянием](src/algorithms/sorting/merge-sort)
  * `B` [Быстрая сортировка](src/algorithms/sorting/quick-sort)
  * `B` [Поиск в глубину (дерево)](src/algorithms/tree/depth-first-search)
  * `B` [Поиск в глубину (граф)](src/algorithms/graph/depth-first-search)
  * `B` [Матрицы](src/algorithms/math/matrix) - генерирование и обход матриц различной формы
  * `B` [Прыжки](src/algorithms/uncategorized/jump-game)
  * `B` [Быстрое возведение в степень](src/algorithms/math/fast-powering)
  * `B` [Лучшее время для покупки и продажи акций](src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - примеры "разделяй и властвуй" и в один проход
  * `A` [Перестановки](src/algorithms/sets/permutations) (с повторениями и без повторений)
  * `A` [Сочетания](src/algorithms/sets/combinations) (с повторениями и без повторений)
* **Динамическое программирование** — решение общей задачи конструируется на основе ранее найденных решений подзадач
  * `B` [Числа Фибоначчи](src/algorithms/math/fibonacci)
  * `B` [Прыжки](src/algorithms/uncategorized/jump-game)
  * `B` [Поиск уникальных путей](src/algorithms/uncategorized/unique-paths)
  * `B` [Подсчёт дождевой воды](src/algorithms/uncategorized/rain-terraces)
  * `B` [Задача о рекурсивной лестнице](src/algorithms/uncategorized/recursive-staircase) — подсчёт количества путей, по которым можно достичь верха лестницы
  * `B` [Резьба по шву](src/algorithms/image-processing/seam-carving) - алгоритм изменения размера изображения с учетом содержания
  * `A` [Расстояние Левенштейна](src/algorithms/string/levenshtein-distance) — метрика, измеряющая разность между двумя последовательностями
  * `A` [Наибольшая общая подпоследовательность](src/algorithms/sets/longest-common-subsequence)
  * `A` [Наибольшая общая подстрока](src/algorithms/string/longest-common-substring)
  * `A` [Наибольшая увеличивающаяся подпоследовательность](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Наименьшая общая суперпоследовательность](src/algorithms/sets/shortest-common-supersequence)
  * `A` [Рюкзак 0-1](src/algorithms/sets/knapsack-problem)
  * `A` [Разбиение числа](src/algorithms/math/integer-partition)
  * `A` [Максимальный подмассив](src/algorithms/sets/maximum-subarray)
  * `A` [Алгоритм Беллмана — Форда](src/algorithms/graph/bellman-ford) — поиск кратчайшего пути во взвешенном графе
  * `A` [Алгоритм Флойда — Уоршелла](src/algorithms/graph/floyd-warshall) — нахождение кратчайших путей от одной из вершин графа до всех остальных
  * `A` [Разборщик регулярных выражений](src/algorithms/string/regular-expression-matching)
* **Поиск с возвратом (бэктрекинг)** — при поиске решения многократно делается попытка расширить текущее частичное решение. Если расширение невозможно, то происходит возврат к предыдущему более короткому частичному решению, и делается попытка его расширить другим возможным способом. Обычно используется обход пространства состояний в глубину.
  * `B` [Прыжки](src/algorithms/uncategorized/jump-game)
  * `B` [Поиск уникальных путей](src/algorithms/uncategorized/unique-paths)
  * `B` [Булеан](src/algorithms/sets/power-set) — все подмножества заданного множества
  * `A` [Гамильтонов цикл](src/algorithms/graph/hamiltonian-cycle) — проходит через каждую вершину графа ровно один раз
  * `A` [Задача об N ферзях](src/algorithms/uncategorized/n-queens)
  * `A` [Маршрут коня](src/algorithms/uncategorized/knight-tour)
  * `A` [Комбинации сумм](src/algorithms/sets/combination-sum) — нахождение всех комбинаций, сумма каждой из которых равна заданному числу
* **Метод ветвей и границ** — основан на упорядоченном переборе решений и рассмотрении только тех из них, которые являются перспективными (по тем или иным признакам) и отбрасывании бесперспективных множеств решений. Обычно используется обход в ширину в совокупности с обходом дерева пространства состояний в глубину.

## Как использовать этот репозиторий

**Установка всех зависимостей**
```
npm install
```

**Запуск ESLint**

Эта команда может потребоваться вам для проверки качества кода.

```
npm run lint
```

**Запуск всех тестов**

```
npm test
```

**Запуск определённого теста**

```
npm test -- 'LinkedList'
```

**Песочница**

Вы можете экспериментировать с алгоритмами и структурами данных в файле `./src/playground/playground.js`
(файл `./src/playground/__test__/playground.test.js` предназначен для написания тестов).

Для проверки работоспособности вашего кода используйте команду:

```
npm test -- 'playground'
```

## Полезная информация

### Ссылки

[▶ О структурах данных и алгоритмах](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Нотация «О» большое

*Нотация «О» большое* используется для классификации алгоритмов в соответствии с ростом времени выполнения и затрачиваемой памяти при увеличении размера входных данных. На диаграмме ниже представлены общие порядки роста алгоритмов в соответствии с нотацией «О» большое.

![Big O graphs](./assets/big-o-graph.png)

Источник: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Ниже представлены часто используемые обозначения в нотации «О» большое, а также сравнение их производительностей на различных размерах входных данных.

| Нотация «О» большое | 10 элементов | 100 элементов | 1000 элементов |
| ------------------- | ------------ | ------------- | -------------- |
| **O(1)**            | 1            | 1             | 1              |
| **O(log N)**        | 3            | 6             | 9              |
| **O(N)**            | 10           | 100           | 1000           |
| **O(N log N)**      | 30           | 600           | 9000           |
| **O(N^2)**          | 100          | 10000         | 1000000        |
| **O(2^N)**          | 1024         | 1.26e+29      | 1.07e+301      |
| **O(N!)**           | 3628800      | 9.3e+157      | 4.02e+2567     |

### Сложности операций в структурах данных

| Структура данных           | Получение | Поиск     | Вставка   | Удаление  | Комментарии |
| -------------------------- | :-------: | :-------: | :-------: | :-------: | :---------- |
| **Массив**                 | 1         | n         | n         | n         |             |
| **Стек**                   | n         | n         | 1         | 1         |             |
| **Очередь**                | n         | n         | 1         | 1         |             |
| **Связный список**         | n         | n         | 1         | n         |             |
| **Хеш-таблица**            | -         | n         | n         | n         | Для идеальной хеш-функции — O(1) |
| **Двоичное дерево поиска** | n         | n         | n         | n         | В сбалансированном дереве — O(log(n)) |
| **B-дерево**               | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Красно-чёрное дерево**   | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **АВЛ-дерево**             | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Фильтр Блума**           | -         | 1         | 1         | -         | Возможно получение ложно-положительного срабатывания |

### Сложности алгоритмов сортировки

| Наименование               | Лучший случай | Средний случай | Худший случай | Память | Устойчивость | Комментарии |
| -------------------------- | :-----------: | :------------: | :-----------: | :----: | :----------: | :---------- |
| **Сортировка пузырьком**   | n             | n<sup>2</sup>  | n<sup>2</sup> | 1      | Да           |             |
| **Сортировка вставками**   | n             | n<sup>2</sup>  | n<sup>2</sup> | 1      | Да           |             |
| **Сортировка выбором**     | n<sup>2</sup> | n<sup>2</sup>  | n<sup>2</sup> | 1      | Нет          |             |
| **Сортировка кучей**       | n&nbsp;log(n) | n&nbsp;log(n)  | n&nbsp;log(n) | 1      | Нет          |             |
| **Сортировка слиянием**    | n&nbsp;log(n) | n&nbsp;log(n)  | n&nbsp;log(n) | n      | Да           |             |
| **Быстрая сортировка**     | n&nbsp;log(n) | n&nbsp;log(n)  | n<sup>2</sup> | log(n) | Нет          | Быстрая сортировка обычно выполняется с использованием O(log(n)) дополнительной памяти |
| **Сортировка Шелла**       | n&nbsp;log(n) | зависит от выбранных шагов | n&nbsp;(log(n))<sup>2</sup>  | 1      | Нет          |           |
| **Сортировка подсчётом**   | n + r         | n + r          | n + r         | n + r  | Да           | r — наибольшее число в массиве |
| **Поразрядная сортировка** | n * k         | n * k          | n * k         | n + k  | Да           | k — длина самого длинного ключа |

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
