const gridContainer = document.querySelector(".container");
const gridSize = document.querySelector("#grid-size");
let gridSizeMult = Math.pow(
  parseInt(gridSize.options[gridSize.selectedIndex].text),
  2
);

function createGrid(size) {
  while (size > 0) {
    const grid = document.createElement("div");
    grid.className = "grid";
    gridContainer.appendChild(grid);
    size--;
  }
}

function hovering() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.classList.add("hover");
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
  removeGrid();
  gridSizeMult = Math.pow(
    parseInt(gridSize.options[gridSize.selectedIndex].text),
    2
  );
  createGrid(gridSizeMult);
  hovering();
}

function reset() {
  gridSizeMult = Math.pow(parseInt(gridSize.options[0].text), 2);
  removeGrid();
  createGrid(gridSizeMult);
  hovering();
}
