import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.tail;
  }

  peek() {
    if (!this.linkedList.tail) {
      return null;
    }

    return this.linkedList.tail.value;
  }

  push(value) {
    this.linkedList.append({ value });
  }

  pop() {
    const removedTail = this.linkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }
}
