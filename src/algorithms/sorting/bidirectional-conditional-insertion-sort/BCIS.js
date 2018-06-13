import Sort from '../Sort';
import Comparator from '../../../utils/comparator/Comparator';

export default class BCIS extends Sort {
  /**
   * @param {Object[]} _array array to be swapped
   * @param {number} a index a to be swapped with index b
   * @param {number} b index b to be swapped with index a
   */
  static SWAP(_array = [], i, j) {
    const temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  } // end SWAP
  /**
   * @param {Object[]} _array
   * @param {*} currentItem
   * @param {number} SR
   * @param {number} right
   */
  static INSRIGHT(_array, currentItem, SR, right, comp) {
    let j = SR;
    do {
      _array[j - 1] = _array[j];
      j += 1;
    }
    while (comp.lessThanOrEqual(j, right) && comp.greaterThan(currentItem, _array[j]));
    _array[j - 1] = currentItem;
  } // end INSRIGHT
  /**
   *
   * @param {Object[]} _array
   * @param {*} currentItem
   * @param {number} SL
   * @param {number} left
   */
  static INSLEFT(_array, currentItem, SL, left, comp) {
    let j = SL;
    do {
      _array[j + 1] = _array[j];
      j -= 1;
    }
    while (comp.greaterThanOrEqual(j, left) && comp.lessThan(currentItem, _array[j]));
    _array[j + 1] = currentItem;
  } // end INSLEFT
  /**
   * @param {Object[]} _array
   * @param {number} SL
   * @param {number} SR
   */
  static ISEQUAL(_array, SL, SR, comp) {
    for (let k = SL + 1; k <= SR - 1; k += 1) {
      if (comp.compare(_array[k], _array[SL] !== 0)) {
        this.SWAP(_array, k, SL);
        return k;
      } // end if
    } // end for
    return -1;
  } // end ISEQUAL
  /**
   * @param {Object[]} _array array to be sorted
   * @param {number} left index of left sorted array
   * @param {number} right index of right sorted array
   */
  static Sort(_array = [], left = null, right = null) {
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
      this.SWAP(_array, SR, calc);
      if (comp.equal(_array[SL], _array[SR])) {
        if (this.ISEQUAL(_array, SL, SR, comp) === -1) {
          return;
        } // end if
      } // end if
      if (comp.greaterThan(_array[SL], _array[SR])) {
        this.SWAP(_array, SL, SR);
      } // end if
      if (SR - SL >= 100) {
        for (i = (SL + 1); i <= parseInt((SR - SL) ** 0.5, 10); i += 1) {
          if (comp.lessThan(_array[SR], _array[i])) {
            this.SWAP(_array, SR, i);
          } else if (comp.greaterThan(_array[SL], _array[i])) {
            this.SWAP(_array, SL, i);
          } // end if
        } // end for
      } else {
        i = SL + 1;
      } // end if
      const LC = _array[SL];
      const RC = _array[SR];
      do {
        const currentItem = _array[i];
        if (comp.greaterThan(currentItem, RC)) {
          _array[i] = _array[SR - 1];
          this.INSRIGHT(_array, currentItem, SR, right, comp);
          SR -= 1;
        } else if (comp.lessThan(currentItem, LC)) {
          _array[i] = _array[SL + 1];
          this.INSLEFT(_array, currentItem, SL, left, comp);
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
  } // end Sort
  sort(array) {
    if (array.length === 0) return [];
    BCIS.Sort(array, 0, array.length - 1);
    return array;
  } // end sort
}
