import Sort from '../Sort';
import Comparator from '../../../utils/comparator/Comparator';

export default class BCIS extends Sort {
  /**
   * This method will swap the values at the given indexs
   * @param {Object[]} _array array to be swapped
   * @param {number} j index j to be swapped with index i
   * @param {number} i index i to be swapped with index j
   * @returns {Array} Swapped array will be returned
   */
  SWAP(_array = [], i, j) {
    const arr = [..._array];
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  } // end SWAP
  /**
   * This will move down the sorted right array and shift the elements down with it until
   * the proper index is found.
   * @param {Object[]} _array
   * @param {*} currentItem
   * @param {number} SR
   * @param {number} right
   * @param {Object} comp
   * @returns {Array}
   */
  INSRIGHT(_array, currentItem, SR, right, comp) {
    const arr = [..._array];
    let j = SR;
    do {
      arr[j - 1] = arr[j];
      j += 1;
    }
    while (comp.lessThanOrEqual(j, right) && comp.greaterThan(currentItem, arr[j]));
    arr[j - 1] = currentItem;
    return arr;
  } // end INSRIGHT
  /**
   * The will insert a new value into the left sorted array.
   * @param {Object[]} _array
   * @param {*} currentItem
   * @param {number} SL
   * @param {number} left
   * @param {Object} comp
   * @returns {Array}
   */
  INSLEFT(_array, currentItem, SL, left, comp) {
    const arr = [..._array];
    let j = SL;
    do {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    while (comp.greaterThanOrEqual(j, left) && comp.lessThan(currentItem, arr[j]));
    arr[j + 1] = currentItem;
    return arr;
  } // end INSLEFT
  /**
   * @param {Object[]} _array
   * @param {number} SL
   * @param {number} SR
   * @param {Object} comp
   */
  ISEQUAL(_array, SL, SR, comp) {
    let arr = [..._array];
    for (let k = SL + 1; k <= SR - 1; k += 1) {
      if (comp.compare(arr[k], arr[SL] !== 0)) {
        arr = this.SWAP(arr, k, SL);
        return arr;
      } // end if
    } // end for
    return -1;
  } // end ISEQUAL
  /**
   * @param {Object[]} _array array to be sorted
   * @param {number} left index of left sorted array
   * @param {number} right index of right sorted array
   */
  SORT(_array = [], left = null, right = null) {
    let arr = [..._array];
    let SL = left;
    let SR = right;
    let i;
    const comp = new Comparator(((a, b) => {
      let x = a;
      let y = b;
      if (typeof a === 'string') {
        x = a.length;
      }
      if (typeof b === 'string') {
        y = b.length;
      }
      if (x === y) {
        return 0;
      }
      return x < y ? -1 : 1;
    }));

    do {
      const calc = Math.round(SL + ((SR - SL) / 2));
      arr = this.SWAP(arr, SR, calc);
      if (comp.equal(arr[SL], arr[SR])) {
        const copy = [...arr];
        arr = this.ISEQUAL(arr, SL, SR, comp);
        if (arr === -1) {
          arr = [...copy];
          break;
        } // end if
      } // end if
      if (comp.greaterThan(arr[SL], arr[SR])) {
        arr = this.SWAP(arr, SL, SR);
      } // end if
      if (SR - SL >= 100) {
        for (i = (SL + 1); i <= parseInt((SR - SL) ** 0.5, 10); i += 1) {
          if (comp.lessThan(arr[SR], arr[i])) {
            arr = this.SWAP(arr, SR, i);
          } else if (comp.greaterThan(arr[SL], arr[i])) {
            arr = this.SWAP(arr, SL, i);
          } // end if
        } // end for
      } else {
        i = SL + 1;
      } // end if
      const LC = arr[SL];
      const RC = arr[SR];
      do {
        const currentItem = arr[i];
        this.callbacks.visitingCallback(arr[i]);
        if (comp.greaterThan(currentItem, RC)) {
          arr[i] = arr[SR - 1];
          arr = this.INSRIGHT(arr, currentItem, SR, right, comp);
          SR -= 1;
        } else if (comp.lessThan(currentItem, LC)) {
          arr[i] = arr[SL + 1];
          arr = this.INSLEFT(arr, currentItem, SL, left, comp);
          SL += 1; i += 1;
        } else {
          i += 1;
        } // end if
      }
      while (i < SR);
      SL += 1;
      SR -= 1;
    }
    while (SL < SR);
    return arr;
  } // end Sort
  sort(array) {
    if (Array.isArray(array) === false) {
      throw new Error('An Array object is required.');
    }
    const len = array.length;
    if (len <= 1) return array;
    const returnArr = this.SORT(array, 0, array.length - 1);
    return returnArr;
  } // end sort
}
