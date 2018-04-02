// Calculate fibonacci number at specific position using Dynamic Programming approach.
export default function fibonacci(numberPosition) {
  if (numberPosition === 1) {
    return 1;
  }

  let iterationsCounter = numberPosition - 1;

  // Calculated fibonacci number.
  let fib = null;
  // Previous fibonacci number.
  let fibPrev = 1;
  // Before previous fibonacci number.
  let fibPrevPrev = 0;

  while (iterationsCounter) {
    // Calculate current value using two previous ones.
    fib = fibPrev + fibPrevPrev;
    // Shift previous values.
    fibPrevPrev = fibPrev;
    fibPrev = fib;
    iterationsCounter -= 1;
  }

  return fib;
}
