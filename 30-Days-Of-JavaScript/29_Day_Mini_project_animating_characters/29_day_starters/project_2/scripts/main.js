const fonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Verdana, sans-serif',
  'Tahoma, sans-serif',
  'Trebuchet MS, sans-serif',
  'Gill Sans, sans-serif',
  'Open Sans, sans-serif',
  'Roboto, sans-serif',
  'Montserrat, sans-serif',
  'Futura, sans-serif'
];

const getRandomFont = () => {
  return fonts[Math.floor(Math.random() * fonts.length)];
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const h1Tag = `30 Days Of JavaScript Challenges 2020 Nguyen Anh`;
const div = document.querySelector("div");

setInterval(() => {
  div.innerHTML = "";
  for(let i = 0; i < h1Tag.length; i++) {
    const span = document.createElement("span");
    span.textContent = h1Tag[i];
    span.style.color = getRandomColor();
    div.appendChild(span);
  }
  div.style.backgroundColor = getRandomColor();
  div.style.fontFamily = getRandomFont();
}, 2000);