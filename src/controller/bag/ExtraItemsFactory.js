"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../../utils/Constants");
var IncreaseTimeItem_1 = require("./IncreaseTimeItem");
var ReturnHealthItem_1 = require("./ReturnHealthItem");
var ExtraItemsFactory = /** @class */ (function () {
    function ExtraItemsFactory(newRound) {
        this._newRound = newRound;
    }
    ExtraItemsFactory.prototype.getItem = function (type) {
        if (type === Constants_1.Constants.EXTRA_ITEM_TIME_REF) {
            return new IncreaseTimeItem_1.IncreaseTimeItem(this._newRound);
        }
        else if (type === Constants_1.Constants.EXTRA_ITEM_HEALTH_REF) {
            return new ReturnHealthItem_1.ReturnHealthItem(this._newRound);
        }
        else {
            return null;
        }
    };
    return ExtraItemsFactory;
}());
exports.ExtraItemsFactory = ExtraItemsFactory;
//# sourceMappingURL=ExtraItemsFactory.js.map