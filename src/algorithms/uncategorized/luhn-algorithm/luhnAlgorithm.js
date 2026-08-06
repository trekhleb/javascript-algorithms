/**
 * Returns true/false depending on input account number
 *
 * @param {string\number} accountNumber
 * @return {boolean}
 */
export default function luhnAlgorithm(accountNumber) {
  // create two variables s1 and s2 for the odd digit and even digit sums.
  let s1 = 0;
  let s2 = 0;

  // create variable to decrement accountNumber
  let accountNo = accountNumber;

  // create flag to toggle between oddDigit and evenDigit
  let isOddDigit = true;


  while (accountNo > 0) {
    // use mod 10 to get next digit
    const nextDigit = accountNo % 10;

    // decrease accountNo by dividing it by 10
    accountNo = Math.floor(accountNo / 10);

    // if oddDigit, add nextDigit to s1
    if (isOddDigit) {
      s1 += nextDigit;
    } else {
      // else, double nextDigit
      const twiceDigit = nextDigit * 2;

      // add the sum of twiceDigit's digits to s2
      s2 += (twiceDigit % 10) + Math.floor(twiceDigit / 10);
    }

    // toggle isOddDigit flag
    isOddDigit = !isOddDigit;
  }

  // if s1 + s2 mod 10 is 0, the accountNumber is valid
  return (s1 + s2) % 10 === 0;
}
