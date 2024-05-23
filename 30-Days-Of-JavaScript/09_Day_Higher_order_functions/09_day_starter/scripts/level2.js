// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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
const totalPrice = products.map(i => i.price).filter(i => parseFloat(i)).reduce((acc, cur) => acc + cur, 0);
console.log(totalPrice);

// 2
const sum = products.reduce((acc, cur) => {
  if(typeof cur.price == 'number')
    return acc + cur.price;
  return acc;  
}, 0);

console.log(sum);

// 3
const categorizeCountries = (cpat) => {
  return countries.filter(i => (i.name.includes(cpat)));
};

console.log(categorizeCountries('land'));
// 4
const letterCnt = () => {
  let res = [];
  for(let i=0; i<26; i++) {
    const letter = String.fromCharCode((i + 65));
    let obj = { letter: letter };
    obj.count = countries.map(i => i.name).reduce((acc, cur) => {
      if(cur.charAt(0) == letter)
        return acc + 1;
      return acc;
    }, 0);
    res.push(obj);
  }
  return res;
};

console.log(letterCnt());

// 5
const getFirstTenCountries = () => {
  return countries.slice(0, 10);
};

console.log(getFirstTenCountries());

// 6
const getLastTenCountries = () => {
  return countries.slice(countries.length - 10, countries.length);
};

// 7
for(let i=0; i<26; i++) {
  const letter = String.fromCharCode(i + 65);
  const cnt = countries.map(i => i.name).reduce((acc, cur) => {
    if(cur.charAt(0) == letter)
      return acc + 1;
    return acc;
  }, 0);
  if(cnt > 1) 
    console.log(letter);
}

