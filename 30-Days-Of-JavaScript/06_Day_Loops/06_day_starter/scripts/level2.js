const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 1
let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = '';
for(i=0; i<Math.floor((Math.random() * 5) + 10); i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id);

// 2
characters = "0123456789abcdef";
let hex = '#';
for(i=0; i<Math.floor(Math.random() * 1 + 8); i++) {
  hex += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(hex);

// 3
let arr = [];
let rgb = "rgb(";
for(let i=0; i<3; i++) {
  arr.push(Math.floor(Math.random() * 256));
}
rgb += arr.join(',') + ')';
console.log(rgb);

// 4
let arr_countries = [];
for (let i=0; i<11; i++) {
  let arr = [];
  for (const country of countries) {
    if(country.charAt(0) == String.fromCharCode(i + 65)) {
      arr.push(country);
    } 
  }
  arr_countries.push(arr);
}

const newCountry = [];
let newCountryUp = [];
for (const countries of arr_countries) {
  newCountry.push(countries[Math.floor(Math.random() * countries.length)]);
}

for (const country of newCountry) {
  newCountryUp.push(country.toUpperCase());
}
console.log(newCountryUp);

// 5
let arrCountryLength = [];
for (const country of newCountry) {
  arrCountryLength.push(country.length);
}
console.log(arrCountryLength);

// 6
let arrCountryTuple = [];
for (const country of newCountry) {
  arrCountryTuple.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}
console.log(arrCountryTuple);

// 7
let arrLand = [];
for (const country of newCountry) {
  if(country.includes('land')) {
    arrLand.push(country);
  }
}
if(arrLand.length > 0)
  console.log(arrLand);
else
  console.log("All these countries are without land.");

// 8
let arrIa = [];
for (const country of newCountry) {
  if(country.includes('ia')) {
    arrIa.push(country);
  }
}
if(arrIa.length > 0)
  console.log(arrIa);
else
  console.log("These are countries ends without ia.");

// 9
let maxNumOfChar = '';
for (const country of newCountry) {
  maxNumOfChar.length < country.length ? (maxNumOfChar = country) : (maxNumOfChar = maxNumOfChar);
}
console.log(maxNumOfChar);

// 10
let arrFiveChar = [];
for (const country of newCountry) {
  if(country.length == 5)
    arrFiveChar.push(country);
}
console.log(arrFiveChar);

// 11
let longestWord = '';
for (const word of webTechs) {
  longestWord.length < word.length ? (longestWord = word) : (longestWord = longestWord);
}
console.log(longestWord);

// 12
let arrWT = [];
for (const word of webTechs) {
  arrWT.push([word, word.length]);
}
console.log(arrWT);

// 13
let mern = '';
for (const word of mernStack) {
  mern += word.charAt(0).toUpperCase();
}
console.log(mern);

// 14
let new_arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const teck of new_arr) {
  console.log(teck);
}

// 15
let fruit = ['banana', 'orange', 'mango', 'lemon'];
let revFruit = [];
for (const f of fruit) {
  revFruit.unshift(f);
}
console.log(revFruit);
// 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (const teck of fullStack) {
  for (const i of teck) {
    console.log(i);
  }
}
