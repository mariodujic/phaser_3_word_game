"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("../business/Conditions");
var Globals_1 = require("../utils/Globals");
var StatusManagement_1 = require("../business/StatusManagement");
var Constants_1 = require("../utils/Constants");
var HealthbarController = /** @class */ (function () {
    function HealthbarController(newRound) {
        this._newRound = newRound;
    }
    HealthbarController.prototype.manageHealthbar = function () {
        if (!Conditions_1.Conditions.letterExists && Globals_1.Globals.healthSize > 0 && !Conditions_1.Conditions.isShieldClicked) {
            this._newRound.displayMessageController.message(Constants_1.Constants.MESSAGE_HP_LOST);
            StatusManagement_1.StatusManagement.decreaseHealth(1);
            this.refreshHealthbarView();
        }
    };
    HealthbarController.prototype.refreshHealthbarView = function () {
        // 4 cause of the array index
        // else refreshes health if health goes up
        for (var i = 4; i >= 0; i--) {
            if (i >= Globals_1.Globals.healthSize) {
                this._newRound.items.healthBarView[i].setVisible(false);
            }
            else {
                this._newRound.items.healthBarView[i].setVisible(true);
            }
        }
    };
    HealthbarController.prototype.setHealthAmount = function (amount) {
        Globals_1.Globals.healthSize = amount;
    };
    return HealthbarController;
}());
exports.HealthbarController = HealthbarController;
//# sourceMappingURL=HealthbarController.js.map