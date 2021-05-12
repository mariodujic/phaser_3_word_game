import {IAnimate} from "./IAnimate";
import {Globals} from "../../utils/Globals";

export class AnimationExtraItemTime implements IAnimate {

  // @ts-ignore
  animateView(view: Phaser.GameObjects) {
    view.x = Globals.extraItemTimeViewX + 50;
    const effectInterval = setInterval(() => {
      view.x -= 1.7;
      if (view.x < Globals.extraItemTimeViewX) {
        clearInterval(effectInterval)
      }
    }, 1);
  }
}
