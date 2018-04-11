export default class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction]
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  lessThen(a, b) {
    return this.compare(a, b) < 0;
  }

  greaterThen(a, b) {
    return this.compare(a, b) > 0;
  }

  lessThenOrEqual(a, b) {
    return this.lessThen(a, b) || this.equal(a, b);
  }

  greaterThenOrEqual(a, b) {
    return this.greaterThen(a, b) || this.equal(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
