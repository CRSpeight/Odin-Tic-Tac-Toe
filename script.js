const gameboard = (() => {
  const drawBoard = function () {
    const container = document.querySelector("#container");
    container.innerHTML = "OOO <br> OOO <br> OOO";
  };

  return { drawBoard };
})();

gameboard.drawBoard();
