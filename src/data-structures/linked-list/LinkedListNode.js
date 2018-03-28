export default class LinkedListNode {
  constructor({ value, next = null, key = null }) {
    this.value = value;
    this.next = next;

    // Key is added to make this linked list nodes to be reusable in hash tables.
    this.key = key;
  }

  toString() {
    if (this.key) {
      return `${this.key}:${this.value}`;
    }

    return `${this.value}`;
  }
}
