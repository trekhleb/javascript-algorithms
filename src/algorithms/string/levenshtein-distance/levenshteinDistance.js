/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export default function levenshteinDistance(a, b) {
  // Create empty edit distance matrix for all possible modifications of
  // substrings of a to substrings of b.
  const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  // Fill the first row of the matrix.
  // If this is first row then we're transforming empty string to a.
  // In this case the number of transformations equals to size of a substring.
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  // Fill the first column of the matrix.
  // If this is first column then we're transforming empty string to b.
  // In this case the number of transformations equals to size of b substring.
  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1, // insertion
        distanceMatrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }

  return distanceMatrix[b.length][a.length];
}

export function levenshteinDistanceRec(P, T, i, j) {
    // if called without initial distances, start with the length of the strings
    if (i === undefined || j === undefined) return levenshteinDistanceRec(P, T, P.length - 1, T.length - 1);
  
    // establish base cases
    if (i === 0 && j === 0) return 0;
    if (i === 0) return j;
    if (j === 0) return i;

    var sub = levenshteinDistanceRec(P, T, i-1, j-1) + (P[i]===T[j] ? 0 : 1); // substitution
    var del = levenshteinDistanceRec(P, T, i, j-1) + 1; // insertion
    var add = levenshteinDistanceRec(P, T, i-1, j) + 1; // deletion
    
    // pick the transformation that minimizes the distance
    return Math.min(sub, add, del);
};
