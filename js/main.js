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

