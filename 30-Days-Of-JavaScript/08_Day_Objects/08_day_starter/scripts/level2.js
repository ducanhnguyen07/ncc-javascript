const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1
const entries = Object.entries(users);

entries.forEach(([key, val]) => {
  if(val.skills.length > 1) {
    console.log(key);
  }
});

// 2
let loginCnt = 0;
let loginPoint = 0;
entries.forEach(([k, v]) => {
  if(v.isLoggedIn == true)
    loginCnt++;
  if(v.points >= 50)
    loginPoint++;
});

console.log(loginCnt);
console.log(loginPoint);

// 3
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

entries.forEach(([k, v]) => {
  let fl = true;
  for(let i=0; i<mernStack.length; i++) {
    if(!v.skills.includes(mernStack[i])){
      fl = false;
      break;
    }
  }

  if(fl) {
    console.log(`${k} is a MERN stack developer`);
  }
});
  
// 4
const copyUsers = Object.assign({}, users);
copyUsers.Anh = {};
console.log(copyUsers);

// 5
console.log(Object.keys(copyUsers));
// 6
console.log(Object.values(copyUsers));

// 7
const countriesEntries = Object.entries(countries);

countriesEntries.forEach(([k, v]) => {
  console.log(`${k}: name: ${v.name}, capital: ${v.capital}, languages: ${v.languages}, population: ${v.population}`);
});