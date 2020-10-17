import Comparator from '../../../utils/comparator/Comparator';

/**
 * Linear search implementation.
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number[]}
 */
export default function linearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  for (let i = 0; i < array.length; i += 1) {
    if (comparator.equal(array[i], seekElement)) {
      return i;
    }
  }

  return -1;
}