import {IAnimate} from "./IAnimate";
import {Globals} from "../../utils/Globals";

export class AnimationExtraItemHealth implements IAnimate {

  // @ts-ignore
  animateView(view: Phaser.GameObjects) {
    view.x = Globals.extraItemHealthViewX + 50;
    const effectInterval = setInterval(() => {
      view.x -= 1.7;
      if (view.x < Globals.extraItemHealthViewX) {
        clearInterval(effectInterval);
      }
    }, 1);
  }
}
