// 1
/*
let b =  parseFloat(prompt('Enter base:'));
let h =  parseFloat(prompt('Enter height:'));
alert(`The area of the triangle is: ${0.5 * b * h}`);
*/
// 2
/*
let a =  parseFloat(prompt('Enter side a:'));
let b =  parseFloat(prompt('Enter side b:'));
let c =  parseFloat(prompt('Enter side c:'));
alert(`The perimeter of the triangle is: ${a + b + c}`);
*/

// 3
/*
let w =  parseFloat(prompt('Enter width:'));
let l =  parseFloat(prompt('Enter length:'));
alert(`The area of the rectangle is: ${l * w} and the perimeter of the rectangle is: ${2*(l + w)}`);
*/

// 4
/*
const PI = 3.14;
let r =  parseFloat(prompt('Enter radius:'));
alert(`The area of the circle is: ${PI * r * r} and the circumference of the rectangle is: ${2* PI * r}`);
*/

// 5
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x1 = 0;
let y1 = -2;
let x2 = 1;
let y2 = 0;
let slope1 = (y2 - y1) / (x2 - x1);
let x_intercept = -y1 / slope1;
let y_intercept = y1 - slope1 * x1;
console/console.log(`The slope is: ${slope1}, x-intercept is: ${x_intercept} and y-intercept is: ${y_intercept}`);

// 6
let slope2 = (2 - 10)/(2 - 6);
console.log(slope2);
// 7
console.log(slope1 === slope2);

// 8
console.log("--------------------");
for(let i=-3; i<=3; i++) {
  let y = i*i + 6*i + 9;
  if(y == 0) {
    console.log(`${i} make y = x^2 + 6x + 9 equal 0`);
  }
  
  console.log(y);
}
console.log("--------------------");

// 9
/*
let h =  parseFloat(prompt('Enter hours:'));
let r =  parseFloat(prompt('Enter rate per hour:'));
alert(`Your weekly earning is: ${h * r}`);
*/

// 10
let myName = "Anh";
myName.length > 7 ? console.log('long') : console.log('short');

// 11
let firstName = 'Asab';
let lastName = 'Yetayeh';
firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}
`) : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}
`);

// 12
let myAge = 20;
let yourAge = 20;

myAge >= yourAge ? (myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`My age is equal with yours.`)) : console.log(`You are ${yourAge - myAge} years older than me.`);

// 13
/*
let h = parseFloat(prompt('Enter birth year:'));
let time = new Date();
let age = time.getFullYear() - h;
age >= 18 ? alert(`You are ${age}. You are old enough to drive.`) : alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
*/

// 14
/*
let h = parseFloat(prompt('Enter number of yours you live:'));
const totalSecPerYear = 60 * 60 * 24 * 365;

alert(`You lived ${totalSecPerYear * h} seconds`);
*/

// 15
let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let hour = time.getHours();
let minute = time.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minute}`);

console.log(`${day}-${month}-${year} ${hour}:${minute}`);

console.log(`${day}/${month}/${year} ${hour}:${minute}`);

console.log(typeof minute);



