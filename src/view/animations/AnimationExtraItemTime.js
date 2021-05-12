"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
var AnimationExtraItemTime = /** @class */ (function () {
    function AnimationExtraItemTime() {
    }
    // @ts-ignore
    AnimationExtraItemTime.prototype.animateView = function (view) {
        view.x = Globals_1.Globals.extraItemTimeViewX + 50;
        var effectInterval = setInterval(function () {
            view.x -= 1.7;
            if (view.x < Globals_1.Globals.extraItemTimeViewX) {
                clearInterval(effectInterval);
            }
        }, 1);
    };
    return AnimationExtraItemTime;
}());
exports.AnimationExtraItemTime = AnimationExtraItemTime;
//# sourceMappingURL=AnimationExtraItemTime.js.map