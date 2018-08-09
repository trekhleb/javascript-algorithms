export default class Stack {
  constructor() {
    this.array = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.array.length > 0 ? false : true;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.array[this.array.length-1];
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.array.push(value);
  }

  /**
   * @return {*}
   */
  pop() {
    const removed = this.array.pop();
    return removed ? removed : null;
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return [...this.array].reverse();;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString() {
    return this.array.toString();
  }
}
