function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";

  for (let row = 0; row < 8; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    // rowDiv.
    for (let column = 0; column < 8; column++) {
      const square = document.createElement("div");
      square.className = "square";
      square.innerText = `col${column + 1} row${row + 1}`;
      if ((row + column) % 2 === 0) {
        square.classList.add("light");
      } else {
        square.classList.add("dark");
      }

      rowDiv.appendChild(square);
    }
    board.appendChild(rowDiv);
  }
  document.body.appendChild(board);
}

createChessBoard();

// TODO: ADD WHO'S TURN

let whitePawns = Array(8)
  .fill()
  .map(() => new Pawn("white", document.createElement("img")));

console.log(whitePawns);
