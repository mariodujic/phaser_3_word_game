"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimateScore_1 = require("./AnimateScore");
var AnimationSword_1 = require("./AnimationSword");
var AnimationShield_1 = require("./AnimationShield");
var Constants_1 = require("../../utils/Constants");
var AnimationExtraItemHealth_1 = require("./AnimationExtraItemHealth");
var AnimationExtraItemTime_1 = require("./AnimationExtraItemTime");
var AnimateFactory = /** @class */ (function () {
    function AnimateFactory() {
    }
    AnimateFactory.prototype.createAnimation = function (type) {
        if (type === 'score') {
            return new AnimateScore_1.AnimateScore();
        }
        else if (type === 'sword') {
            return new AnimationSword_1.AnimationSword();
        }
        else if (type === 'shield') {
            return new AnimationShield_1.AnimationShield();
        }
        else if (type === Constants_1.Constants.EXTRA_ITEM_HEALTH_REF) {
            return new AnimationExtraItemHealth_1.AnimationExtraItemHealth();
        }
        else if (type === Constants_1.Constants.EXTRA_ITEM_TIME_REF) {
            return new AnimationExtraItemTime_1.AnimationExtraItemTime();
        }
        else {
            return null;
        }
    };
    return AnimateFactory;
}());
exports.AnimateFactory = AnimateFactory;
//# sourceMappingURL=AnimateFactory.js.map