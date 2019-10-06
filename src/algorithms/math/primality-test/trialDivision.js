/**
 * @param {number} x
 * @return {boolean}
 */
export default function trialDivision(x) {
  // Check if number is integer.
  if (x * 0 !== 0 || x % 1 !== 0) {
    return false
  }
  if (x <= 3) {
    return x > 1 // If number is less or equal to 3 and greater than 1, it can only be 2 or 3, which are prime.
  }
  if (x % 2 === 0 || x % 3 === 0) { // If the number is not divided by 2 and 3 then we may eliminate all further even dividers.
    return false
  }
  for (let i = 5; i * i <= x; i += 6) { // If there is no dividers up to square root of n then there is no higher dividers as well. We can step by 6 as we already checked for multiple of 2 and 3
    if (x % i === 0 || x % (i + 2) === 0) { // We also check for i + 2 because it can sometime be a prime.
      return false
    }
  }
  return true
}
