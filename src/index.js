function welcomeScreen() {
  const welcomeScreenDiv = document.createElement("div");
  welcomeScreenDiv.className = "welcome-screen";
  welcomeScreenDiv.style.display = "flex";

  const h1Title = document.createElement("h1");
  h1Title.innerText = "LET'S CHESS";
  welcomeScreenDiv.appendChild(h1Title);

  const startButton = document.createElement("button");
  startButton.innerText = "START NOW";
  startButton.addEventListener("click", () => startGame());
  welcomeScreenDiv.appendChild(startButton);
  document.body.appendChild(welcomeScreenDiv);
}

welcomeScreen();

function startGame() {
  const welcomeScreenDiv = document.querySelector(".welcome-screen");
  const boardDiv = document.querySelector(".chess-board");
  if (welcomeScreenDiv && boardDiv) {
    welcomeScreenDiv.style.display = "none";
    boardDiv.style.display = "flex";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";

    const winButton = new WinButton("CLICK TO WIN", "winButtonId");
    winButton.buttonElement.id = "winButtonId";
    buttonsDiv.appendChild(winButton.buttonElement);

    const loseButton = new LoseButton("CLICK TO LOSE", "loseButtonId");
    loseButton.buttonElement.id = "loseButtonId";
    buttonsDiv.appendChild(loseButton.buttonElement);
    buttonsDiv.appendChild(loseButton.buttonElement);

    document.body.appendChild(buttonsDiv);
  }
}

function createChessBoard() {
  const board = document.createElement("div");
  board.className = "chess-board";
  board.style.display = "none";

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

// NEW, REFORMATED AND SO MUCH MORE AWESOME WAY TO WRITE THIS

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

function endScreen() {
  const endScreenDiv = document.createElement("div");
  endScreenDiv.className = "end-screen";
  endScreenDiv.style.display = "none";

  const h1Title = document.createElement("h1");
  h1Title.innerText = "GAME OVER";
  endScreenDiv.appendChild(h1Title);

  const playAgainButton = new PlayAgainButton(
    "PLAY AGAIN",
    "playAgainButtonId"
  );

  endScreenDiv.appendChild(playAgainButton.buttonElement);
  document.body.appendChild(endScreenDiv);
}

endScreen();

function endGame() {
  const endScreenDiv = document.querySelector(".end-screen");
  const boardDiv = document.querySelector(".chess-board");
  const winButtonDiv = document.getElementById("winButtonId");
  const loseButtonDiv = document.getElementById("loseButtonId");
  const playAgainButtonDiv = document.getElementById("playAgainButtonId");
  if (endScreenDiv && boardDiv) {
    endScreenDiv.style.display = "flex";
    boardDiv.style.display = "none";
    if (winButtonDiv) winButtonDiv.style.display = "none";
    if (loseButtonDiv) loseButtonDiv.style.display = "none";
    if (playAgainButtonDiv) playAgainButtonDiv.style.display = "flex";
  }
}

function restartGame() {
  location.reload();
}
