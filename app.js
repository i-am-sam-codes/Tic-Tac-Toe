//Factory function for player
const player = (name, index, sign) => {
  return { name, index, sign };
};

//Module pattern
const gameBoard = (() => {
  const cells = document.querySelectorAll("[data-num]");

  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  function displayX() {
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        cell.textContent = "X";
      });
    });
  }
  displayX();
})();
