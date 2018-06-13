/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithRepetitionsRecursive(
  options,
  n = options.length || 0,
  prefix = [],
  perms = [],
) {
  // If initial options are null or empty then return empty array
  if (!options || !options.length) return [];

  // If no more iterations then add current prefix to perms array
  if (n === 0) {
    perms.push(prefix);
    return perms;
  }

  // Recursively find permutations and store in perms array
  options.forEach((option) => {
    permutateWithRepetitionsRecursive(options, n - 1, prefix.concat([option]), perms);
  });

  return perms;
}
