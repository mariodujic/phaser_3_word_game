"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
var ItemAttributes = /** @class */ (function () {
    function ItemAttributes() {
        this.width = main_1.screenWidth();
        this.height = main_1.screenHeight();
        // Weapon size
        var swordMaxSize = this.width * 0.3;
        var swordScale = 0.3;
        this._swordSize = this.width * swordScale > swordMaxSize ? swordMaxSize : this.width * swordScale;
        // Play button size
        var playBtnMaxW = this.width * 0.35;
        var playBtnMaxH = this.width * 0.22;
        var playBtnScaleWidth = 0.35;
        var playBtnScaleHeight = 0.21;
        var playBtnWidth = this.width * playBtnScaleWidth > playBtnMaxW ? playBtnMaxW : this.width * playBtnScaleWidth;
        var playBtnHeight = this.width * playBtnScaleHeight > playBtnMaxH ? playBtnMaxH : this.width * playBtnScaleHeight;
        this._playBtnSize = [playBtnWidth, playBtnHeight];
    }
    ItemAttributes.prototype.getWeaponSize = function () {
        return this._swordSize;
    };
    ItemAttributes.prototype.getPlayBtnSize = function () {
        return this._playBtnSize;
    };
    return ItemAttributes;
}());
exports.ItemAttributes = ItemAttributes;
//# sourceMappingURL=ItemAttributes.js.map