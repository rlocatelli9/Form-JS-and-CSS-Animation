var sectionElement = document.querySelector('section.form-section');
var btnElement = document.querySelector('button');

btnElement.addEventListener("click", (event) => {
  event.preventDefault();

  var inputElement = [...document.querySelectorAll('.input-block input')];
  inputElement.forEach(element => {
    if (element.value === "") {
      sectionElement.classList.add('form-nono');
    }
  });

  var isEmpty = document.querySelector(".form-nono");
  if (isEmpty) {
    sectionElement.addEventListener("animationend", (event) => {
      if (event.animationName == "negative") {
        isEmpty.classList.remove("form-nono");
      }
    });
  } else {
    sectionElement.classList.add("form-move");
  }

});

sectionElement.addEventListener("animationstart", (event) => {
  if (event.animationName === "move_down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

sectionElement.addEventListener("animationend", (event) => {
  if (event.animationName === "move_down") {
    sectionElement.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});

/* Animation com squares */

var ulElement = document.querySelector(".squares");

for (let i = 0; i < 11; i++) {
  var liElement = document.createElement("li");
  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(6, 0.1);
  const durantion = random(24, 12);

  liElement.style.width = `${size}px`;
  liElement.style.height = `${size}px`;
  liElement.style.bottom = `-${size}px`;
  liElement.style.left = `${position}%`;

  liElement.style.animationDelay = `${delay}s`;
  liElement.style.animationDuration = `${durantion}s`;
  liElement.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

  ulElement.appendChild(liElement);
}