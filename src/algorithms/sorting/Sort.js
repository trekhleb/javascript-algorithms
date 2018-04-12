import Comparator from '../../utils/comparator/Comparator';

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */

export default class Sort {
  constructor(rawCallbacks) {
    this.callbacks = Sort.initSortingCallbacks(rawCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }

  /**
   * @param {SorterCallbacks} rawCallbacks
   * @returns {SorterCallbacks}
   */
  static initSortingCallbacks(rawCallbacks) {
    const callbacks = rawCallbacks || {};
    const stubCallback = () => {};

    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

    return callbacks;
  }

  sort() {
    throw new Error('sort method must be implemented');
  }
}
