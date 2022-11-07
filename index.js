const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.getElementById("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};
console.log(DOMSelector.text);

function styling(background, text) {
  background.style.backgroundColor = "purple";
  text.style.fontSize = "2rem";
}

DOMSelector.button.addEventListener("click", function () {
  styling(DOMSelector.box, DOMSelector.text);
});
