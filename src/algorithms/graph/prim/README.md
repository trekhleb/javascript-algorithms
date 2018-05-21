# Prim's Algorithm

In computer science, **Prim's algorithm** is a greedy algorithm that 
finds a minimum spanning tree for a weighted undirected graph. 

The algorithm operates by building this tree one vertex at a 
time, from an arbitrary starting vertex, at each step adding 
the cheapest possible connection from the tree to another vertex.

![Prim's Algorithm](https://upload.wikimedia.org/wikipedia/commons/f/f7/Prim%27s_algorithm.svg)

Prim's algorithm starting at vertex `A`. In the third step, edges 
`BD` and `AB` both have weight `2`, so `BD` is chosen arbitrarily. 
After that step, `AB` is no longer a candidate for addition 
to the tree because it links two nodes that are already 
in the tree.

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
- [Prim's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
- [Prim's Algorithm on YouTube by Tushar Roy](https://www.youtube.com/watch?v=oP2-8ysT3QQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Prim's Algorithm on YouTube by Michael Sambol](https://www.youtube.com/watch?v=cplfcGZmX7I&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
