import {IExtraItems} from "./IExtraItems";
import {Round} from "../../business/Round";
import {Constants} from "../../utils/Constants";
import {Globals} from "../../utils/Globals";
import {Config} from "../../config/Config";

export class IncreaseTimeItem implements IExtraItems {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  useItem(): void {
    this._newRound.timerController.increaseTime(Config.EXTRA_TIME);
    this._newRound.displayMessageController.message(Constants.MESSAGE_ITEM_USED_TIME);
    this._newRound.soundController.extraItemClickedSoundPlay();
    // Item is being removed as soon as user has used the item
    this.removeItem();
  }

  addItem(): void {
    Globals.hasExtraItemAddTime = true;
  }

  removeItem(): void {
    Globals.hasExtraItemAddTime = false;
  }

}
