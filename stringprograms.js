
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


//longestCommonSubstring in array of strings as input 

function longestCommonSubstring(strs) {
    if (!strs.length) return ''; // If the array is empty, return an empty string
    
    const shortestString = strs.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
    let longestSubstring = '';

    for (let i = 0; i < shortestString.length; i++) {
        for (let j = i + 1; j <= shortestString.length; j++) {
            const substring = shortestString.substring(i, j);

            // Check if the substring exists in all strings
            if (strs.every(str => str.includes(substring))) {
                if (substring.length > longestSubstring.length) {
                    longestSubstring = substring;
                }
            }
        }
    }

    return longestSubstring;
}


    let arr = ["Amazon", "AmazonHousing.com","AmazonMicrosoft","azonMorgan Stanley"];
    console.log(longestCommonSubstring(arr));
//or direct array passed as arg
    console.log(longestCommonSubstring(['google','amazon','jester']));



