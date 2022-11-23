const DOMSelector = {
  submit: document.getElementById("form"),
  box: document.querySelector(".display"),
  input: document.querySelectorAll(".text-box"),
  name: document.getElementById("game"),
  character: document.getElementById("character"),
  img: document.getElementById("url"),
  gender: document.getElementById("gender"),
  age: document.getElementById("age"),
};

console.log(DOMSelector.input, DOMSelector.submit);

function userInput() {
  let input = DOMSelector.input;
  let game = {};
  game.name = input[0].value;
  game.character = input[1].value;
  game.img = input[2].value;
  game.gender = input[3].value;
  game.age = input[4].value;
  return game;
}

function card(game) {
  DOMSelector.box.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="display-card">
        <h2 class="display-name">Video Game: ${game.name}</h2>
        <h3 class="display-character">Game Character: ${game.character}</h3>
        <img class="display-img" src="${game.img}" />
        <h4 class="display-gender">Gender: ${game.gender}</h4>
        <h4 class="display-age">Age: ${game.age}</h4>
        <button class="remove-btn">Remove Card</button>
      </div>`
  );
}

function removeCard(abc) {
  abc.target.parentElement.remove;
}

DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let game = userInput();

  card(game);
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", removeCard(abc));
  });

  remove();
});
