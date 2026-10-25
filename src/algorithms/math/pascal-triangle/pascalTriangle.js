/**
 * Note on precision: the intermediate product in the formula below may exceed
 * Number.MAX_SAFE_INTEGER (2^53 - 1). When that happens the integer precision
 * is lost and the returned entries are only approximate. The first line number
 * for which this happens is around 55.
 *
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
export default function pascalTriangle(lineNumber) {
  const currentLine = [1];

  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README.
    currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }

  return currentLine;
}
