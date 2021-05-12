import {Constants} from "../../utils/Constants";
import {IncreaseTimeItem} from "./IncreaseTimeItem";
import {Round} from "../../business/Round";
import {ReturnHealthItem} from "./ReturnHealthItem";

export class ExtraItemsFactory {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  public getItem(type: String) {

    if (type === Constants.EXTRA_ITEM_TIME_REF) {
      return new IncreaseTimeItem(this._newRound);
    } else if (type === Constants.EXTRA_ITEM_HEALTH_REF) {
      return new ReturnHealthItem(this._newRound);
    } else {
      return null;
    }
  }
}
