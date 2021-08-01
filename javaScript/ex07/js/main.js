//演習1
console.log("演習1");
const test = ["国語", "数学", "英語"];
test.push("理科");
test.push("社会");
for(let i = 0; i < test.length; i++) {
  console.log(test[i]);
}
console.log(`要素数:${test.length}`);

//演習2
console.log("演習2");
let result;
for(i = 1; i <= 50; i++) {
  result = "";
  if ((i % 3) == 0) result = "Fizz";
  if ((i % 5) == 0) result = result + "Buzz";
  console.log(`${i} : ${result}`);
}

//演習3
console.log("演習3");
const water = 1000;
while (water > 0) {
  water = water - 180;
  if (water < 0) water = 0;
  console.log(`残量：${water}`);
}
console.log("水を飲み干した");