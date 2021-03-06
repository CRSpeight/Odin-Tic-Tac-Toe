const gameboard = (() => {
  let boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let moveCounter = 0;
  const resetBoardState = function (a) {
    boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    moveCounter = 0;
    ui.drawBoard();
    ui.clearMessage();
  };
  const getBoardState = () => {
    return boardState;
  };
  const setBoardState = (i, player) => {
    boardState[i] = player;
    moveCounter += 1;
    logic.checkWinner(boardState, player, moveCounter);
  };
  return { resetBoardState, getBoardState, setBoardState };
})();

const ui = (() => {
  let currentPlayer = 1;
  let modalVisible = true;
  const messageBox = document.querySelector("#messageBox");
  const drawBoard = function () {
    currentPlayer = 1;
    const container = document.querySelector("#container");
    container.innerHTML = "";

    // Creates Buttons in grid
    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.classList.add(i, "cell");
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
        gameboard.setBoardState(this.dataset.index, 1);
        currentPlayer = 2;
      } else {
        button.textContent = "O";
        gameboard.setBoardState(this.dataset.index, 2);
        currentPlayer = 1;
      }
    }

    // Adds event listeners to all buttons
    let buttons = document.querySelectorAll(".cell");
    buttons.forEach((button) => {
      button.addEventListener("click", buttonClicked);
    });
  };

  const setWinState = function (idx1, idx2, idx3) {
    let buttons = document.querySelectorAll(".cell");
    buttons.forEach((button) => (button.disabled = true));
    for (index of arguments) {
      let winningButton = document.querySelector(".\\3" + index);
      winningButton.classList.add("winButton");
    }
  };

  const displayWinner = function (player) {
    messageBox.textContent = game.getPlayers()[player - 1].name + " wins!";
  };

  const updateMessage = function (message) {
    messageBox.textContent = message;
  };

  const clearMessage = function () {
    messageBox.innerHTML = "<br />";
  };

  const modalToggle = function () {
    const modal = document.querySelector(".modal");

    if (modalVisible) {
      modal.style.display = "none";
    } else {
      modal.style.display = "";
    }
    modalVisible = !modalVisible;
  };

  const modalSubmit = function () {
    let form = document.querySelector("#playerForm");
    game.makePlayer(form.elements[0].value);
    game.makePlayer(form.elements[1].value);
    modalToggle();
  };

  return {
    displayWinner,
    drawBoard,
    updateMessage,
    setWinState,
    clearMessage,
    modalToggle,
    modalSubmit,
  };
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
  const checkWinner = function (board, player, moveCounter) {
    for (state of winStates) {
      if (
        board[state[0]] == player &&
        board[state[1]] == player &&
        board[state[2]] == player
      ) {
        ui.displayWinner(player);
        ui.setWinState(state[0], state[1], state[2]);
        return;
      }
    }
    if (moveCounter == 9) {
      ui.updateMessage("It's a tie!");
      return;
    }
  };

  return { checkWinner };
})();

const playerMaker = (name) => {
  return { name };
};

const game = (() => {
  ui.drawBoard();
  let players = [];

  const makePlayer = function (name) {
    players.push(playerMaker(name));
    console.log(players);
  };

  const getPlayers = function () {
    return players;
  };
  return { makePlayer, getPlayers };
})();
