"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Style_1 = require("../Style");
var main_1 = require("../../main");
var Constants_1 = require("../../utils/Constants");
var BusinessViewManager_1 = require("../../business/BusinessViewManager");
var Globals_1 = require("../../utils/Globals");
var Config_1 = require("../../config/Config");
var UsernameInput_1 = require("../dom/UsernameInput");
var InternalStorage_1 = require("../../service/InternalStorage");
var LosingDialog = /** @class */ (function () {
    function LosingDialog(newRound) {
        this.newRound = newRound;
        this.usernameInput = new UsernameInput_1.UsernameInput();
    }
    LosingDialog.prototype.show = function () {
        var _this = this;
        // Text
        this.scoreMessage = this.newRound.scene.add.text(0, 0, "Your score:", Style_1.Style.scoreMessage());
        this.scoreMessage.setShadow(0, 4, Constants_1.Constants.colors("black"), 2, true, true);
        this.scoreNumber = this.newRound.scene.add.text(0, 0, "10", Style_1.Style.general(true, main_1.screenWidth() / 9, Config_1.Config.MAIN_FONTS, Constants_1.Constants.colors("clean_white")));
        this.scoreNumber.setShadow(0, 4, Constants_1.Constants.colors("black"), 2, true, true);
        this.scoreNumber.setText(Globals_1.Globals.score);
        // Buttons
        this.playAgainBtn = this.newRound.scene.add.sprite(0, 0, 'losing_popup_repeat_btn');
        this.playAgainBtn.setDisplaySize(main_1.screenWidth() / 3.3, main_1.screenWidth() / 5.5);
        this.playAgainBtn.setInteractive();
        this.playAgainText = this.newRound.scene.add.text(0, 0, "REPEAT", Style_1.Style.general(true, main_1.screenWidth() / 18, Config_1.Config.SIDE_MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        this.playAgainText.setShadow(0, 4, Constants_1.Constants.colors("black"), 2, true, true);
        this.playAgainContainer = this.newRound.scene.add.container(main_1.screenWidth() * 0.20, main_1.screenWidth() * 0.05);
        this.playAgainContainer.add(this.playAgainBtn);
        this.playAgainContainer.add(this.playAgainText);
        this.playAgainText.setOrigin(0.5, 0.5);
        this.returnToMainMenuBtn = this.newRound.scene.add.sprite(0, 0, 'losing_popup_menu_btn');
        this.returnToMainMenuBtn.setDisplaySize(main_1.screenWidth() / 3.3, main_1.screenWidth() / 5.5);
        this.returnToMainMenuBtn.setInteractive();
        this.returnToMainMenuText = this.newRound.scene.add.text(0, 0, "MENU", Style_1.Style.general(true, main_1.screenWidth() / 18, Config_1.Config.SIDE_MENU_FONTS, Constants_1.Constants.colors("clean_white")));
        this.returnToMainMenuText.setShadow(0, 4, Constants_1.Constants.colors("black"), 2, true, true);
        this.returnToMainMenuContainer = this.newRound.scene.add.container(main_1.screenWidth() * -0.20, main_1.screenWidth() * 0.05);
        this.returnToMainMenuContainer.add(this.returnToMainMenuBtn);
        this.returnToMainMenuContainer.add(this.returnToMainMenuText);
        this.returnToMainMenuText.setOrigin(0.5, 0.5);
        // Images
        this.backgroundImg = this.newRound.scene.add.sprite(0, -main_1.screenWidth() / 20, 'losing_popup_flag');
        this.backgroundImg.setDisplaySize(main_1.screenWidth() * 0.8, main_1.screenWidth() * 0.35);
        this.losingScreenContainer = this.newRound.scene.add.container(0, 0);
        this.losingScreenContainer.add(this.backgroundImg);
        this.losingScreenContainer.add(this.scoreMessage);
        this.losingScreenContainer.add(this.scoreNumber);
        this.losingScreenContainer.setPosition(main_1.screenWidth() / 2 - this.losingScreenContainer.width / 2, main_1.screenHeight() / 2.7 - this.losingScreenContainer.height / 2);
        this.scoreMessage.setOrigin(0.5, -2.5);
        this.scoreNumber.setOrigin(0.5, -1.95);
        // Containers
        this.btnContainer = this.newRound.scene.add.container(main_1.screenWidth() / 2, this.losingScreenContainer.y + this.scoreNumber.height * 4);
        this.btnContainer.add(this.returnToMainMenuContainer);
        this.btnContainer.add(this.playAgainContainer);
        this.playAgainBtn.on('pointerdown', function () {
            _this.newRound.restartRound();
            _this.destroy();
        });
        this.returnToMainMenuBtn.on('pointerdown', function () {
            // Destroying popup views that were dynamically created
            _this.destroy();
            _this.newRound.items.music.destroy();
            // todo check if this belongs to a better class
            BusinessViewManager_1.BusinessViewManager.playedCharacters = [];
            // No need to destroy GameScene. If user rejoins game, views are not recreated
            _this.newRound.scene.scene.start('MainMenuScene');
        });
        this.showUsernameInput();
    };
    // Destroying popup views
    LosingDialog.prototype.destroy = function () {
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
    };
    LosingDialog.prototype.showUsernameInput = function () {
        console.log(InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME));
        // If user does not have username, html dom element will pop up too.
        if (InternalStorage_1.InternalStorage.loadData(Constants_1.Constants.REF_USERNAME) === null) {
            this.usernameInput.inputFieldVisibility(true);
        }
    };
    LosingDialog.prototype.hideUsernameInput = function () {
        if (this.usernameInput.inputField.value !== "") {
            InternalStorage_1.InternalStorage.storeData(Constants_1.Constants.REF_USERNAME, this.usernameInput.inputField.value);
            this.usernameInput.resetInputFieldValue();
        }
        this.usernameInput.inputFieldVisibility(false);
    };
    return LosingDialog;
}());
exports.LosingDialog = LosingDialog;
//# sourceMappingURL=LosingDialog.js.map