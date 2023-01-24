/* eslint-disable no-param-reassign, max-classes-per-file */

/**
 * Simple implementation of the Doubly-Linked List Node
 * that is used in LRUCache class below.
 */
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

/**
 * Implementation of the LRU (Least Recently Used) Cache
 * based on the HashMap and Doubly Linked List data-structures.
 *
 * Current implementation allows to have fast O(1) (in average) read and write operations.
 *
 * At any moment in time the LRU Cache holds not more that "capacity" number of items in it.
 */
class LRUCache {
  /**
   * Creates a cache instance of a specific capacity.
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity; // How many items to store in cache at max.
    this.nodesMap = {}; // The quick links to each linked list node in cache.
    this.size = 0; // The number of items that is currently stored in the cache.
    this.head = new LinkedListNode(); // The Head (first) linked list node.
    this.tail = new LinkedListNode(); // The Tail (last) linked list node.
  }

  /**
   * Returns the cached value by its key.
   * Time complexity: O(1) in average.
   * @param {string} key
   * @returns {any}
   */
  get(key) {
    if (this.nodesMap[key] === undefined) return undefined;
    const node = this.nodesMap[key];
    this.promote(node);
    return node.val;
  }

  /**
   * Sets the value to cache by its key.
   * Time complexity: O(1) in average.
   * @param {string} key
   * @param {any} val
   */
  set(key, val) {
    if (this.nodesMap[key]) {
      const node = this.nodesMap[key];
      node.val = val;
      this.promote(node);
    } else {
      const node = new LinkedListNode(key, val);
      this.append(node);
    }
  }

  /**
   * Promotes the node to the end of the linked list.
   * It means that the node is most frequently used.
   * It also reduces the chance for such node to get evicted from cache.
   * @param {LinkedListNode} node
   */
  promote(node) {
    this.evict(node);
    this.append(node);
  }

  /**
   * Appends a new node to the end of the cache linked list.
   * @param {LinkedListNode} node
   */
  append(node) {
    this.nodesMap[node.key] = node;

    if (!this.head.next) {
      // First node to append.
      this.head.next = node;
      this.tail.prev = node;
      node.prev = this.head;
      node.next = this.tail;
    } else {
      // Append to an existing tail.
      const oldTail = this.tail.prev;
      oldTail.next = node;
      node.prev = oldTail;
      node.next = this.tail;
      this.tail.prev = node;
    }

    this.size += 1;

    if (this.size > this.capacity) {
      this.evict(this.head.next);
    }
  }

  /**
   * Evicts (removes) the node from cache linked list.
   * @param {LinkedListNode} node
   */
  evict(node) {
    delete this.nodesMap[node.key];
    this.size -= 1;

    const prevNode = node.prev;
    const nextNode = node.next;

    // If one and only node.
    if (prevNode === this.head && nextNode === this.tail) {
      this.head.next = null;
      this.tail.prev = null;
      this.size = 0;
      return;
    }

    // If this is a Head node.
    if (prevNode === this.head) {
      nextNode.prev = this.head;
      this.head.next = nextNode;
      return;
    }

    // If this is a Tail node.
    if (nextNode === this.tail) {
      prevNode.next = this.tail;
      this.tail.prev = prevNode;
      return;
    }

    // If the node is in the middle.
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

export default LRUCache;
