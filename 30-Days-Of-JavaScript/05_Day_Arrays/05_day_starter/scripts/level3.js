import { countries } from "../data/countries.js";

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let minAge = ages[0];
let maxAge = ages[ages.length - 1];

let mid = ages.length / 2;
if(ages.length % 2) {
  console.log(ages[parseInt(mid)]);
} else {
  console.log(ages[parseInt(mid) - 1] + ' ' + ages[parseInt(mid) + 1]);
}

let avgAge = 0;
ages.forEach(age => {
  avgAge += age;
});
avgAge /= ages.length;
console.log(`Average of ages: ${avgAge}`);

console.log(`the range of the ages: ${maxAge - minAge}`);

if(Math.abs(minAge - avgAge) > Math.abs(maxAge - avgAge)) {
  console.log(1);
} else {
  console.log(0);
}
console.log("-------------------------------");

// 2
console.log(countries.slice(0, 10));
mid = countries.length / 2;
if(countries.length % 2) {
  console.log(countries[parseInt(mid)]);
} else {
  console.log(countries[parseInt(mid) - 1] + ' ' + countries[parseInt(mid) + 1]);
}

// 3
let countries1 = [];
let countries2 = [];
if(countries.length % 2) {
  countries1 = countries.slice(0, mid + 1);
  countries2 = countries.slice(mid + 1);
} else {
  countries1 = countries.slice(0, mid);
  countries2 = countries.slice(mid);
}
console.log(countries1);
console.log(countries2);