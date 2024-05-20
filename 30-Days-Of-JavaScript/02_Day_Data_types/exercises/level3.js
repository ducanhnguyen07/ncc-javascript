const countW = (string, pat) => {
  return(string.match(pat).length);
};

let fstr = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(countW(fstr, /love/gi));

// 2
fstr = "You cannot end a sentence with because because because is a conjunction";

console.log(countW(fstr, /because/gi));

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanText = (text) => {
  return text.replace(/[^\w\s]/gi, ' ');
};

let arr = cleanText(sentence).split(' ');
const map = new Map();
arr.forEach(item => {
  if(map.has(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
});

let maxFre = 0;
for(const val of map.values()) {
  maxFre = Math.max(val, maxFre);
}

console.log(maxFre);

// 4
const newStr = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
arr = cleanText(newStr).split(" ");

let totalIncome = 0;
arr.forEach(item => {
  if(!isNaN(item) && !isNaN(parseFloat(item))) {
    totalIncome += parseFloat(item);
  }
});

console.log(totalIncome);

