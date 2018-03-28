import LinkedList from '../linked-list/LinkedList';

export default class Queue {
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

  add(value) {
    this.linkedList.append({ value });
  }

  remove() {
    const removedTail = this.linkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }
}
