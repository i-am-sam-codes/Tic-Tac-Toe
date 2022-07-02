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

  reset();

  function handleClick(cell) {
    console.log(cell.dataset.num);
    player1Turn
      ? (cell.textContent = player1.sign)
      : (cell.textContent = player2.sign);

    player1Turn = !player1Turn;
    board.push(cell.dataset.num);

    console.log(board);

    if (checkWinner(currentPlayer)) {
      console.log("winner");
    }
  }
  startGame.checkWinner();

  function reset() {
    for (const cell of cells) {
      cell.addEventListener("click", () => handleClick(cell), { once: true });
      cell.textContent = "";
    }
  }

  return { cells };
})();

const startGame = (() => {
  // const winArray = [];

  let winCondition = [
    ["1", "2", "3"][("4", "5", "6")][("7", "8", "9")][("1", "5", "9")][
      ("7", "5", "3")
    ],
  ];

  function checkWinner() {
    return winCondition.some((combination) => {
      return combination.every((index) => {
        return player.cells[index].classList.contains(player);
      });
    });
  }

  return { checkWinner };
})();
