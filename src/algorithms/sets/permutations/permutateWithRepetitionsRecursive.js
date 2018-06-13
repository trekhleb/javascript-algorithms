/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @param {*[]} currentPermutation
 * @param {*[][]} permutations
 * @return {*[]}
 */
export default function permutateWithRepetitionsRecursive(
  permutationOptions,
  permutationLength = permutationOptions.length || 0,
  currentPermutation = [],
  permutations = [],
) {
  // If initial options are null or empty then return empty array.
  if (!permutationOptions || !permutationOptions.length) {
    return [];
  }

  // If no more iterations required then add current permutation to permutations array.
  if (permutationLength === 0) {
    permutations.push(currentPermutation);

    return permutations;
  }

  // Recursively find permutations and store in permutations array.
  permutationOptions.forEach((permutationOption) => {
    permutateWithRepetitionsRecursive(
      permutationOptions,
      permutationLength - 1,
      currentPermutation.concat([permutationOption]),
      permutations,
    );
  });

  return permutations;
}
