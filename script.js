const gameboard = (() => {
  const drawBoard = function () {
    const container = document.querySelector("#container");

    // Creates Buttons in grid
    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.classList = i;
      button.dataset.index = i;
      button.textContent = "";
      container.appendChild(button);
    }

    //Function executed when a button is clicked
    function buttonClicked(e) {
      console.log(this.dataset.index);
      let button = document.querySelector(".\\3" + this.dataset.index);
      button.textContent = "X";
    }

    // Adds event listeners to all buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", buttonClicked);
    });
  };
  return { drawBoard };
})();

const game = (() => {
  gameboard.drawBoard();
})();
