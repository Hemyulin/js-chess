class Piece {
  constructor() {
    this.type = type; // rook, bishop, etc.
    this.color = color; // black or white
    this.location = this.location; // square
    this.pointsWorth = pointsWorth; // <-- UNSURE
    this.isFirstMove = this.isFirstMove; // for castling, pawn 2 square and en passant
    this.isChecked = this.isChecked; // for king
  }
  move() {
    //TODO: DEFINE MOVE
  }
}

class Pawn extends Piece {}

// TODO: ADD REST OF PIECES

const whatever = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(typeof whatever[2]);
