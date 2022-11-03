const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  box: document.getElementById("big-black-box"),
  list: document.querySelectorAll(".point"),
};
console.log(DOMSelector.text);

function styling(background, content) {
  background.style.backgroundColor = "purple";
  content.style.fontsize = "2rem";
}
