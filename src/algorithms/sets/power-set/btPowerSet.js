/**
 * @param {*[]} originalSet - Original set of elements we're forming power-set of.
 * @param {*[][]} allSubsets - All subsets that have been formed so far.
 * @param {*[]} currentSubSet - Current subset that we're forming at the moment.
 * @param {number} startAt - The position of in original set we're starting to form current subset.
 * @return {*[][]} - All subsets of original set.
 */
function btPowerSetRecursive(originalSet, allSubsets = [[]], currentSubSet = [], startAt = 0) {
  // In order to avoid duplication we need to start from next element every time we're forming a
  // subset. If we will start from zero then we'll have duplicates like {3, 3, 3}.
  for (let position = startAt; position < originalSet.length; position += 1) {
    // Let's push current element to the subset.
    currentSubSet.push(originalSet[position]);
    // Current subset is already valid so let's memorize it.
    allSubsets.push([...currentSubSet]);
    // Let's try to form all other subsets for the current subset.
    btPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1);
    // BACKTRACK. Exclude last element from the subset and try the next one.
    currentSubSet.pop();
  }

  // Return all subsets of a set.
  return allSubsets;
}

/**
 * Find power-set of a set using BACKTRACKING approach.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
export default function btPowerSet(originalSet) {
  return btPowerSetRecursive(originalSet);
}
