/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
export default function longestCommonSubsequnce(s1, s2) {
  // Init LCS matrix.
  const lcsMatrix = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));

  // Fill first row with zeros.
  for (let columnIndex = 0; columnIndex <= s1.length; columnIndex += 1) {
    lcsMatrix[0][columnIndex] = 0;
  }

  // Fill first column with zeros.
  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex += 1) {
    lcsMatrix[rowIndex][0] = 0;
  }

  // Fill rest of the column that correspond to each of two strings.
  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex += 1) {
    for (let columnIndex = 1; columnIndex <= s1.length; columnIndex += 1) {
      if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
        lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1],
        );
      }
    }
  }

  // Calculate LCS based on LCS matrix.
  if (!lcsMatrix[s2.length][s1.length]) {
    // If the length of largest common string is zero then return empty string.
    return '';
  }

  let lcs = '';
  let columnIndex = s1.length;
  let rowIndex = s2.length;

  while (columnIndex > 0 || rowIndex > 0) {
    if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
      // Move by diagonal left-top.
      lcs = s1[columnIndex - 1] + lcs;
      columnIndex -= 1;
      rowIndex -= 1;
    } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
      // Move left.
      columnIndex -= 1;
    } else {
      // Move up.
      rowIndex -= 1;
    }
  }

  return lcs;
}
