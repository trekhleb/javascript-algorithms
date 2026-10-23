/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @return {{distances, previousVertices}}
 */
export default function bellmanFord(graph, startVertex) {
  const distances = {};
  const previousVertices = {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex.getKey()] = 0;
  graph.getAllVertices().forEach((vertex) => {
    previousVertices[vertex.getKey()] = null;
    if (vertex.getKey() !== startVertex.getKey()) {
      distances[vertex.getKey()] = Infinity;
    }
  });

  // We need at most (|V| - 1) iterations.
  const vertexCount = graph.getAllVertices().length;
  for (let iteration = 0; iteration < (vertexCount - 1); iteration += 1) {
    let relaxed = false;
    // During each iteration go through all vertices.
    Object.keys(distances).forEach((vertexKey) => {
      const vertex = graph.getVertexByKey(vertexKey);

      // Go through all vertex edges.
      vertex.getEdges().forEach((edge) => {
        // In an undirected graph, either endpoint may be the current vertex.
        const neighbor = edge.startVertex === vertex ? edge.endVertex : edge.startVertex;
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distances[vertex.getKey()];
        const distanceToNeighbor = distanceToVertex + edge.weight;
        if (distanceToNeighbor < distances[neighbor.getKey()]) {
          distances[neighbor.getKey()] = distanceToNeighbor;
          previousVertices[neighbor.getKey()] = vertex;
          relaxed = true;
        }
      });
    });

    if (!relaxed) {
      break;
    }
  }

  return {
    distances,
    previousVertices,
  };
}
