import {Style} from "../Style";
import {screenHeight, screenWidth} from "../../main";
import {Config} from "../../config/Config";
import {Constants} from "../../utils/Constants";
import {InternalStorage} from "../../service/InternalStorage";
import {SceneTransition} from "../../service/SceneTransition";
import {Popup} from "../popup/Popup";
import {LoadingScreen} from "../popup/LoadingScreen";
import {UsernameInput} from "../dom/UsernameInput";
import {FirebaseDatabase} from "../../database/FirebaseDatabase";

export class OptionsScene extends Phaser.Scene {

  /* private _inputField: HTMLInputElement;*/
  private usernameInput: UsernameInput;

  constructor() {
    super({
      key: 'OptionsScene'
    });

    this.usernameInput = new UsernameInput();
    /*this._inputField = <HTMLInputElement>document.getElementById("username")*/
  }

  preload() {

    // While assets are being loaded
    LoadingScreen.show(this);

    this.load.image('options_logo', 'assets/images/options_logo.png');
    this.load.image('edit_btn', 'assets/images/edit_btn.png');
    this.load.image('save_btn', 'assets/images/save_btn.png');
  }

  create() {

    // Background
    const background = this.add.sprite(screenWidth(), screenHeight() / 2, 'background');
    background.alpha = 0.2;
    background.scaleX = screenHeight() / background.height;
    background.scaleY = screenHeight() / background.height;

    // Options logo
    const logo = this.add.sprite(0, 0, 'options_logo');
    logo.setPosition(screenWidth() / 2, screenWidth() * 0.35);
    logo.setDepth(100);
    logo.setDisplaySize(screenWidth() * 0.75, screenWidth() * 0.25);

    const gameMusic = this.add.text(0, 0, 'Game music',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const gameMusicON = this.add.text(0, 0, 'ON',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const gameMusicOFF = this.add.text(0, 0, 'OFF',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const soundEffects = this.add.text(0, 0, 'Sound effects',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const soundEffectsON = this.add.text(0, 0, 'ON',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const soundEffectsOFF = this.add.text(0, 0, 'OFF',
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const usernameLabel = this.add.text(0, 0, `Username`,
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("clean_white")));
    const username = this.add.text(0, 0, `${InternalStorage.loadData(Constants.REF_USERNAME) === null ? "Unknown" : InternalStorage.loadData(Constants.REF_USERNAME)}`,
      Style.general(true, screenWidth() / 12, Config.MAIN_FONTS, Constants.colors("green")));
    const usernameEditBtn = this.add.sprite(0, 0, `edit_btn`);

    usernameEditBtn.setDisplaySize(screenWidth() / 3.3, screenWidth() / 5.5);


    // Loading button initial color upon entering scene. Button settings are loaded from local storage inside a browser.
    colorIndicator(Constants.MUSIC_SETTINGS_REF);
    colorIndicator(Constants.EFFECTS_SETTINGS_REF);

    const optionsContainer = this.add.container(0, 0,);
    optionsContainer.setPosition(screenWidth() / 2, screenHeight() / 2);

    optionsContainer.add(gameMusic);
    optionsContainer.add(gameMusicON);
    optionsContainer.add(gameMusicOFF);
    optionsContainer.add(soundEffects);
    optionsContainer.add(soundEffectsON);
    optionsContainer.add(soundEffectsOFF);
    optionsContainer.add(username);
    optionsContainer.add(usernameEditBtn);
    optionsContainer.add(usernameLabel);

    gameMusic.setPosition(-gameMusic.width / 2, 0);
    gameMusicON.setPosition(-gameMusicON.width / 2, 0);
    gameMusicOFF.setPosition(-gameMusicOFF.width / 2, 0);
    soundEffects.setPosition(-soundEffects.width / 2, 0);
    soundEffectsON.setPosition(-soundEffectsON.width / 2, 0);
    soundEffectsOFF.setPosition(-soundEffectsOFF.width / 2, 0);
    usernameLabel.setPosition(-usernameLabel.width / 2, 0);
    username.setPosition(-username.width / 2, 0);
    usernameEditBtn.setPosition(-screenWidth() / 3.3 / 2, 0);

    gameMusic.setOrigin(0, 4);
    gameMusicON.setOrigin(1, 2.5);
    gameMusicOFF.setOrigin(-1, 2.5);
    soundEffects.setOrigin(0, 0.5);
    soundEffectsON.setOrigin(1, -1);
    soundEffectsOFF.setOrigin(-1, -1);
    usernameLabel.setOrigin(0, -2.9);
    username.setOrigin(0, -4.4);
    usernameEditBtn.setOrigin(0, -3.1);

    gameMusicON.setInteractive();
    gameMusicOFF.setInteractive();
    soundEffectsON.setInteractive();
    soundEffectsOFF.setInteractive();
    usernameEditBtn.setInteractive();


    gameMusicON.on('pointerdown', () => {
      InternalStorage.musicSound = Constants.SOUND_SETTINGS_ON_REF;
      colorIndicator(Constants.MUSIC_SETTINGS_REF);
      Popup.show(this, "Music turned on", Constants.colors("green"), "low");
    });

    gameMusicOFF.on('pointerdown', () => {
      InternalStorage.musicSound = Constants.SOUND_SETTINGS_OFF_REF;
      colorIndicator(Constants.MUSIC_SETTINGS_REF);
      Popup.show(this, "Music turned off", Constants.colors("green"), "low");
    });

    soundEffectsON.on('pointerdown', () => {
      InternalStorage.soundEffect = Constants.SOUND_SETTINGS_ON_REF;
      colorIndicator(Constants.EFFECTS_SETTINGS_REF);
      Popup.show(this, "Sound effects turned on", Constants.colors("green"), "low");
    });

    soundEffectsOFF.on('pointerdown', () => {
      InternalStorage.soundEffect = Constants.SOUND_SETTINGS_OFF_REF;
      colorIndicator(Constants.EFFECTS_SETTINGS_REF);
      Popup.show(this, "Sound effects turned off", Constants.colors("green"), "low");
    });

    usernameEditBtn.on('pointerdown', () => {
      if (this.usernameInput.inputField.style.visibility === "visible") {
        this.usernameInput.inputFieldVisibility(false);
        if (this.usernameInput.inputField.value !== "") {
          this.usernameInput.storeInputFieldLocally();

          Popup.show(this, "Username saved.", "#93c901", "low");
          username.text = `${this.usernameInput.inputField.value}`;
          // Centering new text.
          username.setPosition(-username.displayWidth / 2, 0);
        }
        this.usernameInput.resetInputFieldValue();
        usernameEditBtn.setTexture('edit_btn');
      } else {
        this.usernameInput.inputFieldVisibility(true);
        usernameEditBtn.setTexture('save_btn');
      }
    });

    // Return to main menu btn
    const returnBtn = this.add.sprite(0, 0, 'return_btn');
    returnBtn.setDisplaySize(screenWidth() * 0.14, screenWidth() * 0.14);
    returnBtn.setPosition(screenWidth() * 0.12, screenWidth() * 0.12);
    returnBtn.setInteractive();
    returnBtn.on('pointerdown', () => {
      if (this.usernameInput.inputField.style.visibility === "visible") {
        this.usernameInput.inputFieldVisibility(false);
        this.usernameInput.resetInputFieldValue();
      }
    });
    // OnClick to MainMenu scene again. Destroying all the views from OptionScene
    SceneTransition.startTransition(returnBtn, this, 'MainMenuScene',
      [gameMusic, gameMusicOFF, gameMusicON, optionsContainer, returnBtn, background, soundEffects, soundEffectsON,
        soundEffectsOFF, logo]);


    function colorIndicator(type: string) {
      if (InternalStorage.hasSound(type)) {
        if (type === Constants.MUSIC_SETTINGS_REF) {
          gameMusicON.setColor(Constants.colors("green"));
          gameMusicOFF.setColor(Constants.colors("clean_white"));
        } else {
          soundEffectsON.setColor(Constants.colors("green"));
          soundEffectsOFF.setColor(Constants.colors("clean_white"));
        }
      } else {
        if (type === Constants.MUSIC_SETTINGS_REF) {
          gameMusicOFF.setColor(Constants.colors("green"));
          gameMusicON.setColor(Constants.colors("clean_white"));
        } else {
          soundEffectsOFF.setColor(Constants.colors("green"));
          soundEffectsON.setColor(Constants.colors("clean_white"));
        }
      }
    }
  }

  update() {

  }
}
