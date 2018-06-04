/**
 * Segment Tree implementation for Range Query data structure
 * Tracks a array of numbers. 0 indexed
 * operation is a binary function (eg sum, min) - needs to be associative
 * identity is the identity of the operation
 *    i.e, operation(x, identity) = x (eg 0 for sum, Infinity for min)
 * Supports methods
 *  update(index, val) - set value of index
 *  query(l, r) - finds operation(values in range [l, r]) (both inclusive)
 *
 * As is customary, we store the tree implicitly with i being the parent of 2i, 2i+1.
 */

export default class SegmentTree {
  /**
   * array initialises the numbers
   * @param {number[]} array
   */
  constructor(array, operation, identity) {
    this.n = array.length;
    this.array = array;
    this.tree = new Array(4 * this.n);

    this.operation = operation;
    this.identity = identity;

    // use Range Min Query by default
    if (this.operation === undefined) {
      this.operation = Math.min;
      this.identity = Infinity;
    }


    this.build();
  }

  /**
   * Stub for recursive call
   */
  build() {
    this.buildRec(1, 0, this.n - 1);
  }

  /**
   * Left child index
   * @param {number} root
   */
  left(root) {
    return 2 * root;
  }

  /**
   * Right child index
   * @param {number} root
   */
  right(root) {
    return (2 * root) + 1;
  }

  /**
   * root is the index in the tree, [l,r] (inclusive) is the current array segment being built
   * @param {number} root
   * @param {number} l
   * @param {number} r
   */
  buildRec(root, l, r) {
    if (l === r) {
      this.tree[root] = this.array[l];
    } else {
      const mid = Math.floor((l + r) / 2);
      // build left and right nodes
      this.buildRec(this.left(root), l, mid);
      this.buildRec(this.right(root), mid + 1, r);
      this.tree[root] = this.operation(this.tree[this.left(root)], this.tree[this.right(root)]);
    }
  }

  /**
   * Stub for recursive call
   * @param {number} lindex
   * @param {number} rindex
   */
  query(lindex, rindex) {
    return this.queryRec(1, lindex, rindex, 0, this.n - 1);
  }

  /**
   * [lindex, rindex] is the query region
   * [l,r] is the current region being processed
   * Guaranteed that [lindex,rindex] contained in [l,r]
   * @param {number} root
   * @param {number} lindex
   * @param {number} rindex
   * @param {number} l
   * @param {number} r
   */
  queryRec(root, lindex, rindex, l, r) {
    // console.log(root, lindex, rindex, l, r);
    if (lindex > rindex) {
      // happens when mid+1 > r - no segment
      return this.identity;
    }
    if (l === lindex && r === rindex) {
      // query region matches current region - use tree value
      return this.tree[root];
    }
    const mid = Math.floor((l + r) / 2);
    // get left and right results and combine
    const leftResult = this.queryRec(this.left(root), lindex, Math.min(rindex, mid), l, mid);
    const rightResult = this.queryRec(
      this.right(root), Math.max(mid + 1, lindex), rindex,
      mid + 1, r,
    );
    return this.operation(leftResult, rightResult);
  }

  /**
   * Set array[index] to value
   * @param {number} index
   * @param {number} value
   */
  update(index, value) {
    this.array[index] = value;
    this.updateRec(1, index, value, 0, this.n - 1);
  }

  /**
   * @param {number} root
   * @param {number} index
   * @param {number} value
   * @param {number} l
   * @param {number} r
   */
  updateRec(root, index, value, l, r) {
    if (l === r) {
      // we are at tree node containing array[index]
      this.tree[root] = value;
    } else {
      const mid = Math.floor((l + r) / 2);
      // update whichever child index is in, update this.tree[root]
      if (index <= mid) {
        this.updateRec(this.left(root), index, value, l, mid);
      } else {
        this.updateRec(this.right(root), index, value, mid + 1, r);
      }
      this.tree[root] = this.operation(this.tree[this.left(root)], this.tree[this.right(root)]);
    }
  }
}
