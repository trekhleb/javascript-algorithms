//Numeric anagrams detector

function sameFrequency(strA, strB) {

//convert the array, into a string
    var str1 = strA.toString()
      , str2 = strB.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    var freqCounter1 = {}
      , freqCounter2 = {};


    for (let val of str1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of str2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) {
            return false;
        }

        if (freqCounter2[key] !== freqCounter1[key]) {
            return false;
        }
    }
    return true;
}

sameFrequency(552181, 152581);
