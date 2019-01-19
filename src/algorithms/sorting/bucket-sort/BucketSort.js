// this code utilizes my own hash_sort
import Sort from '../Sort';

export default class BucketSort extends Sort {
  /**
   * @param {number[]} array
   * @description BucketSort is ideal for an even distribution.
   */

  // InsertionSort to be used within bucket sort
  insertionSort(array) {
    const noReassign = array;
    const size = noReassign.length;
    for (let i = 1; i < size; i += 1) {
      const temp = noReassign[i];
      for (let j = i - 1; j >= 0 && noReassign[j] > temp; j -= 1) {
        noReassign[j + 1] = noReassign[j];
        noReassign[j + 1] = temp;
      }
    }

    return noReassign;
  }

  // Implement bucket sort
  sort(array, bucketSize = 1) {
    // Declaring vars
    const noReassign = array;
    let i;
    let minValue = noReassign[0];
    let maxValue = noReassign[0];
    if (noReassign.length === 0) {
      return noReassign;
    }
    // Setting min and max values
    noReassign.forEach((currentVal) => {
      if (currentVal < minValue) {
        minValue = currentVal;
      } else if (currentVal > maxValue) {
        maxValue = currentVal;
      }
    });

    // Initializing buckets
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i += 1) {
      allBuckets[i] = [];
    }

    // Pushing values to buckets
    noReassign.forEach((element) => {
      allBuckets[Math.floor((element - minValue) / bucketSize)].push(element);
    });

    // Sorting buckets
    noReassign.length = 0;

    allBuckets.forEach((bucket) => {
      this.insertionSort(bucket);
      bucket.forEach((element) => {
        noReassign.push(element);
      });
    });

    return noReassign;
  }
}
