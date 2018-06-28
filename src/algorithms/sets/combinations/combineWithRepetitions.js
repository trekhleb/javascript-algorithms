/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map(comboOption => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Eliminate characters one by one and concatenate them to
  // combinations of smaller lengths.
  for (let optionIndex = 0; optionIndex < comboOptions.length; optionIndex += 1) {
    const currentOption = comboOptions[optionIndex];

    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
      comboLength - 1,
    );

    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  }

  return combos;
}
