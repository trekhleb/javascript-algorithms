/**
 * Return a tribonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function tribonacci(n) {
    const tribSequence = [0];
    let currentValue = 1;
  
    if(n >= 2) {
        tribSequence.push(currentValue);
    }
    
    for (let i = 2; i < n; i++) {
        tribSequence.push(currentValue);
        currentValue += tribSequence[i - 1] + tribSequence[i - 2];       
    }
  
    return tribSequence;
}
  