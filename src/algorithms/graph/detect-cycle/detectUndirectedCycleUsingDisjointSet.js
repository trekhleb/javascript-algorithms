import DisjointSet from '../../../data-structures/disjoint-set/DisjointSet';

/**
 * Detect and return the actual cycle path in an undirected graph using disjoint sets.
 * @param {Graph} graph
 * @returns {Array|null} - Returns an array of vertex keys forming the cycle, or null if no cycle found.
 */
export default function detectUndirectedCycleUsingDisjointSet(graph) {
  const keyExtractor = (graphVertex) => graphVertex.getKey();
  const disjointSet = new DisjointSet(keyExtractor);
  const parentMap = new Map();

  graph.getAllVertices().forEach((vertex) => {
    disjointSet.makeSet(vertex);
    parentMap.set(vertex.getKey(), null); // Initialize with no parent
  });

  for (const edge of graph.getAllEdges()) {
    const startKey = edge.startVertex.getKey();
    const endKey = edge.endVertex.getKey();

    if (disjointSet.inSameSet(edge.startVertex, edge.endVertex)) {
      // Cycle detected: reconstruct cycle path
      return constructCyclePath(startKey, endKey, parentMap);
    }

    // Save parent info (arbitrarily choosing one as child)
    parentMap.set(endKey, startKey);
    disjointSet.union(edge.startVertex, edge.endVertex);
  }

  return null;
}

/**
 * Construct an ordered cycle path using parent map.
 * @param {string} startKey
 * @param {string} endKey
 * @param {Map} parentMap
 * @returns {string[]} Ordered array of vertex keys forming a cycle
 */
function constructCyclePath(startKey, endKey, parentMap) {
  const pathToRoot = (key) => {
    const path = [];
    while (key !== null) {
      path.push(key);
      key = parentMap.get(key);
    }
    return path;
  };

  const pathStart = pathToRoot(startKey);
  const pathEnd = pathToRoot(endKey);

  // Find the last common ancestor
  const setStart = new Set(pathStart);
  const commonAncestor = pathEnd.find((key) => setStart.has(key));

  // Slice paths up to the common ancestor
  const cycleStart = pathStart.slice(0, pathStart.indexOf(commonAncestor) + 1);
  const cycleEnd = pathEnd.slice(0, pathEnd.indexOf(commonAncestor)).reverse();

  return [...cycleStart, ...cycleEnd, commonAncestor];
}
