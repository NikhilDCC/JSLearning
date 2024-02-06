let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = "Hey there!";

// Concatanation

result = firstName + space + lastName;
console.log(result);

result = greeting + space + 'My name is' + space + firstName 
+ ' ' + lastName + ". I'm " + age + " years old.";
console.log(result);

//Escaping

result = 'I\'m 25 years old';
console.log(result);

result = "I like \"Star wars\" movie";
console.log(result);


// Properties and methods

result = 'Hello! '.length;
console.log(result);
result = firstName.length;
console.log(result);

// concat()

result = firstName.concat(' ', lastName);
console.log(result);

result = greeting.concat(space, 'My name is ', firstName, space, lastName);
console.log(result);

// toUpperCase()
result = result.toUpperCase();
console.log(result);
result = result.toLowerCase();
console.log(result);

// index
result = firstName[1];
console.log(result);
result = 'Hello'.indexOf('l');
console.log(result);
result = 'Hello lol'.lastIndexOf('l');
console.log(result);
result = firstName.indexOf('a');
console.log(result);
result = 'Hello lol'.indexOf('lo');
console.log(result);
result = firstName.indexOf('b');
console.log(result);


// charAt()
result = firstName.charAt(1);
console.log(result);

const longString = 'Hi, I\'m a long string';

result = longString.charAt(longString.length - 1);
console.log(result);

let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char);

let letter = text.at(2);
let letter1 = text.at(-2);
console.log(letter);
console.log(letter1);


// substring()
result = greeting.substring(4,9);
console.log(result);

// slice()
result = greeting.slice(4,9);
console.log(result);
result = greeting.slice(-6);
console.log(result);

// split()
result = longString.split(' ');
console.log(result);
const colors = 'red, orange, green, blue';
result = colors.split(',');
console.log(result);

//substr()
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
let part1 = str.substr(7, 6);
let part2 = str.substr(-4);

console.log(part);
console.log(part1);
console.log(part2);

//trim()
let text1 = "      Hello World!      ";
let res2 = text1.trim();
let res3 = text1.trimStart();
let res4 = text1.trimEnd();

console.log(res2);
console.log(res3);
console.log(res4);

//padStart()
let text2 = "5";
let padded = text2.padStart(4,"0");
let numb = 5;
let text3 = numb.toString();
let paddednum = text3.padStart(4,"0");

console.log(padded);
console.log(paddednum);

//padEnd()
let text4 = "5";
let paddedend = text4.padEnd(4,"x");

console.log(paddedend);


//repeat()
let text5 = "Hello world!";
let result1 = text5.repeat(2);

console.log(result1);

//replace()
result = colors.replace('blue', 
'yellow');
console.log(result);


//replaceall
text = colors.replaceAll("red","dogs");
console.log(text);

// includes()
result = colors.includes('indigo');
console.log(result);