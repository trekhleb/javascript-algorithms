# JavaScript Алгоритмы и Структуры Данных

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Этот репозиторий содержит JavaScript-примеры многих
популярных алгоритмов и структур данных.

Каждый алгоритм и структура данных имеет собственный отдельный README файл
с объяснением и ссылками для получения подробной информации (включая видеоролики
на YouTube).

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md)

*☝Обратите внимание, проект предназначен для использования только в учебных и исследовательских целях - **не** предназначен для использования в реальных проектах.*

## Структуры данных

Структура данных - это особый способ организации и хранения данных в компьютере, который позволяет данным быть 
доступными и эффективно изменяться. Также, структура данных - это коллекция данных, 
содержащая зависимости между ними и функции или операции, работающие с данными.

`B` - Начинающий, `A` - Продвинутый

* `B` [Связный список](src/data-structures/linked-list)
* `B` [Двусвязный список](src/data-structures/doubly-linked-list)
* `B` [Очередь](src/data-structures/queue)
* `B` [Стек](src/data-structures/stack)
* `B` [Хэш таблица](src/data-structures/hash-table)
* `B` [Пирамида](src/data-structures/heap) - (куча, сортирующее дерево) максимальные и минимальные версии
* `B` [Очередь с приоритетом](src/data-structures/priority-queue)
* `A` [Префиксное Дерево](src/data-structures/trie)
* `A` [Дерево](src/data-structures/tree)
  * `A` [Двоичное Дерево Поиска](src/data-structures/tree/binary-search-tree)
  * `A` [АВЛ-дерево](src/data-structures/tree/avl-tree)
  * `A` [Красно-чёрное Дерево](src/data-structures/tree/red-black-tree)
  * `A` [Сегмент Дерева](src/data-structures/tree/segment-tree) - с примерами запросов диапазона min / max / sum
  * `A` [Дерево Фенвика](src/data-structures/tree/fenwick-tree) (Двоичное индексируемое дерево)
* `A` [Граф](src/data-structures/graph) (как направленный, так и ненаправленный)
* `A` [Непересекающийся Набор](src/data-structures/disjoint-set)
* `A` [Фильтр Блума](src/data-structures/bloom-filter)

## Алгоритмы

Алгоритм - конечная совокупность точно заданных правил решения произвольного класса задач или набор инструкций, 
описывающих порядок действий исполнителя для решения задачи.

`B` - Начинающий, `A` - Продвинутый

### Алгоритмы по темам

* **Математика**
  * `B` [Небольшая Манипуляция](src/algorithms/math/bits) - установка/получение/обновление/очистка битов, умножение/деление на два, сделать отрицательным и т.д.
  * `B` [Факториал](src/algorithms/math/factorial) 
  * `B` [Числа Фибоначчи](src/algorithms/math/fibonacci) - классический и закрытый варианты
  * `B` [Тест примитивности](src/algorithms/math/primality-test) (метод пробного деления)
  * `B` [Алгоритм Евклида](src/algorithms/math/euclidean-algorithm) - вычислить наибольший общий делитель (GCD)
  * `B` [Наименьшее Общее Кратное](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [Решето Эратосфена](src/algorithms/math/sieve-of-eratosthenes) - поиск всех простых чисел до любого заданного предела
  * `B` [Сила Двух](src/algorithms/math/is-power-of-two) - проверьте, является ли число силой двух (наивные и побитовые алгоритмы)
  * `B` [Треугольник Паскаля](src/algorithms/math/pascal-triangle)
  * `B` [Комплексное Число](src/algorithms/math/complex-number) - комплексные числа и основные операции с ними
  * `B` [Радиан & Степень](src/algorithms/math/radian) - радиан в степень и обратное преобразование
  * `B` [Быстрое Включение](src/algorithms/math/fast-powering)
  * `A` [Целочисленное Разбиение](src/algorithms/math/integer-partition)
  * `A` [Квадратный Корень](src/algorithms/math/square-root) - метод Ньютона
  * `A` [Алгоритм Лю Хуэя π ](src/algorithms/math/liu-hui) - приближенные π расчеты на основе N-gons
  * `A` [Дискретное Преобразование Фурье](src/algorithms/math/fourier-transform) - декомпозиция функции времени (сигнал) на частоты, которые составляют его
* **Наборы**
  * `B` [Декартово Произведение](src/algorithms/sets/cartesian-product) - продукт из нескольких наборов
  * `B` [Тасование Фишера—Йетса](src/algorithms/sets/fisher-yates) - случайная перестановка конечной последовательности
  * `A` [Алгоритм установки мощности](src/algorithms/sets/power-set) - все подмножества множества (побитовые и обратные решения)
  * `A` [Перестановка](src/algorithms/sets/permutations) (с повторениями и без них)
  * `A` [Комбинация](src/algorithms/sets/combinations) (с повторениями и без них)
  * `A` [Наибольшая Общая Подпоследовательность](src/algorithms/sets/longest-common-subsequence) Longest Common Subsequence (LCS)
  * `A` [Наибольшая Возрастающая Подпоследовательность](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Короткая Общая Суперпоследовательность](src/algorithms/sets/shortest-common-supersequence) Shortest Common Supersequence (SCS)
  * `A` [Проблема Рюкзака](src/algorithms/sets/knapsack-problem) - "0/1" и "Свободный"
  * `A` [Максимальный Подмассив](src/algorithms/sets/maximum-subarray) - "Грубая Сила" и "Динамическое программирование" (Kadane) версии
  * `A` [Сумма Комбинаций](src/algorithms/sets/combination-sum) - найти все комбинации, которые образуют определенную сумму
* **Строки**
  * `B` [Расстояние Хемминга](src/algorithms/string/hamming-distance) - количество позиций, в которых символы различаются
  * `A` [Расстояние Левенштейна](src/algorithms/string/levenshtein-distance) - минимальное изменяемое расстояние между двумя последовательностями
  * `A` [Алгоритм Кнута-Морриса-Пратта](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - поиск подстроки (сопоставление шаблонов)
  * `A` [Алгоритм Z](src/algorithms/string/z-algorithm) - поиск подстроки (сопоставление шаблонов)
  * `A` [Алгоритм Рабина Карпа](src/algorithms/string/rabin-karp) - поиск подстроки
  * `A` [Наибольшая общая подстрока](src/algorithms/string/longest-common-substring)
  * `A` [Сопоставление Регулярных Выражений](src/algorithms/string/regular-expression-matching)
* **Поиски**
  * `B` [Линейный Поиск](src/algorithms/search/linear-search)
  * `B` [Прыжковый Поиск](src/algorithms/search/jump-search) (или блок поиска) - поиск в отсортированном массиве
  * `B` [Бинарный Поиск](src/algorithms/search/binary-search) - поиск в отсортированном массиве
  * `B` [Интерполяционный Поиск](src/algorithms/search/interpolation-search) - поиск в равномерно распределенном отсортированном массиве
* **Сортировки**
  * `B` [Пузырьковая Сортировка](src/algorithms/sorting/bubble-sort)
  * `B` [Сортировка Выбором](src/algorithms/sorting/selection-sort)
  * `B` [Сортировка Вставками](src/algorithms/sorting/insertion-sort)
  * `B` [Пирамидальная Сортировка](src/algorithms/sorting/heap-sort)
  * `B` [Сортировка Слиянием](src/algorithms/sorting/merge-sort)
  * `B` [Быстрая Сортировка](src/algorithms/sorting/quick-sort) - реализации на месте и не на месте
  * `B` [Сортировка Шелла](src/algorithms/sorting/shell-sort) - сортировка включениями с убывающими приращениями
  * `B` [Сортировка Подсчётом](src/algorithms/sorting/counting-sort)
  * `B` [Поразрядная Сортировка](src/algorithms/sorting/radix-sort)
* **Связные списоки**
  * `B` [Прямой Обход](src/algorithms/linked-list/traversal)
  * `B` [Обратный Обход](src/algorithms/linked-list/reverse-traversal)
* **Деревья**
  * `B` [Поиск в глубину](src/algorithms/tree/depth-first-search) Depth-First Search (DFS)
  * `B` [Поиск в ширину](src/algorithms/tree/breadth-first-search) Breadth-First Search (BFS)
* **Графы**
  * `B` [Поиск в глубину](src/algorithms/graph/depth-first-search) Depth-First Search (DFS)
  * `B` [Поиск в ширину](src/algorithms/graph/breadth-first-search) Breadth-First Search (BFS)
  * `B` [Алгоритм Крускала](src/algorithms/graph/kruskal) - поиск минимального остовного дерева (MST) для взвешенного неориентированного графа
  * `A` [Алгоритм Дейкстры](src/algorithms/graph/dijkstra) - поиск кратчайших путей ко всем вершинам графа из одной вершины
  * `A` [Алгоритм Беллмана-Форда](src/algorithms/graph/bellman-ford) - поиск кратчайших путей ко всем вершинам графа из одной вершины
  * `A` [Алгоритм Флойда-Уоршолла](src/algorithms/graph/floyd-warshall) - найти кратчайший путь между всеми парами вершин
  * `A` [Обнаружения Цикла](src/algorithms/graph/detect-cycle) - как для направленных, так и для неориентированных графов (версии на основе DFS и непересекающихся наборов)
  * `A` [Алгоритм Прима](src/algorithms/graph/prim) - поиск минимального остовного дерева (MST) для взвешенного неориентированного графа
  * `A` [Топологическая Сортировка](src/algorithms/graph/topological-sorting) - метод DFS
  * `A` [Точки Сочленения](src/algorithms/graph/articulation-points) - Алгоритм Тарьяна (основанный на DFS)
  * `A` [Мосты](src/algorithms/graph/bridges) - Алгоритм на основе DFS
  * `A` [Эйлеров путь и Эйлерова цепь](src/algorithms/graph/eulerian-path) - Алгоритм Флери - посещение каждого края ровно один раз
  * `A` [Гамильтонов Цикл](src/algorithms/graph/hamiltonian-cycle) - посещение каждой вершины ровно один раз
  * `A` [Сильно Связные Компоненты](src/algorithms/graph/strongly-connected-components) - Алгоритм Косарайю
  * `A` [Задача Коммивояжера](src/algorithms/graph/travelling-salesman) - кратчайший маршрут, по которому посещает каждый город и возвращается в исходный город
* **Криптография**
  * `B` [Полиномиальный Хэш](src/algorithms/cryptography/polynomial-hash) - хэш-функция на основе полинома
* **Без категории**
  * `B` [Ханойская Башня](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Квадратная Матрица Вращения](src/algorithms/uncategorized/square-matrix-rotation) - алгоритм на месте
  * `B` [Алгоритм прыжка](src/algorithms/uncategorized/jump-game) - обратное отслеживание, динамическое программирование (сверху вниз + снизу вверх) и примеры
  * `B` [Уникальный Путь](src/algorithms/uncategorized/unique-paths) - обратное отслеживание, динамическое программирование и примеры на основе треугольника Паскаля 
  * `B` [Дождь Террасы](src/algorithms/uncategorized/rain-terraces) - проблема улавливания дождевой воды  (версии динамического программирования и грубой силы)
  * `B` [Рекурсивная Лестница](src/algorithms/uncategorized/recursive-staircase) - подсчитать количество способов добраться до вершины (4 решения)
  * `A` [Проблема N-Queens](src/algorithms/uncategorized/n-queens)
  * `A` [Рыцарский Тур](src/algorithms/uncategorized/knight-tour)

### Алгоритмы по парадигме

Алгоритмическая парадигма - это общий метод или подход, который лежит в основе проектирования класса
алгоритмов. Это абстракция выше, чем понятие алгоритма, так же как
алгоритм - это абстракция выше, чем компьютерная программа.

* **Грубая Сила (Полный перебор)** - посмотрите на все возможности и выберите лучшее решение
  * `B` [Линейный Поиск](src/algorithms/search/linear-search)
  * `B` [Дождь Террасы](src/algorithms/uncategorized/rain-terraces) - проблема улавливания дождевой воды
  * `B` [Рекурсивная Лестница](src/algorithms/uncategorized/recursive-staircase) - подсчитать количество способов добраться до вершины
  * `A` [Максимальный Подмассив](src/algorithms/sets/maximum-subarray)
  * `A` [Задача Коммивояжера](src/algorithms/graph/travelling-salesman) - кратчайший маршрут, по которому посещает каждый город и возвращается в исходный город
  * `A` [Дискретное Преобразование Фурье](src/algorithms/math/fourier-transform) - декомпозиция функции времени (сигнал) на частоты, которые составляют его
* **Жадный алгоритм** - выбирайте оптимальный вариант на текущий момент, без каких-либо раздумий на будущее
  * `B` [Алгоритм прыжка](src/algorithms/uncategorized/jump-game)
  * `A` [Проблема Сободного Рюкзака](src/algorithms/sets/knapsack-problem)
  * `A` [Алгоритм Дейкстры](src/algorithms/graph/dijkstra) - поиск кратчайших путей ко всем вершинам графа из одной вершины
  * `A` [Алгоритм Прима](src/algorithms/graph/prim) - поиск минимального остовного дерева (MST) для взвешенного неориентированного графа
  * `A` [Алгоритм Крускала](src/algorithms/graph/kruskal) - поиск минимального остовного дерева (MST) для взвешенного неориентированного графа
* **Разделяй и властвуй** - разделите проблему на более мелкие части, а затем решите эти части
  * `B` [Бинарный Поиск](src/algorithms/search/binary-search)
  * `B` [Ханойская Башня](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Треугольник Паскаля](src/algorithms/math/pascal-triangle)
  * `B` [Алгоритм Евклида](src/algorithms/math/euclidean-algorithm) - вычислить наибольший общий делитель (GCD)
  * `B` [Сортировка Слиянием](src/algorithms/sorting/merge-sort)
  * `B` [Быстрая Сортировка](src/algorithms/sorting/quick-sort)
  * `B` [Поиск по дереву в глубину](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Поиск по графам в глубину](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Алгоритм прыжка](src/algorithms/uncategorized/jump-game)
  * `B` [Быстрое Включение](src/algorithms/math/fast-powering)
  * `A` [Перестановка](src/algorithms/sets/permutations) (с повторениями и без них)
  * `A` [Комбинация](src/algorithms/sets/combinations) (с повторениями и без них)
* **Динамическое Программирование** - создайте решение, используя ранее найденные подрешения
  * `B` [Числа Фибоначчи](src/algorithms/math/fibonacci)
  * `B` [Алгоритм прыжка](src/algorithms/uncategorized/jump-game)
  * `B` [Уникальный Путь](src/algorithms/uncategorized/unique-paths)
  * `B` [Дождь Террасы](src/algorithms/uncategorized/rain-terraces) - проблема улавливания дождевой воды 
  * `B` [Рекурсивная Лестница](src/algorithms/uncategorized/recursive-staircase) - подсчитать количество способов добраться до вершины
  * `A` [Расстояние Левенштейна](src/algorithms/string/levenshtein-distance) - минимальное изменяемое расстояние между двумя последовательностями
  * `A` [Наибольшая Общая Подпоследовательность](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Наибольшая общая подстрока](src/algorithms/string/longest-common-substring)
  * `A` [Наибольшая Возрастающая Подпоследовательность](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Короткая Общая Суперпоследовательность](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Проблема Рюкзака](src/algorithms/sets/knapsack-problem)
  * `A` [Целочисленное Разбиение](src/algorithms/math/integer-partition)
  * `A` [Максимальный Подмассив](src/algorithms/sets/maximum-subarray)
  * `A` [Алгоритм Беллмана-Форда](src/algorithms/graph/bellman-ford) - поиск кратчайших путей ко всем вершинам графа из одной вершины
  * `A` [Алгоритм Флойда-Уоршолла](src/algorithms/graph/floyd-warshall) - найти кратчайший путь между всеми парами вершин
  * `A` [Сопоставление Регулярных Выражений](src/algorithms/string/regular-expression-matching)
* **Возврат (Бэктрекинг)** - подобно "грубой силе", попробуйте создать все возможные решения, но каждый раз, когда вы создаете следующее решение, тестируйте его
на удовлетворение всем условиям, и только тогда продолжайте генерировать последующие решения. В противном случае, отступите и продолжайте
искать другой путь поиска решения. Обычно используется метод DFS.
  * `B` [Алгоритм прыжка](src/algorithms/uncategorized/jump-game)
  * `B` [Уникальный Путь](src/algorithms/uncategorized/unique-paths)
  * `B` [Алгоритм установки мощности](src/algorithms/sets/power-set) - все подмножества множества
  * `A` [Гамильтонов Цикл](src/algorithms/graph/hamiltonian-cycle) - посещение каждой вершины ровно один раз
  * `A` [Проблема N-Queens](src/algorithms/uncategorized/n-queens)
  * `A` [Рыцарский Тур](src/algorithms/uncategorized/knight-tour)
  * `A` [Сумма Комбинаций](src/algorithms/sets/combination-sum) - найти все комбинации, которые образуют определенную сумму 
* **Ветви И Границы** - remember the lowest-cost solution found at each stage of the backtracking
search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
tree is being used.
запомните самое дешевое решение - это решение найденное на каждом этапе возврата (бэктрекинга), используйте решение найденное до нижней границы стоимости
решение проблемы, чтобы отказаться от решений с затратами больше, чем
самое дешевое решение которое уже найдено. Обычно используется обход BFS в сочетании с обход DFS.

## Как использовать репозиторий

**Установите все зависимости**
```
npm install
```

**Запуск ESLint**

Вы можете запустить его, чтобы проверить качество кода.

```
npm run lint
```

**Запуск тестов**
```
npm test
```

**Запуск теста по имени**
```
npm test -- 'LinkedList'
```

**Песочница**

Вы можете играть с структурами данных и алгоритмами в файле `./src/playground/playground.js` и написать тесты в `./src/playground/__test__/playground.test.js`.

Затем просто запустите следующую команду, чтобы проверить, работает ли ваш код в песочнице так, как ожидалось:

```
npm test -- 'playground'
```

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

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
