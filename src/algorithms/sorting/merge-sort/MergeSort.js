import Sort from '../Sort';

export default class MergeSort extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is already sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split array on two halves.
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex);

    // Sort two halves of split array.
    const sortedLeftArray = this.sort(leftArray);
    const sortedRightArray = this.sort(rightArray);

    // Merge two sorted arrays into one.
    return this.mergeArrays(sortedLeftArray, sortedRightArray);
  }

  mergeArrays(leftArray, rightArray) {
    let sortedArray = [];

    // Indices for traversing the left and right arrays.
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      // Compare the elements at the current indices.
      const leftElement = leftArray[leftIndex];
      const rightElement = rightArray[rightIndex];

      if (this.comparator.lessThanOrEqual(leftElement, rightElement)) {
        // If the left element is smaller or equal, append it to the sorted array.
        sortedArray.push(leftElement);
        leftIndex += 1;
      } else {
        // Otherwise, append the right element to the sorted array.
        sortedArray.push(rightElement);
        rightIndex += 1;
      }

      // Call visiting callback.
      this.callbacks.visitingCallback(null);
    }

    // Concatenate the remaining elements from either the left or the right array.
    sortedArray = sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));

    return sortedArray;
  }
}
