// https://projecteuler.net/problem=
import {
	FibonacciGenerator, isPrime, PrimeGeneratorBottomUp, PrimeGeneratorTopDown
} from './generator';

function problem1(input: number) {
	// Sum all multiplies of 3 or 5, which is smaller than input number
	let result = 0;
	for (let i = 1; i < input; i++) {
		if (i % 3 === 0 || i % 5 === 0) result += i;
	}

	console.log(result);
}

function problem2(input: number) {
	let result = 0;
	let preNum = 1;
	let curNum = 1;

	// const fibonacci = [ curNum ];

	while (curNum <= input) {
		if (curNum % 2 === 0) result += curNum;

		const tmpCurNum = curNum;

		curNum += preNum;
		preNum = tmpCurNum;
		// fibonacci.push( curNum );
	}

	console.log(result);
	// console.log( fibonacci );
}

function problem2_2(input: number) {
	const fibonacciGenerator = FibonacciGenerator();
	let curNum = 0;
	let result = 0;

	while (curNum <= input) {
		if (curNum % 2 === 0) result += curNum;
		curNum = fibonacciGenerator.next().value;
	}

	console.log(result);
}

function problem3_1(input: number) {
	// What is the largest prime factor of a number
	// Theory:
	// - factors: 2 * 3 = 6 => 2, 3 are factors of 6
	// - prime factors: 3, 5 is prime numbers and 3 * 5 = 15 => 3, 5 prime factors of 15
	const primeGeneratorTopDown = PrimeGeneratorTopDown(Math.floor(input / 2));

	let curPrimeNumber;

	do {
		curPrimeNumber = primeGeneratorTopDown.next().value;
		if (input % curPrimeNumber === 0) break;
	} while (curPrimeNumber > 2)

	return curPrimeNumber;
}

function problem3_2(input: number) {
	// What is the largest prime factor of a number
	// Theory:
	// - factors: 2 * 3 = 6 => 2, 3 are factors of 6
	// - prime factors: 3, 5 is prime numbers and 3 * 5 = 15 => 3, 5 prime factors of 15
	const primeGeneratorBottomUp = PrimeGeneratorBottomUp();
	const conditionNumber = Math.floor(input / 2);

	let curPrimeNumber;
	let result;

	do {
		curPrimeNumber = primeGeneratorBottomUp.next().value;
		if (input % curPrimeNumber === 0) result = curPrimeNumber;
	} while ( curPrimeNumber <= conditionNumber )

	return result;
}

function problem3_3(input: number) {
	// What is the largest prime factor of a number
	// Theory:
	// - factors: 2 * 3 = 6 => 2, 3 are factors of 6
	// - prime factors: 3, 5 is prime numbers and 3 * 5 = 15 => 3, 5 prime factors of 15
	const remainFactors = [];
	let conditionNumber = Math.floor(input / 2);

	if ( conditionNumber % 2 === 0 ) conditionNumber -= 1;

	for( let biggerFactor = conditionNumber; biggerFactor >= 2; biggerFactor -= 2) {
		if ( input % biggerFactor === 0 ) {
			if ( isPrime( biggerFactor ) ) return biggerFactor;
			remainFactors.push( input / biggerFactor );
		}
	}
	remainFactors.reverse().forEach( num => {
		if ( isPrime( num ) ) return num;
	} );
}

// problem1( 1000 )
// problem2(4 * 10 ** 6) // solution 1
// problem2_2(4 * 10 ** 6) // solution 2

// problem3_1 and problem2_2 is slower than 3_3
const startMs3 = new Date().getTime();
console.log(problem3_3( 600851475143 ));
console.log( `[3]Total performance in: ${new Date().getTime() - startMs3}ms` );
