import {Globals} from "../utils/Globals";
import {Conditions} from "../business/Conditions";
import {Round} from "../business/Round";
import {BusinessViewManager} from "../business/BusinessViewManager";

export class ViewBehaviour {

  private newRound: Round;

  constructor(newRound: Round) {
    this.newRound = newRound;
  }

  public roundStartView() {
    Globals.healthSize = 5;
    Globals.swordAmount = 2;
    Globals.shieldAmount = 2;
    Globals.roundTime = 30;
    Globals.hasExtraItemAddTime = false;
    Globals.hasExtraItemRecoverHealth = false;
    Conditions.isShieldClicked = false;
    Conditions.isSwordClicked = false;
    this.newRound.items.swordAmountView.setText(Globals.swordAmount);
    this.newRound.items.shieldAmountView.setText(Globals.shieldAmount);
  }

  public restartRoundView() {
    BusinessViewManager.playedCharacters = [];
    this.newRound.keyboardController.pressed("");
    this.roundStartView();
    this.newRound.healthBarController.refreshHealthbarView();
    this.newRound.items.swordImage.setVisible(true);
    this.newRound.items.shieldImage.setVisible(true);
    this.newRound.items.playBtn.setVisible(true);
    this.newRound.items.wordDescriptionView.setVisible(true);
    this.newRound.items.wordBusinessView.setVisible(true);
    this.newRound.items.warningTextDisplay.setVisible(true);
    this.newRound.items.timerView.setVisible(true);
    this.newRound.items.scoreView.setVisible(true);
    this.newRound.items.shieldAmountView.setVisible(true);
    this.newRound.items.swordAmountView.setVisible(true);
    this.newRound.items.exitButton.setVisible(true);
    this.newRound.items.timerView.setText(Globals.roundTime.toString());
    this.newRound.items.wordBusinessView.setText(this.newRound.businessViewManager.newWordViewState());
    this.newRound.items.wordDescriptionView.setText(this.newRound.descriptionBusiness);
    for (const i in this.newRound.items.keyContainers) {
      this.newRound.items.keyContainers[i].setVisible(true);
    }
  }

  public roundEndView() {
    this.newRound.items.swordImage.setVisible(false);
    this.newRound.items.shieldImage.setVisible(false);
    this.newRound.items.playBtn.setVisible(false);
    this.newRound.items.wordDescriptionView.setVisible(false);
    this.newRound.items.timerView.setVisible(false);
    this.newRound.items.wordBusinessView.setText("");
    this.newRound.items.wordBusinessView.setVisible(false);
    this.newRound.items.warningTextDisplay.setVisible(false);
    this.newRound.items.scoreView.setVisible(false);
    this.newRound.items.shieldAmountView.setVisible(false);
    this.newRound.items.swordAmountView.setVisible(false);
    this.newRound.items.exitButton.setVisible(false);
    this.newRound.displayMessageController.eraseMessages();
    this.newRound.timerController.stopTimer();
    //this.newRound.items.totalScoreNmb.setText(Globals.score);
    this.newRound.inputCharacter = undefined;
    for (const i in this.newRound.items.keyContainers) {
      this.newRound.items.keyContainers[i].setVisible(false);
    }
    Globals.isRoundOver = true;
  }

  public disableInteractiveView() {
    this.newRound.items.exitButton.removeInteractive();
    this.newRound.items.playBtn.removeInteractive();
    this.newRound.items.swordImage.removeInteractive();
    this.newRound.items.shieldImage.removeInteractive();
  }

  public enableInteractiveView() {
    this.newRound.items.exitButton.setInteractive();
    this.newRound.items.playBtn.setInteractive();
    this.newRound.items.swordImage.setInteractive();
    this.newRound.items.shieldImage.setInteractive();
  }

}
