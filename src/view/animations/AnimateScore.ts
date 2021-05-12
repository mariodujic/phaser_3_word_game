import {IAnimate} from "./IAnimate";
import {Globals} from "../../utils/Globals";
import {Config} from "../../config/Config";

export class AnimateScore implements IAnimate {

  // @ts-ignore
  animateView(view: Phaser.GameObjects) {
    view.alpha = 1;
    view.x = Globals.scoreAnimationViewX;
    const effectInterval = setInterval(() => {
      view.x += Config.ANIM_SPEED;
      view.alpha -= Config.ALPHA_SPEED;
      if (view.alpha < 0.009) {
        clearInterval(effectInterval);
        view.alpha = 0;
      }
    }, 5);
  }
}
