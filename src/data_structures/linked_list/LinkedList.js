import { Node } from './Node';

export class LinkedList {
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
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    // Attach new node to the end of linked list.
    currentNode.nextNode = newNode;

    return newNode;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  deleteWithValue(value) {

  }

  render() {
    let currentNode = this.head;
    let index = 0;

    while(currentNode.nextNode !== null) {
      console.log(`Node #${index} data: ${currentNode.value}`);
      currentNode = currentNode.nextNode;
      index++;
    }

    // Print the tail.
    console.log(`Node #${index} data: ${currentNode.value}`);
  }
}
