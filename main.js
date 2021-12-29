const gridContainer = document.querySelector(".container");
const gridSize = document.querySelector("#grid-size");
let gridSizeSelected = 400 / parseInt(gridSize.value);
let gridSizeMult = Math.pow(parseInt(gridSize.value), 2);

function colorChanger() {
  let colorSelection = document.querySelector("#draw-color").value;
  let root = document.documentElement.style.setProperty(
    "--hover-color",
    colorSelection
  );
}

function getValues() {
  let val = gridSize.value;
  return `${val} x ${val}`;
}

function updateShowValues(value) {
  document.getElementById("size-show").textContent = value;
}

function createGrid(size) {
  gridSizeSelected = 400 / parseInt(gridSize.value);
  while (size > 0) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.cssText = `width: ${gridSizeSelected}px; height: ${gridSizeSelected}px`;
    gridContainer.appendChild(grid);
    size--;
  }
}

function hovering() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.classList.add("hover");
      colorChanger();
    });
  });
}

function removeGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.remove();
  });
}

function start() {
  gridSizeMult = Math.pow(parseInt(gridSize.value), 2);
  updateShowValues(getValues());
  createGrid(gridSizeMult);
  hovering();
}

function reset() {
  gridSizeMult = Math.pow(parseInt(gridSize.value), 2);
  updateShowValues(getValues());
  removeGrid();
  createGrid(gridSizeMult);
  hovering();
}

start();
