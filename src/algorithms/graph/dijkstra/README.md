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

## Practical applications of Dijkstra's algorithm

- GPS / navigation systems
- Public transit and airline route optimization
- Internet routing (OSPF, IS-IS protocols)
- Network traffic & latency optimization
- Game pathfinding (shortest path on maps)
- Logistics & delivery route optimization
- Supply chain & transportation network design

## Step-by-step Dijkstra's algorithm example

Let's say we have a graph of nodes, where each edge has a distance parameter between nodes. Let's say the distance from node `A` and node `B` is `7 meters`, and so on.

The algorithm uses [Priority Queue](../../../data-structures/priority-queue/) to always pull the next unvisited vertex that has the smallest distance from the origin node.

The start node by definition has a distance of `0m` from itself. So we start from it, the only node in the priority queue.

![Dijkstra step 1](./images/dijkstra-01.png)

Each neighbor of the pulled (from the queue) node is being traversed to calculate the distance to it from the origin. For example the distance from `A` to `B` is `0 + 7 = 7m`, and so on.

Every time we visit a not yet seen neighbor, we add it to the priority queue, where the priority is a distance to the neighbor node from the origin node.

![Dijkstra step 2](./images/dijkstra-02.png)

![Dijkstra step 3](./images/dijkstra-03.png)

![Dijkstra step 4](./images/dijkstra-04.png)

Once all the neighbors of the current nodes were checked, the current node is being put to the `visited` set. We don't want to visit such nodes ones again during the upcoming traverses.

Now, let's pull out the next node from the priority queue that is closest to the origin (has a shorter distance). We start visiting its neighbors as well.

![Dijkstra step 5](./images/dijkstra-05.png)

If the node that we're visiting (in this case the node `C`) is already in the queue, it means we already calculated the distance to it before but from another node/path (`A → C`). If the current distance to it (from the current neighbor node `A → B → C`) is shorter than the one that was calculated before, we update the distance (in the priority queue) to the shortest one, since we're searching for the shortest paths. If the distance from the current neighbor is actually longer that the once was already calculated, we leave it like this without updating the `C` node distance in the queue.

![Dijkstra step 6](./images/dijkstra-06.png)

![Dijkstra step 7](./images/dijkstra-07.png)

![Dijkstra step 8](./images/dijkstra-08.png)

![Dijkstra step 9](./images/dijkstra-09.png)

![Dijkstra step 10](./images/dijkstra-10.png)

![Dijkstra step 11](./images/dijkstra-11.png)

![Dijkstra step 12](./images/dijkstra-12.png)

![Dijkstra step 13](./images/dijkstra-13.png)

![Dijkstra step 14](./images/dijkstra-14.png)

![Dijkstra step 15](./images/dijkstra-15.png)

![Dijkstra step 16](./images/dijkstra-16.png)

Now we now the shortest distances to ech node from the start node `A`. In practice, during the distance calculations we also record the the `previousVertices` for each node to be able to show the exact sequence of nodes that forms the shortest path.

## Implementation example

- [dijkstra.js](./dijkstra.js)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [On YouTube by Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [On YouTube by Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
