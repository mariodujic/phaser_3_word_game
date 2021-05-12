"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions = /** @class */ (function () {
    function Conditions() {
    }
    Conditions.hasMultipleWords = function (businessWord) {
        return !!businessWord.match(" ");
    };
    Object.defineProperty(Conditions, "isLetterAlreadyPlayed", {
        get: function () {
            return this._isLetterAlreadyPlayed;
        },
        set: function (value) {
            this._isLetterAlreadyPlayed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conditions, "isSwordClicked", {
        get: function () {
            return this._isSwordClicked;
        },
        set: function (value) {
            this._isSwordClicked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conditions, "isShieldClicked", {
        get: function () {
            return this._isShieldClicked;
        },
        set: function (value) {
            this._isShieldClicked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conditions, "letterExists", {
        get: function () {
            return this._letterExists;
        },
        set: function (value) {
            this._letterExists = value;
        },
        enumerable: true,
        configurable: true
    });
    Conditions.wordBusinessContainsLetter = function (character, wordBusiness) {
        this.letterExists = wordBusiness.search(character) > -1;
    };
    Conditions.isLetterPlayed = function (character, wordBusinessState) {
        this.isLetterAlreadyPlayed = wordBusinessState.search(character) > -1;
    };
    return Conditions;
}());
exports.Conditions = Conditions;
//# sourceMappingURL=Conditions.js.map