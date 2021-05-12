import {Conditions} from "../business/Conditions";
import {Round} from "../business/Round";
import {HealthbarController} from "./HealthbarController";
import {TimerController} from "./timer/TimerController";
import {Globals} from "../utils/Globals";
import {ExtraItemDrops} from "../business/ExtraItemDrops";
import {Constants} from "../utils/Constants";
import {Popup} from "../view/popup/Popup";

export class PlayBtnController {

  private readonly scene: Phaser.Scene;
  private newRound: Round;
  private healthBarController: HealthbarController;
  private timerController: TimerController;

  constructor(scene: Phaser.Scene, newRound: Round) {
    this.scene = scene;
    this.newRound = newRound;
    this.healthBarController = this.newRound.healthBarController;
    this.timerController = this.newRound.timerController;
  }

  onClick(unclickedSword: string, unclickedShield: string): void {

    // After round finish, to start a round it requires user to press a play button
    // This logic has been placed in onClick button function, even tho it's quite simple
    // This logic has been placed here primarily cause of the extra time item. If user clicks
    // on extra time item, countdown continues right away cause of the way TimeBusiness itself is
    // programmed.
    // todo Consider changing TimeBusiness class in order for countdown to semi asychronously fetch view number. con:memory pro:logic
    if (Globals.isRoundOver) {
      Globals.isRoundOver = false;
    }

    if (this.newRound.inputCharacter !== undefined) {
      // Setting a ground for all the functions that are based on these 2 booleans
      Conditions.wordBusinessContainsLetter(this.newRound.inputCharacter, this.newRound.getWordBusiness());
      Conditions.isLetterPlayed(this.newRound.inputCharacter, this.newRound.items.wordBusinessView.text);
      // Some of the synchronous controllers upon pressing play button
      this.healthBarController.manageHealthbar();
      this.newRound.items.wordBusinessView.setText(this.newRound.businessViewManager.newWordViewState());
      // Setting a ground for all the functions that are based on these 2 booleans
      // There is a chance a user will be able to get a random drop if letter hasn't been already played
      if (!Conditions.isLetterAlreadyPlayed) {
        new ExtraItemDrops(this.newRound).randomizeItemDrop();
      }
      // Increasing and decreasing score value depending on a user input
      this.newRound.scoreController.scoreManager();
      this.newRound.soundController.soundEffectsManager();
      this.newRound.weaponController.weaponManagement(unclickedSword, unclickedShield);
    } else {
      Popup.show(this.scene, Constants.MESSAGE_SELECT_LETTER, Constants.colors("red"), "middle");
    }

  }
}
