/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @param {*[][]} combos
 * @param {*[]} currentCombo
 * @return {*[]}
 */
function combineRecursively(comboOptions, comboLength, combos = [], currentCombo = []) {
  if (comboLength === 0) {
    combos.push(currentCombo);

    return combos;
  }

  for (let letterIndex = 0; letterIndex <= (comboOptions.length - comboLength); letterIndex += 1) {
    const letter = comboOptions[letterIndex];
    const restCombinationOptions = comboOptions.slice(letterIndex + 1);

    combineRecursively(
      restCombinationOptions,
      comboLength - 1,
      combos,
      currentCombo.concat([letter]),
    );
  }

  return combos;
}

/**
 * @param {*[]} combinationOptions
 * @param {number} combinationLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(combinationOptions, combinationLength) {
  return combineRecursively(combinationOptions, combinationLength);
}
