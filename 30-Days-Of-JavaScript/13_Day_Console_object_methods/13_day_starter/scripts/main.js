// LEVEL 1
console.table(countries)

console.table(countries[1])

const country = [];
for(let i=0; i<5; i++) {
  country.push(countries[i]);
}

console.group('Countries');
for (const item of country) {
  console.log(item);
}
console.groupEnd();

// LEVEL 2
console.assert(10 > 2*10, 'ten greater the double ten')
console.warn('risk info')
console.error('error')

// LEVEl 3

// while
console.time('Regular for loop while')
let i = 0;
let cnt = 0;
while(i < 10) {
  cnt++;
  i++;
}
console.timeEnd('Regular for loop while')

// for
console.time('Regular for loop for')
for(i=0; i<10; i++) {
  cnt++;
}
console.timeEnd('Regular for loop for')

// for of
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.time('Regular for loop for of')
for (const i of arr) {
  cnt++;
}
console.timeEnd('Regular for loop for of')

//for each
console.time('Regular for loop for each')
arr.forEach(element => {
  cnt++;
});
console.timeEnd('Regular for loop for each')