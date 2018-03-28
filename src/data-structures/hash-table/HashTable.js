import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
  }

  // Converts key string to hash number.
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  insert(key, value) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    bucketLinkedList.appendUnique({ key, value });
  }

  delete(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    return bucketLinkedList.deleteByKey(key);
  }

  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    return bucketLinkedList.findByKey(key);
  }
}
