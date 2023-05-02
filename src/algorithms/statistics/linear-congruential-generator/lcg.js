/**
 *
 * @param {number} a // multiplier
 * @param {number} c // increment
 * @param {number} m // modulus
 * @param {number} seed // starting seed
 * @param {number} n count of random numbers to generate
 * @returns a sequence of pseudorandom numbers between 0 and 1
 */
export default function lcg(a, c, m, seed, n = 1) {
  if (m < 2) throw new Error('m must be greater than 1');
  if (a < 0 || a >= m) throw new Error('a must be between 0 and m-1');
  if (c < 0 || c >= m) throw new Error('c must be between 0 and m-1');
  let result = [];

  for (let i = 0, x = seed; i < n; i++) {
    let random_number = (a * x + c) % m;
    result.push(random_number / m);
    x = random_number;
  }
  return result;
}
