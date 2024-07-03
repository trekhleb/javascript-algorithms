# AVL Tree

_Read this in other languages:_
[_Português_](README.pt-BR.md)

In computer science, an **AVL tree** (named after inventors 
Adelson-Velsky and Landis) is a self-balancing binary search 
tree. It was the first such data structure to be invented. 
In an AVL tree, the heights of the two child subtrees of any
node differ by at most one; if at any time they differ by 
more than one, rebalancing is done to restore this property.
Lookup, insertion, and deletion all take `O(log n)` time in 
both the average and worst cases, where n is the number of 
nodes in the tree prior to the operation. Insertions and 
deletions may require the tree to be rebalanced by one or 
more tree rotations.

Animation showing the insertion of several elements into an AVL 
tree. It includes left, right, left-right and right-left rotations.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

AVL tree with balance factors (green)

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### AVL Tree Rotations

**Left-Left Rotation**

![Left-Left Rotation](http://btechsmartclass.com/data_structures/ds_images/LL%20Rotation.png)

**Right-Right Rotation**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RR%20Rotation.png)

**Left-Right Rotation**

![Left-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/LR%20Rotation.png)

**Right-Left Rotation**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RL%20Rotation.png)

## References

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
