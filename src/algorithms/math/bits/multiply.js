/**
 * @param {number, number} 
 * @return {number} 
 */
export default function multiply(number1, number2) {
  var c = 0, result = 0; 
  while(number2){
    if(number2&1)
        result += (number1 << c);
    c += 1;
    number2 >>= 1;
  }
  return result;
}
