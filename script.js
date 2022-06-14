// The player factory
const Player = function (marker) {
  let getMarker = () => marker;

  return { getMarker };
};

const gameBoard = (function () {
  let board = ["X", "O", "", "", "", "", "X", "", "o"];

  function getBoardValues() {
    // board.forEach((item) => console.log(item[0]));
    // console.log(board[1]);
    return board[8];
  }
  return { getBoardValues };
})();

// The UI functionality is on this module
const displayController = (function () {
  let cells = document.querySelectorAll("[data-cell]");

  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      e.target.textContent = gameBoard.getBoardValues();
      // console.log(e.target.textContent);
    });
  });

  return {};
})();

// The logic of the game is on this module
const game = (function () {
  return {};
})();
