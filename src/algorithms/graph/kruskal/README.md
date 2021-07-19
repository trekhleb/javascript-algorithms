# Kruskal's Algorithm

_Read this in other languages:_
[_한국어_](README.ko-KR.md)

Kruskal's algorithm is a minimum-spanning-tree algorithm which 
finds an edge of the least possible weight that connects any two 
trees in the forest. It is a greedy algorithm in graph theory 
as it finds a minimum spanning tree for a connected weighted 
graph adding increasing cost arcs at each step. This means it 
finds a subset of the edges that forms a tree that includes every
vertex, where the total weight of all the edges in the tree is 
minimized. If the graph is not connected, then it finds a 
minimum spanning forest (a minimum spanning tree for each 
connected component).

![Kruskal Algorithm](https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif)

![Kruskal Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

A demo for Kruskal's algorithm based on Euclidean distance.

## Minimum Spanning Tree

A **minimum spanning tree** (MST) or minimum weight spanning tree 
is a subset of the edges of a connected, edge-weighted 
(un)directed graph that connects all the vertices together, 
without any cycles and with the minimum possible total edge 
weight. That is, it is a spanning tree whose sum of edge weights 
is as small as possible. More generally, any edge-weighted 
undirected graph (not necessarily connected) has a minimum 
spanning forest, which is a union of the minimum spanning 
trees for its connected components.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

A planar graph and its minimum spanning tree. Each edge is 
labeled with its weight, which here is roughly proportional 
to its length.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

This figure shows there may be more than one minimum spanning 
tree in a graph. In the figure, the two trees below the graph 
are two possibilities of minimum spanning tree of the given graph.

## References

- [Minimum Spanning Tree on Wikipedia](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [Kruskal's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
- [Kruskal's Algorithm on YouTube by Tushar Roy](https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Kruskal's Algorithm on YouTube by Michael Sambol](https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
