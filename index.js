const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.getElementById("display"), //not rtight
  input: document.querySelectorAll(".text-box"),
};

console.log(DOMSelector.submit);

function input() {
  let input = DOMSelector.input.value;

  let sport = {};
  sport.name = input[0].value;
  sport.team = input[1].value;
  sport.player = input[2].value;
  sport.img = input[3].value;

  return sport;
}

function card() {
  DOMSelector.box.insertAdjacentHTML(
    "beforeend",
    `<h2>${input[0].value}</h2>
      <br>
      <h3>${input[1].value}</h3>
      <br>
      <h3>${input[2].value}</h3>`
  );
}

DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(input());

  console.log(card());
  card();
});
