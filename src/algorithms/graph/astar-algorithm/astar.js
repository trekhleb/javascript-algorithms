import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';
/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 */
// calculate heuristic cost(number of hop from start to end)
function heuristicCost(graph, startNode, endNode) {
  const arr = [];
  let count = 1;
  graph.getNeighbors(startNode).forEach((vertex) => {
    arr.push(vertex);
  });
  while (true) {
    if (arr.indexOf(endNode) !== -1) {
      break;
    }
    arr.forEach((vertex) => {
      graph.getNeighbors(vertex).forEach((child) => {
        arr.push(child);
      });
      arr.remove(arr.indexOf(vertex));
    });
    count += 1;
  }
  return count;
}
export default function astar(graph, startVertex, endVertex) {
  const distances = {};
  const heuristic = {};
  const previousVertices = {};
  const closed = {};
  const open = new PriorityQueue();
  let currentVertex = null;
  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
    closed[vertex.getKey()] = null;
    heuristic[vertex.getKey()] = heuristicCost(graph, vertex, endVertex);
  });
  distances[startVertex.getKey()] = 0;
  heuristic[startVertex.getKey()] = 0;
  // Init vertices queue.
  open.add(startVertex, distances[startVertex.getKey()] + heuristic[startVertex.getKey()]);
  while (!open.isEmpty()) {
    while (true) {
      currentVertex = open.poll();
      const currentKey = currentVertex.getKey();
      open.remove(currentVertex);
      if (!closed[currentVertex.getKey()]) {
        break;
      } else if (closed[currentKey] > distances[currentKey] + heuristic[currentKey]) {
        closed[currentKey] = distances[currentKey] + heuristic[currentKey];
        break;
      }
    }
    // Add current vertex to visited ones.
    closed[currentVertex.getKey()] = distances[currentVertex.getKey()];
    graph.getNeighbors(currentVertex).forEach((neighbor) => {
      // Update distances to every neighbor from current vertex.
      const edge = graph.findEdge(currentVertex, neighbor);
      const existingDistanceToNeighbor = distances[neighbor.getKey()];
      const distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edge.weight;
      const neighborKey = neighbor.getKey();
      if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
        distances[neighborKey] = distanceToNeighborFromCurrent;
        // Change priority.
        if (open.hasValue(neighbor)) {
          open.changePriority(neighbor, distances[neighborKey] + heuristic[neighborKey]);
        }
        // Remember previous vertex.
        previousVertices[neighborKey] = currentVertex;
      }
      // Add neighbor to the queue for further visiting.
      if (!open.hasValue(neighbor)) {
        open.add(neighbor, distances[neighborKey] + heuristic[neighborKey]);
      }
    });
  }
  return {
    distances,
    previousVertices,
  };
}
