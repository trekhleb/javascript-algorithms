import Sort from '../Sort';

export default class MergeSort extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Find the index in the array middle point.
    const middleIndex = Math.floor(originalArray.length / 2);

    // Merge two sorted arrays into one.
    return this.mergeSortedArrays(
      this.sort(originalArray.slice(0, middleIndex)),
      this.sort(originalArray.slice(middleIndex, originalArray.length))
    );
  }

  mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = [];

    // Use array pointers to exclude old elements after they have been added to the sorted array.
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      // Find the minimum element between the left and right array.
      const minElement = this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])
        ? leftArray[leftIndex++]
        : rightArray[rightIndex++];

      // Add the minimum element to the sorted array.
      sortedArray.push(minElement);

      // Call visiting callback.
      this.callbacks.visitingCallback(minElement);
    }

    // There will be elements remaining from either the left OR the right
    // Concatenate the remaining elements into the sorted array
    return [...sortedArray, ...leftArray.slice(leftIndex)), ...rightArray.slice(rightIndex))];
  }
}
