// 1
const challenge = '30 Days Of JavaScript';
// 2
console.log(challenge);
// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());
// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(0, 2));

// 7
console.log(challenge.substring(3));
// 8
console.log(challenge.includes("Script"));

// 9
console.log(challenge.split());
// 10 
console.log(challenge.split(" "));

// 11
let newStr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(newStr.split(','));

// 12
console.log(challenge.replace("JavaScript", "Python"));

// 13
console.log(challenge.charAt(15));

// 14
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15
console.log(challenge.indexOf('a'));
// 16
console.log(challenge.lastIndexOf('a'));

// 17
newStr = "You cannot end a sentence with because because because is a conjunction";
console.log(newStr.indexOf("because"));

// 18
console.log(newStr.lastIndexOf("because"));

// 19
console.log(newStr.search('because'));

// 20
newStr = " 30 Days Of JavaScript ";
console.log(`-${newStr.trim()}-`);

// 21
console.log(challenge.startsWith("30"));

// 22
console.log(challenge.endsWith("Script"));
// 23
const pattern = /a/gi;
console.log(challenge.match(pattern));

// 24
let str1 = "30 Days of";
let str2 = "JavaScript";
console.log(str1.concat(" ").concat(str2));
// 25
console.log(challenge.repeat(2));