# Dijkstra's Algorithm

_Read this in other languages:_
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_Українська_](README.uk-UA.md),
[_Español_](README.es-ES.md),
[_Français_](README.fr-FR.md),
[_Deutsch_](README.de-DE.md),
[_עברית_](README.he-IL.md)

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

Let's say we have a weighted graph of nodes, where each edge has a distance parameter between nodes. Let's say the distance from node `A` and node `B` is `7 meters` (or just `7m` for brevity), and so on.

The algorithm uses [Priority Queue](../../../data-structures/priority-queue/) to always pull the next unvisited vertex that has the smallest distance from the origin node.

The start node, by definition, has a distance of `0m` from itself. So we start from it, the only node in the priority queue.

The rest of the nodes will be added to the priority queue later during the graph traversal (while visiting the neighbors).

![Dijkstra step 1](./images/dijkstra-01.png)

Each neighbor of the pulled (from the queue) node is being traversed to calculate the distance to it from the origin. For example, the distance from `A` to `B` is `0m + 7m = 7m`, and so on.

Every time we visit a not-yet-seen neighbor, we add it to the priority queue, where the priority is the distance to the neighbor node from the origin node.

The node `B` is being added to the min priority queue to be traversed later.

![Dijkstra step 2](./images/dijkstra-02.png)

Visiting the next neighbor `C` of the node `A`. The distance from the origin node `A` to `C` is `0m + 9m = 9m`.

The node `C` is being added to the min priority queue to be traversed later.

![Dijkstra step 3](./images/dijkstra-03.png)

Same for the node `F`. The current distance to `F` from the origin node `A` is `0m + 14m = 14m`.

The node `F` is being added to the min priority queue to be traversed later.

![Dijkstra step 4](./images/dijkstra-04.png)

Once all the neighbors of the current node were checked, the current node was added to the `visited` set. We don't want to visit such nodes once again during the upcoming traverses.

Now, let's pull out the next node from the priority queue that is closest to the origin (has a shorter distance). We start visiting its neighbors as well.

![Dijkstra step 5](./images/dijkstra-05.png)

If the node that we're visiting (in this case, the node `C`) is already in the queue, it means we already calculated the distance to it before, but from another node/path (`A → C`). If the current distance to it (from the current neighbor node `A → B → C`) is shorter than the one that was calculated before, we update the distance (in the priority queue) to the shortest one, since we're searching for the shortest paths. If the distance from the current neighbor is actually longer than the one that was already calculated, we leave it like this without updating the `C` node distance in the queue.

While visiting the node `C` via `B` (the path `A → B → C`), we see that the distance to it would be `7m + 10m = 17m`. This is actually longer than the already recorded distance of `9m` for the path `A → C`. In such cases, we just ignore the longest distance and don't update the priority (the minimum found distance at the moment from the origin node).

![Dijkstra step 6](./images/dijkstra-06.png)

Visiting another neighbor of `B`, which is `D`. The distance to `D` equals `7m + 15m = 22m`. Since we didn't visit `D` yet and it is not in the min priority queue, let's just add it to the queue with a priority (distance) of `22m`.

![Dijkstra step 7](./images/dijkstra-07.png)

At this point, all of the neighbors of `B` were traversed, so we add `B` to the `visited` set. Next, we pull the node that is closest to the origin node from the priority queue.

![Dijkstra step 8](./images/dijkstra-08.png)

Traversing the unvisited neighbors of the node `C`. The distance to node `F` via `C` (the path `A → C → F`) is `9m + 2m = 11m`. This is actually shorter than the previously recorded path `A → F` of `14m` length. In such cases, we update the distance to `F` to `11m` and update its priority in the queue from `14m` to `11m`. We've just found a shorter path to `F`.

![Dijkstra step 9](./images/dijkstra-09.png)

The same goes for `D`. We've just found a shorter path to `D`, where `A → C → D` is shorter than `A → B → D`. Updating the distance from `22m` to `20m`.

![Dijkstra step 10](./images/dijkstra-10.png)

All neighbors of `C` were traversed, so we may add `C` to the `visited` set. Pulling the next closest node from the queue, which is `F`.

![Dijkstra step 11](./images/dijkstra-11.png)

Recording the distance to `E` as `11m + 9m = 20m`.

![Dijkstra step 12](./images/dijkstra-12.png)

Adding the node `F` to the `visited` set, and pulling the next closest node `D` from the queue.

![Dijkstra step 13](./images/dijkstra-13.png)

Distance to `E` via `D` is `20m + 6m = 26m`. This is longer than the already calculated distance to `E` from `F`, which is `20m`. We can discard the longer distance.

![Dijkstra step 14](./images/dijkstra-14.png)

Node `D` is visited now.

![Dijkstra step 15](./images/dijkstra-15.png)

Node `E` is visited now as well. We've finished the graph traversal.

![Dijkstra step 16](./images/dijkstra-16.png)

Now we know the shortest distances to each node from the start node `A`.

In practice, during the distance calculations, we also record the `previousVertices` for each node to be able to show the exact sequence of nodes that form the shortest path.

For example, the shorter path from `A` to `E` is `A → C → F → E`.

## Implementation example

- [dijkstra.js](./dijkstra.js)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [On YouTube by Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [On YouTube by Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
