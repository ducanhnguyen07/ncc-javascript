const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const body = document.querySelector('body');
if(body) {
  body.style.textAlign = 'center';
}

const h2Tag = document.querySelector('h2');
if(h2Tag) {
  h2Tag.style.fontWeight = 'lighter';
  h2Tag.style.textDecoration = 'underline';
}

const h3Tag = document.querySelector('h3');
if(h3Tag) {
  h3Tag.style.fontWeight = 'lighter';
  h3Tag.style.textDecoration = 'underline';
}

const wrapper = document.querySelector('.wrapper');

// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div
const container = document.createElement('div');
container.className = 'container';
for(let i = 0; i <= 101; i++) {
  const div = document.createElement('div');
  div.className = 'number';
  div.textContent = i;
  if(isPrime(i)) {
    div.style.backgroundColor = '#FD5E53';
  } else if(i % 2 == 0) {
    div.style.backgroundColor = '#21BF73';
  } else {
    div.style.backgroundColor = '#FDDB3A';
  }
  div.style.display = 'inline-block';
  div.style.width = '95px';
  div.style.height = '50px';
  div.style.margin = '5px';
  div.style.color = 'white';
  div.style.lineHeight = '30px';
  div.style.fontSize = '30px';

  container.appendChild(div);
  
  if ((i + 1) % 6 === 0) {
    const br = document.createElement('br');
    container.appendChild(br);
  }
  
}
if(wrapper) {
  wrapper.appendChild(container);
}


