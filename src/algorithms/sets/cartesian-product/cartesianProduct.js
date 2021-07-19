/**
 * Generates Cartesian Product of two sets.
 * @param {*[]} setA
 * @param {*[]} setB
 * @return {*[]}
 */
export default function cartesianProduct(setA, setB) {
  // Check if input sets are not non-arrays.
  // Otherwise return null since we can't generate Cartesian Product out of them.
  if (!setA || !setB) {
    return null;
  }

  // Init product set.
  const product = [];
  if (!setA.length || !setB.length) {
    return product;
  }

  // Now, let's go through all elements of a first and second set and form all possible pairs.
  for (let indexA = 0; indexA < setA.length; indexA += 1) {
    for (let indexB = 0; indexB < setB.length; indexB += 1) {
      // Add current product pair to the product set.
      product.push([setA[indexA], setB[indexB]]);
    }
  }

  // Return cartesian product set.
  return product;
}
