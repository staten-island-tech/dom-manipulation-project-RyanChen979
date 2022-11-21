const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.querySelector(".display"),
  input: document.querySelectorAll(".text-box"),
  removeBtn: document.querySelector(".remove-btn"),
  name: document.getElementById("game"),
  character: document.getElementById("character"),
  img: document.getElementById("url"),
  gender: document.getElementById("gender"),
  age: document.getElementById("age"),
};

console.log(DOMSelector.input, DOMSelector.submit);

// function insertHTML() {
//   const info = {
//     title: DOMSelector.name.value,
//     context: DOMSelector.character.value,
//     img: DOMSelector.img.value,
//     gender: DOMSelector.gender.value,
//     age: DOMSelector.age.value,
//   };
//   console.log(info);
//   return info;
// }

// const card = Object.create(
//   `<div class="display-card">
//       <h2 class="display-name">${info.title}</h2>
//       <h3 class="display-character">${info.context}</h3>
//       <img class="display-img" src="${info.img}" />
//       <h4 class="display-gender">${info.gender}</h4>
//       <h4 class="display-age">${info.age}</h4>
//       <button class="remove btn">Remove Card</button>
//     </div>`
// );

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

DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let game = userInput();
  console.log(game);

  DOMSelector.box.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="display-card">
        <h2 class="display-name">Video Game: ${game.name}</h2>
        <h3 class="display-character">Game Character: ${game.character}</h3>
        <img class="display-img" src="${game.img}" />
        <h4 class="display-gender">Gender: ${game.gender}</h4>
        <h4 class="display-age">Age: ${game.age}</h4>
        <button class="remove btn" id="0">Remove Card</button>
      </div>`
  );
});

function remove() {}

DOMSelector.removeBtn.addEventListener("click", (event) => {
  const item = document.querySelector("display-card");
  item.remove();
});
