import Sort from '../Sort';

export default class RadixSort extends Sort {
  sort(originalArray) {
    const isNumber = (element) => {
      return Number.isInteger(element);
    };

    const createBuckets = (numBuckets) => {
      /**
       * Mapping buckets to an array instead of filling them with
       * an array prevents each bucket from containing a reference to the same array
       */
      return new Array(numBuckets).fill(null).map(() => []);
    };

    const placeElementsInNumberBuckets = (array, index) => {
      // See below. These are used to determine which digit to use for bucket allocation
      const modded = 10 ** (index + 1);
      const divided = 10 ** index;
      const buckets = createBuckets(10);

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
    };

    const placeElementsInCharacterBuckets = (array, index, numPasses) => {
      const getCharCodeOfElementAtIndex = (element) => {
        // Place element in last bucket if not ready to organize
        if ((numPasses - index) > element.length) return 25;
        // Using charCode (a = 97, b = 98, etc), we can map characters to buckets from 0 - 25
        const BASE_CHAR_CODE = 97;
        /**
         * If each character has been organized, use first character to determine bucket,
         * otherwise iterate backwards through element
         */
        const charPos = index > element.length - 1 ? 0 : element.length - index - 1;

        return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE;
      };

      const buckets = createBuckets(26);

      array.forEach((element) => {
        this.callbacks.visitingCallback(element);
        const currentBucket = getCharCodeOfElementAtIndex(element);
        buckets[currentBucket].push(element);
      });

      return buckets;
    };

    // Assumes all elements of array are of the same type
    const isArrayOfNumbers = isNumber(originalArray[0]);

    /** Number of passes is determined by the length of the longest element in the array.
     * For integers, this log10(num), and for strings, this would be the lenght of the string.
     */
    const determineNumPasses = () => {
      const getLengthOfLongestElement = () => {
        if (isArrayOfNumbers) {
          return Math.floor(Math.log10(Math.max(...originalArray))) + 1;
        }

        return originalArray.reduce((acc, val) => {
          return val.length > acc ? val.length : acc;
        }, -Infinity);
      };

      return getLengthOfLongestElement(originalArray);
    };

    let sortedArray = [...originalArray];
    const numPasses = determineNumPasses();

    for (let currentIndex = 0; currentIndex < numPasses; currentIndex += 1) {
      const buckets = isArrayOfNumbers ?
        placeElementsInNumberBuckets(sortedArray, currentIndex) :
        placeElementsInCharacterBuckets(sortedArray, currentIndex, numPasses);
      // Flatten buckets into sortedArray, and repeat at next index
      sortedArray = buckets.reduce((acc, val) => {
        return [...acc, ...val];
      }, []);
    }

    return sortedArray;
  }
}
