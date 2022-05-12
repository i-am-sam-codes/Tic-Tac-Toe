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

    let xWinCondition = board.filter((e, i) => {
      return i % 2 === 0;
    });
    console.log(xWinCondition);

    let oWinCondition = board.filter((e, i) => {
      return i % 2 !== 0;
    });
    console.log(oWinCondition);
  }

  function reset() {
    for (const cell of cells) {
      cell.addEventListener("click", () => handleClick(cell), { once: true });
      cell.textContent = "";
    }
  }
})();

// const startGame = (player1, player2) => {
//   const winArray = [];
// };
