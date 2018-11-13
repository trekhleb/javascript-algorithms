import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @param {Graph} graph
 * Implements Khan's algorithms
 */
export default function topologicalSort(graph) {
  // Count the preceders for all ndoes.
  const precederCounts = {};

  // Order nodes by number of preceders.
  const priorityQueue = new PriorityQueue();

  // The resulting sorted list.
  const sortedStack = [];

  // Initialize the counter array.
  graph.getAllVertices().forEach((vertex) => {
    precederCounts[vertex.getKey()] = 0;
  });

  // Count preceders for all nodes.
  graph.getAllEdges().forEach((edge) => {
    precederCounts[edge.endVertex.getKey()] = precederCounts[edge.endVertex.getKey()] + 1;
  });

  graph.getAllVertices().forEach((vertex) => {
    priorityQueue.add(vertex, precederCounts[vertex.getKey()]);
  });

  while (!priorityQueue.isEmpty()) {
    const vertex = priorityQueue.poll();

    sortedStack.push(vertex);
    vertex.getEdges().forEach((edge) => {
      // Decrease counter for all child nodes.
      precederCounts[edge.endVertex.getKey()] = precederCounts[edge.endVertex.getKey()] - 1;

      // Update the information in priority queue.
      priorityQueue.changePriority(edge.endVertex, precederCounts[edge.endVertex.getKey()]);
    });
  }

  return sortedStack;
}
