const arrMonth31 = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
const arrMonth30 = ['April', 'June', 'September', 'November'];
// 1
// let month = (prompt('Enter a month:'));
// let conv = month[0].toUpperCase() + month.slice(1).toLowerCase();

// if(arrMonth31.includes(conv)) {
//   alert(`${conv} 12has 31 days.`);
// } else if(conv == 'February') {
//   alert(`${conv} has 28 days.`);
// } else if(arrMonth30.includes(conv)) {
//   alert(`${conv} has 30 days.`);
// } else {
//   alert(`${conv} is not a month.`);
// }

// 2
// let month = (prompt('Enter a month:'));
// let year = parseInt(prompt('Enter a year:'));
// let conv = month[0].toUpperCase() + month.slice(1).toLowerCase();

// if(arrMonth31.includes(conv)) {
//   alert(`${conv} 12has 31 days.`);
// } else if(conv == 'February') {
//   if(year % 400 == 0 || (year % 4 == 0 || year % 100 != 0)) {
//     alert(`${conv} has 29 days because ${year} is a leap year.`);
//   } else {
//     alert(`${conv} has 28 days because ${year} is not a leap year..`);
//   }
// } else if(arrMonth30.includes(conv)) {
//   alert(`${conv} has 30 days.`);
// } else {
//   alert(`${conv} is not a month.`);
// }