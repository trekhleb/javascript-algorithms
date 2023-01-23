class LinkedListNode {
  /**
   * Creates a doubly-linked list node.
   * @param {string} key
   * @param {any} val
   * @param {LinkedListNode} prev
   * @param {LinkedListNode} next
   */
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

export default LinkedListNode;
