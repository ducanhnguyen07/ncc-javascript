// 1
let firstName;
let lastName;
let country;
let city;
let age;
let isMarried;
let year;
let time = new Date();

firstName = "Nguyen";
lastName = "Anh";
country = "Vietnam";
city = "Hanoi";
age = 10;
isMarried = false;
year = time.getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof time);
console.log(typeof year);

// 2
console.log(typeof '10' === typeof 10);
// 3
console.log(parseInt('9.8') === 10);

// 4
console.log(1 < 2);
console.log(typeof '1' === typeof 'Hanoi');
console.log(1 < 2 && 1 + 1 == 2);

console.log(1 > 2);
console.log(typeof 1 !== 'number');
console.log(parseInt('10.8') !== 10);

console.log("-------------------------");
// 5
let check = 4 > 3; // true
console.log(check);
check = 4 >= 3; // true
console.log(check);
check = 4 < 3; // false
console.log(check);
check = 4 <= 3; // false
console.log(check);
check = 4 == 4; // true
console.log(check);
check = 4 === 4; // true
console.log(check);
check = 4 != 4; // false
console.log(check);
check = 4 !== 4; // false
console.log(check);
check = 4 != '4'; // false
console.log(check);
check = 4 == '4'; // true
console.log(check);
check = 4 === '4'; // false
console.log(check);
let s1 = "python";
let s2 = "jargon";
console.log(s1.length !== s2.length)

console.log("-------------------------");
// 6
check = 4 > 3 && 10 < 12 // true && true --> true
console.log(check);
check = 4 > 3 && 10 > 12 // true && false --> false
console.log(check);
check = 4 > 3 || 10 < 12 // true || true --> true
console.log(check);
check = 4 > 3 || 10 > 12 // true || false --> true
console.log(check);
check = !(4 > 3) // !true --> false
console.log(check);
check = !(4 < 3) // !fasle --> true
console.log(check);
check = !(false) // !fasle --> true
console.log(check);
check = !(4 > 3 && 10 < 12) // !(true && true) --> false
console.log(check);
check = !(4 > 3 && 10 > 12) // !(true && false) --> true
console.log(check);
check = !(4 === '4') // !false --> true
console.log(check);
// There is no 'on' in both dragon and python: false
console.log(!s1.includes('on') && !s2.includes('on'));

console.log("-------------------------");
// 7
time = new Date();
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDate()); // day in month
console.log(time.getDay()); // day in week
console.log(time.getHours());
console.log(time.getMinutes());
console.log(Date.now()); // the numbers of seconds elapsed from January 1, 1970 to now
