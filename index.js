const DOMSelector = {
  submit: document.getElementById("form"),
  button: document.getElementById("button"),
  box: document.querySelector(".display"),
  input: document.querySelectorAll(".text-box"),
  removeBtn: document.getElementsByClassName(".remove-btn"),
  name: document.getElementById("game"),
  character: document.getElementById("character"),
  img: document.getElementById("url"),
  gender: document.getElementById("gender"),
  age: document.getElementById("age"),
};

function userInput() {
  let input = DOMSelector.input;

  let game = {
    name: input[0].value,
    character: input[1].value,
    img: input[2].value,
    gender: input[3].value,
    age: input[4].value,
  };
  return game;
}

console.log(DOMSelector.input, DOMSelector.submit);

function insertHTML() {
  const info = {
    title: DOMSelector.name.value,
    context: DOMSelector.character.value,
    img: DOMSelector.img.value,
    gender: DOMSelector.gender.value,
    age: DOMSelector.age.value,
  };
  console.log(info);
  return info;
}

const card = Object.create(
  `<div class="display-card">
      <h2 class="display-name">${info.title}</h2>
      <h3 class="display-character">${info.context}</h3>
      <img class="display-img" src="${info.img}" />
      <h4 class="display-gender">${info.gender}</h4>
      <h4 class="display-age">${info.age}</h4>
      <button class="remove btn">Remove Card</button>
    </div>`
);

DOMSelector.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(userInput());
  console.log(insertHTML());

  // console.log(card());
  // card();
  DOMSelector.box.insertAdjacentHTML(
    "afterbegin",
    `
    ${card}
    // <div class="display-card">
    //    <h2 class="display-name">${DOMSelector.title}</h2>
    //    <h3 class="display-character">${DOMSelector.context}</h3>
    //    <img class="display-img" src="${DOMSelector.img}" />
    //    <h4 class="display-gender">${DOMSelector.gender}</h4>
    //    <h4 class="display-age">${DOMSelector.age}</h4>
    //    <button class="remove btn">Remove Card</button>
    //  </div>`
  );

  // remove();
});

// <h2>${card.name}</h2>
// <br>
// <h3>${card.character}</h3>
// <br>
// <img class="info-img" src="${card.img}"/>
// <br>
// <h4>${card.gender}</h4>
// <h4>${card.age}</h4>
