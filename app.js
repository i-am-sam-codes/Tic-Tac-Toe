//Module pattern
const gameBoard = (() => {
  const board = [];

  function displayX() {
    const cells = document.querySelectorAll("[data-num]");

    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        cell.textContent = "X";
      });
    });
  }
  displayX();
  console.log(board);
})();
