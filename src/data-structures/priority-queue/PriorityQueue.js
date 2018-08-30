import MinHeap from '../heap/MinHeap';
import Comparator from '../../utils/comparator/Comparator';

// It is the same as min heap except that when comparing to elements
// we take into account not element's value but rather its priority.
export default class PriorityQueue extends MinHeap {
  /**
   * @constructor
   * @param {function|undefined} compareValueFunction
   */
  constructor(compareValueFunction) {
    super();
    // Map data structure supports using any value for key type
    // e.g. functions, objects, or primitives
    this.priorities = new Map();
    this.compare = new Comparator(this.comparePriority.bind(this));
    this.compareValue = new Comparator(compareValueFunction);
  }

  /**
   * @param {*} item
   * @param {number} priority
   * @return {PriorityQueue}
   */
  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);

    return this;
  }

  /**
   * @param {*} item
   * @param {Comparator|function|undefined} maybeComparator
   * @return {PriorityQueue}
   */
  remove(item, maybeComparator) {
    const comparator = this.getValueComparator(maybeComparator);
    super.remove(item, comparator);
    this.priorities.delete(item);

    return this;
  }

  /**
   * @param {*} item
   * @param {number} priority
   * @param {Comparator|function|undefined} maybeComparator
   * @return {PriorityQueue}
   */
  changePriority(item, priority, maybeComparator) {
    const comparator = this.getValueComparator(maybeComparator);
    const numberOfItemsToRemove = this.find(item, comparator).length;
    const itemsToUpdate = [];

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item, comparator).pop();
      const itemToUpdate = this.getElementAtIndex(indexToRemove);
      itemsToUpdate.push(itemToUpdate);
      this.priorities.delete(itemToUpdate);
      this.removeIndex(indexToRemove);
    }

    itemsToUpdate.forEach((itemToUpdate) => {
      this.add(itemToUpdate, priority);
    });

    return this;
  }

  /**
   * @param {*} item
   * @param {Comparator|function|undefined} maybeComparator
   * @return {Number[]}
   */
  findByValue(item, maybeComparator) {
    const comparator = this.getValueComparator(maybeComparator);
    return this.find(item, comparator);
  }

  /**
   * @param {*} item
   * @param {Comparator|function|undefined} maybeComparator
   * @return {boolean}
   */
  hasValue(item, maybeComparator) {
    const comparator = this.getValueComparator(maybeComparator);
    return this.findByValue(item, comparator).length > 0;
  }

  /**
   * @param {Comparator|function|undefined} maybeComparator
   * @return {Comparator}
   */
  getValueComparator(maybeComparator) {
    if (maybeComparator == null) {
      return this.compareValue;
    }

    if (maybeComparator instanceof Comparator) {
      return maybeComparator;
    }

    if (maybeComparator instanceof Function) {
      return new Comparator(maybeComparator);
    }

    throw new TypeError(
      'Invalid comparator type\n'
      + 'Must be one of: Comparator | Function | undefined\n'
      + `Given: ${typeof maybeComparator}`,
    );
  }

  /**
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }

    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }
}
