const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.getElementById("info-box"),
  input: document.querySelectorAll(".text-box"),
};

console.log(DOMSelector.submit);
DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let input = DOMSelector.input;

  let sport = {};
  sport.name = input[0].value;
  sport.team = input[1].value;
  sport.player = input[2].value;
  sport.img = input[3].value;
  console.log(input[0].value);
  console.log(input[1].value);
  console.log(input[2].value);
  console.log(input[3].value);
});

//outputs (card)
