import {IExtraItems} from "./IExtraItems";
import {Globals} from "../../utils/Globals";
import {Round} from "../../business/Round";
import {Constants} from "../../utils/Constants";

export class ReturnHealthItem implements IExtraItems {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  addItem(): void {
    Globals.hasExtraItemRecoverHealth = true;
  }

  removeItem(): void {
    Globals.hasExtraItemRecoverHealth = false;
  }

  useItem(): void {
    this._newRound.healthBarController.setHealthAmount(5);
    this._newRound.healthBarController.refreshHealthbarView();
    this._newRound.displayMessageController.message(Constants.MESSAGE_ITEM_USED_HP);
    this._newRound.soundController.extraItemClickedSoundPlay();
    // Item is being removed as soon as user has used the item
    this.removeItem();
  }
}
