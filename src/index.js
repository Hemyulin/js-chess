function createChessBoard() {
  const board = document.createElement("div");
  board.className = "board";

  for (let row = 0; row < 8; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let column = 0; column < 8; column++) {
      const columnDiv = document.createElement(div);
      columnDiv.className = column;
    }
  }
}

createChessBoard();
