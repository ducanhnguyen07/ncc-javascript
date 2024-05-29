const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";

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

const ulLang = document.createElement("ul");
ulLang.style.listStyleType = "none";
ulLang.style.width = "80%";
ulLang.style.margin = "auto";

const challenges = asabenehChallenges2020;

const list = asabenehChallenges2020.challenges;
if (ulLang) {
  ulLang.style.left = "500px";
  for (let i = 0; i < list.length; i++) {
    let item = document.createElement("li");
    item.style.display = "flex";
    let titleSpan = document.createElement("span");
    let title = document.createTextNode(list[i].name);
    titleSpan.style.width = "50%";
    titleSpan.appendChild(title);

    let dropdown = document.createElement("details");
    let dropdownSpan = document.createElement("span");

    let summary = document.createElement("summary");
    summary.textContent = list[i].name.split(" ")[list[i].name.split(" ").length - 1];

    let topics = document.createElement("ul");

    list[i].topics.forEach((i) => {
      let item = document.createElement("li");
      item.textContent = i;

      topics.appendChild(item);

      // styling
      item.style.padding = "5px";
      item.style.width = "90%";
      item.style.marginTop = "3px";
      item.style.marginBottom = "3px";
    });
    // styling
    topics.style.listStyleType = "none";
    topics.style.width = "80%";
    topics.style.margin = "auto";

    dropdownSpan.appendChild(dropdown);

    dropdownSpan.style.width = "50%";
    // 3
    let status = document.createTextNode(list[i].status);
    let statusSpan = document.createElement("span");
    statusSpan.style.width = "10%";
    statusSpan.appendChild(status);

    // appends
    item.appendChild(titleSpan);
    dropdown.appendChild(summary);
    dropdown.appendChild(topics);
    item.appendChild(dropdownSpan);
    item.appendChild(statusSpan);

    // styling
    item.style.padding = "5px";
    item.style.width = "90%";
    item.style.marginTop = "5px";
    item.style.marginBottom = "5px";

    if (statusSpan.textContent.includes("Done")) {
      item.style.backgroundColor = "#5BBC7A";
    } else if (statusSpan.textContent.includes("Ongoing")) {
      item.style.backgroundColor = "#F7DC5C";
    } else if (statusSpan.textContent.includes("Coming")) {
      item.style.backgroundColor = "#EB695B";
    }

    ulLang.appendChild(item);
  }

  wrapper.appendChild(ulLang);
}

const author = asabenehChallenges2020.author;

const divEnd = document.createElement("div");
divEnd.style.width = "80%";
divEnd.style.margin = "auto";
divEnd.innerHTML = `<h3>${author.lastName} ${author.firstName}</h3>`;
divEnd.style.fontSize = "1.5rem";

wrapper.appendChild(divEnd);

const socialLinks = challenges.author.socialLinks;

const socials = document.createElement("ul");
socials.style.listStyleType = "none";
socials.className = "socials";

socialLinks.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.innerHTML = link.fontawesomeIcon;
  a.style.color = "black";
  a.style.textDecoration = "none";
  a.style.fontSize = "2rem";
  a.style.margin = "10px";
  li.appendChild(a);
  
  li.style.display = "inline";

  socials.appendChild(li);
});

wrapper.appendChild(socials);
// -------------------------------------------------------------------------------
const footerDiv = document.createElement("div");
footerDiv.style.display = "flex";

const titles = challenges.author.titles;

const divTitles = document.createElement("div");
divTitles.style.width = "80%";
divTitles.style.display = "inline-block";

const titleCon = document.createElement("h3");
titleCon.innerHTML = "Titles";
titleCon.style.fontSize = "1.5rem";
titleCon.style.margin = "auto";
titleCon.style.width = "40%";
divTitles.appendChild(titleCon);

const titleUl = document.createElement("ul");
titleUl.style.listStyleType = "none";
titleUl.style.width = "40%";
titleUl.style.margin = "auto";
titles.forEach((title) => {
  const li = document.createElement("li");
  li.innerHTML = `${title[0]} ${title[1]}`;
  titleUl.appendChild(li);
});
divTitles.appendChild(titleUl);

footerDiv.appendChild(divTitles);



const skills = challenges.author.skills;

const divSkills = document.createElement("div");
divSkills.style.width = "80%";
divSkills.style.display = "inline-block";

const skillCon = document.createElement("h3");
skillCon.innerHTML = "Skills";
skillCon.style.fontSize = "1.5rem";
skillCon.style.margin = "auto";
skillCon.style.width = "80%";
divSkills.appendChild(skillCon);

const skillUl = document.createElement("ul");
skillUl.style.listStyleType = "none";
skillUl.style.width = "80%";
skillUl.style.margin = "auto";
skills.forEach((skill) => {
  const li = document.createElement("li");
  const tick = `<i class="fa-solid fa-square-check"></i>`;
  li.innerHTML = `${tick} ${skill}`;
  skillUl.appendChild(li);
});
divSkills.appendChild(skillUl);

footerDiv.appendChild(divSkills);

const qualifications = challenges.author.qualifications;

const divQualify = document.createElement("div");
divQualify.style.width = "80%";
divQualify.style.display = "inline-block";

const qualifyCon = document.createElement("h3");
qualifyCon.innerHTML = "Qualifications";
qualifyCon.style.fontSize = "1.5rem";
qualifyCon.style.margin = "auto";
qualifyCon.style.width = "80%";
divQualify.appendChild(qualifyCon);

const qualifyUl = document.createElement("ul");
qualifyUl.style.listStyleType = "none";
qualifyUl.style.width = "100%";
qualifyUl.style.margin = "auto";
qualifications.forEach((qualify) => {
  const li = document.createElement("li");
  const tick = `<i class="fa-solid fa-square-check"></i>`;
  li.innerHTML = `${tick} ${qualify}`;
  qualifyUl.appendChild(li);
});
qualifyUl.style.margin = "0";
divQualify.appendChild(qualifyUl);

footerDiv.appendChild(divQualify);

wrapper.appendChild(footerDiv);
wrapper.appendChild(document.createElement("br"));

const divKeywords = document.createElement("div");
divKeywords.style.width = "60%";
divKeywords.style.margin = "auto";
divKeywords.style.display = "inline-block";
divKeywords.style.justifyContent = "space-between";

const keywordsTitle = document.createElement("h3");
keywordsTitle.textContent = "Keywords";
keywordsTitle.style.fontSize = "1.5rem";
keywordsTitle.style.width = "80%";
keywordsTitle.style.margin = "auto";
divKeywords.appendChild(keywordsTitle);

const keywords = challenges.keywords;
keywords.forEach((keyword) => {
  const span = document.createElement("span");
  span.style.padding = "2px";
  span.style.margin = "5px";
  span.style.width = "100%";

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  span.style.backgroundColor = `#${randomColor}`;
  span.style.borderRadius = "17px";
  span.textContent = keyword;
  span.style.fontWeight = "600";
  span.style.fontStyle = "italic";
  span.style.fontSize = "0.8rem";

  span.display = "inline-block";
  divKeywords.appendChild(span);
});

wrapper.appendChild(divKeywords);