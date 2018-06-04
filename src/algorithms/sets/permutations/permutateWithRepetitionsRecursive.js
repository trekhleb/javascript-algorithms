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
  if (!options || !options.length) return [];

  if (n === 0) {
    perms.push(prefix);
    return perms;
  }

  options.forEach((option) => {
    permutateWithRepetitionsRecursive(options, n - 1, prefix.concat([option]), perms);
  });

  return perms;
}
