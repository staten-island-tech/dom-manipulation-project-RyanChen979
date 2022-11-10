const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("info-box"),
  form: document.querySelectorAll(".context"),
  input: document.querySelector("#input"),
};

DOMSelector.button.addEventListener("submit", function () {
  let input = DOMSelector.box.value;
  console.log(input);
});
