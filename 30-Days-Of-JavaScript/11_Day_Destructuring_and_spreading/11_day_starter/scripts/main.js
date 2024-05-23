// LEVEL 1
const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// 1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3
const { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// LEVEL 2
// 1
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}
// 2
for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

//  LEVEL 3
// 1
for (const { name, capital, population, languages } of countries) {
  console.log(name, capital, population, languages);
}

// 2
const student1 = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name1, skills, scores] = student1;
const [, , jsScore, reactScore] = scores;
console.log(name1, skills, jsScore, reactScore);

// 3
const convertArrayToObject = (arr) => {
  let res = [];
  for (const item of arr) {
    const [name1, skills, scores] = item;
    const obj = {
      name: name1,
      skills: skills,
      scores: scores,
    };
    res.push(obj);
  }

  return res;
};

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));

// 4
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [
      { skill: "MongoDB", level: 7.5 }
    ],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = {};
Object.entries(student).forEach(([key, value]) => {
  newStudent[key] = value;
});

newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");

console.log(newStudent);
