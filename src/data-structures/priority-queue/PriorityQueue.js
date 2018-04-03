import MinHeap from '../heap/MinHeap';

// It is the same as min heap except that when comparing to elements
// we take into account not element's value but rather its priority.
export default class PriorityQueue extends MinHeap {
  constructor() {
    super();
    this.priorities = {};
  }

  add(item, priority = 0) {
    this.priorities[item] = priority;
    super.add(item);
  }

  compare(a, b) {
    if (this.priorities[a] === this.priorities[b]) {
      return 0;
    }

    return this.priorities[a] < this.priorities[b] ? -1 : 1;
  }
}
