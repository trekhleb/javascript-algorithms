/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map(comboOption => [comboOption]);
  }

  const combos = [];

  // Eliminate characters one by one and concatenate them to
  // combinations of smaller lengths.s
  for (let letterIndex = 0; letterIndex <= (comboOptions.length - comboLength); letterIndex += 1) {
    const currentLetter = comboOptions[letterIndex];

    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(letterIndex + 1),
      comboLength - 1,
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentLetter].concat(smallerCombo));
    });
  }

  return combos;
}
