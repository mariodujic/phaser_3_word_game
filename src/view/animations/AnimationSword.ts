import {IAnimate} from "./IAnimate";
import {Globals} from "../../utils/Globals";
import {Config} from "../../config/Config";

export class AnimationSword implements IAnimate {

  // @ts-ignore
  animateView(view: Phaser.GameObjects) {
    view.alpha = 1;
    view.y = Globals.shieldAnimationViewY;
    const effectInterval = setInterval(() => {
      view.y -= Config.ANIM_SPEED;
      view.alpha -= Config.ALPHA_SPEED;
    }, 1);

    const parentTimeout = setTimeout(() => {
      view.alpha = 0;
      clearInterval(effectInterval);
      clearTimeout(parentTimeout);
    }, 3000)
  }


}
