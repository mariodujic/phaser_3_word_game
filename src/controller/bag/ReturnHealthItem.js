"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
var Constants_1 = require("../../utils/Constants");
var ReturnHealthItem = /** @class */ (function () {
    function ReturnHealthItem(newRound) {
        this._newRound = newRound;
    }
    ReturnHealthItem.prototype.addItem = function () {
        Globals_1.Globals.hasExtraItemRecoverHealth = true;
    };
    ReturnHealthItem.prototype.removeItem = function () {
        Globals_1.Globals.hasExtraItemRecoverHealth = false;
    };
    ReturnHealthItem.prototype.useItem = function () {
        this._newRound.healthBarController.setHealthAmount(5);
        this._newRound.healthBarController.refreshHealthbarView();
        this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_ITEM_USED_HP);
        this._newRound.soundController.extraItemClickedSoundPlay();
        // Item is being removed as soon as user has used the item
        this.removeItem();
    };
    return ReturnHealthItem;
}());
exports.ReturnHealthItem = ReturnHealthItem;
//# sourceMappingURL=ReturnHealthItem.js.map