// try {
//   console.log("try節：この行は実行される");
//   undefinedFunction();
//   console.log("try節：この行は実行されない");
// } catch (error) {
//   console.log("catch節：この行は実行される");
//   console.log(`エラーメッセージ：${error.message}`);
// } finally {
//   console.log("finally節：この行は実行される");
// }

try {
  throw new Error("例外が投げられた");
} catch (error) {
  console.log(error.message);
}
