import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;

      return newNode;
    }

    // Rewind to last node.
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    // Attach new node to the end of linked list.
    currentNode.next = newNode;

    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head = new Node(value, this.head);

    return newNode;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  toArray() {
    const listArray = [];
    let currentNode = this.head;

    while (currentNode) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listArray;
  }

  toString() {
    return this.toArray().toString();
  }
}
