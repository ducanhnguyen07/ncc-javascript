const new_countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

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
for(let i=0; i<=10; i++) {
  console.log(i);
}

console.log("-------------------------------");

let i = 0;
while(i <= 10) {
  console.log(i);
  i++;
}

console.log("-------------------------------");

i = 0;
do {
  console.log(i);
  i++;
} while(i <= 10)
console.log("-------------------------------");

// 2
for(let i=10; i>=0; i--) {
  console.log(i);
}

console.log("-------------------------------");

i = 10;
while(i >= 0) {
  console.log(i);
  i--;
}

console.log("-------------------------------");

i = 10;
do {
  console.log(i);
  i--;
} while(i >= 0)
console.log("-------------------------------");

// 3
let n = 5;
for(let i=0; i<=n; i++) {
  console.log(i);
} 

// 4
let s = '';
for(let i=1; i<=7; i++) {
  for(let j=1; j<=i; j++) {
    s += '*';
  }
  s += '\n';
}
console.log(s);

// 5
for(let i=0; i<=10; i++) {
  console.log(`${i} * ${i} = ${i*i}`);
}
console.log("-------------------------------");
// 6
console.log('i'.padEnd(5) + 'i^2'.padEnd(5) + 'i^3'.padEnd(5));
for(let i=0; i<=10; i++) {
  console.log(`${i.toString().padEnd(4)} ${(i*i).toString().padEnd(4)} ${(i*i*i).toString().padEnd(4)} `);
}
console.log("-------------------------------");

// 7
for(let i=0; i<=100; i++) {
  if(!(i % 2)) {
    console.log(i);
  }
}
console.log("-------------------------------");

// 8
for(let i=0; i<=100; i++) {
  if(i % 2) {
    console.log(i);
  }
}
console.log("-------------------------------");

// 9
for(let i=0; i<=100; i++) {
  let fl = true;
  if(i < 2)
    continue;
  for(let j=2; j<=Math.sqrt(i); j++) {
    if(i % j == 0) {
      fl = false;
      break;
    }
  }
  if(fl) {
    console.log(i);
  }
}
console.log("-------------------------------");

// 10
let sum = 0;
for(let i=0; i<=100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11
sum = 0;
let sum2 = 0;
for(let i=0; i<=100; i++) {
  if(i % 2)
    sum2 += i;
  else 
    sum += i;
  
}
console.log(`The sum of all evens from 0 to 100 is ${sum}. And the sum of all odds from 0 to 100 is ${sum2}.`)

// 12
let arr = [sum, sum2];
console.log(arr);

// 13
arr = [];
for(i=0; i<5; i++) {
  arr.push(Math.ceil(Math.random() * 1000));
}

console.log(arr);
console.log("-------------------------------");

// 14
arr = [];
for(i=0; i<5; i++) {
  let x = Math.ceil(Math.random() * 1000);
  if(!arr.includes(x)) 
    arr.push(x);
}

console.log(arr);
console.log("-------------------------------");

// 15
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = '';
for(i=0; i<6; i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id);


