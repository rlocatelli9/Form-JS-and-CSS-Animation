var sectionElement = document.querySelector('section.form-section');
var btnElement = document.querySelector('button');

btnElement.addEventListener("click", (event) => {
  event.preventDefault();
  sectionElement.classList.add("form-move");
});

sectionElement.addEventListener("animationstart", (event) => {
  if (event.animationName === "move_down") {
    document.querySelector("body").style.overflow = "hidden";
  }
})

sectionElement.addEventListener("animationend", (event) => {
  if (event.animationName === "move_down") {
    sectionElement.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
})