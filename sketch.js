const grid = document.querySelector(".flex-continer");
const setting = document.querySelector(".setting");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const generate = document.querySelector(".generate");
const gridInput = document.querySelector("#noGrid");
const colorInput = document.querySelector("#selectColor");
let penColor = "red";
const GRIDITEMSIZE = 20;
let write = false;

//set gird width
function generateGrid(numberOfGrids = 16) {
  //calculate the grid container width
  grid.style.width = numberOfGrids * GRIDITEMSIZE + "px";
  grid.style.backgroundColor = "white";
  grid.style.minHeight = "100px";

  let gridSize = numberOfGrids * GRIDITEMSIZE;
  for (i = 0; i < gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("flex-item");
    grid.appendChild(gridItem);
  }
}
// generate default gird
generateGrid();

//change the color of grid if its hovered on it
grid.addEventListener("mousedown", () => (write = true));
grid.addEventListener("mouseup", () => (write = false));
grid.addEventListener("mouseover", (e) => {
  if (write) e.target.style.backgroundColor = penColor;
});

setting.addEventListener("click", (e) => {
  overlay.style.display = "block";
  popup.style.display = "flex";
});

// generate gird based on user setting

generate.addEventListener("click", (e) => {
  // reset the grid
  grid.innerHTML = "";
  overlay.style.display = "none";
  popup.style.display = "none";
  const noGrid = parseInt(gridInput.value);
  generateGrid(noGrid);
});

// set color preference

colorInput.addEventListener("change", (e) => {
  e.target.value === "#" ? (penColor = "red") : (penColor = e.target.value);
});
