/* eslint-disable linebreak-style */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import Sort from '../Sort';

export default class TimSort extends Sort {
  sort(originalArray) {
    let RUN = 32;
    const array = [...originalArray];
    if (array.length < RUN) RUN = RUN / 2 + 1;

    for (let i = 0; i < array.length; i += RUN) {
      this.insertionSort(array, i, Math.min(i + RUN - 1, array.length - 1));
    }

    for (let size = RUN; size < array.length; size = 2 * size) {
      for (let left = 0; left < array.length; left += 2 * size) {
        // find ending point of
        // left sub array
        // mid+1 is starting point
        // of right sub array
        const mid = left + size - 1;
        const right = Math.min(left + 2 * size - 1, array.length - 1);

        // merge sub array arr[left.....mid] &
        // arr[mid+1....right]
        this.merge(array, left, mid, right);
      }
    }

    return array;
  }

  insertionSort(originalArray, leftIndex, rightIndex) {
    // Go through leftIndex to rightIndex Elements
    for (let i = leftIndex; i <= rightIndex; i += 1) {
      let currentIndex = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(originalArray[i]);

      // Go and check if previous elements and greater then current one.
      // If this is the case then swap that elements.
      while (
        originalArray[currentIndex - 1] !== undefined
        && this.comparator.lessThan(
          originalArray[currentIndex],
          originalArray[currentIndex - 1],
        )
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(originalArray[currentIndex - 1]);

        // Swap the elements.
        [originalArray[currentIndex - 1], originalArray[currentIndex]] = [
          originalArray[currentIndex],
          originalArray[currentIndex - 1],
        ];

        // Shift current index left.
        currentIndex -= 1;
      }
    }
  }

  merge(originalArray, l, m, r) {
    // Original array is broken in two parts
    // left and right array
    const len1 = m - l + 1;
    const len2 = r - m;

    const left = [];
    const right = [];

    for (let i = 0; i < len1; i++) left[i] = originalArray[l + i];
    for (let i = 0; i < len2; i++) right[i] = originalArray[m + 1 + i];

    let i = 0;
    let j = 0;
    let k = left;

    // After comparing, we
    // merge those two array
    // in larger sub array
    // eslint-disable-next-line max-len
    while (i < len1 && j < len2 && left[i] !== undefined && right[j] !== undefined && originalArray[k] !== undefined) {
      if (this.comparator.lessThan(left[i], right[j])) {
        originalArray[k] = left[i];
        i++;
      } else {
        originalArray[k] = right[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of left, if any
    while (i < len1 && left[i] !== undefined && originalArray[k] !== undefined) {
      originalArray[k] = left[i];
      k++;
      i++;
    }

    // Copy remaining element of right, if any
    while (j < len2 && right[j] !== undefined && originalArray[k] !== undefined) {
      originalArray[k] = right[j];
      k++;
      j++;
    }
  }
}
