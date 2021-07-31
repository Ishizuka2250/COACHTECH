let price = 1000;
const tax = 0.1;

console.log(`tax:${price * tax}`);

const A = 170;
const B = 130;

console.log(`A + B = ${A + B}`);

if ((A  >= 300) && (B >= 300)) {
  console.log("素晴らしい");
} else if ((A  >= 300) || (B >= 300)) {
  console.log("普通");
} else {
  console.log("頑張ろう");
}

switch (Math.floor(Math.random() * 100) % 7) {
  case 0:
    console.log("大吉");
    break;
  case 1:
    console.log("中吉");
    break;
  case 2:
    console.log("小吉");
    break;
  case 3:
    console.log("吉");
    break;
  case 4:
    console.log("末吉");
    break;
  case 5:
    console.log("凶");
    break;
  case 6:
    console.log("大凶");
    break;
}

price = 2001;

price < 1000 ? console.log("安い") : price > 2000 ? console.log("高い") : console.log("丁度いい");

