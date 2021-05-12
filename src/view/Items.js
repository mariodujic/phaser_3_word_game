"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../utils/Globals");
var Items = /** @class */ (function () {
    function Items() {
        this._keyButtons = [];
        this._keyContainers = [];
    }
    Object.defineProperty(Items.prototype, "exitButton", {
        get: function () {
            return this._exitButton;
        },
        set: function (value) {
            this._exitButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldAmountView", {
        get: function () {
            return this._shieldAmountView;
        },
        set: function (value) {
            this._shieldAmountView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordAmountView", {
        get: function () {
            return this._swordAmountView;
        },
        set: function (value) {
            this._swordAmountView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "music", {
        get: function () {
            return this._music;
        },
        set: function (value) {
            this._music = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "keyboardPressSound", {
        get: function () {
            return this._keyboardPressSound;
        },
        set: function (value) {
            this._keyboardPressSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldEnabledSound", {
        get: function () {
            return this._shieldEnabledSound;
        },
        set: function (value) {
            this._shieldEnabledSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordHitSound", {
        get: function () {
            return this._swordHitSound;
        },
        set: function (value) {
            this._swordHitSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldHitSound", {
        get: function () {
            return this._shieldHitSound;
        },
        set: function (value) {
            this._shieldHitSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "extraItemClickedSound", {
        get: function () {
            return this._extraItemClickedSound;
        },
        set: function (value) {
            this._extraItemClickedSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "extraItemReceivedSound", {
        get: function () {
            return this._extraItemReceivedSound;
        },
        set: function (value) {
            this._extraItemReceivedSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "keyButtons", {
        get: function () {
            return this._keyButtons;
        },
        set: function (value) {
            this._keyButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "keyContainers", {
        get: function () {
            return this._keyContainers;
        },
        set: function (value) {
            this._keyContainers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "roundWinSound", {
        get: function () {
            return this._roundWinSound;
        },
        set: function (value) {
            this._roundWinSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "roundLoseSound", {
        get: function () {
            return this._roundLoseSound;
        },
        set: function (value) {
            this._roundLoseSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "wrongAnswerSound", {
        get: function () {
            return this._wrongAnswerSound;
        },
        set: function (value) {
            this._wrongAnswerSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "correctAnswerSound", {
        get: function () {
            return this._correctAnswerSound;
        },
        set: function (value) {
            this._correctAnswerSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "infoDisplayBoardContainer", {
        get: function () {
            return this._infoDisplayBoardContainer;
        },
        set: function (value) {
            this._infoDisplayBoardContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "wordDescriptionContainer", {
        get: function () {
            return this._wordDescriptionContainer;
        },
        set: function (value) {
            this._wordDescriptionContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "timerViewContainer", {
        get: function () {
            return this._timerViewContainer;
        },
        set: function (value) {
            this._timerViewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldAnimationViewContainer", {
        get: function () {
            return this._shieldAnimationViewContainer;
        },
        set: function (value) {
            this._shieldAnimationViewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordAnimationViewContainer", {
        get: function () {
            return this._swordAnimationViewContainer;
        },
        set: function (value) {
            this._swordAnimationViewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "secretWordContainer", {
        get: function () {
            return this._secretWordContainer;
        },
        set: function (value) {
            this._secretWordContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "extraItemRecoverFullHealth", {
        get: function () {
            return this._extraItemRecoverFullHealth;
        },
        set: function (value) {
            this._extraItemRecoverFullHealth = value;
            Globals_1.Globals.extraItemHealthViewX = this._extraItemRecoverFullHealth.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "extraItemAddTime", {
        get: function () {
            return this._extraItemAddTime;
        },
        set: function (value) {
            this._extraItemAddTime = value;
            Globals_1.Globals.extraItemTimeViewX = this.extraItemAddTime.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldAnimationView", {
        get: function () {
            return this._shieldAnimationView;
        },
        set: function (value) {
            this._shieldAnimationView = value;
            Globals_1.Globals.shieldAnimationViewY = this._shieldAnimationView.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordAnimationView", {
        get: function () {
            return this._swordAnimationView;
        },
        set: function (value) {
            this._swordAnimationView = value;
            Globals_1.Globals.swordAnimationViewY = this._swordAnimationView.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "scoreAnimationView", {
        get: function () {
            return this._scoreAnimationView;
        },
        set: function (value) {
            this._scoreAnimationView = value;
            Globals_1.Globals.scoreAnimationViewX = this._scoreAnimationView.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "scoreView", {
        get: function () {
            return this._scoreView;
        },
        set: function (value) {
            this._scoreView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordEnabledSound", {
        get: function () {
            return this._swordEnabledSound;
        },
        set: function (value) {
            this._swordEnabledSound = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "timerView", {
        get: function () {
            return this._timerView;
        },
        set: function (value) {
            this._timerView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "wordDescriptionView", {
        get: function () {
            return this._wordDescriptionView;
        },
        set: function (value) {
            this._wordDescriptionView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "playBtn", {
        get: function () {
            return this._playBtn;
        },
        set: function (value) {
            this._playBtn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "healthBarView", {
        get: function () {
            return this._healthBarView;
        },
        set: function (value) {
            this._healthBarView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "warningTextDisplay", {
        get: function () {
            return this._warningTextDisplay;
        },
        set: function (value) {
            this._warningTextDisplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "wordBusinessView", {
        get: function () {
            return this._wordBusinessView;
        },
        set: function (value) {
            this._wordBusinessView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "swordImage", {
        get: function () {
            return this._swordImage;
        },
        set: function (value) {
            this._swordImage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "shieldImage", {
        get: function () {
            return this._shieldImage;
        },
        set: function (value) {
            this._shieldImage = value;
        },
        enumerable: true,
        configurable: true
    });
    return Items;
}());
exports.Items = Items;
//# sourceMappingURL=Items.js.map