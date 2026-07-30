import depthFirstSearch from '../depth-first-search/depthFirstSearch';

/**
 * Detect cycle in undirected graph using Depth First Search.
 *
 * @param {Graph} graph
 */
export default function detectUndirectedCycle(graph) {
  let cyclePath = null;

  // List of vertices that we have visited.
  const visitedVertices = {};

  // List of parents vertices for every visited vertex.
  const parents = {};

  // Callbacks for DFS traversing.
  const callbacks = {
    allowTraversal: ({ currentVertex, nextVertex }) => {
      // Don't allow further traversal in case if cycle has been detected.
      if (cyclePath) {
        return false;
      }

      // Don't allow traversal from child back to its parent.
      const currentVertexParent = parents[currentVertex.getKey()];
      const currentVertexParentKey = currentVertexParent ? currentVertexParent.getKey() : null;

      return currentVertexParentKey !== nextVertex.getKey();
    },
    enterVertex: ({ currentVertex, previousVertex }) => {
      if (visitedVertices[currentVertex.getKey()]) {
        // A cycle is detected. Construct the cycle path as an array.
        cyclePath = [];
        
        // Build path from previousVertex up to the common ancestor
        const pathFromPrevious = [];
        let current = previousVertex;
        while (current && current.getKey() !== currentVertex.getKey()) {
          pathFromPrevious.push(current);
          current = parents[current.getKey()];
        }
        
        // Add currentVertex (the one that was already visited)
        pathFromPrevious.push(currentVertex);
        
        // Reverse the path to get proper order and close the cycle
        cyclePath = [...pathFromPrevious.reverse(), previousVertex];
      } else {
        // Add next vertex to visited set.
        visitedVertices[currentVertex.getKey()] = currentVertex;
        parents[currentVertex.getKey()] = previousVertex;
      }
    },
  };

  // Start DFS traversing.
  const allVertices = graph.getAllVertices();
  if (allVertices.length === 0) {
    return null;
  }
  
  const startVertex = allVertices[0];
  depthFirstSearch(graph, startVertex, callbacks);

  return cyclePath;
}
