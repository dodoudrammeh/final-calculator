// (function () {

const selector = (el) => document.querySelector(el);

let screen = selector(".screen");
let buttons = document.querySelectorAll(".btn ");
let clear = selector(".btn-clear");
let equal = selector(".btn-equal");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    if (!value) {
      return;
    }
    screen.value += value;
  });
});

equal.addEventListener("click", function (e) {
  console.log(screen.value);
  if (screen.value === "") {
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    screen.value += ` = ${answer}`;
  }
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});
