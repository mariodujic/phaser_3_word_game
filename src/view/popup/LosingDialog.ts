import {Round} from "../../business/Round";
import {Style} from "../Style";
import MainMenuScene from "../scenes/MainMenu";
import {screenHeight, screenWidth} from "../../main";
import {Constants} from "../../utils/Constants";
import {BusinessViewManager} from "../../business/BusinessViewManager";
import {Globals} from "../../utils/Globals";
import {Config} from "../../config/Config";
import {UsernameInput} from "../dom/UsernameInput";
import {InternalStorage} from "../../service/InternalStorage";

export class LosingDialog {

  /**
   * This popup views are dynamically created and upon closing dialog,
   * they will be destroyed.
   * User picks will he go main menu or repeat game.
   */

  private newRound: Round;

  private playAgainBtn: Phaser.GameObjects.Sprite;
  private playAgainText: Phaser.GameObjects.Text;
  private playAgainContainer: Phaser.GameObjects.Container;

  private returnToMainMenuBtn: Phaser.GameObjects.Sprite;
  private returnToMainMenuText: Phaser.GameObjects.Text;
  private returnToMainMenuContainer: Phaser.GameObjects.Container;

  private usernameInput: UsernameInput;

  private btnContainer: Phaser.GameObjects.Container;

  private backgroundImg: Phaser.GameObjects.Sprite;
  private losingScreenContainer: Phaser.GameObjects.Container;
  private scoreMessage: Phaser.GameObjects.Text;
  private scoreNumber: Phaser.GameObjects.Text;

  constructor(newRound: Round) {
    this.newRound = newRound;
    this.usernameInput = new UsernameInput();
  }

  public show(): void {

    // Text
    this.scoreMessage = this.newRound.scene.add.text(0, 0, "Your score:", Style.scoreMessage());
    this.scoreMessage.setShadow(0, 4, Constants.colors("black"), 2, true, true);

    this.scoreNumber = this.newRound.scene.add.text(0, 0, "10",
      Style.general(true, screenWidth() / 9, Config.MAIN_FONTS, Constants.colors("clean_white")));
    this.scoreNumber.setShadow(0, 4, Constants.colors("black"), 2, true, true);
    this.scoreNumber.setText(Globals.score);

    // Buttons
    this.playAgainBtn = this.newRound.scene.add.sprite(0, 0, 'losing_popup_repeat_btn');
    this.playAgainBtn.setDisplaySize(screenWidth() / 3.3, screenWidth() / 5.5);
    this.playAgainBtn.setInteractive();
    this.playAgainText = this.newRound.scene.add.text(0, 0, "REPEAT",
      Style.general(true, screenWidth() / 18, Config.SIDE_MENU_FONTS, Constants.colors("clean_white")));
    this.playAgainText.setShadow(0, 4, Constants.colors("black"), 2, true, true);
    this.playAgainContainer = this.newRound.scene.add.container(screenWidth() * 0.20, screenWidth() * 0.05);
    this.playAgainContainer.add(this.playAgainBtn);
    this.playAgainContainer.add(this.playAgainText);
    this.playAgainText.setOrigin(0.5, 0.5);

    this.returnToMainMenuBtn = this.newRound.scene.add.sprite(0, 0, 'losing_popup_menu_btn');
    this.returnToMainMenuBtn.setDisplaySize(screenWidth() / 3.3, screenWidth() / 5.5);
    this.returnToMainMenuBtn.setInteractive();
    this.returnToMainMenuText = this.newRound.scene.add.text(0, 0, "MENU",
      Style.general(true, screenWidth() / 18, Config.SIDE_MENU_FONTS, Constants.colors("clean_white")));
    this.returnToMainMenuText.setShadow(0, 4, Constants.colors("black"), 2, true, true);
    this.returnToMainMenuContainer = this.newRound.scene.add.container(screenWidth() * -0.20, screenWidth() * 0.05);
    this.returnToMainMenuContainer.add(this.returnToMainMenuBtn);
    this.returnToMainMenuContainer.add(this.returnToMainMenuText);
    this.returnToMainMenuText.setOrigin(0.5, 0.5);

    // Images
    this.backgroundImg = this.newRound.scene.add.sprite(0, -screenWidth() / 20, 'losing_popup_flag');
    this.backgroundImg.setDisplaySize(screenWidth() * 0.8, screenWidth() * 0.35);


    this.losingScreenContainer = this.newRound.scene.add.container(0, 0);
    this.losingScreenContainer.add(this.backgroundImg);
    this.losingScreenContainer.add(this.scoreMessage);
    this.losingScreenContainer.add(this.scoreNumber);
    this.losingScreenContainer.setPosition(
      screenWidth() / 2 - this.losingScreenContainer.width / 2,
      screenHeight() / 2.7 - this.losingScreenContainer.height / 2);

    this.scoreMessage.setOrigin(0.5, -2.5);
    this.scoreNumber.setOrigin(0.5, -1.95);


    // Containers
    this.btnContainer = this.newRound.scene.add.container(
      screenWidth() / 2,
      this.losingScreenContainer.y + this.scoreNumber.height * 4);
    this.btnContainer.add(this.returnToMainMenuContainer);
    this.btnContainer.add(this.playAgainContainer);


    this.playAgainBtn.on('pointerdown', () => {
      this.newRound.restartRound();
      this.destroy();
    });

    this.returnToMainMenuBtn.on('pointerdown', () => {
      // Destroying popup views that were dynamically created
      this.destroy();
      this.newRound.items.music.destroy();
      // todo check if this belongs to a better class
      BusinessViewManager.playedCharacters = [];
      // No need to destroy GameScene. If user rejoins game, views are not recreated
      this.newRound.scene.scene.start('MainMenuScene');


    });

    this.showUsernameInput();
  }

  // Destroying popup views
  private destroy(): void {
    this.playAgainBtn.destroy();
    this.playAgainText.destroy();
    this.playAgainContainer.destroy();
    this.returnToMainMenuBtn.destroy();
    this.returnToMainMenuText.destroy();
    this.returnToMainMenuContainer.destroy();
    this.backgroundImg.destroy();
    this.losingScreenContainer.destroy();
    this.scoreMessage.destroy();
    this.scoreNumber.destroy();
    this.btnContainer.destroy();

    this.hideUsernameInput();
  }

  private showUsernameInput() {
    console.log(InternalStorage.loadData(Constants.REF_USERNAME));
    // If user does not have username, html dom element will pop up too.
    if (InternalStorage.loadData(Constants.REF_USERNAME) === null) {
      this.usernameInput.inputFieldVisibility(true);
    }
  }

  private hideUsernameInput() {
    if (this.usernameInput.inputField.value !== "") {
      InternalStorage.storeData(Constants.REF_USERNAME, this.usernameInput.inputField.value)
      this.usernameInput.resetInputFieldValue();
    }

    this.usernameInput.inputFieldVisibility(false);
  }
}
