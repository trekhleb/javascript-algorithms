import Sort from '../Sort';

export default class MergeSortWithoutRecursion extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    let step = 1;
    let left;
    let right;

    while (step < originalArray.length) {
      left = 0;
      right = step;

      while (right + step < originalArray.length) {
        this.mergeArrays(originalArray, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }

      if (right < originalArray.length) {
        this.mergeArrays(originalArray, left, left + step, right, originalArray.length);
      }
      step *= 2;
    }

    return originalArray;
  }

  mergeArrays(originalArray, startLeft, stopLeft, startRight, stopRight) {
    const arr = originalArray;
    const rightArr = new Array(stopRight - startRight + 1);
    const leftArr = new Array(stopLeft - startRight + 1);
    let k = startRight;

    for (let i = 0; i < (rightArr.length - 1); i += 1) {
      rightArr[i] = arr[k];
      k += 1;
    }
    k = startLeft;
    for (let i = 0; i < (leftArr.length - 1); i += 1) {
      leftArr[i] = arr[k];
      k += 1;
    }

    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity; // 哨兵值
    let m = 0;
    let n = 0;
    for (let i = startLeft; i < stopRight; i += 1) {
      if (leftArr[m] <= rightArr[n]) {
        arr[i] = leftArr[m];
        m += 1;
      } else {
        arr[i] = rightArr[n];
        n += 1;
      }
    }
  }
}
