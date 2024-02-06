
//String reverse

function reverseString(str) {
    return str.split('').reverse().join('');
}
const originalString = "Reverse";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);



//Palindrome 

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
const testString = "level";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString));




//Number or count of substring occurence

function countOccurrences(str, substr) {
    return str.split(substr).length - 1;
}

const mainString = "hello world hello hello";
const subString = "hello";
console.log(`"${subString}" occurs ${countOccurrences(mainString, subString)} times in "${mainString}"`);



//Longest Substring without repeating characters

function longestSubstringWithoutRepeatingChars(str) {
    let longest = "";
    let current = "";

    for (let char of str) {
        const index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

longString = "abcabcbb";
console.log("Longest substring without repeating characters:", longestSubstringWithoutRepeatingChars(longString));


