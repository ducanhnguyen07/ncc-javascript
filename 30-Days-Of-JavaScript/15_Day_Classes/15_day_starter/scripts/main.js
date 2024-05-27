// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
//   get getScore() {
//     return this.score
//   }
//   get getSkills() {
//     return this.skills
//   }
//   set setScore(score) {
//     this.score += score
//   }
//   set setSkill(skill) {
//     this.skills.push(skill)
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }

//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     console.log('hi')
//     return skills[index]
//   }
// }

// console.log(Person.favoriteSkill())

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''
//     let pronoun = this.gender == 'Male' ? 'He' : 'She'

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }
// }

// const s1 = new Student(
//   'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )
// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)
// console.log(s2)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())


// LEVEL 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  get getColor() {
    return this.color;
  }

  get getLegs() {
    return this.legs;
  }

  set setName(name) {
    this.name = name;
  }

  set setAge(age) {
    this.age = age;
  }

  set setColor(color) {
    this.color = color;
  }

  set setLegs(legs) {
    this.legs = legs;
  }

  getAnimalInfo() {
    let info = `
      Name: ${this.name}
      Age: ${this.age}
      Color: ${this.color}
      Legs: ${this.legs}
    `;
    return info;
  }
}

const animal = new Animal('Mickey', 2, 'white', 4);
console.log(animal.getAnimalInfo());

class Dog extends Animal {
  constructor(name, age, color, legs, ownDog) {
    super(name, age, color, legs);
    this.ownDog = ownDog;
  }

  getAnimalInfo() {
    let info = `
      Name: ${this.name}
      Age: ${this.age}
      Color: ${this.color}
      Legs: ${this.legs}
      Own: ${this.ownDog}
    `;
    return info;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, ownCat) {
    super(name, age, color, legs);
    this.ownCat = ownCat;
  }

  getAnimalInfo() {
    let info = `
      Name: ${this.name}
      Age: ${this.age}
      Color: ${this.color}
      Legs: ${this.legs}
      Own: ${this.ownCat}
    `;
    return info;
  }
}

const dog = new Dog('Pug', 1, 'black', 4, 'Mike');

console.log(dog.getAnimalInfo());

const cat = new Cat('Milk', 2, 'white', 4, 'Linda');
console.log(cat.getAnimalInfo());

// LEVEL 3
class Statistic {
  constructor(arr)  {
    this.arr = arr;
  }

  get getArr() {
    return this.arr;
  }

  set setArr(arr) {
    this.arr = arr;
  }

  getSortedArr() {
    let arr = this.arr.map(i => parseFloat(i)).sort((a, b) => (a - b));
    return arr;
  }

  count() {
    return this.arr.length;
  }

  sum() {
    return this.getSortedArr().reduce((acc, cur) => acc + cur, 0);
  }

  min() {
    return this.getSortedArr()[0];
  }

  max() {
    let length = this.getSortedArr().length;
    return this.getSortedArr()[length - 1];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    let newArr = this.getSortedArr().reverse();
    const mid = parseInt(newArr.length / 2);

    if(newArr.length % 2) 
      return newArr[mid];
    return (newArr[mid-1] + newArr[mid+1])/2;
  }

  mode() {
    let newArr = this.getSortedArr();
    let freq = {};
    let maxFreq = 0;
    let mode = [];
    for (const i of newArr) {
      freq[i] = (freq[i] || 0) + 1;
      if(freq[i] > maxFreq) {
        maxFreq = freq[i];
        mode = [i];
      } else if(freq[i] == maxFreq) {
        mode.push(i);
      }
    }
    return {
      mode: mode.length === 1 ? mode[0] : mode,
      count: maxFreq
    };
  }

  var() {
    const squareDiff = this.getSortedArr().map(i => Math.pow(i - this.mean(), 2));
    return squareDiff.reduce((acc, cur) => acc + cur, 0) / this.getSortedArr().length;
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    let newArr = this.getSortedArr();
    let freq = {};
    let freqDist = [];
    for (const i of newArr) {
      freq[i] = (freq[i] || 0) + 1;
    }

    console.log(freq)

    for (const i in freq) {
      freqDist.push([freq[i]/newArr.length*100, i]);
    }
  
    return freqDist.sort((a, b) => (b[0] - a[0]));
  }  
}

let newArr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const obj = new Statistic(newArr);

console.log('Count:', obj.count()) // 25
console.log('Sum: ', obj.sum()) // 744
console.log('Min: ', obj.min()) // 24
console.log('Max: ', obj.max()) // 38
console.log('Range: ', obj.range()) // 14
console.log('Mean: ', obj.mean()) // 30
console.log('Median: ',obj.median()) // 29
console.log('Mode: ', obj.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',obj.var()) // 17.5
console.log('Standard Deviation: ', obj.std()) // 4.2
console.log('Frequency Distribution: ',obj.freqDist())

// 4
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getIncomes() {
    return this.incomes;
  }

  get getExpenses() {
    return this.expenses;
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }

  set setLastName(lastName) {
    this.lastName = lastName;
  }

  set setIncomes(incomes) {
    this.incomes = incomes;
  }

  set setExpenses(expenses) {
    this.expenses = expenses;
  }

  getAccountInfo() {
    let totalIncome = this.incomes.reduce((acc, cur) => acc + cur, 0);
    let totalExpense = this.expenses.reduce((acc, cur) => acc + cur, 0);
    let accountBalance = totalIncome - totalExpense;
    let info = `
      Name: ${this.firstName} ${this.lastName}
      Incomes: ${totalIncome}
      Expenses: ${totalExpense}
      Account Balance: ${accountBalance}
    `;
    return info;
  }

  addIncome(income) {
    this.incomes.push(income);
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }

  accountBalance() {
    let totalIncome = this.incomes.reduce((acc, cur) => acc + cur, 0);
    let totalExpense = this.expenses.reduce((acc, cur) => acc + cur, 0);
    return totalIncome - totalExpense;
  }
}

const person = new PersonAccount('Nguyen', 'Anh', [100, 200, 300], [50, 100, 150]);
console.log(person.getAccountInfo());