import Sort from "../Sort";

export default class TimSort extends Sort {
  sort(originalArray) {
    const RUN = 32;
    const array = [...originalArray];

    for (let i = 0; i < array.length; i += RUN) {
      this.insertionSort(array, i, Math.min(i + 31, n - 1));
    }

    for (let size = RUN; size < n; size = 2 * size) {
      for (let left = 0; left < n; left += 2 * size) {
        // find ending point of
        // left sub array
        // mid+1 is starting point
        // of right sub array
        let mid = left + size - 1;
        let right = Math.min(left + 2 * size - 1, n - 1);

        // merge sub array arr[left.....mid] &
        // arr[mid+1....right]
        merge(array, left, mid, right);
      }
    }

    return array;
  }

  insertionSort(originalArray, leftIndex, rightIndex) {
    // Go through leftIndex to rightIndex Elements
    for (let i = leftIndex; i < rightIndex; i += 1) {
      let currentIndex = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(originalArray[i]);

      // Go and check if previous elements and greater then current one.
      // If this is the case then swap that elements.
      while (
        array[currentIndex - 1] !== undefined &&
        this.comparator.lessThan(
          originalArray[currentIndex],
          originalArray[currentIndex - 1]
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
    let len1 = m - l + 1;
    let len2 = r - m;

    let left = [];
    let right = [];

    for (let i = 0; i < len1; i++) left[i] = originalArray[l + i];
    for (let i = 0; i < len2; i++) right[i] = originalArray[m + 1 + i];

    let i = 0;
    let j = 0;
    let k = left;

    // After comparing, we
    // merge those two array
    // in larger sub array
    while (i < len1 && j < len2) {
      if (left[i] <= right[j]) {
        originalArray[k] = left[i];
        i++;
      } else {
        originalArray[k] = right[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of left, if any
    while (i < len1) {
      originalArray[k] = left[i];
      k++;
      i++;
    }

    // Copy remaining element of right, if any
    while (j < len2) {
      originalArray[k] = right[j];
      k++;
      j++;
    }
  }
}
