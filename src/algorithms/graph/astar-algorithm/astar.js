import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 */

// calculate heuristic cost(number of hop from start to end)
function heuristic_cost(graph, startNode, endNode){
  var arr = new Array();
  var count = 1;
  
  graph.getNeighbors(startNode).forEach((vertex) => {
    arr.push(vertex);
  });
  
  var cur = arr.pop();
  while(1){
    arr.forEach((vertex) => {
      graph.getNeighbors(vertex).forEach((child) => {
        arr.push(child);
      });
      arr.remove(arr.indexOf(vertex));
    });
    
    if(arr.indexOf(endNode) != -1){
      break;
    }
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

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
    closed[vertex.getKey()] = null;
    heuristic[vertex.getKey()] = heuristic_cost(graph, vertex, endVertex);
  });
  distances[startVertex.getKey()] = 0;
  heuristic[startVertex.getKey()] = 0;
  // Init vertices queue.
  open.add(startVertex, distances[startVertex.getKey] + heuristic[startVertex.getKey()]);

  while (!open.isEmpty()) {
    while(1){
      const currentVertex = open.poll();
      open.remove(currentVertex);
      
      if (!closed[currentVertex.getKey()]){
        break;
      }else if (closed[currentVertex.getKey()] > distances[currentVertex.getKey()] + heuristic[currentVertex.getKey()]){
        closed[currentVertex.getKey()] = distances[currentVertex.getKey()] + heuristic[currentVertex.getKey()];
        break;
      }
    }
    
    // Add current vertex to visited ones.
    closed[currentVertex.getKey()] = currentVertex;
    heuristic[currentVertex.getKey()] = distances[currentVertex.getKey()] + heuristic[currentVertex.getKey()];
    graph.getNeighbors(currentVertex).forEach((neighbor) => {
        // Update distances to every neighbor from current vertex.
        const edge = graph.findEdge(currentVertex, neighbor);
        const existingDistanceToNeighbor = distances[neighbor.getKey()];
        const distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edge.weight;
        
        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances[neighbor.getKey()] = distanceToNeighborFromCurrent;
      
          // Change priority.
          if (open.hasValue(neighbor)) {
            open.changePriority(neighbor, distances[neighbor.getKey()] + heuristic[neighbor.getKey()]);
          }

          // Remember previous vertex.
          previousVertices[neighbor.getKey()] = currentVertex;
        }

        // Add neighbor to the queue for further visiting.
        if (!open.hasValue(neighbor)) {
          open.add(neighbor, distances[neighbor.getKey()] + heuristic[neighbor.getKey()]);
        }
    });
  }

  return {
    distances,
    previousVertices,
  };
}
