const body = document.querySelector(".wrapper");
body.style.textAlign = "center";

// The year color is changing every 1 second
if (document.querySelector(".year")) {
  document.querySelector(".year").style.color = "red";
  document.querySelector(".year").style.fontSize = "4rem";
  document.querySelector(".year").style.textAlign = "center";
  document.querySelector("h1").style.textAlign = "center";
  setInterval(() => {
    // random color for year
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".year").style.color = `#${randomColor}`;
  }, 1000);
}

if (document.querySelector("h2")) {
  document.querySelector("h2").style.textAlign = "center";
  document.querySelector("h2").style.textDecoration = "underline";
  document.querySelector("h2").style.fontWeight = "lighter";
}
// The date and time background color is changing every on seconds
if (document.querySelector(".date")) {
  document.querySelector(".date").style.color = "blue";
  document.querySelector(".date").style.fontSize = "2rem";
  document.querySelector(".date").style.textAlign = "center";
  setInterval(() => {
    // random color for date
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".date").style.backgroundColor = `#${randomColor}`;
  }, 1000);
}

let getDate = () => {
  let d = new Date();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = d.getMonth();
  let year = d.getFullYear();
  let date = d.getDate();
  let hour = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();

  date = date < 10 ? "0" + date.toString() : date;
  hour = hour < 10 ? "0" + hour.toString() : hour;
  mins = mins < 10 ? "0" + mins.toString() : mins;
  secs = secs < 10 ? "0" + secs.toString() : secs;

  return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}:${secs}`;
};

let date = document.querySelector("p");

let updateDateTimeOnElement = () => {
  date.textContent = getDate();
  requestAnimationFrame(updateDateTimeOnElement);
};
updateDateTimeOnElement();

date.style.margin = "auto";
date.style.padding = "6px";
date.style.fontSize = "12px";
date.style.fontWeight = "400";
date.style.width = "15%";

setInterval(() => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  date.style.background = `#${randomColor}`;
}, 1000);

const ul = document.querySelector("ul");
if (ul) {
  ul.style.textAlign = "center";
  ul.style.left = "500px";
  for (let i = 0; i < ul.children.length; i++) {
    let li = ul.children[i];
    if (li.textContent.includes("Done")) {
      li.style.backgroundColor = "#5BBC7A";
    } else if (li.textContent.includes("Ongoing")) {
      li.style.backgroundColor = "#F7DC5C";
    } else if (li.textContent.includes("Coming")) {
      li.style.backgroundColor = "#EB695B";
    }
    li.style.listStyleType = "none";
    li.style.fontWeight = "350";
    li.style.padding = "8px";
    li.style.margin = "6px";
    li.style.textAlign = "center";
    li.style.width = "50%";
  }
}


