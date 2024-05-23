// LEVEL 1
// 1
const newSet = new Set();
// 2
for(let i=0; i<10; i++) {
  newSet.add(i);
}

console.log(newSet);

// 3
newSet.delete(3);
console.log(newSet)

// 4
newSet.clear();
console.log(newSet)

// 5
let arr = ['1', '1', '2', '2', '3'];
let nSet = new Set(arr);
console.log(nSet);

// 6
const map = new Map();
for (const i of countries) {
  map.set(i.name, i.name.length);
}

console.log(map)

const a = new Set([4, 5, 8, 9])
const b = new Set([3, 4, 5, 7])
// Find a union b
a.forEach((value) => {
  b.add(value)
})
console.log(b)
// Find a intersection b
a.forEach((value) => {
  if (!b.has(value)) {
    b.delete(value)
  }
})
// Find a with b
a.forEach((value) => {
  if (!b.has(value)) {
    a.delete(value)
  }
})

// LEVEL 3
// 1
console.log(countries.length)

// 2
const langArr = countries.map(i => (i.languages)).flat();

const langMap = new Map();
langArr.forEach((value) => {
  if(!langMap.has(value)){
    langMap.set(value, 1);
  } else {
    langMap.set(value, langMap.get(value) + 1);
  }
});

const res = [...langMap.entries()].sort((a, b) => b[1] - a[1]);

console.log(res.slice(0, 10));
