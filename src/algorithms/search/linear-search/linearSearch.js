import Comparator from '../../../utils/comparator/Comparator';

/**
 * Linear search implementation.
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number[]}
 */

                            /* array, item to look for, callback for comparator object */
export default function linearSearch(array, seekElement, comparatorCallback) {
//   Previously imported compartor object to assist in checking value
  const comparator = new Comparator(comparatorCallback);
  
//   Array of locations (indices) where value can be found
  const foundIndices = [];

//   Loops through array one time and checks each value in the array to the desired value
  array.forEach((element, index) => {
    
//     Adds index to array if the values match
    if (comparator.equal(element, seekElement)) {
      foundIndices.push(index);
    }
  });

//   Returns all the locations the desired value can be found in the given array
  return foundIndices;
}
