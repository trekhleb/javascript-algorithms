/* eslint-disable no-restricted-syntax, no-unreachable-loop */

/**
 * Implementation of the LRU (Least Recently Used) Cache
 * based on the (ordered) Map data-structure.
 *
 * Current implementation allows to have fast O(1) (in average) read and write operations.
 *
 * At any moment in time the LRU Cache holds not more that "capacity" number of items in it.
 */
class LRUCacheOnMap {
  /**
   * Creates a cache instance of a specific capacity.
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity; // How many items to store in cache at max.
    this.items = new Map(); // The ordered hash map of all cached items.
  }

  /**
   * Returns the cached value by its key.
   * Time complexity: O(1) in average.
   * @param {string} key
   * @returns {any}
   */
  get(key) {
    if (!this.items.has(key)) return undefined;
    const val = this.items.get(key);
    this.items.delete(key);
    this.items.set(key, val);
    return val;
  }

  /**
   * Sets the value to cache by its key.
   * Time complexity: O(1).
   * @param {string} key
   * @param {any} val
   */
  set(key, val) {
    this.items.delete(key);
    this.items.set(key, val);
    if (this.items.size > this.capacity) {
      for (const headKey of this.items.keys()) {
        this.items.delete(headKey);
        break;
      }
    }
  }
}

export default LRUCacheOnMap;
