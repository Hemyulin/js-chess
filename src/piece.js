let selectedPiece = null;

class Piece {
  constructor(type, color, figureImage, location) {
    this.type = type; // rook, bishop, etc.
    this.color = color; // black or white
    this.location = location; // square id

    const imgObject = document.createElement("img");
    imgObject.classList = "figure-img";
    imgObject.src = figureImage;
    this.figureImage = imgObject;

    this.figureImage.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedPiece = this;
      console.log("Selected Piece...", selectedPiece);
    });
  }
  move() {
    //TODO: DEFINE MOVE
  }
  capture() {
    // TODO: DEFINE CAPTURE
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
