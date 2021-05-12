"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../utils/Globals");
var Conditions_1 = require("../business/Conditions");
var BusinessViewManager_1 = require("../business/BusinessViewManager");
var ViewBehaviour = /** @class */ (function () {
    function ViewBehaviour(newRound) {
        this.newRound = newRound;
    }
    ViewBehaviour.prototype.roundStartView = function () {
        Globals_1.Globals.healthSize = 5;
        Globals_1.Globals.swordAmount = 2;
        Globals_1.Globals.shieldAmount = 2;
        Globals_1.Globals.roundTime = 30;
        Globals_1.Globals.hasExtraItemAddTime = false;
        Globals_1.Globals.hasExtraItemRecoverHealth = false;
        Conditions_1.Conditions.isShieldClicked = false;
        Conditions_1.Conditions.isSwordClicked = false;
        this.newRound.items.swordAmountView.setText(Globals_1.Globals.swordAmount);
        this.newRound.items.shieldAmountView.setText(Globals_1.Globals.shieldAmount);
    };
    ViewBehaviour.prototype.restartRoundView = function () {
        BusinessViewManager_1.BusinessViewManager.playedCharacters = [];
        this.newRound.keyboardController.pressed("");
        this.roundStartView();
        this.newRound.healthBarController.refreshHealthbarView();
        this.newRound.items.swordImage.setVisible(true);
        this.newRound.items.shieldImage.setVisible(true);
        this.newRound.items.playBtn.setVisible(true);
        this.newRound.items.wordDescriptionView.setVisible(true);
        this.newRound.items.wordBusinessView.setVisible(true);
        this.newRound.items.warningTextDisplay.setVisible(true);
        this.newRound.items.timerView.setVisible(true);
        this.newRound.items.scoreView.setVisible(true);
        this.newRound.items.shieldAmountView.setVisible(true);
        this.newRound.items.swordAmountView.setVisible(true);
        this.newRound.items.exitButton.setVisible(true);
        this.newRound.items.timerView.setText(Globals_1.Globals.roundTime.toString());
        this.newRound.items.wordBusinessView.setText(this.newRound.businessViewManager.newWordViewState());
        this.newRound.items.wordDescriptionView.setText(this.newRound.descriptionBusiness);
        for (var i in this.newRound.items.keyContainers) {
            this.newRound.items.keyContainers[i].setVisible(true);
        }
    };
    ViewBehaviour.prototype.roundEndView = function () {
        this.newRound.items.swordImage.setVisible(false);
        this.newRound.items.shieldImage.setVisible(false);
        this.newRound.items.playBtn.setVisible(false);
        this.newRound.items.wordDescriptionView.setVisible(false);
        this.newRound.items.timerView.setVisible(false);
        this.newRound.items.wordBusinessView.setText("");
        this.newRound.items.wordBusinessView.setVisible(false);
        this.newRound.items.warningTextDisplay.setVisible(false);
        this.newRound.items.scoreView.setVisible(false);
        this.newRound.items.shieldAmountView.setVisible(false);
        this.newRound.items.swordAmountView.setVisible(false);
        this.newRound.items.exitButton.setVisible(false);
        this.newRound.displayMessageController.eraseMessages();
        this.newRound.timerController.stopTimer();
        //this.newRound.items.totalScoreNmb.setText(Globals.score);
        this.newRound.inputCharacter = undefined;
        for (var i in this.newRound.items.keyContainers) {
            this.newRound.items.keyContainers[i].setVisible(false);
        }
        Globals_1.Globals.isRoundOver = true;
    };
    ViewBehaviour.prototype.disableInteractiveView = function () {
        this.newRound.items.exitButton.removeInteractive();
        this.newRound.items.playBtn.removeInteractive();
        this.newRound.items.swordImage.removeInteractive();
        this.newRound.items.shieldImage.removeInteractive();
    };
    ViewBehaviour.prototype.enableInteractiveView = function () {
        this.newRound.items.exitButton.setInteractive();
        this.newRound.items.playBtn.setInteractive();
        this.newRound.items.swordImage.setInteractive();
        this.newRound.items.shieldImage.setInteractive();
    };
    return ViewBehaviour;
}());
exports.ViewBehaviour = ViewBehaviour;
//# sourceMappingURL=ViewBehaviour.js.map