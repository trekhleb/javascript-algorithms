# Floyd–Warshall Algorithm

In computer science, the **Floyd–Warshall algorithm** is an algorithm for finding
shortest paths in a weighted graph with positive or negative edge weights (but
with no negative cycles). A single execution of the algorithm will find the 
lengths (summed weights) of shortest paths between all pairs of vertices. Although 
it does not return details of the paths themselves, it is possible to reconstruct 
the paths with simple modifications to the algorithm.

## Algorithm

The Floyd–Warshall algorithm compares all possible paths through the graph between 
each pair of vertices. It is able to do this with `O(|V|^3)` comparisons in a graph.
This is remarkable considering that there may be up to `|V|^2` edges in the graph, 
and every combination of edges is tested. It does so by incrementally improving an 
estimate on the shortest path between two vertices, until the estimate is optimal.

Consider a graph `G` with vertices `V` numbered `1` through `N`. Further consider 
a function `shortestPath(i, j, k)` that returns the shortest possible path 
from `i` to `j` using vertices only from the set `{1, 2, ..., k}` as 
intermediate points along the way. Now, given this function, our goal is to 
find the shortest path from each `i` to each `j` using only vertices 
in `{1, 2, ..., N}`.

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/f9b75e25063384ccca499c56f9a279abf661ad3b)

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ac7c89bbb18df3fd660225fd38997079e5e513)
![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/0326d6c14def89269c029da59eba012d0f2edc9d)

This formula is the heart of the Floyd–Warshall algorithm.

## Example

The algorithm above is executed on the graph on the left below:

![Example](https://upload.wikimedia.org/wikipedia/commons/2/2e/Floyd-Warshall_example.svg)

In the tables below `i` is row numbers and `j` is column numbers.


**k = 0**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | ∞   |
| **2** |	4   |	0   |	3	  | ∞   |
| **3** |	∞   |	∞   |	0	  | 2   |
| **4** |	∞   |	−1  | ∞   | 0   |


**k = 1**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** | 0   | ∞   | −2  | ∞   |
| **2** | 4   | 0   |  2  | ∞   |
| **3** | ∞   | ∞   |  0  | 2   |
| **4** | ∞   | −   |  ∞  | 0   |


**k = 2**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | ∞   |
| **2** |	4   |	0   | 2	  | ∞   |
| **3** |	∞   |	∞	  | 0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |


**k = 3**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	∞   |	−2  | 0   |
| **2** |	4   |	0   |	2	  | 4   |
| **3** |	∞   |	∞   |	0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |


**k = 4**

|       | 1   | 2   | 3   | 4   |
|:-----:|:---:|:---:|:---:|:---:|
| **1** |	0   |	−1  | −2  | 0   |
| **2** |	4   |	0	  | 2	  | 4   |
| **3** |	5   |	1	  | 0	  | 2   |
| **4** |	3   |	−1  | 1   | 0   |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
- [YouTube (by Abdul Bari)](https://www.youtube.com/watch?v=oNI0rf2P9gE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=74)
- [YouTube (by Tushar Roy)](https://www.youtube.com/watch?v=LwJdNfdLF9s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=75)
