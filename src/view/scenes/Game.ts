import {Round} from "../../business/Round";
import {Style} from "../Style";
import {screenHeight, screenWidth} from "../../main";
import {Globals} from "../../utils/Globals";
import {Constants} from "../../utils/Constants";
import {LoadingScreen} from "../popup/LoadingScreen";
import {ScreenType} from "../../utils/ScreenType";
import {SoundController} from "../../controller/sounds/SoundController";
import {Config} from "../../config/Config";
import {InternalStorage} from "../../service/InternalStorage";
import {GameExit} from "../popup/GameExit";

class GameScene extends Phaser.Scene {

  private newRound: Round;
  private readonly items;

  constructor() {
    super({
      key: 'GameScene'
    });

    this.newRound = new Round(this);
    this.items = this.newRound.items;
  }

  preload() {
    /* 3.15.1 has a bug where on clicking mouse on 'pointerdown' event is triggered twice on phones,
     * once as touch ID and another as mouse ID. Only 3.10.0 does not have same bug, however,
     * it does have different bug.
     * This line fixes it in v 3.15.1 */
    if (ScreenType.isMobile()) {
      this.input.mouse.enabled = false;
    }
    // While assets are being loaded
    LoadingScreen.show(this);

    // Images
    this.load.image('sword_focused', 'assets/images/sword_focused.png');
    this.load.image('shield_focused', 'assets/images/shield_focused.png');
    this.load.image('sword_unfocused', 'assets/images/sword_unfocused.png');
    this.load.image('shield_unfocused', 'assets/images/shield_unfocused.png');
    this.load.image('play_btn', 'assets/images/play_button.png');
    this.load.image('heart', 'assets/images/heart.png');
    this.load.image('add_time', 'assets/images/add_time_icon.png');
    this.load.image('recover_health', 'assets/images/restore_health_icon.png');
    this.load.image('background', 'assets/images/background.jpg');
    this.load.image('losing_popup_menu_btn', 'assets/images/losing_popup_menu_btn.png');
    this.load.image('losing_popup_repeat_btn', 'assets/images/losing_popup_repeat_btn.png');
    this.load.image('losing_popup_flag', 'assets/images/losing_popup_flag.png');
    this.load.image('game_menu_dialog_background', 'assets/images/game_menu_dialog_background.png');
    this.load.image('menu_yes_btn', 'assets/images/menu_yes_btn.png');
    this.load.image('menu_no_btn', 'assets/images/menu_no_btn.png');
    // Sound effects
    this.load.audio('sword_drawn', 'assets/sounds/sword_drawn_3.mp3');
    this.load.audio('correct_answer', 'assets/sounds/sound_effect_correct_answer.mp3');
    this.load.audio('wrong_answer', 'assets/sounds/sound_effect_wrong_answer.mp3');
    this.load.audio('winning_round', 'assets/sounds/sound_effect_winning_round.mp3');
    this.load.audio('losing_round', 'assets/sounds/sound_effect_losing_round.mp3');
    this.load.audio('extra_item_received', 'assets/sounds/sound_effect_extra_item_sound_received.mp3');
    this.load.audio('extra_item_click', 'assets/sounds/sound_effect_extra_item_sound_clicked.mp3');
    this.load.audio('sword_hit', 'assets/sounds/sound_effect_sword_hit.wav');
    this.load.audio('shield_hit', 'assets/sounds/sound_effect_shield_hit.wav');
    this.load.audio('shield_equip', 'assets/sounds/sound_effect_shield_equip.mp3');
    this.load.audio('keyboard_press', 'assets/sounds/sound_effect_keyboard_press.mp3');

    // Songs
    this.load.audio('song_1', 'assets/sounds/song_1.mp3');
    this.load.audio('song_2', 'assets/sounds/song_2.mp3');
    this.load.audio('song_4', 'assets/sounds/song_4.mp3');
  }

  create() {
    const w = screenWidth();
    const h = screenHeight();

    // Music
    this.items.music = this.sound.add(SoundController.backgroundMusicShuffle(['song_1', 'song_2', 'song_4']), {loop: true});

    if (InternalStorage.hasSound(Constants.MUSIC_SETTINGS_REF)) {
      this.items.music.play();
    }

    // Background
    const background = this.add.sprite(screenWidth() / 2, screenHeight() / 2, 'background');
    background.alpha = 0.5;
    background.scaleX = screenHeight() / background.height;
    background.scaleY = screenHeight() / background.height;

    // If settings are enabled in options scene
    let soundEffectsVolume: number;
    if (!InternalStorage.hasSound(Constants.EFFECTS_SETTINGS_REF)) {
      soundEffectsVolume = 0;
    }

    // Sound effects
    this.items.swordEnabledSound = this.sound.add('sword_drawn', {volume: soundEffectsVolume});
    this.items.shieldEnabledSound = this.sound.add('shield_equip', {volume: soundEffectsVolume});
    this.items.correctAnswerSound = this.sound.add('correct_answer', {volume: soundEffectsVolume});
    this.items.wrongAnswerSound = this.sound.add('wrong_answer', {volume: soundEffectsVolume});
    this.items.roundWinSound = this.sound.add('winning_round', {volume: soundEffectsVolume});
    this.items.roundLoseSound = this.sound.add('losing_round', {volume: soundEffectsVolume});
    this.items.extraItemReceivedSound = this.sound.add('extra_item_received', {volume: soundEffectsVolume});
    this.items.extraItemClickedSound = this.sound.add('extra_item_click', {volume: soundEffectsVolume});
    this.items.swordHitSound = this.sound.add('sword_hit', {volume: soundEffectsVolume});
    this.items.shieldHitSound = this.sound.add('shield_hit', {volume: soundEffectsVolume});
    this.items.keyboardPressSound = this.sound.add('keyboard_press', {volume: soundEffectsVolume});

    // Timer
    this.items.timerView = this.add.text(0, 0, "30", Style.timer());
    this.items.timerView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);

    // Health bar
    let heart1 = this.add.sprite(w * 0.13 * 0.92 * 2, w * 0.13 * 0.8, 'heart').setDisplaySize(w * 0.13, w * 0.13);
    let heart2 = this.add.sprite(w * 0.13 * 0.92 * 3, w * 0.13 * 0.8, 'heart').setDisplaySize(w * 0.13, w * 0.13);
    let heart3 = this.add.sprite(w * 0.13 * 0.92 * 4, w * 0.13 * 0.8, 'heart').setDisplaySize(w * 0.13, w * 0.13);
    let heart4 = this.add.sprite(w * 0.13 * 0.92 * 5, w * 0.13 * 0.8, 'heart').setDisplaySize(w * 0.13, w * 0.13);
    let heart5 = this.add.sprite(w * 0.13 * 0.92 * 6, w * 0.13 * 0.8, 'heart').setDisplaySize(w * 0.13, w * 0.13);
    this.items.healthBarView = [heart1, heart2, heart3, heart4, heart5];

    // Score
    this.items.scoreView = this.add.text(w * 0.13 * 0.7, w * 0.13 * 1.5, "Score: 0",
      Style.general(true, screenWidth() / 20, Config.MAIN_FONTS, Constants.colors("dirty_white")));
    this.items.scoreView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);
    this.items.scoreAnimationView = this.add.text(w * 0.13 + this.items.scoreView.width * 1.1, w * 0.13 * 1.50, "+5",
      Style.general(true, screenWidth() / 19, Config.DISPLAY_FONTS, Constants.colors("dirty_white")));
    this.items.scoreAnimationView.alpha = 0;

    // Exit button
    this.items.exitButton = this.add.sprite(w * 0.13 * 0.7, w * 0.13 * 0.7, "menu_btn");
    this.items.exitButton.setDisplaySize(heart1.displayWidth * 0.9, heart1.displayWidth * 0.9);
    this.items.exitButton.setInteractive();
    this.items.exitButton.on('pointerdown', () => {

      let gameExit = new GameExit(this, this.newRound);
      gameExit.showPopup();

    });

    // Weapons
    this.items.swordImage = this.add.sprite(w * 0.15, h - w * 0.15, "sword_unfocused").setDisplaySize(this.newRound.itemAttributes.getWeaponSize(), this.newRound.itemAttributes.getWeaponSize());
    this.newRound.weaponController.weaponUsage('sword', 'sword_unfocused', 'sword_focused');
    this.items.swordAnimationView = this.add.text(w * 0.15, h - w * 0.15 - this.items.swordImage.height / 2, "+5",
      Style.general(true, screenWidth() / 10, Config.DISPLAY_FONTS, Constants.colors("dirty_white")));
    this.items.swordAnimationView.alpha = 0;
    this.items.shieldImage = this.add.sprite(w - w * 0.15, h - w * 0.15, "shield_unfocused").setDisplaySize(this.newRound.itemAttributes.getWeaponSize(), this.newRound.itemAttributes.getWeaponSize());
    this.newRound.weaponController.weaponUsage('shield', 'shield_unfocused', 'shield_focused');
    this.items.shieldAnimationView = this.add.text(w - w * 0.15, h - w * 0.15 - this.items.shieldImage.height / 2, "+5",
      Style.general(true, screenWidth() / 10, Config.DISPLAY_FONTS, Constants.colors("dirty_white")));
    this.items.shieldAnimationView.alpha = 0;
    // Weapon amount indicator
    // Sword indicator
    this.items.swordAmountView = this.add.text(0, 0, "xx",
      Style.general(true, screenWidth() / 16, Config.MAIN_FONTS, Constants.colors("dirty_white"), 0));
    this.items.swordAmountView.setPosition(w * 0.3, this.items.swordImage.y - this.items.swordAmountView.displayHeight / 2);
    // Shield indicator
    this.items.shieldAmountView = this.add.text(0, 0, "xx",
      Style.general(true, screenWidth() / 16, Config.MAIN_FONTS, Constants.colors("dirty_white"), 0));
    this.items.shieldAmountView.setPosition(w - w * 0.33, this.items.swordImage.y - this.items.swordAmountView.displayHeight / 2);
    this.items.swordAmountView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);
    this.items.shieldAmountView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);


    // Secret word
    this.newRound.inputCharacter = "";
    let secretWordInitialText = this.newRound.businessViewManager.newWordViewState();
    this.items.wordBusinessView = this.add.text(0, 0, secretWordInitialText,
      Style.general(true, screenWidth() / 8, Config.MAIN_FONTS, Constants.colors("clean_white")));
    this.items.wordBusinessView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);

    // Secret description
    this.items.wordDescriptionView = this.add.text(0, 0, this.newRound.descriptionBusiness, Style.businessWordDescription());
    this.items.wordDescriptionView.setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);

    // Play button
    this.items.playBtn = this.add.sprite(w / 2, h - h * 0.20, 'play_btn').setDisplaySize(this.newRound.itemAttributes.getPlayBtnSize()[0], this.newRound.itemAttributes.getPlayBtnSize()[1]).setInteractive();
    this.items.playBtn.on('pointerdown', function () {
      this.newRound.playBtnController.onClick('sword_unfocused', 'shield_unfocused');
    }, this);

    // Warning text display
    this.items.warningTextDisplay = this.add.text(0, 0, "", Style.displayBoard());

    // Extra items that drop randomly
    this.items.extraItemAddTime = this.add.sprite(w - w * 0.10, h / 2.1, 'add_time').setDisplaySize(w * 0.13, w * 0.13);
    let onTimeBagClick = () => {
      this.newRound.extraItems.getItem(Constants.EXTRA_ITEM_TIME_REF).useItem();
    };
    this.items.extraItemAddTime.on('pointerdown', onTimeBagClick);
    this.items.extraItemRecoverFullHealth = this.add.sprite(w - w * 0.10, h / 2.55, 'recover_health').setDisplaySize(w * 0.13, w * 0.13);
    let onHealthBagClick = () => {
      this.newRound.extraItems.getItem(Constants.EXTRA_ITEM_HEALTH_REF).useItem();
    };
    this.items.extraItemRecoverFullHealth.on('pointerdown', onHealthBagClick);

    // Containers
    this.items.secretWordContainer = this.add.container(w / 2, h / 2, this.items.wordBusinessView);
    this.items.wordDescriptionContainer = this.add.container(w / 2, h / 2, this.items.wordDescriptionView);
    this.items.swordAnimationViewContainer = this.add.container(-this.items.swordAnimationView.width / 2, 0, this.items.swordAnimationView);
    this.items.shieldAnimationViewContainer = this.add.container(-this.items.shieldAnimationView.width / 2, 0, this.items.shieldAnimationView);
    this.items.timerViewContainer = this.add.container(w - w * 0.13 * 0.92, w * 0.13 * 0.7, this.items.timerView);
    this.items.infoDisplayBoardContainer = this.add.container(0, 0, this.items.warningTextDisplay);

    // Game keyboard for letter input
    for (let i = 0; i < Constants.KEYBOARD.length; i++) {

      this.items.keyButtons[i] = this.add.text(0, 0, Constants.KEYBOARD[i],
        Style.general(true, screenWidth() / 16, Config.MAIN_FONTS, Constants.colors("clean_white")));
      this.items.keyButtons[i].setShadow(2, 2, Constants.colors("shadow_black_alpha"), 2, true, true);

      let rowWidth_1 = i * w / 10 + w * 0.050;
      let rowHeight_1 = h - h * 0.26 - this.items.keyButtons[i].height * 4;
      let rowWidth_2 = (i - 10) * w / 9 + w * 0.056;
      let rowHeight_2 = h - h * 0.26 - this.items.keyButtons[i].height * 2.5;
      let rowWidth_3 = (i - 19) * w / 7 + w * 0.066;
      let rowHeight_3 = h - h * 0.26 - this.items.keyButtons[i].height;

      let x = i > 9 && i < 19 ? rowWidth_2 : i >= 19 ? rowWidth_3 : rowWidth_1;
      let y = i > 9 && i < 19 ? rowHeight_2 : i >= 19 ? rowHeight_3 : rowHeight_1;
      // Containers are listening to click. Received circle shape for better responsiveness
      this.items.keyContainers[i] = this.add.container(x, y, this.items.keyButtons[i]);
      this.items.keyContainers[i].setInteractive(new Phaser.Geom.Circle(0, 0, this.items.keyButtons[i].height), Phaser.Geom.Circle.Contains);
      this.items.keyContainers[i].add(this.items.keyButtons[i]);
      this.items.keyButtons[i].setOrigin(0.5, 0.5);
      // Adding clicking sound effect to a keyboard buttons
      this.items.keyContainers[i].on('pointerdown', () => {
        this.newRound.soundController.keyboardPress();
      });

      this.newRound.items.keyContainers[i].on('pointerdown',
        this.newRound.keyboardController.pressed.bind(this, this.newRound.items.keyButtons[i].text));
    }


    // Initiate round
    this.newRound.roundStart();
  }

  update() {
    // Business function
    this.newRound.listenToRoundEnd();

    // Adjusting the views to be centered accordingly. Not centered after change of a text inside of a view.
    this.items.secretWordContainer.setPosition(screenWidth() / 2, screenHeight() / 2 * 0.6);
    this.items.wordDescriptionContainer.setPosition(screenWidth() / 2, screenHeight() / 2 * 0.4);
    this.items.swordAnimationViewContainer.setPosition(-this.items.swordAnimationView.width / 2, 0);
    this.items.timerViewContainer.setPosition(screenWidth() - screenWidth() * 0.13 * 0.92, screenWidth() * 0.13 * 0.7);
    this.items.shieldAnimationViewContainer.setPosition(-this.items.shieldAnimationView.width / 2, 0);
    this.items.infoDisplayBoardContainer.setPosition(screenWidth() * 0.01, screenHeight() / 2.70);
    this.items.timerView.setOrigin(0.5, 0.5);
    this.items.wordBusinessView.setOrigin(0.5, 0.5);
    this.items.wordDescriptionView.setOrigin(0.5, 0.5);

    // Controlling existence of extra items
    if (Globals.hasExtraItemAddTime) {
      this.items.extraItemAddTime.setVisible(true);
      this.items.extraItemAddTime.setInteractive();
    } else {
      this.items.extraItemAddTime.setVisible(false);
      // No interaction to be removed
      try {
        this.items.extraItemAddTime.removeInteractive();
      } catch (e) {
      }
    }
    if (Globals.hasExtraItemRecoverHealth) {
      this.items.extraItemRecoverFullHealth.setVisible(true);
      this.items.extraItemRecoverFullHealth.setInteractive();
    } else {
      this.items.extraItemRecoverFullHealth.setVisible(false);
      try {
        this.items.extraItemRecoverFullHealth.removeInteractive();
      } catch (e) {
      }
    }

    // Display history view. Any message game sends to a user will be shown in this view.
    // Order of messages is reversed. Last message is first in array.
    let newArray = [];
    /**@param showLines - how many messages will be shown in a view, sorted by newest messages*/
    let showLines: number = 5;
    for (let i = this.newRound.displayMessageController.displayMsgList.length - 1; i >= this.newRound.displayMessageController.displayMsgList.length - showLines; i--) {
      newArray.push(this.newRound.displayMessageController.displayMsgList[i]);
    }
    this.items.warningTextDisplay.setText(newArray);
  }
}


export default GameScene;
