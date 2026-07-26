import Sort from '../Sort';

export default class CycleSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];
    const length = array.length;

    for (let cycleStart = 0; cycleStart < length - 1; cycleStart += 1) {
      let item = array[cycleStart];
      let position = cycleStart;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[cycleStart]);

      // Find correct position for the current item.
      for (let i = cycleStart + 1; i < length; i += 1) {
        this.callbacks.visitingCallback(array[i]);

        if (this.comparator.lessThan(array[i], item)) {
          position += 1;
        }
      }

      // If item is already in correct position.
      if (position === cycleStart) {
        continue;
      }

      // Skip duplicates.
      while (
        position < length &&
        this.comparator.equal(item, array[position])
      ) {
        position += 1;
      }

      // Swap.
      if (position !== cycleStart) {
        [array[position], item] = [item, array[position]];
      }

      // Rotate the rest of the cycle.
      while (position !== cycleStart) {
        position = cycleStart;

        for (let i = cycleStart + 1; i < length; i += 1) {
          this.callbacks.visitingCallback(array[i]);

          if (this.comparator.lessThan(array[i], item)) {
            position += 1;
          }
        }

        while (
          position < length &&
          this.comparator.equal(item, array[position])
        ) {
          position += 1;
        }

        if (!this.comparator.equal(item, array[position])) {
          [array[position], item] = [item, array[position]];
        }
      }
    }

    return array;
  }
}
