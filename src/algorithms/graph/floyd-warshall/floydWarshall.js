/**
 * @param {Graph} graph
 * @return {{distances: number[][], nextVertices: GraphVertex[][]}}
 */
export default function floydWarshall(graph) {
  // Get all graph vertices.
  const vertices = graph.getAllVertices();

  // Init previous vertices matrix with nulls meaning that there are no
  // previous vertices exist that will give us shortest path.
  const nextVertices = Array(vertices.length).fill(null).map(() => {
    return Array(vertices.length).fill(null);
  });

  // Init distances matrix with Infinities meaning there are no paths
  // between vertices exist so far.
  const distances = Array(vertices.length).fill(null).map(() => {
    return Array(vertices.length).fill(Infinity);
  });

  // Init distance matrix with the distance we already now (from existing edges).
  // And also init previous vertices from the edges.
  vertices.forEach((startVertex, startIndex) => {
    vertices.forEach((endVertex, endIndex) => {
      if (startVertex === endVertex) {
        // Distance to the vertex itself is 0.
        distances[startIndex][endIndex] = 0;
      } else {
        // Find edge between the start and end vertices.
        const edge = graph.findEdge(startVertex, endVertex);

        if (edge) {
          // There is an edge from vertex with startIndex to vertex with endIndex.
          // Save distance and previous vertex.
          distances[startIndex][endIndex] = edge.weight;
          nextVertices[startIndex][endIndex] = startVertex;
        } else {
          distances[startIndex][endIndex] = Infinity;
        }
      }
    });
  });

  // Now let's go to the core of the algorithm.
  // Let's all pair of vertices (from start to end ones) and try to check if there
  // is a shorter path exists between them via middle vertex. Middle vertex may also
  // be one of the graph vertices. As you may see now we're going to have three
  // loops over all graph vertices: for start, end and middle vertices.
  vertices.forEach((middleVertex, middleIndex) => {
    // Path starts from startVertex with startIndex.
    vertices.forEach((startVertex, startIndex) => {
      // Path ends to endVertex with endIndex.
      vertices.forEach((endVertex, endIndex) => {
        // Compare existing distance from startVertex to endVertex, with distance
        // from startVertex to endVertex but via middleVertex.
        // Save the shortest distance and previous vertex that allows
        // us to have this shortest distance.
        const distViaMiddle = distances[startIndex][middleIndex] + distances[middleIndex][endIndex];

        if (distances[startIndex][endIndex] > distViaMiddle) {
          // We've found a shortest pass via middle vertex.
          distances[startIndex][endIndex] = distViaMiddle;
          nextVertices[startIndex][endIndex] = middleVertex;
        }
      });
    });
  });

  // Shortest distance from x to y: distance[x][y].
  // Next vertex after x one in path from x to y: nextVertices[x][y].
  return { distances, nextVertices };
}
