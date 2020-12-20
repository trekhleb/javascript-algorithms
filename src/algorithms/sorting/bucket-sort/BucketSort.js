import Sort from '../Sort';
import InsertionSort from '../insertion-sort/InsertionSort';

export default class BucketSort extends Sort {
  sort(originalArray, originalLowerBound, originalUpperBound, originalBucketsCount) {
    // Check list length.
    if (originalArray.length < 2) {
      return [...originalArray];
    }

    // Assign default value to lowerBound and upperBound if required.
    let lowerBound = originalLowerBound;
    let upperBound = originalUpperBound;
    if (lowerBound === undefined || upperBound === undefined) {
      [lowerBound, upperBound] = this.getBounds(originalArray);
    }

    // return list because all values are equal, so it is sorted.
    if (lowerBound === upperBound) {
      return [...originalArray];
    }

    // Assign default value to bucketsCount if required.
    let bucketCount = originalBucketsCount;
    if (originalBucketsCount === undefined) {
      bucketCount = originalArray.length;
    }

    // Bucketing values.
    const buckets = [];
    for (let i = 0; i < originalArray.length; i += 1) {
      const bucketIndex = Math.floor(((originalArray[i] - lowerBound)
        / (upperBound - lowerBound)) * (bucketCount - 1));
      if (buckets[bucketIndex] === undefined) {
        buckets[bucketIndex] = [];
      }
      buckets[bucketIndex].push(originalArray[i]);
    }

    // Sort and merge buckets
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
