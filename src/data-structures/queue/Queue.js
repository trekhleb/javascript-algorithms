import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    // We're going to implement Queue based on LinkedList since this
    // structures a quite similar. Namely they both operates mostly with
    // with theirs beginning and the end. Compare enqueue/de-queue
    // operations of the Queue with append/prepend operations of LinkedList.
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
    if (!this.linkedList.head) {
      // If linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the end of linked list without deleting it.
    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  enqueue(value) {
    // Enqueueing means to stand in the line. Therefore let's just add
    // new value at the beginning of the linked list. It will need to wait
    // until all previous nodes will be processed.
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  dequeue() {
    // Let's try to delete the last node from linked list (the tail).
    // If there is no tail in linked list (it is empty) just return null.
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }
}
