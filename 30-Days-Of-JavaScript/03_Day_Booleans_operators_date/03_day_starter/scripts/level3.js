let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let hour = time.getHours();
let minute = time.getMinutes();

console.log(typeof minute);
let h = '';
let m = '';
if(hour < 10) {
  h = '0' + hour.toString();
} else {
  h = hour.toString();
}

if(m < 10) {
  m = '0' + minute.toString();
} else {
  m = minute.toString();
}

console.log(`${year}-${month}-${day} ${h}:${m}`);