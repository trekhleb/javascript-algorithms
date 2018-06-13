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
   * @param {*} _current_item 
   * @param {number} SR 
   * @param {number} right 
   */
  static INSRIGHT(_array, _current_item, SR, right, comp) {
    let j = SR;
    do {
      _array[j - 1] = _array[j];
      j = j + 1;
    }
    while (comp.lessThanOrEqual(j,right) && comp.greaterThan(_current_item, _array[j]));
    _array[j - 1] = _current_item;
  } // end INSRIGHT
  /**
   * 
   * @param {Object[]} _array 
   * @param {*} _current_item 
   * @param {number} SL 
   * @param {number} left 
   */
  static INSLEFT(_array, _current_item, SL, left, comp) {
    let j = SL;
    do {
      _array[j + 1] = _array[j];
      j = j - 1;
    }
    while (comp.greaterThanOrEqual(j,left) && comp.lessThan(_current_item, _array[j]));
    _array[j + 1] = _current_item;
  } // end INSLEFT
  /**
   * @param {Object[]} _array 
   * @param {number} SL 
   * @param {number} SR 
   */
  static ISEQUAL(_array, SL, SR, comp) {
    for (let k = SL + 1; k <= SR - 1; k++) {
      if (comp.compare(_array[k],_array[SL] !== 0)) {
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
    let comp = new Comparator(function(a,b){
        let x = a;
        let y = b;
        if(typeof a === "string"){
            x = a.length;
        }
        if(typeof b === "string"){
            y = b.length;
        }
        if (x === y) {
            return 0;
        }          
        return x < y ? -1 : 1;
    })
    
    do {
      let calc = Math.round(SL + (SR - SL) / 2);
      this.SWAP(_array, SR, calc);
      if (comp.equal(_array[SL],_array[SR])) {
        if (this.ISEQUAL(_array, SL, SR, comp) === -1) {
          return;
        } // end if
      } // end if
      if (comp.greaterThan(_array[SL],_array[SR])) {
        this.SWAP(_array, SL, SR);
      } // end if
      if (SR - SL >= 100) {
        for (i = (SL + 1); i <= parseInt(Math.pow(SR - SL, 0.5)); i++) {
          if (comp.lessThan(_array[SR], _array[i])) {
            this.SWAP(_array, SR, i);
          }
          else if (comp.greaterThan(_array[SL], _array[i])) {
            this.SWAP(_array, SL, i);
          } // end if
        } // end for
      }
      else {
        i = SL + 1;
      } // end if
      let LC = _array[SL];
      let RC = _array[SR];
      do {
        let _current_item = _array[i];
        if (comp.greaterThan(_current_item,RC)) {
          _array[i] = _array[SR - 1];
          this.INSRIGHT(_array, _current_item, SR, right, comp);
          SR--;
        }
        else if (comp.lessThan(_current_item, LC)) {
          _array[i] = _array[SL + 1];
          this.INSLEFT(_array, _current_item, SL, left, comp);
          SL++; i++;
        }
        else {
          i++;
        } // end if
      }
      while (i < SR)
      SL++;
      SR--;
    }
    while (SL < SR)
  } // end Sort
  sort(array) {
    if(array.length === 0) return [];
    BCIS.Sort(array, 0, array.length - 1);
    return array;
  } // end sort
}
