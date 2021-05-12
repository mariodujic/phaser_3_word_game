import {IAnimate} from "./IAnimate";
import {AnimateScore} from "./AnimateScore";
import {AnimationSword} from "./AnimationSword";
import {AnimationShield} from "./AnimationShield";
import {Constants} from "../../utils/Constants";
import {AnimationExtraItemHealth} from "./AnimationExtraItemHealth";
import {AnimationExtraItemTime} from "./AnimationExtraItemTime";

export class AnimateFactory {

  public createAnimation(type: string): IAnimate {
    if (type === 'score') {
      return new AnimateScore();
    } else if (type === 'sword') {
      return new AnimationSword();
    } else if (type === 'shield') {
      return new AnimationShield();
    } else if (type === Constants.EXTRA_ITEM_HEALTH_REF) {
      return new AnimationExtraItemHealth();
    } else if (type === Constants.EXTRA_ITEM_TIME_REF) {
      return new AnimationExtraItemTime();
    } else {
      return null;
    }
  }
}
