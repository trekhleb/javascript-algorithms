import DisjointSet from '../../../data-structures/disjoint-set/DisjointSet';

/**
 * Detect cycle in undirected graph using disjoint sets.
 *
 * @param {Graph} graph
 */
export default function detectUndirectedCycleUsingDisjointSet(graph) {
  const vertices = graph.getAllVertices();
  const disjointSet = new DisjointSet(vertices.length);

  for (let i = 0; i < vertices.length; i += 1) {
    for (let j = (i + 1); j < vertices.length; j += 1) {
      if (vertices[i].hasNeighbor(vertices[j])) {
        if (disjointSet.find(i) === disjointSet.find(j)) {
          return true;
        }
        disjointSet.union(i, j);
      }
    }
  }

  return false;
}
