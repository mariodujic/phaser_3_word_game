import {Globals} from "../utils/Globals";
import {Round} from "./Round";
import {Constants} from "../utils/Constants";
import {Config} from "../config/Config";

export class ExtraItemDrops {

  private _newRound: Round;

  constructor(newRound: Round) {
    this._newRound = newRound;
  }

  // Lower number increases changes of user getting the extra item
  private readonly _maxValue = Config.CHANCE_OF_ITEM_DROP;

  public randomizeItemDrop() {
    const randNum = Math.floor(Math.random() * this._maxValue) + 1;
    switch (randNum) {
      case 1:
        if (!Globals.hasExtraItemAddTime) {
          Globals.hasExtraItemAddTime = true;
          this._newRound.displayMessageController.message(Constants.MESSAGE_ITEM_RECEIVED_TIME);
          this._newRound.animationFactory.createAnimation(Constants.EXTRA_ITEM_TIME_REF).animateView(this._newRound.items.extraItemAddTime);
          // Receiving item sound
          this._newRound.soundController.extraItemReceivedSoundPlay();
        }
        break;
      case 2:
        if (!Globals.hasExtraItemRecoverHealth) {
          Globals.hasExtraItemRecoverHealth = true;
          this._newRound.displayMessageController.message(Constants.MESSAGE_ITEM_RECEIVED_HP);
          this._newRound.animationFactory.createAnimation(Constants.EXTRA_ITEM_HEALTH_REF).animateView(this._newRound.items.extraItemRecoverFullHealth);
          // Receiving item sound
          this._newRound.soundController.extraItemReceivedSoundPlay();
        }
        break;
    }
  }
}
