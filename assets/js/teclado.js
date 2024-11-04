const div = document.getElementById("key");

let color = "";
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    div.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    div.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    div.style.backgroundColor = "lightblue";
  } else if (event.key === "q") {
    crearNuevoDiv("purple");
  } else if (event.key === "w") {
    crearNuevoDiv("brown");
  } else if (event.key === "e") {
    crearNuevoDiv("grey");
  }
});

function crearNuevoDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.border = "black solid";
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
}
