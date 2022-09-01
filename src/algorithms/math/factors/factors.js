/**
 * Finds the factor of a number.
 */

export default function printFactors(x) {
  console.log('The factors of', x, 'are:');
//  looping 
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      console.log(i);
    }
  }
}

//  get the input from the user
const num = prompt("Enter a positive integer: ");
printFactors(num);
