# 快速排序

快速排序是一种分而治之的算法。快速排序首先将一个大数组分成两个较小的子数组：比某个数小的元素和比某个数大的元素。然后快速排序可以递归地对子数组进行排序。

步骤是：

1. 从数组中选择一个元素，称为基点

2. 分区：对数组重新排序，使所有值小于基点的元素都在它左边，而所有值大于基点的元素都在它右边（相等的值可以放在任何一边）。在此分区之后，基点处于其最终位置（左边和右边的中间位置）。这称为分区操作。

3. 递归地将上述步骤应用于左边的数组和右边的数组。

快速排序算法的动画可视化。水平线是基点值。

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## 复杂度

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments                                                      |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------------------------------------------------------------ |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |

## 引用

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
