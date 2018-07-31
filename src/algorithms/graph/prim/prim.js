import Graph from '../../../data-structures/graph/Graph';
import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export default function prim(graph) {
  // It should fire error if graph is directed since the algorithm works only
  // for undirected graphs.
  if (graph.isDirected) {
    throw new Error('Prim\'s algorithms works only for undirected graphs');
  }

  // Init new graph that will contain minimum spanning tree of original graph.
  const minimumSpanningTree = new Graph();

  // This priority queue will contain all the edges that are starting from
  // visited nodes and they will be ranked by edge weight - so that on each step
  // we would always pick the edge with minimal edge weight.
  const edgesQueue = new PriorityQueue();

  // Set of vertices that has been already visited.
  const visitedVertices = {};

  // Vertex from which we will start graph traversal.
  const startVertex = graph.getAllVertices()[0];

  // Add start vertex to the set of visited ones.
  visitedVertices[startVertex.getKey()] = startVertex;

  // Add all edges of start vertex to the queue.
  startVertex.getEdges().forEach((graphEdge) => {
    edgesQueue.add(graphEdge, graphEdge.weight);
  });

  // Now let's explore all queued edges.
  while (!edgesQueue.isEmpty()) {
    // Fetch next queued edge with minimal weight.
    /** @var {GraphEdge} currentEdge */
    const currentMinEdge = edgesQueue.poll();

    // Find out the next unvisited minimal vertex to traverse.
    let nextMinVertex = null;
    if (!visitedVertices[currentMinEdge.startVertex.getKey()]) {
      nextMinVertex = currentMinEdge.startVertex;
    } else if (!visitedVertices[currentMinEdge.endVertex.getKey()]) {
      nextMinVertex = currentMinEdge.endVertex;
    }

    // If all vertices of current edge has been already visited then skip this round.
    if (nextMinVertex) {
      // Add current min edge to MST.
      minimumSpanningTree.addEdge(currentMinEdge);

      // Add vertex to the set of visited ones.
      visitedVertices[nextMinVertex.getKey()] = nextMinVertex;

      // Add all current vertex's edges to the queue.
      nextMinVertex.getEdges().forEach((graphEdge) => {
        // Add only vertices that link to unvisited nodes.
        if (
          !visitedVertices[graphEdge.startVertex.getKey()]
          || !visitedVertices[graphEdge.endVertex.getKey()]
        ) {
          edgesQueue.add(graphEdge, graphEdge.weight);
        }
      });
    }
  }

  return minimumSpanningTree;
}
