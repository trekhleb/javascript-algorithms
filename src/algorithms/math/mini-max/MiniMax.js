
/**
 *
 * @param numbers - array of numbers
 * @return [number - Max, number - Min]
 */
export default function miniMaxSum(numbers) {
   if (!Array.isArray(numbers) || numbers.length === 0) {
     return [null, null];
   }
 
   let min = numbers[0];
   let max = numbers[0];
   let sum = numbers[0];
 
   for (let i = 1; i < numbers.length; i += 1) {
     sum += numbers[i];
 
     if (numbers[i] > max) {
       max = numbers[i];
     } else if (numbers[i] < min) {
       min = numbers[i];
     }
   }
 
   return [sum - max, sum - min];
 }