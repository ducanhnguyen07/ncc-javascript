// LEVEL 1
let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const cal = (text) => {
  const regxp = /\d+/g;
  const arr = text.match(regxp);
  return arr.reduce((acc, cur) => acc + parseInt(cur), 0);
};

console.log(cal(text));

// 2
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const calDistance = (arr) => {
  const sortedPoints = arr.map(p => (parseInt(p))).sort((a, b) => (a - b));
  return sortedPoints[arr.length - 1] - sortedPoints[0]; 
};

// 1
const is_valid_variable = (txt) => {
  const regxp = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  console.log(regxp.test(txt));
};

is_valid_variable('first_name') 
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable('firstname') 

// LEVEL 2
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const tenMostFrequentWords = (text, num) => {
  let res = [];

  const newTxt = text.replace(/\./g, ' ');
  const set = new Set(newTxt.split(' '));
  const map = new Map();

  set.forEach(val => {
    if(val.match(/[a-zA-Z0-9]/)) {
      const regex = new RegExp(`\\b${val}\\b`, 'g');
      const cnt = newTxt.match(regex).length;
      map.set(val, cnt);
    }
  });

  map.forEach((k, v) => {
    res.push({ word: v, count: k})
  });

  res.sort((a, b) => (b.count - a.count));

  return res.slice(0, num);
};

console.log(tenMostFrequentWords(paragraph, 10));

// LEVEL 3
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (text) => {
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
};

console.log(cleanText(sentence))

// 2
const cleanedText = cleanText(sentence);
const mostFrequentWords = (text) => {
  return tenMostFrequentWords(text, 3);
};
console.log(mostFrequentWords(cleanedText))

