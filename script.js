const gameBoard = (() => {
  let board = ["X", "X", "O", "X", "O", "O", "X", "O", "X"];

  return { board };
})();

const player = (name, marker) => {
  return { name, marker };
};

const displayController = (() => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerHTML = gameBoard.board[1]
  });

  return { cells };
})();

const game = (() => {})();
