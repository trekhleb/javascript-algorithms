import depthFirstSearch from '../depth-first-search/depthFirstSearch';

/**
 * Detect cycle in undirected graph using Depth First Search.
 *
 * @param {Graph} graph
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
        // Build an ordered cycle path array starting and ending at the repeated vertex.
        const cyclePath = [currentVertex];

        let previousCycleVertex = previousVertex;

        while (previousCycleVertex.getKey() !== currentVertex.getKey()) {
          cyclePath.push(previousCycleVertex);
          previousCycleVertex = parents[previousCycleVertex.getKey()];
        }

        cyclePath.push(previousCycleVertex);

        cycle = cyclePath;
      } else {
        // Add next vertex to visited set.
        visitedVertices[currentVertex.getKey()] = currentVertex;
        parents[currentVertex.getKey()] = previousVertex;
      }
    },
  };

  // Start DFS traversing.
  const startVertex = graph.getAllVertices()[0];
  depthFirstSearch(graph, startVertex, callbacks);

  return cycle;
}
