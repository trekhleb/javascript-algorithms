export default class DisjointSet {
  /**
   * @param {number} [size] - Number of disjoint elements in set
   */
  constructor(size) {
    this.data = new Array(size).fill().map((val, idx) => ({ rank: 0, parent: idx }));
  }

  /**
   * @param {number} [x] - The index of element to query.
   * @return {number|null} - The unique ID for the set containing the input. Null if invalid.
   */
  find(x) {
    if ((!x && x !== 0) || (x < 0) || (x >= this.data.length)) {
      return null;
    }

    let curr = x;
    for (; this.data[curr].parent !== curr; curr = this.data[curr].parent) {
      this.data[curr].parent = this.data[this.data[curr].parent].parent;
    }
    return curr;
  }

  /**
   * @param {number} x - Index corresponding to 1st set to combine.
   * @param {number} y - Index corresponding to 2nd set to combine.
   */
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if ((rootX != null) && (rootY != null) && (rootX !== rootY)) {
      const rankX = this.data[rootX].rank;
      const rankY = this.data[rootY].rank;

      if (rankX > rankY) {
        this.data[rootX].parent = rootY;
        this.data[rootY].rank += 1;
      } else {
        this.data[rootY].parent = rootX;
        this.data[rootX].rank += 1;
      }
    }
  }
}
