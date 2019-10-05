//program to check if two hard-coded strings are anagrams or not.

function isAnagram(str1, str2) {

//firstly, they need to be of the same length.
    if (str1.length !== str2.length) {
        return false;
    }

//frequency counters
    var frequencyCounter1 = {}
      , frequencyCounter2 = {};

//value of frequency counter being updated for every string character.
/*what this actually does is, it creates an object, in which the key value pairs are as follows -->

      key : value :: character : frequency

*/

//added, toLowerCase() method to make it case insensitive.
    for (let val of str1.toLowerCase()) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of str2.toLowerCase()) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        //checks if the particular key exists or not
        if (!(key in frequencyCounter2)) {
            return false;
        }

        //then checks, if for the particular keys of the two objects, the values are equal or not.
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//Remember Shutter Island :P
isAnagram("Rachel Solando", "Dolores Chanal");
