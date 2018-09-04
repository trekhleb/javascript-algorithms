/**
 * @param {number} num
 * @param {number} power
 * @return {number}
 */

export default function nthRoot(num, power) {
  const E = 0.000000001;
  const roundToMargin = (x) => {
    return Math.round(x / E) * E;
  };

  let guess;
  const calculateError = () => Math.abs(num - (guess ** power));

  let start = 0;
  let end = num;
  let error = 1;

  while (error > E) {
    guess = (start + end) / 2;
    error = calculateError();

    if (guess ** power > num) {
      end = guess;
    } else {
      start = guess;
    }
  }

  return roundToMargin(guess);
}
