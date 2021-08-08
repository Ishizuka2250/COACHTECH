document.addEventListener('DOMContentLoaded', function (){
  alert('ページが読み込まれました。');
});

const button = document.querySelector("button");
console.log(button);
button.addEventListener('click', function () {
  alert('ボタンが押されました');
});
