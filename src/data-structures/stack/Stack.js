import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    // We're going to implement Queue based on LinkedList since this
    // structures a quite similar. Compare push/pop operations of the Stack
    // with append/deleteTail operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // The queue is empty in case if its linked list don't have tail.
    return !this.linkedList.tail;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      // If linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the end of linked list without deleting it.
    return this.linkedList.tail.value;
  }

  /**
   * @param {*} value
   */
  push(value) {
    // Pushing means to lay the value on top of the stack. Therefore let's just add
    // new value at the end of the linked list.
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  pop() {
    // Let's try to delete the last node from linked list (the tail).
    // If there is no tail in linked list (it is empty) just return null.
    const removedTail = this.linkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value)
      .reverse();
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
