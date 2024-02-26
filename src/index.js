function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";

  for (let row = 8; row > 0; row--) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    // rowDiv.
    for (let column = 0; column < 8; column++) {
      const square = document.createElement("div");
      square.className = "square";
      // assign each square a unique id
      square.id = `square-${String.fromCharCode(column + 97)}${row}`;
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

function initialBoardPositions() {
  let whitePawns = Array(8)
    .fill()
    .map(() => new Pawn("white", document.createElement("img")));

  let counter = 97;

  whitePawns.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}2`
    );
    square.appendChild(element.figureImage);
    counter += 1;
  });

  for (let i = 97; i < 105; i++) {
    whitePawns[i - 97] = new Pawn("white", document.createElement("img"));
    let square = document.getElementById(`square-c${i - 97}`);
  }
}

initialBoardPositions();

// TODO: ADD WHO'S TURN
