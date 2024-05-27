// 1
const p1 = document.querySelector('p');
console.log(p1);

// 2
console.log(document.querySelector('#p1'));

// 3
const pList = document.querySelectorAll('p');
console.log(pList);

// 4
for (const i of pList) {
  console.log(i.textContent);
}

// 5
pList[3].textContent = 'Fourth Paragraph';

// 6
// Set id and class attribute for all the paragraphs using different attribute setting methods
pList[0].setAttribute('id', 'first');
pList[1].setAttribute('class', 'second');
pList[2].setAttribute('id', 'third');
pList[3].setAttribute('class', 'fourth');

