export default function permutateString(str) {
  if (str.length === 0) {
    return [];
  }

  if (str.length === 1) {
    return [str];
  }

  const permutations = [];

  // Get all permutations of string of length (n - 1).
  const previousString = str.substring(0, str.length - 1);
  const previousPermutations = permutateString(previousString);

  // Insert last character into every possible position of every previous permutation.
  const lastCharacter = str.substring(str.length - 1);

  for (
    let permutationIndex = 0;
    permutationIndex < previousPermutations.length;
    permutationIndex += 1
  ) {
    const currentPermutation = previousPermutations[permutationIndex];

    // Insert strLastCharacter into every possible position of currentPermutation.
    for (let positionIndex = 0; positionIndex <= currentPermutation.length; positionIndex += 1) {
      const permutationPrefix = currentPermutation.substr(0, positionIndex);
      const permutationSuffix = currentPermutation.substr(positionIndex);
      permutations.push(permutationPrefix + lastCharacter + permutationSuffix);
    }
  }

  return permutations;
}
