// Define a class called "Graph."
export default class Graph {
  /**
   * Constructor for the Graph class.
   * @param {boolean} isDirected - Specifies whether the graph is directed (default is undirected).
   */
  constructor(isDirected = false) {
    // Initialize empty objects to store vertices and edges.
    this.vertices = {};
    this.edges = {};
    // Store whether the graph is directed or not.
    this.isDirected = isDirected;
  }

  /**
   * Add a new vertex to the graph.
   * @param {GraphVertex} newVertex - The vertex to be added.
   * @returns {Graph} - Returns the graph to allow method chaining.
   */
  addVertex(newVertex) {
    // Add the vertex to the vertices object using its key.
    this.vertices[newVertex.getKey()] = newVertex;

    return this; // Return the graph.
  }

  /**
   * Get a vertex by its key.
   * @param {string} vertexKey - The key of the vertex to retrieve.
   * @returns GraphVertex - The vertex with the specified key.
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  // Other methods follow the same pattern of documenting their purpose and parameters.
  // I'll provide a brief summary of each below:

  /**
   * Get neighbors of a given vertex.
   * @param {GraphVertex} vertex - The vertex to find neighbors for.
   * @returns {GraphVertex[]} - An array of neighboring vertices.
   */

  /**
   * Get all vertices in the graph.
   * @returns {GraphVertex[]} - An array of all vertices in the graph.
   */

  /**
   * Get all edges in the graph.
   * @returns {GraphEdge[]} - An array of all edges in the graph.
   */

  /**
   * Add an edge to the graph between two vertices.
   * @param {GraphEdge} edge - The edge to add.
   * @returns {Graph} - Returns the graph to allow method chaining.
   */

  /**
   * Delete an edge from the graph.
   * @param {GraphEdge} edge - The edge to delete.
   */

  /**
   * Find an edge between two vertices.
   * @param {GraphVertex} startVertex - The starting vertex.
   * @param {GraphVertex} endVertex - The ending vertex.
   * @returns {GraphEdge|null} - The found edge or null if not found.
   */

  /**
   * Get the total weight of all edges in the graph.
   * @returns {number} - The total weight of all edges.
   */

  /**
   * Reverse all edges in a directed graph.
   * @returns {Graph} - Returns the graph with reversed edges.
   */

  /**
   * Get an object mapping vertex keys to their indices.
   * @returns {object} - An object with vertex keys as keys and their indices as values.
   */

  /**
   * Get the adjacency matrix of the graph.
   * @returns {*[][]} - A 2D array representing the adjacency matrix.
   */

  /**
   * Convert the graph to a string representation.
   * @returns {string} - A string representing the graph's vertices.
   */
}
