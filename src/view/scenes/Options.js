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
Object.defineProperty(exports, "__esModule", { value: true });
var Style_1 = require("../Style");
var main_1 = require("../../main");
var Config_1 = require("../../config/Config");
var Constants_1 = require("../../utils/Constants");
var InternalStorage_1 = require("../../service/InternalStorage");
var SceneTransition_1 = require("../../service/SceneTransition");
var Popup_1 = require("../popup/Popup");
var LoadingScreen_1 = require("../popup/LoadingScreen");
var UsernameInput_1 = require("../dom/UsernameInput");
var OptionsScene = /** @class */ (function (_super) {
    __extends(OptionsScene, _super);
    function OptionsScene() {
        var _this = _super.call(this, {
            key: 'OptionsScene'
        }) || this;
        _this.usernameInput = new UsernameInput_1.UsernameInput();
        return _this;
        /*this._inputField = <HTMLInputElement>document.getElementById("username")*/
    }
    OptionsScene.prototype.preload = function () {
        // While assets are being loaded
        LoadingScreen_1.LoadingScreen.show(this);
        this.load.image('options_logo', 'assets/images/options_logo.png');
        this.load.image('edit_btn', 'assets/images/edit_btn.png');
        this.load.image('save_btn', 'assets/images/save_btn.png');
    };
    OptionsScene.prototype.create = function () {
        var _this = this;
        // Background
        var background = this.add.sprite(main_1.screenWidth(), main_1.screenHeight() / 2, 'background');
        background.alpha = 0.2;
        background.scaleX = main_1.screenHeight() / background.height;
        background.scaleY = main_1.screenHeight() / background.height;
        // Options logo
        var logo = this.add.sprite(0, 0, 'options_logo');
        logo.setPosition(main_1.screenWidth() / 2, main_1.screenWidth() * 0.35);
        logo.setDepth(100);
        logo.setDisplaySize(main_1.screenWidth() * 0.75, main_1.screenWidth() * 0.25);
        var gameMusic = this.add.text(0, 0, 'Game music', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var gameMusicON = this.add.text(0, 0, 'ON', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var gameMusicOFF = this.add.text(0, 0, 'OFF', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var soundEffects = this.add.text(0, 0, 'Sound effects', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var soundEffectsON = this.add.text(0, 0, 'ON', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var soundEffectsOFF = this.add.text(0, 0, 'OFF', Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var usernameLabel = this.add.text(0, 0, "Username", Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        var username = this.add.text(0, 0, "" + (InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME) === null ? "Unknown" : InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME)), Style_1.Style.general(true, main_1.screenWidth() / 12, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("green")));
        var usernameEditBtn = this.add.sprite(0, 0, "edit_btn");
        usernameEditBtn.setDisplaySize(main_1.screenWidth() / 3.3, main_1.screenWidth() / 5.5);
        // Loading button initial color upon entering scene. Button settings are loaded from local storage inside a browser.
        colorIndicator(Constants_1.Constants.MUSIC_SETTINGS_REF);
        colorIndicator(Constants_1.Constants.EFFECTS_SETTINGS_REF);
        var optionsContainer = this.add.container(0, 0);
        optionsContainer.setPosition(main_1.screenWidth() / 2, main_1.screenHeight() / 2);
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
        usernameEditBtn.setPosition(-main_1.screenWidth() / 3.3 / 2, 0);
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
        gameMusicON.on('pointerdown', function () {
            InternalStorage_1.InternalStorage.musicSound = Constants_1.Constants.SOUND_SETTINGS_ON_REF;
            colorIndicator(Constants_1.Constants.MUSIC_SETTINGS_REF);
            Popup_1.Popup.show(_this, "Music turned on", Constants_1.Constants.colors("green"), "low");
        });
        gameMusicOFF.on('pointerdown', function () {
            InternalStorage_1.InternalStorage.musicSound = Constants_1.Constants.SOUND_SETTINGS_OFF_REF;
            colorIndicator(Constants_1.Constants.MUSIC_SETTINGS_REF);
            Popup_1.Popup.show(_this, "Music turned off", Constants_1.Constants.colors("green"), "low");
        });
        soundEffectsON.on('pointerdown', function () {
            InternalStorage_1.InternalStorage.soundEffect = Constants_1.Constants.SOUND_SETTINGS_ON_REF;
            colorIndicator(Constants_1.Constants.EFFECTS_SETTINGS_REF);
            Popup_1.Popup.show(_this, "Sound effects turned on", Constants_1.Constants.colors("green"), "low");
        });
        soundEffectsOFF.on('pointerdown', function () {
            InternalStorage_1.InternalStorage.soundEffect = Constants_1.Constants.SOUND_SETTINGS_OFF_REF;
            colorIndicator(Constants_1.Constants.EFFECTS_SETTINGS_REF);
            Popup_1.Popup.show(_this, "Sound effects turned off", Constants_1.Constants.colors("green"), "low");
        });
        usernameEditBtn.on('pointerdown', function () {
            if (_this.usernameInput.inputField.style.visibility === "visible") {
                _this.usernameInput.inputFieldVisibility(false);
                if (_this.usernameInput.inputField.value !== "") {
                    _this.usernameInput.storeInputFieldLocally();
                    Popup_1.Popup.show(_this, "Username saved.", "#93c901", "low");
                    username.text = "" + _this.usernameInput.inputField.value;
                    // Centering new text.
                    username.setPosition(-username.displayWidth / 2, 0);
                }
                _this.usernameInput.resetInputFieldValue();
                usernameEditBtn.setTexture('edit_btn');
            }
            else {
                _this.usernameInput.inputFieldVisibility(true);
                usernameEditBtn.setTexture('save_btn');
            }
        });
        // Return to main menu btn
        var returnBtn = this.add.sprite(0, 0, 'return_btn');
        returnBtn.setDisplaySize(main_1.screenWidth() * 0.14, main_1.screenWidth() * 0.14);
        returnBtn.setPosition(main_1.screenWidth() * 0.12, main_1.screenWidth() * 0.12);
        returnBtn.setInteractive();
        returnBtn.on('pointerdown', function () {
            if (_this.usernameInput.inputField.style.visibility === "visible") {
                _this.usernameInput.inputFieldVisibility(false);
                _this.usernameInput.resetInputFieldValue();
            }
        });
        // OnClick to MainMenu scene again. Destroying all the views from OptionScene
        SceneTransition_1.SceneTransition.startTransition(returnBtn, this, 'MainMenuScene', [gameMusic, gameMusicOFF, gameMusicON, optionsContainer, returnBtn, background, soundEffects, soundEffectsON,
            soundEffectsOFF, logo]);
        function colorIndicator(type) {
            if (InternalStorage_1.InternalStorage.hasSound(type)) {
                if (type === Constants_1.Constants.MUSIC_SETTINGS_REF) {
                    gameMusicON.setColor(Constants_1.Constants.colors("green"));
                    gameMusicOFF.setColor(Constants_1.Constants.colors("clean_white"));
                }
                else {
                    soundEffectsON.setColor(Constants_1.Constants.colors("green"));
                    soundEffectsOFF.setColor(Constants_1.Constants.colors("clean_white"));
                }
            }
            else {
                if (type === Constants_1.Constants.MUSIC_SETTINGS_REF) {
                    gameMusicOFF.setColor(Constants_1.Constants.colors("green"));
                    gameMusicON.setColor(Constants_1.Constants.colors("clean_white"));
                }
                else {
                    soundEffectsOFF.setColor(Constants_1.Constants.colors("green"));
                    soundEffectsON.setColor(Constants_1.Constants.colors("clean_white"));
                }
            }
        }
    };
    OptionsScene.prototype.update = function () {
    };
    return OptionsScene;
}(Phaser.Scene));
exports.OptionsScene = OptionsScene;
//# sourceMappingURL=Options.js.map