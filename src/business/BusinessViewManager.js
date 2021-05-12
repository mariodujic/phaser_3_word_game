"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("./Conditions");
var Globals_1 = require("../utils/Globals");
var Config_1 = require("../config/Config");
var BusinessViewManager = /** @class */ (function () {
    function BusinessViewManager(newRound) {
        this._newRound = newRound;
    }
    Object.defineProperty(BusinessViewManager, "wordCurrentState", {
        get: function () {
            return this._wordCurrentState;
        },
        set: function (value) {
            this._wordCurrentState = value;
        },
        enumerable: true,
        configurable: true
    });
    BusinessViewManager.wordBusinessState = function (wordBusiness) {
        // Initializing variable that will be a state of our word in a view
        var businessWordState = "";
        // Adding selected character a a player character arrayList
        // Pushing " " if new word has empty character. Logic of separating 1 string
        // into multiple words while still keeping it 1 string large
        if (BusinessViewManager.playedCharacters.length === 0) {
            if (Conditions_1.Conditions.hasMultipleWords(wordBusiness)) {
                BusinessViewManager.playedCharacters.push(" ");
            }
        }
        console.log("Played characters: " + BusinessViewManager.playedCharacters);
        // Looping all player letters and business word while revealing existing letters
        for (var i = 0; i < wordBusiness.length; i++) {
            var x = ".";
            if (BusinessViewManager.playedCharacters.indexOf(wordBusiness.charAt(i)) > -1) {
                x = wordBusiness.charAt(i);
            }
            else {
                x = Config_1.Config.HID_CHAR;
            }
            // Adding belonging character to a final business word string
            businessWordState += x;
        }
        this.wordCurrentState = businessWordState;
        return businessWordState;
    };
    BusinessViewManager.prototype.newWordViewState = function () {
        if (Conditions_1.Conditions.isSwordClicked && Conditions_1.Conditions.letterExists && !Conditions_1.Conditions.isLetterAlreadyPlayed) {
            BusinessViewManager.addBonusCharacter(this._newRound.inputCharacter, this._newRound.getWordBusiness());
        }
        this._newRound.wordBusinessState = BusinessViewManager.wordBusinessState(this._newRound.getWordBusiness());
        if (this._newRound.inputCharacter !== undefined && !Globals_1.Globals.isRoundOver) {
            // Adding played character to a round played characters array.
            // We are initializing hidden characters with "" character.
            if (this._newRound.inputCharacter !== "") {
                BusinessViewManager.playedCharacters.push(this._newRound.inputCharacter);
                this._newRound.timerController.startTimer();
            }
        }
        return BusinessViewManager.wordBusinessState(this._newRound.getWordBusiness());
    };
    // Adding another character to a playedCharacters array if sword is being used
    BusinessViewManager.addBonusCharacter = function (character, wordBusiness) {
        var bonusCharIndexArray = [];
        for (var i = 0; i < wordBusiness.length; i++) {
            if (this.wordCurrentState !== undefined) {
                if (this.wordCurrentState.charAt(i) === Config_1.Config.HID_CHAR && wordBusiness.charAt(i) !== character) {
                    bonusCharIndexArray.push(i);
                }
            }
        }
        var bonusCharacter = wordBusiness.charAt(bonusCharIndexArray[Math.floor(Math.random() * bonusCharIndexArray.length)]);
        this.playedCharacters.push(bonusCharacter);
    };
    BusinessViewManager.playedCharacters = [];
    return BusinessViewManager;
}());
exports.BusinessViewManager = BusinessViewManager;
//# sourceMappingURL=BusinessViewManager.js.map