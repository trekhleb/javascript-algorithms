import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = ( () => {
      const temp = new LinkedList();

      return {
        isEmpty: () => {
          return !temp.tail;
        },

        peek: () => {
          if (!temp.head) {
            return null;
          }

          return temp.head.value;
        },

        enqueue: (value) => {
          temp.append(value);
        },

        dequeue: () => {
          const removedHead = temp.deleteHead();
          return removedHead ? removedHead.value : null;
        },

        toString: (callback) => {
          return temp.toString(callback);
        },
      };
    } )();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  peek() {
    return this.linkedList.peek();
  }

  enqueue(value) {
    return this.linkedList.enqueue(value);
  }

  dequeue() {
    return this.linkedList.dequeue();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
