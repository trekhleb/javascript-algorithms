/* eslint-env es2020 */
/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
export default function pascalTriangle(lineNumber) {
  const currentLine = [1];
  let coefficient = BigInt(1);

  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README. Keep the intermediate product
    // exact even when it exceeds Number.MAX_SAFE_INTEGER before division.
    coefficient = (coefficient * BigInt(lineNumber - numIndex + 1)) / BigInt(numIndex);
    currentLine[numIndex] = Number(coefficient);
  }

  return currentLine;
}
