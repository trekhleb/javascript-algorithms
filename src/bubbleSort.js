// Optimized Bubble Sort in JavaScript

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped, array is sorted
    if (!swapped) break;
  }

  return arr;
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
console.log('Sorted:', bubbleSort(numbers)); // [1,2,5,5,6,9]
