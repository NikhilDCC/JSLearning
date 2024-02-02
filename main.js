
// program to find the factorial of a number
//default value is 0 if no value is provided via the function call

function findFactorial(number=0){
if (number < 0) {
    console.log(' Factorial for negative number does not exist! ');
    return;
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
}

findFactorial(0);


// Check prime number 

function isPrime(number) {
    if (number <= 1) {
        return false;  // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;  // If number is divisible by any i, it's not prime
        }
    }

    return true;  // If no divisors found, it's a prime number
}

const numToCheck = 17;
if (isPrime(numToCheck)) {
    console.log(`${numToCheck} is a prime number.`);
} else {
    console.log(`${numToCheck} is not a prime number.`);
}



// program to generate fibonacci series up to n terms

const number = 8;
let current = 0, next = 1, temp;

console.log('Fibonacci Series:');
console.log(current);  // Initial term

for (let i = 1; i < number; i++) {
    console.log(next);
    temp = current + next;
    current = next;
    next = temp;
}
