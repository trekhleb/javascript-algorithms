/**
 * @param {string} string
 * @return {boolean}
 */

export default function palindromeCheck(string) {
	let left = 0;
	let right = string.length-1;
	while (left < right) {
		if (string[left] != string[right]) return false;
		left++;
		right--;
	}
	return true;
}