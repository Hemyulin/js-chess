class Piece {
  constructor(
    type, // rook, bishop, etc.
    color,
    figureImage
  ) {
    this.type = type; // rook, bishop, etc.
    this.color = color; // black or white
    this.location = this.location; // square
    this.pointsWorth = pointsWorth; // <-- UNSURE
    this.isFirstMove = this.isFirstMove; // for castling, pawn 2 square and en passant
    this.isChecked = this.isChecked; // for king

    const imgObject = document.createElement("img");
    imgObject.classList = "figure-img";
    this.figureImage = imgObject;
  }
  move() {
    //TODO: DEFINE MOVE
  }
}

class Pawn extends Piece {
  constructor(color, figureImage) {
    super(type, color, figureImage);

    this.type = pawn;
    this.color === "black"
      ? (figureImage.src = "./assets/img/black_pawn")
      : (figureImage.src = "./assets/img/white_pawn");
  }
}

class Castle extends Piece {
  constructor(type, color, figureImage) {
    super(type, color, figureImage);
  }
}

class Knight extends Piece {
  constructor(type, color, figureImage) {
    super(type, color, figureImage);
  }
}

class Rook extends Piece {
  constructor(type, color, figureImage) {
    super(type, color, figureImage);
  }
}

class Queen extends Piece {
  constructor(type, color, figureImage) {
    super(type, color, figureImage);
  }
}

class King extends Piece {
  constructor(type, color, figureImage) {
    super(type, color, figureImage);
  }
}

// TODO: ADD REST OF PIECES

const whatever = [1, 2, 3, 4, 5, 6, 7, 8];
