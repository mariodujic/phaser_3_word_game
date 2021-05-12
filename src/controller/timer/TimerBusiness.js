"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Globals_1 = require("../../utils/Globals");
// Counting down time depending on what number is present at a view
var interval;
var TimerBusiness = /** @class */ (function () {
    function TimerBusiness(newRound) {
        this._newRound = newRound;
    }
    TimerBusiness.prototype.startCountdown = function () {
        var newRound = this._newRound;
        // Resetting timer if it's already running and play button is pressed
        if (interval !== "undefined") {
            this.stopCountdown();
        }
        // If number is higher then global round time set, means time has been increased by an item
        var count = Number(newRound.items.timerView.text) > Globals_1.Globals.roundTime ? Number(newRound.items.timerView.text) : Globals_1.Globals.roundTime;
        interval = setInterval(function () {
            --count;
            newRound.items.timerView.setText(count.toString());
            if (count === 0) {
                clearInterval(interval);
                Globals_1.Globals.healthSize--;
                newRound.healthBarController.refreshHealthbarView();
                // Calling itself if countdown came to 0
                if (Globals_1.Globals.healthSize > 0) {
                    // Restarts timer if user still has health
                    newRound.timerController.startTimer();
                }
            }
        }, 1000);
    };
    TimerBusiness.prototype.stopCountdown = function () {
        clearInterval(interval);
    };
    return TimerBusiness;
}());
exports.TimerBusiness = TimerBusiness;
//# sourceMappingURL=TimerBusiness.js.map