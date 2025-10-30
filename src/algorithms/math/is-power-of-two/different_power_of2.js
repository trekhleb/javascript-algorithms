
  // different power of 2 requiered so that the sum of different power of 2 equals to no..
export default function diffPowerOfTwo(number) {
  if (number < 1) {
    return 0;
  }
  var a=0;
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      a+=1;
    }
    a+=1;

    dividedNumber /= 2;
  }

  return a;
}
