function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";

  for (let row = 0; row < 8; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    console.log("rowDiv");
    board.appendChild(rowDiv);
  }
  document.body.appendChild(board);
  console.log(board);
}

createChessBoard();
console.log();
