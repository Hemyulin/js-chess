class Game {
  constructor() {
    this.currentTurn = "white";
  }
  switchTurn() {
    this.currentTurn = this.currentTurn === "white" ? "black" : "white";
  }
}
