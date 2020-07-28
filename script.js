const gameboard = (() => {
  let boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let currentPlayer = 1;

  const drawBoard = function () {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    // Creates Buttons in grid
    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.classList = i;
      button.dataset.index = i;
      button.textContent = "";
      container.appendChild(button);
    }

    //Function executed when a tile/button is clicked
    function buttonClicked(e) {
      let button = document.querySelector(".\\3" + this.dataset.index);

      button.disabled = true;
      if (currentPlayer == 1) {
        button.textContent = "X";
        boardState[this.dataset.index] = 1;
        currentPlayer = 2;
      } else {
        button.textContent = "O";
        boardState[this.dataset.index] = 2;
        currentPlayer = 1;
      }
      rules.checkWinner(boardState);
    }

    // Adds event listeners to all buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", buttonClicked);
    });
  };
  const resetBoardState = function (a) {
    boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  };
  return { drawBoard, resetBoardState };
})();

const ui = (() => {
  const displayWinner = function () {
    console.log("<placeholder> wins!");
  };
  return { displayWinner };
})();

const logic = (() => {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWinner = function (board) {
    winStates.forEach(function (state) {});
  };
  return { checkWinner };
})();

const playerMaker = (name) => {
  return { name };
};

const game = (() => {
  gameboard.drawBoard();
  let players = [];
  players.push(playerMaker("Chris"));
  players.push(playerMaker("Test"));
  console.log(players);
})();
