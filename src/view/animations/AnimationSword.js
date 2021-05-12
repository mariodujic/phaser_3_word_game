"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
var Config_1 = require("../../config/Config");
var AnimationSword = /** @class */ (function () {
    function AnimationSword() {
    }
    // @ts-ignore
    AnimationSword.prototype.animateView = function (view) {
        view.alpha = 1;
        view.y = Globals_1.Globals.shieldAnimationViewY;
        var effectInterval = setInterval(function () {
            view.y -= Config_1.Config.ANIM_SPEED;
            view.alpha -= Config_1.Config.ALPHA_SPEED;
        }, 1);
        var parentTimeout = setTimeout(function () {
            view.alpha = 0;
            clearInterval(effectInterval);
            clearTimeout(parentTimeout);
        }, 3000);
    };
    return AnimationSword;
}());
exports.AnimationSword = AnimationSword;
//# sourceMappingURL=AnimationSword.js.map