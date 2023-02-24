import Sort from '../Sort';

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
      // Call visiting callback.
      this.callbacks.visitingCallback(originalArray[i]);

      // Find bucket index.
      const bucketIndex = Math.floor(((originalArray[i] - lowerBound)
        / (upperBound - lowerBound)) * (bucketCount - 1));

      // Insert originalArray[i] in related bucket.
      if (buckets[bucketIndex] === undefined) {
        buckets[bucketIndex] = [];
        buckets[bucketIndex].push(originalArray[i]);
      } else {
        // Perform insertion sort step.
        if (originalArray[i] <= buckets[bucketIndex][0]) {
          // Call visiting callback.
          this.callbacks.visitingCallback(buckets[bucketIndex][0]);
          // Insert originalArray[i]
          buckets[bucketIndex].unshift(originalArray[i]);
        } else if (originalArray[i] >= buckets[bucketIndex][buckets[bucketIndex].length - 1]) {
          // Call visiting callback.
          this.callbacks.visitingCallback(buckets[bucketIndex][-1]);
          // Insert originalArray[i]
          buckets[bucketIndex].push(originalArray[i]);
        } else {
          let inBucketIndex = buckets[bucketIndex].length;
          while (buckets[bucketIndex][inBucketIndex - 1] > originalArray[i]) {
            // Call visiting callback.
            this.callbacks.visitingCallback(buckets[bucketIndex][inBucketIndex - 1]);
            // Shift current index left.
            buckets[bucketIndex][inBucketIndex] = buckets[bucketIndex][inBucketIndex - 1];
            inBucketIndex -= 1;
          }
          // Insert current value.
          buckets[bucketIndex][inBucketIndex] = originalArray[i];
        }
      }
    }

    // Merge buckets
    const sorted = [];
    for (let i = 0; i < buckets.length; i += 1) {
      if (buckets[i] !== undefined) {
        for (let j = 0; j < buckets[i].length; j += 1) {
          sorted.push(buckets[i][j]);
        }
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
