// 1
// const fullName = fullName => console.log(fullName);

// fullName("Nguyen Anh");

// 2
const fullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
}

console.log(fullName('Nguyen', 'Anh'));

// 3
const addNumbers = (a, b) => {
  return a + b;
};

console.log(addNumbers(2, 3));

// 4
const areaOfRectangle = (l, w) => {
  return l * w;
};

console.log(areaOfRectangle(3, 2));

// 5
const perimeterOfRectangle = (l, w) => {
  return 2*(l + w);
};

console.log(perimeterOfRectangle(3, 2));

// 6
const volumeOfRectPrism = (l, w, h) => {
  return l * w * h;
};

console.log(volumeOfRectPrism(3, 2, 5));

// 7
const areaOfCircle = (r, pi = 3.14) => {
  return pi * r * r;
};

console.log(areaOfCircle(2));

// 8
const circumference = (r, pi = 3.14) => {
  return pi * r * 2;
};

console.log(circumference(2));

// 9
const density = (mass, volume) => {
  return mass / volume;
};

console.log(density(10, 2));

// 10
const speed = (distance, time) => {
  return distance / time;
};

console.log(speed(10, 2));

// 11
const weight = (mass, gravity) => {
  return mass * gravity;
};

console.log(weight(5, 10));

// 12
const convertCelciusToFahrenheit = oC => {
  return (oC * 9/5) + 32;
};

console.log(convertCelciusToFahrenheit(100));

// 13
const bmi = (weight, height) => {
  const idx = weight/(height * height);
  if(idx < 18.5) 
    return 'Underweight';
  else if (idx < 24.9) 
    return 'Normal weight';
  else if (idx < 29.9) 
    return 'Overweight';
  return 'Obese';
};

console.log(bmi(70, 1.65));

// 14
const checkSeason = (month) => {
  const convMonth = month[0].toString().toUpperCase() + month.slice(1).toLowerCase();
  const spring = ['January', 'February', 'March'];
  const summer = ['April', 'May', 'June'];
  const autumn = ['July', 'August', 'September'];
  const winter = ['October', 'November', 'December'];

  if(!spring.includes(convMonth) && !summer.includes(convMonth) && !autumn.includes(convMonth) && !winter.includes(convMonth))
    return 'Month invalid';

  if(spring.includes(convMonth))
    return 'Spring';
  else if(summer.includes(convMonth))
    return 'Summer';
  else if(autumn.includes(convMonth))
    return 'Autumn';
  return 'Winter';
};

console.log(checkSeason('january'));

// 15
const findMax = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(findMax(0, -10, -2));

// LEVEL 2

// 1
const solveLinEquation = (a, b, c, variable, value) => {
  if(variable === 'x') {
    if(b === 0) {
      return 'b cannot be 0';
    }
    return (-a * value - c)/b;
  }
  else if(variable === 'y') {
    if(a === 0) {
      return 'a cannot be 0';
    }
    return (-b * value - c)/a;
  }
  return 'Variable must be x or y';
}

console.log(solveLinEquation(2, 2, 2, 'x', 2));

// 2
const solveQuadratic = (...args) => {
  let variable = [];
  let a = 0;
  let b = 0;
  let c = 0;

  for (const element of args) {
    variable.push(element);
  }

  if(variable.length < 3)
    return 0;

  a = variable[0];
  b = variable[1];
  c = variable[2];

  if(a === 0) {
    return 'a cannot be 0.'
  }

  const delta = b*b - 4*a*c;
  if(delta < 0) {
    return 'Impossible equation';
  }
  if(delta === 0) {
    return -b/(2*a);
  }

  let arr_res = [];
  arr_res.push((-b + Math.sqrt(delta))/(2*a));
  arr_res.push((-b - Math.sqrt(delta))/(2*a));
  return arr_res;
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3
const printArray = arr =>  {
  for (const i of arr) {
    console.log(i);
  }
}

printArray([1, 2]);

// 4
const showDateTime = () => {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hour = time.getHours();
  const minute = time.getMinutes();
  
  let h = hour.toString();
  let m = minute.toString();
  let d = date.toString();
  let mo = month.toString();
  if(h.length == 1) {
    h = '0' + h;
  }
  if(m.length == 1) {
    m = '0' + m;
  }
  if(d.length == 1) {
    d = '0' + d;
  }
  if(mo.length == 1) {
    mo = '0' + mo;
  }

  console.log(`${d}/${mo}/${year} ${h}:${m}`);
};
showDateTime();

// 5
const swapValues = (obj) => {
  let t = obj.x;
  obj.x = obj.y;
  obj.y = t;
};

let obj = { x: 2, y: 3 };
swapValues(obj);
console.log(obj.x);
console.log(obj.y);

// 6
const reverseArray = (arr) => {
  let res = [];
  for (const i of arr) {
    res.unshift(i);
  }
  return res;
};

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// 7
const capitalizeArray = (arr) => {
  let res = [];
  for (const i of arr) {
    res.push(i.toUpperCase());
  }
  return res;
};

console.log(capitalizeArray(['aaa', 'bbb', 'ccc']));

// 8
const addItem = (arr, newItem) => {
  arr.push(newItem);
  return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(addItem(arr, '3'));

// 9
const removeItem = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
};
console.log(removeItem(arr, 2));

// 10
const sumOfNumbers = (num) => {
  return num * (num + 1) / 2;
};
console.log(sumOfNumbers(100));

// 11
const sumOfOdds = (num) => {
  if(num % 2 == 0) 
    num--;
  return ((num - 1) / 2 + 1) * (num + 1) / 2;
};
console.log(sumOfOdds(5));

// 12
const sumOfEven = (num) => {
  if(num % 2)
    num--;
  return ((num - 2) / 2 + 1) * (num + 2) / 2;
};
console.log(sumOfEven(5));

// 13
const evensAndOdds = (num) => {
  let odd = 0;
  let even = 0;

  if(num % 2) {
    odd = (num + 1) / 2;
  } else {
    odd = num / 2;
  }
  even = num + 1 - odd;
  
  console.log(`The number of odds are ${odd}.\nThe number of evens are ${even}.`)
};

evensAndOdds(100);

// 14
const sum = (...args) => {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  return sum;
};

console.log(sum(1, 2, 3, 4));

// 15
// 126.92.139.140
const randomUserIp = () => {
  let ip = '';
  for(let i=0; i<4; i++) {
    let num = Math.floor((Math.random() * 1) * 256);
    ip += num.toString() + '.';
  }
  return ip.slice(0, ip.length - 1);
};

console.log(randomUserIp());

// 16
// 53:27:6d:99:5e:f9
let char = '0123456789abcdef';

const randomMacAddress = () => {
  let mac = '';
  for(let i=0; i<6; i++) {
    let num = '';
    for(let j=0; j<2; j++){
      num += char.charAt(Math.floor((Math.random() * 1) * char.length));
    }
    mac += num.toString() + ':';
  }
  return mac.slice(0, mac.length - 1);
};

console.log(randomMacAddress());

// 17
const randomHexaNumberGenerator = () => {
  let hex = '#';
  for(let i=0; i<6; i++) {
    hex += char.charAt(Math.floor((Math.random() * 1) * char.length));
  }
  return hex;
};

console.log(randomHexaNumberGenerator());

// 18
char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const userIdGenerator = () => {
  let id = '';
  for(let i=0; i<7; i++) {
    id += char.charAt(Math.floor((Math.random() * 1) * char.length));
  }
  return id;
};

console.log(userIdGenerator());

// LEVEL 3

// 1
// const userIdGeneratedByUser = (numOfChar = prompt('numbers of character:'), numOfId = prompt('numbers of id:')) => {
//   let arr = [];
//   for(let i=0; i<numOfId; i++) {
//     let id = '';
//     for(let j=0; j<numOfChar; j++) {
//       id += char.charAt(Math.floor((Math.random() * 1) * char.length));
//     }
//     arr.push(id);
//   }
//   console.log(arr);
// }
// userIdGeneratedByUser();

// 2
const rgbColorGenerator = () => {
  let rgb = 'rgb(';
  let arr = [];
  for(let i=0; i<3; i++) {
    arr.push(Math.floor(Math.random() * 256));
  }
  rgb += arr.join(',') + ')';

  console.log(rgb);
};

rgbColorGenerator();

// 3
const arrayOfHexaColors = () => {
  let arr = [];
  let num = Math.floor(Math.random() * 1 + 10);
  for(let i=0; i<num; i++) {
    let hex = '#';
    for(let j=0; j<6; j++) {
      hex += char.charAt(Math.floor((Math.random() * 1) * char.length));
    }
    arr.push(hex);
  }
  return arr;
};

console.log(arrayOfHexaColors());
// 4
const arrayOfRgbColors = () => {
  let arr = [];
  let num = Math.floor(Math.random() * 1 + 10);
  for(let i=0; i<num; i++) {
    let rgb = 'rgb(';
    let temp = [];
    for(let j=0; j<3; j++) {
      temp.push(Math.floor(Math.random() * 256));
    }
    rgb += temp.join(',') + ')';
    arr.push(rgb);
  }
  return arr;
};
console.log(arrayOfRgbColors());

// 5
const convertHexaToRgb = (hex) => {
  let rgb = 'rgb(';
  let temp = [];
  for(let i=1; i<7; i+=2) {
    temp.push(parseInt(hex.slice(i, i+2), 16));
  }
  rgb += temp.join(',') + ')';
  return rgb;
};

console.log(convertHexaToRgb('#ef3456'));

// 6
const convertRgbToHexa = (rgb) => {
  let hex = '#';
  let temp = rgb.slice(4, rgb.length - 1).split(',');
  for (const i of temp) {
    hex += parseInt(i).toString(16);
  }
  return hex;
};
console.log(convertRgbToHexa('rgb(218,121,182'));

// 7
const generateColors = (typeColor, nums) => {
  let arr = [];
  if(typeColor == 'hexa') {
    for(let i=0; i<nums; i++) {
      let hex = '#';
      for(let j=0; j<6; j++) {
        hex += char.charAt(Math.floor((Math.random() * 1) * char.length));
      }
      arr.push(hex);
    }
  } else {
    for(let i=0; i<nums; i++) {
      let rgb = 'rgb(';
      let temp = [];
      for(let j=0; j<3; j++) {
        temp.push(Math.floor(Math.random() * 256));
      }
      rgb += temp.join(',') + ')';
      arr.push(rgb);
    }
  }

  return arr;
};

console.log(generateColors('hexa', 3))
console.log(generateColors('hexa', 1))
console.log(generateColors('rgb', 3))
console.log(generateColors('rgb', 1))

// 8
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) => {
  let res = [];
  let l = arr.length;

  for(let i=0; i<l; i++) {
    const idx = Math.floor(Math.random() * arr.length);

    res.push(arr[idx]);
    arr.splice(idx, 1);
  }

  return res;
};

console.log(shuffleArray([1, 2, 3, 4]));

// 9
const factorial = (num) => {
  let res = '';
  for(let i=2; i<=Math.sqrt(num); i++) {
    while(num % i == 0) {
      res += i.toString() + ' ';
      num /= i;
    }
  }
  if(num > 1) {
    res += num.toString() + ' ';
  }
  return res;
};

console.log(factorial(34));

// 10
const isEmpty = (data) => {
  if(data === undefined || data === null || data === '') 
    return 'Empty';
  return 'Not empty';
}; 
console.log(isEmpty());

// 11
const sum1 = (...args) => {
  let s = 0;
  for (const i of args) {
    s += i;
  }
  return s;
};

console.log(sum1(1, 2, 3));

// 12
const sumOfArrayItems = (arr) => {
  let s = 0;
  for (const i of arr) {
    if(typeof i !== 'number') {
      return 'Array contain element that not a number.'
    }

    s += i;
  }
  
  return s;
};

console.log(sumOfArrayItems([1, 2, '3']));

// 13
const average = (arr) => {
  let s = 0;
  for (const i of arr) {
    if(typeof i !== 'number') {
      return 'Array contain element that not a number.'
    }

    s += i;
  }
  
  return s/arr.length;
};

console.log(average([1, 2]));

// 14
const modifyArray = (arr) => {
  if(arr.length < 5) {
    return 'Not Found';
  }

  arr[4] = arr[4].toUpperCase();
  return arr;
};
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));

// 15
const isPrime = (n) => {
  for(let i=2; i<=Math.sqrt(n); i++) {
    if(n % i == 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(isPrime(5))

// 16
const checkUnique = (arr) => {
  let cmp = [];
  for (const i of arr) {
    if(!cmp.includes(i)) {
      cmp.push(i);
    }
  }
  return cmp.length == arr.length;
};

console.log(checkUnique([1, 1, 2]));

// 17
const checkDataType = (arr) => {
  let cmp = [];
  for (const i of arr) {
    if(!cmp.includes(typeof i)) {
      cmp.push(typeof i);
    }
  }
  return cmp.length == 1;
};

console.log(checkDataType([1, 1]));

// 18
// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable = (variable) => {
  if(variable.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
    return 'Valid';
  }
  return 'Invalid';
};

console.log(isValidVariable(".,./"));

// 19
const sevenRandomNumbers = () => {
  let res = [];
  for(let i=0; i<7; i++) {
    const n = Math.floor(Math.random() * 9);
    if(!res.includes(n)) {
      res.push(n);
    }
  }
  console.log(res);
};

sevenRandomNumbers();

// 20
const reverseCountries = () => {
  let res = [];
  for (const country of countries) {
    res.unshift(country);
  }
  console.log(res);
};
reverseCountries();