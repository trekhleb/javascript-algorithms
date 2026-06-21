//Program to check if the elements in the second array, are the squares of each and every element of the first array.
function areEqualNoOfSqs(arr1, arr2) {

//firstly, they need to be of the same length.

    if (arr1.length !== arr2.length) {
        return false;
    }

//frequency counters
    var freqCounter1 = {}
      , freqCounter2 = {};

//value of frequency counter being updated for every string character.
/*what this actually does is, it creates an object, in which the key value pairs are as follows -->

      key : value :: character : frequency

*/
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }

        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    return true;
}

areEqualNoOfSqs([2, 3, 4, 1, 2, 5], [25, 4, 9, 1, 4, 16]);
