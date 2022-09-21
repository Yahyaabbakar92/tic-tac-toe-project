const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  return {
    board,
  };
})();

const Player = (name, marker) => {
  return { name, marker };
};

const Game = (() => {
  // const player1 = Player(/* set up player 1 somehow */);
  // const player2 = Player(/* and player 2 as well */);
  // let currentPlayer = player1;
  // so we have a Gameboard module outside of this, and we have both
  //  players *inside* of this.
  // in here, we might want to create our event listeners on the board,
  //  and each time there's a click, go through one round of tic-tac-toe.
  //  - check if something has been played on that cell yet.
  //  - if not, notify the Gameboard to add the currentPlayer's marker at that cell.
  //  - ask the Gameboard if it has a win for the currentPlayer, or if it's a draw.
  //  - if not, switch players.
})();

//   * How should the Gameboard update itself with the currentPlayer.marker?
// * How should the Gameboard check for a win?
// * How should the Gameboard check for a draw?
// * How should the Game switch between players?

const displayController = (() => {
  return {};
})();
