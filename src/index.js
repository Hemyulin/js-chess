function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";

  for (let row = 8; row > 0; row--) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

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

// NEW

function createPiece(type, color) {
  return new type(color, document.createElement("img"));
}

function placePieces(pieces, positions) {
  pieces.forEach((piece, i) => {
    let square = document.getElementById(positions[i]);
    square.appendChild(piece.figureImage);
  });
}

const initialPositions = {
  whitePawns: Array(8)
    .fill()
    .map((_, i) => `square-${String.fromCharCode(i + 97)}2`),
  blackPawns: Array(8)
    .fill()
    .map((_, i) => `square-${String.fromCharCode(i + 97)}7`),
  whiteRooks: ["square-a1", "square-h1"],
  blackRooks: ["square-a8", "square-h8"],
  whiteKnights: ["square-b1", "square-g1"],
  blackKnights: ["square-b8", "square-g8"],
  whiteBishops: ["square-c1", "square-f1"],
  blackBishops: ["square-c8", "square-f8"],
  whiteQueen: ["square-d1"],
  blackQueen: ["square-d8"],
  whiteKing: ["square-e1"],
  blackKing: ["square-e8"],
};

const whitePawns = Array(8)
  .fill()
  .map(() => createPiece(Pawn, "white"));
const blackPawns = Array(8)
  .fill()
  .map(() => createPiece(Pawn, "black"));
const whiteRooks = Array(2)
  .fill()
  .map(() => createPiece(Rook, "white"));
const blackRooks = Array(2)
  .fill()
  .map(() => createPiece(Rook, "black"));
const whiteKnights = Array(2)
  .fill()
  .map(() => createPiece(Knight, "white"));
const blackKnights = Array(2)
  .fill()
  .map(() => createPiece(Knight, "black"));
const whiteBishops = Array(2)
  .fill()
  .map(() => createPiece(Bishop, "white"));
const blackBishops = Array(2)
  .fill()
  .map(() => createPiece(Bishop, "black"));
const whiteQueen = [createPiece(Queen, "white")];
const blackQueen = [createPiece(Queen, "black")];
const whiteKing = [createPiece(King, "white")];
const blackKing = [createPiece(King, "black")];

placePieces(whitePawns, initialPositions.whitePawns);
placePieces(blackPawns, initialPositions.blackPawns);
placePieces(whiteRooks, initialPositions.whiteRooks);
placePieces(blackRooks, initialPositions.blackRooks);
placePieces(whiteKnights, initialPositions.whiteKnights);
placePieces(blackKnights, initialPositions.blackKnights);
placePieces(whiteBishops, initialPositions.whiteBishops);
placePieces(blackBishops, initialPositions.blackBishops);
placePieces(whiteQueen, initialPositions.whiteQueen);
placePieces(blackQueen, initialPositions.blackQueen);
placePieces(whiteKing, initialPositions.whiteKing);
placePieces(blackKing, initialPositions.blackKing);

// OLD AND BAD AND TOTALLY WET CODE
// IT STAYS HERE SO I CAN PRESENT IT TO THE CLASS
// AND LAUGH AT THE N00BNESS

// function initialWhitePawnPositions() {
//   let whitePawns = Array(8)
//     .fill()
//     .map(() => new Pawn("white", document.createElement("img")));

//   let counter = 97;

//   whitePawns.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}2`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 1;
//   });
// }

// function initialBlackPawnPositions() {
//   let whitePawns = Array(8)
//     .fill()
//     .map(() => new Pawn("black", document.createElement("img")));

//   let counter = 97;

//   whitePawns.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}7`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 1;
//   });
// }

// function initialWhiteRookPositions() {
//   let whiteRook = Array(2)
//     .fill()
//     .map(() => new Rook("white", document.createElement("img")));

//   let counter = 97;

//   whiteRook.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}1`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 7;
//   });
// }

// function initialBlackRookPositions() {
//   let blackRook = Array(2)
//     .fill()
//     .map(() => new Rook("black", document.createElement("img")));

//   let counter = 97;

//   blackRook.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}8`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 7;
//   });
// }

// function initialWhiteKightPositions() {
//   let whiteKnight = Array(2)
//     .fill()
//     .map(() => new Knight("white", document.createElement("img")));

//   let counter = 98;

//   whiteKnight.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}1`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 5;
//   });
// }

// function initialBlackKightPositions() {
//   let blackKnight = Array(2)
//     .fill()
//     .map(() => new Knight("black", document.createElement("img")));

//   let counter = 98;

//   blackKnight.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}8`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 5;
//   });
// }

// function initialWhiteBishopPositions() {
//   let whiteBishop = Array(2)
//     .fill()
//     .map(() => new Bishop("white", document.createElement("img")));

//   let counter = 99;

//   whiteBishop.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}1`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 3;
//   });
// }

// function initialBlackBishopPositions() {
//   let blackBishop = Array(2)
//     .fill()
//     .map(() => new Bishop("black", document.createElement("img")));

//   let counter = 99;

//   blackBishop.forEach((element) => {
//     let square = document.getElementById(
//       `square-${String.fromCharCode(counter)}8`
//     );
//     element.location = square;
//     square.appendChild(element.figureImage);
//     counter += 3;
//   });
// }

// function initialWhiteQueenPositions() {
//   let whiteQueen = new Queen("white", document.createElement("img"));
//   let square = document.getElementById(`square-d1`);
//   whiteQueen.location = square;
//   square.appendChild(whiteQueen.figureImage);
// }

// function initialBlackQueenPositions() {
//   let blackQueen = new Queen("black", document.createElement("img"));
//   let square = document.getElementById(`square-d8`);
//   blackQueen.location = square;
//   square.appendChild(blackQueen.figureImage);
// }

// function initialWhiteKingPositions() {
//   let whiteKing = new King("white", document.createElement("img"));
//   let square = document.getElementById(`square-e1`);
//   whiteKing.location = square;
//   square.appendChild(whiteKing.figureImage);
// }

// function initialBlackKingPositions() {
//   let blackKing = new King("black", document.createElement("img"));
//   let square = document.getElementById(`square-e8`);
//   blackKing.location = square;
//   square.appendChild(blackKing.figureImage);
// }

// function initialWhitePositions() {
//   initialWhitePawnPositions();
//   initialWhiteRookPositions();
//   initialWhiteKightPositions();
//   initialWhiteBishopPositions();
//   initialWhiteQueenPositions();
//   initialWhiteKingPositions();
// }

// function initialBlackPositions() {
//   initialBlackPawnPositions();
//   initialBlackRookPositions();
//   initialBlackKightPositions();
//   initialBlackBishopPositions();
//   initialBlackQueenPositions();
//   initialBlackKingPositions();
// }

// function initialBoardPositions() {
//   initialWhitePositions();
//   initialBlackPositions();
// }

// initialBoardPositions();

// TODO: ADD WHO'S TURN
