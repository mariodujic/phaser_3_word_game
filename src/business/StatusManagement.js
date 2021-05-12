"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../utils/Globals");
var StatusManagement = /** @class */ (function () {
    function StatusManagement() {
    }
    StatusManagement.decreaseHealth = function (amount) {
        Globals_1.Globals.healthSize = Globals_1.Globals.healthSize - amount;
    };
    StatusManagement.decreaseWeaponAmount = function (weaponType, amount) {
        weaponType === 'sword' ? Globals_1.Globals.swordAmount = Globals_1.Globals.swordAmount - amount :
            Globals_1.Globals.shieldAmount = Globals_1.Globals.shieldAmount - amount;
    };
    return StatusManagement;
}());
exports.StatusManagement = StatusManagement;
//# sourceMappingURL=StatusManagement.js.map