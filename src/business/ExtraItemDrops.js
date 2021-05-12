"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../utils/Globals");
var Constants_1 = require("../utils/Constants");
var Config_1 = require("../config/Config");
var ExtraItemDrops = /** @class */ (function () {
    function ExtraItemDrops(newRound) {
        // Lower number increases changes of user getting the extra item
        this._maxValue = Config_1.Config.CHANCE_OF_ITEM_DROP;
        this._newRound = newRound;
    }
    ExtraItemDrops.prototype.randomizeItemDrop = function () {
        var randNum = Math.floor(Math.random() * this._maxValue) + 1;
        switch (randNum) {
            case 1:
                if (!Globals_1.Globals.hasExtraItemAddTime) {
                    Globals_1.Globals.hasExtraItemAddTime = true;
                    this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_ITEM_RECEIVED_TIME);
                    this._newRound.animationFactory.createAnimation(Constants_1.Constants.EXTRA_ITEM_TIME_REF).animateView(this._newRound.items.extraItemAddTime);
                    // Receiving item sound
                    this._newRound.soundController.extraItemReceivedSoundPlay();
                }
                break;
            case 2:
                if (!Globals_1.Globals.hasExtraItemRecoverHealth) {
                    Globals_1.Globals.hasExtraItemRecoverHealth = true;
                    this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_ITEM_RECEIVED_HP);
                    this._newRound.animationFactory.createAnimation(Constants_1.Constants.EXTRA_ITEM_HEALTH_REF).animateView(this._newRound.items.extraItemRecoverFullHealth);
                    // Receiving item sound
                    this._newRound.soundController.extraItemReceivedSoundPlay();
                }
                break;
        }
    };
    return ExtraItemDrops;
}());
exports.ExtraItemDrops = ExtraItemDrops;
//# sourceMappingURL=ExtraItemDrops.js.map