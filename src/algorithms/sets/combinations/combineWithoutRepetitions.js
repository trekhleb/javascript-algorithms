/*
  @see: https://stackoverflow.com/a/127898/7794070

  Lets say your array of letters looks like this: "ABCDEFGH".
  You have three indices (i, j, k) indicating which letters you
  are going to use for the current word, You start with:

  A B C D E F G H
  ^ ^ ^
  i j k

  First you vary k, so the next step looks like that:

  A B C D E F G H
  ^ ^   ^
  i j   k

  If you reached the end you go on and vary j and then k again.

  A B C D E F G H
  ^   ^ ^
  i   j k

  A B C D E F G H
  ^   ^   ^
  i   j   k

  Once you j reached G you start also to vary i.

  A B C D E F G H
    ^ ^ ^
    i j k

  A B C D E F G H
    ^ ^   ^
    i j   k
  ...
 */

/**
 * @param {*[]} combinationOptions
 * @param {number} combinationLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(combinationOptions, combinationLength) {
  // If combination length is just 1 then return combinationOptions.
  if (combinationLength === 1) {
    return combinationOptions.map(option => [option]);
  }

  // Init combinations array.
  const combinations = [];

  for (let i = 0; i <= (combinationOptions.length - combinationLength); i += 1) {
    const smallerCombinations = combineWithoutRepetitions(
      combinationOptions.slice(i + 1),
      combinationLength - 1,
    );

    for (let j = 0; j < smallerCombinations.length; j += 1) {
      const combination = [combinationOptions[i]].concat(smallerCombinations[j]);
      combinations.push(combination);
    }
  }

  // Return all calculated combinations.
  return combinations;
}
