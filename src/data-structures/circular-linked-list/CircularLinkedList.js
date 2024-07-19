import CircularLinkedListNode from './CircularLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

/**
 * Circular linked list. Based on linked list, but circular.
 */
export default class CircularLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var CircularLinkedListNode */
    this.head = null;

    /** @var CircularLinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {CircularLinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new CircularLinkedListNode(value, this.head);

    if (!this.head) {
      newNode.next = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.head = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {CircularLinkedList}
   */
  append(value) {
    const newNode = new CircularLinkedListNode(value);

    // If no head, make new node a head, else attach to the tail of circular linked list.
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
    }
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @param {number} rawIndex
   * @return {CircularLinkedList}
   */
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    const newNode = new CircularLinkedListNode(value);

    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    let currentNode = this.head;
    let count = 0;
    while (count < index - 1 && currentNode.next !== this.head) {
      currentNode = currentNode.next;
      count += 1;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    if (currentNode === this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {CircularLinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode && this.compare.equal(currentNode.value, value)) {
      deletedNode = currentNode;
      this.head = this.head.next;
      this.tail.next = this.head;

      if (currentNode === this.tail) {
        this.head = null;
        this.tail = null;
        return deletedNode;
      }
      currentNode = this.head;
    }

    let previousNode = this.tail;

    do {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;
        previousNode.next = currentNode.next;

        if (currentNode === this.tail) {
          this.tail = previousNode;
        }
      } else {
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return deletedNode;
  }

  /**
   * @return {CircularLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }

    return deletedHead;
  }

  /**
   * @return {CircularLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }

    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = this.head;
      this.tail = currentNode;
    }

    return deletedTail;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {CircularLinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    do {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value...
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return null;
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to a circular linked list.
   * @return {CircularLinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  /**
   * @return {CircularLinkedListNode[]}
   */
  toArray() {
    const nodes = [];
    if (!this.head) return nodes;

    let currentNode = this.head;
    do {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  /**
   * Reverse a circular linked list.
   * @returns {CircularLinkedList}
   */
  reverse() {
    if (!this.head || this.head === this.tail) {
      return this;
    }

    let currentNode = this.head;
    let prevNode = this.tail;
    let nextNode;

    do {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    } while (currentNode !== this.head);

    this.tail = this.head;
    this.head = prevNode;
    this.tail.next = this.head;

    return this;
  }
}
