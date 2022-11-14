const DOMSelector = {
  submit: document.getElementById("#form"),
  button: document.getElementById("button"),
  text: document.querySelector("#text"),
  box: document.getElementById("info-box"),
  form: document.querySelectorAll(".context"),
  // input: document.querySelector("#input"),
};

DOMSelector.submit.addEventListener("submit", function () {
  event.preventDefault();
  let input = DOMSelector.submit.value;
  DOMSelector.box.insertAdjacentHTML("beforeend", ``);
});
console.log(input);
