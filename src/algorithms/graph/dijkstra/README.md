# Dijkstra's Algorithm

_Read this in other languages:_
[_한국어_](README.ko-KR.md)

Dijkstra's algorithm is an algorithm for finding the shortest 
paths between nodes in a graph, which may represent, for example, 
road networks. 

The algorithm exists in many variants; Dijkstra's original variant 
found the shortest path between two nodes, but a more common 
variant fixes a single node as the "source" node and finds 
shortest paths from the source to all other nodes in the graph, 
producing a shortest-path tree.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

Dijkstra's algorithm to find the shortest path between `a` and `b`.
It picks the unvisited vertex with the lowest distance, 
calculates the distance through it to each unvisited neighbor, 
and updates the neighbor's distance if smaller. Mark visited
(set to red) when done with neighbors.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [On YouTube by Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [On YouTube by Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
