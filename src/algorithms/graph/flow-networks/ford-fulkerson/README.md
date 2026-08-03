# Ford-Fulkerson

The Ford–Fulkerson method is a greedy algorithm that computes the maximum flow in a flow network. It is sometimes called a "method" instead of an "algorithm" as the approach to finding augmenting paths in a residual graph is not fully specified.

To see a Javascript implementation, go to the [Edmonds-Karp](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/edmonds-karp) algorithm.

Edmonds-Karp is an implementation of Ford-Fulkerson that specifies the use of [breadth-first search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search) (BFS) to determine the search order for an augmenting path.

### Residual Graph G<sub>f</sub>

Construction of a residual graph G<sub>f</sub> = ( V , E<sub>f</sub> ) is dependent on a flow `f` (and the graph `G` and its flow capacity `c`). Initialised at the start of the Ford-Fulkerson algorithm, it is updated at every pass of the main loop. It maintains the residual capacity c<sub>f</sub>(e) and edge set E<sub>f</sub> that depend on the flow `f`.

**Residual Graph Construction:**

Start with empty E<sub>f</sub> and c<sub>f</sub>(e). For each edge `e = (u,v)` with flow `f(e)` and capacity *c(e)*:

- if `f(e) < c(e)`: add *forward* edge e to E<sub>f</sub> with capacity *c<sub>f</sub>(e)* = `c(e) - f(e)`
- if `f(e) > 0`: add *backward* edge *e'=(v,u)* to E<sub>f</sub> with capacity *c<sub>f</sub>(e')* = `f(e)`

**Residual Graph Intuition:**

- when the flow through an edge is less than its capacity, you can still *push* at most the difference `c(e) - f(e) units of flow` along that edge
- when the flow through an edge is non-zero, you can *undo* all of the flow `f(e) units of flow` along that edge

### Pseudocode algorithm

**Algorithm**: Ford-Fulkerson
**Inputs:** a network `G = ( V, E )` with flow capacity `c`, source `s`, sink `t`
**Outputs:** the maximum value of the flow `|f|` from `s` to `t`

```pseudocode
FORD-FULKERSON(G,s,t,c)
	AUGMENT(f,P)
		bottleneck_cap_p = min {c_f(e) for e in P}
		f2(edge) = f(edge) for edge in E
		for edge in E
			if edge in path P
				f2(edge) = f(edge) + bottleneck_cap_p
			if reverse(edge) in path P
				f2(edge) = f(edge) - bottleneck_cap_p
		return f2

  f(edge) = 0 for edge in E
  G_f = residual graph of G (with respect to f and capacity c)
  while there exists a path P (from s to t) in G_f
    f = AUGMENT(f,P)
    Update G_f (by definition of residual graph with new f)

  return f
```

### Augmenting along a path

Augmenting along a path `P` always adds `min {c_f(e) for e in P}` to the flow through the network. `P` is any path from `s` to `t` in the residual graph *G<sub>f</sub>*.

### Demo of the algorithm working

![Ford-Fulkerson Demo](https://upload.wikimedia.org/wikipedia/commons/a/ad/FordFulkersonDemo.gif)

## References

- [Wikipedia | Ford-Fulkerson](https://en.wikipedia.org/wiki/Ford-Fulkerson_algorithm)
- [Wikipedia | Maximum Flow](https://en.wikipedia.org/wiki/Maximum_flow_problem)
- [Youtube | Max Flow Ford-Fulkerson](https://www.youtube.com/watch?v=LdOnanfc5TM)
- [Amazon | Introduction to Algorithms (CLRS)](https://www.amazon.co.uk/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844)
- [Wikipedia Commons | Ford-Fulkerson Demo](https://commons.wikimedia.org/wiki/File:FordFulkersonDemo.gif)

