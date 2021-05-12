"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
var AnimationExtraItemHealth = /** @class */ (function () {
    function AnimationExtraItemHealth() {
    }
    // @ts-ignore
    AnimationExtraItemHealth.prototype.animateView = function (view) {
        view.x = Globals_1.Globals.extraItemHealthViewX + 50;
        var effectInterval = setInterval(function () {
            view.x -= 1.7;
            if (view.x < Globals_1.Globals.extraItemHealthViewX) {
                clearInterval(effectInterval);
            }
        }, 1);
    };
    return AnimationExtraItemHealth;
}());
exports.AnimationExtraItemHealth = AnimationExtraItemHealth;
//# sourceMappingURL=AnimationExtraItemHealth.js.map