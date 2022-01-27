# JavaScript 算法与数据结构

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

本仓库包含了多种基于 JavaScript 的算法与数据结构。

每种算法和数据结构都有自己的 README，包含相关说明和链接，以便进一步阅读 (还有 YouTube 视频) 。

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
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
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md)

*注意：这个项目仅用于学习和研究，**不是**用于生产环境。*

## 数据结构

数据结构是在计算机中组织和存储数据的一种特殊方式，使得数据可以高效地被访问和修改。更确切地说，数据结构是数据值的集合，表示数据之间的关系，也包括了作用在数据上的函数或操作。

`B` - 初学者， `A` - 进阶

* `B` [链表](src/data-structures/linked-list/README.zh-CN.md)
* `B` [双向链表](src/data-structures/doubly-linked-list/README.zh-CN.md)
* `B` [队列](src/data-structures/queue/README.zh-CN.md)
* `B` [栈](src/data-structures/stack/README.zh-CN.md)
* `B` [哈希表(散列)](src/data-structures/hash-table/README.zh-CN.md)
* `B` [堆](src/data-structures/heap/README.zh-CN.md) - 最大堆 & 最小堆
* `B` [优先队列](src/data-structures/priority-queue/README.zh-CN.md)
* `A` [字典树](src/data-structures/trie/README.zh-CN.md)
* `A` [树](src/data-structures/tree/README.zh-CN.md)
  * `A` [二叉查找树](src/data-structures/tree/binary-search-tree)
  * `A` [AVL 树](src/data-structures/tree/avl-tree)
  * `A` [红黑树](src/data-structures/tree/red-black-tree)
  * `A` [线段树](src/data-structures/tree/segment-tree) - 使用 `最小/最大/总和` 范围查询示例
  * `A` [树状数组](src/data-structures/tree/fenwick-tree) (二叉索引树)
* `A` [图](src/data-structures/graph/README.zh-CN.md) (有向图与无向图)
* `A` [并查集](src/data-structures/disjoint-set)
* `A` [布隆过滤器](src/data-structures/bloom-filter)

## 算法

算法是如何解决一类问题的明确规范。算法是一组精确定义操作序列的规则。

`B` - 初学者， `A` - 进阶

### 算法主题

* **数学**
  * `B` [位运算](src/algorithms/math/bits) - set/get/update/clear 位、乘以/除以二进制位 、变负等
  * `B` [阶乘](src/algorithms/math/factorial/README.zh-CN.md)
  * `B` [斐波那契数](src/algorithms/math/fibonacci) - `经典` 和 `闭式` 版本
  * `B` [素数检测](src/algorithms/math/primality-test) (排除法)
  * `B` [欧几里得算法](src/algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  * `B` [最小公倍数](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [素数筛](src/algorithms/math/sieve-of-eratosthenes) - 查找任意给定范围内的所有素数
  * `B` [判断 2 次方数](src/algorithms/math/is-power-of-two) - 检查数字是否为 2 的幂 (原生和按位算法)
  * `B` [杨辉三角形](src/algorithms/math/pascal-triangle)
  * `B` [复数](src/algorithms/math/complex-number) - 复数及其基本运算
  * `B` [弧度和角](src/algorithms/math/radian) - 弧度与角的相互转换
  * `B` [快速算次方](src/algorithms/math/fast-powering)
  * `A` [整数拆分](src/algorithms/math/integer-partition)
  * `A` [割圆术](src/algorithms/math/liu-hui) - 基于 N-gons 的近似 π 计算
  * `A` [离散傅里叶变换](src/algorithms/math/fourier-transform) - 把时间信号解析成构成它的频率
* **集合**
  * `B` [笛卡尔积](src/algorithms/sets/cartesian-product) - 多集合结果
  * `A` [洗牌算法](src/algorithms/sets/fisher-yates) - 随机置换有限序列
  * `A` [幂集](src/algorithms/sets/power-set) - 该集合的所有子集
  * `A` [排列](src/algorithms/sets/permutations) (有/无重复)
  * `A` [组合](src/algorithms/sets/combinations) (有/无重复)
  * `A` [最长公共子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最长递增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短公共父序列](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [背包问题](src/algorithms/sets/knapsack-problem) - `0/1` 和 `无边界` 问题
  * `A` [最大子数列问题](src/algorithms/sets/maximum-subarray) - `BF 算法` 和 `动态规划`
  * `A` [组合求和](src/algorithms/sets/combination-sum) - 查找形成特定总和的所有组合
* **字符串**
  * `B` [汉明距离](src/algorithms/string/hamming-distance) - 符号不同的位置数
  * `A` [莱温斯坦距离](src/algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
  * `A` [Knuth–Morris–Pratt 算法](src/algorithms/string/knuth-morris-pratt) KMP 算法 - 子串搜索 (模式匹配)
  * `A` [字符串快速查找](src/algorithms/string/z-algorithm) - 子串搜索 (模式匹配)
  * `A` [Rabin Karp 算法](src/algorithms/string/rabin-karp) - 子串搜索
  * `A` [最长公共子串](src/algorithms/string/longest-common-substring)
  * `A` [正则表达式匹配](src/algorithms/string/regular-expression-matching)
* **搜索**
  * `B` [线性搜索](src/algorithms/search/linear-search)
  * `B` [跳转搜索/块搜索](src/algorithms/search/jump-search) - 搜索有序数组
  * `B` [二分查找](src/algorithms/search/binary-search) - 搜索有序数组
  * `B` [插值搜索](src/algorithms/search/interpolation-search) - 搜索均匀分布的有序数组
* **排序**
  * `B` [冒泡排序](src/algorithms/sorting/bubble-sort)
  * `B` [选择排序](src/algorithms/sorting/selection-sort)
  * `B` [插入排序](src/algorithms/sorting/insertion-sort)
  * `B` [堆排序](src/algorithms/sorting/heap-sort)
  * `B` [归并排序](src/algorithms/sorting/merge-sort)
  * `B` [快速排序](src/algorithms/sorting/quick-sort) - in-place (原地) 和 non-in-place 版本
  * `B` [希尔排序](src/algorithms/sorting/shell-sort)
  * `B` [计数排序](src/algorithms/sorting/counting-sort)
  * `B` [基数排序](src/algorithms/sorting/radix-sort)
* **链表**
  - `B` [正向遍历](src/algorithms/linked-list/traversal)
  - `B` [反向遍历](src/algorithms/linked-list/reverse-traversal)
* **树**
  * `B` [深度优先搜索](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [广度优先搜索](src/algorithms/tree/breadth-first-search) (BFS)
* **图**
  * `B` [深度优先搜索](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [广度优先搜索](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [克鲁斯克尔演算法](src/algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
  * `A` [戴克斯特拉算法](src/algorithms/graph/dijkstra) - 找到图中所有顶点的最短路径
  * `A` [贝尔曼-福特算法](src/algorithms/graph/bellman-ford) - 找到图中所有顶点的最短路径
  * `A` [弗洛伊德算法](src/algorithms/graph/floyd-warshall) - 找到所有顶点对 之间的最短路径
  * `A` [判圈算法](src/algorithms/graph/detect-cycle) - 对于有向图和无向图 (基于 DFS 和不相交集的版本)
  * `A` [普林演算法](src/algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  * `A` [拓扑排序](src/algorithms/graph/topological-sorting) - DFS 方法
  * `A` [关节点](src/algorithms/graph/articulation-points) - Tarjan 算法 (基于 DFS)
  * `A` [桥](src/algorithms/graph/bridges) - 基于 DFS 的算法
  * `A` [欧拉回径与一笔画问题](src/algorithms/graph/eulerian-path) - Fleury 的算法 - 一次访问每个边
  * `A` [哈密顿图](src/algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  * `A` [强连通分量](src/algorithms/graph/strongly-connected-components) - Kosaraju 算法
  * `A` [旅行推销员问题](src/algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市
* **加密**
  * `B` [多项式 hash](src/algorithms/cryptography/polynomial-hash) - 基于多项式的 rolling hash 函数
* **机器学习**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) -7个简单的JS函数，说明机器如何实际学习（向前/向后传播）
* **未分类**
  * `B` [汉诺塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [旋转矩阵](src/algorithms/uncategorized/square-matrix-rotation) - 原地算法
  * `B` [跳跃游戏](src/algorithms/uncategorized/jump-game) - 回溯,、动态编程 (自上而下+自下而上) 和贪婪的例子
  * `B` [独特(唯一) 路径](src/algorithms/uncategorized/unique-paths) - 回溯、动态编程和基于 Pascal 三角形的例子
  * `B` [雨水收集](src/algorithms/uncategorized/rain-terraces) - 诱捕雨水问题 (动态编程和暴力版本)
  * `B` [递归楼梯](src/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * `A` [八皇后问题](src/algorithms/uncategorized/n-queens)
  * `A` [骑士巡逻](src/algorithms/uncategorized/knight-tour)

### 算法范式

算法范式是一种通用方法，基于一类算法的设计。这是比算法更高的抽象，就像算法是比计算机程序更高的抽象。

* **BF 算法** - `查找/搜索` 所有可能性并选择最佳解决方案
  * `B` [线性搜索](src/algorithms/search/linear-search)
  * `B` [雨水收集](src/algorithms/uncategorized/rain-terraces) - 诱导雨水问题
  * `B` [递归楼梯](src/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * `A` [最大子数列](src/algorithms/sets/maximum-subarray)
  * `A` [旅行推销员问题](src/algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市
  * `A` [离散傅里叶变换](src/algorithms/math/fourier-transform) - 把时间信号解析成构成它的频率
* **贪心法** - 在当前选择最佳选项，不考虑以后情况
  * `B` [跳跃游戏](src/algorithms/uncategorized/jump-game)
  * `A` [背包问题](src/algorithms/sets/knapsack-problem)
  * `A` [戴克斯特拉算法](src/algorithms/graph/dijkstra) - 找到所有图顶点的最短路径
  * `A` [普里姆算法](src/algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  * `A` [克鲁斯卡尔算法](src/algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
* **分治法** - 将问题分成较小的部分，然后解决这些部分
  * `B` [二分查找](src/algorithms/search/binary-search)
  * `B` [汉诺塔](src/algorithms/uncategorized/hanoi-tower)
  * `B` [杨辉三角形](src/algorithms/math/pascal-triangle)
  * `B` [欧几里得算法](src/algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  * `B` [归并排序](src/algorithms/sorting/merge-sort)
  * `B` [快速排序](src/algorithms/sorting/quick-sort)
  * `B` [树深度优先搜索](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [图深度优先搜索](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [跳跃游戏](src/algorithms/uncategorized/jump-game)
  * `B` [快速算次方](src/algorithms/math/fast-powering)
  * `A` [排列](src/algorithms/sets/permutations) (有/无重复)
  * `A` [组合](src/algorithms/sets/combinations) (有/无重复)
* **动态规划(Dynamic programming)** - 使用以前找到的子解决方案构建解决方案
  * `B` [斐波那契数](src/algorithms/math/fibonacci)
  * `B` [跳跃游戏](src/algorithms/uncategorized/jump-game)
  * `B` [独特路径](src/algorithms/uncategorized/unique-paths)
  * `B` [雨水收集](src/algorithms/uncategorized/rain-terraces) - 疏导雨水问题
  * `B` [递归楼梯](src/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * `A` [莱温斯坦距离](src/algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
  * `A` [最长公共子序列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最长公共子串](src/algorithms/string/longest-common-substring)
  * `A` [最长递增子序列](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短公共子序列](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0-1背包问题](src/algorithms/sets/knapsack-problem)
  * `A` [整数拆分](src/algorithms/math/integer-partition)
  * `A` [最大子数列](src/algorithms/sets/maximum-subarray)
  * `A` [贝尔曼-福特算法](src/algorithms/graph/bellman-ford) - 找到所有图顶点的最短路径
  * `A` [弗洛伊德算法](src/algorithms/graph/floyd-warshall) - 找到所有顶点对之间的最短路径
  * `A` [正则表达式匹配](src/algorithms/string/regular-expression-matching)
* **回溯法** - 类似于 `BF 算法` 试图产生所有可能的解决方案，但每次生成解决方案测试如果它满足所有条件，那么只有继续生成后续解决方案。否则回溯并继续寻找不同路径的解决方案。
  * `B` [跳跃游戏](src/algorithms/uncategorized/jump-game)
  * `B` [独特路径](src/algorithms/uncategorized/unique-paths)
  * `A` [幂集](src/algorithms/sets/power-set) - 该集合的所有子集
  * `A` [哈密顿图](src/algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  * `A` [八皇后问题](src/algorithms/uncategorized/n-queens)
  * `A` [骑士巡逻](src/algorithms/uncategorized/knight-tour)
  * `A` [组合求和](src/algorithms/sets/combination-sum) - 从规定的总和中找出所有的组合
* **Branch & Bound** - 记住在回溯搜索的每个阶段找到的成本最低的解决方案，并使用到目前为止找到的成本最小值作为下限。以便丢弃成本大于最小值的解决方案。通常，使用 BFS 遍历以及状态空间树的 DFS 遍历。

## 如何使用本仓库

**安装依赖**
```
npm install
```

**运行 ESLint**

检查代码质量

```
npm run lint
```

**执行测试**

```
npm test
```

**按照名称执行测试**
```
npm test -- 'LinkedList'
```

**Playground**

你可以在 `./src/playground/playground.js` 文件中操作数据结构与算法，并在 `./src/playground/__test__/playground.test.js` 中编写测试。

然后，只需运行以下命令来测试你的 Playground 是否无误:

```
npm test -- 'playground'
```

## 有用的信息

### 引用

[▶ YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### 大O符号

大O符号中指定的算法的增长顺序。

![Big O graphs](./assets/big-o-graph.png)

源: [Big O Cheat Sheet](http://bigocheatsheet.com/).

以下是一些最常用的 大O标记法 列表以及它们与不同大小输入数据的性能比较。

| 大O标记法      | 计算10个元素                 | 计算100个元素                 | 计算1000个元素                  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### 数据结构操作的复杂性

| 数据结构       |  连接  |  查找  |  插入  |  删除  | 备注 |
| -------------- | :----: | :----: | :----: | :----: | ---- |
| **数组**       |   1    |   n    |   n    |   n    |      |
| **栈**         |   n    |   n    |   1    |   1    |      |
| **队列**       |   n    |   n    |   1    |   1    |      |
| **链表**       |   n    |   n    |   1    |   1    |      |
| **哈希表**     |   -    |   n    |   n    |   n    | 在完全哈希函数情况下，复杂度是 O(1） |
| **二分查找树** |   n    |   n    |   n    |   n    | 在平衡树情况下，复杂度是 O(log(n)) |
| **B 树**       | log(n) | log(n) | log(n) | log(n) |      |
| **红黑树**     | log(n) | log(n) | log(n) | log(n) |      |
| **AVL 树**     | log(n) | log(n) | log(n) | log(n) |      |
| **布隆过滤器** |   -    |   1    |   1    | - | 存在一定概率的判断错误（误判成存在） |

### 数组排序算法的复杂性

| 名称                  | 最优      | 平均      | 最坏          | 内存      | 稳定      | 备注                  |
| --------------------- | :-------: | :-------: | :-----------: | :-------: | :-------: | --------------------- |
| **冒泡排序**          | n         | n^2       | n^2           | 1         | Yes       |                       |
| **插入排序**          | n         | n^2       | n^2           | 1         | Yes       |                       |
| **选择排序**          | n^2       | n^2       | n^2           | 1         | No        |                       |
| **堆排序**            | n log(n)  | n log(n)  | n log(n)      | 1         | No        |                       |
| **归并排序**          | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |                       |
| **快速排序**          | n log(n)  | n log(n)  | n^2           | log(n)    | No        | 在 in-place 版本下，内存复杂度通常是 O(log(n)) |
| **希尔排序**          | n log(n)  | 取决于差距序列   | n (log(n))^2  | 1         | No        |  |
| **计数排序**          | n + r     | n + r     | n + r         | n + r     | Yes       | r - 数组里最大的数    |
| **基数排序**          | n * k     | n * k     | n * k         | n + k     | Yes       | k - 最长 key 的升序   |

> ℹ️ A few more [projects](https://trekhleb.dev/projects/) and [articles](https://trekhleb.dev/blog/) about JavaScript and algorithms on [trekhleb.dev](https://trekhleb.dev)
