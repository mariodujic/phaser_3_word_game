import {ITimer} from "./ITimer";
import {TimerBusiness} from "./TimerBusiness";
import {Round} from "../../business/Round";
import {Globals} from "../../utils/Globals";

export class TimerController implements ITimer {

  private readonly _newRound: Round;
  private timerBusiness: TimerBusiness;

  constructor(newRound: Round) {
    this._newRound = newRound;
    this.timerBusiness = new TimerBusiness(this._newRound);
  }

  public increaseTime(increaseAmount: number) {
    // @ts-ignore
    this._newRound.items.timerView.setText(Number(this._newRound.items.timerView.text) + increaseAmount);
    this.timerBusiness.startCountdown();
    // If user did not press Play Button means countdown did not start in that round
    // According to that, this function enables user to add time to a round even if
    // round is not counting down.
    if (Globals.isRoundOver) {
      this.timerBusiness.stopCountdown();
    }
  }

  resetTimer() {
  }

  startTimer() {
    this.timerBusiness.startCountdown();
  }

  stopTimer() {
    this.timerBusiness.stopCountdown();
  }

}
