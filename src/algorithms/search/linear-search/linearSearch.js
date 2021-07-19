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

  return array.reduce((accumulator, currentValue, index) => {
    if (comparator.equal(currentValue, seekElement)) {
      accumulator.push(index);
    }
    return accumulator;
  }, []);
}
