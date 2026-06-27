import depthFirstSearch from '../depth-first-search/depthFirstSearch';

/**
 * Detect cycle in undirected graph using Depth First Search.
 *
 * @param {Graph} graph
 * @return {Object|null} - cycle object or null if no cycle detected.
 * The cycle object has vertex keys as properties and parent vertices as values,
 * representing the mapping of each vertex in the cycle to its predecessor.
 */
export default function detectUndirectedCycle(graph) {
  let cycle = null;

  // List of vertices that we have visited.
  const visitedVertices = {};

  // List of parents vertices for every visited vertex.
  const parents = {};

  // Callbacks for DFS traversing.
  const callbacks = {
    allowTraversal: ({ currentVertex, nextVertex }) => {
      // Don't allow further traversal in case if cycle has been detected.
      // This provides an early exit once a cycle is found, avoiding
      // unnecessary traversal of the remaining graph.
      if (cycle) {
        return false;
      }

      // Don't allow traversal from child back to its parent.
      const currentVertexParent = parents[currentVertex.getKey()];
      const currentVertexParentKey = currentVertexParent ? currentVertexParent.getKey() : null;
      return currentVertexParentKey !== nextVertex.getKey();
    },
    enterVertex: ({ currentVertex, previousVertex }) => {
      if (visitedVertices[currentVertex.getKey()]) {
        // Compile cycle path based on parents of previous vertices.
        // The cycle is represented as an object where each key is a vertex
        // in the cycle and its value is the previous vertex in the path.
        cycle = {};

        let currentCycleVertex = currentVertex;
        let previousCycleVertex = previousVertex;

        while (previousCycleVertex.getKey() !== currentVertex.getKey()) {
          cycle[currentCycleVertex.getKey()] = previousCycleVertex;
          currentCycleVertex = previousCycleVertex;
          previousCycleVertex = parents[previousCycleVertex.getKey()];
        }

        cycle[currentCycleVertex.getKey()] = previousCycleVertex;
      } else {
        // Add next vertex to visited set.
        visitedVertices[currentVertex.getKey()] = currentVertex;
        parents[currentVertex.getKey()] = previousVertex;
      }
    },
  };

  // Start DFS traversing from the first vertex.
  // Note: For disconnected graphs, this will only detect cycles in the
  // component containing the first vertex.
  const startVertex = graph.getAllVertices()[0];
  depthFirstSearch(graph, startVertex, callbacks);

  return cycle;
}
