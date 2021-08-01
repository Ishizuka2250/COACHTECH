test = (name, point) => {
  if (0 <= point && point < 30) {
    console.log(`${name}君 もう少し頑張りましょう`);
  }else if(30 <= point && point < 70) {
    console.log(`${name}君 普通です`);
  }else if(70 <= point && point <= 100) {
    console.log(`${name}君 良くできました`);
  }
}

const A = "80";
const B = "15";
const C = "55";

test('A', A);
test('B', B);
test('C', C);