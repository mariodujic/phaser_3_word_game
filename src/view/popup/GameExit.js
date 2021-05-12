"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../main");
var BusinessViewManager_1 = require("../../business/BusinessViewManager");
var InternalStorage_1 = require("../../service/InternalStorage");
var UsernameInput_1 = require("../dom/UsernameInput");
var GameExit = /** @class */ (function () {
    function GameExit(scene, newRound) {
        this.scene = scene;
        this.newRound = newRound;
        this.newRound.viewBehaviour.disableInteractiveView();
    }
    GameExit.prototype.showPopup = function () {
        this.generateScreenDarkener();
        this.generateContainer();
        this.generateBackground();
        this.generateButtons();
    };
    GameExit.prototype.destroyPopup = function () {
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
    };
    //Generation
    GameExit.prototype.generateContainer = function () {
        this.container = this.scene.add.container(main_1.screenWidth() / 2, main_1.screenHeight() / 2);
    };
    GameExit.prototype.generateBackground = function () {
        this.popupBackground = this.scene.add.sprite(0, 0, 'game_menu_dialog_background');
        this.popupBackground.setDisplaySize(main_1.screenWidth() * 0.8, main_1.screenWidth() * 0.38);
        this.container.add(this.popupBackground);
    };
    GameExit.prototype.generateScreenDarkener = function () {
        var _this = this;
        this.screenBackground = this.scene.add.graphics();
        this.screenBackground.fillStyle(0x000000, 0.7);
        // @ts-ignore
        this.screenBackground.fillRoundedRect(0, 0, main_1.screenWidth(), main_1.screenHeight());
        this.screenBackground.setInteractive(new Phaser.Geom.Rectangle(0, 0, main_1.screenWidth(), main_1.screenHeight()), Phaser.Geom.Rectangle.Contains);
        this.screenBackground.on('pointerdown', function () {
            _this.destroyPopup();
        });
    };
    GameExit.prototype.generateButtons = function () {
        var _this = this;
        this.yesBtn = this.scene.add.sprite(0, 0, 'menu_yes_btn');
        this.noBtn = this.scene.add.sprite(0, 0, 'menu_no_btn');
        this.yesBtn.setDisplaySize(main_1.screenWidth() / 7, main_1.screenWidth() / 7);
        this.noBtn.setDisplaySize(main_1.screenWidth() / 7, main_1.screenWidth() / 7);
        this.yesBtn.setInteractive();
        this.noBtn.setInteractive();
        this.container.add(this.yesBtn);
        this.container.add(this.noBtn);
        this.yesBtn.setOrigin(-0.5, -1.5);
        this.noBtn.setOrigin(1.5, -1.5);
        this.yesBtn.on('pointerdown', function () {
            // Storing score if it's higher then previous.
            var internalStorage = new InternalStorage_1.InternalStorage();
            internalStorage.storeBestScore(_this.newRound.scoreController.fetchScore());
            internalStorage = null;
            _this.destroyPopup();
            _this.newRound.items.music.destroy();
            _this.newRound.timerController.stopTimer();
            // No need to destroy GameScene. If user rejoins game, views are not recreated
            BusinessViewManager_1.BusinessViewManager.playedCharacters = [];
            _this.newRound.scene.scene.start('MainMenuScene');
            var usernameInput = new UsernameInput_1.UsernameInput();
            usernameInput.updateScore();
            usernameInput = null;
        });
        this.noBtn.on('pointerdown', function () {
            _this.destroyPopup();
        });
    };
    return GameExit;
}());
exports.GameExit = GameExit;
//# sourceMappingURL=GameExit.js.map