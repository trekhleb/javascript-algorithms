/**
 * @param {string} str
 * @return {string[]}
 */
export default function permutateWithRepetition(str) {
  // There is no permutations for empty string.
  if (!str || str.length === 0) {
    return [];
  }

  // There is only one permutation for the 1-character string.
  if (str.length === 1) {
    return [str];
  }

  // Let's create initial set of permutations.
  let previousPermutations = Array.from(str);
  let currentPermutations = [];
  let permutationSize = 1;

  // While the size of each permutation is less then or equal to string length...
  while (permutationSize < str.length) {
    // Reset all current permutations.
    currentPermutations = [];

    for (let pemIndex = 0; pemIndex < previousPermutations.length; pemIndex += 1) {
      for (let charIndex = 0; charIndex < str.length; charIndex += 1) {
        const currentPermutation = previousPermutations[pemIndex] + str[charIndex];
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
