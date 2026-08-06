import LinkedList from '../linked-list/LinkedList';

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

// This is the table used for the Pearson hashing.
// Which contains shuffled number from 0 to 255.
const table = [
  84, 124, 126, 180, 160, 221, 178, 97, 71, 13, 102, 167, 209, 153, 232, 237,
  243, 24, 205, 228, 182, 83, 111, 245, 86, 99, 59, 26, 172, 225, 9, 94,
  37, 179, 138, 250, 154, 142, 132, 36, 134, 233, 188, 100, 29, 57, 161, 17,
  41, 136, 198, 61, 241, 46, 201, 137, 214, 10, 45, 109, 145, 204, 15, 119,
  21, 16, 252, 170, 47, 12, 95, 246, 249, 116, 7, 64, 149, 219, 171, 120,
  212, 216, 80, 74, 186, 192, 210, 190, 85, 78, 196, 181, 150, 110, 176, 127,
  140, 22, 98, 82, 18, 53, 230, 240, 139, 62, 70, 151, 157, 159, 213, 207,
  56, 81, 147, 168, 49, 229, 189, 235, 152, 130, 222, 215, 141, 6, 175, 2,
  244, 28, 224, 96, 91, 27, 129, 227, 199, 251, 69, 242, 223, 158, 8, 23,
  19, 31, 236, 25, 68, 254, 112, 247, 208, 148, 38, 114, 40, 55, 88, 231,
  32, 93, 163, 253, 90, 30, 89, 146, 113, 200, 177, 101, 135, 169, 128, 48,
  174, 66, 4, 155, 14, 166, 60, 193, 162, 0, 58, 79, 92, 239, 72, 203,
  123, 115, 67, 217, 106, 52, 173, 20, 35, 50, 5, 44, 11, 143, 206, 73,
  42, 34, 75, 131, 184, 220, 125, 156, 202, 238, 164, 103, 77, 248, 195, 183,
  211, 65, 226, 105, 43, 191, 3, 54, 234, 187, 194, 117, 121, 107, 1, 218,
  185, 76, 133, 33, 39, 255, 197, 63, 51, 144, 122, 87, 104, 118, 165, 108,
];

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    // Using Pearson hashing algorithm to generate the hash number.
    //
    // But you may also use other approaches like polynomial string hash to reduce the
    // number of collisions:
    //
    // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
    //
    // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
    // PRIME is just any prime number like 31.
    let hash = 0;

    // Produce a 32-bits hash number.
    for (let i = 0; i < 4; i += 1) {
      // charCodeAt may return number from 0 to 65536,
      // should remap to range 0 to 255.
      let hashPerRound = table[(key.charCodeAt(0) + i) % 256];
      for (let j = 1; j < key.length; j += 1) {
        hashPerRound = table[hashPerRound ^ (key.charCodeAt(j) % 256)];
      }

      // Left shift by 8-bits and OR the per-rounded hash.
      hash = (hash << 8) | hashPerRound;
    }

    // Bit mask to clear the left most bit,
    // so the result will be a positive number.
    hash &= 0x7FFFFFFF;

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

    if (!node) {
      // Insert new node.
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing node.
      node.value.value = value;
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

    return node ? node.value.value : undefined;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }

  /**
   * Gets the list of all the stored values in the hash table.
   *
   * @return {*[]}
   */
  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }
}
