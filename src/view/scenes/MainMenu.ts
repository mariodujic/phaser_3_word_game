import {screenHeight, screenWidth} from "../../main";
import {Style} from "../Style";
import {InternalStorage} from "../../service/InternalStorage";
import {SceneTransition} from "../../service/SceneTransition";
import {Popup} from "../popup/Popup";
import {Constants} from "../../utils/Constants";
import {ScreenType} from "../../utils/ScreenType";
import {ScreenDensity} from "../../utils/ScreenDensity";
import {Config} from "../../config/Config";
import uniqid from "uniqid"
import {FirebaseDatabase} from "../../database/FirebaseDatabase";

class MainMenuScene extends Phaser.Scene {

  // Width and height of phone screen in pixels multiplied with pixel density
  private w: number;
  private h: number;

  private bestScore: Phaser.GameObjects.Text;
  private internalStorage: InternalStorage;

  constructor() {

    FirebaseDatabase.initializeFirebase();

    super({
      key: 'MainMenuScene'
    });

    // Giving user unique id and storing it locally. Will be used to identify user in firebase.
    let userId = InternalStorage.loadData(Constants.REF_USER_UNIQUE_ID);
    if (userId == null) {
      userId = uniqid() + uniqid() + uniqid();
      InternalStorage.storeData(Constants.REF_USER_UNIQUE_ID, userId);
    }

  }

  preload() {
    // Preloading asset that will be used on scene transition from main menu to another scene
    this.load.image('loading_background', 'assets/images/loading_background.jpg');
    // Initializing internal storage that has user highest score stored in browser
    this.internalStorage = new InternalStorage();
    /* 3.15.1 has a bug where on clicking mouse on 'pointerdown' event is triggered twice on phones,
    * once as touch ID and another as mouse ID. Only 3.10.0 does not have same bug, however,
    * it does have different bug.
    * This line fixes it in v 3.15.1 */
    if (ScreenType.isMobile()) {
      this.input.mouse.enabled = false;
    }
    // Images
    this.load.image('background', 'assets/images/background_full.jpg');
    this.load.image('menu_background', 'assets/images/menu_items_background.png');
    this.load.image('menu_logo', 'assets/images/menu_logo.png');
    this.load.image('return_btn', 'assets/images/return_main_menu_button.png');
    this.load.image('menu_btn', 'assets/images/menu_btn.png');
    // Music
    this.load.audio('intro', 'assets/sounds/intro.mp3');
    this.load.image('return_btn', 'assets/images/return_main_menu_button.png');
  }

  create() {

    // These variable needs to be declared here instead of constructor or else Genymotion Android emulator is not
    // reading it properly. Changing variable names to keep it short.
    this.w = screenWidth();
    this.h = screenHeight();
    // Background music playing while in main menu set on repeat
    const music = this.sound.add('intro', {loop: true});

    // Loading intro music if user did not turn music off from option menu
    if (InternalStorage.hasSound(Constants.MUSIC_SETTINGS_REF)) {
      music.play();
    }

    const screenDensity: ScreenDensity = new ScreenDensity();
    // Resize screen cause of the pixel density on phone
    // Initial resize
    screenDensity.resizeScreen();
    // Resize if user is changing screen in a browser. Not needed since
    // it's a mobile game and user screen is final
    window.addEventListener('resize', screenDensity.resizeScreen);

    // Background
    // Already have top app layer background color set in config on initial load,
    // adding alpha to image to give darker effect to a background
    const background = this.add.sprite(this.w / 2, this.h / 2, 'background');
    background.alpha = 0.5;
    background.scaleX = this.h / background.height;
    background.scaleY = this.h / background.height;

    // Menu logo
    const menu_logo = this.add.sprite(this.w / 2, (this.h / 2) * 0.3, 'menu_logo');
    menu_logo.setDisplaySize(this.w * 0.95, this.w * 0.4);
    menu_logo.setDepth(200);
    const menu_container = this.add.container(this.w / 2, (this.h / 2) * 1.1);
    // Container background
    const menu_background = this.add.sprite(0, 0, 'menu_background');
    menu_background.setDisplaySize(this.w * 0.95, this.w * 0.95);

    // Menu buttons
    const playGameBtn = this.add.text(0, 0, "Play Game",
      Style.general(false, screenWidth() / 10, Config.MENU_FONTS, Constants.colors("clean_white")));
    const howToPlayBtn = this.add.text(0, 0, "Tutorial",
      Style.general(false, screenWidth() / 10, Config.MENU_FONTS, Constants.colors("clean_white")));
    const optionsBtn = this.add.text(0, 0, "Options",
      Style.general(false, screenWidth() / 10, Config.MENU_FONTS, Constants.colors("clean_white")));
    const ranksBtn = this.add.text(0, 0, "Ranks",
      Style.general(false, screenWidth() / 10, Config.MENU_FONTS, Constants.colors("clean_white")));
    const exitBtn = this.add.text(0, 0, "Exit",
      Style.general(false, screenWidth() / 10, Config.MENU_FONTS, Constants.colors("clean_white")));
    // Adding objects to a container that holds these objects
    menu_container.add(menu_background);
    menu_container.add(playGameBtn);
    menu_container.add(optionsBtn);
    menu_container.add(ranksBtn);
    menu_container.add(exitBtn);
    menu_container.add(howToPlayBtn);
    // Setting objects position in a container
    playGameBtn.setOrigin(0.5, 3.3);
    howToPlayBtn.setOrigin(0.5, 2.0);
    optionsBtn.setOrigin(0.5, 0.7);
    ranksBtn.setOrigin(0.5, -0.6);
    exitBtn.setOrigin(0.5, -1.9);


    this.bestScore = this.add.text(0, 0, "Best score: 0",
      Style.general(true, screenWidth() / 14, Config.SIDE_MENU_FONTS, Constants.colors("clean_white")));
    try {
      // Try Catch for the android emulator Genymotion. It's not working in an android webview app.
      // I could find way around it but is there a need for it ? Game will be played in a browser.
      this.bestScore.setText("Your best score: " + this.internalStorage.getBestScore());
    } catch (e) {
      Popup.show(this, "Unable to show best score", Constants.colors("red"), "high");
    }
    this.bestScore.setPosition(this.w / 2 - this.bestScore.width / 2, this.h / 1.15);

    // Setting shadow and interaction to this scene views
    Style.setAttribute([playGameBtn, howToPlayBtn, optionsBtn, ranksBtn, exitBtn, this.bestScore],
      [playGameBtn, howToPlayBtn, optionsBtn, ranksBtn, exitBtn]);

    // OnClick - Start game
    SceneTransition.startTransition(playGameBtn, this, 'GameScene',
      [music, background, optionsBtn, exitBtn, menu_background, playGameBtn, howToPlayBtn, this.bestScore,
        menu_container]);

    // OnClick - How to play menu
    SceneTransition.startTransition(howToPlayBtn, this, 'HowToPlayScene',
      [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
        menu_container]);

    // OnClick - Options menu
    SceneTransition.startTransition(optionsBtn, this, 'OptionsScene',
      [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
        menu_container]);

    // OnClick - Ranks menu
    SceneTransition.startTransition(ranksBtn, this, 'RanksScene',
      [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
        menu_container]);

  }

  update() {
  }
}

export default MainMenuScene;
