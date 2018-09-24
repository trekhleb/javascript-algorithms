/**
 * @param {number} maxNumber
 * @return {number[]}
 */
export default function linearPrimeSieve(maxNumber) {
	const primes =[];
	const leastPrimeFactor = new Array(maxNumber + 1).fill(0); // leastPrimeFactor[i] gives us the least prime factor of 'i'
	
	for(let i=2; i<=maxNumber; i++ ){
		if(!leastPrimeFactor[i]){ // leastPrimeFactor[i] = 0 means 'i' itself is its least prime factor, i.e 'i' is prime
			leastPrimeFactor[i] = i;
			primes.push(i);
		}
		
		/*
		 *  start setting leastPrimeFactor[] for numbers 'x', where x = p * i, p is x's least prime factor and p <= leastPrimeFactor[i]
		 *  x = p*i, this representation will be unique for any number, therefore leastPrimeFactor[x] will be set only once.
		 */
		for(let j=0; j<primes.length && primes[j]*i <=maxNumber && primes[j]<=leastPrimeFactor[i]; j++)
			leastPrimeFactor[primes[j]*i] = primes[j];
	}
	
	return primes;
}
