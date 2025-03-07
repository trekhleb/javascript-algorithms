# Eulerian Path

In graph theory, an **Eulerian trail** (or **Eulerian path**) is a 
trail in a finite graph which visits every edge exactly once.
Similarly, an **Eulerian circuit** or **Eulerian cycle** is an 
Eulerian trail which starts and ends on the same vertex.

Euler proved that a necessary condition for the existence of Eulerian 
circuits is that all vertices in the graph have an even degree, and 
stated that connected graphs with all vertices of even degree have 
an Eulerian circuit.

![Eulerian Circuit](https://upload.wikimedia.org/wikipedia/commons/7/72/Labelled_Eulergraph.svg)

Every vertex of this graph has an even degree. Therefore, this is 
an Eulerian graph. Following the edges in alphabetical order gives 
an Eulerian circuit/cycle.

For the existence of Eulerian trails it is necessary that zero or 
two vertices have an odd degree; this means the Königsberg graph 
is not Eulerian. If there are no vertices of odd degree, 
all Eulerian trails are circuits. If there are exactly two vertices 
of odd degree, all Eulerian trails start at one of them and end at 
the other. A graph that has an Eulerian trail but not an Eulerian 
circuit is called semi-Eulerian.

![Königsberg graph](https://upload.wikimedia.org/wikipedia/commons/9/96/K%C3%B6nigsberg_graph.svg)

The Königsberg Bridges multigraph. This multigraph is not Eulerian, 
therefore, a solution does not exist.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Eulerian_path)
- [YouTube](https://www.youtube.com/watch?v=vvP4Fg4r-Ns&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
