import Comparator from '../../../utils/comparator/Comparator';

/**
 * Sentinal Linear search implementation.
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number[]}
 */
export default function sentinalLinearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const foundIndices = [];
  var lastEle = array[array.length - 1] // Picking the last element in the array
  var i = 0;

  while (comparator.notEqual(i, array.length-1))
  {
    while(comparator.notEqual(array[i], seekElement))
    {
        i++;
    }
    if(comparator.notEqual(i, array.length-1))
    {
        foundIndices.push(i);
        i++;
    }
  }
    
  array[array.length - 1] = lastEle; // Replacing the last element

  if (comparator.equal(array[array.length - 1], seekElement)) {
    foundIndices.push(i);
  }
  
  return foundIndices;
}
