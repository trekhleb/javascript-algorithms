import depthFirstSearch from '../depth-first-search/depthFirstSearch';

/**
 * Detect cycle in undirected graph using Depth First Search.
 *
 * @param {Graph} graph
 * @returns {Vertex[] | null} ordered array of vertices forming the cycle (first === last), or null
 */
export default function detectUndirectedCycle(graph) {
  let cycle = null; // will hold ordered array once found

  const visitedVertices = {}; // visited vertices
  const parents = {}; // parent for every visited vertex

  const callbacks = {
    allowTraversal: ({ currentVertex, nextVertex }) => {
      if (cycle) return false; // stop traversal once cycle is found

      const currentVertexParent = parents[currentVertex.getKey()];
      const currentVertexParentKey = currentVertexParent
        ? currentVertexParent.getKey()
        : null;

      return currentVertexParentKey !== nextVertex.getKey();
    },

    enterVertex: ({ currentVertex, previousVertex }) => {
      if (visitedVertices[currentVertex.getKey()]) {
        // Build ordered cycle array
        const startKey = currentVertex.getKey();
        const cycleArr = [currentVertex];

        let walker = previousVertex;
        while (walker && walker.getKey() !== startKey) {
          cycleArr.push(walker);
          walker = parents[walker.getKey()];
        }

        cycleArr.push(currentVertex); // close the cycle
        cycle = cycleArr;
      } else {
        visitedVertices[currentVertex.getKey()] = currentVertex;
        parents[currentVertex.getKey()] = previousVertex;
      }
    },
  };

  const allVertices = graph.getAllVertices();
  for (let i = 0; i < allVertices.length; i += 1) {
    const startVertex = allVertices[i];

    if (!visitedVertices[startVertex.getKey()]) {
      depthFirstSearch(graph, startVertex, callbacks);

      if (cycle) break; // early exit once cycle is found
    }
  }

  return cycle;
}
