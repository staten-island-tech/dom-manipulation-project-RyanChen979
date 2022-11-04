const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  box: document.getElementById("#big-black-box"),
  list: document.querySelectorAll(".point"),
};
console.log(DOMSelector.text);

function styling(document, text) {
  document.body.style.backgroundColor = "purple";
  text.style.fontsize = `10rem`;
}
console.log(styling());
