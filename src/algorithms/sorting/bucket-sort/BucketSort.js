import QuickSort from '../quick-sort/QuickSort';

/**
 * Bucket Sort
 *
 * @param {number[]} arr
 * @param {number} bucketsNum
 * @return {number[]}
 */
export default function BucketSort(arr, bucketsNum = 1) {
  const buckets = new Array(bucketsNum).fill(null).map(() => []);

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const bucketSize = Math.ceil(Math.max(1, (maxValue - minValue) / bucketsNum));

  // Place elements into buckets.
  for (let i = 0; i < arr.length; i += 1) {
    const currValue = arr[i];
    const bucketIndex = Math.floor((currValue - minValue) / bucketSize);

    // Edge case for max value.
    if (bucketIndex === bucketsNum) {
      buckets[bucketsNum - 1].push(currValue);
    } else {
      buckets[bucketIndex].push(currValue);
    }
  }

  // Sort individual buckets.
  for (let i = 0; i < buckets.length; i += 1) {
    // Let's use a comparison-based sorter here since bucket elements
    // may be arbitrary numbers (i.e. negative ones or floats), which
    // a digit-based sorter (like radix sort) cannot handle.
    buckets[i] = new QuickSort().sort(buckets[i]);
  }

  // Merge sorted buckets into final output.
  const sortedArr = [];
  for (let i = 0; i < buckets.length; i += 1) {
    sortedArr.push(...buckets[i]);
  }

  return sortedArr;
}
