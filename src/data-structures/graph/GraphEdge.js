export default class GraphEdge {
  /**
   * @param startVertex {GraphVertex}
   * @param endVertex {GraphVertex}
   * @param weight {number}
   */
  constructor(startVertex, endVertex, weight = 1) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }
}
