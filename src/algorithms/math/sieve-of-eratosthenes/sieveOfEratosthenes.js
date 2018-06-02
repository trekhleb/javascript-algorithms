/**
 * @param {number} n
 * @return {number[]}
 */
export default function sieveOfEratosthenes(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  const primes = [];

  for (let i = 2; i <= n; i += 1) {
    if (isPrime[i] === true) {
      primes.push(i);

      // Warning: When working with really big numbers, the following line may cause overflow
      // In that case, it can be changed to:
      // let j = 2 * i;
      let j = i * i;

      while (j <= n) {
        isPrime[j] = false;
        j += i;
      }
    }
  }

  return primes;
}
