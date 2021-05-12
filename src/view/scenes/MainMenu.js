"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main");
var Style_1 = require("../Style");
var InternalStorage_1 = require("../../service/InternalStorage");
var SceneTransition_1 = require("../../service/SceneTransition");
var Popup_1 = require("../popup/Popup");
var Constants_1 = require("../../utils/Constants");
var ScreenType_1 = require("../../utils/ScreenType");
var ScreenDensity_1 = require("../../utils/ScreenDensity");
var Config_1 = require("../../config/Config");
var uniqid_1 = __importDefault(require("uniqid"));
var FirebaseDatabase_1 = require("../../database/FirebaseDatabase");
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        var _this = this;
        FirebaseDatabase_1.FirebaseDatabase.initializeFirebase();
        _this = _super.call(this, {
            key: 'MainMenuScene'
        }) || this;
        // Giving user unique id and storing it locally. Will be used to identify user in firebase.
        var userId = InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USER_UNIQUE_ID);
        if (userId == null) {
            userId = uniqid_1.default() + uniqid_1.default() + uniqid_1.default();
            InternalStorage_1.InternalStorage.storeData(Constants_1.Constants.REF_USER_UNIQUE_ID, userId);
        }
        return _this;
    }
    MainMenuScene.prototype.preload = function () {
        // Preloading asset that will be used on scene transition from main menu to another scene
        this.load.image('loading_background', 'assets/images/loading_background.jpg');
        // Initializing internal storage that has user highest score stored in browser
        this.internalStorage = new InternalStorage_1.InternalStorage();
        /* 3.15.1 has a bug where on clicking mouse on 'pointerdown' event is triggered twice on phones,
        * once as touch ID and another as mouse ID. Only 3.10.0 does not have same bug, however,
        * it does have different bug.
        * This line fixes it in v 3.15.1 */
        if (ScreenType_1.ScreenType.isMobile()) {
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
    };
    MainMenuScene.prototype.create = function () {
        // These variable needs to be declared here instead of constructor or else Genymotion Android emulator is not
        // reading it properly. Changing variable names to keep it short.
        this.w = main_1.screenWidth();
        this.h = main_1.screenHeight();
        // Background music playing while in main menu set on repeat
        var music = this.sound.add('intro', { loop: true });
        // Loading intro music if user did not turn music off from option menu
        if (InternalStorage_1.InternalStorage.hasSound(Constants_1.Constants.MUSIC_SETTINGS_REF)) {
            music.play();
        }
        var screenDensity = new ScreenDensity_1.ScreenDensity();
        // Resize screen cause of the pixel density on phone
        // Initial resize
        screenDensity.resizeScreen();
        // Resize if user is changing screen in a browser. Not needed since
        // it's a mobile game and user screen is final
        window.addEventListener('resize', screenDensity.resizeScreen);
        // Background
        // Already have top app layer background color set in config on initial load,
        // adding alpha to image to give darker effect to a background
        var background = this.add.sprite(this.w / 2, this.h / 2, 'background');
        background.alpha = 0.5;
        background.scaleX = this.h / background.height;
        background.scaleY = this.h / background.height;
        // Menu logo
        var menu_logo = this.add.sprite(this.w / 2, (this.h / 2) * 0.3, 'menu_logo');
        menu_logo.setDisplaySize(this.w * 0.95, this.w * 0.4);
        menu_logo.setDepth(200);
        var menu_container = this.add.container(this.w / 2, (this.h / 2) * 1.1);
        // Container background
        var menu_background = this.add.sprite(0, 0, 'menu_background');
        menu_background.setDisplaySize(this.w * 0.95, this.w * 0.95);
        // Menu buttons
        var playGameBtn = this.add.text(0, 0, "Play Game", Style_1.Style.general(false, main_1.screenWidth() / 10, Config_1.Config.MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        var howToPlayBtn = this.add.text(0, 0, "Tutorial", Style_1.Style.general(false, main_1.screenWidth() / 10, Config_1.Config.MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        var optionsBtn = this.add.text(0, 0, "Options", Style_1.Style.general(false, main_1.screenWidth() / 10, Config_1.Config.MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        var ranksBtn = this.add.text(0, 0, "Ranks", Style_1.Style.general(false, main_1.screenWidth() / 10, Config_1.Config.MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        var exitBtn = this.add.text(0, 0, "Exit", Style_1.Style.general(false, main_1.screenWidth() / 10, Config_1.Config.MENU_FONTS, Constants_1.Constants.colors("clean_white")));
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
        this.bestScore = this.add.text(0, 0, "Best score: 0", Style_1.Style.general(true, main_1.screenWidth() / 14, Config_1.Config.SIDE_MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        try {
            // Try Catch for the android emulator Genymotion. It's not working in an android webview app.
            // I could find way around it but is there a need for it ? Game will be played in a browser.
            this.bestScore.setText("Your best score: " + this.internalStorage.getBestScore());
        }
        catch (e) {
            Popup_1.Popup.show(this, "Unable to show best score", Constants_1.Constants.colors("red"), "high");
        }
        this.bestScore.setPosition(this.w / 2 - this.bestScore.width / 2, this.h / 1.15);
        // Setting shadow and interaction to this scene views
        Style_1.Style.setAttribute([playGameBtn, howToPlayBtn, optionsBtn, ranksBtn, exitBtn, this.bestScore], [playGameBtn, howToPlayBtn, optionsBtn, ranksBtn, exitBtn]);
        // OnClick - Start game
        SceneTransition_1.SceneTransition.startTransition(playGameBtn, this, 'GameScene', [music, background, optionsBtn, exitBtn, menu_background, playGameBtn, howToPlayBtn, this.bestScore,
            menu_container]);
        // OnClick - How to play menu
        SceneTransition_1.SceneTransition.startTransition(howToPlayBtn, this, 'HowToPlayScene', [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
            menu_container]);
        // OnClick - Options menu
        SceneTransition_1.SceneTransition.startTransition(optionsBtn, this, 'OptionsScene', [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
            menu_container]);
        // OnClick - Ranks menu
        SceneTransition_1.SceneTransition.startTransition(ranksBtn, this, 'RanksScene', [music, playGameBtn, menu_logo, background, howToPlayBtn, optionsBtn, exitBtn, menu_background, this.bestScore,
            menu_container]);
    };
    MainMenuScene.prototype.update = function () {
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.default = MainMenuScene;
//# sourceMappingURL=MainMenu.js.map