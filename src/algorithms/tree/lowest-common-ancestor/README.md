# Lowest common ancestor(LCA) algorithm

In graph theory and computer science, the lowest common ancestor (LCA) of two nodes v and w in a tree or directed acyclic graph (DAG) T is the lowest (i.e. deepest) node that has both v and w as descendants, where we define each node to be a descendant of itself (so if v has a direct connection from w, w is the lowest common ancestor).

The LCA of v and w in T is the shared ancestor of v and w that is located farthest from the root. Computation of lowest common ancestors may be useful, for instance, as part of a procedure for determining the distance between pairs of nodes in a tree: the distance from v to w can be computed as the distance from the root to v, plus the distance from the root to w, minus twice the distance from the root to their lowest common ancestor (Djidjev, Pantziou & Zaroliagis 1991). In ontologies, the lowest common ancestor is also known as the least common subsumer.

In a tree data structure where each node points to its parent, the lowest common ancestor can be easily determined by finding the first intersection of the paths from v and w to the root. In general, the computational time required for this algorithm is O(h) where h is the height of the tree (length of longest path from a leaf to the root). However, there exist several algorithms for processing trees so that lowest common ancestors may be found more quickly. Tarjan's off-line lowest common ancestors algorithm, for example, preprocesses a tree in linear time to provide constant-time LCA queries. In general DAGs, similar algorithms exist, but with super-linear complexity. 


## References

 - [Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor) (https://en.wikipedia.org/wiki/Lowest_common_ancestor)

