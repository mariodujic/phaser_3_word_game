"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
var Config_1 = require("../../config/Config");
var AnimateScore = /** @class */ (function () {
    function AnimateScore() {
    }
    // @ts-ignore
    AnimateScore.prototype.animateView = function (view) {
        view.alpha = 1;
        view.x = Globals_1.Globals.scoreAnimationViewX;
        var effectInterval = setInterval(function () {
            view.x += Config_1.Config.ANIM_SPEED;
            view.alpha -= Config_1.Config.ALPHA_SPEED;
            if (view.alpha < 0.009) {
                clearInterval(effectInterval);
                view.alpha = 0;
            }
        }, 5);
    };
    return AnimateScore;
}());
exports.AnimateScore = AnimateScore;
//# sourceMappingURL=AnimateScore.js.map