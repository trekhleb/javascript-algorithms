import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = (function() {
      let temp =  new LinkedList();

      return {
        isEmpty: function() {
          return !temp.tail;
        },
        peek: function() {
          if(!temp.head) {
            return null;
          }

          return temp.head.value;
        },

        enqueue: function(value) {
          temp.append(value);
        },

        dequeue: function() {
          const removedHead = temp.deleteHead();
          return removedHead ? removedHead.value : null;
        },

        toString: function(callback) {
          return temp.toString(callback);
        }
      };
    })();
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
