const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// 1
// 2

// 3
countries.forEach(i => console.log(i))
// 4
names.forEach(i => console.log(i))
// 5
numbers.forEach(i => console.log(i))

// 6
const upC = countries.map(i => i.toUpperCase());
console.log(upC);

// 7
const upL = countries.map(i => i.length);
console.log(upL);
// 8
const square = numbers.map(i => i*i);
console.log(square);

// 9
const upN = names.map(i => i.toUpperCase());
console.log(upN);

// 10
const prices = products.map(i => i.price);
console.log(prices);

// 11
const landCountries = countries.filter(i => i.includes('land'));
console.log(landCountries);
// 12
const sixC = countries.filter(i => (i.length == 6))
console.log(sixC)

// 13
const sixCm = countries.filter(i => (i.length >= 6))
console.log(sixCm)

// 14
const eC = countries.filter(i => (i.charAt(0) == 'E'));
console.log(eC);

// 15
const oPrice = products.filter(i => (parseFloat(i.price)) >= 0);
console.log(oPrice);

// 16
const getStringLists = (arr) => {
  return arr.filter(i => (typeof i == 'string'));
};

console.log(getStringLists([1, 2, '3', 4, 'five']));

// 17
let arr = [1, 3, 5];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// 18
const strCountry = countries.reduce((acc, cur) => acc + ', ' + cur);
console.log(strCountry + ' are north European countries');

// 19
// 20
console.log(names.some(i => (i.length >= 7)));

// 21
console.log(countries.every(i => (i.includes('land'))));

// 22
// find return element
// findIndex return position

// 23
console.log(countries.find(i => (i.length == 6)));

// 24
console.log(countries.findIndex(i => (i.length == 6)));

// 25
console.log(countries.findIndex(i => (i === 'Norway')));

// 26
console.log(countries.findIndex(i => (i === 'Russia')));

