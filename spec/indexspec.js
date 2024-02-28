describe("Game Initialization", function () {
  it("should initialize the game board when the start button is clicked", function () {
    startGame();
    const boardDiv = document.querySelector(".chess-board");
    expect(boardDiv.style.display).toEqual("flex");
  });
});
