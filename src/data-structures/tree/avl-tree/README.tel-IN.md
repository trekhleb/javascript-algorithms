# AVL Tree

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Computer science లో **AVL tree** (కనిపెట్టిన Adelson-Velsky, Landis పేర్ల మీద వచ్చింది) అనేది
తనని తానే balance చేసుకునే binary search tree. ఇలాంటి data structure లలో మొదట కనిపెట్టింది ఇదే.
AVL tree లో, ఏ node కైనా దాని రెండు child subtrees ఎత్తుల మధ్య తేడా మహా అయితే ఒకటి; ఎప్పుడైనా
తేడా ఒకటి కంటే ఎక్కువ అయితే, ఈ property మళ్ళీ రావడానికి rebalancing చేస్తారు. Lookup, insertion,
deletion — ఇవన్నీ average, worst cases రెండిట్లోనూ `O(log n)` టైమ్ తీసుకుంటాయి, ఇక్కడ n అంటే operation
ముందు tree లో ఉన్న nodes సంఖ్య. Insertions, deletions తర్వాత tree ని ఒకటి లేదా అంతకంటే ఎక్కువ tree
rotations తో rebalance చేయాల్సి రావొచ్చు.

AVL tree లో చాలా elements insert చేయడాన్ని చూపించే animation. ఇందులో left, right, left-right,
right-left rotations ఉన్నాయి.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

Balance factors (ఆకుపచ్చ) తో AVL tree

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
* [YouTube లో AVL Tree Insertion](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
