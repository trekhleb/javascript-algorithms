import Sort from '../Sort';

export default class PancakeSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    const arr = [...originalArray];

    let n = arr.length;

    while (n > 1) {
      let max = -Infinity;
      let maxIndex = 0;
      let k = n;

      for (let i = 0; i < k; i += 1) {
        if (this.comparator.greaterThanOrEqual(arr[i], max)) {
          max = arr[i];
          maxIndex = i;
        }
      }

      this.callbacks.visitingCallback(arr[maxIndex]);

      if (maxIndex !== n - 1) {
        let i = 0;
        k = maxIndex;
        while (i < k) {
          const temp = arr[k];
          arr[k] = arr[i];
          arr[i] = temp;
          i += 1;
          k -= 1;
        }

        i = 0;
        k = n - 1;

        while (i < k) {
          const temp = arr[k];
          arr[k] = arr[i];
          arr[i] = temp;
          i += 1;
          k -= 1;
        }
      }
      n -= 1;
    }

    return arr;
  }
}
