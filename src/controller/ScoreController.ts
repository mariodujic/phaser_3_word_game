import {Round} from "../business/Round";
import {Conditions} from "../business/Conditions";
import {Globals} from "../utils/Globals";
import {Constants} from "../utils/Constants";

export class ScoreController {

  private readonly newRound: Round;

  constructor(newRound: Round) {
    this.newRound = newRound;
  }

  public scoreManager() {
    if (Conditions.letterExists && !Conditions.isLetterAlreadyPlayed) {
      this.newRound.scoreController.increaseScore(10);
    } else if (!Conditions.letterExists) {
      this.newRound.scoreController.decreaseScore(3);
    }
    Globals.score = this.fetchScore();
  }

  private increaseScore(increaseValue: number) {
    this.refreshScoreView(this.fetchScore() + increaseValue);
    // Score side animation if correct letter
    this.newRound.items.scoreAnimationView.setText(`+${increaseValue}`);
    this.newRound.items.scoreAnimationView.setColor(Constants.colors("green"));
    this.newRound.animationFactory.createAnimation('score').animateView(this.newRound.items.scoreAnimationView);

  }

  private decreaseScore(decreaseValue: number) {
    this.refreshScoreView(this.fetchScore() >= 3 ? this.fetchScore() - decreaseValue : this.fetchScore());
    // Score side animation if wrong letter
    this.newRound.items.scoreAnimationView.setText(`-${decreaseValue}`);
    this.newRound.items.scoreAnimationView.setColor(Constants.colors("red"));
    this.newRound.animationFactory.createAnimation('score').animateView(this.newRound.items.scoreAnimationView);
  }

  private refreshScoreView(newValue: number) {
    this.newRound.items.scoreView.setText(`Score: ${newValue}`);
  }

  public resetScore() {
    this.newRound.items.scoreView.setText(`Score: ${0}`)
  }

  public fetchScore(): number {
    const scoreViewText = this.newRound.items.scoreView.text;
    let score = "";
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
  }
}
