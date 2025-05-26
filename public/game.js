class Game {
  constructor() {
    this.board = Array.from({ length: 3 }, () => new Array(3).fill(""));
    this.container = document.querySelector("#container");
    this.turn = Math.floor(Math.random() * 2) ? "X" : "O";
  }

  update(i, j) {
    this.board[i][j] = this.turn;
    this.turn = this.turn == "X" ? "O" : "X";
    this.win = this.checkWin();
    this.draw();
  }

  checkWin() {
    // horizontal
    for (const row of this.board) {
      if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
        return true;
      }
    }
    // vertical
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] && this.board[0][i] !== ""
      ) {
        return true;
      }
    }
    // fucking diagonal
    // doing that shit manually
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] && this.board[0][0] !== ""
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] && this.board[0][2] !== ""
    ) {
      return true;
    }
    return false;
  }

  draw() {
    this.container.innerHTML = `<h2>${this.win ? "GAME OVER" : this.turn + "'s go!"
      }</h2>`;
    for (let i = 0; i < 3; i++) {
      const gameRow = document.createElement("div");
      gameRow.classList.add("gameRow");

      for (let j = 0; j < 3; j++) {
        const gameItem = document.createElement("div");
        gameItem.textContent = this.board[i][j];
        gameItem.classList.add("gameItem");
        if (this.board[i][j] === "" && !this.win) {
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
