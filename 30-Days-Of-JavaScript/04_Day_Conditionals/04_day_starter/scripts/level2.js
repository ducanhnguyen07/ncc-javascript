// 1
let score = 95;
if(score <= 49) {
  console.log('F');
} else if(score <= 59) {
  console.log('D');
} else if(score <= 69) {
  console.log('C');
} else if(score <= 89) {
  console.log('B');
} else {
  console.log('A');
}
console.log("------------------------------");

// 2
let month = "March";
let season = '';
if(month == 'September' || month == 'October' || month == 'November') {
  season = 'Autumn';
} else if(month == 'December' || month == 'January' || month == 'February') {
  season = 'Winter';
} else if(month == 'March' || month == 'April' || month == 'May') {
  season = 'Spring';
} else {
  season = 'Summer';
}

console.log(season);
console.log("------------------------------");

// 3
let workingDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
let weekend = ['saturday', 'sunday'];
let day = 'saturday';

let check = day.toLowerCase();
let conv = day[0].toString().toUpperCase() + day.slice(1).toLowerCase();

if(weekend.includes(check)) {
  console.log(`${conv} is a weekend.`);
} else {
  console.log(`${conv} is a working day.`);
}

console.log("------------------------------");
