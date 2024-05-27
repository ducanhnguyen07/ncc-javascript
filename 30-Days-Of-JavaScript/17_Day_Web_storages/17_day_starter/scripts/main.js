// LEVEL 1
const firstName = 'Nguyen';
const lastName = 'Anh';
const age = 21;
const country = 'Vietnam';
const city = 'Hanoi';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

// LEVEL 2
const student = {
  firstName: 'Nguyen',
  lastName: 'Anh',
  age: 21,
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
  country: 'Vietnam',
  enrolled: '2020-01-01'
};

localStorage.setItem('student', JSON.stringify(student));

// LEVEL 3
const personAccount = {
  firstName: 'Nguyen',
  lastName: 'Anh',
  incomes: [
    { description: 'salary', amount: 1000 },
    { description: 'freelance', amount: 500 }
  ],
  expenses: [
    { description: 'rent', amount: 300 },
    { description: 'food', amount: 150 }
  ],
  totalIncome: function() {
    return this.incomes.reduce((acc, cur) => acc + cur.amount, 0);
  },
  totalExpense: function() {
    return this.expenses.reduce((acc, cur) => acc + cur.amount, 0);
  },
  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
}