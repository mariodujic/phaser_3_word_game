import {Round} from "../../business/Round";

export class KeyboardController {

  private readonly newRound: Round;

  constructor(newRound: Round) {
    this.newRound = newRound;
  }

  public pressed(character) {

    this.newRound.inputCharacter = character.toLowerCase();

    for (let i = 0; i < this.newRound.items.keyButtons.length; i++) {
      if (this.newRound.items.keyButtons[i].text.toLowerCase() === this.newRound.inputCharacter) {
        this.newRound.items.keyButtons[i].setColor("#81A312");
        this.newRound.items.keyButtons[i].setScale(1.5, 1.5);
      } else {
        this.newRound.items.keyButtons[i].setColor("#ffffff");
        this.newRound.items.keyButtons[i].setScale(1, 1);
      }
    }
  }
}
