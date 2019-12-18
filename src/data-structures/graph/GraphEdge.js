export default class GraphEdge {
  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {number} [weight=0]
   * @param key
   */
  constructor(startVertex, endVertex, weight = 0, key = null) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
    this.key = key;
  }

  getKey() {
    if (this.key) {
      return this.key;
    }

    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();

    this.key = `${startVertexKey}_${endVertexKey}`;

    return this.key;
  }

  /**
   * @return {GraphEdge}
   */
  reverse() {
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;

    return this;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.getKey().toString();
  }
}
