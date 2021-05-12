"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../../utils/Constants");
var Globals_1 = require("../../utils/Globals");
var Config_1 = require("../../config/Config");
var IncreaseTimeItem = /** @class */ (function () {
    function IncreaseTimeItem(newRound) {
        this._newRound = newRound;
    }
    IncreaseTimeItem.prototype.useItem = function () {
        this._newRound.timerController.increaseTime(Config_1.Config.EXTRA_TIME);
        this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_ITEM_USED_TIME);
        this._newRound.soundController.extraItemClickedSoundPlay();
        // Item is being removed as soon as user has used the item
        this.removeItem();
    };
    IncreaseTimeItem.prototype.addItem = function () {
        Globals_1.Globals.hasExtraItemAddTime = true;
    };
    IncreaseTimeItem.prototype.removeItem = function () {
        Globals_1.Globals.hasExtraItemAddTime = false;
    };
    return IncreaseTimeItem;
}());
exports.IncreaseTimeItem = IncreaseTimeItem;
//# sourceMappingURL=IncreaseTimeItem.js.map