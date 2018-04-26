/**
 * @param {*[]} originalArray
 * @return {*[]}
 */
export default function fisherYates(originalArray) {
  // Clone array from preventing original array from modification (for testing purpose).
  const array = originalArray.slice(0);

  if (array.length <= 1) {
    return array;
  }

  for (let i = (array.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tmp = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = tmp;
  }

  return array;
}
