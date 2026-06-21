//Problem : given an array of integers, return the maximum subarray sum of size k.

function maxSubArrSum(arr, size) {
    let s = 0;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        if (i >= size - 1) {
            if (s > max) {
                max = s;
            }
            s -= arr[i - (size-1)];
        }
        console.log(max);
    }

    return max;
}

let arr = [1, 5, 4, 8, 2, 3];

console.log(maxSubArrSum(arr, 3));
