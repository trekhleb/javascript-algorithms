import DoublyLinkedList from '../doubly-linked-list/DoublyLinkedList';

export default class Deque {
  constructor() {
    // We use a doubly linked list internally so that both front and back
    // operations (add, remove and peek) run in O(1) time.
    this.linkedList = new DoublyLinkedList();

    // Keep a running element count so that `size` stays O(1).
    this.length = 0;
  }

  /**
   * Check if the deque is empty.
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Read the element at the front of the deque without removing it.
   * @return {*}
   */
  peekFront() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  /**
   * Read the element at the back of the deque without removing it.
   * @return {*}
   */
  peekBack() {
    if (!this.linkedList.tail) {
      return null;
    }
    return this.linkedList.tail.value;
  }

  /**
   * Add a new element to the front (head) of the deque.
   * @param {*} value
   */
  addFront(value) {
    this.linkedList.prepend(value);
    this.length += 1;
  }

  /**
   * Add a new element to the back (tail) of the deque.
   * @param {*} value
   */
  addBack(value) {
    this.linkedList.append(value);
    this.length += 1;
  }

  /**
   * Remove the element from the front (head) of the deque.
   * @return {*}
   */
  removeFront() {
    const removedHead = this.linkedList.deleteHead();
    if (!removedHead) {
      return null;
    }
    this.length -= 1;
    return removedHead.value;
  }

  /**
   * Remove the element from the back (tail) of the deque.
   * @return {*}
   */
  removeBack() {
    const removedTail = this.linkedList.deleteTail();
    if (!removedTail) {
      return null;
    }
    this.length -= 1;
    return removedTail.value;
  }

  /**
   * Return the number of elements in the deque.
   * @return {number}
   */
  get size() {
    return this.length;
  }

  /**
   * Convert the deque to an array (front to back).
   * @return {*[]}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  /**
   * Return a string representation of the deque.
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
