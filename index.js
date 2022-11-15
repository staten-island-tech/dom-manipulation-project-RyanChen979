const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.getElementById("info-box"),
  input: document.querySelectorAll(".text-box"),
};

console.log(DOMSelector.submit, DOMSelector.button, DOMSelector.box);
DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = DOMSelector.input;
  let sport = {};
  sport.name = input[0].value;
  sport.team = input[1].value;
  const listing (sport) [
    sport.array.forEach(element => {
      console.log(element.name, element.team);
    })
  ]
  

  console.log(input);
  return input;
});
DOMSelector.input.insertAdjacentHTML("beforebegin", `${input}`);
