// The player factory
const Player = function (marker) {
  const getMarker = () => marker;

  return { getMarker };
};

const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  function getBoardValues(i) {
    return board[i];
  }
  return { getBoardValues };
})();

// The UI functionality is on this module
const displayController = (function () {
  //putting the 'X' and 'O' on the screen and displaying messages. Also clearing the board on click

  let cells = document.querySelectorAll("[data-cell]");
  let gameStatus = document.querySelector(".status");

  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      e.target.textContent = game.currentPlayer.getMarker();
      console.log(e);
    });
  });

  return {};
})();

// The logic of the game is on this module
const game = (function () {
  const playerX = Player("X");
  const playerO = Player("O");

  let currentPlayer = playerX;

  return { currentPlayer };
})();
