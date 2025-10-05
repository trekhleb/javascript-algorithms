import DisjointSet from '../../../data-structures/disjoint-set/DisjointSet';

/**
 * Detect cycle in undirected graph using disjoint sets.
 *
 * @param {Graph} graph
 */
export default function detectUndirectedCycleUsingDisjointSet(graph) {
  // Create initial singleton disjoint sets for each graph vertex.
  /** @param {GraphVertex} graphVertex */
  const keyExtractor = (graphVertex) => graphVertex.getKey();
  const disjointSet = new DisjointSet(keyExtractor);
  graph.getAllVertices().forEach((graphVertex) => disjointSet.makeSet(graphVertex));

  // Go trough all graph edges one by one and check if edge vertices are from the
  // different sets. In this case joint those sets together. Do this until you find
  // an edge where to edge vertices are already in one set. This means that current
  // edge will create a cycle.
  let cycleFound = false;
  /** @param {GraphEdge} graphEdge */
  graph.getAllEdges().forEach((graphEdge) => {
    if (disjointSet.inSameSet(graphEdge.startVertex, graphEdge.endVertex)) {
      // Cycle found.
      cycleFound = true;
    } else {
      disjointSet.union(graphEdge.startVertex, graphEdge.endVertex);
    }
  });

  return cycleFound;
}
