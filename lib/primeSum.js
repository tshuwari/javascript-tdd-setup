
'use strict'

module.exports = {
	isPrime: isPrime,
	sumOfPrimes: sumOfPrimes
}

  function isPrime(num){
	if (num === 2 || num === 3){
		return true;
	}
	else {
		for(var i = 2; i < num - 1; i++){
			if ( num % i === 0){
				return false;
			}
			
		}
				return 	true;
    }
  };

	function sumOfPrimes(num){
	var sum = 0;
	if (num < 2 || typeof (num) == "string"){
		return "Invalid input";
	}else{
	for (var j = 2; j <= num; j++){
		if (isPrime(j)){
			sum += j;
		}
	}
	}
	  return sum;
  }


