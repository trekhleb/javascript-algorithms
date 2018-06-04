/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithRepetitionsRecursive(options, n = options.length || 0, prefix = '', perms = []) {
  if (n === 0) {
    if (prefix) perms.push(prefix);
    return perms;
  }

  options.forEach((option) => {
    permutateWithRepetitionsRecursive(options, n - 1, prefix + option, perms);
  });

  return perms;
}
