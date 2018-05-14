import Stack from '../../../data-structures/stack/Stack';

/**
 * @param {Stack} fromPole
 * @param {Stack} toPole
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 */
function moveDisc(fromPole, toPole, moveCallback) {
  moveCallback(fromPole.peek(), fromPole.toArray(), toPole.toArray());

  const disc = fromPole.pop();
  toPole.push(disc);
}

/**
 * @param {number} numberOfDiscs
 * @param {Stack} fromPole
 * @param {Stack} withPole
 * @param {Stack} toPole
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 */
function hanoiTowerRecursive({
  numberOfDiscs,
  fromPole,
  withPole,
  toPole,
  moveCallback,
}) {
  if (numberOfDiscs === 1) {
    // Base case with just one disc.
    moveDisc(fromPole, toPole, moveCallback);
  } else {
    // In case if there are more discs then move them recursively.

    // Expose the bottom disc on fromPole stack.
    hanoiTowerRecursive({
      numberOfDiscs: numberOfDiscs - 1,
      fromPole,
      withPole: toPole,
      toPole: withPole,
      moveCallback,
    });

    // Move the disc that was exposed to its final destination.
    hanoiTowerRecursive({
      numberOfDiscs: 1,
      fromPole,
      withPole,
      toPole,
      moveCallback,
    });

    // Move temporary tower from auxiliary pole to its final destination.
    hanoiTowerRecursive({
      numberOfDiscs: numberOfDiscs - 1,
      fromPole: withPole,
      withPole: fromPole,
      toPole,
      moveCallback,
    });
  }
}

/**
 * @param {number} numberOfDiscs
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 */
export default function hanoiTower(numberOfDiscs, moveCallback) {
  // Each of three poles of Tower of Hanoi puzzle is represented as a stack
  // that might contain elements (discs). Each disc is represented as a number.
  // Larger discs have bigger number equivalent.

  // The pole from where the discs should be moved.
  const fromPole = new Stack();

  // The middle pole that should be used as a helper.
  const withPole = new Stack();

  // The destination pole where all discs need to be moved.
  const toPole = new Stack();

  // Let's create the discs and put them to the fromPole.
  for (let discSize = numberOfDiscs; discSize > 0; discSize -= 1) {
    fromPole.push(discSize);
  }

  hanoiTowerRecursive({
    numberOfDiscs,
    fromPole,
    withPole,
    toPole,
    moveCallback,
  });
}
