// 1
let arr_test = [];

// 2
let arr = [1, 2, 3, 4, 5];

// 3
console.log(arr.length);

// 4
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr[parseInt(arr.length/2)]);

// 5
let mixedDataTypes = [];
mixedDataTypes.push(1);
mixedDataTypes.push('2');
mixedDataTypes.push([3, 4]);
mixedDataTypes.push({five: '5'});
mixedDataTypes.push([6, 7]);
mixedDataTypes.push('eight');
console.log(mixedDataTypes.length);

// 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);

console.log("----------------------------");
// 10
for (const item of itCompanies) {
  console.log(item);
}
console.log("----------------------------");

// 11
for (const item of itCompanies) {
  console.log(item.toUpperCase());
}
console.log("----------------------------");

// 12
let itCompanies1 = itCompanies.slice(0, itCompanies.length - 1);
console.log(itCompanies1.join(", ") + ' and ' + itCompanies[itCompanies.length-1] + ' are big IT companies.');

console.log("----------------------------");

// 13
let checkCompany = 'NCC';
if(itCompanies.includes(checkCompany)) {
  console.log(`${checkCompany} found!`);
} else {
  console.log(`${checkCompany} not found!`);
}

console.log("----------------------------");

// 14
let newCompanies = [];

for (const com of itCompanies) {
  console.log(com)
  let cnt = 0;
  for (const c of com) {
    if(c == 'o') {
      cnt++;
    }
  }
  if(cnt >= 2) {
    newCompanies.push(com);
  }
}
console.log(newCompanies);

console.log("----------------------------");

// 15
console.log(itCompanies.sort());
console.log("----------------------------");

// 16
console.log(itCompanies.reverse());
console.log("----------------------------");

// 17
itCompanies.sort();
console.log(itCompanies.slice(0, 3));
console.log("----------------------------");

// 18
console.log(itCompanies.slice(itCompanies.length - 3));
console.log("----------------------------");

// 19
let mid = parseInt(itCompanies.length/2);
if(itCompanies.length % 2 == 0) {
  console.log(itCompanies.slice(mid-1, mid+1));
}
else {
  console.log(itCompanies[mid]);
}
console.log("----------------------------");

// 20
itCompanies.shift();
console.log(itCompanies);
console.log("----------------------------");

// 21
itCompanies.pop();
console.log(itCompanies);
console.log("----------------------------");

// 22
itCompanies = itCompanies.splice();
console.log(itCompanies);
console.log("----------------------------");

