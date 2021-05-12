import {Globals} from "../../utils/Globals";
import {Round} from "../../business/Round";

// Counting down time depending on what number is present at a view
let interval;

export class TimerBusiness {

  private readonly _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  startCountdown() {
    const newRound = this._newRound;
    // Resetting timer if it's already running and play button is pressed
    if (interval !== "undefined") {
      this.stopCountdown();
    }
    // If number is higher then global round time set, means time has been increased by an item
    let count = Number(newRound.items.timerView.text) > Globals.roundTime ? Number(newRound.items.timerView.text) : Globals.roundTime;
    interval = setInterval(function () {
      --count;
      newRound.items.timerView.setText(count.toString());
      if (count === 0) {
        clearInterval(interval);
        Globals.healthSize--;
        newRound.healthBarController.refreshHealthbarView();
        // Calling itself if countdown came to 0
        if (Globals.healthSize > 0) {
          // Restarts timer if user still has health
          newRound.timerController.startTimer();
        }
      }
    }, 1000);

  }

  stopCountdown() {
    clearInterval(interval);
  }
}
