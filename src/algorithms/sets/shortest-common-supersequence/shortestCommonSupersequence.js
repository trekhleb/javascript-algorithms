import longestCommonSubsequence from '../longest-common-subsequence/longestCommonSubsequence';

/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}
 */

export default function shortestCommonSupersequence(set1, set2) {
  // Let's first find the longest common subsequence of two sets.
  const lcs = longestCommonSubsequence(set1, set2);

  // If LCS is empty then the shortest common supersequence would be just
  // concatenation of two sequences.
  if (lcs.length === 1 && lcs[0] === '') {
    return set1.concat(set2);
  }

  // Now let's add elements of set1 and set2 in order before/inside/after the LCS.
  let supersequence = [];

  let setIndex1 = 0;
  let setIndex2 = 0;
  let lcsIndex = 0;
  let setOnHold1 = false;
  let setOnHold2 = false;

  while (lcsIndex < lcs.length) {
    // Add elements of the first set to supersequence in correct order.
    if (setIndex1 < set1.length) {
      if (!setOnHold1 && set1[setIndex1] !== lcs[lcsIndex]) {
        supersequence.push(set1[setIndex1]);
        setIndex1 += 1;
      } else {
        setOnHold1 = true;
      }
    }

    // Add elements of the second set to supersequence in correct order.
    if (setIndex2 < set2.length) {
      if (!setOnHold2 && set2[setIndex2] !== lcs[lcsIndex]) {
        supersequence.push(set2[setIndex2]);
        setIndex2 += 1;
      } else {
        setOnHold2 = true;
      }
    }

    // Add LCS element to the supersequence in correct order.
    if (setOnHold1 && setOnHold2) {
      supersequence.push(lcs[lcsIndex]);
      lcsIndex += 1;
      setIndex1 += 1;
      setIndex2 += 1;
      setOnHold1 = false;
      setOnHold2 = false;
    }
  }

  // Attach set1 leftovers.
  if (setIndex1 < set1.length) {
    supersequence = supersequence.concat(set1.slice(setIndex1));
  }

  // Attach set2 leftovers.
  if (setIndex2 < set2.length) {
    supersequence = supersequence.concat(set2.slice(setIndex2));
  }

  return supersequence;
}
