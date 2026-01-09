class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
      }
    }
  
    traverse() {
      if (!this.head) return null;
  
      let currentNode = this.head;
      do {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      } while (currentNode !== this.head);
    }
  }
  
  export default CircularLinkedList; // ES6 export
  