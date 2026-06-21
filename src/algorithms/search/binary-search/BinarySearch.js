var myList = [1, 3, 5, 7, 9];

function binarySearch(myList, itemToFind) {
	var low = 0,
        high = myList.length - 1,
        mid,
        guessed;

	while(low <= high) {
	    mid = Math.floor((low + high) / 2),
	    guessed = myList[mid];

	    if(guessed === itemToFind) {
                console.log('Found item at index: ' + mid + ', value is ' + guessed);
		    return;
	    }
	    if(itemToFind < guessed) {
	        high = mid - 1;
            } else {
	        low = mid + 1;
	    }
        }

	return null;
}

binarySearch(myList, 3);
