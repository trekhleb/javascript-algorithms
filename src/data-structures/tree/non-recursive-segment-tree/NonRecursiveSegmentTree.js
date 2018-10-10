export default class NonRecursiveSegmentTree {
  /**
   * @param {number[]} inputArray
   * @param {function} operation - binary function (i.e. sum, min)
   * @param {number} operationFallback - operation fallback value (i.e. 0 for sum, Infinity for min)
   */
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray;
    this.inputArrayLength = inputArray.length;
    this.operation = operation;
    this.operationFallback = operationFallback;

    // Init array representation of segment tree.
    this.segmentTree = new Array(this.inputArrayLength * 2).fill(null);

    this.buildSegmentTree();
  }

  /**
   * Build segment tree iteratively.
   */
  buildSegmentTree() {
    // insert leaf nodes in tree
    for (let position = 0; position < this.inputArrayLength; position += 1) {
      this.segmentTree[this.inputArrayLength + position] = this.inputArray[position];
    }

    // build the tree by calculating parents
    for (let parent = this.inputArrayLength - 1; parent > 0; parent -= 1) {
      this.segmentTree[parent] = this.operation(
        this.segmentTree[this.getLeftChildIndex(parent)],
        this.segmentTree[this.getRightChildIndex(parent)],
      );
    }
  }

  /**
   * Do range query on segment tree in context of this.operation function.
   *
   * @param {number} queryLeftIndex
   * @param {number} queryRightIndex
   * @return {number}
   */
  rangeQuery(queryLeftIndex, queryRightIndex) {
    let result = this.operationFallback;

    // adjust index to leaf nodes
    let leftIndex = queryLeftIndex + this.inputArrayLength;
    let rightIndex = queryRightIndex + this.inputArrayLength + 1;

    // move upward saving only odd parents
    for (; leftIndex < rightIndex; leftIndex /= 2, rightIndex /= 2) {
      if (leftIndex % 2 === 1) {
        result = this.operation(result, this.segmentTree[leftIndex]);
        leftIndex += 1;
      }
      if (rightIndex % 2 === 1) {
        rightIndex -= 1;
        result = this.operation(result, this.segmentTree[rightIndex]);
      }
    }
    return result;
  }

  /**
   * Update a position in the segment tree and input array in context of this.operation function
   *
   * @param {number} updateIndexPosition
   * @param {number} updateValue
   */
  positionUpdate(updateIndexPosition, updateValue) {
    let indexPosition = updateIndexPosition + this.inputArrayLength;

    // set updateValue at updateIndexPosition
    this.segmentTree[indexPosition] = updateValue;
    this.inputArray[updateIndexPosition] = updateValue;

    // move upward and update parents
    while (indexPosition > 1) {
      indexPosition >>= 1;
      this.segmentTree[indexPosition] = this.operation(
        this.segmentTree[this.getLeftChildIndex(indexPosition)],
        this.segmentTree[this.getRightChildIndex(indexPosition)],
      );
    }
  }

  /**
   * Left child index.
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex;
  }

  /**
   * Right child index.
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }
}
