const grid = document.querySelector(".flex-continer");
const GRIDITEMSIZE = 20;
let write = false;
let penColor = "red";

let numberOfGrids = 16;
// calculate the gird size

let gridSize = 16 * GRIDITEMSIZE;
console.log(gridSize);

//set gird width
grid.style.width = gridSize + "px";
grid.style.backgroundColor = "white";
grid.style.minHeight = "100px";

// create girdItem

for (i = 0; i < gridSize; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("flex-item");
  grid.appendChild(gridItem);
}

// change the color of grid if its hovered on it
addEventListener("mousedown", () => (write = true));
addEventListener("mouseup", () => (write = false));
grid.addEventListener("mouseover", (e) => {
  if (write) e.target.style.backgroundColor = penColor;
});
