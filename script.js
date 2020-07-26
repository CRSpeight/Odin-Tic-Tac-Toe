const gameboard = (() => {
  const button = "<button>BLANK</button>";
  const drawBoard = function () {
    const container = document.querySelector("#container");
    container.innerHTML = button;
  };
  return { drawBoard };
})();

const game = (() => {
  gameboard.drawBoard();
})();
