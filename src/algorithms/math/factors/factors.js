/**
 * 
 * Finds the factor of a number.
 *
 */

const prompt = require('prompt-sync')({ sigint: true });

export default function printFactors(x) {
  console.log('The factors of', x, 'are:');

  //  looping 
  for (var i = 1, _pj_a = x + 1; i < _pj_a; i += 1) {
    if (x % i === 0) {
      console.log(i);
    }
  }
}
//  get the input from the user
const number = prompt("Enter an positive integer: ");

printFactors(number);
