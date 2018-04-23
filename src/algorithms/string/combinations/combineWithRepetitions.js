/**
 * @param {*[]} combinationOptions
 * @param {number} combinationLength
 * @return {*[]}
 */

export default function combineWithRepetitions(combinationOptions, combinationLength) {
  // If combination length equal to 0 then return empty combination.
  if (combinationLength === 0) {
    return [[]];
  }

  // If combination options are empty then return "no-combinations" array.
  if (combinationOptions.length === 0) {
    return [];
  }

  // Init combinations array.
  const combos = [];

  // Find all shorter combinations and attach head to each of those.
  const headCombo = [combinationOptions[0]];
  const shorterCombos = combineWithRepetitions(combinationOptions, combinationLength - 1);

  for (let combinationIndex = 0; combinationIndex < shorterCombos.length; combinationIndex += 1) {
    const combo = headCombo.concat(shorterCombos[combinationIndex]);
    combos.push(combo);
  }

  // Let's shift head to the right and calculate all the rest combinations.
  const combinationsWithoutHead = combineWithRepetitions(
    combinationOptions.slice(1),
    combinationLength,
  );

  // Join all combinations and return them.
  return combos.concat(combinationsWithoutHead);
}
