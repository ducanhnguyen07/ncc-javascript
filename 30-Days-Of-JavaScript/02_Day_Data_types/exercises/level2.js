// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3
console.log(typeof '10' === typeof 10);
console.log(typeof parseInt('10') === typeof 10);

// 4
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);

// 5
let s1 = "python";
let s2 = "jargon";
console.log(s1.includes('on') && s2.includes('on'));

// 6
s1 = "I hope this course is not full of jargon";
console.log(s1.includes("jargon"));

// 7
console.log(Math.floor(Math.random() * 101));
// 8
console.log(Math.floor(Math.random() * 51 + 50));

// 9
console.log(Math.floor(Math.random() * 256));

// 10
s1 = "JavaScript";
const rd = Math.floor(Math.random() * s1.length);
console.log(s1.charAt(rd));

// 11
s = ""
for(let i=1; i<=5; i++) {
  for(let j=1; j<=5; j++) {
    if(j == 1) {
      s += i.toString() + ' ';
    } else if(j == 2) {
      s += '1' + ' ';
    } else {
      let p = 1;
      p *= (i ** (j-2));
      s += p.toString() + ' ';
    }
  }
  s += '\n';
}
console.log(s);

// 12
s1 = "You cannot end a sentence with because because because is a conjunction";
let sub = "because";
let st = s1.indexOf(sub);
let fi = s1.lastIndexOf(sub);
console.log(s1.substring(0, st - 1) + s1.substring(fi + sub.length));