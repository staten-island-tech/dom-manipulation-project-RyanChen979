const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("info-box"),
  form: document.querySelectorAll(".context"),
};
console.log(DOMSelector.text);

function styling(background, text) {
  background.style.backgroundColor = "purple";
  text.style.fontSize = "2rem";
}

DOMSelector.button.addEventListener("click", function () {
  styling(DOMSelector.box, DOMSelector.text);
});
