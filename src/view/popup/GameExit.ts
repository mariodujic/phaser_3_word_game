import {screenHeight, screenWidth} from "../../main";
import {BusinessViewManager} from "../../business/BusinessViewManager";
import {Round} from "../../business/Round";
import {InternalStorage} from "../../service/InternalStorage";
import {FirebaseDatabase} from "../../database/FirebaseDatabase";
import {Constants} from "../../utils/Constants";
import {UsernameInput} from "../dom/UsernameInput";

export class GameExit {

  private scene: Phaser.Scene;
  private newRound: Round;

  // Buttons
  private yesBtn: Phaser.GameObjects.Sprite;
  private noBtn: Phaser.GameObjects.Sprite;

  private popupBackground: Phaser.GameObjects.Sprite;
  private screenBackground: Phaser.GameObjects.Graphics;
  private container: Phaser.GameObjects.Container;


  constructor(scene: Phaser.Scene, newRound: Round) {
    this.scene = scene;
    this.newRound = newRound;
    this.newRound.viewBehaviour.disableInteractiveView();
  }

  public showPopup() {
    this.generateScreenDarkener();
    this.generateContainer();
    this.generateBackground();
    this.generateButtons();
  }

  public destroyPopup() {
    this.popupBackground.destroy();
    this.screenBackground.destroy();
    this.container.destroy();
    this.yesBtn.destroy();
    this.noBtn.destroy();

    this.popupBackground = null;
    this.screenBackground = null;
    this.container = null;
    this.yesBtn = null;
    this.noBtn = null;

    this.newRound.viewBehaviour.enableInteractiveView();
  }

  //Generation
  private generateContainer() {
    this.container = this.scene.add.container(screenWidth() / 2, screenHeight() / 2);
  }

  private generateBackground() {
    this.popupBackground = this.scene.add.sprite(0, 0, 'game_menu_dialog_background');
    this.popupBackground.setDisplaySize(screenWidth()*0.8, screenWidth()*0.38);
    this.container.add(this.popupBackground);
  }

  private generateScreenDarkener() {
    this.screenBackground = this.scene.add.graphics();
    this.screenBackground.fillStyle(0x000000, 0.7);
    // @ts-ignore
    this.screenBackground.fillRoundedRect(0, 0, screenWidth(), screenHeight());

    this.screenBackground.setInteractive(new Phaser.Geom.Rectangle(0, 0, screenWidth(), screenHeight()), Phaser.Geom.Rectangle.Contains);
    this.screenBackground.on('pointerdown', () => {
      this.destroyPopup();
    });
  }

  private generateButtons() {
    this.yesBtn = this.scene.add.sprite(0, 0, 'menu_yes_btn');
    this.noBtn = this.scene.add.sprite(0, 0, 'menu_no_btn');

    this.yesBtn.setDisplaySize(screenWidth()/7, screenWidth()/7);
    this.noBtn.setDisplaySize(screenWidth()/7, screenWidth()/7);

    this.yesBtn.setInteractive();
    this.noBtn.setInteractive();

    this.container.add(this.yesBtn);
    this.container.add(this.noBtn);

    this.yesBtn.setOrigin(-0.5, -1.5);
    this.noBtn.setOrigin(1.5, -1.5);


    this.yesBtn.on('pointerdown', () => {
// Storing score if it's higher then previous.
      let internalStorage = new InternalStorage();
      internalStorage.storeBestScore(this.newRound.scoreController.fetchScore());
      internalStorage = null;
      this.destroyPopup();
      this.newRound.items.music.destroy();
      this.newRound.timerController.stopTimer();
      // No need to destroy GameScene. If user rejoins game, views are not recreated
      BusinessViewManager.playedCharacters = [];
      this.newRound.scene.scene.start('MainMenuScene');
      var usernameInput = new UsernameInput();
      usernameInput.updateScore();
      usernameInput = null
    });

    this.noBtn.on('pointerdown', () => {
      this.destroyPopup();
    });
  }

}
