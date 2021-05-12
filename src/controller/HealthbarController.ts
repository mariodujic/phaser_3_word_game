import {Conditions} from "../business/Conditions";
import {Globals} from "../utils/Globals";
import {Round} from "../business/Round";
import {StatusManagement} from "../business/StatusManagement";
import {Logger} from "../utils/Logger";
import {Constants} from "../utils/Constants";

export class HealthbarController {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  public manageHealthbar() {
    if (!Conditions.letterExists && Globals.healthSize > 0 && !Conditions.isShieldClicked) {
      this._newRound.displayMessageController.message(Constants.MESSAGE_HP_LOST);
      StatusManagement.decreaseHealth(1);
      this.refreshHealthbarView();
    }
  }

  public refreshHealthbarView() {
    // 4 cause of the array index
    // else refreshes health if health goes up
    for (let i = 4; i >= 0; i--) {
      if (i >= Globals.healthSize) {
        this._newRound.items.healthBarView[i].setVisible(false);
      } else {
        this._newRound.items.healthBarView[i].setVisible(true);
      }
    }
  }

  public setHealthAmount(amount: number) {
    Globals.healthSize = amount;
  }
}
