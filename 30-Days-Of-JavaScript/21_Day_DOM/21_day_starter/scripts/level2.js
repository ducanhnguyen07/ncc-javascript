// 1
const pList = document.querySelectorAll('p');

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
pList[0].style.color = 'red';
pList[1].style.background = 'yellow';
pList[2].style.border = '1px solid black';
pList[3].style.fontSize = '2rem';

// 2
for(let i=0; i<pList.length; i++) {
  if(i % 2 === 0) {
    pList[i].style.color = 'red';
  } else {
    pList[i].style.color = 'green';
  }
}

// 3
for(let i=0; i<pList.length; i++) {
  pList[i].setAttribute('id', `p${i+1}`);
  pList[i].setAttribute('class', `paragraph`);

  pList[i].textContent = `This is the ${i+1} paragraph`;
}