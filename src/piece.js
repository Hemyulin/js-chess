let selectedPiece = null;

class Piece {
  constructor(type, color, figureImage, location) {
    this.type = type; // rook, bishop, etc.
    this.color = color; // black or white
    this.location = location; // square id
    this.isCaptured = false;

    const imgObject = document.createElement("img");
    imgObject.classList = "figure-img";
    imgObject.src = figureImage;
    this.figureImage = imgObject;
    this.figureImage.pieceRef = this;

    this.figureImage.addEventListener("click", (e) => {
      e.stopPropagation();
      if (selectedPiece) {
        if (selectedPiece.color === this.color) {
          console.log("SAME PIECE COLOR");

          selectedPiece.figureImage.classList.remove("selected");
          selectedPiece = null;
        } else {
          selectedPiece.figureImage.classList.remove("selected"); //
          selectedPiece.move(this.location);
        }
      } else {
        selectedPiece = this;
        this.figureImage.classList.add("selected");
      }
    });
  }
  move(newLocation) {
    const oldSquare = document.getElementById(this.location);
    const newSquare = document.getElementById(newLocation);

    let capturedPiece = null;

    if (newSquare && newSquare.childNodes.length > 0) {
      for (let node of newSquare.childNodes) {
        if (node.pieceRef && node.pieceRef.color !== this.color) {
          console.log("CAPTURING PIECE");
          node.pieceRef.isCaptured = true;
          capturedPiece = node.pieceRef;
          newSquare.removeChild(node);
          break;
        }
      }
    }
    if (this.figureImage.classList.contains("selected")) {
      this.figureImage.classList.remove("selected");
    }

    if (
      capturedPiece &&
      capturedPiece.type === "king" &&
      capturedPiece.color === "white"
    ) {
      console.log("GAME OVER MAN GAME OVER");
      endGame("BLACK WINS!");
    } else if (
      capturedPiece &&
      capturedPiece.type === "king" &&
      capturedPiece.color === "black"
    ) {
      console.log("GAME OVER MAN GAME OVER");
      endGame("WHITE WINS!");
    }

    if (oldSquare.contains(this.figureImage)) {
      oldSquare.removeChild(this.figureImage);
    }
    newSquare.appendChild(this.figureImage);
    this.location = newLocation;
    selectedPiece = null;
  }
}

class Pawn extends Piece {
  constructor(color, figureImage, location) {
    super("pawn", color, figureImage, location);

    this.type = "pawn";
    this.isFirstMove = true;
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_pawn.png")
      : (this.figureImage.src = "./assets/img/white_pawn.png");

    this.pointsWorth = 1;
  }
}

class Rook extends Piece {
  constructor(color, figureImage, location) {
    super("rook", color, figureImage, location);

    this.type = "castle";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_rook.png")
      : (this.figureImage.src = "./assets/img/white_rook.png");

    this.pointsWorth = 5;
  }
}

class Knight extends Piece {
  constructor(color, figureImage, location) {
    super("knight", color, figureImage, location);

    this.type = "knight";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_knight.png")
      : (this.figureImage.src = "./assets/img/white_knight.png");

    this.pointsWorth = 3;
  }
}

class Bishop extends Piece {
  constructor(color, figureImage, location) {
    super("bishop", color, figureImage, location);

    this.type = "bishop";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_bishop.png")
      : (this.figureImage.src = "./assets/img/white_bishop.png");

    this.pointsWorth = 3;
  }
}

class Queen extends Piece {
  constructor(color, figureImage, location) {
    super("queen", color, figureImage, location);

    this.type = "queen";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_queen.png")
      : (this.figureImage.src = "./assets/img/white_queen.png");

    this.pointsWorth = 9;
  }
}

class King extends Piece {
  constructor(color, figureImage, location) {
    super("king", color, figureImage, location);

    this.isFirstMove = true;
    this.isChecked = this.isChecked;
    this.type = "king";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_king.png")
      : (this.figureImage.src = "./assets/img/white_king.png");
  }
}
