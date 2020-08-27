export default {

  getPrimeFactors : (n) => {
    let factorsArray = []; // an array where all the prime factors will be stored

    //over here optimisation is made by running loop till sqrt(n) instead of n
    for (let i = 2 ; i <= Math.sqrt(n); i++){
      if(n % i === 0){  // if check to ensure i completely divides n
        let count = 0;  // This count keeps track of number of times i divides n
        while(n % i === 0){
          n = n/i;       // override the value of n
          count++;        // count value updated
        }
        factorsArray.push(i); // array gets populated
      }
    }
    if(n !== 1){ // finally we cannot push 1 to array since it cannot be a prime-factor
        factorsArray.push(n);
    }
  
    return factorsArray;
  },

  //returns accurate prime-factors count
  getPrimeFactorsCount : (factorsArray) => {
    return factorsArray.length;
  },
  
  
  //returns Hardy-Ramanujan Approximation of prime-factors count 
  hardyRamanujanApprox : (n) => {
    return Math.log(Math.log(n));
  },
  
  //returns %age of error in approximation using formula to that of accurate result. 
  errorPercent : (exactFactorCount,approximateFactorCount) => {
  let diff = exactFactorCount-approximateFactorCount > 0 ? exactFactorCount-approximateFactorCount: -(exactFactorCount-approximateFactorCount);
  return (diff/exactFactorCount * 100);
  }
  

}


