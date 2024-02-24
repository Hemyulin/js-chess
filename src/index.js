function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";

  for (let row = 0; row < 8; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let column = 0; column < 8; column++) {
      const square = document.createElement("div");
      square.className = "square";
      if ((row + column) % 2 === 0) {
        square.classList.add("light");
      } else {
        square.classList.add("dark");
      }

      rowDiv.appendChild(square);
    }
    console.log("rowDiv");
    board.appendChild(rowDiv);
  }
  document.body.appendChild(board);
  console.log(board);
}

createChessBoard();

// TODO: ADD WHO'S TURN
