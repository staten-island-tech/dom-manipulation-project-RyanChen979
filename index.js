const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.querySelector(".display-card"),
  input: document.querySelectorAll(".text-box"),
  removeBtn: document.getElementsByClassName(".remove-btn"),
};

console.log(DOMSelector.submit, DOMSelector.input);

// function input() {}

// function card() {}

// function remove() {
//   // DOMSelector.removeBtn.addEventListener("click", display.remove());
// }

DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let input = DOMSelector.input;

  let sport = {};
  sport.name = input[0].value;
  sport.team = input[1].value;
  sport.player = input[2].value;
  sport.img = input[3].value;

  console.log(sport.name, sport.team, sport.player, sport.img);

  // console.log(card());
  // card();
  DOMSelector.box.insertAdjacentHTML(
    "afterbegin",
    `
    <h2>${sport.name}</h2>
    <br>
    <h3>${sport.player}</h3>
    <br>
    <img class="info-img" src="${sport.img}"/>
    <br>
    <h3>${sport.team}</h3>
    
    
    `
  );

  // remove();
});
