/**
 * The minimalistic (ad hoc) version of a MaxHeap data structure that doesn't have
 * external dependencies and that is easy to copy-paste and use during the
 * coding interview if allowed by the interviewer (since many data
 * structures in JS are missing).
 */
class MaxHeapAdhoc {
  constructor(heap = []) {
    this.heap = [];
    // Use an arrow function to maintain context for 'this'.
    heap.forEach(num => this.add(num));
  }

  add(num) {
    this.heap.push(num);
    this.heapifyUp();
  }

  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  poll() {
    if (this.isEmpty()) return undefined;
    const top = this.heap[0];
    const last = this.heap.pop(); // Remove the last element to replace the top
    if (!this.isEmpty()) {
      this.heap[0] = last; // Move the last element to the root
      this.heapifyDown(); // Re-establish the heap property
    }
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  toString() {
    return this.heap.join(',');
  }

  heapifyUp() {
    let nodeIndex = this.heap.length - 1;
    while (nodeIndex > 0) {
      const parentIndex = this.getParentIndex(nodeIndex);
      if (this.heap[parentIndex] >= this.heap[nodeIndex]) break;
      this.swap(parentIndex, nodeIndex);
      nodeIndex = parentIndex;
    }
  }

  heapifyDown() {
    let nodeIndex = 0;

    while (this.hasLeftChild(nodeIndex)) {
      const leftIndex = this.getLeftChildIndex(nodeIndex);
      const rightIndex = this.getRightChildIndex(nodeIndex);
      let largerChildIndex = leftIndex;

      // Check if the right child exists and is greater than the left child
      if (this.hasRightChild(nodeIndex) && this.rightChild(nodeIndex) > this.leftChild(nodeIndex)) {
        largerChildIndex = rightIndex;
      }

      // If the current node is greater than the largest child, break
      if (this.heap[nodeIndex] >= this.heap[largerChildIndex]) break;

      // Swap with the larger child
      this.swap(nodeIndex, largerChildIndex);
      nodeIndex = largerChildIndex;
    }
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  leftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)];
  }

  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }
}

export default MaxHeapAdhoc;
