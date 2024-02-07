let x = 10;
let y = 5;
let z=null;

//comparison operator

console.log(x > y);

console.log(x < y);

console.log(x <= y);

console.log(x >= y);

console.log(x == y);

console.log(x != y);

console.log(x === y);

console.log(x !== y);

console.log(NaN == NaN);


//Null Collasing Operator
console.log(z ??= y)

//Logical Operator
//? AND, OR, NOT

//* AND &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

//* OR ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

//* NOT !
console.log(!true); // false
console.log(!false); // true



//Precendence in operators

// const x = (2 + 10) / 2;
// console.log(x);
// const y = 10 - x > 10;
// console.log(y);
// let x, y;
// console.log(x, y);
// x = y = 10 + 5 - 3 * 4;
// console.log(x, y);


//Contraction in operators / short hand operators

x += 7;
x -= 2;
x *= 3;
x /= 2;

x++;
x++;

x--;
x--;

y = ++x;
y = x++;

console.log(x);
console.log(y);


//Ternary Operator

const money = 50;
const cost = 100;
money >= cost
  ? console.log('You can buy it.')
  : console.log('You can not buy it.');

const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.';
console.log(canYouBuyIt);

let canYouBuyIt1;
if (money >= cost) {
  canYouBuyIt1 = 'You can buy it.';
} else {
  canYouBuyIt1 = 'You can not buy it.';
}

console.log(canYouBuyIt1);

console.log(`You can${money >= cost ? ' ' : ' not '}buy it.`);

//Bitwise Operator

//AND
let result = 5 & 3; // 0101 & 0011 = 0001
console.log(result);

//OR
 result = 5 | 3; // 0101 | 0011 = 0111
console.log(result); // Output: 7

//XOR
result = 5 ^ 3; // 0101 ^ 0011 = 0110
console.log(result); // Output: 6

//NOT
result = 5 ^ 3; // 0101 ^ 0011 = 0110
console.log(result); // Output: 6

//Leftshift
 result = 5 << 1; // 0101 << 1 = 1010
console.log(result); // Output: 10


//Right Shift
result = 5 >> 1; // 0101 >> 1 = 0010
console.log(result); // Output: 2

//Zero fill right shift
 result = -5 >>> 1; // 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101
console.log(result); // Output: 2147483645


