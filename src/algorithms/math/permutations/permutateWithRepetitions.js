/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithRepetitions(permutationOptions) {
  // There is no permutations for empty array.
  if (!permutationOptions || permutationOptions.length === 0) {
    return [];
  }

  // There is only one permutation for the 1-element array.
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  // Let's create initial set of permutations.
  let previousPermutations = permutationOptions.map(option => [option]);
  let currentPermutations = [];
  let permutationSize = 1;

  // While the size of each permutation is less then or equal to options length...
  while (permutationSize < permutationOptions.length) {
    // Reset all current permutations.
    currentPermutations = [];

    for (let permIndex = 0; permIndex < previousPermutations.length; permIndex += 1) {
      for (let optionIndex = 0; optionIndex < permutationOptions.length; optionIndex += 1) {
        let currentPermutation = previousPermutations[permIndex];
        currentPermutation = currentPermutation.concat([permutationOptions[optionIndex]]);
        currentPermutations.push(currentPermutation);
      }
    }

    // Make current permutations to be the previous ones.
    previousPermutations = currentPermutations.slice(0);

    // Increase permutation size counter.
    permutationSize += 1;
  }

  return currentPermutations;
}
