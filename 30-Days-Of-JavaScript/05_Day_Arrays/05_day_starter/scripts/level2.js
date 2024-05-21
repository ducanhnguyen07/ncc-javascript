import { countries } from "../data/countries.js"
import { webTechs } from "../data/web_techs.js"
// 1
console.log(countries);
console.log(webTechs);

// 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// remove all the punctuations
let textArr = text.split(' ');
let newTextArr = [];
for(let i=0; i<textArr.length; i++) {
  let newText = textArr[i].replace(/[^a-zA-Z0-9]/g, '');
  newTextArr.push(newText);
}
console.log(newTextArr);
console.log(newTextArr.length);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if(!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

const teaIdx = shoppingCart.indexOf('Tea');
shoppingCart[teaIdx] = 'Green Tea';

console.log(shoppingCart)
console.log('-----------------------');

// 4
if(countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries.indexOf('Ethiopia'));
}
console.log('-----------------------');

// 5
if(webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}
console.log('-----------------------');

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)