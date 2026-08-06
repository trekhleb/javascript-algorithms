/**
 * @param {number} number
 * @return {boolean}
 */
export default function trialDivision(number) {
  // Check if number is integer.
  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 3) {
    // If number is less than one then it isn't prime by definition. But all numbers from 2 to 3 are prime.
    return number > 1;
  }

  // If the number is not divided by 2 or 3 then we may eliminate all further even dividers.
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // If there is no dividers up to square root of divider then there is no higher dividers as well. To make the algorithm more efficient, we increment by 6 everytime, and make sure to check divider + 2 as well.
  for (let divider = 5; number >= (divider * divider); divider += 6) {
    if (number % divider === 0 || number % (divider + 2) === 0) {
      return false;
    }
  }

  return true;
}
