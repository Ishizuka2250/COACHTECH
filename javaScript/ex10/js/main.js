// function say(arg) {
//   alert(arg);
// }
// setTimeout(say, 1000, 'Hello');

function say() {
  alert('Hello');
}
const timerId = setInterval(say, 1000);
function stop() {
  clearTimeout(timerId);
}
setTimeout(stop, 5000);
