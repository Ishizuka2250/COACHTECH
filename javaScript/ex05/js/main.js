// const array = ["hoge", "fuga", "piyo"];
// const newArray = [...array, "hogera", "hogehoge"];
// console.log(newArray);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.map(function(item) {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});

console.log(result);