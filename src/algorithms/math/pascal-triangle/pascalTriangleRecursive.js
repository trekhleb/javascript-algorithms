/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
export default function pascalTriangleRecursive(lineNumber) {
  if (lineNumber === 0) {
    return [1];
  }

  const currentLineSize = lineNumber + 1;
  const previousLineSize = currentLineSize - 1;

  // Create container for current line values.
  const currentLine = [];

  // We'll calculate current line based on previous one.
  const previousLine = pascalTriangleRecursive(lineNumber - 1);

  // Let's go through all elements of current line except the first and
  // last one (since they were and will be filled with 1's) and calculate
  // current coefficient based on previous line.
  for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
    const leftCoefficient = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0;
    const rightCoefficient = numIndex < previousLineSize ? previousLine[numIndex] : 0;

    currentLine[numIndex] = leftCoefficient + rightCoefficient;
  }

  return currentLine;
}
