# AVL 树 (二叉平衡搜索树)

在计算机科学中，**AVL 树** (以发明者 Adelson-Velsky 和 Landis
的名字命名) 是一颗自平衡的二叉搜索树，它是最先发明的自平衡二叉查找树。
在 AVL 树中，任意节点的左右两颗子树高度最多相差 1，当高度差超过 1 时
则会自动进行自平衡调整。不管是一般情况还是最坏的情况，查找、插入、删除操作
的时间复杂度都为 `O(log n)`，其中 n 是操作 AVL 树时的节点数据量。插入和删除
操作可能需要 AVL 进行一次或则多次旋转以便保持自平衡。

以下为动画演示 AVL 树的元素插入过程。它包含了左旋、右旋、左旋-右旋、右旋-左旋。

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

为 AVL 树标注平衡因子 (绿色数字)

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### AVL 树的旋转类型

**LL 型旋转 (Left-Left Rotation)**

![Left-Left Rotation](http://btechsmartclass.com/data_structures/ds_images/LL%20Rotation.png)

**RR 型旋转(Right-Right Rotation)**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RR%20Rotation.png)

**LR 型旋转 (Left-Right Rotation)**

![Left-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/LR%20Rotation.png)

**RL 型旋转 (Right-Left Rotation)**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RL%20Rotation.png)

## 参考

* [维基百科 (Wikipedia)](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
* [AVL 树插入 (YouTube)](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL 树可视化交互面板](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
