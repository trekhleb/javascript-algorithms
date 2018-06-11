// Liu Hui began with an inscribed hexagon.
// Let r is the radius of circle.
// r is also the side length of the inscribed hexagon
const c = 6;
const r = 0.5;

const getSideLength = (sideLength, count) => {
  if (count <= 0) return sideLength;
  const m = sideLength / 2;

  // Liu Hui used the Gou Gu theorem repetitively.
  const g = Math.sqrt((r ** 2) - (m ** 2));
  const j = r - g;
  return getSideLength(Math.sqrt((j ** 2) + (m ** 2)), count - 1);
};

const getSideCount = splitCount => c * (splitCount ? 2 ** splitCount : 1);

/**
 * Calculate the π value using Liu Hui's π algorithm
 *
 * Liu Hui argued:
 * Multiply one side of a hexagon by the radius (of its circumcircle),
 * then multiply this by three, to yield the area of a dodecagon; if we
 * cut a hexagon into a dodecagon, multiply its side by its radius, then
 * again multiply by six, we get the area of a 24-gon; the finer we cut,
 * the smaller the loss with respect to the area of circle, thus with
 * further cut after cut, the area of the resulting polygon will coincide
 * and become one with the circle; there will be no loss
 * @param {Number} splitCount repeat times
 * @return {Number}
 */
const pi = (splitCount = 1) => {
  const sideLength = getSideLength(r, splitCount - 1);
  const sideCount = getSideCount(splitCount - 1);
  const p = sideLength * sideCount;
  const area = (p / 2) * r;
  return area / (r ** 2);
};

// !test
// for (let i = 1; i < 26; i += 1) {
//   const p = pi(i);
//   console.log(
//     'split count: %f, side count: %f, π: %f, is Math.PI? %o',
//     i,
//     getSideCount(i),
//     p,
//     p === Math.PI,
//   );
// }

export default pi;
