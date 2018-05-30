export default function (n) {
  // Keeps track of the # of valid solutions
  let count = 0;

  // Helps identify valid solutions
  const done = (2 ** n) - 1;

  // Checks all possible board configurations
  const innerRecurse = (ld, col, rd) => {
    // All columns are occupied,
    // so the solution must be complete
    if (col === done) {
      count += 1;
      return;
    }

    // Gets a bit sequence with "1"s
    // whereever there is an open "slot"
    let poss = ~(ld | rd | col);

    // Loops as long as there is a valid
    // place to put another queen.
    while (poss & done) {
      const bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
    }
  };

  innerRecurse(0, 0, 0);

  return count;
}
