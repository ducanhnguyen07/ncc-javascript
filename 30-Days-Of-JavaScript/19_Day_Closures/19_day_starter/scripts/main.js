// 1
// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }

//   return innerFunction;
// }
// const innerFunc = outerFunction();

// console.log(innerFunc());

// 2
function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  function add2() {
    count += 2;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
    add2: add2()
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
console.log(innerFuncs.add2);
