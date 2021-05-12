"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("../../business/Conditions");
var Globals_1 = require("../../utils/Globals");
var ISounds_1 = require("./blueprint/ISounds");
var SoundController = /** @class */ (function () {
    function SoundController(newRound) {
        this.newRound = newRound;
    }
    SoundController.backgroundMusicShuffle = function (songArray) {
        return songArray[Math.floor(Math.random() * songArray.length)];
    };
    // Played on Play button press
    // Sorted by the importance so sounds are not doubled. Meaning if game ends only win sound will play
    // and not correct answer sound
    SoundController.prototype.soundEffectsManager = function () {
        var isWordGuessed = this.newRound.items.wordBusinessView.text == this.newRound.wordBusiness;
        if (isWordGuessed) {
            ISounds_1.ISounds.playSound(this.newRound.items.roundWinSound);
        }
        else if (Conditions_1.Conditions.isSwordClicked && !Conditions_1.Conditions.letterExists) {
            ISounds_1.ISounds.playSound(this.newRound.items.swordHitSound);
        }
        else if (Conditions_1.Conditions.isShieldClicked) {
            ISounds_1.ISounds.playSound(this.newRound.items.shieldHitSound);
        }
        else if (Globals_1.Globals.healthSize == 0) {
            ISounds_1.ISounds.playSound(this.newRound.items.roundLoseSound);
        }
        else if (Conditions_1.Conditions.letterExists && !Conditions_1.Conditions.isLetterAlreadyPlayed && !isWordGuessed) {
            ISounds_1.ISounds.playSound(this.newRound.items.correctAnswerSound);
        }
        else if (!Conditions_1.Conditions.letterExists && Globals_1.Globals.healthSize != 0 && !Conditions_1.Conditions.isSwordClicked && !Conditions_1.Conditions.isShieldClicked
            || !Conditions_1.Conditions.isLetterAlreadyPlayed) {
            ISounds_1.ISounds.playSound(this.newRound.items.wrongAnswerSound);
        }
    };
    // Played on extra item button press
    SoundController.prototype.extraItemReceivedSoundPlay = function () {
        ISounds_1.ISounds.playSound(this.newRound.items.extraItemReceivedSound);
    };
    // Played on extra item button press
    SoundController.prototype.extraItemClickedSoundPlay = function () {
        ISounds_1.ISounds.playSound(this.newRound.items.extraItemClickedSound);
    };
    SoundController.prototype.swordSelected = function () {
        ISounds_1.ISounds.playSound(this.newRound.items.swordEnabledSound);
    };
    SoundController.prototype.shieldSelected = function () {
        ISounds_1.ISounds.playSound(this.newRound.items.shieldEnabledSound);
    };
    SoundController.prototype.keyboardPress = function () {
        ISounds_1.ISounds.playSound(this.newRound.items.keyboardPressSound);
    };
    return SoundController;
}());
exports.SoundController = SoundController;
//# sourceMappingURL=SoundController.js.map