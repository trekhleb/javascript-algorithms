import depthFirstSearch from '../depth-first-search/depthFirstSearch';

/**
 * Helper class for visited vertex metadata.
 */
class VisitMetadata {
  constructor({ discoveryTime, lowDiscoveryTime }) {
    this.discoveryTime = discoveryTime;
    this.lowDiscoveryTime = lowDiscoveryTime;

    // We need this to know to which vertex we need to compare discovery time
    // when leaving the vertex.
    this.childVertex = null;

    // We need this in order to check graph root node, whether it has two
    // disconnected children or not.
    this.childrenCount = 0;
  }
}

/**
 * Tarjan's algorithm for rinding articulation points in graph.
 *
 * @param {Graph} graph
 * @return {GraphVertex[]}
 */
export default function articulationPoints(graph) {
  // Set of vertices we've already visited during DFS.
  const visitedSet = {};

  // Set of articulation points found so far.
  const articulationPointsSet = [];

  // Time needed to get to the current vertex.
  let discoveryTime = 0;

  // Peek the start vertex for DFS traversal.
  const startVertex = graph.getAllVertices()[0];

  const dfsCallbacks = {
    /**
     * @param {GraphVertex} currentVertex
     * @param {GraphVertex} previousVertex
     */
    enterVertex: ({ currentVertex, previousVertex }) => {
      // Put current vertex to visited set.
      visitedSet[currentVertex.getKey()] = new VisitMetadata({
        discoveryTime,
        lowDiscoveryTime: discoveryTime,
      });

      // Tick discovery time.
      discoveryTime += 1;

      if (previousVertex) {
        // Update child vertex information for previous vertex.
        visitedSet[previousVertex.getKey()].childVertex = currentVertex;

        // Update children counter for previous vertex.
        visitedSet[previousVertex.getKey()].childrenCount += 1;
      }
    },
    /**
     * @param {GraphVertex} currentVertex
     * @param {GraphVertex} previousVertex
     */
    leaveVertex: ({ currentVertex }) => {
      // Detect whether current vertex is articulation point or not.
      // To do so we need to check two (OR) conditions:
      // 1. Is it a root vertex with at least two independent children.
      // 2. If its visited time is <= low time of adjacent vertex.
      if (currentVertex === startVertex) {
        // Check that it has at least two independent children.
        if (visitedSet[currentVertex.getKey()].childrenCount >= 2) {
          articulationPointsSet.push(currentVertex);
        }
      } else {
        // Get child vertex low discovery time.
        let childVertexLowDiscoveryTime = null;
        if (visitedSet[currentVertex.getKey()].childVertex) {
          const childVertexKey = visitedSet[currentVertex.getKey()].childVertex.getKey();
          childVertexLowDiscoveryTime = visitedSet[childVertexKey].lowDiscoveryTime;
        }

        // Compare child vertex low discovery time with current discovery time to if there
        // are any short path (back edge) exists. If we can get to child vertex faster then
        // to current one it means that there is a back edge exists (short path) and current
        // vertex isn't articulation point.
        const currentDiscoveryTime = visitedSet[currentVertex.getKey()].discoveryTime;
        if (currentDiscoveryTime <= childVertexLowDiscoveryTime) {
          articulationPointsSet.push(currentVertex);
        }

        // Update the low time with the smallest time of adjacent vertices.

        // Get minimum low discovery time from all neighbors.
        /** @param {GraphVertex} neighbor */
        visitedSet[currentVertex.getKey()].lowDiscoveryTime = currentVertex.getNeighbors().reduce(
          (lowestDiscoveryTime, neighbor) => {
            const neighborLowTime = visitedSet[neighbor.getKey()].lowDiscoveryTime;
            return neighborLowTime < lowestDiscoveryTime ? neighborLowTime : lowestDiscoveryTime;
          },
          visitedSet[currentVertex.getKey()].lowDiscoveryTime,
        );
      }
    },
    allowTraversal: ({ nextVertex }) => {
      return !visitedSet[nextVertex.getKey()];
    },
  };

  // Do Depth First Search traversal over submitted graph.
  depthFirstSearch(graph, startVertex, dfsCallbacks);

  return articulationPointsSet;
}
