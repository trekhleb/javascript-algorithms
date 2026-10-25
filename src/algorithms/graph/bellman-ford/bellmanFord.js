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

  // We need (|V| - 1) iterations.
  for (let iteration = 0; iteration < (graph.getAllVertices().length - 1); iteration += 1) {
    // During each iteration go through all vertices.
    Object.keys(distances).forEach((vertexKey) => {
      const vertex = graph.getVertexByKey(vertexKey);

      // Go through all vertex edges.
      graph.getNeighbors(vertex).forEach((neighbor) => {
        const edge = graph.findEdge(vertex, neighbor);
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distances[vertex.getKey()];
        const distanceToNeighbor = distanceToVertex + edge.weight;
        if (distanceToNeighbor < distances[neighbor.getKey()]) {
          distances[neighbor.getKey()] = distanceToNeighbor;
          previousVertices[neighbor.getKey()] = vertex;
        }
      });
    });
  }

  // Do one more relaxation round over all the edges. After (|V| - 1) iterations
  // all the distances must be final. Thus if any distance may still be improved
  // then the graph must contain a negative weight cycle.
  Object.keys(distances).forEach((vertexKey) => {
    const vertex = graph.getVertexByKey(vertexKey);

    graph.getNeighbors(vertex).forEach((neighbor) => {
      const edge = graph.findEdge(vertex, neighbor);
      if (distances[vertex.getKey()] + edge.weight < distances[neighbor.getKey()]) {
        throw new Error('Graph contains a negative weight cycle');
      }
    });
  });

  return {
    distances,
    previousVertices,
  };
}
