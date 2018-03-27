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
    this.head = new Node(value, this.head);
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
