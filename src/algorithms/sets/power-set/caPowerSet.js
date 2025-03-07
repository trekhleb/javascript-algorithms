/**
 * Find power-set of a set using CASCADING approach.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
export default function caPowerSet(originalSet) {
  // Let's start with an empty set.
  const sets = [[]];

  /*
    Now, let's say:
    originalSet = [1, 2, 3].

    Let's add the first element from the originalSet to all existing sets:
    [[]] ← 1 = [[], [1]]

    Adding the 2nd element to all existing sets:
    [[], [1]] ← 2 = [[], [1], [2], [1, 2]]

    Adding the 3nd element to all existing sets:
    [[], [1], [2], [1, 2]] ← 3 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

    And so on for the rest of the elements from originalSet.
    On every iteration the number of sets is doubled, so we'll get 2^n sets.
  */
  for (let numIdx = 0; numIdx < originalSet.length; numIdx += 1) {
    const existingSetsNum = sets.length;

    for (let setIdx = 0; setIdx < existingSetsNum; setIdx += 1) {
      const set = [...sets[setIdx], originalSet[numIdx]];
      sets.push(set);
    }
  }

  return sets;
}
