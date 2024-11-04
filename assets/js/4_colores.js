const elemento1 = document.querySelector("#div1");
const elemento2 = document.querySelector("#div2");
const elemento3 = document.querySelector("#div3");
const elemento4 = document.querySelector("#div4");

const newColor = (event) => {
  event.target.style.backgroundColor = "black";
};
div1.addEventListener("click", newColor);
div2.addEventListener("click", newColor);
div3.addEventListener("click", newColor);
div4.addEventListener("click", newColor);
