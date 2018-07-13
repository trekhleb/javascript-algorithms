export default function floydWarshall(graph) {
  const vertices = graph.getAllVertices();

  // Three dimension matrices.
  const distances = [];
  const previousVertices = [];

  // There are k vertices, loop from 0 to k.
  for (let k = 0; k <= vertices.length; k += 1) {
    // Path starts from vertex i.
    vertices.forEach((vertex, i) => {
      if (k === 0) {
        distances[i] = [];
        previousVertices[i] = [];
      }

      // Path ends to vertex j.
      vertices.forEach((endVertex, j) => {
        if (k === 0) {
          // Initialize distance and previousVertices array
          distances[i][j] = [];
          previousVertices[i][j] = [];

          if (vertex === endVertex) {
            // Distance to self as 0
            distances[i][j][k] = 0;
            // Previous vertex to self as null
            previousVertices[i][j][k] = null;
          } else {
            const edge = graph.findEdge(vertex, endVertex);
            if (edge) {
              // There is an edge from vertex i to vertex j.
              // Save distance and previous vertex.
              distances[i][j][k] = edge.weight;
              previousVertices[i][j][k] = vertex;
            } else {
              distances[i][j][k] = Infinity;
              previousVertices[i][j][k] = null;
            }
          }
        } else {
          // Compare distance from i to j, with distance from i to k - 1 and then from k - 1 to j.
          // Save the shortest distance and previous vertex
          // distance[i][j][k] = min( distance[i][k - 1][k - 1], distance[k - 1][j][k - 1] )
          if (distances[i][j][k - 1] > distances[i][k - 1][k - 1] + distances[k - 1][j][k - 1]) {
            distances[i][j][k] = distances[i][k - 1][k - 1] + distances[k - 1][j][k - 1];
            previousVertices[i][j][k] = previousVertices[k - 1][j][k - 1];
          } else {
            distances[i][j][k] = distances[i][j][k - 1];
            previousVertices[i][j][k] = previousVertices[i][j][k - 1];
          }
        }
      });
    });
  }

  // Shortest distance from x to y: distance[x][y][k]
  // Previous vertex when shortest distance from x to y: previousVertices[x][y][k]
  return { distances, previousVertices };
}
