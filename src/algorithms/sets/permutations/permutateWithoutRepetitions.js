/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 0) {
    return [];
  }

  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];

  // Get all permutations of length (n - 1).
  const previousOptions = permutationOptions.slice(0, permutationOptions.length - 1);
  const previousPermutations = permutateWithoutRepetitions(previousOptions);

  // Insert last option into every possible position of every previous permutation.
  const lastOption = permutationOptions.slice(permutationOptions.length - 1);

  for (
    let permutationIndex = 0;
    permutationIndex < previousPermutations.length;
    permutationIndex += 1
  ) {
    const currentPermutation = previousPermutations[permutationIndex];

    // Insert last option into every possible position of currentPermutation.
    for (let positionIndex = 0; positionIndex <= currentPermutation.length; positionIndex += 1) {
      const permutationPrefix = currentPermutation.slice(0, positionIndex);
      const permutationSuffix = currentPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat(lastOption, permutationSuffix));
    }
  }

  return permutations;
}
