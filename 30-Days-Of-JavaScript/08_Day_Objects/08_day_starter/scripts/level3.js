// 1
let personAccount = {
  firstName: "Alex",
  lastName: "Smith",
  incomes: [
    { desc: 'salary', amount: 100 },
    { desc: 'bonus', amount: 50 },
  ],
  expenses: [
    { desc: 'gym', amount: 10 },
    { desc: 'food', amount: 10 },
  ],
  totalIncome: function() {
    let sum = 0;
    this.incomes.forEach(income => {
      sum += income.amount;
    });
    return sum;
  },
  totalExpense: function() {
    let sum = 0;
    this.expenses.forEach(expense => {
      sum += expense.amount;
    });
    return sum;
  },
  accountInfo: function() {
    return `${this.firstName} ${this.lastName}\nTotal income: ${this.totalIncome()}\nTotal expense: ${this.totalExpense()}`
  },
  addIncome: function(desc, amount) {
    this.incomes.push({ desc: desc, amount: amount });
  },
  addExpense: function(desc, amount) {
    this.expenses.push({ desc: desc, amount: amount });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome( 'a', 1);
console.log(personAccount.accountBalance());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: false,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2
const creatAt = () => {
  const time = new Date();
  return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()} ${time.getMinutes()}`
};

const signUp = (username, email, password) => {
  const arrEmail = users.map(user => user.email);
  if(arrEmail.includes(email)) {
    return 'Email existed';
  }

  users.push({
    _id: 'ab13ex',
    username: username,
    email: email,
    password: password,
    createdAt: creatAt(),
    isLoggedIn: false
  });
  return 'Successfully.';
};

console.log(signUp('aa', 'aaa@alex.com', '111'));
console.log(users);

const signIn = (username, password) => {
  users.forEach(obj => {
    if(username == obj.username && password == obj.password) {
      obj.isLoggedIn = true;
      return 'Success';
    }
  });
  return 'Fail';
};
console.log(signIn('Brook', '123111'));
console.log(users);

// 3
const rateProduct = (pid) => {
  for (const product of products) {
    if (pid === product._id) {
      return product.ratings;
    }
  }
  return 'Product not found';
};

console.log(rateProduct('eedfcf'));

const averageRating = (pid) => {
  let avg = 0;
  for (const product of products) {
    if (pid === product._id) {
      for (const i of product.ratings) {
        avg += i.rate;
      }
      return avg/product.ratings.length;
    }
  }
  return 'Product not found';
};

console.log(averageRating('eedfcf'));

// 4
const likeProduct = (pid, userId) => {
  for (const product of products) {
    if (pid === product._id) {
      if(product.likes.length == 0) {
        product.likes.push(userId);
        return 'Liked';
      }
      product.likes = [];
      return 'Unliked';
    }
  }
  return 'Product not found';
};