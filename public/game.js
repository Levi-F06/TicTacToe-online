class Game {
  constructor() {
    this.board = Array.from({ length: 3 }, () => new Array(3).fill(""));
    this.container = document.querySelector("#container");
    this.turn = Math.floor(Math.random() * 2) ? "X" : "O";
  }

  update(i, j) {
    this.board[i][j] = this.turn;
    this.draw();
  }

  draw() {
    this.container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const gameRow = document.createElement("div");
      gameRow.classList.add("gameRow");

      for (let j = 0; j < 3; j++) {
        const gameItem = document.createElement("div");
        gameItem.textContent = this.board[i][j];
        gameItem.classList.add("gameItem");
        if (this.board[i][j] === "") {
          gameItem.addEventListener("click", () => this.update(i, j));
          gameItem.classList.add("emptyItem");
        }
        gameRow.appendChild(gameItem);
      }

      this.container.appendChild(gameRow);
    }
  }

  run() {
    this.draw();
  }
}

const game = new Game();
game.run();
