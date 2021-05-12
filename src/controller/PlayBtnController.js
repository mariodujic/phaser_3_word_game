"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("../business/Conditions");
var Globals_1 = require("../utils/Globals");
var ExtraItemDrops_1 = require("../business/ExtraItemDrops");
var Constants_1 = require("../utils/Constants");
var Popup_1 = require("../view/popup/Popup");
var PlayBtnController = /** @class */ (function () {
    function PlayBtnController(scene, newRound) {
        this.scene = scene;
        this.newRound = newRound;
        this.healthBarController = this.newRound.healthBarController;
        this.timerController = this.newRound.timerController;
    }
    PlayBtnController.prototype.onClick = function (unclickedSword, unclickedShield) {
        // After round finish, to start a round it requires user to press a play button
        // This logic has been placed in onClick button function, even tho it's quite simple
        // This logic has been placed here primarily cause of the extra time item. If user clicks
        // on extra time item, countdown continues right away cause of the way TimeBusiness itself is
        // programmed.
        // todo Consider changing TimeBusiness class in order for countdown to semi asychronously fetch view number. con:memory pro:logic
        if (Globals_1.Globals.isRoundOver) {
            Globals_1.Globals.isRoundOver = false;
        }
        if (this.newRound.inputCharacter !== undefined) {
            // Setting a ground for all the functions that are based on these 2 booleans
            Conditions_1.Conditions.wordBusinessContainsLetter(this.newRound.inputCharacter, this.newRound.getWordBusiness());
            Conditions_1.Conditions.isLetterPlayed(this.newRound.inputCharacter, this.newRound.items.wordBusinessView.text);
            // Some of the synchronous controllers upon pressing play button
            this.healthBarController.manageHealthbar();
            this.newRound.items.wordBusinessView.setText(this.newRound.businessViewManager.newWordViewState());
            // Setting a ground for all the functions that are based on these 2 booleans
            // There is a chance a user will be able to get a random drop if letter hasn't been already played
            if (!Conditions_1.Conditions.isLetterAlreadyPlayed) {
                new ExtraItemDrops_1.ExtraItemDrops(this.newRound).randomizeItemDrop();
            }
            // Increasing and decreasing score value depending on a user input
            this.newRound.scoreController.scoreManager();
            this.newRound.soundController.soundEffectsManager();
            this.newRound.weaponController.weaponManagement(unclickedSword, unclickedShield);
        }
        else {
            Popup_1.Popup.show(this.scene, Constants_1.Constants.MESSAGE_SELECT_LETTER, Constants_1.Constants.colors("red"), "middle");
        }
    };
    return PlayBtnController;
}());
exports.PlayBtnController = PlayBtnController;
//# sourceMappingURL=PlayBtnController.js.map