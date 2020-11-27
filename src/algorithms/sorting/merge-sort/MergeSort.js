import Sort from "../Sort";

export default class MergeSort extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split array on two halves.
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    // Sort two halves of split array
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // Merge two sorted arrays into one.
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = [];

    // Use array pointers to exclude old elements after they have been added to the sorted array
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      // Find the minimum element between the left and right array
      if (
        this.comparator.lessThanOrEqual(
          leftArray[leftIndex],
          rightArray[rightIndex]
        )
      ) {
        sortedArray.push(leftArray[leftIndex]);

        // Increment index pointer to the right
        leftIndex += 1;

        // Call visiting callback.
        this.callbacks.visitingCallback(leftArray[leftIndex]);
      } else {
        sortedArray.push(rightArray[rightIndex]);

        // Increment index pointer to the right
        rightIndex += 1;

        // Call visiting callback.
        this.callbacks.visitingCallback(rightArray[rightIndex]);
      }
    }

    // There will be one element remaining from either the left OR the right
    // Concatenate the remaining element into the sorted array
    return sortedArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }
}
