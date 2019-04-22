# Segment Tree

_Read this in other languages:_
[_Português_](README.pt-BR.md) 

In computer science, a **segment tree** also known as a statistic tree 
is a tree data structure used for storing information about intervals, 
or segments. It allows querying which of the stored segments contain 
a given point. It is, in principle, a static structure; that is, 
it's a structure that cannot be modified once it's built. A similar 
data structure is the interval tree.

A segment tree is a binary tree. The root of the tree represents the 
whole array. The two children of the root represent the 
first and second halves of the array. Similarly, the 
children of each node corresponds to the two halves of 
the array corresponding to the node.

We build the tree bottom up, with the value of each node 
being the "minimum" (or any other function) of its children's values. This will 
take `O(n log n)` time. The number 
of operations done is the height of the tree, which 
is `O(log n)`. To do range queries, each node splits the 
query into two parts, one sub-query for each child. 
If a query contains the whole subarray of a node, we 
can use the precomputed value at the node. Using this 
optimisation, we can prove that only `O(log n)` minimum 
operations are done.

![Min Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/RangeMinimumQuery.png)

![Sum Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/segment-tree1.png)

## Application

A segment tree is a data structure designed to perform 
certain array operations efficiently - especially those 
involving range queries.

Applications of the segment tree are in the areas of computational geometry, 
and geographic information systems.

Current implementation of Segment Tree implies that you may
pass any binary (with two input params) function to it and 
thus you're able to do range query for variety of functions.
In tests you may find examples of doing `min`, `max` and `sam` range
queries on SegmentTree.
 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
- [YouTube](https://www.youtube.com/watch?v=ZBHKZF5w4YU&index=65&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)
