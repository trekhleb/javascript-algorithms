/**
 * The minimalistic (ad hoc) version of a DisjointSet (or a UnionFind) data structure
 * that doesn't have external dependencies and that is easy to copy-paste and
 * use during the coding interview if allowed by the interviewer (since many
 * data structures in JS are missing).
 *
 * Time Complexity:
 *
 * - Constructor: O(N)
 * - Find: O(α(N))
 * - Union: O(α(N))
 * - Connected: O(α(N))
 *
 * Where N is the number of vertices in the graph.
 * α refers to the Inverse Ackermann function.
 * In practice, we assume it's a constant.
 * In other words, O(α(N)) is regarded as O(1) on average.
 */
class DisjointSetAdhoc {
  /**
   * Initializes the set of specified size.
   * @param {number} size
   */
  constructor(size) {
    // The index of a cell is an id of the node in a set.
    // The value of a cell is an id (index) of the root node.
    // By default, the node is a parent of itself.
    this.roots = new Array(size).fill(0).map((_, i) => i);

    // Using the heights array to record the height of each node.
    // By default each node has a height of 1 because it has no children.
    this.heights = new Array(size).fill(1);
  }

  /**
   * Finds the root of node `a`
   * @param {number} a
   * @returns {number}
   */
  find(a) {
    if (a === this.roots[a]) return a;
    this.roots[a] = this.find(this.roots[a]);
    return this.roots[a];
  }

  /**
   * Joins the `a` and `b` nodes into same set.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  union(a, b) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    if (aRoot === bRoot) return;

    if (this.heights[aRoot] > this.heights[bRoot]) {
      this.roots[bRoot] = aRoot;
    } else if (this.heights[aRoot] < this.heights[bRoot]) {
      this.roots[aRoot] = bRoot;
    } else {
      this.roots[bRoot] = aRoot;
      this.heights[aRoot] += 1;
    }
  }

  /**
   * Checks if `a` and `b` belong to the same set.
   * @param {number} a
   * @param {number} b
   */
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

export default DisjointSetAdhoc;
