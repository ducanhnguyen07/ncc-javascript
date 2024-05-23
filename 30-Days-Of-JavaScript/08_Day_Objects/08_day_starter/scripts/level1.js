// 1
let dog = {};
// 2
console.log(dog);
// 3
dog.name = 'Mic';
dog.legs = 4;
dog.color = 'white';
dog.age = 1;
dog.bark = () => { return 'woof woof' };
// 4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
// 5
dog.breed = 'Laika';
dog.getDogInfo = () => {
  console.log(`${dog.name} is a/an ${dog.breed}. He has ${dog.legs} and he is ${dog.color}. He's ${dog.age} years old. He often barks like ${dog.bark()}.`);
};

dog.getDogInfo();