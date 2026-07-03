import Sort from '../Sort';

// Using charCode (a = 97, b = 98, etc), we can map characters to buckets from 1 - 26.
// Bucket 0 is reserved for the "no character at this position" case so that
// shorter strings are sorted before longer strings with the same prefix
// (e.g. 'b' goes before 'ba').
const BASE_CHAR_CODE = 97;
const NUMBER_OF_POSSIBLE_DIGITS = 10;
const ENGLISH_ALPHABET_LENGTH = 26;

export default class RadixSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Assumes all elements of array are of the same type
    const isArrayOfNumbers = this.isArrayOfNumbers(originalArray);

    if (isArrayOfNumbers) {
      // Number buckets are formed of digits and thus can only handle
      // non-negative integers. To sort negative numbers we sort their
      // absolute values instead and then reverse and negate the result
      // back, prepending it to the sorted non-negative numbers:
      // [2, -1, -3] → negatives [1, 3] → sorted [1, 3]
      // → reversed and negated [-3, -1] → result [-3, -1, 2]
      const negativeNumbers = originalArray
        .filter((number) => number < 0)
        .map((number) => -number);

      if (negativeNumbers.length) {
        const nonNegativeNumbers = originalArray.filter((number) => number >= 0);

        return [
          ...this.sort(negativeNumbers).reverse().map((number) => -number),
          ...this.sort(nonNegativeNumbers),
        ];
      }
    }

    let sortedArray = [...originalArray];
    const numPasses = this.determineNumPasses(sortedArray);

    for (let currentIndex = 0; currentIndex < numPasses; currentIndex += 1) {
      const buckets = isArrayOfNumbers
        ? this.placeElementsInNumberBuckets(sortedArray, currentIndex)
        : this.placeElementsInCharacterBuckets(sortedArray, currentIndex, numPasses);

      // Flatten buckets into sortedArray, and repeat at next index
      sortedArray = buckets.reduce((acc, val) => {
        return [...acc, ...val];
      }, []);
    }

    return sortedArray;
  }

  /**
   * @param {*[]} array
   * @param {number} index
   * @return {*[]}
   */
  placeElementsInNumberBuckets(array, index) {
    // See below. These are used to determine which digit to use for bucket allocation
    const modded = 10 ** (index + 1);
    const divided = 10 ** index;
    const buckets = this.createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

    array.forEach((element) => {
      this.callbacks.visitingCallback(element);
      if (element < divided) {
        buckets[0].push(element);
      } else {
        /**
         * Say we have element of 1,052 and are currently on index 1 (starting from 0). This means
         * we want to use '5' as the bucket. `modded` would be 10 ** (1 + 1), which
         * is 100. So we take 1,052 % 100 (52) and divide it by 10 (5.2) and floor it (5).
         */
        const currentDigit = Math.floor((element % modded) / divided);
        buckets[currentDigit].push(element);
      }
    });

    return buckets;
  }

  /**
   * @param {*[]} array
   * @param {number} index
   * @param {number} numPasses
   * @return {*[]}
   */
  placeElementsInCharacterBuckets(array, index, numPasses) {
    // One extra bucket (the very first one) is being used for the elements
    // that have no character at the currently inspected position.
    const buckets = this.createBuckets(ENGLISH_ALPHABET_LENGTH + 1);

    array.forEach((element) => {
      this.callbacks.visitingCallback(element);
      const currentBucket = this.getCharCodeOfElementAtIndex(element, index, numPasses);
      buckets[currentBucket].push(element);
    });

    return buckets;
  }

  /**
   * Get the bucket number for the character of the element that is being
   * inspected during the current pass. Passes go through character positions
   * from right to left (this is the least-significant-digit radix sort), so
   * the pass number 0 inspects the very last possible character position.
   *
   * @param {string} element
   * @param {number} index
   * @param {number} numPasses
   * @return {number}
   */
  getCharCodeOfElementAtIndex(element, index, numPasses) {
    const charPos = numPasses - index - 1;

    // If the string is too short to have a character at this position then
    // place it into the very first bucket, since the "absent character"
    // must be sorted before 'a' ('b' goes before 'ba').
    if (charPos > element.length - 1) {
      return 0;
    }

    // Characters a-z occupy buckets 1-26 (bucket 0 is reserved above).
    return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE + 1;
  }

  /**
   * Number of passes is determined by the length of the longest element in the array.
   * For integers, this log10(num), and for strings, this would be the length of the string.
   */
  determineNumPasses(array) {
    return this.getLengthOfLongestElement(array);
  }

  /**
   * @param {*[]} array
   * @return {number}
   */
  getLengthOfLongestElement(array) {
    if (this.isArrayOfNumbers(array)) {
      return Math.floor(Math.log10(Math.max(...array))) + 1;
    }

    return array.reduce((acc, val) => {
      return val.length > acc ? val.length : acc;
    }, -Infinity);
  }

  /**
   * @param {*[]} array
   * @return {boolean}
   */
  isArrayOfNumbers(array) {
    // Assumes all elements of array are of the same type
    return this.isNumber(array[0]);
  }

  /**
   * @param {number} numBuckets
   * @return {*[]}
   */
  createBuckets(numBuckets) {
    /**
     * Mapping buckets to an array instead of filling them with
     * an array prevents each bucket from containing a reference to the same array
     */
    return new Array(numBuckets).fill(null).map(() => []);
  }

  /**
   * @param {*} element
   * @return {boolean}
   */
  isNumber(element) {
    return Number.isInteger(element);
  }
}
