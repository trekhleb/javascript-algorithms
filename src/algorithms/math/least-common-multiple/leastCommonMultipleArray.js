import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * Function to find the least common multiple of an array of numbers.
 * @param {Array<number>} nums Array of numbers.
 * @return {number}
 * @throws {Error("Array is empty")} - Thrown when the input array is empty.
 */

export default function leastCommonMultipleArray(nums) {
  // Remove duplicates from array
  const uniqueNums = [...new Set(nums)];
  // Checks if array is empty then throw error
  if (uniqueNums.length === 0) {
    throw new Error('Array is empty');
  }
  // Checks if array contains 0 then return 0 as LCM
  for (let i = 0; i < uniqueNums.length; i += 1) {
    if (uniqueNums[i] === 0) {
      return 0;
    }
  }
  // Initialize LCM with first element of array
  let lcm = Math.abs(uniqueNums[0]);
  // Iterate over the array and find LCM of each element
  for (let i = 1; i < uniqueNums.length; i += 1) {
    const currentGCD = euclideanAlgorithm(lcm, uniqueNums[i]);
    lcm = Math.abs(lcm * uniqueNums[i]) / currentGCD;
  }
  // Return LCM
  return lcm;
}
