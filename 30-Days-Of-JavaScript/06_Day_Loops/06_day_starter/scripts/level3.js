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
let newCountry = countries.slice();
let arrNew = [];
for (const country of newCountry) {
  arrNew.push(country);
}
console.log(arrNew);

// 2
let sortedCountries = [];
for (const country of arrNew) {
  sortedCountries.push(country);
}
sortedCountries.sort();
console.log(sortedCountries);

// 3
let sortMern = [];
let sortWT = [];
for (const i of mernStack) {
  sortMern.push(i);
}

for (const i of webTechs) {
  sortWT.push(i);
}

sortMern.sort();
sortWT.sort();
console.log(sortMern);
console.log(sortWT);

// 4
let arrLand = [];
for (const i of countries) {
  if(i.includes('land')) {
    arrLand.push(i);
  }
}
console.log(arrLand);

// 5
let mxmW = '';
for (const i of countries) {
  mxmW.length < i.length ? (mxmW = i) : (true);
}

console.log(mxmW);

// 6 = 4
// 7
let arrFourChar = [];
for (const i of countries) {
  if(i.length == 4) {
    arrFourChar.push(i);
  }
}
console.log(arrFourChar);

// 8
let arr_8 = [];
for (const i of countries) {
  let arr = i.split(' ');
  if(arr.length <= 2) {
    arr_8.push(i);
  }
}
console.log(arr_8);

// 9
let upperArr = [];
for (const i of countries) {
  upperArr.unshift(i.toUpperCase());
}
console.log(upperArr);