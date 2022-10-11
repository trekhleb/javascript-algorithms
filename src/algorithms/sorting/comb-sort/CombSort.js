import Sort from '../Sort';

export default class CombSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    let gap = array.length;
    const shrink = 1.3;
    let sorted = false;

    while (!sorted) {
      gap = gap / shrink;
      if (gap < 1) {
        gap = 1;
        sorted = true;
      }

      let i = 0;
      while (i + gap <= array.length) {
        if (array[i] > array[i + gap]) {
          [array[i], array[i + gap]] = [array[i + gap], array[i]];
          sorted = false;
        }
        i++;
      }
    }
    return array;
  }
}
