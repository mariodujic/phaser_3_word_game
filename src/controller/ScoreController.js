"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conditions_1 = require("../business/Conditions");
var Globals_1 = require("../utils/Globals");
var Constants_1 = require("../utils/Constants");
var ScoreController = /** @class */ (function () {
    function ScoreController(newRound) {
        this.newRound = newRound;
    }
    ScoreController.prototype.scoreManager = function () {
        if (Conditions_1.Conditions.letterExists && !Conditions_1.Conditions.isLetterAlreadyPlayed) {
            this.newRound.scoreController.increaseScore(10);
        }
        else if (!Conditions_1.Conditions.letterExists) {
            this.newRound.scoreController.decreaseScore(3);
        }
        Globals_1.Globals.score = this.fetchScore();
    };
    ScoreController.prototype.increaseScore = function (increaseValue) {
        this.refreshScoreView(this.fetchScore() + increaseValue);
        // Score side animation if correct letter
        this.newRound.items.scoreAnimationView.setText("+" + increaseValue);
        this.newRound.items.scoreAnimationView.setColor(Constants_1.Constants.colors("green"));
        this.newRound.animationFactory.createAnimation('score').animateView(this.newRound.items.scoreAnimationView);
    };
    ScoreController.prototype.decreaseScore = function (decreaseValue) {
        this.refreshScoreView(this.fetchScore() >= 3 ? this.fetchScore() - decreaseValue : this.fetchScore());
        // Score side animation if wrong letter
        this.newRound.items.scoreAnimationView.setText("-" + decreaseValue);
        this.newRound.items.scoreAnimationView.setColor(Constants_1.Constants.colors("red"));
        this.newRound.animationFactory.createAnimation('score').animateView(this.newRound.items.scoreAnimationView);
    };
    ScoreController.prototype.refreshScoreView = function (newValue) {
        this.newRound.items.scoreView.setText("Score: " + newValue);
    };
    ScoreController.prototype.resetScore = function () {
        this.newRound.items.scoreView.setText("Score: " + 0);
    };
    ScoreController.prototype.fetchScore = function () {
        var scoreViewText = this.newRound.items.scoreView.text;
        var score = "";
        switch (scoreViewText.length) {
            case 8:
                score = scoreViewText.substring(scoreViewText.length - 2, scoreViewText.length);
                break;
            case 9:
                score = scoreViewText.substring(scoreViewText.length - 3, scoreViewText.length);
                break;
            case 10:
                score = scoreViewText.substring(scoreViewText.length - 4, scoreViewText.length);
                break;
            case 11:
                score = scoreViewText.substring(scoreViewText.length - 5, scoreViewText.length);
                break;
            default:
                score = scoreViewText.substring(scoreViewText.length - 6, scoreViewText.length);
        }
        return Number(score);
    };
    return ScoreController;
}());
exports.ScoreController = ScoreController;
//# sourceMappingURL=ScoreController.js.map