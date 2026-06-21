import Graph from '../../../data-structures/graph/Graph';
import QuickSort from '../../sorting/quick-sort/QuickSort';
import DisjointSet from '../../../data-structures/disjoint-set/DisjointSet';

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export default function kruskal(graph) {
  // Check for directed graph
  if (graph.isDirected) {
    throw new Error("Kruskal's algorithm works only for undirected graphs");
  }

  // Initialize the MST graph
  const minimumSpanningTree = new Graph();

  // Sort all edges by weight in ascending order
  const sortedEdges = new QuickSort({
    /**
     * @param {GraphEdge} graphEdgeA
     * @param {GraphEdge} graphEdgeB
     */
    compareCallback: (graphEdgeA, graphEdgeB) => graphEdgeA.weight - graphEdgeB.weight,
  }).sort(graph.getAllEdges());

  // Initialize disjoint sets for vertices
  const disjointSet = new DisjointSet((vertex) => vertex.getKey());
  graph.getAllVertices().forEach((vertex) => disjointSet.makeSet(vertex));

  // Add edges to the MST if they don’t form a cycle
  for (const currentEdge of sortedEdges) {
    if (!disjointSet.inSameSet(currentEdge.startVertex, currentEdge.endVertex)) {
      disjointSet.union(currentEdge.startVertex, currentEdge.endVertex);
      minimumSpanningTree.addEdge(currentEdge);
    }
  }

  return minimumSpanningTree;
}
