class Piece {
  constructor(type, color, figureImage) {
    this.type = type; // rook, bishop, etc.
    this.color = color; // black or white
    this.location = this.location; // square
    this.isFirstMove = this.isFirstMove; // for castling, pawn 2 square and en passant
    this.isChecked = this.isChecked; // for king

    const imgObject = document.createElement("img");
    imgObject.classList = "figure-img";
    imgObject.src = figureImage;
    this.figureImage = imgObject;
  }
  move() {
    //TODO: DEFINE MOVE
  }
}

class Pawn extends Piece {
  constructor(color, figureImage) {
    super("pawn", color, figureImage);

    this.type = "pawn";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_pawn.png")
      : (this.figureImage.src = "./assets/img/white_pawn.png");

    this.pointsWorth = 1;
  }
}

class Rook extends Piece {
  constructor(color, figureImage) {
    super("rook", color, figureImage);

    this.type = "castle";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_rook.png")
      : (this.figureImage.src = "./assets/img/white_rook.png");

    this.pointsWorth = 5;
  }
}

class Knight extends Piece {
  constructor(color, figureImage) {
    super("knight", color, figureImage);

    this.type = "knight";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_knight.png")
      : (this.figureImage.src = "./assets/img/white_knight.png");

    this.pointsWorth = 3;
  }
}

class Bishop extends Piece {
  constructor(color, figureImage) {
    super("bishop", color, figureImage);

    this.type = "bishop";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_bishop.png")
      : (this.figureImage.src = "./assets/img/white_bishop.png");

    this.pointsWorth = 3;
  }
}

class Queen extends Piece {
  constructor(color, figureImage) {
    super("queen", color, figureImage);

    this.type = "queen";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_queen.png")
      : (this.figureImage.src = "./assets/img/white_queen.png");

    this.pointsWorth = 9;
  }
}

class King extends Piece {
  constructor(color, figureImage) {
    super("king", color, figureImage);

    this.type = "king";
    this.color === "black"
      ? (this.figureImage.src = "./assets/img/black_king.png")
      : (this.figureImage.src = "./assets/img/white_king.png");
  }
}
