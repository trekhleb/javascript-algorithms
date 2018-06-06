export default class FenwickTree {
  /**
   * Constructor creates empty fenwick tree of size 'size',
   *    however, array size is size+1, because index is 1-based
   * @param  {number} [size]
   */
  constructor(size) {
    this.n = size;
    this.arr = [];
    for (let i = 0; i <= size; i += 1) this.arr.push(0);
  }

  /**
   * Adds v to index x
   * @param  {number} [x]
   * @param  {number} [v]
   */
  update(x, v) {
    if (x < 1 || x > this.n) return;
    for (let i = x; i <= this.n; i += (i & -i)) {
      this.arr[i] += v;
    }
  }

  /**
   * query sum from index 1 to x
   * @param  {number} [x]
   * @return {number} sum
   */
  query(x) {
    if (x > this.n) return this.query(this.n);
    let ret = 0;
    for (let i = x; i > 0; i -= (i & -i)) {
      ret += this.arr[i];
    }
    return ret;
  }

  /**
   * query sum from index l to r
   * @param  {number} [l]
   * @param  {number} [r]
   * @return {number}
   */
  queryRange(l, r) {
    if (l > r) return 0;
    return this.query(r) - this.query(l - 1);
  }
}
