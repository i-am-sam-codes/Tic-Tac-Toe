//Factory function for player

const player = (name, sign) => {
  return { name, sign };
};

const player1 = player(1, "X");
const player2 = player(2, "O");
//Module pattern
const gameBoard = (() => {
  const cells = document.querySelectorAll("[data-num]");
  const board = [];
  let player1Turn = true;

  for (const cell of cells) {
    cell.addEventListener("click", () => handleClick(cell));
    board.push("");
  }

  // Sets each cell to true if clicked turn false

  function handleClick(cell) {
    console.log(cell.dataset.num);
    player1Turn
      ? (cell.textContent = player1.sign)
      : (cell.textContent = player2.sign);

    return (player1Turn = !player1Turn);
  }
  console.log(board);
})();

// const startGame = (player1, player2) => {};
