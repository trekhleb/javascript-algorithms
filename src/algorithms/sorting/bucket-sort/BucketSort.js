import Sort from '../Sort';
import InsertionSort from '../insertion-sort/InsertionSort';

export default class BucketSort extends Sort {
  sort(originalArray, originalLowerBound, originalUpperBound) {
    if (originalArray.length < 2) {
      return [...originalArray];
    }
    let lowerBound = originalLowerBound;
    let upperBound = originalUpperBound;
    if (lowerBound === undefined || upperBound === undefined) {
      [lowerBound, upperBound] = this.getBounds(originalArray);
    }
    if (lowerBound === upperBound) {
      return [...originalArray];
    }
    const buckets = [];
    for (let i = 0; i < originalArray.length; i += 1) {
      const bucketIndex = Math.floor(((originalArray[i] - lowerBound) / (upperBound - lowerBound))
        * originalArray.length);
      if (buckets[bucketIndex] === undefined) {
        buckets[bucketIndex] = [];
      }
      buckets[bucketIndex].push(originalArray[i]);
    }
    let sorted = [];
    const sorter = new InsertionSort();
    for (let i = 0; i < buckets.length; i += 1) {
      if (buckets[i] !== undefined) {
        sorted = sorted.concat(sorter.sort(buckets[i]));
      }
    }
    return sorted;
  }

  getBounds(originalArray) {
    let upperBound = originalArray[0];
    let lowerBound = originalArray[0];
    for (let i = 1; i < originalArray.length; i += 1) {
      if (originalArray[i] < lowerBound) {
        lowerBound = originalArray[i];
      }
      if (originalArray[i] > upperBound) {
        upperBound = originalArray[i];
      }
    }
    return [lowerBound, upperBound];
  }
}
