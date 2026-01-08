import Sort from '../Sort';

export default class ShellSort extends Sort {
  sort(originalArray) {
    // Prevent original array from mutations.
    const array = [...originalArray];

    // Define a gap distance.
    let gap = Math.floor(array.length / 2);

    // Until gap is bigger then zero do elements comparisons and swaps.
    while (gap > 0) {
      // Go and compare all distant element pairs.
      for (let i = 0; i < (array.length - gap); i += 1) {
        let j = i;
        let gapShiftedIndex = i + gap;

        while (j >= 0) {
          // Call visiting callback.
          this.callbacks.visitingCallback(array[j]);

          // Compare and swap array elements if needed.
          if (this.comparator.lessThan(array[gapShiftedIndex], array[j])) {
            [array[j], array[gapShiftedIndex]] = [array[gapShiftedIndex], array[j]];
          }

          gapShiftedIndex = j;
          j -= gap;
        }
      }

      // Shrink the gap.
      gap = Math.floor(gap / 2);
    }

    // Return sorted copy of an original array.
    return array;
  }
}
