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
    // A custom key (if provided) is a stable identity that is kept on reverse.
    // Auto-generated keys are recomputed so they always reflect the direction.
    this.customKey = key;
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

    // Invalidate the auto-generated key so getKey() recomputes it for the new
    // direction. A custom key represents a stable identity and is preserved.
    if (this.customKey === null) {
      this.key = null;
    }

    return this;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.getKey().toString();
  }
}
