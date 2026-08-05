/**
 * Iterative algorithm to find all combinations (repetitions allowed)
 * that sum up to a given number (target) using elements
 * from a set of positive integers (candidates).
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export default function combinationSum(candidates, target) {
  const combinations = [];

  const nonZeroCandidates = Array.from(new Set(candidates.filter(c => c > 0).slice().reverse()));
  const stack = nonZeroCandidates
    .map((candidate, index) => ({ candidateIndex: index, sum: candidate, prev: null }));

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.sum === target) {
      /*
      If the cumulative sum matches the target value
      then we build the corresponding candidates combination
      by traversing the current branch back to its root...
      */
      const combination = [];
      let currentNode = node;
      while (currentNode !== null) {
        const candidate = nonZeroCandidates[currentNode.candidateIndex];
        combination.push(candidate);
        currentNode = currentNode.prev;
      }
      combinations.push(combination);
    } else if (node.sum < target) {
      /*
      ...otherwise we combine the current branch
      with any other candidate (as long as it is
      less or equal than the current candidate)
      and evaluate the new branches.
      */
      for (let i = node.candidateIndex; i < nonZeroCandidates.length; i += 1) {
        stack.push({
          candidateIndex: i,
          sum: node.sum + nonZeroCandidates[i],
          prev: node,
        });
      }
    }
  }
  return combinations;
}
