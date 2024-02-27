class Button {
  constructor(text, elementId, message) {
    this.text = text;
    this.elementId = elementId;
    this.message = message;
    this.buttonElement = document.createElement("button");
    this.buttonElement.innerText = this.text;
    this.buttonElement.addEventListener("click", () => {
      console.log(this.message);
    });
  }
}

// Currently StartButton isn't being used as I don't have the time to change the code to use it
class StartButton extends Button {
  constructor(text, elementId) {
    super(text, elementId, "Start button clicked");
  }
}

class WinButton extends Button {
  constructor(text, elementId) {
    super(text, elementId, "Win button clicked");
  }
}

class LoseButton extends Button {
  constructor(text, elementId) {
    super(text, elementId, "Lose button clicked");
  }
}
