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

function initialWhitePawnPositions() {
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
}

function initialBlackPawnPositions() {
  let whitePawns = Array(8)
    .fill()
    .map(() => new Pawn("black", document.createElement("img")));

  let counter = 97;

  whitePawns.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}7`
    );
    square.appendChild(element.figureImage);
    counter += 1;
  });
}

function initialWhiteRookPositions() {
  let whiteRook = Array(2)
    .fill()
    .map(() => new Rook("white", document.createElement("img")));

  let counter = 97;

  whiteRook.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}1`
    );
    square.appendChild(element.figureImage);
    counter += 7;
  });
}

function initialBlackRookPositions() {
  let blackRook = Array(2)
    .fill()
    .map(() => new Rook("black", document.createElement("img")));

  let counter = 97;

  blackRook.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}8`
    );
    square.appendChild(element.figureImage);
    counter += 7;
  });
}

function initialWhiteKightPositions() {
  let whiteKnight = Array(2)
    .fill()
    .map(() => new Knight("white", document.createElement("img")));

  let counter = 98;

  whiteKnight.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}1`
    );
    square.appendChild(element.figureImage);
    counter += 5;
  });
}

function initialBlackKightPositions() {
  let blackKnight = Array(2)
    .fill()
    .map(() => new Knight("black", document.createElement("img")));

  let counter = 98;

  blackKnight.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}8`
    );
    square.appendChild(element.figureImage);
    counter += 5;
  });
}

function initialWhiteBishopPositions() {
  let whiteBishop = Array(2)
    .fill()
    .map(() => new Bishop("white", document.createElement("img")));

  let counter = 99;

  whiteBishop.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}1`
    );
    square.appendChild(element.figureImage);
    counter += 3;
  });
}

function initialBlackBishopPositions() {
  let blackBishop = Array(2)
    .fill()
    .map(() => new Bishop("black", document.createElement("img")));

  let counter = 99;

  blackBishop.forEach((element) => {
    let square = document.getElementById(
      `square-${String.fromCharCode(counter)}8`
    );
    square.appendChild(element.figureImage);
    counter += 3;
  });
}

function initialWhiteQueenPositions() {
  let whiteQueen = new Queen("white", document.createElement("img"));
  let square = document.getElementById(`square-d1`);
  square.appendChild(whiteQueen.figureImage);
}

function initialBlackQueenPositions() {
  let blackQueen = new Queen("black", document.createElement("img"));
  let square = document.getElementById(`square-d8`);
  square.appendChild(blackQueen.figureImage);
}

function initialWhiteKingPositions() {
  let whiteKing = new King("white", document.createElement("img"));
  let square = document.getElementById(`square-e1`);
  square.appendChild(whiteKing.figureImage);
}

function initialBlackKingPositions() {
  let blackKing = new King("black", document.createElement("img"));
  let square = document.getElementById(`square-e8`);
  square.appendChild(blackKing.figureImage);
}

function initialWhitePositions() {
  initialWhitePawnPositions();
  initialWhiteRookPositions();
  initialWhiteKightPositions();
  initialWhiteBishopPositions();
  initialWhiteQueenPositions();
  initialWhiteKingPositions();
}

function initialBlackPositions() {
  initialBlackPawnPositions();
  initialBlackRookPositions();
  initialBlackKightPositions();
  initialBlackBishopPositions();
  initialBlackQueenPositions();
  initialBlackKingPositions();
}

function initialBoardPositions() {
  initialWhitePositions();
  initialBlackPositions();
}

initialBoardPositions();

// TODO: ADD WHO'S TURN
