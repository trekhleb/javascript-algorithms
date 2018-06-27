export default class BloomFilter {
  /**
   * @param {number} size
   */
  constructor(size = 100) {
    // Bloom filter size directly affects the likelihood of false positives.
    // The bigger the size the lower the likelihood of false positives.
    this.size = size;
    this.storage = this.createStore(size);
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashValues = this.getHashValues(item);

    // Set each hashValue index to true
    hashValues.forEach(val => this.storage.setValue(val));
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item);

    for (let i = 0; i < hashValues.length; i += 1) {
      if (!this.storage.getValue(hashValues[i])) {
        // We know that the item was definitely not inserted.
        return false;
      }
    }

    // The item may or may not have been inserted.
    return true;
  }

  /**
   * Creates the data store for our filter.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    const storage = [];

    // Initialize all indexes to false
    for (let i = 0; i < size; i += 1) {
      storage.push(false);
    }

    const storageInterface = {
      getValue(index) {
        return storage[index];
      },
      setValue(index) {
        storage[index] = true;
      },
    };

    return storageInterface;
  }

  /**
   * @param {string} str
   * @return {number}
   */
  hash1(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i += 1) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) + hash + char;
      hash &= hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }

    return hash % this.size;
  }

  /**
   * @param {string} str
   * @return {number}
   */
  hash2(str) {
    let hash = 5381;

    for (let i = 0; i < str.length; i += 1) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) + hash + char; /* hash * 33 + c */
    }

    return hash % this.size;
  }

  /**
   * @param {string} str
   * @return {number}
   */
  hash3(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i += 1) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash; // Convert to 32bit integer
    }

    return hash % this.size;
  }

  /**
   * Runs all 3 hash functions on the input and returns an array of results
   *
   * @param {string} str
   * @return {number[]}
   */
  getHashValues(item) {
    return [this.hash1(item), Math.abs(this.hash2(item)), Math.abs(this.hash3(item))];
  }
}
