function* FibonacciGenerator(): Generator<number> {
	let preNum = 1;
	let curNum = 1;
	let placeHolder = 0;

	while (true) {
		yield curNum;
		placeHolder = curNum;
		curNum += preNum;
		preNum = placeHolder;
	}
}

function isPrime(num: number) {
	if ( num === 2 ) return true;
	if ( num % 2 === 0 ) return false;

	const conditionNumber = Math.sqrt( num );

	for (let i = 2; i <= conditionNumber; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}
function* PrimeGeneratorBottomUp(): Generator<number> {
	let primeNumber = 2;

	while (true) {
		if ( isPrime( primeNumber ) ) yield primeNumber;
		primeNumber++;
	}
}
function* PrimeGeneratorTopDown(maxInputNumber: number): Generator<number> {
	let primeNumber = maxInputNumber;

	while ( true ) {
		if ( isPrime( primeNumber ) ) yield primeNumber;
		primeNumber--;
	}
}

export {
	FibonacciGenerator,
	PrimeGeneratorBottomUp, PrimeGeneratorTopDown,
	isPrime
};
