"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerBusiness_1 = require("./TimerBusiness");
var Globals_1 = require("../../utils/Globals");
var TimerController = /** @class */ (function () {
    function TimerController(newRound) {
        this._newRound = newRound;
        this.timerBusiness = new TimerBusiness_1.TimerBusiness(this._newRound);
    }
    TimerController.prototype.increaseTime = function (increaseAmount) {
        // @ts-ignore
        this._newRound.items.timerView.setText(Number(this._newRound.items.timerView.text) + increaseAmount);
        this.timerBusiness.startCountdown();
        // If user did not press Play Button means countdown did not start in that round
        // According to that, this function enables user to add time to a round even if
        // round is not counting down.
        if (Globals_1.Globals.isRoundOver) {
            this.timerBusiness.stopCountdown();
        }
    };
    TimerController.prototype.resetTimer = function () {
    };
    TimerController.prototype.startTimer = function () {
        this.timerBusiness.startCountdown();
    };
    TimerController.prototype.stopTimer = function () {
        this.timerBusiness.stopCountdown();
    };
    return TimerController;
}());
exports.TimerController = TimerController;
//# sourceMappingURL=TimerController.js.map