import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend({ value, key = null }) {
    const newNode = new LinkedListNode({ value, key, next: this.head });

    // Make new node to be a head.
    this.head = newNode;

    return newNode;
  }

  append({ value, key = null }) {
    const newNode = new LinkedListNode({ value, key });

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return newNode;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return newNode;
  }

  appendUnique({ value, key = null }) {
    const newNode = new LinkedListNode({ value, key });

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return newNode;
    }

    // Rewind to last node.
    let currentNode = this.head;
    while (currentNode.next !== null) {
      // If there is a node with specified key exists then update it instead of adding new one.
      if (key && currentNode.key === key) {
        currentNode.value = value;
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    // If there is a node with specified key exists then update it instead of adding new one.
    if (key && currentNode.key === key) {
      currentNode.value = value;
      return currentNode;
    }

    // Attach new node to the end of linked list.
    currentNode.next = newNode;
    this.tail = newNode;

    return newNode;
  }

  deleteByValue(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make 2nd node to be a head.
    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // If next node must be deleted then make next node to be a next next one.
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Check if tail must be deleted.
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteByKey(key) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make 2nd node to be a head.
    if (this.head.key === key) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // If next node must be deleted then make next node to be a next next one.
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Check if tail must be deleted.
    if (this.tail.key === key) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteTail() {
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    const deletedTail = this.tail;

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  findByKey(key) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const listArray = [];
    let currentNode = this.head;

    while (currentNode) {
      listArray.push(currentNode.toString());
      currentNode = currentNode.next;
    }

    return listArray;
  }

  toString() {
    return this.toArray().toString();
  }
}
