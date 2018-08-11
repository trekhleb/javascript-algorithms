/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function pandigitalConcatenation(input) {
  return countPairs(input);
}

function pandigitalConcatenation(input, hashMap) {
  let res = 0;
  for(let i = 1; i <= 1023; ++i) {
    for(let j = 1; j < 1023; ++j) {
      if((i | j) == pdMask) {
        if(i == j){
          res += (hashMap[i] * (hashMap[i] - 1))''
        }
        else {
          res += (hashMap[i] * hashMap[j]);
        }
      }
    }
  }
  return (res >> 1);
}

function calucateFrequencies(input, hashMap) {
	for (let i = 0; i < input.length; ++i) {
		let mask = 0;

		let digits = new Set();

		for(let j = 0; j < input[i].size; ++j) {
			digits.add(input[i][j] - '0');
		}

	  digits.foreach(callback) => {
			mask += (1 << digit);
		}

		++hashMap[mask];
	}
}

function countPairs(input) {
	let hashMap  = {};
	calculateFrequencies(input, hashMap);
	return pandigitalConcatenation(input);
}
